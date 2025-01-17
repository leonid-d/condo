/**
 * Generated by `createschema billing.BillingMeterResource 'name:Text'`
 */

const { Text, Relationship, Integer, Select, Checkbox, DateTimeUtc, Decimal, Password, File } = require('@keystonejs/fields')
const { Json } = require('@core/keystone/fields')
const { GQLListSchema } = require('@core/keystone/schema')
const { historical, versioned, uuided, tracked, softDeleted } = require('@core/keystone/plugins')
const { SENDER_FIELD, DV_FIELD } = require('@condo/domains/common/schema/fields')
const access = require('@condo/domains/billing/access/BillingMeterResource')


const BillingMeterResource = new GQLListSchema('BillingMeterResource', {
    schemaDoc: 'Meter `resource types`',
    fields: {
        dv: DV_FIELD,
        sender: SENDER_FIELD,

        name: {
            schemaDoc: 'The name of the `resource types`',
            type: Text,
            isRequired: true,
        },
    },
    plugins: [uuided(), versioned(), tracked(), softDeleted(), historical()],
    access: {
        read: access.canReadBillingMeterResources,
        create: access.canManageBillingMeterResources,
        update: access.canManageBillingMeterResources,
        delete: false,
        auth: true,
    },
})

module.exports = {
    BillingMeterResource,
}
