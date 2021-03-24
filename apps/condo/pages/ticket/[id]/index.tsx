import { Col, Row, Space, Typography, Tag } from 'antd'
import get from 'lodash/get'
import React, { useEffect, useMemo, useState } from 'react'
import { ArrowLeftOutlined, EditFilled, FilePdfFilled } from '@ant-design/icons'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useIntl } from '@core/next/intl'
import styled from '@emotion/styled'
import { Button } from '../../../components/Button'
import { PageContent, PageWrapper } from '../../../containers/BaseLayout'
import LoadingOrErrorPage from '../../../containers/LoadingOrErrorPage'
import { Ticket } from '@condo/domains/ticket/utils/clientSchema'
import Link from 'next/link'
import { LinkWithIcon } from '../../../components/LinkWithIcon'
import { TicketStatusSelect } from '../../../components/TicketStatusSelect'
import { colors } from '../../../constants/style'
import { FocusContainer } from '../../../components/FocusContainer'

import {
    formatPhone,
    getTicketCreateMessage,
    getTicketTitleMessage,
} from '../../../utils/ticket'
import { LETTERS_AND_NUMBERS } from '../../../constants/regexps'
import { UserNameField } from '../../../components/UserNameField'

// TODO(Dimitreee):move to global defs
interface IUser {
    name: string
    id?: string
    phone?: string
}

interface ITicketDescriptionFieldProps {
    title?: string
    value?: React.ReactNode
    type?: 'secondary' | 'success' | 'warning' | 'danger'
}

const TicketDescriptionField:React.FC<ITicketDescriptionFieldProps> = ({ title, value, type }) => {
    const intl = useIntl()
    const NotDefinedMessage = intl.formatMessage({ id: 'errors.NotDefined' })

    return (
        <Space direction={'vertical'} size={8}>
            <Typography.Text type={'secondary'}>{title}</Typography.Text>
            <Typography.Text {...{ type }} style={{ fontSize: '16px' }}>{value || NotDefinedMessage}</Typography.Text>
        </Space>
    )
}

interface ITicketUserInfoFieldProps {
    title?: string
    user?: IUser
    hidePersonalData?:boolean
}

const TicketUserInfoField:React.FC<ITicketUserInfoFieldProps> = (props) => {
    const intl = useIntl()
    const NotDefinedMessage = intl.formatMessage({ id: 'errors.NotDefined' })
    const PhoneNotDefinedMessage = intl.formatMessage({ id: 'errors.NotDefinedShort' })
    const PhoneShortMessage = intl.formatMessage({ id: 'errors.PhoneShort' })
    const ShowMessage = intl.formatMessage({ id: 'Show' })
    const HideMessage = intl.formatMessage({ id: 'Hide' })

    const [userInfo, setUserInfo] = useState({
        name: get(props, ['user', 'name']),
        phone: formatPhone(get(props, ['user', 'phone'])),
    })
    const [hidden, setHidden] = useState(props.hidePersonalData)

    useEffect(() => {
        let nextUserName = get(props, ['user', 'name'], '')
        let nextUserPhone = formatPhone(get(props, ['user', 'phone'], ''))

        if (hidden) {
            nextUserName = nextUserName ? nextUserName.replace(LETTERS_AND_NUMBERS, '*') : ''
            nextUserPhone = nextUserPhone ? nextUserPhone.replace(LETTERS_AND_NUMBERS, '*'): ''
        }

        setUserInfo({
            name: nextUserName,
            phone: nextUserPhone,
        })
    }, [hidden])

    const toggleUserInfoVisibility = () => setHidden(!hidden)
    const showPersonalInfoButtonControl = (userInfo.name || userInfo.phone) && props.hidePersonalData

    return (
        <Space direction={'vertical'} size={8}>
            <Typography.Text type={'secondary'}>{props.title}</Typography.Text>
            <Space size={4} direction={'vertical'} style={{ fontSize: '16px' }}>
                {userInfo.name
                    ? (
                        <UserNameField user={{ name: userInfo.name, id: props.user.id }}>
                            {({ name, postfix }) => (
                                <Typography.Text>
                                    <Typography.Text type='success' ellipsis>{name}</Typography.Text>
                                    {postfix && <Typography.Text type='secondary' ellipsis>&nbsp;{postfix}</Typography.Text>}
                                </Typography.Text>
                            )}
                        </UserNameField>
                    )
                    : NotDefinedMessage
                }
                {userInfo.phone
                    ? (
                        <Typography.Text>
                            {PhoneShortMessage} <Typography.Text type={'success'}>{userInfo.phone}</Typography.Text>
                        </Typography.Text>
                    )
                    : `${PhoneShortMessage} ${PhoneNotDefinedMessage}`
                }
                {showPersonalInfoButtonControl && (
                    <span>
                        (
                        <Button type={'inlineLink'} onClick={toggleUserInfoVisibility}>
                            {String(hidden ? ShowMessage : HideMessage).toLowerCase()}
                        </Button>
                        )
                    </span>
                )}
            </Space>
        </Space>
    )
}

