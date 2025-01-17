/**
 * Generated by `createschema billing.BillingIntegration name:Text;`
 */

const { getRandomString } = require('@core/keystone/test.utils')
const { makeClientWithNewRegisteredAndLoggedInUser } = require('@condo/domains/user/utils/testSchema')
const { makeLoggedInAdminClient, makeClient, UUID_RE, DATETIME_RE } = require('@core/keystone/test.utils')

const { BillingIntegration, createTestBillingIntegration, updateTestBillingIntegration } = require('@condo/domains/billing/utils/testSchema')

describe('BillingIntegration', () => {
    test('admin: create BillingIntegration', async () => {
        const admin = await makeLoggedInAdminClient()
        const [integration, attrs] = await createTestBillingIntegration(admin)
        expect(integration).toEqual(expect.objectContaining({
            name: attrs.name,
        }))
    })

    test('user: create BillingIntegration', async () => {
        const client = await makeClientWithNewRegisteredAndLoggedInUser()
        try {
            await createTestBillingIntegration(client)
        } catch (e) {
            expect(e.errors[0]).toMatchObject({
                'message': 'You do not have access to this resource',
                'name': 'AccessDeniedError',
                'path': ['obj'],
            })
            expect(e.data).toEqual({ 'obj': null })
        }
    })

    test('anonymous: create BillingIntegration', async () => {
        const client = await makeClient()
        try {
            await createTestBillingIntegration(client)
        } catch (e) {
            expect(e.errors[0]).toMatchObject({
                'message': 'You do not have access to this resource',
                'name': 'AccessDeniedError',
                'path': ['obj'],
            })
            expect(e.data).toEqual({ 'obj': null })
        }
    })

    test('user: read BillingIntegration', async () => {
        const admin = await makeLoggedInAdminClient()
        const [obj, attrs] = await createTestBillingIntegration(admin)

        const client = await makeClientWithNewRegisteredAndLoggedInUser()
        const objs = await BillingIntegration.getAll(client, {}, { sortBy: ['updatedAt_DESC'] })

        expect(objs.length >= 1).toBeTruthy()
        expect(objs).toEqual(expect.arrayContaining([
            expect.objectContaining({
                id: obj.id,
                sender: attrs.sender,
                createdBy: expect.objectContaining({ id: admin.user.id }),
                updatedBy: expect.objectContaining({ id: admin.user.id }),
                createdAt: obj.createdAt,
                updatedAt: obj.updatedAt,
                name: attrs.name,
            }),
        ]))
    })

    test('anonymous: read BillingIntegration', async () => {
        const client = await makeClient()

        try {
            await BillingIntegration.getAll(client)
        } catch (e) {
            expect(e.errors[0]).toMatchObject({
                'message': 'You do not have access to this resource',
                'name': 'AccessDeniedError',
                'path': ['objs'],
            })
            expect(e.data).toEqual({ 'objs': null })
        }
    })

    test('user: update BillingIntegration', async () => {
        const admin = await makeLoggedInAdminClient()
        const [objCreated] = await createTestBillingIntegration(admin)

        const client = await makeClientWithNewRegisteredAndLoggedInUser()
        const payload = { name: getRandomString() }
        try {
            await updateTestBillingIntegration(client, objCreated.id, payload)
        } catch (e) {
            expect(e.errors[0]).toMatchObject({
                'message': 'You do not have access to this resource',
                'name': 'AccessDeniedError',
                'path': ['obj'],
            })
            expect(e.data).toEqual({ 'obj': null })
        }
    })

    test('anonymous: update BillingIntegration', async () => {
        const admin = await makeLoggedInAdminClient()
        const [objCreated] = await createTestBillingIntegration(admin)

        const client = await makeClient()
        const payload = {}
        try {
            await updateTestBillingIntegration(client, objCreated.id, payload)
        } catch (e) {
            expect(e.errors[0]).toMatchObject({
                'message': 'You do not have access to this resource',
                'name': 'AccessDeniedError',
                'path': ['obj'],
            })
            expect(e.data).toEqual({ 'obj': null })
        }
    })

    test('user: delete BillingIntegration', async () => {
        const admin = await makeLoggedInAdminClient()
        const [objCreated] = await createTestBillingIntegration(admin)

        const client = await makeClientWithNewRegisteredAndLoggedInUser()
        try {
            await BillingIntegration.delete(client, objCreated.id)
        } catch (e) {
            expect(e.errors[0]).toMatchObject({
                'message': 'You do not have access to this resource',
                'name': 'AccessDeniedError',
                'path': ['obj'],
            })
            expect(e.data).toEqual({ 'obj': null })
        }
    })

    test('anonymous: delete BillingIntegration', async () => {
        const admin = await makeLoggedInAdminClient()
        const [objCreated] = await createTestBillingIntegration(admin)

        const client = await makeClient()
        try {
            await BillingIntegration.delete(client, objCreated.id)
        } catch (e) {
            expect(e.errors[0]).toMatchObject({
                'message': 'You do not have access to this resource',
                'name': 'AccessDeniedError',
                'path': ['obj'],
            })
            expect(e.data).toEqual({ 'obj': null })
        }
    })
})
