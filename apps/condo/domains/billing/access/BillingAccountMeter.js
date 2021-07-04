/**
 * Generated by `createschema billing.BillingAccountMeter 'context:Relationship:BillingIntegrationOrganizationContext:CASCADE; importId?:Text; property:Relationship:BillingProperty:CASCADE; account:Relationship:BillingAccount:CASCADE; resource:Relationship:BillingMeterResource:PROTECT; raw:Json; meta:Json'`
 */

const { canReadBillingEntity } = require('../utils/accessSchema')
const { canManageBillingEntityWithContext } = require('../utils/accessSchema')

async function canReadBillingAccountMeters ({ authentication: { item: user } }) {
    return await canReadBillingEntity(user)
}

async function canManageBillingAccountMeters ({ authentication: { item: user }, operation, originalInput, itemId, listKey }) {
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
    canReadBillingAccountMeters,
    canManageBillingAccountMeters,
}


