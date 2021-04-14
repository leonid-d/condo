/**
 * Generated by `createschema property.Property 'organization:Text; name:Text; address:Text; addressMeta:Json; type:Select:building,village; map?:Json'`
 * In most cases you should not change it by hands
 * Please, don't remove `AUTOGENERATE MARKER`s
 */
const faker = require('faker')

const { generateGQLTestUtils } = require('@condo/domains/common/utils/codegeneration/generate.test.utils')

const { Property: PropertyGQL } = require('@condo/domains/property/gql')

/* AUTOGENERATE MARKER <IMPORT> */

const Property = generateGQLTestUtils(PropertyGQL)

/* AUTOGENERATE MARKER <CONST> */

async function createTestProperty (client, organization, extraAttrs = {}) {
    if (!client) throw new Error('no client')
    if (!organization) throw new Error('no organization')
    const sender = { dv: 1, fingerprint: faker.random.alphaNumeric(8) }
    const name = faker.address.streetAddress(true)
    const address = faker.address.streetAddress(true)
    const addressMeta = {
        dv: 1, city: faker.address.city(), zipCode: faker.address.zipCode(),
        street: faker.address.streetName(), number: faker.address.secondaryAddress(),
        county: faker.address.county(),
        address,
    }
    const attrs = {
        dv: 1,
        sender,
        organization: { connect: { id: organization.id } },
        type: 'building',
        name, address, addressMeta,
        ...extraAttrs,
    }
    const obj = await Property.create(client, attrs)
    return [obj, attrs]
}

async function updateTestProperty (client, id, extraAttrs = {}) {
    if (!client) throw new Error('no client')
    if (!id) throw new Error('no id')
    const sender = { dv: 1, fingerprint: faker.random.alphaNumeric(8) }

    // TODO(codegen): check the updateTestProperty logic for generate fields

    const attrs = {
        dv: 1,
        sender,
        ...extraAttrs,
    }
    const obj = await Property.update(client, id, attrs)
    return [obj, attrs]
}


/* AUTOGENERATE MARKER <FACTORY> */

module.exports = {
    Property, createTestProperty, updateTestProperty,
/* AUTOGENERATE MARKER <EXPORTS> */
}