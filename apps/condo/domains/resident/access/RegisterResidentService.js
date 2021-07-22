/**
 * Generated by `createservice property.RegisterResidentService --type mutations`
 */
const { throwAuthenticationError } = require('@condo/domains/common/utils/apolloErrorFormatter')
const { RESIDENT } = require('@condo/domains/user/constants/common')

async function canRegisterResident ({ authentication: { item: user } }) {
    if (!user) throwAuthenticationError()
    if (user.type === RESIDENT) return true
    if (user.isAdmin) return true
    return false
}

/*
  Rules are logical functions that used for list access, and may return a boolean (meaning
  all or no items are available) or a set of filters that limit the available items.
*/
module.exports = {
    canRegisterResident,
}