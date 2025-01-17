/**
 * Generated by `createschema property.Property 'organization:Text; name:Text; address:Text; addressMeta:Json; type:Select:building,village; map?:Json'`
 * In most cases you should not change it by hands
 * Please, don't remove `AUTOGENERATE MARKER`s
 */

const { generateServerUtils } = require('@condo/domains/common/utils/codegeneration/generate.server.utils')

const { Property: PropertyGQL } = require('@condo/domains/property/gql')

/* AUTOGENERATE MARKER <IMPORT> */

const Property = generateServerUtils(PropertyGQL)
/* AUTOGENERATE MARKER <CONST> */

module.exports = {
    Property,
/* AUTOGENERATE MARKER <EXPORTS> */
}
