// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useCallback, useMemo } from 'react'
import { Select, Space, Typography } from 'antd'
import styled from '@emotion/styled'
import { useIntl } from '@core/next/intl'
import { Ticket, TicketStatus } from '@condo/domains/ticket/utils/clientSchema'
import { runMutation } from '@condo/domains/common/utils/mutations.utils'
import { STATUS_SELECT_COLORS } from '@condo/domains/ticket/constants/style'
import { getTicketFormattedLastStatusUpdate, getTicketLabel, sortStatusesByType } from '@condo/domains/ticket/utils/helpers'

const StyledSelect = styled(Select)`
  width: 100%;
  font-weight: 700;
  border-radius: 4px;
`

export const TicketStatusSelect = ({ ticket, onUpdate, ...props }) => {
    const intl = useIntl()
    const FormattedStatusUpdateMessage = useMemo(() => getTicketFormattedLastStatusUpdate(intl, ticket), [ticket])

    const { objs: statuses, loading } = TicketStatus.useObjects()
    const update = Ticket.useUpdate({}, () => onUpdate())

    const updateTicketStatus = useCallback((variables) => runMutation({
        action:() => update(variables, ticket),
        intl,
    }), [ticket])

    const options = useMemo(() => sortStatusesByType(statuses).map((status) => {
        const { value, label, type } = TicketStatus.convertGQLItemToFormSelectState(status)
        const { color } = STATUS_SELECT_COLORS[type]

        return (<Select.Option key={value} value={value} title={label} style={{ color }}>{label}</Select.Option>)
    }), [statuses, ticket])

    const handleChange = useCallback(({ value }) => {
        updateTicketStatus({ status: value, statusUpdatedAt: new Date() })
    }, [ticket])

    const { color, backgroundColor } = STATUS_SELECT_COLORS[ticket.status.type]
    const selectValue = { value: ticket.status.id, label: getTicketLabel(intl, ticket) }

    return (
        <Space size={8} direction={'vertical'} align={'end'}>
            <StyledSelect
                style={{
                    color,
                    backgroundColor,
                }}
                loading={loading}
                onChange={handleChange}
                defaultValue={selectValue}
                value={selectValue}
                bordered={false}
                labelInValue
                {...props}
            >
                {options}
            </StyledSelect>
            <Typography.Text type="warning" style={{ color }}>{FormattedStatusUpdateMessage}</Typography.Text>
        </Space>
    )
}