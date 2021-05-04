/**
 * Generated by `createschema notification.Message 'organization?:Relationship:Organization:CASCADE; property?:Relationship:Property:CASCADE; ticket?:Relationship:Ticket:CASCADE; user:Relationship:User:CASCADE; type:Text; meta:Json; channels:Json; status:Select:sending,planned,sent,canceled; deliveredAt:DateTimeUtc;'`
 * In most cases you should not change it by hands
 * Please, don't remove `AUTOGENERATE MARKER`s
 */
const faker = require('faker')
const { getRandomString } = require('@core/keystone/test.utils')
const { SEND_MESSAGE, RESEND_MESSAGE } = require('../../gql')
const { INVITE_NEW_EMPLOYEE_MESSAGE_TYPE } = require('../../constants')

const { generateGQLTestUtils, throwIfError } = require('@condo/domains/common/utils/codegeneration/generate.test.utils')

const { Message: MessageGQL } = require('@condo/domains/notification/gql')
/* AUTOGENERATE MARKER <IMPORT> */

const Message = generateGQLTestUtils(MessageGQL)

/* AUTOGENERATE MARKER <CONST> */

async function createTestMessage (client, extraAttrs = {}) {
    if (!client) throw new Error('no client')
    const sender = { dv: 1, fingerprint: faker.random.alphaNumeric(8) }
    const email = ('test1.' + getRandomString() + '@example.com').toLowerCase()
    const type = INVITE_NEW_EMPLOYEE_MESSAGE_TYPE
    const meta = { dv: 1, name: faker.random.alphaNumeric(8) }
    const lang = 'en'

    const attrs = {
        dv: 1,
        sender,
        email, type, meta, lang,
        ...extraAttrs,
    }
    const obj = await Message.create(client, attrs)
    return [obj, attrs]
}

async function updateTestMessage (client, id, extraAttrs = {}) {
    if (!client) throw new Error('no client')
    if (!id) throw new Error('no id')
    const sender = { dv: 1, fingerprint: faker.random.alphaNumeric(8) }

    const attrs = {
        dv: 1,
        sender,
        ...extraAttrs,
    }
    const obj = await Message.update(client, id, attrs)
    return [obj, attrs]
}

async function sendMessageByTestClient (client, extraAttrs = {}) {
    if (!client) throw new Error('no client')
    const sender = { dv: 1, fingerprint: faker.random.alphaNumeric(8) }
    const type = INVITE_NEW_EMPLOYEE_MESSAGE_TYPE
    const meta = { dv: 1, inviteCode: faker.random.alphaNumeric(8) }
    const to = { 'email': ('test.' + getRandomString() + '@example.com').toLowerCase() }
    if (client.user && client.user.id) {
        to.user = { id: client.user.id }
    }

    const attrs = {
        dv: 1,
        sender,
        to, type, meta,
        lang: 'en',
        ...extraAttrs,
    }
    const { data, errors } = await client.mutate(SEND_MESSAGE, { data: attrs })
    throwIfError(data, errors)
    return [data.result, attrs]
}

async function resendMessageByTestClient (client, message, extraAttrs = {}) {
    if (!client) throw new Error('no client')
    if (!message) throw new Error('no message')
    const sender = { dv: 1, fingerprint: faker.random.alphaNumeric(8) }

    const attrs = {
        dv: 1,
        sender,
        message: { id: message.id },
        ...extraAttrs,
    }
    const { data, errors } = await client.mutate(RESEND_MESSAGE, { data: attrs })
    throwIfError(data, errors)
    return [data.result, attrs]
}

/* AUTOGENERATE MARKER <FACTORY> */

module.exports = {
    Message, createTestMessage, updateTestMessage, sendMessageByTestClient, resendMessageByTestClient,
    /* AUTOGENERATE MARKER <EXPORTS> */
}
