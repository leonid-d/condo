
/**
 * Generated by `createschema billing.BillingAccount 'context:Relationship:BillingIntegrationOrganizationContext:CASCADE; importId?:Text; property:Relationship:BillingProperty:CASCADE; bindingId:Text; number:Text; unit:Text; raw:Json; meta:Json'`
 */
const { canManageBillingEntityWithContext } = require('@condo/domains/billing/utils/accessSchema')
const { canReadBillingEntity } = require('../utils/accessSchema')

async function canReadBillingAccounts ({ authentication: { item: user } }) {
    return await canReadBillingEntity(user)
}

async function canManageBillingAccounts ({ authentication: { item: user }, operation, originalInput, itemId, listKey }) {
    return await canManageBillingEntityWithContext({
        user,
        operation,
        itemId,
        originalInput,
        schemaWithContextName: listKey,
    })
}

/*
  Rules are logical functions that used for list access, and may return a boolean (meaning
  all or no items are available) or a set of filters that limit the available items.
*/
module.exports = {
    canReadBillingAccounts,
    canManageBillingAccounts,
}


