const faker = require('faker')

const { Wysiwyg } = require('@keystonejs/fields-wysiwyg-tinymce')
const { LocalFileAdapter } = require('@keystonejs/file-adapters')
const { File, Text, Relationship, Select } = require('@keystonejs/fields')

const conf = require('@core/config')
const { GQLListSchema } = require('@core/keystone/schema')
const { Json } = require('@core/keystone/fields')
const { historical, versioned, uuided, tracked, softDeleted } = require('@core/keystone/plugins')

const { SENDER_FIELD, DV_FIELD } = require('../../../schema/_common')
const { rules } = require('../../../access')
const countries = require('@condo/domains/common/constants/countries')
const { DEFAULT_STATUS_TRANSITIONS } = require('@condo/domains/ticket/constants/statusTransitions')
const { hasValidJsonStructure } = require('@condo/domains/common/utils/validation.utils')

const AVATAR_FILE_ADAPTER = new LocalFileAdapter({
    src: `${conf.MEDIA_ROOT}/orgavatars`,
    path: `${conf.MEDIA_URL}/orgavatars`,
})

const Organization = new GQLListSchema('Organization', {
    schemaDoc: 'B2B customer of the service, a legal entity or an association of legal entities (holding/group)',
    fields: {
        dv: DV_FIELD,
        sender: SENDER_FIELD,

        country: {
            schemaDoc: 'Country level specific',
            isRequired: true,
            type: Select,
            options: countries.COUNTRIES,
        },
        name: {
            schemaDoc: 'Customer-friendly name',
            factory: () => faker.company.companyName(),
            type: Text,
            isRequired: true,
            kmigratorOptions: { null: false },
        },
        description: {
            schemaDoc: 'Customer-friendly description. Friendly text for employee and resident users',
            type: Wysiwyg,
            isRequired: false,
        },
        avatar: {
            schemaDoc: 'Customer-friendly avatar',
            type: File,
            isRequired: false,
            adapter: AVATAR_FILE_ADAPTER,
        },
        meta: {
            schemaDoc: 'Organization metadata. Depends on country level specific' +
                'Examples of data keys: `inn`, `kpp`',
            type: Json,
            isRequired: true,
        },
        employees: {
            type: Relationship,
            ref: 'OrganizationEmployee.organization',
            many: true,
        },
        statusTransitions: {
            schemaDoc: 'Graph of possible transitions for statuses. If there is no transition in this graph, ' +
                'it is impossible to change status if the user in the role has the right to do so.',
            type: Json,
            defaultValue: DEFAULT_STATUS_TRANSITIONS,
            hooks: {
                validateInput: (args) => {
                    return hasValidJsonStructure(args, true, 1, {})
                },
            },
            access: {
                update: rules.canUpdateTicketStatusTransitions,
                create: rules.canUpdateTicketStatusTransitions,
                read: true,
            },
            isRequired: true,
        },
        defaultEmployeeRoleStatusTransitions: {
            schemaDoc: 'Default employee role status transitions map which will be used as fallback for status transition validation' +
                'if user dont have OrganizationEmployeeRole',
            type: Json,
            defaultValue: DEFAULT_STATUS_TRANSITIONS,
            hooks: {
                validateInput: (args) => {
                    return hasValidJsonStructure(args, true, 1, {})
                },
                access: {
                    update: rules.canUpdateTicketStatusTransitions,
                    create: rules.canUpdateTicketStatusTransitions,
                    read: true,
                },
            },
            isRequired: true,
        },
    },
    plugins: [uuided(), versioned(), tracked(), softDeleted(), historical()],
    access: {
        read: rules.canReadOrganizations,
        create: rules.canManageOrganizations,
        update: rules.canManageOrganizations,
        delete: false,
        auth: true,
    },
})

module.exports = {
    Organization,
}
