/**
 * Generated by `createschema notification.Message 'organization?:Relationship:Organization:CASCADE; property?:Relationship:Property:CASCADE; ticket?:Relationship:Ticket:CASCADE; user:Relationship:User:CASCADE; type:Text; meta:Json; channels:Json; status:Select:sending,planned,sent,canceled; sendAt:DateTimeUtc;'`
 */

const { Text, Relationship, Integer, Select, Checkbox, DateTimeUtc, CalendarDay, Decimal, Password, File } = require('@keystonejs/fields')
const { Json } = require('@core/keystone/fields')
const { GQLListSchema } = require('@core/keystone/schema')
const { historical, versioned, uuided, tracked, softDeleted } = require('@core/keystone/plugins')
const { SENDER_FIELD, DV_FIELD } = require('@condo/domains/common/schema/fields')
const access = require('@condo/domains/notification/access/Message')
const { LOCALES } = require('@condo/domains/common/constants/locale')


const Message = new GQLListSchema('Message', {
    schemaDoc: 'Notification message',
    fields: {
        dv: DV_FIELD,
        sender: SENDER_FIELD,

        organization: {
            schemaDoc: 'This message is related to some organization. Organization can manage their messages',
            type: Relationship,
            ref: 'Organization',
            kmigratorOptions: { null: true, on_delete: 'models.CASCADE' },
        },

        user: {
            schemaDoc: 'to User',
            type: Relationship,
            ref: 'User',
            isRequired: false,
            kmigratorOptions: { null: true, on_delete: 'models.CASCADE' },
        },

        phone: {
            schemaDoc: 'to Phone',
            type: Text,
            isRequired: false,
        },

        email: {
            schemaDoc: 'to Email',
            type: Text,
            isRequired: false,
        },

        lang: {
            schemaDoc: 'Message status',
            type: Select,
            options: Object.keys(LOCALES).join(','),
            isRequired: true,
        },

        type: {
            schemaDoc: 'Message type',
            type: Text,
            isRequired: true,
        },

        meta: {
            schemaDoc: 'Message context',
            type: Json,
            isRequired: true,
        },

        status: {
            schemaDoc: 'Message status',
            type: Select,
            options: 'sending,planned,sent,canceled',
            isRequired: true,
        },

        sentAt: {
            schemaDoc: 'Sent at time',
            type: DateTimeUtc,
            isRequired: false,
        },
    },
    plugins: [uuided(), versioned(), tracked(), softDeleted(), historical()],
    access: {
        read: access.canReadMessages,
        create: access.canManageMessages,
        update: access.canManageMessages,
        delete: false,
        auth: true,
    },
})

module.exports = {
    Message,
}