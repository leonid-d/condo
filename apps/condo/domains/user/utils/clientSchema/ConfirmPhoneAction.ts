/**
 * Generated by `createschema user.ConfirmPhoneAction 'phone:Text;token:Text;smsCode:Integer;smsCodeRequestedAt:DateTimeUtc;smsCodeExpiresAt:DateTimeUtc;retries:Integer;isPhoneVerified:Checkbox;requestedAt:DateTimeUtc;expiresAt:DateTimeUtc;completedAt:DateTimeUtc;'`
 */

import { pick, get } from 'lodash'

import { getClientSideSenderInfo } from '@condo/domains/common/utils/userid.utils'
import { generateReactHooks } from '@condo/domains/common/utils/codegeneration/generate.hooks'

import { ConfirmPhoneAction as ConfirmPhoneActionGQL } from '@condo/domains/user/gql'
import { ConfirmPhoneAction, ConfirmPhoneActionUpdateInput, QueryAllConfirmPhoneActionsArgs } from '../../../../schema'

const FIELDS = ['id', 'deletedAt', 'createdAt', 'updatedAt', 'createdBy', 'updatedBy', 'phone', 'token', 'smsCode', 'smsCodeRequestedAt', 'smsCodeExpiresAt', 'retries', 'isPhoneVerified', 'requestedAt', 'expiresAt', 'completedAt']
const RELATIONS = []

export interface IConfirmPhoneActionUIState extends ConfirmPhoneAction {
    id: string
}

function convertToUIState (item: ConfirmPhoneAction): IConfirmPhoneActionUIState {
    if (item.dv !== 1) throw new Error('unsupported item.dv')
    return pick(item, FIELDS) as IConfirmPhoneActionUIState
}

export interface IConfirmPhoneActionFormState {
    id?: undefined
}

function convertToUIFormState (state: IConfirmPhoneActionUIState): IConfirmPhoneActionFormState | undefined {
    if (!state) return
    const result = {}
    for (const attr of Object.keys(state)) {
        const attrId = get(state[attr], 'id')
        result[attr] = (RELATIONS.includes(attr) && state[attr]) ? attrId || state[attr] : state[attr]
    }
    return result as IConfirmPhoneActionFormState
}

function convertToGQLInput (state: IConfirmPhoneActionFormState): ConfirmPhoneActionUpdateInput {
    const sender = getClientSideSenderInfo()
    const result = { dv: 1, sender }
    for (const attr of Object.keys(state)) {
        const attrId = get(state[attr], 'id')
        result[attr] = (RELATIONS.includes(attr) && state[attr]) ? { connect: { id: (attrId || state[attr]) } } : state[attr]
    }
    return result
}

const {
    useObject,
    useObjects,
    useCreate,
    useUpdate,
    useDelete,
} = generateReactHooks<ConfirmPhoneAction, ConfirmPhoneActionUpdateInput, IConfirmPhoneActionFormState, IConfirmPhoneActionUIState, QueryAllConfirmPhoneActionsArgs>(ConfirmPhoneActionGQL, { convertToGQLInput, convertToUIState })

export {
    useObject,
    useObjects,
    useCreate,
    useUpdate,
    useDelete,
    convertToUIFormState,
}