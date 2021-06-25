/**
 * Generated by `createschema billing.BillingAccountMeterReading 'context:Relationship:BillingIntegrationOrganizationContext:CASCADE; importId?:Text; property:Relationship:BillingProperty:CASCADE; account:Relationship:BillingAccount:CASCADE; meter:Relationship:BillingAccountMeter:CASCADE; period:CalendarDay; value1:Integer; value2:Integer; value3:Integer; date:DateTimeUtc; raw:Json; meta:Json' --force`
 */

const { makeLoggedInAdminClient, makeClient, UUID_RE, DATETIME_RE } = require('@core/keystone/test.utils')

const { BillingAccountMeterReading, createTestBillingAccountMeterReading, updateTestBillingAccountMeterReading } = require('@condo/domains/billing/utils/testSchema')
const { expectToThrowAccessDeniedErrorToObj, expectToThrowAccessDeniedErrorToObjects } = require('../../common/utils/testSchema')

describe('BillingAccountMeterReading', () => {
    test.skip('user: create BillingAccountMeterReading', async () => {
        const client = await makeClient()  // TODO(codegen): use truly useful client!

        const [obj, attrs] = await createTestBillingAccountMeterReading(client)  // TODO(codegen): write 'user: create BillingAccountMeterReading' test
        expect(obj.id).toMatch(UUID_RE)
        expect(obj.dv).toEqual(1)
        expect(obj.sender).toEqual(attrs.sender)
        expect(obj.v).toEqual(1)
        expect(obj.newId).toEqual(null)
        expect(obj.deletedAt).toEqual(null)
        expect(obj.createdBy).toEqual(expect.objectContaining({ id: client.user.id }))
        expect(obj.updatedBy).toEqual(expect.objectContaining({ id: client.user.id }))
        expect(obj.createdAt).toMatch(DATETIME_RE)
        expect(obj.updatedAt).toMatch(DATETIME_RE)
    })

    test.skip('anonymous: create BillingAccountMeterReading', async () => {
        const client = await makeClient()
        await expectToThrowAccessDeniedErrorToObj(async () => {
            await createTestBillingAccountMeterReading(client)  // TODO(codegen): check the 'anonymous: create BillingAccountMeterReading' test!
        })
    })

    test.skip('user: read BillingAccountMeterReading', async () => {
        const admin = await makeLoggedInAdminClient()
        const [obj, attrs] = await createTestBillingAccountMeterReading(admin)  // TODO(codegen): check create function!

        const client = await makeClient()  // TODO(codegen): use truly useful client!
        const objs = await BillingAccountMeterReading.getAll(client)

        // TODO(codegen): check 'user: read BillingAccountMeterReading' test!
        expect(objs).toHaveLength(1)
        expect(objs[0].id).toMatch(obj.id)
        expect(objs[0].dv).toEqual(1)
        expect(objs[0].sender).toEqual(attrs.sender)
        expect(objs[0].v).toEqual(1)
        expect(objs[0].newId).toEqual(null)
        expect(objs[0].deletedAt).toEqual(null)
        expect(objs[0].createdBy).toEqual(expect.objectContaining({ id: client.user.id }))
        expect(objs[0].updatedBy).toEqual(expect.objectContaining({ id: client.user.id }))
        expect(objs[0].createdAt).toMatch(obj.createdAt)
        expect(objs[0].updatedAt).toMatch(obj.updatedAt)
    })

    test.skip('anonymous: read BillingAccountMeterReading', async () => {
        const client = await makeClient()

        await expectToThrowAccessDeniedErrorToObjects(async () => {
            await BillingAccountMeterReading.getAll(client)
        })
    })

    test.skip('user: update BillingAccountMeterReading', async () => {
        const admin = await makeLoggedInAdminClient()
        const [objCreated] = await createTestBillingAccountMeterReading(admin)  // TODO(codegen): check create function!

        const client = await makeClient()  // TODO(codegen): use truly useful client!
        const payload = {}  // TODO(codegen): change the 'user: update BillingAccountMeterReading' payload
        const [objUpdated, attrs] = await updateTestBillingAccountMeterReading(client, objCreated.id, payload)

        // TODO(codegen): white checks for 'user: update BillingAccountMeterReading' test
        expect(objUpdated.id).toEqual(objCreated.id)
        expect(objUpdated.dv).toEqual(1)
        expect(objUpdated.sender).toEqual(attrs.sender)
        expect(objUpdated.v).toEqual(2)
        expect(objUpdated.newId).toEqual(null)
        expect(objUpdated.deletedAt).toEqual(null)
        expect(objUpdated.createdBy).toEqual(expect.objectContaining({ id: client.user.id }))
        expect(objUpdated.updatedBy).toEqual(expect.objectContaining({ id: client.user.id }))
        expect(objUpdated.createdAt).toMatch(DATETIME_RE)
        expect(objUpdated.updatedAt).toMatch(DATETIME_RE)
        expect(objUpdated.updatedAt).not.toEqual(objUpdated.createdAt)
    })

    test.skip('anonymous: update BillingAccountMeterReading', async () => {
        const admin = await makeLoggedInAdminClient()
        const [objCreated] = await createTestBillingAccountMeterReading(admin)  // TODO(codegen): check create function!

        const client = await makeClient()
        const payload = {}  // TODO(codegen): change the 'anonymous: update BillingAccountMeterReading' payload
        await expectToThrowAccessDeniedErrorToObj(async () => {
            await updateTestBillingAccountMeterReading(client, objCreated.id, payload)
        })
    })

    test.skip('user: delete BillingAccountMeterReading', async () => {
        const admin = await makeLoggedInAdminClient()
        const [objCreated] = await createTestBillingAccountMeterReading(admin)  // TODO(codegen): check create function!

        const client = await makeClient()  // TODO(codegen): use truly useful client!
        await expectToThrowAccessDeniedErrorToObj(async () => {
            // TODO(codegen): check 'user: delete BillingAccountMeterReading' test!
            await BillingAccountMeterReading.delete(client, objCreated.id)
        })
    })

    test.skip('anonymous: delete BillingAccountMeterReading', async () => {
        const admin = await makeLoggedInAdminClient()
        const [objCreated] = await createTestBillingAccountMeterReading(admin)  // TODO(codegen): check create function!

        const client = await makeClient()
        await expectToThrowAccessDeniedErrorToObj(async () => {
            // TODO(codegen): check 'anonymous: delete BillingAccountMeterReading' test!
            await BillingAccountMeterReading.delete(client, objCreated.id)
        })
    })
})
