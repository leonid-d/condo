/**
 * Generated by `createservice property.RegisterResidentService --type mutations`
 */

const { Resident } = require('../utils/testSchema')
const { buildingMapJson } = require('@condo/domains/property/constants/property')
const { registerNewOrganization } = require('@condo/domains/organization/utils/testSchema/Organization')
const { createTestProperty } = require('@condo/domains/property/utils/testSchema')
const { makeClientWithResidentUser } = require('@condo/domains/user/utils/testSchema')
const { makeLoggedInAdminClient, makeClient, UUID_RE } = require('@core/keystone/test.utils')
const { expectToThrowAuthenticationError, expectToThrowAccessDeniedErrorToResult } = require('@condo/domains/common/utils/testSchema')
const { makeClientWithNewRegisteredAndLoggedInUser, makeClientWithStaffUser } = require('@condo/domains/user/utils/testSchema')
const { registerResidentByTestClient } = require('@condo/domains/resident/utils/testSchema')

describe('RegisterResidentService', () => {
    test('can be executed by user with "resident" type', async () => {
        const userClient = await makeClientWithResidentUser()
        const [obj, attrs] = await registerResidentByTestClient(userClient)
        expect(obj.id).toMatch(UUID_RE)
        expect(obj.dv).toEqual(1)
        expect(obj.sender).toEqual(attrs.sender)
        expect(obj.v).toEqual(1)
        expect(obj.address).toEqual(attrs.address)
        expect(obj.addressMeta).toStrictEqual(attrs.addressMeta)
        const [resident] = await Resident.getAll(userClient, { id: obj.id })
        expect(resident.user.id).toEqual(userClient.user.id)
    })

    test('cannot be executed by user', async () => {
        const userClient = await makeClientWithNewRegisteredAndLoggedInUser()
        await expectToThrowAccessDeniedErrorToResult(async () => {
            await registerResidentByTestClient(userClient)
        }, 'result')
    })
 
    test('anonymous: execute', async () => {
        const client = await makeClient()
        await expectToThrowAuthenticationError(async () => {
            await registerResidentByTestClient(client)
        }, 'result')
    })
 
    test('admin: execute', async () => {
        const adminClient = await makeLoggedInAdminClient()
        const [obj, attrs] = await registerResidentByTestClient(adminClient)
        expect(obj.id).toMatch(UUID_RE)
        expect(obj.dv).toEqual(1)
        expect(obj.sender).toEqual(attrs.sender)
        expect(obj.v).toEqual(1)
        expect(obj.address).toEqual(attrs.address)
        expect(obj.addressMeta).toStrictEqual(attrs.addressMeta)
        const [resident] = await Resident.getAll(adminClient, { id: obj.id })
        expect(resident.user.id).toEqual(adminClient.user.id)
    })

    it('connects property with matched address to resident', async () => {
        const adminClient = await makeLoggedInAdminClient()

        const [organization] = await registerNewOrganization(adminClient)
        const [property] = await createTestProperty(adminClient, organization, { map: buildingMapJson })

        const payload = {
            address: property.address,
            addressMeta: property.addressMeta,
        }

        const [obj, attrs] = await registerResidentByTestClient(adminClient, payload)
        expect(obj.id).toMatch(UUID_RE)
        expect(obj.dv).toEqual(1)
        expect(obj.sender).toEqual(attrs.sender)
        expect(obj.v).toEqual(1)
        expect(obj.address).toEqual(attrs.address)
        expect(obj.addressMeta).toStrictEqual(attrs.addressMeta)
        const [resident] = await Resident.getAll(adminClient, { id: obj.id })
        expect(resident.user.id).toEqual(adminClient.user.id)
        expect(resident.property.id).toEqual(property.id)
        expect(resident.organization.id).toEqual(organization.id)
    })

    test('cannot be executed for staff', async () => {
        const staffClient = await makeClientWithStaffUser()
        await expectToThrowAccessDeniedErrorToResult(async () => {
            await registerResidentByTestClient(staffClient)
        })
    })
})