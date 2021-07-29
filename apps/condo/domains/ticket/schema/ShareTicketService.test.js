const { createTestTicket } = require('@condo/domains/ticket/utils/testSchema')
const { SHARE_TICKET_MUTATION } = require('@condo/domains/ticket/gql')
const { makeClient } = require('@core/keystone/test.utils')
const { makeClientWithProperty } = require('@condo/domains/property/utils/testSchema')

describe('ShareTicketService', () => {
    describe('User', () => {
        it('can share ticked with same organization', async () => {
            const client = await makeClientWithProperty()
            const [ticket] = await createTestTicket(client, client.organization, client.property)

            const { data: { obj: { status } } } = await client.mutate(SHARE_TICKET_MUTATION, {
                data: { sender: client.userAttrs.sender, users: [client.user.id], ticketId: ticket.id },
            })

            expect(status).toBe('ok')
        })

        it('can not share ticked with another organization', async () => {
            const client = await makeClientWithProperty()
            const client1 = await makeClientWithProperty()
            const [ticket] = await createTestTicket(client, client.organization, client.property)

            const { errors, data }  = await client1.mutate(SHARE_TICKET_MUTATION, {
                data: { sender: client.userAttrs.sender, users: [client.user.id], ticketId: ticket.id },
            })

            expect(errors).toHaveLength(1)
            expect(data).toEqual({ obj: null })
        })
    })

    describe('Anonymous', () => {
        it('can not share ticked', async () => {
            const client = await makeClientWithProperty()
            const client1 = await makeClient()
            const [ticket] = await createTestTicket(client, client.organization, client.property)

            const { errors, data } = await client1.mutate(SHARE_TICKET_MUTATION, {
                data: { sender: client.userAttrs.sender, users: [client.user.id], ticketId: ticket.id },
            })

            expect(errors).toHaveLength(1)
            expect(errors[0].name).toBe('AuthenticationError')
            expect(data).toEqual({ obj: null })
        })
    })
})