const EmergencyTag = styled(Tag)`
  font-size: 16px;
  line-height: 24px;
`

const TicketIdPage = () => {
    const intl = useIntl()
    const ServerErrorMessage = intl.formatMessage({ id: 'ServerError' })
    const UpdateMessage = intl.formatMessage({ id: 'Edit' })
    const PrintMessage = intl.formatMessage({ id: 'Print' })
    const TicketInfoMessage = intl.formatMessage({ id: 'Problem' })
    const ClientInfoMessage = intl.formatMessage({ id: 'pages.condo.ticket.title.ClientInfo' })
    const AddressMessage = intl.formatMessage({ id: 'field.Address' })
    const FullNameMessage = intl.formatMessage({ id: 'field.FullName' })
    const EmailMessage = intl.formatMessage({ id: 'field.EMail' })
    const SourceMessage = intl.formatMessage({ id: 'pages.condo.ticket.field.Source' })
    const ExecutorMessage = intl.formatMessage({ id: 'field.Executor' })
    const ClassifierMessage = intl.formatMessage({ id: 'Classifier' })
    const AssigneeMessage = intl.formatMessage({ id: 'field.Responsible' })
    const TicketAuthorMessage = intl.formatMessage({ id: 'Author' })
    const EmergencyMessage = intl.formatMessage({ id: 'Emergency' })

    const router = useRouter()
    const { query: { id } } = router

    const { refetch, loading, obj: ticket, error } = Ticket.useObject({ where: { id } })
    const TicketTitleMessage = useMemo(() => getTicketTitleMessage(intl, ticket), [ticket])
    const TicketCreationDate = useMemo(() => getTicketCreateMessage(intl, ticket), [ticket])

    useEffect(() => {
        refetch()
    },[])

    if (error || loading || !ticket) {
        return (
            <LoadingOrErrorPage title={TicketTitleMessage} loading={loading} error={ServerErrorMessage}/>
        )
    }

    const ticketAddress = get(ticket, ['property', 'address']) + (ticket.unitName && (', ' + ticket.unitName))
    const isEmergency = get(ticket, 'isEmergency')

    return (
        <>
            <Head>
                <title>{TicketTitleMessage}</title>
            </Head>
            <PageWrapper>
                <PageContent>
                    <Row gutter={[0, 40]}>
                        <Col span={24}>
                            <Row>
                                <Col span={12}>
                                    <Row align={'top'}>
                                        <Space size={8} direction={'vertical'}>
                                            <Space align={'start'}>
                                                <Typography.Title level={1} style={{ margin: 0 }}>{TicketTitleMessage}</Typography.Title>
                                                {isEmergency && <EmergencyTag color={'red'}>{EmergencyMessage.toLowerCase()}</EmergencyTag>}
                                            </Space>
                                            <Typography.Text>
                                                <Typography.Text type='secondary'>{TicketCreationDate}, {TicketAuthorMessage} </Typography.Text>
                                                <UserNameField user={get(ticket, ['createdBy'])}>
                                                    {({ name, postfix }) => (
                                                        <Typography.Text>
                                                            <Typography.Text type='success' ellipsis>{name}</Typography.Text>
                                                            {postfix && <Typography.Text type='secondary' ellipsis>&nbsp;{postfix}</Typography.Text>}
                                                        </Typography.Text>
                                                    )}
                                                </UserNameField>
                                            </Typography.Text>
                                        </Space>
                                    </Row>
                                </Col>
                                <Col span={12}>
                                    <Row justify={'end'}>
                                        <TicketStatusSelect ticket={ticket} onUpdate={refetch} loading={loading}/>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={24}>
                            <Row>
                                <Col span={6}>
                                    <TicketDescriptionField
                                        title={SourceMessage}
                                        value={get(ticket, ['source', 'name'])}
                                    />
                                </Col>
                                <Col span={6}>
                                    <TicketDescriptionField
                                        title={ClassifierMessage}
                                        value={get(ticket, ['classifier', 'name'])}
                                    />
                                </Col>
                                <Col span={6}>
                                    <TicketUserInfoField
                                        title={ExecutorMessage}
                                        user={get(ticket, ['executor'])}
                                    />
                                </Col>
                                <Col span={6}>
                                    <TicketUserInfoField
                                        title={AssigneeMessage}
                                        user={get(ticket, ['assignee'])}
                                    />
                                </Col>
                            </Row>
                        </Col>
                        <FocusContainer>
                            <Col span={24}>
                                <Row gutter={[0, 24]}>
                                    <Col span={24}>
                                        <Typography.Title level={5}>{ClientInfoMessage}</Typography.Title>
                                    </Col>
                                    <Col span={24}>
                                        <Row gutter={[12,12]}>
                                            <Col span={6}>
                                                <TicketDescriptionField
                                                    title={AddressMessage}
                                                    value={ticketAddress}
                                                    type={'success'}
                                                />
                                            </Col>
                                            <Col span={6}>
                                                <TicketUserInfoField
                                                    hidePersonalData
                                                    title={FullNameMessage}
                                                    user={{
                                                        name: ticket.clientName,
                                                        phone: ticket.clientPhone,
                                                    }}
                                                />
                                            </Col>
                                            <Col span={6}>
                                                <TicketDescriptionField title={EmailMessage} value={ticket.clientEmail}/>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col span={24}>
                                        <Typography.Title level={5}>{TicketInfoMessage}</Typography.Title>
                                    </Col>
                                    <Col span={24}>
                                        <Typography.Text style={{ fontSize: '24px' }}>{ticket.details}</Typography.Text>
                                    </Col>
                                </Row>
                            </Col>
                        </FocusContainer>
                        <Col span={24}>
                            <Space size={40}>
                                <Link href={`/ticket/${ticket.id}/update`}>
                                    <Button
                                        color={'green'}
                                        type={'sberPrimary'}
                                        secondary
                                        icon={<EditFilled />}
                                    >
                                        {UpdateMessage}
                                    </Button>
                                </Link>
                                <Button
                                    type={'sberPrimary'}
                                    icon={<FilePdfFilled />}
                                    href={`/ticket/${ticket.id}/pdf`}
                                    target={'_blank'}
                                    loading={loading}
                                    disabled={loading}
                                    secondary
                                >
                                    {PrintMessage}
                                </Button>
                            </Space>
                        </Col>
                    </Row>
                </PageContent>
            </PageWrapper>
        </>
    )
}

const HeaderAction = () => {
    const intl = useIntl()
    const AllTicketsMessage = intl.formatMessage({ id: 'menu.AllTickets' })

    return (
        <LinkWithIcon
            icon={<ArrowLeftOutlined style={{ color: colors.white }}/>}
            path={'/ticket/'}
        >
            {AllTicketsMessage}
        </LinkWithIcon>
    )
}

TicketIdPage.headerAction = <HeaderAction/>

export default TicketIdPage