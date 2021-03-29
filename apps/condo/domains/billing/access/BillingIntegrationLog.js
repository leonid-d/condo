/**
 * Generated by `createschema billing.BillingIntegrationLog 'context:Relationship:BillingIntegrationOrganizationContext:CASCADE; type:Text; message:Text; meta:Json'`
 */

async function canReadBillingIntegrationLogs ({ authentication: { item: user } }) {
    if (!user) return false
    if (user.isAdmin) return {}
    return {
        // TODO(codegen): write canReadBillingIntegrationLogs logic!
    }
}

async function canManageBillingIntegrationLogs ({ authentication: { item: user }, operation, itemId }) {
    if (!user) return false
    if (user.isAdmin) return true
    if (operation === 'create') {
        // TODO(codegen): write canManageBillingIntegrationLogs create logic!
        return true
    } else if (operation === 'update') {
        // TODO(codegen): write canManageBillingIntegrationLogs update logic!
        return true
    }
    return false
}

/*
  Rules are logical functions that used for list access, and may return a boolean (meaning
  all or no items are available) or a set of filters that limit the available items.
*/
module.exports = {
    canReadBillingIntegrationLogs,
    canManageBillingIntegrationLogs,
}