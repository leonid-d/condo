/**
 * Generated by `createschema billing.BillingProperty 'context:Relationship:BillingIntegrationOrganizationContext:CASCADE; importId?:Text; bindingId:Text; address:Text; raw:Json; meta:Json'`
 */

async function canReadBillingProperties ({ authentication: { item: user } }) {
    if (!user) return false
    if (user.isAdmin) return {}
    return {
        // TODO(codegen): write canReadBillingProperties logic!
    }
}

async function canManageBillingProperties ({ authentication: { item: user }, operation, itemId }) {
    if (!user) return false
    if (user.isAdmin) return true
    if (operation === 'create') {
        // TODO(codegen): write canManageBillingProperties create logic!
        return true
    } else if (operation === 'update') {
        // TODO(codegen): write canManageBillingProperties update logic!
        return true
    }
    return false
}

/*
  Rules are logical functions that used for list access, and may return a boolean (meaning
  all or no items are available) or a set of filters that limit the available items.
*/
module.exports = {
    canReadBillingProperties,
    canManageBillingProperties,
}
