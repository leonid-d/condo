/**
 * Generated by `createschema billing.BillingIntegrationOrganizationContext 'integration:Relationship:BillingIntegration:PROTECT; organization:Relationship:Organization:CASCADE; settings:Json; state:Json' --force`
 */

const { Text, Relationship, Integer, Select, Checkbox, DateTimeUtc, Decimal, Password, File } = require('@keystonejs/fields')
const { Json } = require('@core/keystone/fields')
const { GQLListSchema } = require('@core/keystone/schema')
const { historical, versioned, uuided, tracked, softDeleted } = require('@core/keystone/plugins')
const { SENDER_FIELD, DV_FIELD } = require('@condo/domains/common/schema/fields')
const access = require('@condo/domains/billing/access/BillingIntegrationOrganizationContext')


const BillingIntegrationOrganizationContext = new GQLListSchema('BillingIntegrationOrganizationContext', {
    // TODO(codegen): write doc for the BillingIntegrationOrganizationContext domain model!
    schemaDoc: 'TODO DOC!',
    fields: {
        dv: DV_FIELD,
        sender: SENDER_FIELD,

        integration: {
            // TODO(codegen): write doc for BillingIntegrationOrganizationContext.integration field!
            schemaDoc: 'TODO DOC!',
            type: Relationship,
            ref: 'BillingIntegration',
            isRequired: true,
            knexOptions: { isNotNullable: true }, // Required relationship only!
            kmigratorOptions: { null: false, on_delete: 'models.PROTECT' },
        },

        organization: {
            // TODO(codegen): write doc for BillingIntegrationOrganizationContext.organization field!
            schemaDoc: 'TODO DOC!',
            type: Relationship,
            ref: 'Organization',
            isRequired: true,
            knexOptions: { isNotNullable: true }, // Required relationship only!
            kmigratorOptions: { null: false, on_delete: 'models.CASCADE' },
        },

        settings: {
            // TODO(codegen): write doc for BillingIntegrationOrganizationContext.settings field!
            schemaDoc: 'TODO DOC!',
            type: Json,
            isRequired: true,
        },

        state: {
            // TODO(codegen): write doc for BillingIntegrationOrganizationContext.state field!
            schemaDoc: 'TODO DOC!',
            type: Json,
            isRequired: true,
        },

    },
    plugins: [uuided(), versioned(), tracked(), softDeleted(), historical()],
    access: {
        read: access.canReadBillingIntegrationOrganizationContexts,
        create: access.canManageBillingIntegrationOrganizationContexts,
        update: access.canManageBillingIntegrationOrganizationContexts,
        delete: false,
        auth: true,
    },
})

module.exports = {
    BillingIntegrationOrganizationContext,
}