/**
 * Generated by `createschema ticket.TicketComment 'ticket:Relationship:Ticket:CASCADE; user:Relationship:User:CASCADE; content:Text;'`
 */

const { Text, Relationship } = require('@keystonejs/fields')
const { GQLListSchema } = require('@core/keystone/schema')
const { historical, versioned, uuided, tracked, softDeleted } = require('@core/keystone/plugins')
const { SENDER_FIELD, DV_FIELD } = require('@condo/domains/common/schema/fields')
const access = require('@condo/domains/ticket/access/TicketComment')


const TicketComment = new GQLListSchema('TicketComment', {
    schemaDoc: 'Textual comment for tickets',
    fields: {
        dv: DV_FIELD,
        sender: SENDER_FIELD,

        ticket: {
            schemaDoc: 'Related ticket of the comment',
            type: Relationship,
            ref: 'Ticket',
            isRequired: true,
            knexOptions: { isNotNullable: true }, // Required relationship only!
            kmigratorOptions: { null: false, on_delete: 'models.CASCADE' },
        },

        // This field will take part in business logic and should be declared here explicitly.
        // That's why `createdBy` field, generated by `tracked` plugin, is not used for association of a comment with ticket.
        user: {
            schemaDoc: 'User, who created the comment',
            type: Relationship,
            ref: 'User',
            isRequired: true,
            knexOptions: { isNotNullable: true }, // Required relationship only!
            kmigratorOptions: { null: false, on_delete: 'models.CASCADE' },
        },

        content: {
            schemaDoc: 'Plain text content',
            type: Text,
            isRequired: true,
        },

    },
    plugins: [uuided(), versioned(), tracked(), softDeleted(), historical()],
    access: {
        read: access.canReadTicketComments,
        create: access.canManageTicketComments,
        update: access.canManageTicketComments,
        delete: false,
        auth: true,
    },
})

module.exports = {
    TicketComment,
}
