const { NEW_OR_REOPENED_STATUS_TYPE } = require('@condo/domains/ticket/constants')
const { makeLoggedInClient } = require('@condo/domains/user/utils/testSchema')
const { createTestUser } = require('@condo/domains/user/utils/testSchema')
const { makeLoggedInAdminClient } = require('@core/keystone/test.utils')
const { v4: uuid } = require('uuid')
const { createTestTicket } = require('@condo/domains/ticket/utils/testSchema')
const { GET_TICKET_WIDGET_REPORT_DATA } = require('@condo/domains/ticket/gql')
const { makeClient } = require('@core/keystone/test.utils')
const { makeClientWithProperty } = require('@condo/domains/property/utils/testSchema')

describe('TicketReportService', () => {
    describe('User', () => {
        it('can get ticket report with selected organization', async () => {
            const client = await makeClientWithProperty()
            await createTestTicket(client, client.organization, client.property)
            const { data: { result: { data } } } = await client.query(GET_TICKET_WIDGET_REPORT_DATA, {
                data: { userOrganizationId: client.organization.id, periodType: 'week' },
            })
            expect(data).toBeInstanceOf(Array)
            expect(data.length).toBeGreaterThanOrEqual(1)
            const clientTicket = data.find(e => e.statusType === NEW_OR_REOPENED_STATUS_TYPE)
            expect(clientTicket).toBeDefined()
            expect(clientTicket.currentValue).toEqual(1)
            expect(clientTicket.growth).toEqual(0)
        })

        it('can not get ticket report with another organization', async () => {
            const admin = await makeLoggedInAdminClient()
            const [, userAttrs] = await createTestUser(admin)
            const client = await makeLoggedInClient(userAttrs)
            const { errors, data: { result } } = await client.query(GET_TICKET_WIDGET_REPORT_DATA, {
                data: { userOrganizationId: uuid(), periodType: 'week' } }
            )
            expect(errors).toHaveLength(1)
            expect(result).toBeNull()
        })

    })

    describe('Anonymous', () => {
        it('can not read ticket report ', async () => {
            const client = await makeClient()
            const client1 = await makeClientWithProperty()
            const { errors } = await client.query(GET_TICKET_WIDGET_REPORT_DATA, {
                data: { userOrganizationId: client1.organization.id, periodType: 'week' },
            })
            expect(errors).toHaveLength(1)
            expect(errors[0].name).toEqual('AccessDeniedError')
        })
    })
})