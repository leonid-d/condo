/**
 * Generated by `createservice user.SigninOrRegisterResidentService`
 */
async function canSigninOrRegisterResident ({ authentication: { item: user } }) {
    // Only anonymous can use this mutation
    if (!user) return true
    return false
}

/*
  Rules are logical functions that used for list access, and may return a boolean (meaning
  all or no items are available) or a set of filters that limit the available items.
*/
module.exports = {
    canSigninOrRegisterResident,
}