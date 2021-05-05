const conf = require('@core/config')

const { INVITE_NEW_EMPLOYEE_MESSAGE_TYPE, MESSAGE_TRANSPORTS } = require('./constants')

async function renderTemplate (transport, message) {
    if (!MESSAGE_TRANSPORTS.includes(transport)) throw new Error('unexpected transport argument')

    // TODO(pahaz): we need to decide where to store templates! HArDCODE!
    // TODO(pahaz): write the logic here!
    //  1) we should find message template by TYPE + LANG
    //  2) we should render the template and return transport context

    const serverUrl = conf.SERVER_URL
    if (message.type === INVITE_NEW_EMPLOYEE_MESSAGE_TYPE) {
        const { organizationName, inviteCode } = message.meta

        if (message.lang === 'en') {
            return {
                subject: 'You are invited to join organization as employee',
                text: `Organization "${organizationName}" invited you as employee.\n` +
                    `Click to the link to join: ${serverUrl}/auth/invite/${inviteCode}`,
            }
        } else if (message.lang === 'ru') {
            return {
                subject: 'Вас пригласили присоединиться к организации в качестве сотрудника',
                text: `Администратор организации "${organizationName}" приглашает вас в качестве сотрудника.\n` +
                    `Перейдите по ссылке, чтобы присоединиться: ${serverUrl}/auth/invite/${inviteCode}`,
            }
        }
    }

    throw new Error('unknown template or lang')
}

module.exports = {
    renderTemplate,
}