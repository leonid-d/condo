export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export enum UserHistoryRecordHistoryActionType {
  C = 'c',
  U = 'u',
  D = 'd'
}

/**  A keystone list  */
export type UserHistoryRecord = {
  __typename?: 'UserHistoryRecord';
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the UserHistoryRecord List config, or
   *  2. As an alias to the field set on 'labelField' in the UserHistoryRecord List config, or
   *  3. As an alias to a 'name' field on the UserHistoryRecord List (if one exists), or
   *  4. As an alias to the 'id' field on the UserHistoryRecord List.
   */
  _label_?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  isEmailVerified?: Maybe<Scalars['Boolean']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['JSON']>;
  dob?: Maybe<Scalars['String']>;
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  phone?: Maybe<Scalars['String']>;
  isPhoneVerified?: Maybe<Scalars['Boolean']>;
  meta?: Maybe<Scalars['JSON']>;
  importId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['JSON']>;
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<UserHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type UserHistoryRecordWhereInput = {
  AND?: Maybe<Array<Maybe<UserHistoryRecordWhereInput>>>;
  OR?: Maybe<Array<Maybe<UserHistoryRecordWhereInput>>>;
  email?: Maybe<Scalars['String']>;
  email_not?: Maybe<Scalars['String']>;
  email_contains?: Maybe<Scalars['String']>;
  email_not_contains?: Maybe<Scalars['String']>;
  email_starts_with?: Maybe<Scalars['String']>;
  email_not_starts_with?: Maybe<Scalars['String']>;
  email_ends_with?: Maybe<Scalars['String']>;
  email_not_ends_with?: Maybe<Scalars['String']>;
  email_i?: Maybe<Scalars['String']>;
  email_not_i?: Maybe<Scalars['String']>;
  email_contains_i?: Maybe<Scalars['String']>;
  email_not_contains_i?: Maybe<Scalars['String']>;
  email_starts_with_i?: Maybe<Scalars['String']>;
  email_not_starts_with_i?: Maybe<Scalars['String']>;
  email_ends_with_i?: Maybe<Scalars['String']>;
  email_not_ends_with_i?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  isEmailVerified?: Maybe<Scalars['Boolean']>;
  isEmailVerified_not?: Maybe<Scalars['Boolean']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  isAdmin_not?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  isActive?: Maybe<Scalars['Boolean']>;
  isActive_not?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  password_not?: Maybe<Scalars['String']>;
  password_contains?: Maybe<Scalars['String']>;
  password_not_contains?: Maybe<Scalars['String']>;
  password_starts_with?: Maybe<Scalars['String']>;
  password_not_starts_with?: Maybe<Scalars['String']>;
  password_ends_with?: Maybe<Scalars['String']>;
  password_not_ends_with?: Maybe<Scalars['String']>;
  password_i?: Maybe<Scalars['String']>;
  password_not_i?: Maybe<Scalars['String']>;
  password_contains_i?: Maybe<Scalars['String']>;
  password_not_contains_i?: Maybe<Scalars['String']>;
  password_starts_with_i?: Maybe<Scalars['String']>;
  password_not_starts_with_i?: Maybe<Scalars['String']>;
  password_ends_with_i?: Maybe<Scalars['String']>;
  password_not_ends_with_i?: Maybe<Scalars['String']>;
  password_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  password_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  avatar?: Maybe<Scalars['JSON']>;
  avatar_not?: Maybe<Scalars['JSON']>;
  avatar_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  avatar_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  dob?: Maybe<Scalars['String']>;
  dob_not?: Maybe<Scalars['String']>;
  dob_lt?: Maybe<Scalars['String']>;
  dob_lte?: Maybe<Scalars['String']>;
  dob_gt?: Maybe<Scalars['String']>;
  dob_gte?: Maybe<Scalars['String']>;
  dob_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  dob_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  dv?: Maybe<Scalars['Int']>;
  dv_not?: Maybe<Scalars['Int']>;
  dv_lt?: Maybe<Scalars['Int']>;
  dv_lte?: Maybe<Scalars['Int']>;
  dv_gt?: Maybe<Scalars['Int']>;
  dv_gte?: Maybe<Scalars['Int']>;
  dv_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  dv_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sender?: Maybe<Scalars['JSON']>;
  sender_not?: Maybe<Scalars['JSON']>;
  sender_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  sender_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  phone?: Maybe<Scalars['String']>;
  phone_not?: Maybe<Scalars['String']>;
  phone_contains?: Maybe<Scalars['String']>;
  phone_not_contains?: Maybe<Scalars['String']>;
  phone_starts_with?: Maybe<Scalars['String']>;
  phone_not_starts_with?: Maybe<Scalars['String']>;
  phone_ends_with?: Maybe<Scalars['String']>;
  phone_not_ends_with?: Maybe<Scalars['String']>;
  phone_i?: Maybe<Scalars['String']>;
  phone_not_i?: Maybe<Scalars['String']>;
  phone_contains_i?: Maybe<Scalars['String']>;
  phone_not_contains_i?: Maybe<Scalars['String']>;
  phone_starts_with_i?: Maybe<Scalars['String']>;
  phone_not_starts_with_i?: Maybe<Scalars['String']>;
  phone_ends_with_i?: Maybe<Scalars['String']>;
  phone_not_ends_with_i?: Maybe<Scalars['String']>;
  phone_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  phone_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  isPhoneVerified?: Maybe<Scalars['Boolean']>;
  isPhoneVerified_not?: Maybe<Scalars['Boolean']>;
  meta?: Maybe<Scalars['JSON']>;
  meta_not?: Maybe<Scalars['JSON']>;
  meta_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  meta_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  importId?: Maybe<Scalars['String']>;
  importId_not?: Maybe<Scalars['String']>;
  importId_contains?: Maybe<Scalars['String']>;
  importId_not_contains?: Maybe<Scalars['String']>;
  importId_starts_with?: Maybe<Scalars['String']>;
  importId_not_starts_with?: Maybe<Scalars['String']>;
  importId_ends_with?: Maybe<Scalars['String']>;
  importId_not_ends_with?: Maybe<Scalars['String']>;
  importId_i?: Maybe<Scalars['String']>;
  importId_not_i?: Maybe<Scalars['String']>;
  importId_contains_i?: Maybe<Scalars['String']>;
  importId_not_contains_i?: Maybe<Scalars['String']>;
  importId_starts_with_i?: Maybe<Scalars['String']>;
  importId_not_starts_with_i?: Maybe<Scalars['String']>;
  importId_ends_with_i?: Maybe<Scalars['String']>;
  importId_not_ends_with_i?: Maybe<Scalars['String']>;
  importId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  importId_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  v?: Maybe<Scalars['Int']>;
  v_not?: Maybe<Scalars['Int']>;
  v_lt?: Maybe<Scalars['Int']>;
  v_lte?: Maybe<Scalars['Int']>;
  v_gt?: Maybe<Scalars['Int']>;
  v_gte?: Maybe<Scalars['Int']>;
  v_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  v_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  createdAt?: Maybe<Scalars['String']>;
  createdAt_not?: Maybe<Scalars['String']>;
  createdAt_lt?: Maybe<Scalars['String']>;
  createdAt_lte?: Maybe<Scalars['String']>;
  createdAt_gt?: Maybe<Scalars['String']>;
  createdAt_gte?: Maybe<Scalars['String']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedAt_not?: Maybe<Scalars['String']>;
  updatedAt_lt?: Maybe<Scalars['String']>;
  updatedAt_lte?: Maybe<Scalars['String']>;
  updatedAt_gt?: Maybe<Scalars['String']>;
  updatedAt_gte?: Maybe<Scalars['String']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy?: Maybe<Scalars['String']>;
  createdBy_not?: Maybe<Scalars['String']>;
  createdBy_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedBy?: Maybe<Scalars['String']>;
  updatedBy_not?: Maybe<Scalars['String']>;
  updatedBy_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedBy_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedAt_not?: Maybe<Scalars['String']>;
  deletedAt_lt?: Maybe<Scalars['String']>;
  deletedAt_lte?: Maybe<Scalars['String']>;
  deletedAt_gt?: Maybe<Scalars['String']>;
  deletedAt_gte?: Maybe<Scalars['String']>;
  deletedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  deletedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  newId?: Maybe<Scalars['JSON']>;
  newId_not?: Maybe<Scalars['JSON']>;
  newId_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  newId_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  history_date?: Maybe<Scalars['String']>;
  history_date_not?: Maybe<Scalars['String']>;
  history_date_lt?: Maybe<Scalars['String']>;
  history_date_lte?: Maybe<Scalars['String']>;
  history_date_gt?: Maybe<Scalars['String']>;
  history_date_gte?: Maybe<Scalars['String']>;
  history_date_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_date_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_action?: Maybe<UserHistoryRecordHistoryActionType>;
  history_action_not?: Maybe<UserHistoryRecordHistoryActionType>;
  history_action_in?: Maybe<Array<Maybe<UserHistoryRecordHistoryActionType>>>;
  history_action_not_in?: Maybe<Array<Maybe<UserHistoryRecordHistoryActionType>>>;
  history_id?: Maybe<Scalars['String']>;
  history_id_not?: Maybe<Scalars['String']>;
  history_id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_id_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UserHistoryRecordWhereUniqueInput = {
  id: Scalars['ID'];
};

export enum SortUserHistoryRecordsBy {
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IsEmailVerifiedAsc = 'isEmailVerified_ASC',
  IsEmailVerifiedDesc = 'isEmailVerified_DESC',
  IsAdminAsc = 'isAdmin_ASC',
  IsAdminDesc = 'isAdmin_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  PasswordAsc = 'password_ASC',
  PasswordDesc = 'password_DESC',
  DobAsc = 'dob_ASC',
  DobDesc = 'dob_DESC',
  DvAsc = 'dv_ASC',
  DvDesc = 'dv_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  IsPhoneVerifiedAsc = 'isPhoneVerified_ASC',
  IsPhoneVerifiedDesc = 'isPhoneVerified_DESC',
  ImportIdAsc = 'importId_ASC',
  ImportIdDesc = 'importId_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  VAsc = 'v_ASC',
  VDesc = 'v_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  HistoryDateAsc = 'history_date_ASC',
  HistoryDateDesc = 'history_date_DESC',
  HistoryActionAsc = 'history_action_ASC',
  HistoryActionDesc = 'history_action_DESC'
}

export type UserHistoryRecordUpdateInput = {
  email?: Maybe<Scalars['String']>;
  isEmailVerified?: Maybe<Scalars['Boolean']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['JSON']>;
  dob?: Maybe<Scalars['String']>;
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  phone?: Maybe<Scalars['String']>;
  isPhoneVerified?: Maybe<Scalars['Boolean']>;
  meta?: Maybe<Scalars['JSON']>;
  importId?: Maybe<Scalars['String']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['JSON']>;
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<UserHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type UserHistoryRecordsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<UserHistoryRecordUpdateInput>;
};

export type UserHistoryRecordCreateInput = {
  email?: Maybe<Scalars['String']>;
  isEmailVerified?: Maybe<Scalars['Boolean']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['JSON']>;
  dob?: Maybe<Scalars['String']>;
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  phone?: Maybe<Scalars['String']>;
  isPhoneVerified?: Maybe<Scalars['Boolean']>;
  meta?: Maybe<Scalars['JSON']>;
  importId?: Maybe<Scalars['String']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['JSON']>;
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<UserHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type UserHistoryRecordsCreateInput = {
  data?: Maybe<UserHistoryRecordCreateInput>;
};

export type File = {
  __typename?: 'File';
  id?: Maybe<Scalars['ID']>;
  path?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  mimetype?: Maybe<Scalars['String']>;
  encoding?: Maybe<Scalars['String']>;
  publicUrl?: Maybe<Scalars['String']>;
};

export type UserRelateToOneInput = {
  create?: Maybe<UserCreateInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  disconnect?: Maybe<UserWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

/**  Individual / person / service account  */
export type User = {
  __typename?: 'User';
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the User List config, or
   *  2. As an alias to the field set on 'labelField' in the User List config, or
   *  3. As an alias to a 'name' field on the User List (if one exists), or
   *  4. As an alias to the 'id' field on the User List.
   */
  _label_?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  isEmailVerified?: Maybe<Scalars['Boolean']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  password_is_set?: Maybe<Scalars['Boolean']>;
  avatar?: Maybe<File>;
  dob?: Maybe<Scalars['String']>;
  /**  Data structure Version  */
  dv?: Maybe<Scalars['Int']>;
  /**  Client-side devise identification used for the anti-fraud detection. Example `{ dv: '1', fingerprint: 'VaxSw2aXZa'}`. Where the `fingerprint` should be the same for the same devices and it's not linked to the user ID. It's the device ID like browser / mobile application / remote system  */
  sender?: Maybe<Scalars['JSON']>;
  phone?: Maybe<Scalars['String']>;
  isPhoneVerified?: Maybe<Scalars['Boolean']>;
  meta?: Maybe<Scalars['JSON']>;
  importId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<User>;
  updatedBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['String']>;
};

export type UserWhereInput = {
  AND?: Maybe<Array<Maybe<UserWhereInput>>>;
  OR?: Maybe<Array<Maybe<UserWhereInput>>>;
  email?: Maybe<Scalars['String']>;
  email_not?: Maybe<Scalars['String']>;
  email_contains?: Maybe<Scalars['String']>;
  email_not_contains?: Maybe<Scalars['String']>;
  email_starts_with?: Maybe<Scalars['String']>;
  email_not_starts_with?: Maybe<Scalars['String']>;
  email_ends_with?: Maybe<Scalars['String']>;
  email_not_ends_with?: Maybe<Scalars['String']>;
  email_i?: Maybe<Scalars['String']>;
  email_not_i?: Maybe<Scalars['String']>;
  email_contains_i?: Maybe<Scalars['String']>;
  email_not_contains_i?: Maybe<Scalars['String']>;
  email_starts_with_i?: Maybe<Scalars['String']>;
  email_not_starts_with_i?: Maybe<Scalars['String']>;
  email_ends_with_i?: Maybe<Scalars['String']>;
  email_not_ends_with_i?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  isEmailVerified?: Maybe<Scalars['Boolean']>;
  isEmailVerified_not?: Maybe<Scalars['Boolean']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  isAdmin_not?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  isActive?: Maybe<Scalars['Boolean']>;
  isActive_not?: Maybe<Scalars['Boolean']>;
  password_is_set?: Maybe<Scalars['Boolean']>;
  avatar?: Maybe<Scalars['String']>;
  avatar_not?: Maybe<Scalars['String']>;
  avatar_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  avatar_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  dob?: Maybe<Scalars['String']>;
  dob_not?: Maybe<Scalars['String']>;
  dob_lt?: Maybe<Scalars['String']>;
  dob_lte?: Maybe<Scalars['String']>;
  dob_gt?: Maybe<Scalars['String']>;
  dob_gte?: Maybe<Scalars['String']>;
  dob_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  dob_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  dv?: Maybe<Scalars['Int']>;
  dv_not?: Maybe<Scalars['Int']>;
  dv_lt?: Maybe<Scalars['Int']>;
  dv_lte?: Maybe<Scalars['Int']>;
  dv_gt?: Maybe<Scalars['Int']>;
  dv_gte?: Maybe<Scalars['Int']>;
  dv_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  dv_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sender?: Maybe<Scalars['JSON']>;
  sender_not?: Maybe<Scalars['JSON']>;
  sender_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  sender_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  phone?: Maybe<Scalars['String']>;
  phone_not?: Maybe<Scalars['String']>;
  phone_contains?: Maybe<Scalars['String']>;
  phone_not_contains?: Maybe<Scalars['String']>;
  phone_starts_with?: Maybe<Scalars['String']>;
  phone_not_starts_with?: Maybe<Scalars['String']>;
  phone_ends_with?: Maybe<Scalars['String']>;
  phone_not_ends_with?: Maybe<Scalars['String']>;
  phone_i?: Maybe<Scalars['String']>;
  phone_not_i?: Maybe<Scalars['String']>;
  phone_contains_i?: Maybe<Scalars['String']>;
  phone_not_contains_i?: Maybe<Scalars['String']>;
  phone_starts_with_i?: Maybe<Scalars['String']>;
  phone_not_starts_with_i?: Maybe<Scalars['String']>;
  phone_ends_with_i?: Maybe<Scalars['String']>;
  phone_not_ends_with_i?: Maybe<Scalars['String']>;
  phone_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  phone_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  isPhoneVerified?: Maybe<Scalars['Boolean']>;
  isPhoneVerified_not?: Maybe<Scalars['Boolean']>;
  meta?: Maybe<Scalars['JSON']>;
  meta_not?: Maybe<Scalars['JSON']>;
  meta_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  meta_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  importId?: Maybe<Scalars['String']>;
  importId_not?: Maybe<Scalars['String']>;
  importId_contains?: Maybe<Scalars['String']>;
  importId_not_contains?: Maybe<Scalars['String']>;
  importId_starts_with?: Maybe<Scalars['String']>;
  importId_not_starts_with?: Maybe<Scalars['String']>;
  importId_ends_with?: Maybe<Scalars['String']>;
  importId_not_ends_with?: Maybe<Scalars['String']>;
  importId_i?: Maybe<Scalars['String']>;
  importId_not_i?: Maybe<Scalars['String']>;
  importId_contains_i?: Maybe<Scalars['String']>;
  importId_not_contains_i?: Maybe<Scalars['String']>;
  importId_starts_with_i?: Maybe<Scalars['String']>;
  importId_not_starts_with_i?: Maybe<Scalars['String']>;
  importId_ends_with_i?: Maybe<Scalars['String']>;
  importId_not_ends_with_i?: Maybe<Scalars['String']>;
  importId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  importId_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  v?: Maybe<Scalars['Int']>;
  v_not?: Maybe<Scalars['Int']>;
  v_lt?: Maybe<Scalars['Int']>;
  v_lte?: Maybe<Scalars['Int']>;
  v_gt?: Maybe<Scalars['Int']>;
  v_gte?: Maybe<Scalars['Int']>;
  v_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  v_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  createdAt?: Maybe<Scalars['String']>;
  createdAt_not?: Maybe<Scalars['String']>;
  createdAt_lt?: Maybe<Scalars['String']>;
  createdAt_lte?: Maybe<Scalars['String']>;
  createdAt_gt?: Maybe<Scalars['String']>;
  createdAt_gte?: Maybe<Scalars['String']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedAt_not?: Maybe<Scalars['String']>;
  updatedAt_lt?: Maybe<Scalars['String']>;
  updatedAt_lte?: Maybe<Scalars['String']>;
  updatedAt_gt?: Maybe<Scalars['String']>;
  updatedAt_gte?: Maybe<Scalars['String']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy?: Maybe<UserWhereInput>;
  createdBy_is_null?: Maybe<Scalars['Boolean']>;
  updatedBy?: Maybe<UserWhereInput>;
  updatedBy_is_null?: Maybe<Scalars['Boolean']>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedAt_not?: Maybe<Scalars['String']>;
  deletedAt_lt?: Maybe<Scalars['String']>;
  deletedAt_lte?: Maybe<Scalars['String']>;
  deletedAt_gt?: Maybe<Scalars['String']>;
  deletedAt_gte?: Maybe<Scalars['String']>;
  deletedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  deletedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  newId?: Maybe<Scalars['String']>;
  newId_not?: Maybe<Scalars['String']>;
  newId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  newId_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UserWhereUniqueInput = {
  id: Scalars['ID'];
};

export enum SortUsersBy {
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IsEmailVerifiedAsc = 'isEmailVerified_ASC',
  IsEmailVerifiedDesc = 'isEmailVerified_DESC',
  IsAdminAsc = 'isAdmin_ASC',
  IsAdminDesc = 'isAdmin_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  DobAsc = 'dob_ASC',
  DobDesc = 'dob_DESC',
  DvAsc = 'dv_ASC',
  DvDesc = 'dv_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  IsPhoneVerifiedAsc = 'isPhoneVerified_ASC',
  IsPhoneVerifiedDesc = 'isPhoneVerified_DESC',
  ImportIdAsc = 'importId_ASC',
  ImportIdDesc = 'importId_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  VAsc = 'v_ASC',
  VDesc = 'v_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  CreatedByAsc = 'createdBy_ASC',
  CreatedByDesc = 'createdBy_DESC',
  UpdatedByAsc = 'updatedBy_ASC',
  UpdatedByDesc = 'updatedBy_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC'
}

export type UserUpdateInput = {
  email?: Maybe<Scalars['String']>;
  isEmailVerified?: Maybe<Scalars['Boolean']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['Upload']>;
  dob?: Maybe<Scalars['String']>;
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  phone?: Maybe<Scalars['String']>;
  isPhoneVerified?: Maybe<Scalars['Boolean']>;
  meta?: Maybe<Scalars['JSON']>;
  importId?: Maybe<Scalars['String']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserRelateToOneInput>;
  updatedBy?: Maybe<UserRelateToOneInput>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['String']>;
};

export type UsersUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<UserUpdateInput>;
};

export type UserCreateInput = {
  email?: Maybe<Scalars['String']>;
  isEmailVerified?: Maybe<Scalars['Boolean']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['Upload']>;
  dob?: Maybe<Scalars['String']>;
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  phone?: Maybe<Scalars['String']>;
  isPhoneVerified?: Maybe<Scalars['Boolean']>;
  meta?: Maybe<Scalars['JSON']>;
  importId?: Maybe<Scalars['String']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserRelateToOneInput>;
  updatedBy?: Maybe<UserRelateToOneInput>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['String']>;
};

export type UsersCreateInput = {
  data?: Maybe<UserCreateInput>;
};

export enum ForgotPasswordActionHistoryRecordHistoryActionType {
  C = 'c',
  U = 'u',
  D = 'd'
}

/**  A keystone list  */
export type ForgotPasswordActionHistoryRecord = {
  __typename?: 'ForgotPasswordActionHistoryRecord';
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the ForgotPasswordActionHistoryRecord List config, or
   *  2. As an alias to the field set on 'labelField' in the ForgotPasswordActionHistoryRecord List config, or
   *  3. As an alias to a 'name' field on the ForgotPasswordActionHistoryRecord List (if one exists), or
   *  4. As an alias to the 'id' field on the ForgotPasswordActionHistoryRecord List.
   */
  _label_?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  requestedAt?: Maybe<Scalars['String']>;
  expiresAt?: Maybe<Scalars['String']>;
  usedAt?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['JSON']>;
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<ForgotPasswordActionHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type ForgotPasswordActionHistoryRecordWhereInput = {
  AND?: Maybe<Array<Maybe<ForgotPasswordActionHistoryRecordWhereInput>>>;
  OR?: Maybe<Array<Maybe<ForgotPasswordActionHistoryRecordWhereInput>>>;
  user?: Maybe<Scalars['String']>;
  user_not?: Maybe<Scalars['String']>;
  user_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  user_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  token?: Maybe<Scalars['String']>;
  token_not?: Maybe<Scalars['String']>;
  token_contains?: Maybe<Scalars['String']>;
  token_not_contains?: Maybe<Scalars['String']>;
  token_starts_with?: Maybe<Scalars['String']>;
  token_not_starts_with?: Maybe<Scalars['String']>;
  token_ends_with?: Maybe<Scalars['String']>;
  token_not_ends_with?: Maybe<Scalars['String']>;
  token_i?: Maybe<Scalars['String']>;
  token_not_i?: Maybe<Scalars['String']>;
  token_contains_i?: Maybe<Scalars['String']>;
  token_not_contains_i?: Maybe<Scalars['String']>;
  token_starts_with_i?: Maybe<Scalars['String']>;
  token_not_starts_with_i?: Maybe<Scalars['String']>;
  token_ends_with_i?: Maybe<Scalars['String']>;
  token_not_ends_with_i?: Maybe<Scalars['String']>;
  token_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  token_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  requestedAt?: Maybe<Scalars['String']>;
  requestedAt_not?: Maybe<Scalars['String']>;
  requestedAt_lt?: Maybe<Scalars['String']>;
  requestedAt_lte?: Maybe<Scalars['String']>;
  requestedAt_gt?: Maybe<Scalars['String']>;
  requestedAt_gte?: Maybe<Scalars['String']>;
  requestedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  requestedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  expiresAt?: Maybe<Scalars['String']>;
  expiresAt_not?: Maybe<Scalars['String']>;
  expiresAt_lt?: Maybe<Scalars['String']>;
  expiresAt_lte?: Maybe<Scalars['String']>;
  expiresAt_gt?: Maybe<Scalars['String']>;
  expiresAt_gte?: Maybe<Scalars['String']>;
  expiresAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  expiresAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  usedAt?: Maybe<Scalars['String']>;
  usedAt_not?: Maybe<Scalars['String']>;
  usedAt_lt?: Maybe<Scalars['String']>;
  usedAt_lte?: Maybe<Scalars['String']>;
  usedAt_gt?: Maybe<Scalars['String']>;
  usedAt_gte?: Maybe<Scalars['String']>;
  usedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  usedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  v?: Maybe<Scalars['Int']>;
  v_not?: Maybe<Scalars['Int']>;
  v_lt?: Maybe<Scalars['Int']>;
  v_lte?: Maybe<Scalars['Int']>;
  v_gt?: Maybe<Scalars['Int']>;
  v_gte?: Maybe<Scalars['Int']>;
  v_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  v_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  createdAt?: Maybe<Scalars['String']>;
  createdAt_not?: Maybe<Scalars['String']>;
  createdAt_lt?: Maybe<Scalars['String']>;
  createdAt_lte?: Maybe<Scalars['String']>;
  createdAt_gt?: Maybe<Scalars['String']>;
  createdAt_gte?: Maybe<Scalars['String']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedAt_not?: Maybe<Scalars['String']>;
  updatedAt_lt?: Maybe<Scalars['String']>;
  updatedAt_lte?: Maybe<Scalars['String']>;
  updatedAt_gt?: Maybe<Scalars['String']>;
  updatedAt_gte?: Maybe<Scalars['String']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy?: Maybe<Scalars['String']>;
  createdBy_not?: Maybe<Scalars['String']>;
  createdBy_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedBy?: Maybe<Scalars['String']>;
  updatedBy_not?: Maybe<Scalars['String']>;
  updatedBy_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedBy_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedAt_not?: Maybe<Scalars['String']>;
  deletedAt_lt?: Maybe<Scalars['String']>;
  deletedAt_lte?: Maybe<Scalars['String']>;
  deletedAt_gt?: Maybe<Scalars['String']>;
  deletedAt_gte?: Maybe<Scalars['String']>;
  deletedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  deletedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  newId?: Maybe<Scalars['JSON']>;
  newId_not?: Maybe<Scalars['JSON']>;
  newId_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  newId_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  history_date?: Maybe<Scalars['String']>;
  history_date_not?: Maybe<Scalars['String']>;
  history_date_lt?: Maybe<Scalars['String']>;
  history_date_lte?: Maybe<Scalars['String']>;
  history_date_gt?: Maybe<Scalars['String']>;
  history_date_gte?: Maybe<Scalars['String']>;
  history_date_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_date_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_action?: Maybe<ForgotPasswordActionHistoryRecordHistoryActionType>;
  history_action_not?: Maybe<ForgotPasswordActionHistoryRecordHistoryActionType>;
  history_action_in?: Maybe<Array<Maybe<ForgotPasswordActionHistoryRecordHistoryActionType>>>;
  history_action_not_in?: Maybe<Array<Maybe<ForgotPasswordActionHistoryRecordHistoryActionType>>>;
  history_id?: Maybe<Scalars['String']>;
  history_id_not?: Maybe<Scalars['String']>;
  history_id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_id_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ForgotPasswordActionHistoryRecordWhereUniqueInput = {
  id: Scalars['ID'];
};

export enum SortForgotPasswordActionHistoryRecordsBy {
  TokenAsc = 'token_ASC',
  TokenDesc = 'token_DESC',
  RequestedAtAsc = 'requestedAt_ASC',
  RequestedAtDesc = 'requestedAt_DESC',
  ExpiresAtAsc = 'expiresAt_ASC',
  ExpiresAtDesc = 'expiresAt_DESC',
  UsedAtAsc = 'usedAt_ASC',
  UsedAtDesc = 'usedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  VAsc = 'v_ASC',
  VDesc = 'v_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  HistoryDateAsc = 'history_date_ASC',
  HistoryDateDesc = 'history_date_DESC',
  HistoryActionAsc = 'history_action_ASC',
  HistoryActionDesc = 'history_action_DESC'
}

export type ForgotPasswordActionHistoryRecordUpdateInput = {
  user?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  requestedAt?: Maybe<Scalars['String']>;
  expiresAt?: Maybe<Scalars['String']>;
  usedAt?: Maybe<Scalars['String']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['JSON']>;
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<ForgotPasswordActionHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type ForgotPasswordActionHistoryRecordsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<ForgotPasswordActionHistoryRecordUpdateInput>;
};

export type ForgotPasswordActionHistoryRecordCreateInput = {
  user?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  requestedAt?: Maybe<Scalars['String']>;
  expiresAt?: Maybe<Scalars['String']>;
  usedAt?: Maybe<Scalars['String']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['JSON']>;
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<ForgotPasswordActionHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type ForgotPasswordActionHistoryRecordsCreateInput = {
  data?: Maybe<ForgotPasswordActionHistoryRecordCreateInput>;
};

/**  A keystone list  */
export type ForgotPasswordAction = {
  __typename?: 'ForgotPasswordAction';
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the ForgotPasswordAction List config, or
   *  2. As an alias to the field set on 'labelField' in the ForgotPasswordAction List config, or
   *  3. As an alias to a 'name' field on the ForgotPasswordAction List (if one exists), or
   *  4. As an alias to the 'id' field on the ForgotPasswordAction List.
   */
  _label_?: Maybe<Scalars['String']>;
  /**  Ref to the user. The object will be deleted if the user ceases to exist  */
  user?: Maybe<User>;
  token?: Maybe<Scalars['String']>;
  requestedAt?: Maybe<Scalars['String']>;
  expiresAt?: Maybe<Scalars['String']>;
  usedAt?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<User>;
  updatedBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['String']>;
};

export type ForgotPasswordActionWhereInput = {
  AND?: Maybe<Array<Maybe<ForgotPasswordActionWhereInput>>>;
  OR?: Maybe<Array<Maybe<ForgotPasswordActionWhereInput>>>;
  user?: Maybe<UserWhereInput>;
  user_is_null?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
  token_not?: Maybe<Scalars['String']>;
  token_contains?: Maybe<Scalars['String']>;
  token_not_contains?: Maybe<Scalars['String']>;
  token_starts_with?: Maybe<Scalars['String']>;
  token_not_starts_with?: Maybe<Scalars['String']>;
  token_ends_with?: Maybe<Scalars['String']>;
  token_not_ends_with?: Maybe<Scalars['String']>;
  token_i?: Maybe<Scalars['String']>;
  token_not_i?: Maybe<Scalars['String']>;
  token_contains_i?: Maybe<Scalars['String']>;
  token_not_contains_i?: Maybe<Scalars['String']>;
  token_starts_with_i?: Maybe<Scalars['String']>;
  token_not_starts_with_i?: Maybe<Scalars['String']>;
  token_ends_with_i?: Maybe<Scalars['String']>;
  token_not_ends_with_i?: Maybe<Scalars['String']>;
  token_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  token_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  requestedAt?: Maybe<Scalars['String']>;
  requestedAt_not?: Maybe<Scalars['String']>;
  requestedAt_lt?: Maybe<Scalars['String']>;
  requestedAt_lte?: Maybe<Scalars['String']>;
  requestedAt_gt?: Maybe<Scalars['String']>;
  requestedAt_gte?: Maybe<Scalars['String']>;
  requestedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  requestedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  expiresAt?: Maybe<Scalars['String']>;
  expiresAt_not?: Maybe<Scalars['String']>;
  expiresAt_lt?: Maybe<Scalars['String']>;
  expiresAt_lte?: Maybe<Scalars['String']>;
  expiresAt_gt?: Maybe<Scalars['String']>;
  expiresAt_gte?: Maybe<Scalars['String']>;
  expiresAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  expiresAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  usedAt?: Maybe<Scalars['String']>;
  usedAt_not?: Maybe<Scalars['String']>;
  usedAt_lt?: Maybe<Scalars['String']>;
  usedAt_lte?: Maybe<Scalars['String']>;
  usedAt_gt?: Maybe<Scalars['String']>;
  usedAt_gte?: Maybe<Scalars['String']>;
  usedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  usedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  v?: Maybe<Scalars['Int']>;
  v_not?: Maybe<Scalars['Int']>;
  v_lt?: Maybe<Scalars['Int']>;
  v_lte?: Maybe<Scalars['Int']>;
  v_gt?: Maybe<Scalars['Int']>;
  v_gte?: Maybe<Scalars['Int']>;
  v_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  v_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  createdAt?: Maybe<Scalars['String']>;
  createdAt_not?: Maybe<Scalars['String']>;
  createdAt_lt?: Maybe<Scalars['String']>;
  createdAt_lte?: Maybe<Scalars['String']>;
  createdAt_gt?: Maybe<Scalars['String']>;
  createdAt_gte?: Maybe<Scalars['String']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedAt_not?: Maybe<Scalars['String']>;
  updatedAt_lt?: Maybe<Scalars['String']>;
  updatedAt_lte?: Maybe<Scalars['String']>;
  updatedAt_gt?: Maybe<Scalars['String']>;
  updatedAt_gte?: Maybe<Scalars['String']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy?: Maybe<UserWhereInput>;
  createdBy_is_null?: Maybe<Scalars['Boolean']>;
  updatedBy?: Maybe<UserWhereInput>;
  updatedBy_is_null?: Maybe<Scalars['Boolean']>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedAt_not?: Maybe<Scalars['String']>;
  deletedAt_lt?: Maybe<Scalars['String']>;
  deletedAt_lte?: Maybe<Scalars['String']>;
  deletedAt_gt?: Maybe<Scalars['String']>;
  deletedAt_gte?: Maybe<Scalars['String']>;
  deletedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  deletedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  newId?: Maybe<Scalars['String']>;
  newId_not?: Maybe<Scalars['String']>;
  newId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  newId_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ForgotPasswordActionWhereUniqueInput = {
  id: Scalars['ID'];
};

export enum SortForgotPasswordActionsBy {
  UserAsc = 'user_ASC',
  UserDesc = 'user_DESC',
  TokenAsc = 'token_ASC',
  TokenDesc = 'token_DESC',
  RequestedAtAsc = 'requestedAt_ASC',
  RequestedAtDesc = 'requestedAt_DESC',
  ExpiresAtAsc = 'expiresAt_ASC',
  ExpiresAtDesc = 'expiresAt_DESC',
  UsedAtAsc = 'usedAt_ASC',
  UsedAtDesc = 'usedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  VAsc = 'v_ASC',
  VDesc = 'v_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  CreatedByAsc = 'createdBy_ASC',
  CreatedByDesc = 'createdBy_DESC',
  UpdatedByAsc = 'updatedBy_ASC',
  UpdatedByDesc = 'updatedBy_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC'
}

export type ForgotPasswordActionUpdateInput = {
  user?: Maybe<UserRelateToOneInput>;
  token?: Maybe<Scalars['String']>;
  requestedAt?: Maybe<Scalars['String']>;
  expiresAt?: Maybe<Scalars['String']>;
  usedAt?: Maybe<Scalars['String']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserRelateToOneInput>;
  updatedBy?: Maybe<UserRelateToOneInput>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['String']>;
};

export type ForgotPasswordActionsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<ForgotPasswordActionUpdateInput>;
};

export type ForgotPasswordActionCreateInput = {
  user?: Maybe<UserRelateToOneInput>;
  token?: Maybe<Scalars['String']>;
  requestedAt?: Maybe<Scalars['String']>;
  expiresAt?: Maybe<Scalars['String']>;
  usedAt?: Maybe<Scalars['String']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserRelateToOneInput>;
  updatedBy?: Maybe<UserRelateToOneInput>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['String']>;
};

export type ForgotPasswordActionsCreateInput = {
  data?: Maybe<ForgotPasswordActionCreateInput>;
};

export enum OrganizationHistoryRecordHistoryActionType {
  C = 'c',
  U = 'u',
  D = 'd'
}

/**  A keystone list  */
export type OrganizationHistoryRecord = {
  __typename?: 'OrganizationHistoryRecord';
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the OrganizationHistoryRecord List config, or
   *  2. As an alias to the field set on 'labelField' in the OrganizationHistoryRecord List config, or
   *  3. As an alias to a 'name' field on the OrganizationHistoryRecord List (if one exists), or
   *  4. As an alias to the 'id' field on the OrganizationHistoryRecord List.
   */
  _label_?: Maybe<Scalars['String']>;
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  country?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['JSON']>;
  avatar?: Maybe<Scalars['JSON']>;
  meta?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['JSON']>;
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<OrganizationHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type OrganizationHistoryRecordWhereInput = {
  AND?: Maybe<Array<Maybe<OrganizationHistoryRecordWhereInput>>>;
  OR?: Maybe<Array<Maybe<OrganizationHistoryRecordWhereInput>>>;
  dv?: Maybe<Scalars['Int']>;
  dv_not?: Maybe<Scalars['Int']>;
  dv_lt?: Maybe<Scalars['Int']>;
  dv_lte?: Maybe<Scalars['Int']>;
  dv_gt?: Maybe<Scalars['Int']>;
  dv_gte?: Maybe<Scalars['Int']>;
  dv_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  dv_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sender?: Maybe<Scalars['JSON']>;
  sender_not?: Maybe<Scalars['JSON']>;
  sender_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  sender_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  country?: Maybe<Scalars['String']>;
  country_not?: Maybe<Scalars['String']>;
  country_contains?: Maybe<Scalars['String']>;
  country_not_contains?: Maybe<Scalars['String']>;
  country_starts_with?: Maybe<Scalars['String']>;
  country_not_starts_with?: Maybe<Scalars['String']>;
  country_ends_with?: Maybe<Scalars['String']>;
  country_not_ends_with?: Maybe<Scalars['String']>;
  country_i?: Maybe<Scalars['String']>;
  country_not_i?: Maybe<Scalars['String']>;
  country_contains_i?: Maybe<Scalars['String']>;
  country_not_contains_i?: Maybe<Scalars['String']>;
  country_starts_with_i?: Maybe<Scalars['String']>;
  country_not_starts_with_i?: Maybe<Scalars['String']>;
  country_ends_with_i?: Maybe<Scalars['String']>;
  country_not_ends_with_i?: Maybe<Scalars['String']>;
  country_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  country_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description?: Maybe<Scalars['JSON']>;
  description_not?: Maybe<Scalars['JSON']>;
  description_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  avatar?: Maybe<Scalars['JSON']>;
  avatar_not?: Maybe<Scalars['JSON']>;
  avatar_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  avatar_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  meta?: Maybe<Scalars['JSON']>;
  meta_not?: Maybe<Scalars['JSON']>;
  meta_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  meta_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  v?: Maybe<Scalars['Int']>;
  v_not?: Maybe<Scalars['Int']>;
  v_lt?: Maybe<Scalars['Int']>;
  v_lte?: Maybe<Scalars['Int']>;
  v_gt?: Maybe<Scalars['Int']>;
  v_gte?: Maybe<Scalars['Int']>;
  v_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  v_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  createdAt?: Maybe<Scalars['String']>;
  createdAt_not?: Maybe<Scalars['String']>;
  createdAt_lt?: Maybe<Scalars['String']>;
  createdAt_lte?: Maybe<Scalars['String']>;
  createdAt_gt?: Maybe<Scalars['String']>;
  createdAt_gte?: Maybe<Scalars['String']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedAt_not?: Maybe<Scalars['String']>;
  updatedAt_lt?: Maybe<Scalars['String']>;
  updatedAt_lte?: Maybe<Scalars['String']>;
  updatedAt_gt?: Maybe<Scalars['String']>;
  updatedAt_gte?: Maybe<Scalars['String']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy?: Maybe<Scalars['String']>;
  createdBy_not?: Maybe<Scalars['String']>;
  createdBy_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedBy?: Maybe<Scalars['String']>;
  updatedBy_not?: Maybe<Scalars['String']>;
  updatedBy_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedBy_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedAt_not?: Maybe<Scalars['String']>;
  deletedAt_lt?: Maybe<Scalars['String']>;
  deletedAt_lte?: Maybe<Scalars['String']>;
  deletedAt_gt?: Maybe<Scalars['String']>;
  deletedAt_gte?: Maybe<Scalars['String']>;
  deletedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  deletedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  newId?: Maybe<Scalars['JSON']>;
  newId_not?: Maybe<Scalars['JSON']>;
  newId_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  newId_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  history_date?: Maybe<Scalars['String']>;
  history_date_not?: Maybe<Scalars['String']>;
  history_date_lt?: Maybe<Scalars['String']>;
  history_date_lte?: Maybe<Scalars['String']>;
  history_date_gt?: Maybe<Scalars['String']>;
  history_date_gte?: Maybe<Scalars['String']>;
  history_date_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_date_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_action?: Maybe<OrganizationHistoryRecordHistoryActionType>;
  history_action_not?: Maybe<OrganizationHistoryRecordHistoryActionType>;
  history_action_in?: Maybe<Array<Maybe<OrganizationHistoryRecordHistoryActionType>>>;
  history_action_not_in?: Maybe<Array<Maybe<OrganizationHistoryRecordHistoryActionType>>>;
  history_id?: Maybe<Scalars['String']>;
  history_id_not?: Maybe<Scalars['String']>;
  history_id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_id_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type OrganizationHistoryRecordWhereUniqueInput = {
  id: Scalars['ID'];
};

export enum SortOrganizationHistoryRecordsBy {
  DvAsc = 'dv_ASC',
  DvDesc = 'dv_DESC',
  CountryAsc = 'country_ASC',
  CountryDesc = 'country_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  VAsc = 'v_ASC',
  VDesc = 'v_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  HistoryDateAsc = 'history_date_ASC',
  HistoryDateDesc = 'history_date_DESC',
  HistoryActionAsc = 'history_action_ASC',
  HistoryActionDesc = 'history_action_DESC'
}

export type OrganizationHistoryRecordUpdateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  country?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['JSON']>;
  avatar?: Maybe<Scalars['JSON']>;
  meta?: Maybe<Scalars['JSON']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['JSON']>;
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<OrganizationHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type OrganizationHistoryRecordsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<OrganizationHistoryRecordUpdateInput>;
};

export type OrganizationHistoryRecordCreateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  country?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['JSON']>;
  avatar?: Maybe<Scalars['JSON']>;
  meta?: Maybe<Scalars['JSON']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['JSON']>;
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<OrganizationHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type OrganizationHistoryRecordsCreateInput = {
  data?: Maybe<OrganizationHistoryRecordCreateInput>;
};

export enum OrganizationCountryType {
  Ru = 'ru',
  Us = 'us'
}

export type OrganizationEmployeeRelateToManyInput = {
  create?: Maybe<Array<Maybe<OrganizationEmployeeCreateInput>>>;
  connect?: Maybe<Array<Maybe<OrganizationEmployeeWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<OrganizationEmployeeWhereUniqueInput>>>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

/**  B2B customer of the service, a legal entity or an association of legal entities (holding/group)  */
export type Organization = {
  __typename?: 'Organization';
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the Organization List config, or
   *  2. As an alias to the field set on 'labelField' in the Organization List config, or
   *  3. As an alias to a 'name' field on the Organization List (if one exists), or
   *  4. As an alias to the 'id' field on the Organization List.
   */
  _label_?: Maybe<Scalars['String']>;
  /**  Data structure Version  */
  dv?: Maybe<Scalars['Int']>;
  /**  Client-side devise identification used for the anti-fraud detection. Example `{ dv: '1', fingerprint: 'VaxSw2aXZa'}`. Where the `fingerprint` should be the same for the same devices and it's not linked to the user ID. It's the device ID like browser / mobile application / remote system  */
  sender?: Maybe<Scalars['JSON']>;
  /**  Country level specific  */
  country?: Maybe<OrganizationCountryType>;
  /**  Customer-friendly name  */
  name?: Maybe<Scalars['String']>;
  /**  Customer-friendly description. Friendly text for employee and resident users  */
  description?: Maybe<Scalars['String']>;
  /**  Customer-friendly avatar  */
  avatar?: Maybe<File>;
  /**  Organization metadata. Depends on country level specificExamples of data keys: `inn`, `kpp`  */
  meta?: Maybe<Scalars['JSON']>;
  employees: Array<OrganizationEmployee>;
  _employeesMeta?: Maybe<_QueryMeta>;
  id: Scalars['ID'];
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<User>;
  updatedBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['String']>;
};


/**  B2B customer of the service, a legal entity or an association of legal entities (holding/group)  */
export type OrganizationEmployeesArgs = {
  where?: Maybe<OrganizationEmployeeWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortOrganizationEmployeesBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


/**  B2B customer of the service, a legal entity or an association of legal entities (holding/group)  */
export type Organization_EmployeesMetaArgs = {
  where?: Maybe<OrganizationEmployeeWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortOrganizationEmployeesBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type OrganizationWhereInput = {
  AND?: Maybe<Array<Maybe<OrganizationWhereInput>>>;
  OR?: Maybe<Array<Maybe<OrganizationWhereInput>>>;
  dv?: Maybe<Scalars['Int']>;
  dv_not?: Maybe<Scalars['Int']>;
  dv_lt?: Maybe<Scalars['Int']>;
  dv_lte?: Maybe<Scalars['Int']>;
  dv_gt?: Maybe<Scalars['Int']>;
  dv_gte?: Maybe<Scalars['Int']>;
  dv_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  dv_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sender?: Maybe<Scalars['JSON']>;
  sender_not?: Maybe<Scalars['JSON']>;
  sender_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  sender_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  country?: Maybe<OrganizationCountryType>;
  country_not?: Maybe<OrganizationCountryType>;
  country_in?: Maybe<Array<Maybe<OrganizationCountryType>>>;
  country_not_in?: Maybe<Array<Maybe<OrganizationCountryType>>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  description_starts_with?: Maybe<Scalars['String']>;
  description_not_starts_with?: Maybe<Scalars['String']>;
  description_ends_with?: Maybe<Scalars['String']>;
  description_not_ends_with?: Maybe<Scalars['String']>;
  description_i?: Maybe<Scalars['String']>;
  description_not_i?: Maybe<Scalars['String']>;
  description_contains_i?: Maybe<Scalars['String']>;
  description_not_contains_i?: Maybe<Scalars['String']>;
  description_starts_with_i?: Maybe<Scalars['String']>;
  description_not_starts_with_i?: Maybe<Scalars['String']>;
  description_ends_with_i?: Maybe<Scalars['String']>;
  description_not_ends_with_i?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  avatar?: Maybe<Scalars['String']>;
  avatar_not?: Maybe<Scalars['String']>;
  avatar_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  avatar_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  meta?: Maybe<Scalars['JSON']>;
  meta_not?: Maybe<Scalars['JSON']>;
  meta_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  meta_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  /**  condition must be true for all nodes  */
  employees_every?: Maybe<OrganizationEmployeeWhereInput>;
  /**  condition must be true for at least 1 node  */
  employees_some?: Maybe<OrganizationEmployeeWhereInput>;
  /**  condition must be false for all nodes  */
  employees_none?: Maybe<OrganizationEmployeeWhereInput>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  v?: Maybe<Scalars['Int']>;
  v_not?: Maybe<Scalars['Int']>;
  v_lt?: Maybe<Scalars['Int']>;
  v_lte?: Maybe<Scalars['Int']>;
  v_gt?: Maybe<Scalars['Int']>;
  v_gte?: Maybe<Scalars['Int']>;
  v_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  v_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  createdAt?: Maybe<Scalars['String']>;
  createdAt_not?: Maybe<Scalars['String']>;
  createdAt_lt?: Maybe<Scalars['String']>;
  createdAt_lte?: Maybe<Scalars['String']>;
  createdAt_gt?: Maybe<Scalars['String']>;
  createdAt_gte?: Maybe<Scalars['String']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedAt_not?: Maybe<Scalars['String']>;
  updatedAt_lt?: Maybe<Scalars['String']>;
  updatedAt_lte?: Maybe<Scalars['String']>;
  updatedAt_gt?: Maybe<Scalars['String']>;
  updatedAt_gte?: Maybe<Scalars['String']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy?: Maybe<UserWhereInput>;
  createdBy_is_null?: Maybe<Scalars['Boolean']>;
  updatedBy?: Maybe<UserWhereInput>;
  updatedBy_is_null?: Maybe<Scalars['Boolean']>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedAt_not?: Maybe<Scalars['String']>;
  deletedAt_lt?: Maybe<Scalars['String']>;
  deletedAt_lte?: Maybe<Scalars['String']>;
  deletedAt_gt?: Maybe<Scalars['String']>;
  deletedAt_gte?: Maybe<Scalars['String']>;
  deletedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  deletedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  newId?: Maybe<Scalars['String']>;
  newId_not?: Maybe<Scalars['String']>;
  newId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  newId_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type OrganizationWhereUniqueInput = {
  id: Scalars['ID'];
};

export enum SortOrganizationsBy {
  DvAsc = 'dv_ASC',
  DvDesc = 'dv_DESC',
  CountryAsc = 'country_ASC',
  CountryDesc = 'country_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  EmployeesAsc = 'employees_ASC',
  EmployeesDesc = 'employees_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  VAsc = 'v_ASC',
  VDesc = 'v_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  CreatedByAsc = 'createdBy_ASC',
  CreatedByDesc = 'createdBy_DESC',
  UpdatedByAsc = 'updatedBy_ASC',
  UpdatedByDesc = 'updatedBy_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC'
}

export type OrganizationUpdateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  country?: Maybe<OrganizationCountryType>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['Upload']>;
  meta?: Maybe<Scalars['JSON']>;
  employees?: Maybe<OrganizationEmployeeRelateToManyInput>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserRelateToOneInput>;
  updatedBy?: Maybe<UserRelateToOneInput>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['String']>;
};

export type OrganizationsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<OrganizationUpdateInput>;
};

export type OrganizationCreateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  country?: Maybe<OrganizationCountryType>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['Upload']>;
  meta?: Maybe<Scalars['JSON']>;
  employees?: Maybe<OrganizationEmployeeRelateToManyInput>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserRelateToOneInput>;
  updatedBy?: Maybe<UserRelateToOneInput>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['String']>;
};

export type OrganizationsCreateInput = {
  data?: Maybe<OrganizationCreateInput>;
};

export enum OrganizationEmployeeHistoryRecordHistoryActionType {
  C = 'c',
  U = 'u',
  D = 'd'
}

/**  A keystone list  */
export type OrganizationEmployeeHistoryRecord = {
  __typename?: 'OrganizationEmployeeHistoryRecord';
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the OrganizationEmployeeHistoryRecord List config, or
   *  2. As an alias to the field set on 'labelField' in the OrganizationEmployeeHistoryRecord List config, or
   *  3. As an alias to a 'name' field on the OrganizationEmployeeHistoryRecord List (if one exists), or
   *  4. As an alias to the 'id' field on the OrganizationEmployeeHistoryRecord List.
   */
  _label_?: Maybe<Scalars['String']>;
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  organization?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['String']>;
  inviteCode?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  isAccepted?: Maybe<Scalars['Boolean']>;
  isRejected?: Maybe<Scalars['Boolean']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<OrganizationEmployeeHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type OrganizationEmployeeHistoryRecordWhereInput = {
  AND?: Maybe<Array<Maybe<OrganizationEmployeeHistoryRecordWhereInput>>>;
  OR?: Maybe<Array<Maybe<OrganizationEmployeeHistoryRecordWhereInput>>>;
  dv?: Maybe<Scalars['Int']>;
  dv_not?: Maybe<Scalars['Int']>;
  dv_lt?: Maybe<Scalars['Int']>;
  dv_lte?: Maybe<Scalars['Int']>;
  dv_gt?: Maybe<Scalars['Int']>;
  dv_gte?: Maybe<Scalars['Int']>;
  dv_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  dv_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sender?: Maybe<Scalars['JSON']>;
  sender_not?: Maybe<Scalars['JSON']>;
  sender_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  sender_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  organization?: Maybe<Scalars['String']>;
  organization_not?: Maybe<Scalars['String']>;
  organization_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  organization_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  user?: Maybe<Scalars['String']>;
  user_not?: Maybe<Scalars['String']>;
  user_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  user_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  inviteCode?: Maybe<Scalars['ID']>;
  inviteCode_not?: Maybe<Scalars['ID']>;
  inviteCode_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  inviteCode_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email?: Maybe<Scalars['String']>;
  email_not?: Maybe<Scalars['String']>;
  email_contains?: Maybe<Scalars['String']>;
  email_not_contains?: Maybe<Scalars['String']>;
  email_starts_with?: Maybe<Scalars['String']>;
  email_not_starts_with?: Maybe<Scalars['String']>;
  email_ends_with?: Maybe<Scalars['String']>;
  email_not_ends_with?: Maybe<Scalars['String']>;
  email_i?: Maybe<Scalars['String']>;
  email_not_i?: Maybe<Scalars['String']>;
  email_contains_i?: Maybe<Scalars['String']>;
  email_not_contains_i?: Maybe<Scalars['String']>;
  email_starts_with_i?: Maybe<Scalars['String']>;
  email_not_starts_with_i?: Maybe<Scalars['String']>;
  email_ends_with_i?: Maybe<Scalars['String']>;
  email_not_ends_with_i?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  phone?: Maybe<Scalars['String']>;
  phone_not?: Maybe<Scalars['String']>;
  phone_contains?: Maybe<Scalars['String']>;
  phone_not_contains?: Maybe<Scalars['String']>;
  phone_starts_with?: Maybe<Scalars['String']>;
  phone_not_starts_with?: Maybe<Scalars['String']>;
  phone_ends_with?: Maybe<Scalars['String']>;
  phone_not_ends_with?: Maybe<Scalars['String']>;
  phone_i?: Maybe<Scalars['String']>;
  phone_not_i?: Maybe<Scalars['String']>;
  phone_contains_i?: Maybe<Scalars['String']>;
  phone_not_contains_i?: Maybe<Scalars['String']>;
  phone_starts_with_i?: Maybe<Scalars['String']>;
  phone_not_starts_with_i?: Maybe<Scalars['String']>;
  phone_ends_with_i?: Maybe<Scalars['String']>;
  phone_not_ends_with_i?: Maybe<Scalars['String']>;
  phone_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  phone_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  role?: Maybe<Scalars['String']>;
  role_not?: Maybe<Scalars['String']>;
  role_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  role_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  isAccepted?: Maybe<Scalars['Boolean']>;
  isAccepted_not?: Maybe<Scalars['Boolean']>;
  isRejected?: Maybe<Scalars['Boolean']>;
  isRejected_not?: Maybe<Scalars['Boolean']>;
  v?: Maybe<Scalars['Int']>;
  v_not?: Maybe<Scalars['Int']>;
  v_lt?: Maybe<Scalars['Int']>;
  v_lte?: Maybe<Scalars['Int']>;
  v_gt?: Maybe<Scalars['Int']>;
  v_gte?: Maybe<Scalars['Int']>;
  v_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  v_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  createdAt?: Maybe<Scalars['String']>;
  createdAt_not?: Maybe<Scalars['String']>;
  createdAt_lt?: Maybe<Scalars['String']>;
  createdAt_lte?: Maybe<Scalars['String']>;
  createdAt_gt?: Maybe<Scalars['String']>;
  createdAt_gte?: Maybe<Scalars['String']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedAt_not?: Maybe<Scalars['String']>;
  updatedAt_lt?: Maybe<Scalars['String']>;
  updatedAt_lte?: Maybe<Scalars['String']>;
  updatedAt_gt?: Maybe<Scalars['String']>;
  updatedAt_gte?: Maybe<Scalars['String']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy?: Maybe<Scalars['String']>;
  createdBy_not?: Maybe<Scalars['String']>;
  createdBy_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedBy?: Maybe<Scalars['String']>;
  updatedBy_not?: Maybe<Scalars['String']>;
  updatedBy_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedBy_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  history_date?: Maybe<Scalars['String']>;
  history_date_not?: Maybe<Scalars['String']>;
  history_date_lt?: Maybe<Scalars['String']>;
  history_date_lte?: Maybe<Scalars['String']>;
  history_date_gt?: Maybe<Scalars['String']>;
  history_date_gte?: Maybe<Scalars['String']>;
  history_date_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_date_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_action?: Maybe<OrganizationEmployeeHistoryRecordHistoryActionType>;
  history_action_not?: Maybe<OrganizationEmployeeHistoryRecordHistoryActionType>;
  history_action_in?: Maybe<Array<Maybe<OrganizationEmployeeHistoryRecordHistoryActionType>>>;
  history_action_not_in?: Maybe<Array<Maybe<OrganizationEmployeeHistoryRecordHistoryActionType>>>;
  history_id?: Maybe<Scalars['String']>;
  history_id_not?: Maybe<Scalars['String']>;
  history_id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_id_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type OrganizationEmployeeHistoryRecordWhereUniqueInput = {
  id: Scalars['ID'];
};

export enum SortOrganizationEmployeeHistoryRecordsBy {
  DvAsc = 'dv_ASC',
  DvDesc = 'dv_DESC',
  InviteCodeAsc = 'inviteCode_ASC',
  InviteCodeDesc = 'inviteCode_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  IsAcceptedAsc = 'isAccepted_ASC',
  IsAcceptedDesc = 'isAccepted_DESC',
  IsRejectedAsc = 'isRejected_ASC',
  IsRejectedDesc = 'isRejected_DESC',
  VAsc = 'v_ASC',
  VDesc = 'v_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  HistoryDateAsc = 'history_date_ASC',
  HistoryDateDesc = 'history_date_DESC',
  HistoryActionAsc = 'history_action_ASC',
  HistoryActionDesc = 'history_action_DESC'
}

export type OrganizationEmployeeHistoryRecordUpdateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  organization?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['String']>;
  inviteCode?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  isAccepted?: Maybe<Scalars['Boolean']>;
  isRejected?: Maybe<Scalars['Boolean']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<OrganizationEmployeeHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type OrganizationEmployeeHistoryRecordsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<OrganizationEmployeeHistoryRecordUpdateInput>;
};

export type OrganizationEmployeeHistoryRecordCreateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  organization?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['String']>;
  inviteCode?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  isAccepted?: Maybe<Scalars['Boolean']>;
  isRejected?: Maybe<Scalars['Boolean']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<OrganizationEmployeeHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type OrganizationEmployeeHistoryRecordsCreateInput = {
  data?: Maybe<OrganizationEmployeeHistoryRecordCreateInput>;
};

export type OrganizationRelateToOneInput = {
  create?: Maybe<OrganizationCreateInput>;
  connect?: Maybe<OrganizationWhereUniqueInput>;
  disconnect?: Maybe<OrganizationWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type OrganizationEmployeeRoleRelateToOneInput = {
  create?: Maybe<OrganizationEmployeeRoleCreateInput>;
  connect?: Maybe<OrganizationEmployeeRoleWhereUniqueInput>;
  disconnect?: Maybe<OrganizationEmployeeRoleWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

/**  B2B customer employees  */
export type OrganizationEmployee = {
  __typename?: 'OrganizationEmployee';
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the OrganizationEmployee List config, or
   *  2. As an alias to the field set on 'labelField' in the OrganizationEmployee List config, or
   *  3. As an alias to a 'name' field on the OrganizationEmployee List (if one exists), or
   *  4. As an alias to the 'id' field on the OrganizationEmployee List.
   */
  _label_?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /**  Data structure Version  */
  dv?: Maybe<Scalars['Int']>;
  /**  Client-side devise identification used for the anti-fraud detection. Example `{ dv: '1', fingerprint: 'VaxSw2aXZa'}`. Where the `fingerprint` should be the same for the same devices and it's not linked to the user ID. It's the device ID like browser / mobile application / remote system  */
  sender?: Maybe<Scalars['JSON']>;
  /**  Ref to the organization. The object will be deleted if the organization ceases to exist  */
  organization?: Maybe<Organization>;
  /**  If user exists => invite is matched by email/phone (user can reject or accept it)  */
  user?: Maybe<User>;
  /**  Secret invite code (used for accept invite verification)  */
  inviteCode?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  role?: Maybe<OrganizationEmployeeRole>;
  isAccepted?: Maybe<Scalars['Boolean']>;
  isRejected?: Maybe<Scalars['Boolean']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<User>;
  updatedBy?: Maybe<User>;
};

export type OrganizationEmployeeWhereInput = {
  AND?: Maybe<Array<Maybe<OrganizationEmployeeWhereInput>>>;
  OR?: Maybe<Array<Maybe<OrganizationEmployeeWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  dv?: Maybe<Scalars['Int']>;
  dv_not?: Maybe<Scalars['Int']>;
  dv_lt?: Maybe<Scalars['Int']>;
  dv_lte?: Maybe<Scalars['Int']>;
  dv_gt?: Maybe<Scalars['Int']>;
  dv_gte?: Maybe<Scalars['Int']>;
  dv_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  dv_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sender?: Maybe<Scalars['JSON']>;
  sender_not?: Maybe<Scalars['JSON']>;
  sender_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  sender_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  organization?: Maybe<OrganizationWhereInput>;
  organization_is_null?: Maybe<Scalars['Boolean']>;
  user?: Maybe<UserWhereInput>;
  user_is_null?: Maybe<Scalars['Boolean']>;
  inviteCode?: Maybe<Scalars['ID']>;
  inviteCode_not?: Maybe<Scalars['ID']>;
  inviteCode_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  inviteCode_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email?: Maybe<Scalars['String']>;
  email_not?: Maybe<Scalars['String']>;
  email_contains?: Maybe<Scalars['String']>;
  email_not_contains?: Maybe<Scalars['String']>;
  email_starts_with?: Maybe<Scalars['String']>;
  email_not_starts_with?: Maybe<Scalars['String']>;
  email_ends_with?: Maybe<Scalars['String']>;
  email_not_ends_with?: Maybe<Scalars['String']>;
  email_i?: Maybe<Scalars['String']>;
  email_not_i?: Maybe<Scalars['String']>;
  email_contains_i?: Maybe<Scalars['String']>;
  email_not_contains_i?: Maybe<Scalars['String']>;
  email_starts_with_i?: Maybe<Scalars['String']>;
  email_not_starts_with_i?: Maybe<Scalars['String']>;
  email_ends_with_i?: Maybe<Scalars['String']>;
  email_not_ends_with_i?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  phone?: Maybe<Scalars['String']>;
  phone_not?: Maybe<Scalars['String']>;
  phone_contains?: Maybe<Scalars['String']>;
  phone_not_contains?: Maybe<Scalars['String']>;
  phone_starts_with?: Maybe<Scalars['String']>;
  phone_not_starts_with?: Maybe<Scalars['String']>;
  phone_ends_with?: Maybe<Scalars['String']>;
  phone_not_ends_with?: Maybe<Scalars['String']>;
  phone_i?: Maybe<Scalars['String']>;
  phone_not_i?: Maybe<Scalars['String']>;
  phone_contains_i?: Maybe<Scalars['String']>;
  phone_not_contains_i?: Maybe<Scalars['String']>;
  phone_starts_with_i?: Maybe<Scalars['String']>;
  phone_not_starts_with_i?: Maybe<Scalars['String']>;
  phone_ends_with_i?: Maybe<Scalars['String']>;
  phone_not_ends_with_i?: Maybe<Scalars['String']>;
  phone_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  phone_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  role?: Maybe<OrganizationEmployeeRoleWhereInput>;
  role_is_null?: Maybe<Scalars['Boolean']>;
  isAccepted?: Maybe<Scalars['Boolean']>;
  isAccepted_not?: Maybe<Scalars['Boolean']>;
  isRejected?: Maybe<Scalars['Boolean']>;
  isRejected_not?: Maybe<Scalars['Boolean']>;
  v?: Maybe<Scalars['Int']>;
  v_not?: Maybe<Scalars['Int']>;
  v_lt?: Maybe<Scalars['Int']>;
  v_lte?: Maybe<Scalars['Int']>;
  v_gt?: Maybe<Scalars['Int']>;
  v_gte?: Maybe<Scalars['Int']>;
  v_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  v_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  createdAt?: Maybe<Scalars['String']>;
  createdAt_not?: Maybe<Scalars['String']>;
  createdAt_lt?: Maybe<Scalars['String']>;
  createdAt_lte?: Maybe<Scalars['String']>;
  createdAt_gt?: Maybe<Scalars['String']>;
  createdAt_gte?: Maybe<Scalars['String']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedAt_not?: Maybe<Scalars['String']>;
  updatedAt_lt?: Maybe<Scalars['String']>;
  updatedAt_lte?: Maybe<Scalars['String']>;
  updatedAt_gt?: Maybe<Scalars['String']>;
  updatedAt_gte?: Maybe<Scalars['String']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy?: Maybe<UserWhereInput>;
  createdBy_is_null?: Maybe<Scalars['Boolean']>;
  updatedBy?: Maybe<UserWhereInput>;
  updatedBy_is_null?: Maybe<Scalars['Boolean']>;
};

export type OrganizationEmployeeWhereUniqueInput = {
  id: Scalars['ID'];
};

export enum SortOrganizationEmployeesBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  DvAsc = 'dv_ASC',
  DvDesc = 'dv_DESC',
  OrganizationAsc = 'organization_ASC',
  OrganizationDesc = 'organization_DESC',
  UserAsc = 'user_ASC',
  UserDesc = 'user_DESC',
  InviteCodeAsc = 'inviteCode_ASC',
  InviteCodeDesc = 'inviteCode_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  RoleAsc = 'role_ASC',
  RoleDesc = 'role_DESC',
  IsAcceptedAsc = 'isAccepted_ASC',
  IsAcceptedDesc = 'isAccepted_DESC',
  IsRejectedAsc = 'isRejected_ASC',
  IsRejectedDesc = 'isRejected_DESC',
  VAsc = 'v_ASC',
  VDesc = 'v_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  CreatedByAsc = 'createdBy_ASC',
  CreatedByDesc = 'createdBy_DESC',
  UpdatedByAsc = 'updatedBy_ASC',
  UpdatedByDesc = 'updatedBy_DESC'
}

export type OrganizationEmployeeUpdateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  organization?: Maybe<OrganizationRelateToOneInput>;
  user?: Maybe<UserRelateToOneInput>;
  inviteCode?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  role?: Maybe<OrganizationEmployeeRoleRelateToOneInput>;
  isAccepted?: Maybe<Scalars['Boolean']>;
  isRejected?: Maybe<Scalars['Boolean']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserRelateToOneInput>;
  updatedBy?: Maybe<UserRelateToOneInput>;
};

export type OrganizationEmployeesUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<OrganizationEmployeeUpdateInput>;
};

export type OrganizationEmployeeCreateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  organization?: Maybe<OrganizationRelateToOneInput>;
  user?: Maybe<UserRelateToOneInput>;
  inviteCode?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  role?: Maybe<OrganizationEmployeeRoleRelateToOneInput>;
  isAccepted?: Maybe<Scalars['Boolean']>;
  isRejected?: Maybe<Scalars['Boolean']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserRelateToOneInput>;
  updatedBy?: Maybe<UserRelateToOneInput>;
};

export type OrganizationEmployeesCreateInput = {
  data?: Maybe<OrganizationEmployeeCreateInput>;
};

export enum OrganizationEmployeeRoleHistoryRecordHistoryActionType {
  C = 'c',
  U = 'u',
  D = 'd'
}

/**  A keystone list  */
export type OrganizationEmployeeRoleHistoryRecord = {
  __typename?: 'OrganizationEmployeeRoleHistoryRecord';
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the OrganizationEmployeeRoleHistoryRecord List config, or
   *  2. As an alias to the field set on 'labelField' in the OrganizationEmployeeRoleHistoryRecord List config, or
   *  3. As an alias to a 'name' field on the OrganizationEmployeeRoleHistoryRecord List (if one exists), or
   *  4. As an alias to the 'id' field on the OrganizationEmployeeRoleHistoryRecord List.
   */
  _label_?: Maybe<Scalars['String']>;
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  organization?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  canManageOrganization?: Maybe<Scalars['Boolean']>;
  canManageEmployees?: Maybe<Scalars['Boolean']>;
  canManageRoles?: Maybe<Scalars['Boolean']>;
  canManageIntegrations?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<OrganizationEmployeeRoleHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type OrganizationEmployeeRoleHistoryRecordWhereInput = {
  AND?: Maybe<Array<Maybe<OrganizationEmployeeRoleHistoryRecordWhereInput>>>;
  OR?: Maybe<Array<Maybe<OrganizationEmployeeRoleHistoryRecordWhereInput>>>;
  dv?: Maybe<Scalars['Int']>;
  dv_not?: Maybe<Scalars['Int']>;
  dv_lt?: Maybe<Scalars['Int']>;
  dv_lte?: Maybe<Scalars['Int']>;
  dv_gt?: Maybe<Scalars['Int']>;
  dv_gte?: Maybe<Scalars['Int']>;
  dv_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  dv_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sender?: Maybe<Scalars['JSON']>;
  sender_not?: Maybe<Scalars['JSON']>;
  sender_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  sender_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  organization?: Maybe<Scalars['String']>;
  organization_not?: Maybe<Scalars['String']>;
  organization_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  organization_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  canManageOrganization?: Maybe<Scalars['Boolean']>;
  canManageOrganization_not?: Maybe<Scalars['Boolean']>;
  canManageEmployees?: Maybe<Scalars['Boolean']>;
  canManageEmployees_not?: Maybe<Scalars['Boolean']>;
  canManageRoles?: Maybe<Scalars['Boolean']>;
  canManageRoles_not?: Maybe<Scalars['Boolean']>;
  canManageIntegrations?: Maybe<Scalars['Boolean']>;
  canManageIntegrations_not?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  v?: Maybe<Scalars['Int']>;
  v_not?: Maybe<Scalars['Int']>;
  v_lt?: Maybe<Scalars['Int']>;
  v_lte?: Maybe<Scalars['Int']>;
  v_gt?: Maybe<Scalars['Int']>;
  v_gte?: Maybe<Scalars['Int']>;
  v_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  v_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  createdAt?: Maybe<Scalars['String']>;
  createdAt_not?: Maybe<Scalars['String']>;
  createdAt_lt?: Maybe<Scalars['String']>;
  createdAt_lte?: Maybe<Scalars['String']>;
  createdAt_gt?: Maybe<Scalars['String']>;
  createdAt_gte?: Maybe<Scalars['String']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedAt_not?: Maybe<Scalars['String']>;
  updatedAt_lt?: Maybe<Scalars['String']>;
  updatedAt_lte?: Maybe<Scalars['String']>;
  updatedAt_gt?: Maybe<Scalars['String']>;
  updatedAt_gte?: Maybe<Scalars['String']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy?: Maybe<Scalars['String']>;
  createdBy_not?: Maybe<Scalars['String']>;
  createdBy_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedBy?: Maybe<Scalars['String']>;
  updatedBy_not?: Maybe<Scalars['String']>;
  updatedBy_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedBy_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_date?: Maybe<Scalars['String']>;
  history_date_not?: Maybe<Scalars['String']>;
  history_date_lt?: Maybe<Scalars['String']>;
  history_date_lte?: Maybe<Scalars['String']>;
  history_date_gt?: Maybe<Scalars['String']>;
  history_date_gte?: Maybe<Scalars['String']>;
  history_date_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_date_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_action?: Maybe<OrganizationEmployeeRoleHistoryRecordHistoryActionType>;
  history_action_not?: Maybe<OrganizationEmployeeRoleHistoryRecordHistoryActionType>;
  history_action_in?: Maybe<Array<Maybe<OrganizationEmployeeRoleHistoryRecordHistoryActionType>>>;
  history_action_not_in?: Maybe<Array<Maybe<OrganizationEmployeeRoleHistoryRecordHistoryActionType>>>;
  history_id?: Maybe<Scalars['String']>;
  history_id_not?: Maybe<Scalars['String']>;
  history_id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_id_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type OrganizationEmployeeRoleHistoryRecordWhereUniqueInput = {
  id: Scalars['ID'];
};

export enum SortOrganizationEmployeeRoleHistoryRecordsBy {
  DvAsc = 'dv_ASC',
  DvDesc = 'dv_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  CanManageOrganizationAsc = 'canManageOrganization_ASC',
  CanManageOrganizationDesc = 'canManageOrganization_DESC',
  CanManageEmployeesAsc = 'canManageEmployees_ASC',
  CanManageEmployeesDesc = 'canManageEmployees_DESC',
  CanManageRolesAsc = 'canManageRoles_ASC',
  CanManageRolesDesc = 'canManageRoles_DESC',
  CanManageIntegrationsAsc = 'canManageIntegrations_ASC',
  CanManageIntegrationsDesc = 'canManageIntegrations_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  VAsc = 'v_ASC',
  VDesc = 'v_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  HistoryDateAsc = 'history_date_ASC',
  HistoryDateDesc = 'history_date_DESC',
  HistoryActionAsc = 'history_action_ASC',
  HistoryActionDesc = 'history_action_DESC'
}

export type OrganizationEmployeeRoleHistoryRecordUpdateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  organization?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  canManageOrganization?: Maybe<Scalars['Boolean']>;
  canManageEmployees?: Maybe<Scalars['Boolean']>;
  canManageRoles?: Maybe<Scalars['Boolean']>;
  canManageIntegrations?: Maybe<Scalars['Boolean']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<OrganizationEmployeeRoleHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type OrganizationEmployeeRoleHistoryRecordsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<OrganizationEmployeeRoleHistoryRecordUpdateInput>;
};

export type OrganizationEmployeeRoleHistoryRecordCreateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  organization?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  canManageOrganization?: Maybe<Scalars['Boolean']>;
  canManageEmployees?: Maybe<Scalars['Boolean']>;
  canManageRoles?: Maybe<Scalars['Boolean']>;
  canManageIntegrations?: Maybe<Scalars['Boolean']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<OrganizationEmployeeRoleHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type OrganizationEmployeeRoleHistoryRecordsCreateInput = {
  data?: Maybe<OrganizationEmployeeRoleHistoryRecordCreateInput>;
};

/**  Employee role name and access permissions  */
export type OrganizationEmployeeRole = {
  __typename?: 'OrganizationEmployeeRole';
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the OrganizationEmployeeRole List config, or
   *  2. As an alias to the field set on 'labelField' in the OrganizationEmployeeRole List config, or
   *  3. As an alias to a 'name' field on the OrganizationEmployeeRole List (if one exists), or
   *  4. As an alias to the 'id' field on the OrganizationEmployeeRole List.
   */
  _label_?: Maybe<Scalars['String']>;
  /**  Data structure Version  */
  dv?: Maybe<Scalars['Int']>;
  /**  Client-side devise identification used for the anti-fraud detection. Example `{ dv: '1', fingerprint: 'VaxSw2aXZa'}`. Where the `fingerprint` should be the same for the same devices and it's not linked to the user ID. It's the device ID like browser / mobile application / remote system  */
  sender?: Maybe<Scalars['JSON']>;
  /**  Ref to the organization. The object will be deleted if the organization ceases to exist  */
  organization?: Maybe<Organization>;
  name?: Maybe<Scalars['String']>;
  canManageOrganization?: Maybe<Scalars['Boolean']>;
  canManageEmployees?: Maybe<Scalars['Boolean']>;
  canManageRoles?: Maybe<Scalars['Boolean']>;
  canManageIntegrations?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<User>;
  updatedBy?: Maybe<User>;
};

export type OrganizationEmployeeRoleWhereInput = {
  AND?: Maybe<Array<Maybe<OrganizationEmployeeRoleWhereInput>>>;
  OR?: Maybe<Array<Maybe<OrganizationEmployeeRoleWhereInput>>>;
  dv?: Maybe<Scalars['Int']>;
  dv_not?: Maybe<Scalars['Int']>;
  dv_lt?: Maybe<Scalars['Int']>;
  dv_lte?: Maybe<Scalars['Int']>;
  dv_gt?: Maybe<Scalars['Int']>;
  dv_gte?: Maybe<Scalars['Int']>;
  dv_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  dv_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sender?: Maybe<Scalars['JSON']>;
  sender_not?: Maybe<Scalars['JSON']>;
  sender_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  sender_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  organization?: Maybe<OrganizationWhereInput>;
  organization_is_null?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  canManageOrganization?: Maybe<Scalars['Boolean']>;
  canManageOrganization_not?: Maybe<Scalars['Boolean']>;
  canManageEmployees?: Maybe<Scalars['Boolean']>;
  canManageEmployees_not?: Maybe<Scalars['Boolean']>;
  canManageRoles?: Maybe<Scalars['Boolean']>;
  canManageRoles_not?: Maybe<Scalars['Boolean']>;
  canManageIntegrations?: Maybe<Scalars['Boolean']>;
  canManageIntegrations_not?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  v?: Maybe<Scalars['Int']>;
  v_not?: Maybe<Scalars['Int']>;
  v_lt?: Maybe<Scalars['Int']>;
  v_lte?: Maybe<Scalars['Int']>;
  v_gt?: Maybe<Scalars['Int']>;
  v_gte?: Maybe<Scalars['Int']>;
  v_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  v_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  createdAt?: Maybe<Scalars['String']>;
  createdAt_not?: Maybe<Scalars['String']>;
  createdAt_lt?: Maybe<Scalars['String']>;
  createdAt_lte?: Maybe<Scalars['String']>;
  createdAt_gt?: Maybe<Scalars['String']>;
  createdAt_gte?: Maybe<Scalars['String']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedAt_not?: Maybe<Scalars['String']>;
  updatedAt_lt?: Maybe<Scalars['String']>;
  updatedAt_lte?: Maybe<Scalars['String']>;
  updatedAt_gt?: Maybe<Scalars['String']>;
  updatedAt_gte?: Maybe<Scalars['String']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy?: Maybe<UserWhereInput>;
  createdBy_is_null?: Maybe<Scalars['Boolean']>;
  updatedBy?: Maybe<UserWhereInput>;
  updatedBy_is_null?: Maybe<Scalars['Boolean']>;
};

export type OrganizationEmployeeRoleWhereUniqueInput = {
  id: Scalars['ID'];
};

export enum SortOrganizationEmployeeRolesBy {
  DvAsc = 'dv_ASC',
  DvDesc = 'dv_DESC',
  OrganizationAsc = 'organization_ASC',
  OrganizationDesc = 'organization_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  CanManageOrganizationAsc = 'canManageOrganization_ASC',
  CanManageOrganizationDesc = 'canManageOrganization_DESC',
  CanManageEmployeesAsc = 'canManageEmployees_ASC',
  CanManageEmployeesDesc = 'canManageEmployees_DESC',
  CanManageRolesAsc = 'canManageRoles_ASC',
  CanManageRolesDesc = 'canManageRoles_DESC',
  CanManageIntegrationsAsc = 'canManageIntegrations_ASC',
  CanManageIntegrationsDesc = 'canManageIntegrations_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  VAsc = 'v_ASC',
  VDesc = 'v_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  CreatedByAsc = 'createdBy_ASC',
  CreatedByDesc = 'createdBy_DESC',
  UpdatedByAsc = 'updatedBy_ASC',
  UpdatedByDesc = 'updatedBy_DESC'
}

export type OrganizationEmployeeRoleUpdateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  organization?: Maybe<OrganizationRelateToOneInput>;
  name?: Maybe<Scalars['String']>;
  canManageOrganization?: Maybe<Scalars['Boolean']>;
  canManageEmployees?: Maybe<Scalars['Boolean']>;
  canManageRoles?: Maybe<Scalars['Boolean']>;
  canManageIntegrations?: Maybe<Scalars['Boolean']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserRelateToOneInput>;
  updatedBy?: Maybe<UserRelateToOneInput>;
};

export type OrganizationEmployeeRolesUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<OrganizationEmployeeRoleUpdateInput>;
};

export type OrganizationEmployeeRoleCreateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  organization?: Maybe<OrganizationRelateToOneInput>;
  name?: Maybe<Scalars['String']>;
  canManageOrganization?: Maybe<Scalars['Boolean']>;
  canManageEmployees?: Maybe<Scalars['Boolean']>;
  canManageRoles?: Maybe<Scalars['Boolean']>;
  canManageIntegrations?: Maybe<Scalars['Boolean']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserRelateToOneInput>;
  updatedBy?: Maybe<UserRelateToOneInput>;
};

export type OrganizationEmployeeRolesCreateInput = {
  data?: Maybe<OrganizationEmployeeRoleCreateInput>;
};

export enum PropertyHistoryRecordHistoryActionType {
  C = 'c',
  U = 'u',
  D = 'd'
}

/**  A keystone list  */
export type PropertyHistoryRecord = {
  __typename?: 'PropertyHistoryRecord';
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the PropertyHistoryRecord List config, or
   *  2. As an alias to the field set on 'labelField' in the PropertyHistoryRecord List config, or
   *  3. As an alias to a 'name' field on the PropertyHistoryRecord List (if one exists), or
   *  4. As an alias to the 'id' field on the PropertyHistoryRecord List.
   */
  _label_?: Maybe<Scalars['String']>;
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  organization?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  addressMeta?: Maybe<Scalars['JSON']>;
  type?: Maybe<Scalars['String']>;
  map?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['JSON']>;
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<PropertyHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type PropertyHistoryRecordWhereInput = {
  AND?: Maybe<Array<Maybe<PropertyHistoryRecordWhereInput>>>;
  OR?: Maybe<Array<Maybe<PropertyHistoryRecordWhereInput>>>;
  dv?: Maybe<Scalars['Int']>;
  dv_not?: Maybe<Scalars['Int']>;
  dv_lt?: Maybe<Scalars['Int']>;
  dv_lte?: Maybe<Scalars['Int']>;
  dv_gt?: Maybe<Scalars['Int']>;
  dv_gte?: Maybe<Scalars['Int']>;
  dv_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  dv_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sender?: Maybe<Scalars['JSON']>;
  sender_not?: Maybe<Scalars['JSON']>;
  sender_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  sender_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  organization?: Maybe<Scalars['String']>;
  organization_not?: Maybe<Scalars['String']>;
  organization_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  organization_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  address?: Maybe<Scalars['String']>;
  address_not?: Maybe<Scalars['String']>;
  address_contains?: Maybe<Scalars['String']>;
  address_not_contains?: Maybe<Scalars['String']>;
  address_starts_with?: Maybe<Scalars['String']>;
  address_not_starts_with?: Maybe<Scalars['String']>;
  address_ends_with?: Maybe<Scalars['String']>;
  address_not_ends_with?: Maybe<Scalars['String']>;
  address_i?: Maybe<Scalars['String']>;
  address_not_i?: Maybe<Scalars['String']>;
  address_contains_i?: Maybe<Scalars['String']>;
  address_not_contains_i?: Maybe<Scalars['String']>;
  address_starts_with_i?: Maybe<Scalars['String']>;
  address_not_starts_with_i?: Maybe<Scalars['String']>;
  address_ends_with_i?: Maybe<Scalars['String']>;
  address_not_ends_with_i?: Maybe<Scalars['String']>;
  address_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  address_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  addressMeta?: Maybe<Scalars['JSON']>;
  addressMeta_not?: Maybe<Scalars['JSON']>;
  addressMeta_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  addressMeta_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  type?: Maybe<Scalars['String']>;
  type_not?: Maybe<Scalars['String']>;
  type_contains?: Maybe<Scalars['String']>;
  type_not_contains?: Maybe<Scalars['String']>;
  type_starts_with?: Maybe<Scalars['String']>;
  type_not_starts_with?: Maybe<Scalars['String']>;
  type_ends_with?: Maybe<Scalars['String']>;
  type_not_ends_with?: Maybe<Scalars['String']>;
  type_i?: Maybe<Scalars['String']>;
  type_not_i?: Maybe<Scalars['String']>;
  type_contains_i?: Maybe<Scalars['String']>;
  type_not_contains_i?: Maybe<Scalars['String']>;
  type_starts_with_i?: Maybe<Scalars['String']>;
  type_not_starts_with_i?: Maybe<Scalars['String']>;
  type_ends_with_i?: Maybe<Scalars['String']>;
  type_not_ends_with_i?: Maybe<Scalars['String']>;
  type_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  type_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  map?: Maybe<Scalars['JSON']>;
  map_not?: Maybe<Scalars['JSON']>;
  map_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  map_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  v?: Maybe<Scalars['Int']>;
  v_not?: Maybe<Scalars['Int']>;
  v_lt?: Maybe<Scalars['Int']>;
  v_lte?: Maybe<Scalars['Int']>;
  v_gt?: Maybe<Scalars['Int']>;
  v_gte?: Maybe<Scalars['Int']>;
  v_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  v_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  createdAt?: Maybe<Scalars['String']>;
  createdAt_not?: Maybe<Scalars['String']>;
  createdAt_lt?: Maybe<Scalars['String']>;
  createdAt_lte?: Maybe<Scalars['String']>;
  createdAt_gt?: Maybe<Scalars['String']>;
  createdAt_gte?: Maybe<Scalars['String']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedAt_not?: Maybe<Scalars['String']>;
  updatedAt_lt?: Maybe<Scalars['String']>;
  updatedAt_lte?: Maybe<Scalars['String']>;
  updatedAt_gt?: Maybe<Scalars['String']>;
  updatedAt_gte?: Maybe<Scalars['String']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy?: Maybe<Scalars['String']>;
  createdBy_not?: Maybe<Scalars['String']>;
  createdBy_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedBy?: Maybe<Scalars['String']>;
  updatedBy_not?: Maybe<Scalars['String']>;
  updatedBy_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedBy_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedAt_not?: Maybe<Scalars['String']>;
  deletedAt_lt?: Maybe<Scalars['String']>;
  deletedAt_lte?: Maybe<Scalars['String']>;
  deletedAt_gt?: Maybe<Scalars['String']>;
  deletedAt_gte?: Maybe<Scalars['String']>;
  deletedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  deletedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  newId?: Maybe<Scalars['JSON']>;
  newId_not?: Maybe<Scalars['JSON']>;
  newId_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  newId_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  history_date?: Maybe<Scalars['String']>;
  history_date_not?: Maybe<Scalars['String']>;
  history_date_lt?: Maybe<Scalars['String']>;
  history_date_lte?: Maybe<Scalars['String']>;
  history_date_gt?: Maybe<Scalars['String']>;
  history_date_gte?: Maybe<Scalars['String']>;
  history_date_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_date_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_action?: Maybe<PropertyHistoryRecordHistoryActionType>;
  history_action_not?: Maybe<PropertyHistoryRecordHistoryActionType>;
  history_action_in?: Maybe<Array<Maybe<PropertyHistoryRecordHistoryActionType>>>;
  history_action_not_in?: Maybe<Array<Maybe<PropertyHistoryRecordHistoryActionType>>>;
  history_id?: Maybe<Scalars['String']>;
  history_id_not?: Maybe<Scalars['String']>;
  history_id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_id_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type PropertyHistoryRecordWhereUniqueInput = {
  id: Scalars['ID'];
};

export enum SortPropertyHistoryRecordsBy {
  DvAsc = 'dv_ASC',
  DvDesc = 'dv_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  VAsc = 'v_ASC',
  VDesc = 'v_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  HistoryDateAsc = 'history_date_ASC',
  HistoryDateDesc = 'history_date_DESC',
  HistoryActionAsc = 'history_action_ASC',
  HistoryActionDesc = 'history_action_DESC'
}

export type PropertyHistoryRecordUpdateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  organization?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  addressMeta?: Maybe<Scalars['JSON']>;
  type?: Maybe<Scalars['String']>;
  map?: Maybe<Scalars['JSON']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['JSON']>;
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<PropertyHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type PropertyHistoryRecordsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<PropertyHistoryRecordUpdateInput>;
};

export type PropertyHistoryRecordCreateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  organization?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  addressMeta?: Maybe<Scalars['JSON']>;
  type?: Maybe<Scalars['String']>;
  map?: Maybe<Scalars['JSON']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['JSON']>;
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<PropertyHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type PropertyHistoryRecordsCreateInput = {
  data?: Maybe<PropertyHistoryRecordCreateInput>;
};

export enum PropertyTypeType {
  Building = 'building',
  Village = 'village'
}

/**  Common property. The property is divided into separate `unit` parts, each of which can be owned by an independent owner. Community farm, residential buildings, or a cottage settlement  */
export type Property = {
  __typename?: 'Property';
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the Property List config, or
   *  2. As an alias to the field set on 'labelField' in the Property List config, or
   *  3. As an alias to a 'name' field on the Property List (if one exists), or
   *  4. As an alias to the 'id' field on the Property List.
   */
  _label_?: Maybe<Scalars['String']>;
  /**  Data structure Version  */
  dv?: Maybe<Scalars['Int']>;
  /**  Client-side devise identification used for the anti-fraud detection. Example `{ dv: '1', fingerprint: 'VaxSw2aXZa'}`. Where the `fingerprint` should be the same for the same devices and it's not linked to the user ID. It's the device ID like browser / mobile application / remote system  */
  sender?: Maybe<Scalars['JSON']>;
  /**  Ref to the organization. The object will be deleted if the organization ceases to exist  */
  organization?: Maybe<Organization>;
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  /**  Property address components  */
  addressMeta?: Maybe<Scalars['JSON']>;
  /**  Common property type  */
  type?: Maybe<PropertyTypeType>;
  /**  Property map/schema  */
  map?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<User>;
  updatedBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['String']>;
};

export type PropertyWhereInput = {
  AND?: Maybe<Array<Maybe<PropertyWhereInput>>>;
  OR?: Maybe<Array<Maybe<PropertyWhereInput>>>;
  dv?: Maybe<Scalars['Int']>;
  dv_not?: Maybe<Scalars['Int']>;
  dv_lt?: Maybe<Scalars['Int']>;
  dv_lte?: Maybe<Scalars['Int']>;
  dv_gt?: Maybe<Scalars['Int']>;
  dv_gte?: Maybe<Scalars['Int']>;
  dv_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  dv_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sender?: Maybe<Scalars['JSON']>;
  sender_not?: Maybe<Scalars['JSON']>;
  sender_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  sender_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  organization?: Maybe<OrganizationWhereInput>;
  organization_is_null?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  address?: Maybe<Scalars['String']>;
  address_not?: Maybe<Scalars['String']>;
  address_contains?: Maybe<Scalars['String']>;
  address_not_contains?: Maybe<Scalars['String']>;
  address_starts_with?: Maybe<Scalars['String']>;
  address_not_starts_with?: Maybe<Scalars['String']>;
  address_ends_with?: Maybe<Scalars['String']>;
  address_not_ends_with?: Maybe<Scalars['String']>;
  address_i?: Maybe<Scalars['String']>;
  address_not_i?: Maybe<Scalars['String']>;
  address_contains_i?: Maybe<Scalars['String']>;
  address_not_contains_i?: Maybe<Scalars['String']>;
  address_starts_with_i?: Maybe<Scalars['String']>;
  address_not_starts_with_i?: Maybe<Scalars['String']>;
  address_ends_with_i?: Maybe<Scalars['String']>;
  address_not_ends_with_i?: Maybe<Scalars['String']>;
  address_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  address_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  addressMeta?: Maybe<Scalars['JSON']>;
  addressMeta_not?: Maybe<Scalars['JSON']>;
  addressMeta_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  addressMeta_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  type?: Maybe<PropertyTypeType>;
  type_not?: Maybe<PropertyTypeType>;
  type_in?: Maybe<Array<Maybe<PropertyTypeType>>>;
  type_not_in?: Maybe<Array<Maybe<PropertyTypeType>>>;
  map?: Maybe<Scalars['JSON']>;
  map_not?: Maybe<Scalars['JSON']>;
  map_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  map_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  v?: Maybe<Scalars['Int']>;
  v_not?: Maybe<Scalars['Int']>;
  v_lt?: Maybe<Scalars['Int']>;
  v_lte?: Maybe<Scalars['Int']>;
  v_gt?: Maybe<Scalars['Int']>;
  v_gte?: Maybe<Scalars['Int']>;
  v_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  v_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  createdAt?: Maybe<Scalars['String']>;
  createdAt_not?: Maybe<Scalars['String']>;
  createdAt_lt?: Maybe<Scalars['String']>;
  createdAt_lte?: Maybe<Scalars['String']>;
  createdAt_gt?: Maybe<Scalars['String']>;
  createdAt_gte?: Maybe<Scalars['String']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedAt_not?: Maybe<Scalars['String']>;
  updatedAt_lt?: Maybe<Scalars['String']>;
  updatedAt_lte?: Maybe<Scalars['String']>;
  updatedAt_gt?: Maybe<Scalars['String']>;
  updatedAt_gte?: Maybe<Scalars['String']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy?: Maybe<UserWhereInput>;
  createdBy_is_null?: Maybe<Scalars['Boolean']>;
  updatedBy?: Maybe<UserWhereInput>;
  updatedBy_is_null?: Maybe<Scalars['Boolean']>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedAt_not?: Maybe<Scalars['String']>;
  deletedAt_lt?: Maybe<Scalars['String']>;
  deletedAt_lte?: Maybe<Scalars['String']>;
  deletedAt_gt?: Maybe<Scalars['String']>;
  deletedAt_gte?: Maybe<Scalars['String']>;
  deletedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  deletedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  newId?: Maybe<Scalars['String']>;
  newId_not?: Maybe<Scalars['String']>;
  newId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  newId_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type PropertyWhereUniqueInput = {
  id: Scalars['ID'];
};

export enum SortPropertiesBy {
  DvAsc = 'dv_ASC',
  DvDesc = 'dv_DESC',
  OrganizationAsc = 'organization_ASC',
  OrganizationDesc = 'organization_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  VAsc = 'v_ASC',
  VDesc = 'v_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  CreatedByAsc = 'createdBy_ASC',
  CreatedByDesc = 'createdBy_DESC',
  UpdatedByAsc = 'updatedBy_ASC',
  UpdatedByDesc = 'updatedBy_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC'
}

export type PropertyUpdateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  organization?: Maybe<OrganizationRelateToOneInput>;
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  addressMeta?: Maybe<Scalars['JSON']>;
  type?: Maybe<PropertyTypeType>;
  map?: Maybe<Scalars['JSON']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserRelateToOneInput>;
  updatedBy?: Maybe<UserRelateToOneInput>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['String']>;
};

export type PropertiesUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<PropertyUpdateInput>;
};

export type PropertyCreateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  organization?: Maybe<OrganizationRelateToOneInput>;
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  addressMeta?: Maybe<Scalars['JSON']>;
  type?: Maybe<PropertyTypeType>;
  map?: Maybe<Scalars['JSON']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserRelateToOneInput>;
  updatedBy?: Maybe<UserRelateToOneInput>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['String']>;
};

export type PropertiesCreateInput = {
  data?: Maybe<PropertyCreateInput>;
};

export enum BillingIntegrationHistoryRecordHistoryActionType {
  C = 'c',
  U = 'u',
  D = 'd'
}

/**  A keystone list  */
export type BillingIntegrationHistoryRecord = {
  __typename?: 'BillingIntegrationHistoryRecord';
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the BillingIntegrationHistoryRecord List config, or
   *  2. As an alias to the field set on 'labelField' in the BillingIntegrationHistoryRecord List config, or
   *  3. As an alias to a 'name' field on the BillingIntegrationHistoryRecord List (if one exists), or
   *  4. As an alias to the 'id' field on the BillingIntegrationHistoryRecord List.
   */
  _label_?: Maybe<Scalars['String']>;
  dv?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['JSON']>;
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<BillingIntegrationHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type BillingIntegrationHistoryRecordWhereInput = {
  AND?: Maybe<Array<Maybe<BillingIntegrationHistoryRecordWhereInput>>>;
  OR?: Maybe<Array<Maybe<BillingIntegrationHistoryRecordWhereInput>>>;
  dv?: Maybe<Scalars['Int']>;
  dv_not?: Maybe<Scalars['Int']>;
  dv_lt?: Maybe<Scalars['Int']>;
  dv_lte?: Maybe<Scalars['Int']>;
  dv_gt?: Maybe<Scalars['Int']>;
  dv_gte?: Maybe<Scalars['Int']>;
  dv_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  dv_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  v?: Maybe<Scalars['Int']>;
  v_not?: Maybe<Scalars['Int']>;
  v_lt?: Maybe<Scalars['Int']>;
  v_lte?: Maybe<Scalars['Int']>;
  v_gt?: Maybe<Scalars['Int']>;
  v_gte?: Maybe<Scalars['Int']>;
  v_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  v_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  createdAt?: Maybe<Scalars['String']>;
  createdAt_not?: Maybe<Scalars['String']>;
  createdAt_lt?: Maybe<Scalars['String']>;
  createdAt_lte?: Maybe<Scalars['String']>;
  createdAt_gt?: Maybe<Scalars['String']>;
  createdAt_gte?: Maybe<Scalars['String']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedAt_not?: Maybe<Scalars['String']>;
  updatedAt_lt?: Maybe<Scalars['String']>;
  updatedAt_lte?: Maybe<Scalars['String']>;
  updatedAt_gt?: Maybe<Scalars['String']>;
  updatedAt_gte?: Maybe<Scalars['String']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy?: Maybe<Scalars['String']>;
  createdBy_not?: Maybe<Scalars['String']>;
  createdBy_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedBy?: Maybe<Scalars['String']>;
  updatedBy_not?: Maybe<Scalars['String']>;
  updatedBy_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedBy_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedAt_not?: Maybe<Scalars['String']>;
  deletedAt_lt?: Maybe<Scalars['String']>;
  deletedAt_lte?: Maybe<Scalars['String']>;
  deletedAt_gt?: Maybe<Scalars['String']>;
  deletedAt_gte?: Maybe<Scalars['String']>;
  deletedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  deletedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  newId?: Maybe<Scalars['JSON']>;
  newId_not?: Maybe<Scalars['JSON']>;
  newId_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  newId_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  history_date?: Maybe<Scalars['String']>;
  history_date_not?: Maybe<Scalars['String']>;
  history_date_lt?: Maybe<Scalars['String']>;
  history_date_lte?: Maybe<Scalars['String']>;
  history_date_gt?: Maybe<Scalars['String']>;
  history_date_gte?: Maybe<Scalars['String']>;
  history_date_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_date_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_action?: Maybe<BillingIntegrationHistoryRecordHistoryActionType>;
  history_action_not?: Maybe<BillingIntegrationHistoryRecordHistoryActionType>;
  history_action_in?: Maybe<Array<Maybe<BillingIntegrationHistoryRecordHistoryActionType>>>;
  history_action_not_in?: Maybe<Array<Maybe<BillingIntegrationHistoryRecordHistoryActionType>>>;
  history_id?: Maybe<Scalars['String']>;
  history_id_not?: Maybe<Scalars['String']>;
  history_id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_id_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type BillingIntegrationHistoryRecordWhereUniqueInput = {
  id: Scalars['ID'];
};

export enum SortBillingIntegrationHistoryRecordsBy {
  DvAsc = 'dv_ASC',
  DvDesc = 'dv_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  VAsc = 'v_ASC',
  VDesc = 'v_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  HistoryDateAsc = 'history_date_ASC',
  HistoryDateDesc = 'history_date_DESC',
  HistoryActionAsc = 'history_action_ASC',
  HistoryActionDesc = 'history_action_DESC'
}

export type BillingIntegrationHistoryRecordUpdateInput = {
  dv?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['JSON']>;
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<BillingIntegrationHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type BillingIntegrationHistoryRecordsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<BillingIntegrationHistoryRecordUpdateInput>;
};

export type BillingIntegrationHistoryRecordCreateInput = {
  dv?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['JSON']>;
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<BillingIntegrationHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type BillingIntegrationHistoryRecordsCreateInput = {
  data?: Maybe<BillingIntegrationHistoryRecordCreateInput>;
};

export type BillingIntegrationAccessRightRelateToManyInput = {
  create?: Maybe<Array<Maybe<BillingIntegrationAccessRightCreateInput>>>;
  connect?: Maybe<Array<Maybe<BillingIntegrationAccessRightWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<BillingIntegrationAccessRightWhereUniqueInput>>>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

/**  Identification of the `integration component` which responsible for getting data from the `billing data source` and delivering the data to `this API`. Examples: tap-1c, ...   */
export type BillingIntegration = {
  __typename?: 'BillingIntegration';
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the BillingIntegration List config, or
   *  2. As an alias to the field set on 'labelField' in the BillingIntegration List config, or
   *  3. As an alias to a 'name' field on the BillingIntegration List (if one exists), or
   *  4. As an alias to the 'id' field on the BillingIntegration List.
   */
  _label_?: Maybe<Scalars['String']>;
  /**  Data structure Version  */
  dv?: Maybe<Scalars['Int']>;
  /**  The name of the `integration component` that the developer remembers  */
  name?: Maybe<Scalars['String']>;
  accessRights: Array<BillingIntegrationAccessRight>;
  _accessRightsMeta?: Maybe<_QueryMeta>;
  id: Scalars['ID'];
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<User>;
  updatedBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['String']>;
};


/**  Identification of the `integration component` which responsible for getting data from the `billing data source` and delivering the data to `this API`. Examples: tap-1c, ...   */
export type BillingIntegrationAccessRightsArgs = {
  where?: Maybe<BillingIntegrationAccessRightWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBillingIntegrationAccessRightsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


/**  Identification of the `integration component` which responsible for getting data from the `billing data source` and delivering the data to `this API`. Examples: tap-1c, ...   */
export type BillingIntegration_AccessRightsMetaArgs = {
  where?: Maybe<BillingIntegrationAccessRightWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBillingIntegrationAccessRightsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type BillingIntegrationWhereInput = {
  AND?: Maybe<Array<Maybe<BillingIntegrationWhereInput>>>;
  OR?: Maybe<Array<Maybe<BillingIntegrationWhereInput>>>;
  dv?: Maybe<Scalars['Int']>;
  dv_not?: Maybe<Scalars['Int']>;
  dv_lt?: Maybe<Scalars['Int']>;
  dv_lte?: Maybe<Scalars['Int']>;
  dv_gt?: Maybe<Scalars['Int']>;
  dv_gte?: Maybe<Scalars['Int']>;
  dv_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  dv_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**  condition must be true for all nodes  */
  accessRights_every?: Maybe<BillingIntegrationAccessRightWhereInput>;
  /**  condition must be true for at least 1 node  */
  accessRights_some?: Maybe<BillingIntegrationAccessRightWhereInput>;
  /**  condition must be false for all nodes  */
  accessRights_none?: Maybe<BillingIntegrationAccessRightWhereInput>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  v?: Maybe<Scalars['Int']>;
  v_not?: Maybe<Scalars['Int']>;
  v_lt?: Maybe<Scalars['Int']>;
  v_lte?: Maybe<Scalars['Int']>;
  v_gt?: Maybe<Scalars['Int']>;
  v_gte?: Maybe<Scalars['Int']>;
  v_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  v_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  createdAt?: Maybe<Scalars['String']>;
  createdAt_not?: Maybe<Scalars['String']>;
  createdAt_lt?: Maybe<Scalars['String']>;
  createdAt_lte?: Maybe<Scalars['String']>;
  createdAt_gt?: Maybe<Scalars['String']>;
  createdAt_gte?: Maybe<Scalars['String']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedAt_not?: Maybe<Scalars['String']>;
  updatedAt_lt?: Maybe<Scalars['String']>;
  updatedAt_lte?: Maybe<Scalars['String']>;
  updatedAt_gt?: Maybe<Scalars['String']>;
  updatedAt_gte?: Maybe<Scalars['String']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy?: Maybe<UserWhereInput>;
  createdBy_is_null?: Maybe<Scalars['Boolean']>;
  updatedBy?: Maybe<UserWhereInput>;
  updatedBy_is_null?: Maybe<Scalars['Boolean']>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedAt_not?: Maybe<Scalars['String']>;
  deletedAt_lt?: Maybe<Scalars['String']>;
  deletedAt_lte?: Maybe<Scalars['String']>;
  deletedAt_gt?: Maybe<Scalars['String']>;
  deletedAt_gte?: Maybe<Scalars['String']>;
  deletedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  deletedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  newId?: Maybe<Scalars['String']>;
  newId_not?: Maybe<Scalars['String']>;
  newId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  newId_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type BillingIntegrationWhereUniqueInput = {
  id: Scalars['ID'];
};

export enum SortBillingIntegrationsBy {
  DvAsc = 'dv_ASC',
  DvDesc = 'dv_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  AccessRightsAsc = 'accessRights_ASC',
  AccessRightsDesc = 'accessRights_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  VAsc = 'v_ASC',
  VDesc = 'v_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  CreatedByAsc = 'createdBy_ASC',
  CreatedByDesc = 'createdBy_DESC',
  UpdatedByAsc = 'updatedBy_ASC',
  UpdatedByDesc = 'updatedBy_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC'
}

export type BillingIntegrationUpdateInput = {
  dv?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  accessRights?: Maybe<BillingIntegrationAccessRightRelateToManyInput>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserRelateToOneInput>;
  updatedBy?: Maybe<UserRelateToOneInput>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['String']>;
};

export type BillingIntegrationsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<BillingIntegrationUpdateInput>;
};

export type BillingIntegrationCreateInput = {
  dv?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  accessRights?: Maybe<BillingIntegrationAccessRightRelateToManyInput>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserRelateToOneInput>;
  updatedBy?: Maybe<UserRelateToOneInput>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['String']>;
};

export type BillingIntegrationsCreateInput = {
  data?: Maybe<BillingIntegrationCreateInput>;
};

export enum BillingIntegrationAccessRightHistoryRecordHistoryActionType {
  C = 'c',
  U = 'u',
  D = 'd'
}

/**  A keystone list  */
export type BillingIntegrationAccessRightHistoryRecord = {
  __typename?: 'BillingIntegrationAccessRightHistoryRecord';
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the BillingIntegrationAccessRightHistoryRecord List config, or
   *  2. As an alias to the field set on 'labelField' in the BillingIntegrationAccessRightHistoryRecord List config, or
   *  3. As an alias to a 'name' field on the BillingIntegrationAccessRightHistoryRecord List (if one exists), or
   *  4. As an alias to the 'id' field on the BillingIntegrationAccessRightHistoryRecord List.
   */
  _label_?: Maybe<Scalars['String']>;
  dv?: Maybe<Scalars['Int']>;
  integration?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<BillingIntegrationAccessRightHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type BillingIntegrationAccessRightHistoryRecordWhereInput = {
  AND?: Maybe<Array<Maybe<BillingIntegrationAccessRightHistoryRecordWhereInput>>>;
  OR?: Maybe<Array<Maybe<BillingIntegrationAccessRightHistoryRecordWhereInput>>>;
  dv?: Maybe<Scalars['Int']>;
  dv_not?: Maybe<Scalars['Int']>;
  dv_lt?: Maybe<Scalars['Int']>;
  dv_lte?: Maybe<Scalars['Int']>;
  dv_gt?: Maybe<Scalars['Int']>;
  dv_gte?: Maybe<Scalars['Int']>;
  dv_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  dv_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  integration?: Maybe<Scalars['String']>;
  integration_not?: Maybe<Scalars['String']>;
  integration_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  integration_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  user?: Maybe<Scalars['String']>;
  user_not?: Maybe<Scalars['String']>;
  user_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  user_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt?: Maybe<Scalars['String']>;
  createdAt_not?: Maybe<Scalars['String']>;
  createdAt_lt?: Maybe<Scalars['String']>;
  createdAt_lte?: Maybe<Scalars['String']>;
  createdAt_gt?: Maybe<Scalars['String']>;
  createdAt_gte?: Maybe<Scalars['String']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedAt_not?: Maybe<Scalars['String']>;
  updatedAt_lt?: Maybe<Scalars['String']>;
  updatedAt_lte?: Maybe<Scalars['String']>;
  updatedAt_gt?: Maybe<Scalars['String']>;
  updatedAt_gte?: Maybe<Scalars['String']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy?: Maybe<Scalars['String']>;
  createdBy_not?: Maybe<Scalars['String']>;
  createdBy_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedBy?: Maybe<Scalars['String']>;
  updatedBy_not?: Maybe<Scalars['String']>;
  updatedBy_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedBy_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  history_date?: Maybe<Scalars['String']>;
  history_date_not?: Maybe<Scalars['String']>;
  history_date_lt?: Maybe<Scalars['String']>;
  history_date_lte?: Maybe<Scalars['String']>;
  history_date_gt?: Maybe<Scalars['String']>;
  history_date_gte?: Maybe<Scalars['String']>;
  history_date_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_date_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_action?: Maybe<BillingIntegrationAccessRightHistoryRecordHistoryActionType>;
  history_action_not?: Maybe<BillingIntegrationAccessRightHistoryRecordHistoryActionType>;
  history_action_in?: Maybe<Array<Maybe<BillingIntegrationAccessRightHistoryRecordHistoryActionType>>>;
  history_action_not_in?: Maybe<Array<Maybe<BillingIntegrationAccessRightHistoryRecordHistoryActionType>>>;
  history_id?: Maybe<Scalars['String']>;
  history_id_not?: Maybe<Scalars['String']>;
  history_id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_id_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type BillingIntegrationAccessRightHistoryRecordWhereUniqueInput = {
  id: Scalars['ID'];
};

export enum SortBillingIntegrationAccessRightHistoryRecordsBy {
  DvAsc = 'dv_ASC',
  DvDesc = 'dv_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  HistoryDateAsc = 'history_date_ASC',
  HistoryDateDesc = 'history_date_DESC',
  HistoryActionAsc = 'history_action_ASC',
  HistoryActionDesc = 'history_action_DESC'
}

export type BillingIntegrationAccessRightHistoryRecordUpdateInput = {
  dv?: Maybe<Scalars['Int']>;
  integration?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<BillingIntegrationAccessRightHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type BillingIntegrationAccessRightHistoryRecordsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<BillingIntegrationAccessRightHistoryRecordUpdateInput>;
};

export type BillingIntegrationAccessRightHistoryRecordCreateInput = {
  dv?: Maybe<Scalars['Int']>;
  integration?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<BillingIntegrationAccessRightHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type BillingIntegrationAccessRightHistoryRecordsCreateInput = {
  data?: Maybe<BillingIntegrationAccessRightHistoryRecordCreateInput>;
};

export type BillingIntegrationRelateToOneInput = {
  create?: Maybe<BillingIntegrationCreateInput>;
  connect?: Maybe<BillingIntegrationWhereUniqueInput>;
  disconnect?: Maybe<BillingIntegrationWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

/**  Link between billing integrations and users  */
export type BillingIntegrationAccessRight = {
  __typename?: 'BillingIntegrationAccessRight';
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the BillingIntegrationAccessRight List config, or
   *  2. As an alias to the field set on 'labelField' in the BillingIntegrationAccessRight List config, or
   *  3. As an alias to a 'name' field on the BillingIntegrationAccessRight List (if one exists), or
   *  4. As an alias to the 'id' field on the BillingIntegrationAccessRight List.
   */
  _label_?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /**  Data structure Version  */
  dv?: Maybe<Scalars['Int']>;
  /**  Integration  */
  integration?: Maybe<BillingIntegration>;
  /**  User  */
  user?: Maybe<User>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<User>;
  updatedBy?: Maybe<User>;
};

export type BillingIntegrationAccessRightWhereInput = {
  AND?: Maybe<Array<Maybe<BillingIntegrationAccessRightWhereInput>>>;
  OR?: Maybe<Array<Maybe<BillingIntegrationAccessRightWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  dv?: Maybe<Scalars['Int']>;
  dv_not?: Maybe<Scalars['Int']>;
  dv_lt?: Maybe<Scalars['Int']>;
  dv_lte?: Maybe<Scalars['Int']>;
  dv_gt?: Maybe<Scalars['Int']>;
  dv_gte?: Maybe<Scalars['Int']>;
  dv_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  dv_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  integration?: Maybe<BillingIntegrationWhereInput>;
  integration_is_null?: Maybe<Scalars['Boolean']>;
  user?: Maybe<UserWhereInput>;
  user_is_null?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['String']>;
  createdAt_not?: Maybe<Scalars['String']>;
  createdAt_lt?: Maybe<Scalars['String']>;
  createdAt_lte?: Maybe<Scalars['String']>;
  createdAt_gt?: Maybe<Scalars['String']>;
  createdAt_gte?: Maybe<Scalars['String']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedAt_not?: Maybe<Scalars['String']>;
  updatedAt_lt?: Maybe<Scalars['String']>;
  updatedAt_lte?: Maybe<Scalars['String']>;
  updatedAt_gt?: Maybe<Scalars['String']>;
  updatedAt_gte?: Maybe<Scalars['String']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy?: Maybe<UserWhereInput>;
  createdBy_is_null?: Maybe<Scalars['Boolean']>;
  updatedBy?: Maybe<UserWhereInput>;
  updatedBy_is_null?: Maybe<Scalars['Boolean']>;
};

export type BillingIntegrationAccessRightWhereUniqueInput = {
  id: Scalars['ID'];
};

export enum SortBillingIntegrationAccessRightsBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  DvAsc = 'dv_ASC',
  DvDesc = 'dv_DESC',
  IntegrationAsc = 'integration_ASC',
  IntegrationDesc = 'integration_DESC',
  UserAsc = 'user_ASC',
  UserDesc = 'user_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  CreatedByAsc = 'createdBy_ASC',
  CreatedByDesc = 'createdBy_DESC',
  UpdatedByAsc = 'updatedBy_ASC',
  UpdatedByDesc = 'updatedBy_DESC'
}

export type BillingIntegrationAccessRightUpdateInput = {
  dv?: Maybe<Scalars['Int']>;
  integration?: Maybe<BillingIntegrationRelateToOneInput>;
  user?: Maybe<UserRelateToOneInput>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserRelateToOneInput>;
  updatedBy?: Maybe<UserRelateToOneInput>;
};

export type BillingIntegrationAccessRightsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<BillingIntegrationAccessRightUpdateInput>;
};

export type BillingIntegrationAccessRightCreateInput = {
  dv?: Maybe<Scalars['Int']>;
  integration?: Maybe<BillingIntegrationRelateToOneInput>;
  user?: Maybe<UserRelateToOneInput>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserRelateToOneInput>;
  updatedBy?: Maybe<UserRelateToOneInput>;
};

export type BillingIntegrationAccessRightsCreateInput = {
  data?: Maybe<BillingIntegrationAccessRightCreateInput>;
};

export enum BillingIntegrationOrganizationContextHistoryRecordHistoryActionType {
  C = 'c',
  U = 'u',
  D = 'd'
}

/**  A keystone list  */
export type BillingIntegrationOrganizationContextHistoryRecord = {
  __typename?: 'BillingIntegrationOrganizationContextHistoryRecord';
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the BillingIntegrationOrganizationContextHistoryRecord List config, or
   *  2. As an alias to the field set on 'labelField' in the BillingIntegrationOrganizationContextHistoryRecord List config, or
   *  3. As an alias to a 'name' field on the BillingIntegrationOrganizationContextHistoryRecord List (if one exists), or
   *  4. As an alias to the 'id' field on the BillingIntegrationOrganizationContextHistoryRecord List.
   */
  _label_?: Maybe<Scalars['String']>;
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  integration?: Maybe<Scalars['String']>;
  organization?: Maybe<Scalars['String']>;
  settings?: Maybe<Scalars['JSON']>;
  state?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['JSON']>;
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<BillingIntegrationOrganizationContextHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type BillingIntegrationOrganizationContextHistoryRecordWhereInput = {
  AND?: Maybe<Array<Maybe<BillingIntegrationOrganizationContextHistoryRecordWhereInput>>>;
  OR?: Maybe<Array<Maybe<BillingIntegrationOrganizationContextHistoryRecordWhereInput>>>;
  dv?: Maybe<Scalars['Int']>;
  dv_not?: Maybe<Scalars['Int']>;
  dv_lt?: Maybe<Scalars['Int']>;
  dv_lte?: Maybe<Scalars['Int']>;
  dv_gt?: Maybe<Scalars['Int']>;
  dv_gte?: Maybe<Scalars['Int']>;
  dv_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  dv_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sender?: Maybe<Scalars['JSON']>;
  sender_not?: Maybe<Scalars['JSON']>;
  sender_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  sender_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  integration?: Maybe<Scalars['String']>;
  integration_not?: Maybe<Scalars['String']>;
  integration_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  integration_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  organization?: Maybe<Scalars['String']>;
  organization_not?: Maybe<Scalars['String']>;
  organization_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  organization_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  settings?: Maybe<Scalars['JSON']>;
  settings_not?: Maybe<Scalars['JSON']>;
  settings_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  settings_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  state?: Maybe<Scalars['JSON']>;
  state_not?: Maybe<Scalars['JSON']>;
  state_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  state_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  v?: Maybe<Scalars['Int']>;
  v_not?: Maybe<Scalars['Int']>;
  v_lt?: Maybe<Scalars['Int']>;
  v_lte?: Maybe<Scalars['Int']>;
  v_gt?: Maybe<Scalars['Int']>;
  v_gte?: Maybe<Scalars['Int']>;
  v_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  v_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  createdAt?: Maybe<Scalars['String']>;
  createdAt_not?: Maybe<Scalars['String']>;
  createdAt_lt?: Maybe<Scalars['String']>;
  createdAt_lte?: Maybe<Scalars['String']>;
  createdAt_gt?: Maybe<Scalars['String']>;
  createdAt_gte?: Maybe<Scalars['String']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedAt_not?: Maybe<Scalars['String']>;
  updatedAt_lt?: Maybe<Scalars['String']>;
  updatedAt_lte?: Maybe<Scalars['String']>;
  updatedAt_gt?: Maybe<Scalars['String']>;
  updatedAt_gte?: Maybe<Scalars['String']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy?: Maybe<Scalars['String']>;
  createdBy_not?: Maybe<Scalars['String']>;
  createdBy_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedBy?: Maybe<Scalars['String']>;
  updatedBy_not?: Maybe<Scalars['String']>;
  updatedBy_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedBy_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedAt_not?: Maybe<Scalars['String']>;
  deletedAt_lt?: Maybe<Scalars['String']>;
  deletedAt_lte?: Maybe<Scalars['String']>;
  deletedAt_gt?: Maybe<Scalars['String']>;
  deletedAt_gte?: Maybe<Scalars['String']>;
  deletedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  deletedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  newId?: Maybe<Scalars['JSON']>;
  newId_not?: Maybe<Scalars['JSON']>;
  newId_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  newId_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  history_date?: Maybe<Scalars['String']>;
  history_date_not?: Maybe<Scalars['String']>;
  history_date_lt?: Maybe<Scalars['String']>;
  history_date_lte?: Maybe<Scalars['String']>;
  history_date_gt?: Maybe<Scalars['String']>;
  history_date_gte?: Maybe<Scalars['String']>;
  history_date_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_date_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_action?: Maybe<BillingIntegrationOrganizationContextHistoryRecordHistoryActionType>;
  history_action_not?: Maybe<BillingIntegrationOrganizationContextHistoryRecordHistoryActionType>;
  history_action_in?: Maybe<Array<Maybe<BillingIntegrationOrganizationContextHistoryRecordHistoryActionType>>>;
  history_action_not_in?: Maybe<Array<Maybe<BillingIntegrationOrganizationContextHistoryRecordHistoryActionType>>>;
  history_id?: Maybe<Scalars['String']>;
  history_id_not?: Maybe<Scalars['String']>;
  history_id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_id_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type BillingIntegrationOrganizationContextHistoryRecordWhereUniqueInput = {
  id: Scalars['ID'];
};

export enum SortBillingIntegrationOrganizationContextHistoryRecordsBy {
  DvAsc = 'dv_ASC',
  DvDesc = 'dv_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  VAsc = 'v_ASC',
  VDesc = 'v_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  HistoryDateAsc = 'history_date_ASC',
  HistoryDateDesc = 'history_date_DESC',
  HistoryActionAsc = 'history_action_ASC',
  HistoryActionDesc = 'history_action_DESC'
}

export type BillingIntegrationOrganizationContextHistoryRecordUpdateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  integration?: Maybe<Scalars['String']>;
  organization?: Maybe<Scalars['String']>;
  settings?: Maybe<Scalars['JSON']>;
  state?: Maybe<Scalars['JSON']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['JSON']>;
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<BillingIntegrationOrganizationContextHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type BillingIntegrationOrganizationContextHistoryRecordsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<BillingIntegrationOrganizationContextHistoryRecordUpdateInput>;
};

export type BillingIntegrationOrganizationContextHistoryRecordCreateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  integration?: Maybe<Scalars['String']>;
  organization?: Maybe<Scalars['String']>;
  settings?: Maybe<Scalars['JSON']>;
  state?: Maybe<Scalars['JSON']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['JSON']>;
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<BillingIntegrationOrganizationContextHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type BillingIntegrationOrganizationContextHistoryRecordsCreateInput = {
  data?: Maybe<BillingIntegrationOrganizationContextHistoryRecordCreateInput>;
};

/**  Integration state and settings for all organizations. The existence of this object means that there is a configured integration between the `billing data source` and `this API`  */
export type BillingIntegrationOrganizationContext = {
  __typename?: 'BillingIntegrationOrganizationContext';
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the BillingIntegrationOrganizationContext List config, or
   *  2. As an alias to the field set on 'labelField' in the BillingIntegrationOrganizationContext List config, or
   *  3. As an alias to a 'name' field on the BillingIntegrationOrganizationContext List (if one exists), or
   *  4. As an alias to the 'id' field on the BillingIntegrationOrganizationContext List.
   */
  _label_?: Maybe<Scalars['String']>;
  /**  Data structure Version  */
  dv?: Maybe<Scalars['Int']>;
  /**  Client-side devise identification used for the anti-fraud detection. Example `{ dv: '1', fingerprint: 'VaxSw2aXZa'}`. Where the `fingerprint` should be the same for the same devices and it's not linked to the user ID. It's the device ID like browser / mobile application / remote system  */
  sender?: Maybe<Scalars['JSON']>;
  /**  ID of the integration that is configured to receive data for the organization  */
  integration?: Maybe<BillingIntegration>;
  /**  Ref to the organization. The object will be deleted if the organization ceases to exist  */
  organization?: Maybe<Organization>;
  /**  Settings that are required to get data from the `billing data source`. It can also contain fine-tuning optional integration settings. The data structure depends on the integration and defined there  */
  settings?: Maybe<Scalars['JSON']>;
  /**  The current state of the integration process. Some integration need to store past state or data related to cache files/folders for past state. The data structure depends on the integration and defined there  */
  state?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<User>;
  updatedBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['String']>;
};

export type BillingIntegrationOrganizationContextWhereInput = {
  AND?: Maybe<Array<Maybe<BillingIntegrationOrganizationContextWhereInput>>>;
  OR?: Maybe<Array<Maybe<BillingIntegrationOrganizationContextWhereInput>>>;
  dv?: Maybe<Scalars['Int']>;
  dv_not?: Maybe<Scalars['Int']>;
  dv_lt?: Maybe<Scalars['Int']>;
  dv_lte?: Maybe<Scalars['Int']>;
  dv_gt?: Maybe<Scalars['Int']>;
  dv_gte?: Maybe<Scalars['Int']>;
  dv_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  dv_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sender?: Maybe<Scalars['JSON']>;
  sender_not?: Maybe<Scalars['JSON']>;
  sender_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  sender_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  integration?: Maybe<BillingIntegrationWhereInput>;
  integration_is_null?: Maybe<Scalars['Boolean']>;
  organization?: Maybe<OrganizationWhereInput>;
  organization_is_null?: Maybe<Scalars['Boolean']>;
  settings?: Maybe<Scalars['JSON']>;
  settings_not?: Maybe<Scalars['JSON']>;
  settings_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  settings_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  state?: Maybe<Scalars['JSON']>;
  state_not?: Maybe<Scalars['JSON']>;
  state_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  state_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  v?: Maybe<Scalars['Int']>;
  v_not?: Maybe<Scalars['Int']>;
  v_lt?: Maybe<Scalars['Int']>;
  v_lte?: Maybe<Scalars['Int']>;
  v_gt?: Maybe<Scalars['Int']>;
  v_gte?: Maybe<Scalars['Int']>;
  v_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  v_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  createdAt?: Maybe<Scalars['String']>;
  createdAt_not?: Maybe<Scalars['String']>;
  createdAt_lt?: Maybe<Scalars['String']>;
  createdAt_lte?: Maybe<Scalars['String']>;
  createdAt_gt?: Maybe<Scalars['String']>;
  createdAt_gte?: Maybe<Scalars['String']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedAt_not?: Maybe<Scalars['String']>;
  updatedAt_lt?: Maybe<Scalars['String']>;
  updatedAt_lte?: Maybe<Scalars['String']>;
  updatedAt_gt?: Maybe<Scalars['String']>;
  updatedAt_gte?: Maybe<Scalars['String']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy?: Maybe<UserWhereInput>;
  createdBy_is_null?: Maybe<Scalars['Boolean']>;
  updatedBy?: Maybe<UserWhereInput>;
  updatedBy_is_null?: Maybe<Scalars['Boolean']>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedAt_not?: Maybe<Scalars['String']>;
  deletedAt_lt?: Maybe<Scalars['String']>;
  deletedAt_lte?: Maybe<Scalars['String']>;
  deletedAt_gt?: Maybe<Scalars['String']>;
  deletedAt_gte?: Maybe<Scalars['String']>;
  deletedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  deletedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  newId?: Maybe<Scalars['String']>;
  newId_not?: Maybe<Scalars['String']>;
  newId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  newId_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type BillingIntegrationOrganizationContextWhereUniqueInput = {
  id: Scalars['ID'];
};

export enum SortBillingIntegrationOrganizationContextsBy {
  DvAsc = 'dv_ASC',
  DvDesc = 'dv_DESC',
  IntegrationAsc = 'integration_ASC',
  IntegrationDesc = 'integration_DESC',
  OrganizationAsc = 'organization_ASC',
  OrganizationDesc = 'organization_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  VAsc = 'v_ASC',
  VDesc = 'v_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  CreatedByAsc = 'createdBy_ASC',
  CreatedByDesc = 'createdBy_DESC',
  UpdatedByAsc = 'updatedBy_ASC',
  UpdatedByDesc = 'updatedBy_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC'
}

export type BillingIntegrationOrganizationContextUpdateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  integration?: Maybe<BillingIntegrationRelateToOneInput>;
  organization?: Maybe<OrganizationRelateToOneInput>;
  settings?: Maybe<Scalars['JSON']>;
  state?: Maybe<Scalars['JSON']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserRelateToOneInput>;
  updatedBy?: Maybe<UserRelateToOneInput>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['String']>;
};

export type BillingIntegrationOrganizationContextsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<BillingIntegrationOrganizationContextUpdateInput>;
};

export type BillingIntegrationOrganizationContextCreateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  integration?: Maybe<BillingIntegrationRelateToOneInput>;
  organization?: Maybe<OrganizationRelateToOneInput>;
  settings?: Maybe<Scalars['JSON']>;
  state?: Maybe<Scalars['JSON']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserRelateToOneInput>;
  updatedBy?: Maybe<UserRelateToOneInput>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['String']>;
};

export type BillingIntegrationOrganizationContextsCreateInput = {
  data?: Maybe<BillingIntegrationOrganizationContextCreateInput>;
};

export type BillingIntegrationOrganizationContextRelateToOneInput = {
  create?: Maybe<BillingIntegrationOrganizationContextCreateInput>;
  connect?: Maybe<BillingIntegrationOrganizationContextWhereUniqueInput>;
  disconnect?: Maybe<BillingIntegrationOrganizationContextWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

/**  Important `integration component` log records. Sometimes you need to report some errors/problems related to the integration process. The target audience of these messages is the client of our API platform. You should avoid repeating the same messages. The existence of the message means that some problems were occurred during the integration process and the client should the user must take some actions to eliminate them  */
export type BillingIntegrationLog = {
  __typename?: 'BillingIntegrationLog';
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the BillingIntegrationLog List config, or
   *  2. As an alias to the field set on 'labelField' in the BillingIntegrationLog List config, or
   *  3. As an alias to a 'name' field on the BillingIntegrationLog List (if one exists), or
   *  4. As an alias to the 'id' field on the BillingIntegrationLog List.
   */
  _label_?: Maybe<Scalars['String']>;
  /**  Data structure Version  */
  dv?: Maybe<Scalars['Int']>;
  /**  Client-side devise identification used for the anti-fraud detection. Example `{ dv: '1', fingerprint: 'VaxSw2aXZa'}`. Where the `fingerprint` should be the same for the same devices and it's not linked to the user ID. It's the device ID like browser / mobile application / remote system  */
  sender?: Maybe<Scalars['JSON']>;
  /**  Integration context  */
  context?: Maybe<BillingIntegrationOrganizationContext>;
  /**  Message type. Our clients can use different languages. Sometimes we need to change the text message for the client. The settings for the message texts are in the integration. Ex: WRONG_AUTH_CREDENTIALS  */
  type?: Maybe<Scalars['String']>;
  /**  Client understandable message. May be overridden by integration settings for some message types  */
  message?: Maybe<Scalars['String']>;
  /**  The message metadata. Context variables for generating messages. Examples of data keys: ``  */
  meta?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<User>;
  updatedBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['String']>;
};

export type BillingIntegrationLogWhereInput = {
  AND?: Maybe<Array<Maybe<BillingIntegrationLogWhereInput>>>;
  OR?: Maybe<Array<Maybe<BillingIntegrationLogWhereInput>>>;
  dv?: Maybe<Scalars['Int']>;
  dv_not?: Maybe<Scalars['Int']>;
  dv_lt?: Maybe<Scalars['Int']>;
  dv_lte?: Maybe<Scalars['Int']>;
  dv_gt?: Maybe<Scalars['Int']>;
  dv_gte?: Maybe<Scalars['Int']>;
  dv_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  dv_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sender?: Maybe<Scalars['JSON']>;
  sender_not?: Maybe<Scalars['JSON']>;
  sender_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  sender_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  context?: Maybe<BillingIntegrationOrganizationContextWhereInput>;
  context_is_null?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Scalars['String']>;
  type_not?: Maybe<Scalars['String']>;
  type_contains?: Maybe<Scalars['String']>;
  type_not_contains?: Maybe<Scalars['String']>;
  type_starts_with?: Maybe<Scalars['String']>;
  type_not_starts_with?: Maybe<Scalars['String']>;
  type_ends_with?: Maybe<Scalars['String']>;
  type_not_ends_with?: Maybe<Scalars['String']>;
  type_i?: Maybe<Scalars['String']>;
  type_not_i?: Maybe<Scalars['String']>;
  type_contains_i?: Maybe<Scalars['String']>;
  type_not_contains_i?: Maybe<Scalars['String']>;
  type_starts_with_i?: Maybe<Scalars['String']>;
  type_not_starts_with_i?: Maybe<Scalars['String']>;
  type_ends_with_i?: Maybe<Scalars['String']>;
  type_not_ends_with_i?: Maybe<Scalars['String']>;
  type_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  type_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  message?: Maybe<Scalars['String']>;
  message_not?: Maybe<Scalars['String']>;
  message_contains?: Maybe<Scalars['String']>;
  message_not_contains?: Maybe<Scalars['String']>;
  message_starts_with?: Maybe<Scalars['String']>;
  message_not_starts_with?: Maybe<Scalars['String']>;
  message_ends_with?: Maybe<Scalars['String']>;
  message_not_ends_with?: Maybe<Scalars['String']>;
  message_i?: Maybe<Scalars['String']>;
  message_not_i?: Maybe<Scalars['String']>;
  message_contains_i?: Maybe<Scalars['String']>;
  message_not_contains_i?: Maybe<Scalars['String']>;
  message_starts_with_i?: Maybe<Scalars['String']>;
  message_not_starts_with_i?: Maybe<Scalars['String']>;
  message_ends_with_i?: Maybe<Scalars['String']>;
  message_not_ends_with_i?: Maybe<Scalars['String']>;
  message_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  message_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  meta?: Maybe<Scalars['JSON']>;
  meta_not?: Maybe<Scalars['JSON']>;
  meta_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  meta_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  v?: Maybe<Scalars['Int']>;
  v_not?: Maybe<Scalars['Int']>;
  v_lt?: Maybe<Scalars['Int']>;
  v_lte?: Maybe<Scalars['Int']>;
  v_gt?: Maybe<Scalars['Int']>;
  v_gte?: Maybe<Scalars['Int']>;
  v_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  v_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  createdAt?: Maybe<Scalars['String']>;
  createdAt_not?: Maybe<Scalars['String']>;
  createdAt_lt?: Maybe<Scalars['String']>;
  createdAt_lte?: Maybe<Scalars['String']>;
  createdAt_gt?: Maybe<Scalars['String']>;
  createdAt_gte?: Maybe<Scalars['String']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedAt_not?: Maybe<Scalars['String']>;
  updatedAt_lt?: Maybe<Scalars['String']>;
  updatedAt_lte?: Maybe<Scalars['String']>;
  updatedAt_gt?: Maybe<Scalars['String']>;
  updatedAt_gte?: Maybe<Scalars['String']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy?: Maybe<UserWhereInput>;
  createdBy_is_null?: Maybe<Scalars['Boolean']>;
  updatedBy?: Maybe<UserWhereInput>;
  updatedBy_is_null?: Maybe<Scalars['Boolean']>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedAt_not?: Maybe<Scalars['String']>;
  deletedAt_lt?: Maybe<Scalars['String']>;
  deletedAt_lte?: Maybe<Scalars['String']>;
  deletedAt_gt?: Maybe<Scalars['String']>;
  deletedAt_gte?: Maybe<Scalars['String']>;
  deletedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  deletedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  newId?: Maybe<Scalars['String']>;
  newId_not?: Maybe<Scalars['String']>;
  newId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  newId_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type BillingIntegrationLogWhereUniqueInput = {
  id: Scalars['ID'];
};

export enum SortBillingIntegrationLogsBy {
  DvAsc = 'dv_ASC',
  DvDesc = 'dv_DESC',
  ContextAsc = 'context_ASC',
  ContextDesc = 'context_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  MessageAsc = 'message_ASC',
  MessageDesc = 'message_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  VAsc = 'v_ASC',
  VDesc = 'v_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  CreatedByAsc = 'createdBy_ASC',
  CreatedByDesc = 'createdBy_DESC',
  UpdatedByAsc = 'updatedBy_ASC',
  UpdatedByDesc = 'updatedBy_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC'
}

export type BillingIntegrationLogUpdateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  context?: Maybe<BillingIntegrationOrganizationContextRelateToOneInput>;
  type?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['JSON']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserRelateToOneInput>;
  updatedBy?: Maybe<UserRelateToOneInput>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['String']>;
};

export type BillingIntegrationLogsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<BillingIntegrationLogUpdateInput>;
};

export type BillingIntegrationLogCreateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  context?: Maybe<BillingIntegrationOrganizationContextRelateToOneInput>;
  type?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['JSON']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserRelateToOneInput>;
  updatedBy?: Maybe<UserRelateToOneInput>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['String']>;
};

export type BillingIntegrationLogsCreateInput = {
  data?: Maybe<BillingIntegrationLogCreateInput>;
};

export enum BillingPropertyHistoryRecordHistoryActionType {
  C = 'c',
  U = 'u',
  D = 'd'
}

/**  A keystone list  */
export type BillingPropertyHistoryRecord = {
  __typename?: 'BillingPropertyHistoryRecord';
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the BillingPropertyHistoryRecord List config, or
   *  2. As an alias to the field set on 'labelField' in the BillingPropertyHistoryRecord List config, or
   *  3. As an alias to a 'name' field on the BillingPropertyHistoryRecord List (if one exists), or
   *  4. As an alias to the 'id' field on the BillingPropertyHistoryRecord List.
   */
  _label_?: Maybe<Scalars['String']>;
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  context?: Maybe<Scalars['String']>;
  importId?: Maybe<Scalars['String']>;
  bindingId?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  raw?: Maybe<Scalars['JSON']>;
  meta?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['JSON']>;
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<BillingPropertyHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type BillingPropertyHistoryRecordWhereInput = {
  AND?: Maybe<Array<Maybe<BillingPropertyHistoryRecordWhereInput>>>;
  OR?: Maybe<Array<Maybe<BillingPropertyHistoryRecordWhereInput>>>;
  dv?: Maybe<Scalars['Int']>;
  dv_not?: Maybe<Scalars['Int']>;
  dv_lt?: Maybe<Scalars['Int']>;
  dv_lte?: Maybe<Scalars['Int']>;
  dv_gt?: Maybe<Scalars['Int']>;
  dv_gte?: Maybe<Scalars['Int']>;
  dv_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  dv_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sender?: Maybe<Scalars['JSON']>;
  sender_not?: Maybe<Scalars['JSON']>;
  sender_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  sender_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  context?: Maybe<Scalars['String']>;
  context_not?: Maybe<Scalars['String']>;
  context_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  context_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  importId?: Maybe<Scalars['String']>;
  importId_not?: Maybe<Scalars['String']>;
  importId_contains?: Maybe<Scalars['String']>;
  importId_not_contains?: Maybe<Scalars['String']>;
  importId_starts_with?: Maybe<Scalars['String']>;
  importId_not_starts_with?: Maybe<Scalars['String']>;
  importId_ends_with?: Maybe<Scalars['String']>;
  importId_not_ends_with?: Maybe<Scalars['String']>;
  importId_i?: Maybe<Scalars['String']>;
  importId_not_i?: Maybe<Scalars['String']>;
  importId_contains_i?: Maybe<Scalars['String']>;
  importId_not_contains_i?: Maybe<Scalars['String']>;
  importId_starts_with_i?: Maybe<Scalars['String']>;
  importId_not_starts_with_i?: Maybe<Scalars['String']>;
  importId_ends_with_i?: Maybe<Scalars['String']>;
  importId_not_ends_with_i?: Maybe<Scalars['String']>;
  importId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  importId_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  bindingId?: Maybe<Scalars['String']>;
  bindingId_not?: Maybe<Scalars['String']>;
  bindingId_contains?: Maybe<Scalars['String']>;
  bindingId_not_contains?: Maybe<Scalars['String']>;
  bindingId_starts_with?: Maybe<Scalars['String']>;
  bindingId_not_starts_with?: Maybe<Scalars['String']>;
  bindingId_ends_with?: Maybe<Scalars['String']>;
  bindingId_not_ends_with?: Maybe<Scalars['String']>;
  bindingId_i?: Maybe<Scalars['String']>;
  bindingId_not_i?: Maybe<Scalars['String']>;
  bindingId_contains_i?: Maybe<Scalars['String']>;
  bindingId_not_contains_i?: Maybe<Scalars['String']>;
  bindingId_starts_with_i?: Maybe<Scalars['String']>;
  bindingId_not_starts_with_i?: Maybe<Scalars['String']>;
  bindingId_ends_with_i?: Maybe<Scalars['String']>;
  bindingId_not_ends_with_i?: Maybe<Scalars['String']>;
  bindingId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  bindingId_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  address?: Maybe<Scalars['String']>;
  address_not?: Maybe<Scalars['String']>;
  address_contains?: Maybe<Scalars['String']>;
  address_not_contains?: Maybe<Scalars['String']>;
  address_starts_with?: Maybe<Scalars['String']>;
  address_not_starts_with?: Maybe<Scalars['String']>;
  address_ends_with?: Maybe<Scalars['String']>;
  address_not_ends_with?: Maybe<Scalars['String']>;
  address_i?: Maybe<Scalars['String']>;
  address_not_i?: Maybe<Scalars['String']>;
  address_contains_i?: Maybe<Scalars['String']>;
  address_not_contains_i?: Maybe<Scalars['String']>;
  address_starts_with_i?: Maybe<Scalars['String']>;
  address_not_starts_with_i?: Maybe<Scalars['String']>;
  address_ends_with_i?: Maybe<Scalars['String']>;
  address_not_ends_with_i?: Maybe<Scalars['String']>;
  address_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  address_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  raw?: Maybe<Scalars['JSON']>;
  raw_not?: Maybe<Scalars['JSON']>;
  raw_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  raw_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  meta?: Maybe<Scalars['JSON']>;
  meta_not?: Maybe<Scalars['JSON']>;
  meta_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  meta_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  v?: Maybe<Scalars['Int']>;
  v_not?: Maybe<Scalars['Int']>;
  v_lt?: Maybe<Scalars['Int']>;
  v_lte?: Maybe<Scalars['Int']>;
  v_gt?: Maybe<Scalars['Int']>;
  v_gte?: Maybe<Scalars['Int']>;
  v_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  v_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  createdAt?: Maybe<Scalars['String']>;
  createdAt_not?: Maybe<Scalars['String']>;
  createdAt_lt?: Maybe<Scalars['String']>;
  createdAt_lte?: Maybe<Scalars['String']>;
  createdAt_gt?: Maybe<Scalars['String']>;
  createdAt_gte?: Maybe<Scalars['String']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedAt_not?: Maybe<Scalars['String']>;
  updatedAt_lt?: Maybe<Scalars['String']>;
  updatedAt_lte?: Maybe<Scalars['String']>;
  updatedAt_gt?: Maybe<Scalars['String']>;
  updatedAt_gte?: Maybe<Scalars['String']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy?: Maybe<Scalars['String']>;
  createdBy_not?: Maybe<Scalars['String']>;
  createdBy_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedBy?: Maybe<Scalars['String']>;
  updatedBy_not?: Maybe<Scalars['String']>;
  updatedBy_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedBy_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedAt_not?: Maybe<Scalars['String']>;
  deletedAt_lt?: Maybe<Scalars['String']>;
  deletedAt_lte?: Maybe<Scalars['String']>;
  deletedAt_gt?: Maybe<Scalars['String']>;
  deletedAt_gte?: Maybe<Scalars['String']>;
  deletedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  deletedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  newId?: Maybe<Scalars['JSON']>;
  newId_not?: Maybe<Scalars['JSON']>;
  newId_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  newId_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  history_date?: Maybe<Scalars['String']>;
  history_date_not?: Maybe<Scalars['String']>;
  history_date_lt?: Maybe<Scalars['String']>;
  history_date_lte?: Maybe<Scalars['String']>;
  history_date_gt?: Maybe<Scalars['String']>;
  history_date_gte?: Maybe<Scalars['String']>;
  history_date_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_date_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_action?: Maybe<BillingPropertyHistoryRecordHistoryActionType>;
  history_action_not?: Maybe<BillingPropertyHistoryRecordHistoryActionType>;
  history_action_in?: Maybe<Array<Maybe<BillingPropertyHistoryRecordHistoryActionType>>>;
  history_action_not_in?: Maybe<Array<Maybe<BillingPropertyHistoryRecordHistoryActionType>>>;
  history_id?: Maybe<Scalars['String']>;
  history_id_not?: Maybe<Scalars['String']>;
  history_id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_id_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type BillingPropertyHistoryRecordWhereUniqueInput = {
  id: Scalars['ID'];
};

export enum SortBillingPropertyHistoryRecordsBy {
  DvAsc = 'dv_ASC',
  DvDesc = 'dv_DESC',
  ImportIdAsc = 'importId_ASC',
  ImportIdDesc = 'importId_DESC',
  BindingIdAsc = 'bindingId_ASC',
  BindingIdDesc = 'bindingId_DESC',
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  VAsc = 'v_ASC',
  VDesc = 'v_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  HistoryDateAsc = 'history_date_ASC',
  HistoryDateDesc = 'history_date_DESC',
  HistoryActionAsc = 'history_action_ASC',
  HistoryActionDesc = 'history_action_DESC'
}

export type BillingPropertyHistoryRecordUpdateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  context?: Maybe<Scalars['String']>;
  importId?: Maybe<Scalars['String']>;
  bindingId?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  raw?: Maybe<Scalars['JSON']>;
  meta?: Maybe<Scalars['JSON']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['JSON']>;
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<BillingPropertyHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type BillingPropertyHistoryRecordsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<BillingPropertyHistoryRecordUpdateInput>;
};

export type BillingPropertyHistoryRecordCreateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  context?: Maybe<Scalars['String']>;
  importId?: Maybe<Scalars['String']>;
  bindingId?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  raw?: Maybe<Scalars['JSON']>;
  meta?: Maybe<Scalars['JSON']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['JSON']>;
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<BillingPropertyHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type BillingPropertyHistoryRecordsCreateInput = {
  data?: Maybe<BillingPropertyHistoryRecordCreateInput>;
};

/**  All `property` objects from `billing data source`  */
export type BillingProperty = {
  __typename?: 'BillingProperty';
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the BillingProperty List config, or
   *  2. As an alias to the field set on 'labelField' in the BillingProperty List config, or
   *  3. As an alias to a 'name' field on the BillingProperty List (if one exists), or
   *  4. As an alias to the 'id' field on the BillingProperty List.
   */
  _label_?: Maybe<Scalars['String']>;
  /**  Data structure Version  */
  dv?: Maybe<Scalars['Int']>;
  /**  Client-side devise identification used for the anti-fraud detection. Example `{ dv: '1', fingerprint: 'VaxSw2aXZa'}`. Where the `fingerprint` should be the same for the same devices and it's not linked to the user ID. It's the device ID like browser / mobile application / remote system  */
  sender?: Maybe<Scalars['JSON']>;
  /**  Integration context  */
  context?: Maybe<BillingIntegrationOrganizationContext>;
  /**  `billing data source` local object ID. Used only for the internal needs of the `integration component`  */
  importId?: Maybe<Scalars['String']>;
  /**  A well-known universal identifier that allows you to identify the same objects in different systems. It may differ in different countries. Example: for Russia, the FIAS ID is used  */
  bindingId?: Maybe<Scalars['String']>;
  /**  The non-modified address from the `billing data source`. Used in `receipt template`  */
  address?: Maybe<Scalars['String']>;
  /**  Raw non-structured data obtained from the `billing data source`. Used only for the internal needs of the `integration component`.  */
  raw?: Maybe<Scalars['JSON']>;
  /**  Structured metadata obtained from the `billing data source`. Some of this data is required for use in the `receipt template`. Examples of data keys: `total space of building`, `property beginning of exploitation year`, `has cultural heritage status`, `number of underground floors`, `number of above-ground floors`  */
  meta?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<User>;
  updatedBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['String']>;
};

export type BillingPropertyWhereInput = {
  AND?: Maybe<Array<Maybe<BillingPropertyWhereInput>>>;
  OR?: Maybe<Array<Maybe<BillingPropertyWhereInput>>>;
  dv?: Maybe<Scalars['Int']>;
  dv_not?: Maybe<Scalars['Int']>;
  dv_lt?: Maybe<Scalars['Int']>;
  dv_lte?: Maybe<Scalars['Int']>;
  dv_gt?: Maybe<Scalars['Int']>;
  dv_gte?: Maybe<Scalars['Int']>;
  dv_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  dv_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sender?: Maybe<Scalars['JSON']>;
  sender_not?: Maybe<Scalars['JSON']>;
  sender_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  sender_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  context?: Maybe<BillingIntegrationOrganizationContextWhereInput>;
  context_is_null?: Maybe<Scalars['Boolean']>;
  importId?: Maybe<Scalars['String']>;
  importId_not?: Maybe<Scalars['String']>;
  importId_contains?: Maybe<Scalars['String']>;
  importId_not_contains?: Maybe<Scalars['String']>;
  importId_starts_with?: Maybe<Scalars['String']>;
  importId_not_starts_with?: Maybe<Scalars['String']>;
  importId_ends_with?: Maybe<Scalars['String']>;
  importId_not_ends_with?: Maybe<Scalars['String']>;
  importId_i?: Maybe<Scalars['String']>;
  importId_not_i?: Maybe<Scalars['String']>;
  importId_contains_i?: Maybe<Scalars['String']>;
  importId_not_contains_i?: Maybe<Scalars['String']>;
  importId_starts_with_i?: Maybe<Scalars['String']>;
  importId_not_starts_with_i?: Maybe<Scalars['String']>;
  importId_ends_with_i?: Maybe<Scalars['String']>;
  importId_not_ends_with_i?: Maybe<Scalars['String']>;
  importId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  importId_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  bindingId?: Maybe<Scalars['String']>;
  bindingId_not?: Maybe<Scalars['String']>;
  bindingId_contains?: Maybe<Scalars['String']>;
  bindingId_not_contains?: Maybe<Scalars['String']>;
  bindingId_starts_with?: Maybe<Scalars['String']>;
  bindingId_not_starts_with?: Maybe<Scalars['String']>;
  bindingId_ends_with?: Maybe<Scalars['String']>;
  bindingId_not_ends_with?: Maybe<Scalars['String']>;
  bindingId_i?: Maybe<Scalars['String']>;
  bindingId_not_i?: Maybe<Scalars['String']>;
  bindingId_contains_i?: Maybe<Scalars['String']>;
  bindingId_not_contains_i?: Maybe<Scalars['String']>;
  bindingId_starts_with_i?: Maybe<Scalars['String']>;
  bindingId_not_starts_with_i?: Maybe<Scalars['String']>;
  bindingId_ends_with_i?: Maybe<Scalars['String']>;
  bindingId_not_ends_with_i?: Maybe<Scalars['String']>;
  bindingId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  bindingId_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  address?: Maybe<Scalars['String']>;
  address_not?: Maybe<Scalars['String']>;
  address_contains?: Maybe<Scalars['String']>;
  address_not_contains?: Maybe<Scalars['String']>;
  address_starts_with?: Maybe<Scalars['String']>;
  address_not_starts_with?: Maybe<Scalars['String']>;
  address_ends_with?: Maybe<Scalars['String']>;
  address_not_ends_with?: Maybe<Scalars['String']>;
  address_i?: Maybe<Scalars['String']>;
  address_not_i?: Maybe<Scalars['String']>;
  address_contains_i?: Maybe<Scalars['String']>;
  address_not_contains_i?: Maybe<Scalars['String']>;
  address_starts_with_i?: Maybe<Scalars['String']>;
  address_not_starts_with_i?: Maybe<Scalars['String']>;
  address_ends_with_i?: Maybe<Scalars['String']>;
  address_not_ends_with_i?: Maybe<Scalars['String']>;
  address_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  address_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  raw?: Maybe<Scalars['JSON']>;
  raw_not?: Maybe<Scalars['JSON']>;
  raw_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  raw_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  meta?: Maybe<Scalars['JSON']>;
  meta_not?: Maybe<Scalars['JSON']>;
  meta_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  meta_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  v?: Maybe<Scalars['Int']>;
  v_not?: Maybe<Scalars['Int']>;
  v_lt?: Maybe<Scalars['Int']>;
  v_lte?: Maybe<Scalars['Int']>;
  v_gt?: Maybe<Scalars['Int']>;
  v_gte?: Maybe<Scalars['Int']>;
  v_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  v_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  createdAt?: Maybe<Scalars['String']>;
  createdAt_not?: Maybe<Scalars['String']>;
  createdAt_lt?: Maybe<Scalars['String']>;
  createdAt_lte?: Maybe<Scalars['String']>;
  createdAt_gt?: Maybe<Scalars['String']>;
  createdAt_gte?: Maybe<Scalars['String']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedAt_not?: Maybe<Scalars['String']>;
  updatedAt_lt?: Maybe<Scalars['String']>;
  updatedAt_lte?: Maybe<Scalars['String']>;
  updatedAt_gt?: Maybe<Scalars['String']>;
  updatedAt_gte?: Maybe<Scalars['String']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy?: Maybe<UserWhereInput>;
  createdBy_is_null?: Maybe<Scalars['Boolean']>;
  updatedBy?: Maybe<UserWhereInput>;
  updatedBy_is_null?: Maybe<Scalars['Boolean']>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedAt_not?: Maybe<Scalars['String']>;
  deletedAt_lt?: Maybe<Scalars['String']>;
  deletedAt_lte?: Maybe<Scalars['String']>;
  deletedAt_gt?: Maybe<Scalars['String']>;
  deletedAt_gte?: Maybe<Scalars['String']>;
  deletedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  deletedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  newId?: Maybe<Scalars['String']>;
  newId_not?: Maybe<Scalars['String']>;
  newId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  newId_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type BillingPropertyWhereUniqueInput = {
  id: Scalars['ID'];
};

export enum SortBillingPropertiesBy {
  DvAsc = 'dv_ASC',
  DvDesc = 'dv_DESC',
  ContextAsc = 'context_ASC',
  ContextDesc = 'context_DESC',
  ImportIdAsc = 'importId_ASC',
  ImportIdDesc = 'importId_DESC',
  BindingIdAsc = 'bindingId_ASC',
  BindingIdDesc = 'bindingId_DESC',
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  VAsc = 'v_ASC',
  VDesc = 'v_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  CreatedByAsc = 'createdBy_ASC',
  CreatedByDesc = 'createdBy_DESC',
  UpdatedByAsc = 'updatedBy_ASC',
  UpdatedByDesc = 'updatedBy_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC'
}

export type BillingPropertyUpdateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  context?: Maybe<BillingIntegrationOrganizationContextRelateToOneInput>;
  importId?: Maybe<Scalars['String']>;
  bindingId?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  raw?: Maybe<Scalars['JSON']>;
  meta?: Maybe<Scalars['JSON']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserRelateToOneInput>;
  updatedBy?: Maybe<UserRelateToOneInput>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['String']>;
};

export type BillingPropertiesUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<BillingPropertyUpdateInput>;
};

export type BillingPropertyCreateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  context?: Maybe<BillingIntegrationOrganizationContextRelateToOneInput>;
  importId?: Maybe<Scalars['String']>;
  bindingId?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  raw?: Maybe<Scalars['JSON']>;
  meta?: Maybe<Scalars['JSON']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserRelateToOneInput>;
  updatedBy?: Maybe<UserRelateToOneInput>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['String']>;
};

export type BillingPropertiesCreateInput = {
  data?: Maybe<BillingPropertyCreateInput>;
};

export enum BillingAccountHistoryRecordHistoryActionType {
  C = 'c',
  U = 'u',
  D = 'd'
}

/**  A keystone list  */
export type BillingAccountHistoryRecord = {
  __typename?: 'BillingAccountHistoryRecord';
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the BillingAccountHistoryRecord List config, or
   *  2. As an alias to the field set on 'labelField' in the BillingAccountHistoryRecord List config, or
   *  3. As an alias to a 'name' field on the BillingAccountHistoryRecord List (if one exists), or
   *  4. As an alias to the 'id' field on the BillingAccountHistoryRecord List.
   */
  _label_?: Maybe<Scalars['String']>;
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  context?: Maybe<Scalars['String']>;
  importId?: Maybe<Scalars['String']>;
  property?: Maybe<Scalars['String']>;
  bindingId?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
  raw?: Maybe<Scalars['JSON']>;
  meta?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['JSON']>;
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<BillingAccountHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type BillingAccountHistoryRecordWhereInput = {
  AND?: Maybe<Array<Maybe<BillingAccountHistoryRecordWhereInput>>>;
  OR?: Maybe<Array<Maybe<BillingAccountHistoryRecordWhereInput>>>;
  dv?: Maybe<Scalars['Int']>;
  dv_not?: Maybe<Scalars['Int']>;
  dv_lt?: Maybe<Scalars['Int']>;
  dv_lte?: Maybe<Scalars['Int']>;
  dv_gt?: Maybe<Scalars['Int']>;
  dv_gte?: Maybe<Scalars['Int']>;
  dv_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  dv_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sender?: Maybe<Scalars['JSON']>;
  sender_not?: Maybe<Scalars['JSON']>;
  sender_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  sender_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  context?: Maybe<Scalars['String']>;
  context_not?: Maybe<Scalars['String']>;
  context_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  context_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  importId?: Maybe<Scalars['String']>;
  importId_not?: Maybe<Scalars['String']>;
  importId_contains?: Maybe<Scalars['String']>;
  importId_not_contains?: Maybe<Scalars['String']>;
  importId_starts_with?: Maybe<Scalars['String']>;
  importId_not_starts_with?: Maybe<Scalars['String']>;
  importId_ends_with?: Maybe<Scalars['String']>;
  importId_not_ends_with?: Maybe<Scalars['String']>;
  importId_i?: Maybe<Scalars['String']>;
  importId_not_i?: Maybe<Scalars['String']>;
  importId_contains_i?: Maybe<Scalars['String']>;
  importId_not_contains_i?: Maybe<Scalars['String']>;
  importId_starts_with_i?: Maybe<Scalars['String']>;
  importId_not_starts_with_i?: Maybe<Scalars['String']>;
  importId_ends_with_i?: Maybe<Scalars['String']>;
  importId_not_ends_with_i?: Maybe<Scalars['String']>;
  importId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  importId_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  property?: Maybe<Scalars['String']>;
  property_not?: Maybe<Scalars['String']>;
  property_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  property_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  bindingId?: Maybe<Scalars['String']>;
  bindingId_not?: Maybe<Scalars['String']>;
  bindingId_contains?: Maybe<Scalars['String']>;
  bindingId_not_contains?: Maybe<Scalars['String']>;
  bindingId_starts_with?: Maybe<Scalars['String']>;
  bindingId_not_starts_with?: Maybe<Scalars['String']>;
  bindingId_ends_with?: Maybe<Scalars['String']>;
  bindingId_not_ends_with?: Maybe<Scalars['String']>;
  bindingId_i?: Maybe<Scalars['String']>;
  bindingId_not_i?: Maybe<Scalars['String']>;
  bindingId_contains_i?: Maybe<Scalars['String']>;
  bindingId_not_contains_i?: Maybe<Scalars['String']>;
  bindingId_starts_with_i?: Maybe<Scalars['String']>;
  bindingId_not_starts_with_i?: Maybe<Scalars['String']>;
  bindingId_ends_with_i?: Maybe<Scalars['String']>;
  bindingId_not_ends_with_i?: Maybe<Scalars['String']>;
  bindingId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  bindingId_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  number?: Maybe<Scalars['String']>;
  number_not?: Maybe<Scalars['String']>;
  number_contains?: Maybe<Scalars['String']>;
  number_not_contains?: Maybe<Scalars['String']>;
  number_starts_with?: Maybe<Scalars['String']>;
  number_not_starts_with?: Maybe<Scalars['String']>;
  number_ends_with?: Maybe<Scalars['String']>;
  number_not_ends_with?: Maybe<Scalars['String']>;
  number_i?: Maybe<Scalars['String']>;
  number_not_i?: Maybe<Scalars['String']>;
  number_contains_i?: Maybe<Scalars['String']>;
  number_not_contains_i?: Maybe<Scalars['String']>;
  number_starts_with_i?: Maybe<Scalars['String']>;
  number_not_starts_with_i?: Maybe<Scalars['String']>;
  number_ends_with_i?: Maybe<Scalars['String']>;
  number_not_ends_with_i?: Maybe<Scalars['String']>;
  number_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  number_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  unit?: Maybe<Scalars['String']>;
  unit_not?: Maybe<Scalars['String']>;
  unit_contains?: Maybe<Scalars['String']>;
  unit_not_contains?: Maybe<Scalars['String']>;
  unit_starts_with?: Maybe<Scalars['String']>;
  unit_not_starts_with?: Maybe<Scalars['String']>;
  unit_ends_with?: Maybe<Scalars['String']>;
  unit_not_ends_with?: Maybe<Scalars['String']>;
  unit_i?: Maybe<Scalars['String']>;
  unit_not_i?: Maybe<Scalars['String']>;
  unit_contains_i?: Maybe<Scalars['String']>;
  unit_not_contains_i?: Maybe<Scalars['String']>;
  unit_starts_with_i?: Maybe<Scalars['String']>;
  unit_not_starts_with_i?: Maybe<Scalars['String']>;
  unit_ends_with_i?: Maybe<Scalars['String']>;
  unit_not_ends_with_i?: Maybe<Scalars['String']>;
  unit_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  unit_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  raw?: Maybe<Scalars['JSON']>;
  raw_not?: Maybe<Scalars['JSON']>;
  raw_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  raw_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  meta?: Maybe<Scalars['JSON']>;
  meta_not?: Maybe<Scalars['JSON']>;
  meta_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  meta_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  v?: Maybe<Scalars['Int']>;
  v_not?: Maybe<Scalars['Int']>;
  v_lt?: Maybe<Scalars['Int']>;
  v_lte?: Maybe<Scalars['Int']>;
  v_gt?: Maybe<Scalars['Int']>;
  v_gte?: Maybe<Scalars['Int']>;
  v_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  v_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  createdAt?: Maybe<Scalars['String']>;
  createdAt_not?: Maybe<Scalars['String']>;
  createdAt_lt?: Maybe<Scalars['String']>;
  createdAt_lte?: Maybe<Scalars['String']>;
  createdAt_gt?: Maybe<Scalars['String']>;
  createdAt_gte?: Maybe<Scalars['String']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedAt_not?: Maybe<Scalars['String']>;
  updatedAt_lt?: Maybe<Scalars['String']>;
  updatedAt_lte?: Maybe<Scalars['String']>;
  updatedAt_gt?: Maybe<Scalars['String']>;
  updatedAt_gte?: Maybe<Scalars['String']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy?: Maybe<Scalars['String']>;
  createdBy_not?: Maybe<Scalars['String']>;
  createdBy_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedBy?: Maybe<Scalars['String']>;
  updatedBy_not?: Maybe<Scalars['String']>;
  updatedBy_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedBy_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedAt_not?: Maybe<Scalars['String']>;
  deletedAt_lt?: Maybe<Scalars['String']>;
  deletedAt_lte?: Maybe<Scalars['String']>;
  deletedAt_gt?: Maybe<Scalars['String']>;
  deletedAt_gte?: Maybe<Scalars['String']>;
  deletedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  deletedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  newId?: Maybe<Scalars['JSON']>;
  newId_not?: Maybe<Scalars['JSON']>;
  newId_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  newId_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  history_date?: Maybe<Scalars['String']>;
  history_date_not?: Maybe<Scalars['String']>;
  history_date_lt?: Maybe<Scalars['String']>;
  history_date_lte?: Maybe<Scalars['String']>;
  history_date_gt?: Maybe<Scalars['String']>;
  history_date_gte?: Maybe<Scalars['String']>;
  history_date_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_date_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_action?: Maybe<BillingAccountHistoryRecordHistoryActionType>;
  history_action_not?: Maybe<BillingAccountHistoryRecordHistoryActionType>;
  history_action_in?: Maybe<Array<Maybe<BillingAccountHistoryRecordHistoryActionType>>>;
  history_action_not_in?: Maybe<Array<Maybe<BillingAccountHistoryRecordHistoryActionType>>>;
  history_id?: Maybe<Scalars['String']>;
  history_id_not?: Maybe<Scalars['String']>;
  history_id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_id_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type BillingAccountHistoryRecordWhereUniqueInput = {
  id: Scalars['ID'];
};

export enum SortBillingAccountHistoryRecordsBy {
  DvAsc = 'dv_ASC',
  DvDesc = 'dv_DESC',
  ImportIdAsc = 'importId_ASC',
  ImportIdDesc = 'importId_DESC',
  BindingIdAsc = 'bindingId_ASC',
  BindingIdDesc = 'bindingId_DESC',
  NumberAsc = 'number_ASC',
  NumberDesc = 'number_DESC',
  UnitAsc = 'unit_ASC',
  UnitDesc = 'unit_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  VAsc = 'v_ASC',
  VDesc = 'v_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  HistoryDateAsc = 'history_date_ASC',
  HistoryDateDesc = 'history_date_DESC',
  HistoryActionAsc = 'history_action_ASC',
  HistoryActionDesc = 'history_action_DESC'
}

export type BillingAccountHistoryRecordUpdateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  context?: Maybe<Scalars['String']>;
  importId?: Maybe<Scalars['String']>;
  property?: Maybe<Scalars['String']>;
  bindingId?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
  raw?: Maybe<Scalars['JSON']>;
  meta?: Maybe<Scalars['JSON']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['JSON']>;
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<BillingAccountHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type BillingAccountHistoryRecordsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<BillingAccountHistoryRecordUpdateInput>;
};

export type BillingAccountHistoryRecordCreateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  context?: Maybe<Scalars['String']>;
  importId?: Maybe<Scalars['String']>;
  property?: Maybe<Scalars['String']>;
  bindingId?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
  raw?: Maybe<Scalars['JSON']>;
  meta?: Maybe<Scalars['JSON']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['JSON']>;
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<BillingAccountHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type BillingAccountHistoryRecordsCreateInput = {
  data?: Maybe<BillingAccountHistoryRecordCreateInput>;
};

export type BillingPropertyRelateToOneInput = {
  create?: Maybe<BillingPropertyCreateInput>;
  connect?: Maybe<BillingPropertyWhereUniqueInput>;
  disconnect?: Maybe<BillingPropertyWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

/**  All `account` objects from `billing data source`. In close account cases, these objects should be soft deleted  */
export type BillingAccount = {
  __typename?: 'BillingAccount';
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the BillingAccount List config, or
   *  2. As an alias to the field set on 'labelField' in the BillingAccount List config, or
   *  3. As an alias to a 'name' field on the BillingAccount List (if one exists), or
   *  4. As an alias to the 'id' field on the BillingAccount List.
   */
  _label_?: Maybe<Scalars['String']>;
  /**  Data structure Version  */
  dv?: Maybe<Scalars['Int']>;
  /**  Client-side devise identification used for the anti-fraud detection. Example `{ dv: '1', fingerprint: 'VaxSw2aXZa'}`. Where the `fingerprint` should be the same for the same devices and it's not linked to the user ID. It's the device ID like browser / mobile application / remote system  */
  sender?: Maybe<Scalars['JSON']>;
  /**  Integration context  */
  context?: Maybe<BillingIntegrationOrganizationContext>;
  /**  `billing data source` local object ID. Used only for the internal needs of the `integration component`  */
  importId?: Maybe<Scalars['String']>;
  /**  Billing property  */
  property?: Maybe<BillingProperty>;
  /**  A well-known universal identifier that allows you to identify the same objects in different systems. It may differ in different countries. Example: for Russia, the dom.gosuslugi.ru account number is used  */
  bindingId?: Maybe<Scalars['String']>;
  /**  Account number  */
  number?: Maybe<Scalars['String']>;
  /**  Property unit number (apartment number)  */
  unit?: Maybe<Scalars['String']>;
  /**  Raw non-structured data obtained from the `billing data source`. Used only for the internal needs of the `integration component`.  */
  raw?: Maybe<Scalars['JSON']>;
  /**  Structured metadata obtained from the `billing data source`. Some of this data is required for use in the `receipt template`. Examples of data keys: `property unit number`, `floor`, `entrance`, `is parking`  */
  meta?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<User>;
  updatedBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['String']>;
};

export type BillingAccountWhereInput = {
  AND?: Maybe<Array<Maybe<BillingAccountWhereInput>>>;
  OR?: Maybe<Array<Maybe<BillingAccountWhereInput>>>;
  dv?: Maybe<Scalars['Int']>;
  dv_not?: Maybe<Scalars['Int']>;
  dv_lt?: Maybe<Scalars['Int']>;
  dv_lte?: Maybe<Scalars['Int']>;
  dv_gt?: Maybe<Scalars['Int']>;
  dv_gte?: Maybe<Scalars['Int']>;
  dv_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  dv_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sender?: Maybe<Scalars['JSON']>;
  sender_not?: Maybe<Scalars['JSON']>;
  sender_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  sender_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  context?: Maybe<BillingIntegrationOrganizationContextWhereInput>;
  context_is_null?: Maybe<Scalars['Boolean']>;
  importId?: Maybe<Scalars['String']>;
  importId_not?: Maybe<Scalars['String']>;
  importId_contains?: Maybe<Scalars['String']>;
  importId_not_contains?: Maybe<Scalars['String']>;
  importId_starts_with?: Maybe<Scalars['String']>;
  importId_not_starts_with?: Maybe<Scalars['String']>;
  importId_ends_with?: Maybe<Scalars['String']>;
  importId_not_ends_with?: Maybe<Scalars['String']>;
  importId_i?: Maybe<Scalars['String']>;
  importId_not_i?: Maybe<Scalars['String']>;
  importId_contains_i?: Maybe<Scalars['String']>;
  importId_not_contains_i?: Maybe<Scalars['String']>;
  importId_starts_with_i?: Maybe<Scalars['String']>;
  importId_not_starts_with_i?: Maybe<Scalars['String']>;
  importId_ends_with_i?: Maybe<Scalars['String']>;
  importId_not_ends_with_i?: Maybe<Scalars['String']>;
  importId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  importId_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  property?: Maybe<BillingPropertyWhereInput>;
  property_is_null?: Maybe<Scalars['Boolean']>;
  bindingId?: Maybe<Scalars['String']>;
  bindingId_not?: Maybe<Scalars['String']>;
  bindingId_contains?: Maybe<Scalars['String']>;
  bindingId_not_contains?: Maybe<Scalars['String']>;
  bindingId_starts_with?: Maybe<Scalars['String']>;
  bindingId_not_starts_with?: Maybe<Scalars['String']>;
  bindingId_ends_with?: Maybe<Scalars['String']>;
  bindingId_not_ends_with?: Maybe<Scalars['String']>;
  bindingId_i?: Maybe<Scalars['String']>;
  bindingId_not_i?: Maybe<Scalars['String']>;
  bindingId_contains_i?: Maybe<Scalars['String']>;
  bindingId_not_contains_i?: Maybe<Scalars['String']>;
  bindingId_starts_with_i?: Maybe<Scalars['String']>;
  bindingId_not_starts_with_i?: Maybe<Scalars['String']>;
  bindingId_ends_with_i?: Maybe<Scalars['String']>;
  bindingId_not_ends_with_i?: Maybe<Scalars['String']>;
  bindingId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  bindingId_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  number?: Maybe<Scalars['String']>;
  number_not?: Maybe<Scalars['String']>;
  number_contains?: Maybe<Scalars['String']>;
  number_not_contains?: Maybe<Scalars['String']>;
  number_starts_with?: Maybe<Scalars['String']>;
  number_not_starts_with?: Maybe<Scalars['String']>;
  number_ends_with?: Maybe<Scalars['String']>;
  number_not_ends_with?: Maybe<Scalars['String']>;
  number_i?: Maybe<Scalars['String']>;
  number_not_i?: Maybe<Scalars['String']>;
  number_contains_i?: Maybe<Scalars['String']>;
  number_not_contains_i?: Maybe<Scalars['String']>;
  number_starts_with_i?: Maybe<Scalars['String']>;
  number_not_starts_with_i?: Maybe<Scalars['String']>;
  number_ends_with_i?: Maybe<Scalars['String']>;
  number_not_ends_with_i?: Maybe<Scalars['String']>;
  number_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  number_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  unit?: Maybe<Scalars['String']>;
  unit_not?: Maybe<Scalars['String']>;
  unit_contains?: Maybe<Scalars['String']>;
  unit_not_contains?: Maybe<Scalars['String']>;
  unit_starts_with?: Maybe<Scalars['String']>;
  unit_not_starts_with?: Maybe<Scalars['String']>;
  unit_ends_with?: Maybe<Scalars['String']>;
  unit_not_ends_with?: Maybe<Scalars['String']>;
  unit_i?: Maybe<Scalars['String']>;
  unit_not_i?: Maybe<Scalars['String']>;
  unit_contains_i?: Maybe<Scalars['String']>;
  unit_not_contains_i?: Maybe<Scalars['String']>;
  unit_starts_with_i?: Maybe<Scalars['String']>;
  unit_not_starts_with_i?: Maybe<Scalars['String']>;
  unit_ends_with_i?: Maybe<Scalars['String']>;
  unit_not_ends_with_i?: Maybe<Scalars['String']>;
  unit_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  unit_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  raw?: Maybe<Scalars['JSON']>;
  raw_not?: Maybe<Scalars['JSON']>;
  raw_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  raw_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  meta?: Maybe<Scalars['JSON']>;
  meta_not?: Maybe<Scalars['JSON']>;
  meta_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  meta_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  v?: Maybe<Scalars['Int']>;
  v_not?: Maybe<Scalars['Int']>;
  v_lt?: Maybe<Scalars['Int']>;
  v_lte?: Maybe<Scalars['Int']>;
  v_gt?: Maybe<Scalars['Int']>;
  v_gte?: Maybe<Scalars['Int']>;
  v_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  v_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  createdAt?: Maybe<Scalars['String']>;
  createdAt_not?: Maybe<Scalars['String']>;
  createdAt_lt?: Maybe<Scalars['String']>;
  createdAt_lte?: Maybe<Scalars['String']>;
  createdAt_gt?: Maybe<Scalars['String']>;
  createdAt_gte?: Maybe<Scalars['String']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedAt_not?: Maybe<Scalars['String']>;
  updatedAt_lt?: Maybe<Scalars['String']>;
  updatedAt_lte?: Maybe<Scalars['String']>;
  updatedAt_gt?: Maybe<Scalars['String']>;
  updatedAt_gte?: Maybe<Scalars['String']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy?: Maybe<UserWhereInput>;
  createdBy_is_null?: Maybe<Scalars['Boolean']>;
  updatedBy?: Maybe<UserWhereInput>;
  updatedBy_is_null?: Maybe<Scalars['Boolean']>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedAt_not?: Maybe<Scalars['String']>;
  deletedAt_lt?: Maybe<Scalars['String']>;
  deletedAt_lte?: Maybe<Scalars['String']>;
  deletedAt_gt?: Maybe<Scalars['String']>;
  deletedAt_gte?: Maybe<Scalars['String']>;
  deletedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  deletedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  newId?: Maybe<Scalars['String']>;
  newId_not?: Maybe<Scalars['String']>;
  newId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  newId_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type BillingAccountWhereUniqueInput = {
  id: Scalars['ID'];
};

export enum SortBillingAccountsBy {
  DvAsc = 'dv_ASC',
  DvDesc = 'dv_DESC',
  ContextAsc = 'context_ASC',
  ContextDesc = 'context_DESC',
  ImportIdAsc = 'importId_ASC',
  ImportIdDesc = 'importId_DESC',
  PropertyAsc = 'property_ASC',
  PropertyDesc = 'property_DESC',
  BindingIdAsc = 'bindingId_ASC',
  BindingIdDesc = 'bindingId_DESC',
  NumberAsc = 'number_ASC',
  NumberDesc = 'number_DESC',
  UnitAsc = 'unit_ASC',
  UnitDesc = 'unit_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  VAsc = 'v_ASC',
  VDesc = 'v_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  CreatedByAsc = 'createdBy_ASC',
  CreatedByDesc = 'createdBy_DESC',
  UpdatedByAsc = 'updatedBy_ASC',
  UpdatedByDesc = 'updatedBy_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC'
}

export type BillingAccountUpdateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  context?: Maybe<BillingIntegrationOrganizationContextRelateToOneInput>;
  importId?: Maybe<Scalars['String']>;
  property?: Maybe<BillingPropertyRelateToOneInput>;
  bindingId?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
  raw?: Maybe<Scalars['JSON']>;
  meta?: Maybe<Scalars['JSON']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserRelateToOneInput>;
  updatedBy?: Maybe<UserRelateToOneInput>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['String']>;
};

export type BillingAccountsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<BillingAccountUpdateInput>;
};

export type BillingAccountCreateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  context?: Maybe<BillingIntegrationOrganizationContextRelateToOneInput>;
  importId?: Maybe<Scalars['String']>;
  property?: Maybe<BillingPropertyRelateToOneInput>;
  bindingId?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
  raw?: Maybe<Scalars['JSON']>;
  meta?: Maybe<Scalars['JSON']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserRelateToOneInput>;
  updatedBy?: Maybe<UserRelateToOneInput>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['String']>;
};

export type BillingAccountsCreateInput = {
  data?: Maybe<BillingAccountCreateInput>;
};

export enum BillingMeterResourceHistoryRecordHistoryActionType {
  C = 'c',
  U = 'u',
  D = 'd'
}

/**  A keystone list  */
export type BillingMeterResourceHistoryRecord = {
  __typename?: 'BillingMeterResourceHistoryRecord';
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the BillingMeterResourceHistoryRecord List config, or
   *  2. As an alias to the field set on 'labelField' in the BillingMeterResourceHistoryRecord List config, or
   *  3. As an alias to a 'name' field on the BillingMeterResourceHistoryRecord List (if one exists), or
   *  4. As an alias to the 'id' field on the BillingMeterResourceHistoryRecord List.
   */
  _label_?: Maybe<Scalars['String']>;
  dv?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['JSON']>;
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<BillingMeterResourceHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type BillingMeterResourceHistoryRecordWhereInput = {
  AND?: Maybe<Array<Maybe<BillingMeterResourceHistoryRecordWhereInput>>>;
  OR?: Maybe<Array<Maybe<BillingMeterResourceHistoryRecordWhereInput>>>;
  dv?: Maybe<Scalars['Int']>;
  dv_not?: Maybe<Scalars['Int']>;
  dv_lt?: Maybe<Scalars['Int']>;
  dv_lte?: Maybe<Scalars['Int']>;
  dv_gt?: Maybe<Scalars['Int']>;
  dv_gte?: Maybe<Scalars['Int']>;
  dv_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  dv_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  v?: Maybe<Scalars['Int']>;
  v_not?: Maybe<Scalars['Int']>;
  v_lt?: Maybe<Scalars['Int']>;
  v_lte?: Maybe<Scalars['Int']>;
  v_gt?: Maybe<Scalars['Int']>;
  v_gte?: Maybe<Scalars['Int']>;
  v_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  v_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  createdAt?: Maybe<Scalars['String']>;
  createdAt_not?: Maybe<Scalars['String']>;
  createdAt_lt?: Maybe<Scalars['String']>;
  createdAt_lte?: Maybe<Scalars['String']>;
  createdAt_gt?: Maybe<Scalars['String']>;
  createdAt_gte?: Maybe<Scalars['String']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedAt_not?: Maybe<Scalars['String']>;
  updatedAt_lt?: Maybe<Scalars['String']>;
  updatedAt_lte?: Maybe<Scalars['String']>;
  updatedAt_gt?: Maybe<Scalars['String']>;
  updatedAt_gte?: Maybe<Scalars['String']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy?: Maybe<Scalars['String']>;
  createdBy_not?: Maybe<Scalars['String']>;
  createdBy_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedBy?: Maybe<Scalars['String']>;
  updatedBy_not?: Maybe<Scalars['String']>;
  updatedBy_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedBy_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedAt_not?: Maybe<Scalars['String']>;
  deletedAt_lt?: Maybe<Scalars['String']>;
  deletedAt_lte?: Maybe<Scalars['String']>;
  deletedAt_gt?: Maybe<Scalars['String']>;
  deletedAt_gte?: Maybe<Scalars['String']>;
  deletedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  deletedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  newId?: Maybe<Scalars['JSON']>;
  newId_not?: Maybe<Scalars['JSON']>;
  newId_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  newId_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  history_date?: Maybe<Scalars['String']>;
  history_date_not?: Maybe<Scalars['String']>;
  history_date_lt?: Maybe<Scalars['String']>;
  history_date_lte?: Maybe<Scalars['String']>;
  history_date_gt?: Maybe<Scalars['String']>;
  history_date_gte?: Maybe<Scalars['String']>;
  history_date_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_date_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_action?: Maybe<BillingMeterResourceHistoryRecordHistoryActionType>;
  history_action_not?: Maybe<BillingMeterResourceHistoryRecordHistoryActionType>;
  history_action_in?: Maybe<Array<Maybe<BillingMeterResourceHistoryRecordHistoryActionType>>>;
  history_action_not_in?: Maybe<Array<Maybe<BillingMeterResourceHistoryRecordHistoryActionType>>>;
  history_id?: Maybe<Scalars['String']>;
  history_id_not?: Maybe<Scalars['String']>;
  history_id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_id_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type BillingMeterResourceHistoryRecordWhereUniqueInput = {
  id: Scalars['ID'];
};

export enum SortBillingMeterResourceHistoryRecordsBy {
  DvAsc = 'dv_ASC',
  DvDesc = 'dv_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  VAsc = 'v_ASC',
  VDesc = 'v_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  HistoryDateAsc = 'history_date_ASC',
  HistoryDateDesc = 'history_date_DESC',
  HistoryActionAsc = 'history_action_ASC',
  HistoryActionDesc = 'history_action_DESC'
}

export type BillingMeterResourceHistoryRecordUpdateInput = {
  dv?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['JSON']>;
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<BillingMeterResourceHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type BillingMeterResourceHistoryRecordsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<BillingMeterResourceHistoryRecordUpdateInput>;
};

export type BillingMeterResourceHistoryRecordCreateInput = {
  dv?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['JSON']>;
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<BillingMeterResourceHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type BillingMeterResourceHistoryRecordsCreateInput = {
  data?: Maybe<BillingMeterResourceHistoryRecordCreateInput>;
};

/**  Meter `resource types`  */
export type BillingMeterResource = {
  __typename?: 'BillingMeterResource';
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the BillingMeterResource List config, or
   *  2. As an alias to the field set on 'labelField' in the BillingMeterResource List config, or
   *  3. As an alias to a 'name' field on the BillingMeterResource List (if one exists), or
   *  4. As an alias to the 'id' field on the BillingMeterResource List.
   */
  _label_?: Maybe<Scalars['String']>;
  /**  Data structure Version  */
  dv?: Maybe<Scalars['Int']>;
  /**  The name of the `resource types`  */
  name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<User>;
  updatedBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['String']>;
};

export type BillingMeterResourceWhereInput = {
  AND?: Maybe<Array<Maybe<BillingMeterResourceWhereInput>>>;
  OR?: Maybe<Array<Maybe<BillingMeterResourceWhereInput>>>;
  dv?: Maybe<Scalars['Int']>;
  dv_not?: Maybe<Scalars['Int']>;
  dv_lt?: Maybe<Scalars['Int']>;
  dv_lte?: Maybe<Scalars['Int']>;
  dv_gt?: Maybe<Scalars['Int']>;
  dv_gte?: Maybe<Scalars['Int']>;
  dv_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  dv_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  v?: Maybe<Scalars['Int']>;
  v_not?: Maybe<Scalars['Int']>;
  v_lt?: Maybe<Scalars['Int']>;
  v_lte?: Maybe<Scalars['Int']>;
  v_gt?: Maybe<Scalars['Int']>;
  v_gte?: Maybe<Scalars['Int']>;
  v_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  v_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  createdAt?: Maybe<Scalars['String']>;
  createdAt_not?: Maybe<Scalars['String']>;
  createdAt_lt?: Maybe<Scalars['String']>;
  createdAt_lte?: Maybe<Scalars['String']>;
  createdAt_gt?: Maybe<Scalars['String']>;
  createdAt_gte?: Maybe<Scalars['String']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedAt_not?: Maybe<Scalars['String']>;
  updatedAt_lt?: Maybe<Scalars['String']>;
  updatedAt_lte?: Maybe<Scalars['String']>;
  updatedAt_gt?: Maybe<Scalars['String']>;
  updatedAt_gte?: Maybe<Scalars['String']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy?: Maybe<UserWhereInput>;
  createdBy_is_null?: Maybe<Scalars['Boolean']>;
  updatedBy?: Maybe<UserWhereInput>;
  updatedBy_is_null?: Maybe<Scalars['Boolean']>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedAt_not?: Maybe<Scalars['String']>;
  deletedAt_lt?: Maybe<Scalars['String']>;
  deletedAt_lte?: Maybe<Scalars['String']>;
  deletedAt_gt?: Maybe<Scalars['String']>;
  deletedAt_gte?: Maybe<Scalars['String']>;
  deletedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  deletedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  newId?: Maybe<Scalars['String']>;
  newId_not?: Maybe<Scalars['String']>;
  newId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  newId_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type BillingMeterResourceWhereUniqueInput = {
  id: Scalars['ID'];
};

export enum SortBillingMeterResourcesBy {
  DvAsc = 'dv_ASC',
  DvDesc = 'dv_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  VAsc = 'v_ASC',
  VDesc = 'v_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  CreatedByAsc = 'createdBy_ASC',
  CreatedByDesc = 'createdBy_DESC',
  UpdatedByAsc = 'updatedBy_ASC',
  UpdatedByDesc = 'updatedBy_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC'
}

export type BillingMeterResourceUpdateInput = {
  dv?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserRelateToOneInput>;
  updatedBy?: Maybe<UserRelateToOneInput>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['String']>;
};

export type BillingMeterResourcesUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<BillingMeterResourceUpdateInput>;
};

export type BillingMeterResourceCreateInput = {
  dv?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserRelateToOneInput>;
  updatedBy?: Maybe<UserRelateToOneInput>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['String']>;
};

export type BillingMeterResourcesCreateInput = {
  data?: Maybe<BillingMeterResourceCreateInput>;
};

export enum BillingAccountMeterHistoryRecordHistoryActionType {
  C = 'c',
  U = 'u',
  D = 'd'
}

/**  A keystone list  */
export type BillingAccountMeterHistoryRecord = {
  __typename?: 'BillingAccountMeterHistoryRecord';
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the BillingAccountMeterHistoryRecord List config, or
   *  2. As an alias to the field set on 'labelField' in the BillingAccountMeterHistoryRecord List config, or
   *  3. As an alias to a 'name' field on the BillingAccountMeterHistoryRecord List (if one exists), or
   *  4. As an alias to the 'id' field on the BillingAccountMeterHistoryRecord List.
   */
  _label_?: Maybe<Scalars['String']>;
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  context?: Maybe<Scalars['String']>;
  importId?: Maybe<Scalars['String']>;
  property?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  resource?: Maybe<Scalars['String']>;
  raw?: Maybe<Scalars['JSON']>;
  meta?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['JSON']>;
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<BillingAccountMeterHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type BillingAccountMeterHistoryRecordWhereInput = {
  AND?: Maybe<Array<Maybe<BillingAccountMeterHistoryRecordWhereInput>>>;
  OR?: Maybe<Array<Maybe<BillingAccountMeterHistoryRecordWhereInput>>>;
  dv?: Maybe<Scalars['Int']>;
  dv_not?: Maybe<Scalars['Int']>;
  dv_lt?: Maybe<Scalars['Int']>;
  dv_lte?: Maybe<Scalars['Int']>;
  dv_gt?: Maybe<Scalars['Int']>;
  dv_gte?: Maybe<Scalars['Int']>;
  dv_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  dv_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sender?: Maybe<Scalars['JSON']>;
  sender_not?: Maybe<Scalars['JSON']>;
  sender_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  sender_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  context?: Maybe<Scalars['String']>;
  context_not?: Maybe<Scalars['String']>;
  context_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  context_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  importId?: Maybe<Scalars['String']>;
  importId_not?: Maybe<Scalars['String']>;
  importId_contains?: Maybe<Scalars['String']>;
  importId_not_contains?: Maybe<Scalars['String']>;
  importId_starts_with?: Maybe<Scalars['String']>;
  importId_not_starts_with?: Maybe<Scalars['String']>;
  importId_ends_with?: Maybe<Scalars['String']>;
  importId_not_ends_with?: Maybe<Scalars['String']>;
  importId_i?: Maybe<Scalars['String']>;
  importId_not_i?: Maybe<Scalars['String']>;
  importId_contains_i?: Maybe<Scalars['String']>;
  importId_not_contains_i?: Maybe<Scalars['String']>;
  importId_starts_with_i?: Maybe<Scalars['String']>;
  importId_not_starts_with_i?: Maybe<Scalars['String']>;
  importId_ends_with_i?: Maybe<Scalars['String']>;
  importId_not_ends_with_i?: Maybe<Scalars['String']>;
  importId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  importId_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  property?: Maybe<Scalars['String']>;
  property_not?: Maybe<Scalars['String']>;
  property_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  property_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  account_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  resource?: Maybe<Scalars['String']>;
  resource_not?: Maybe<Scalars['String']>;
  resource_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  resource_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  raw?: Maybe<Scalars['JSON']>;
  raw_not?: Maybe<Scalars['JSON']>;
  raw_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  raw_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  meta?: Maybe<Scalars['JSON']>;
  meta_not?: Maybe<Scalars['JSON']>;
  meta_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  meta_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  v?: Maybe<Scalars['Int']>;
  v_not?: Maybe<Scalars['Int']>;
  v_lt?: Maybe<Scalars['Int']>;
  v_lte?: Maybe<Scalars['Int']>;
  v_gt?: Maybe<Scalars['Int']>;
  v_gte?: Maybe<Scalars['Int']>;
  v_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  v_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  createdAt?: Maybe<Scalars['String']>;
  createdAt_not?: Maybe<Scalars['String']>;
  createdAt_lt?: Maybe<Scalars['String']>;
  createdAt_lte?: Maybe<Scalars['String']>;
  createdAt_gt?: Maybe<Scalars['String']>;
  createdAt_gte?: Maybe<Scalars['String']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedAt_not?: Maybe<Scalars['String']>;
  updatedAt_lt?: Maybe<Scalars['String']>;
  updatedAt_lte?: Maybe<Scalars['String']>;
  updatedAt_gt?: Maybe<Scalars['String']>;
  updatedAt_gte?: Maybe<Scalars['String']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy?: Maybe<Scalars['String']>;
  createdBy_not?: Maybe<Scalars['String']>;
  createdBy_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedBy?: Maybe<Scalars['String']>;
  updatedBy_not?: Maybe<Scalars['String']>;
  updatedBy_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedBy_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedAt_not?: Maybe<Scalars['String']>;
  deletedAt_lt?: Maybe<Scalars['String']>;
  deletedAt_lte?: Maybe<Scalars['String']>;
  deletedAt_gt?: Maybe<Scalars['String']>;
  deletedAt_gte?: Maybe<Scalars['String']>;
  deletedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  deletedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  newId?: Maybe<Scalars['JSON']>;
  newId_not?: Maybe<Scalars['JSON']>;
  newId_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  newId_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  history_date?: Maybe<Scalars['String']>;
  history_date_not?: Maybe<Scalars['String']>;
  history_date_lt?: Maybe<Scalars['String']>;
  history_date_lte?: Maybe<Scalars['String']>;
  history_date_gt?: Maybe<Scalars['String']>;
  history_date_gte?: Maybe<Scalars['String']>;
  history_date_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_date_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_action?: Maybe<BillingAccountMeterHistoryRecordHistoryActionType>;
  history_action_not?: Maybe<BillingAccountMeterHistoryRecordHistoryActionType>;
  history_action_in?: Maybe<Array<Maybe<BillingAccountMeterHistoryRecordHistoryActionType>>>;
  history_action_not_in?: Maybe<Array<Maybe<BillingAccountMeterHistoryRecordHistoryActionType>>>;
  history_id?: Maybe<Scalars['String']>;
  history_id_not?: Maybe<Scalars['String']>;
  history_id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_id_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type BillingAccountMeterHistoryRecordWhereUniqueInput = {
  id: Scalars['ID'];
};

export enum SortBillingAccountMeterHistoryRecordsBy {
  DvAsc = 'dv_ASC',
  DvDesc = 'dv_DESC',
  ImportIdAsc = 'importId_ASC',
  ImportIdDesc = 'importId_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  VAsc = 'v_ASC',
  VDesc = 'v_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  HistoryDateAsc = 'history_date_ASC',
  HistoryDateDesc = 'history_date_DESC',
  HistoryActionAsc = 'history_action_ASC',
  HistoryActionDesc = 'history_action_DESC'
}

export type BillingAccountMeterHistoryRecordUpdateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  context?: Maybe<Scalars['String']>;
  importId?: Maybe<Scalars['String']>;
  property?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  resource?: Maybe<Scalars['String']>;
  raw?: Maybe<Scalars['JSON']>;
  meta?: Maybe<Scalars['JSON']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['JSON']>;
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<BillingAccountMeterHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type BillingAccountMeterHistoryRecordsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<BillingAccountMeterHistoryRecordUpdateInput>;
};

export type BillingAccountMeterHistoryRecordCreateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  context?: Maybe<Scalars['String']>;
  importId?: Maybe<Scalars['String']>;
  property?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  resource?: Maybe<Scalars['String']>;
  raw?: Maybe<Scalars['JSON']>;
  meta?: Maybe<Scalars['JSON']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['JSON']>;
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<BillingAccountMeterHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type BillingAccountMeterHistoryRecordsCreateInput = {
  data?: Maybe<BillingAccountMeterHistoryRecordCreateInput>;
};

export type BillingAccountRelateToOneInput = {
  create?: Maybe<BillingAccountCreateInput>;
  connect?: Maybe<BillingAccountWhereUniqueInput>;
  disconnect?: Maybe<BillingAccountWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type BillingMeterResourceRelateToOneInput = {
  create?: Maybe<BillingMeterResourceCreateInput>;
  connect?: Maybe<BillingMeterResourceWhereUniqueInput>;
  disconnect?: Maybe<BillingMeterResourceWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

/**  All `personal meter` (non `whole-building meter`) objects from `billing data source`. In case of the meter can measure several resources we create a separate object for each resource  */
export type BillingAccountMeter = {
  __typename?: 'BillingAccountMeter';
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the BillingAccountMeter List config, or
   *  2. As an alias to the field set on 'labelField' in the BillingAccountMeter List config, or
   *  3. As an alias to a 'name' field on the BillingAccountMeter List (if one exists), or
   *  4. As an alias to the 'id' field on the BillingAccountMeter List.
   */
  _label_?: Maybe<Scalars['String']>;
  /**  Data structure Version  */
  dv?: Maybe<Scalars['Int']>;
  /**  Client-side devise identification used for the anti-fraud detection. Example `{ dv: '1', fingerprint: 'VaxSw2aXZa'}`. Where the `fingerprint` should be the same for the same devices and it's not linked to the user ID. It's the device ID like browser / mobile application / remote system  */
  sender?: Maybe<Scalars['JSON']>;
  /**  Integration context  */
  context?: Maybe<BillingIntegrationOrganizationContext>;
  /**  `billing data source` local object ID. Used only for the internal needs of the `integration component`  */
  importId?: Maybe<Scalars['String']>;
  /**  Billing property  */
  property?: Maybe<BillingProperty>;
  /**  Billing account  */
  account?: Maybe<BillingAccount>;
  /**  Meter resource types  */
  resource?: Maybe<BillingMeterResource>;
  /**  Raw non-structured data obtained from the `billing data source`. Used only for the internal needs of the `integration component`.  */
  raw?: Maybe<Scalars['JSON']>;
  /**  Structured metadata obtained from the `billing data source`. Some of this data is required for use in the `receipt template`. Examples of data keys: `sealing date`, `install date`, `verification date`, `serial number`, `units of measurement`  */
  meta?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<User>;
  updatedBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['String']>;
};

export type BillingAccountMeterWhereInput = {
  AND?: Maybe<Array<Maybe<BillingAccountMeterWhereInput>>>;
  OR?: Maybe<Array<Maybe<BillingAccountMeterWhereInput>>>;
  dv?: Maybe<Scalars['Int']>;
  dv_not?: Maybe<Scalars['Int']>;
  dv_lt?: Maybe<Scalars['Int']>;
  dv_lte?: Maybe<Scalars['Int']>;
  dv_gt?: Maybe<Scalars['Int']>;
  dv_gte?: Maybe<Scalars['Int']>;
  dv_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  dv_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sender?: Maybe<Scalars['JSON']>;
  sender_not?: Maybe<Scalars['JSON']>;
  sender_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  sender_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  context?: Maybe<BillingIntegrationOrganizationContextWhereInput>;
  context_is_null?: Maybe<Scalars['Boolean']>;
  importId?: Maybe<Scalars['String']>;
  importId_not?: Maybe<Scalars['String']>;
  importId_contains?: Maybe<Scalars['String']>;
  importId_not_contains?: Maybe<Scalars['String']>;
  importId_starts_with?: Maybe<Scalars['String']>;
  importId_not_starts_with?: Maybe<Scalars['String']>;
  importId_ends_with?: Maybe<Scalars['String']>;
  importId_not_ends_with?: Maybe<Scalars['String']>;
  importId_i?: Maybe<Scalars['String']>;
  importId_not_i?: Maybe<Scalars['String']>;
  importId_contains_i?: Maybe<Scalars['String']>;
  importId_not_contains_i?: Maybe<Scalars['String']>;
  importId_starts_with_i?: Maybe<Scalars['String']>;
  importId_not_starts_with_i?: Maybe<Scalars['String']>;
  importId_ends_with_i?: Maybe<Scalars['String']>;
  importId_not_ends_with_i?: Maybe<Scalars['String']>;
  importId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  importId_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  property?: Maybe<BillingPropertyWhereInput>;
  property_is_null?: Maybe<Scalars['Boolean']>;
  account?: Maybe<BillingAccountWhereInput>;
  account_is_null?: Maybe<Scalars['Boolean']>;
  resource?: Maybe<BillingMeterResourceWhereInput>;
  resource_is_null?: Maybe<Scalars['Boolean']>;
  raw?: Maybe<Scalars['JSON']>;
  raw_not?: Maybe<Scalars['JSON']>;
  raw_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  raw_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  meta?: Maybe<Scalars['JSON']>;
  meta_not?: Maybe<Scalars['JSON']>;
  meta_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  meta_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  v?: Maybe<Scalars['Int']>;
  v_not?: Maybe<Scalars['Int']>;
  v_lt?: Maybe<Scalars['Int']>;
  v_lte?: Maybe<Scalars['Int']>;
  v_gt?: Maybe<Scalars['Int']>;
  v_gte?: Maybe<Scalars['Int']>;
  v_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  v_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  createdAt?: Maybe<Scalars['String']>;
  createdAt_not?: Maybe<Scalars['String']>;
  createdAt_lt?: Maybe<Scalars['String']>;
  createdAt_lte?: Maybe<Scalars['String']>;
  createdAt_gt?: Maybe<Scalars['String']>;
  createdAt_gte?: Maybe<Scalars['String']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedAt_not?: Maybe<Scalars['String']>;
  updatedAt_lt?: Maybe<Scalars['String']>;
  updatedAt_lte?: Maybe<Scalars['String']>;
  updatedAt_gt?: Maybe<Scalars['String']>;
  updatedAt_gte?: Maybe<Scalars['String']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy?: Maybe<UserWhereInput>;
  createdBy_is_null?: Maybe<Scalars['Boolean']>;
  updatedBy?: Maybe<UserWhereInput>;
  updatedBy_is_null?: Maybe<Scalars['Boolean']>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedAt_not?: Maybe<Scalars['String']>;
  deletedAt_lt?: Maybe<Scalars['String']>;
  deletedAt_lte?: Maybe<Scalars['String']>;
  deletedAt_gt?: Maybe<Scalars['String']>;
  deletedAt_gte?: Maybe<Scalars['String']>;
  deletedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  deletedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  newId?: Maybe<Scalars['String']>;
  newId_not?: Maybe<Scalars['String']>;
  newId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  newId_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type BillingAccountMeterWhereUniqueInput = {
  id: Scalars['ID'];
};

export enum SortBillingAccountMetersBy {
  DvAsc = 'dv_ASC',
  DvDesc = 'dv_DESC',
  ContextAsc = 'context_ASC',
  ContextDesc = 'context_DESC',
  ImportIdAsc = 'importId_ASC',
  ImportIdDesc = 'importId_DESC',
  PropertyAsc = 'property_ASC',
  PropertyDesc = 'property_DESC',
  AccountAsc = 'account_ASC',
  AccountDesc = 'account_DESC',
  ResourceAsc = 'resource_ASC',
  ResourceDesc = 'resource_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  VAsc = 'v_ASC',
  VDesc = 'v_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  CreatedByAsc = 'createdBy_ASC',
  CreatedByDesc = 'createdBy_DESC',
  UpdatedByAsc = 'updatedBy_ASC',
  UpdatedByDesc = 'updatedBy_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC'
}

export type BillingAccountMeterUpdateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  context?: Maybe<BillingIntegrationOrganizationContextRelateToOneInput>;
  importId?: Maybe<Scalars['String']>;
  property?: Maybe<BillingPropertyRelateToOneInput>;
  account?: Maybe<BillingAccountRelateToOneInput>;
  resource?: Maybe<BillingMeterResourceRelateToOneInput>;
  raw?: Maybe<Scalars['JSON']>;
  meta?: Maybe<Scalars['JSON']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserRelateToOneInput>;
  updatedBy?: Maybe<UserRelateToOneInput>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['String']>;
};

export type BillingAccountMetersUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<BillingAccountMeterUpdateInput>;
};

export type BillingAccountMeterCreateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  context?: Maybe<BillingIntegrationOrganizationContextRelateToOneInput>;
  importId?: Maybe<Scalars['String']>;
  property?: Maybe<BillingPropertyRelateToOneInput>;
  account?: Maybe<BillingAccountRelateToOneInput>;
  resource?: Maybe<BillingMeterResourceRelateToOneInput>;
  raw?: Maybe<Scalars['JSON']>;
  meta?: Maybe<Scalars['JSON']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserRelateToOneInput>;
  updatedBy?: Maybe<UserRelateToOneInput>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['String']>;
};

export type BillingAccountMetersCreateInput = {
  data?: Maybe<BillingAccountMeterCreateInput>;
};

export enum BillingAccountMeterReadingHistoryRecordHistoryActionType {
  C = 'c',
  U = 'u',
  D = 'd'
}

/**  A keystone list  */
export type BillingAccountMeterReadingHistoryRecord = {
  __typename?: 'BillingAccountMeterReadingHistoryRecord';
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the BillingAccountMeterReadingHistoryRecord List config, or
   *  2. As an alias to the field set on 'labelField' in the BillingAccountMeterReadingHistoryRecord List config, or
   *  3. As an alias to a 'name' field on the BillingAccountMeterReadingHistoryRecord List (if one exists), or
   *  4. As an alias to the 'id' field on the BillingAccountMeterReadingHistoryRecord List.
   */
  _label_?: Maybe<Scalars['String']>;
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  context?: Maybe<Scalars['String']>;
  importId?: Maybe<Scalars['String']>;
  property?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  meter?: Maybe<Scalars['String']>;
  period?: Maybe<Scalars['String']>;
  value1?: Maybe<Scalars['Int']>;
  value2?: Maybe<Scalars['Int']>;
  value3?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['String']>;
  raw?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['JSON']>;
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<BillingAccountMeterReadingHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type BillingAccountMeterReadingHistoryRecordWhereInput = {
  AND?: Maybe<Array<Maybe<BillingAccountMeterReadingHistoryRecordWhereInput>>>;
  OR?: Maybe<Array<Maybe<BillingAccountMeterReadingHistoryRecordWhereInput>>>;
  dv?: Maybe<Scalars['Int']>;
  dv_not?: Maybe<Scalars['Int']>;
  dv_lt?: Maybe<Scalars['Int']>;
  dv_lte?: Maybe<Scalars['Int']>;
  dv_gt?: Maybe<Scalars['Int']>;
  dv_gte?: Maybe<Scalars['Int']>;
  dv_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  dv_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sender?: Maybe<Scalars['JSON']>;
  sender_not?: Maybe<Scalars['JSON']>;
  sender_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  sender_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  context?: Maybe<Scalars['String']>;
  context_not?: Maybe<Scalars['String']>;
  context_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  context_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  importId?: Maybe<Scalars['String']>;
  importId_not?: Maybe<Scalars['String']>;
  importId_contains?: Maybe<Scalars['String']>;
  importId_not_contains?: Maybe<Scalars['String']>;
  importId_starts_with?: Maybe<Scalars['String']>;
  importId_not_starts_with?: Maybe<Scalars['String']>;
  importId_ends_with?: Maybe<Scalars['String']>;
  importId_not_ends_with?: Maybe<Scalars['String']>;
  importId_i?: Maybe<Scalars['String']>;
  importId_not_i?: Maybe<Scalars['String']>;
  importId_contains_i?: Maybe<Scalars['String']>;
  importId_not_contains_i?: Maybe<Scalars['String']>;
  importId_starts_with_i?: Maybe<Scalars['String']>;
  importId_not_starts_with_i?: Maybe<Scalars['String']>;
  importId_ends_with_i?: Maybe<Scalars['String']>;
  importId_not_ends_with_i?: Maybe<Scalars['String']>;
  importId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  importId_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  property?: Maybe<Scalars['String']>;
  property_not?: Maybe<Scalars['String']>;
  property_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  property_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  account_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  meter?: Maybe<Scalars['String']>;
  meter_not?: Maybe<Scalars['String']>;
  meter_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  meter_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  period?: Maybe<Scalars['String']>;
  period_not?: Maybe<Scalars['String']>;
  period_lt?: Maybe<Scalars['String']>;
  period_lte?: Maybe<Scalars['String']>;
  period_gt?: Maybe<Scalars['String']>;
  period_gte?: Maybe<Scalars['String']>;
  period_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  period_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  value1?: Maybe<Scalars['Int']>;
  value1_not?: Maybe<Scalars['Int']>;
  value1_lt?: Maybe<Scalars['Int']>;
  value1_lte?: Maybe<Scalars['Int']>;
  value1_gt?: Maybe<Scalars['Int']>;
  value1_gte?: Maybe<Scalars['Int']>;
  value1_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  value1_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  value2?: Maybe<Scalars['Int']>;
  value2_not?: Maybe<Scalars['Int']>;
  value2_lt?: Maybe<Scalars['Int']>;
  value2_lte?: Maybe<Scalars['Int']>;
  value2_gt?: Maybe<Scalars['Int']>;
  value2_gte?: Maybe<Scalars['Int']>;
  value2_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  value2_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  value3?: Maybe<Scalars['Int']>;
  value3_not?: Maybe<Scalars['Int']>;
  value3_lt?: Maybe<Scalars['Int']>;
  value3_lte?: Maybe<Scalars['Int']>;
  value3_gt?: Maybe<Scalars['Int']>;
  value3_gte?: Maybe<Scalars['Int']>;
  value3_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  value3_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  date?: Maybe<Scalars['String']>;
  date_not?: Maybe<Scalars['String']>;
  date_lt?: Maybe<Scalars['String']>;
  date_lte?: Maybe<Scalars['String']>;
  date_gt?: Maybe<Scalars['String']>;
  date_gte?: Maybe<Scalars['String']>;
  date_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  date_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  raw?: Maybe<Scalars['JSON']>;
  raw_not?: Maybe<Scalars['JSON']>;
  raw_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  raw_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  v?: Maybe<Scalars['Int']>;
  v_not?: Maybe<Scalars['Int']>;
  v_lt?: Maybe<Scalars['Int']>;
  v_lte?: Maybe<Scalars['Int']>;
  v_gt?: Maybe<Scalars['Int']>;
  v_gte?: Maybe<Scalars['Int']>;
  v_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  v_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  createdAt?: Maybe<Scalars['String']>;
  createdAt_not?: Maybe<Scalars['String']>;
  createdAt_lt?: Maybe<Scalars['String']>;
  createdAt_lte?: Maybe<Scalars['String']>;
  createdAt_gt?: Maybe<Scalars['String']>;
  createdAt_gte?: Maybe<Scalars['String']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedAt_not?: Maybe<Scalars['String']>;
  updatedAt_lt?: Maybe<Scalars['String']>;
  updatedAt_lte?: Maybe<Scalars['String']>;
  updatedAt_gt?: Maybe<Scalars['String']>;
  updatedAt_gte?: Maybe<Scalars['String']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy?: Maybe<Scalars['String']>;
  createdBy_not?: Maybe<Scalars['String']>;
  createdBy_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedBy?: Maybe<Scalars['String']>;
  updatedBy_not?: Maybe<Scalars['String']>;
  updatedBy_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedBy_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedAt_not?: Maybe<Scalars['String']>;
  deletedAt_lt?: Maybe<Scalars['String']>;
  deletedAt_lte?: Maybe<Scalars['String']>;
  deletedAt_gt?: Maybe<Scalars['String']>;
  deletedAt_gte?: Maybe<Scalars['String']>;
  deletedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  deletedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  newId?: Maybe<Scalars['JSON']>;
  newId_not?: Maybe<Scalars['JSON']>;
  newId_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  newId_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  history_date?: Maybe<Scalars['String']>;
  history_date_not?: Maybe<Scalars['String']>;
  history_date_lt?: Maybe<Scalars['String']>;
  history_date_lte?: Maybe<Scalars['String']>;
  history_date_gt?: Maybe<Scalars['String']>;
  history_date_gte?: Maybe<Scalars['String']>;
  history_date_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_date_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_action?: Maybe<BillingAccountMeterReadingHistoryRecordHistoryActionType>;
  history_action_not?: Maybe<BillingAccountMeterReadingHistoryRecordHistoryActionType>;
  history_action_in?: Maybe<Array<Maybe<BillingAccountMeterReadingHistoryRecordHistoryActionType>>>;
  history_action_not_in?: Maybe<Array<Maybe<BillingAccountMeterReadingHistoryRecordHistoryActionType>>>;
  history_id?: Maybe<Scalars['String']>;
  history_id_not?: Maybe<Scalars['String']>;
  history_id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_id_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type BillingAccountMeterReadingHistoryRecordWhereUniqueInput = {
  id: Scalars['ID'];
};

export enum SortBillingAccountMeterReadingHistoryRecordsBy {
  DvAsc = 'dv_ASC',
  DvDesc = 'dv_DESC',
  ImportIdAsc = 'importId_ASC',
  ImportIdDesc = 'importId_DESC',
  PeriodAsc = 'period_ASC',
  PeriodDesc = 'period_DESC',
  Value1Asc = 'value1_ASC',
  Value1Desc = 'value1_DESC',
  Value2Asc = 'value2_ASC',
  Value2Desc = 'value2_DESC',
  Value3Asc = 'value3_ASC',
  Value3Desc = 'value3_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  VAsc = 'v_ASC',
  VDesc = 'v_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  HistoryDateAsc = 'history_date_ASC',
  HistoryDateDesc = 'history_date_DESC',
  HistoryActionAsc = 'history_action_ASC',
  HistoryActionDesc = 'history_action_DESC'
}

export type BillingAccountMeterReadingHistoryRecordUpdateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  context?: Maybe<Scalars['String']>;
  importId?: Maybe<Scalars['String']>;
  property?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  meter?: Maybe<Scalars['String']>;
  period?: Maybe<Scalars['String']>;
  value1?: Maybe<Scalars['Int']>;
  value2?: Maybe<Scalars['Int']>;
  value3?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['String']>;
  raw?: Maybe<Scalars['JSON']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['JSON']>;
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<BillingAccountMeterReadingHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type BillingAccountMeterReadingHistoryRecordsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<BillingAccountMeterReadingHistoryRecordUpdateInput>;
};

export type BillingAccountMeterReadingHistoryRecordCreateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  context?: Maybe<Scalars['String']>;
  importId?: Maybe<Scalars['String']>;
  property?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  meter?: Maybe<Scalars['String']>;
  period?: Maybe<Scalars['String']>;
  value1?: Maybe<Scalars['Int']>;
  value2?: Maybe<Scalars['Int']>;
  value3?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['String']>;
  raw?: Maybe<Scalars['JSON']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['JSON']>;
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<BillingAccountMeterReadingHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type BillingAccountMeterReadingHistoryRecordsCreateInput = {
  data?: Maybe<BillingAccountMeterReadingHistoryRecordCreateInput>;
};

export type BillingAccountMeterRelateToOneInput = {
  create?: Maybe<BillingAccountMeterCreateInput>;
  connect?: Maybe<BillingAccountMeterWhereUniqueInput>;
  disconnect?: Maybe<BillingAccountMeterWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

/**  Meter reading. In a multi-tariff meter case, we store all values in one object  */
export type BillingAccountMeterReading = {
  __typename?: 'BillingAccountMeterReading';
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the BillingAccountMeterReading List config, or
   *  2. As an alias to the field set on 'labelField' in the BillingAccountMeterReading List config, or
   *  3. As an alias to a 'name' field on the BillingAccountMeterReading List (if one exists), or
   *  4. As an alias to the 'id' field on the BillingAccountMeterReading List.
   */
  _label_?: Maybe<Scalars['String']>;
  /**  Data structure Version  */
  dv?: Maybe<Scalars['Int']>;
  /**  Client-side devise identification used for the anti-fraud detection. Example `{ dv: '1', fingerprint: 'VaxSw2aXZa'}`. Where the `fingerprint` should be the same for the same devices and it's not linked to the user ID. It's the device ID like browser / mobile application / remote system  */
  sender?: Maybe<Scalars['JSON']>;
  /**  Integration context  */
  context?: Maybe<BillingIntegrationOrganizationContext>;
  /**  `billing data source` local object ID. Used only for the internal needs of the `integration component`  */
  importId?: Maybe<Scalars['String']>;
  /**  Billing property  */
  property?: Maybe<BillingProperty>;
  /**  Billing account  */
  account?: Maybe<BillingAccount>;
  /**  Billing account meter  */
  meter?: Maybe<BillingAccountMeter>;
  /**  Period date (01.2020, 02.2020, ...)  */
  period?: Maybe<Scalars['String']>;
  /**  Meter reading value of tariff 1  */
  value1?: Maybe<Scalars['Int']>;
  /**  Meter reading value of tariff 2  */
  value2?: Maybe<Scalars['Int']>;
  /**  Meter reading value of tariff 3  */
  value3?: Maybe<Scalars['Int']>;
  /**  Date of reading  */
  date?: Maybe<Scalars['String']>;
  /**  Raw non-structured data obtained from the `billing data source`. Used only for the internal needs of the `integration component`.  */
  raw?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<User>;
  updatedBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['String']>;
};

export type BillingAccountMeterReadingWhereInput = {
  AND?: Maybe<Array<Maybe<BillingAccountMeterReadingWhereInput>>>;
  OR?: Maybe<Array<Maybe<BillingAccountMeterReadingWhereInput>>>;
  dv?: Maybe<Scalars['Int']>;
  dv_not?: Maybe<Scalars['Int']>;
  dv_lt?: Maybe<Scalars['Int']>;
  dv_lte?: Maybe<Scalars['Int']>;
  dv_gt?: Maybe<Scalars['Int']>;
  dv_gte?: Maybe<Scalars['Int']>;
  dv_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  dv_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sender?: Maybe<Scalars['JSON']>;
  sender_not?: Maybe<Scalars['JSON']>;
  sender_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  sender_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  context?: Maybe<BillingIntegrationOrganizationContextWhereInput>;
  context_is_null?: Maybe<Scalars['Boolean']>;
  importId?: Maybe<Scalars['String']>;
  importId_not?: Maybe<Scalars['String']>;
  importId_contains?: Maybe<Scalars['String']>;
  importId_not_contains?: Maybe<Scalars['String']>;
  importId_starts_with?: Maybe<Scalars['String']>;
  importId_not_starts_with?: Maybe<Scalars['String']>;
  importId_ends_with?: Maybe<Scalars['String']>;
  importId_not_ends_with?: Maybe<Scalars['String']>;
  importId_i?: Maybe<Scalars['String']>;
  importId_not_i?: Maybe<Scalars['String']>;
  importId_contains_i?: Maybe<Scalars['String']>;
  importId_not_contains_i?: Maybe<Scalars['String']>;
  importId_starts_with_i?: Maybe<Scalars['String']>;
  importId_not_starts_with_i?: Maybe<Scalars['String']>;
  importId_ends_with_i?: Maybe<Scalars['String']>;
  importId_not_ends_with_i?: Maybe<Scalars['String']>;
  importId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  importId_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  property?: Maybe<BillingPropertyWhereInput>;
  property_is_null?: Maybe<Scalars['Boolean']>;
  account?: Maybe<BillingAccountWhereInput>;
  account_is_null?: Maybe<Scalars['Boolean']>;
  meter?: Maybe<BillingAccountMeterWhereInput>;
  meter_is_null?: Maybe<Scalars['Boolean']>;
  period?: Maybe<Scalars['String']>;
  period_not?: Maybe<Scalars['String']>;
  period_lt?: Maybe<Scalars['String']>;
  period_lte?: Maybe<Scalars['String']>;
  period_gt?: Maybe<Scalars['String']>;
  period_gte?: Maybe<Scalars['String']>;
  period_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  period_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  value1?: Maybe<Scalars['Int']>;
  value1_not?: Maybe<Scalars['Int']>;
  value1_lt?: Maybe<Scalars['Int']>;
  value1_lte?: Maybe<Scalars['Int']>;
  value1_gt?: Maybe<Scalars['Int']>;
  value1_gte?: Maybe<Scalars['Int']>;
  value1_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  value1_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  value2?: Maybe<Scalars['Int']>;
  value2_not?: Maybe<Scalars['Int']>;
  value2_lt?: Maybe<Scalars['Int']>;
  value2_lte?: Maybe<Scalars['Int']>;
  value2_gt?: Maybe<Scalars['Int']>;
  value2_gte?: Maybe<Scalars['Int']>;
  value2_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  value2_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  value3?: Maybe<Scalars['Int']>;
  value3_not?: Maybe<Scalars['Int']>;
  value3_lt?: Maybe<Scalars['Int']>;
  value3_lte?: Maybe<Scalars['Int']>;
  value3_gt?: Maybe<Scalars['Int']>;
  value3_gte?: Maybe<Scalars['Int']>;
  value3_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  value3_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  date?: Maybe<Scalars['String']>;
  date_not?: Maybe<Scalars['String']>;
  date_lt?: Maybe<Scalars['String']>;
  date_lte?: Maybe<Scalars['String']>;
  date_gt?: Maybe<Scalars['String']>;
  date_gte?: Maybe<Scalars['String']>;
  date_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  date_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  raw?: Maybe<Scalars['JSON']>;
  raw_not?: Maybe<Scalars['JSON']>;
  raw_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  raw_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  v?: Maybe<Scalars['Int']>;
  v_not?: Maybe<Scalars['Int']>;
  v_lt?: Maybe<Scalars['Int']>;
  v_lte?: Maybe<Scalars['Int']>;
  v_gt?: Maybe<Scalars['Int']>;
  v_gte?: Maybe<Scalars['Int']>;
  v_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  v_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  createdAt?: Maybe<Scalars['String']>;
  createdAt_not?: Maybe<Scalars['String']>;
  createdAt_lt?: Maybe<Scalars['String']>;
  createdAt_lte?: Maybe<Scalars['String']>;
  createdAt_gt?: Maybe<Scalars['String']>;
  createdAt_gte?: Maybe<Scalars['String']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedAt_not?: Maybe<Scalars['String']>;
  updatedAt_lt?: Maybe<Scalars['String']>;
  updatedAt_lte?: Maybe<Scalars['String']>;
  updatedAt_gt?: Maybe<Scalars['String']>;
  updatedAt_gte?: Maybe<Scalars['String']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy?: Maybe<UserWhereInput>;
  createdBy_is_null?: Maybe<Scalars['Boolean']>;
  updatedBy?: Maybe<UserWhereInput>;
  updatedBy_is_null?: Maybe<Scalars['Boolean']>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedAt_not?: Maybe<Scalars['String']>;
  deletedAt_lt?: Maybe<Scalars['String']>;
  deletedAt_lte?: Maybe<Scalars['String']>;
  deletedAt_gt?: Maybe<Scalars['String']>;
  deletedAt_gte?: Maybe<Scalars['String']>;
  deletedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  deletedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  newId?: Maybe<Scalars['String']>;
  newId_not?: Maybe<Scalars['String']>;
  newId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  newId_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type BillingAccountMeterReadingWhereUniqueInput = {
  id: Scalars['ID'];
};

export enum SortBillingAccountMeterReadingsBy {
  DvAsc = 'dv_ASC',
  DvDesc = 'dv_DESC',
  ContextAsc = 'context_ASC',
  ContextDesc = 'context_DESC',
  ImportIdAsc = 'importId_ASC',
  ImportIdDesc = 'importId_DESC',
  PropertyAsc = 'property_ASC',
  PropertyDesc = 'property_DESC',
  AccountAsc = 'account_ASC',
  AccountDesc = 'account_DESC',
  MeterAsc = 'meter_ASC',
  MeterDesc = 'meter_DESC',
  PeriodAsc = 'period_ASC',
  PeriodDesc = 'period_DESC',
  Value1Asc = 'value1_ASC',
  Value1Desc = 'value1_DESC',
  Value2Asc = 'value2_ASC',
  Value2Desc = 'value2_DESC',
  Value3Asc = 'value3_ASC',
  Value3Desc = 'value3_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  VAsc = 'v_ASC',
  VDesc = 'v_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  CreatedByAsc = 'createdBy_ASC',
  CreatedByDesc = 'createdBy_DESC',
  UpdatedByAsc = 'updatedBy_ASC',
  UpdatedByDesc = 'updatedBy_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC'
}

export type BillingAccountMeterReadingUpdateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  context?: Maybe<BillingIntegrationOrganizationContextRelateToOneInput>;
  importId?: Maybe<Scalars['String']>;
  property?: Maybe<BillingPropertyRelateToOneInput>;
  account?: Maybe<BillingAccountRelateToOneInput>;
  meter?: Maybe<BillingAccountMeterRelateToOneInput>;
  period?: Maybe<Scalars['String']>;
  value1?: Maybe<Scalars['Int']>;
  value2?: Maybe<Scalars['Int']>;
  value3?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['String']>;
  raw?: Maybe<Scalars['JSON']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserRelateToOneInput>;
  updatedBy?: Maybe<UserRelateToOneInput>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['String']>;
};

export type BillingAccountMeterReadingsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<BillingAccountMeterReadingUpdateInput>;
};

export type BillingAccountMeterReadingCreateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  context?: Maybe<BillingIntegrationOrganizationContextRelateToOneInput>;
  importId?: Maybe<Scalars['String']>;
  property?: Maybe<BillingPropertyRelateToOneInput>;
  account?: Maybe<BillingAccountRelateToOneInput>;
  meter?: Maybe<BillingAccountMeterRelateToOneInput>;
  period?: Maybe<Scalars['String']>;
  value1?: Maybe<Scalars['Int']>;
  value2?: Maybe<Scalars['Int']>;
  value3?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['String']>;
  raw?: Maybe<Scalars['JSON']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserRelateToOneInput>;
  updatedBy?: Maybe<UserRelateToOneInput>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['String']>;
};

export type BillingAccountMeterReadingsCreateInput = {
  data?: Maybe<BillingAccountMeterReadingCreateInput>;
};

export enum BillingReceiptHistoryRecordHistoryActionType {
  C = 'c',
  U = 'u',
  D = 'd'
}

/**  A keystone list  */
export type BillingReceiptHistoryRecord = {
  __typename?: 'BillingReceiptHistoryRecord';
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the BillingReceiptHistoryRecord List config, or
   *  2. As an alias to the field set on 'labelField' in the BillingReceiptHistoryRecord List config, or
   *  3. As an alias to a 'name' field on the BillingReceiptHistoryRecord List (if one exists), or
   *  4. As an alias to the 'id' field on the BillingReceiptHistoryRecord List.
   */
  _label_?: Maybe<Scalars['String']>;
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  context?: Maybe<Scalars['String']>;
  importId?: Maybe<Scalars['String']>;
  property?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  period?: Maybe<Scalars['String']>;
  raw?: Maybe<Scalars['JSON']>;
  toPay?: Maybe<Scalars['String']>;
  services?: Maybe<Scalars['JSON']>;
  meta?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['JSON']>;
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<BillingReceiptHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type BillingReceiptHistoryRecordWhereInput = {
  AND?: Maybe<Array<Maybe<BillingReceiptHistoryRecordWhereInput>>>;
  OR?: Maybe<Array<Maybe<BillingReceiptHistoryRecordWhereInput>>>;
  dv?: Maybe<Scalars['Int']>;
  dv_not?: Maybe<Scalars['Int']>;
  dv_lt?: Maybe<Scalars['Int']>;
  dv_lte?: Maybe<Scalars['Int']>;
  dv_gt?: Maybe<Scalars['Int']>;
  dv_gte?: Maybe<Scalars['Int']>;
  dv_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  dv_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sender?: Maybe<Scalars['JSON']>;
  sender_not?: Maybe<Scalars['JSON']>;
  sender_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  sender_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  context?: Maybe<Scalars['String']>;
  context_not?: Maybe<Scalars['String']>;
  context_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  context_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  importId?: Maybe<Scalars['String']>;
  importId_not?: Maybe<Scalars['String']>;
  importId_contains?: Maybe<Scalars['String']>;
  importId_not_contains?: Maybe<Scalars['String']>;
  importId_starts_with?: Maybe<Scalars['String']>;
  importId_not_starts_with?: Maybe<Scalars['String']>;
  importId_ends_with?: Maybe<Scalars['String']>;
  importId_not_ends_with?: Maybe<Scalars['String']>;
  importId_i?: Maybe<Scalars['String']>;
  importId_not_i?: Maybe<Scalars['String']>;
  importId_contains_i?: Maybe<Scalars['String']>;
  importId_not_contains_i?: Maybe<Scalars['String']>;
  importId_starts_with_i?: Maybe<Scalars['String']>;
  importId_not_starts_with_i?: Maybe<Scalars['String']>;
  importId_ends_with_i?: Maybe<Scalars['String']>;
  importId_not_ends_with_i?: Maybe<Scalars['String']>;
  importId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  importId_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  property?: Maybe<Scalars['String']>;
  property_not?: Maybe<Scalars['String']>;
  property_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  property_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  account?: Maybe<Scalars['String']>;
  account_not?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  account_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  period?: Maybe<Scalars['String']>;
  period_not?: Maybe<Scalars['String']>;
  period_lt?: Maybe<Scalars['String']>;
  period_lte?: Maybe<Scalars['String']>;
  period_gt?: Maybe<Scalars['String']>;
  period_gte?: Maybe<Scalars['String']>;
  period_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  period_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  raw?: Maybe<Scalars['JSON']>;
  raw_not?: Maybe<Scalars['JSON']>;
  raw_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  raw_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  toPay?: Maybe<Scalars['String']>;
  toPay_not?: Maybe<Scalars['String']>;
  toPay_contains?: Maybe<Scalars['String']>;
  toPay_not_contains?: Maybe<Scalars['String']>;
  toPay_starts_with?: Maybe<Scalars['String']>;
  toPay_not_starts_with?: Maybe<Scalars['String']>;
  toPay_ends_with?: Maybe<Scalars['String']>;
  toPay_not_ends_with?: Maybe<Scalars['String']>;
  toPay_i?: Maybe<Scalars['String']>;
  toPay_not_i?: Maybe<Scalars['String']>;
  toPay_contains_i?: Maybe<Scalars['String']>;
  toPay_not_contains_i?: Maybe<Scalars['String']>;
  toPay_starts_with_i?: Maybe<Scalars['String']>;
  toPay_not_starts_with_i?: Maybe<Scalars['String']>;
  toPay_ends_with_i?: Maybe<Scalars['String']>;
  toPay_not_ends_with_i?: Maybe<Scalars['String']>;
  toPay_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  toPay_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  services?: Maybe<Scalars['JSON']>;
  services_not?: Maybe<Scalars['JSON']>;
  services_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  services_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  meta?: Maybe<Scalars['JSON']>;
  meta_not?: Maybe<Scalars['JSON']>;
  meta_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  meta_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  v?: Maybe<Scalars['Int']>;
  v_not?: Maybe<Scalars['Int']>;
  v_lt?: Maybe<Scalars['Int']>;
  v_lte?: Maybe<Scalars['Int']>;
  v_gt?: Maybe<Scalars['Int']>;
  v_gte?: Maybe<Scalars['Int']>;
  v_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  v_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  createdAt?: Maybe<Scalars['String']>;
  createdAt_not?: Maybe<Scalars['String']>;
  createdAt_lt?: Maybe<Scalars['String']>;
  createdAt_lte?: Maybe<Scalars['String']>;
  createdAt_gt?: Maybe<Scalars['String']>;
  createdAt_gte?: Maybe<Scalars['String']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedAt_not?: Maybe<Scalars['String']>;
  updatedAt_lt?: Maybe<Scalars['String']>;
  updatedAt_lte?: Maybe<Scalars['String']>;
  updatedAt_gt?: Maybe<Scalars['String']>;
  updatedAt_gte?: Maybe<Scalars['String']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy?: Maybe<Scalars['String']>;
  createdBy_not?: Maybe<Scalars['String']>;
  createdBy_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedBy?: Maybe<Scalars['String']>;
  updatedBy_not?: Maybe<Scalars['String']>;
  updatedBy_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedBy_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedAt_not?: Maybe<Scalars['String']>;
  deletedAt_lt?: Maybe<Scalars['String']>;
  deletedAt_lte?: Maybe<Scalars['String']>;
  deletedAt_gt?: Maybe<Scalars['String']>;
  deletedAt_gte?: Maybe<Scalars['String']>;
  deletedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  deletedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  newId?: Maybe<Scalars['JSON']>;
  newId_not?: Maybe<Scalars['JSON']>;
  newId_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  newId_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  history_date?: Maybe<Scalars['String']>;
  history_date_not?: Maybe<Scalars['String']>;
  history_date_lt?: Maybe<Scalars['String']>;
  history_date_lte?: Maybe<Scalars['String']>;
  history_date_gt?: Maybe<Scalars['String']>;
  history_date_gte?: Maybe<Scalars['String']>;
  history_date_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_date_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_action?: Maybe<BillingReceiptHistoryRecordHistoryActionType>;
  history_action_not?: Maybe<BillingReceiptHistoryRecordHistoryActionType>;
  history_action_in?: Maybe<Array<Maybe<BillingReceiptHistoryRecordHistoryActionType>>>;
  history_action_not_in?: Maybe<Array<Maybe<BillingReceiptHistoryRecordHistoryActionType>>>;
  history_id?: Maybe<Scalars['String']>;
  history_id_not?: Maybe<Scalars['String']>;
  history_id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_id_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type BillingReceiptHistoryRecordWhereUniqueInput = {
  id: Scalars['ID'];
};

export enum SortBillingReceiptHistoryRecordsBy {
  DvAsc = 'dv_ASC',
  DvDesc = 'dv_DESC',
  ImportIdAsc = 'importId_ASC',
  ImportIdDesc = 'importId_DESC',
  PeriodAsc = 'period_ASC',
  PeriodDesc = 'period_DESC',
  ToPayAsc = 'toPay_ASC',
  ToPayDesc = 'toPay_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  VAsc = 'v_ASC',
  VDesc = 'v_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  HistoryDateAsc = 'history_date_ASC',
  HistoryDateDesc = 'history_date_DESC',
  HistoryActionAsc = 'history_action_ASC',
  HistoryActionDesc = 'history_action_DESC'
}

export type BillingReceiptHistoryRecordUpdateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  context?: Maybe<Scalars['String']>;
  importId?: Maybe<Scalars['String']>;
  property?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  period?: Maybe<Scalars['String']>;
  raw?: Maybe<Scalars['JSON']>;
  toPay?: Maybe<Scalars['String']>;
  services?: Maybe<Scalars['JSON']>;
  meta?: Maybe<Scalars['JSON']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['JSON']>;
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<BillingReceiptHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type BillingReceiptHistoryRecordsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<BillingReceiptHistoryRecordUpdateInput>;
};

export type BillingReceiptHistoryRecordCreateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  context?: Maybe<Scalars['String']>;
  importId?: Maybe<Scalars['String']>;
  property?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  period?: Maybe<Scalars['String']>;
  raw?: Maybe<Scalars['JSON']>;
  toPay?: Maybe<Scalars['String']>;
  services?: Maybe<Scalars['JSON']>;
  meta?: Maybe<Scalars['JSON']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['JSON']>;
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<BillingReceiptHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type BillingReceiptHistoryRecordsCreateInput = {
  data?: Maybe<BillingReceiptHistoryRecordCreateInput>;
};

/**  A keystone list  */
export type BillingReceipt = {
  __typename?: 'BillingReceipt';
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the BillingReceipt List config, or
   *  2. As an alias to the field set on 'labelField' in the BillingReceipt List config, or
   *  3. As an alias to a 'name' field on the BillingReceipt List (if one exists), or
   *  4. As an alias to the 'id' field on the BillingReceipt List.
   */
  _label_?: Maybe<Scalars['String']>;
  /**  Data structure Version  */
  dv?: Maybe<Scalars['Int']>;
  /**  Client-side devise identification used for the anti-fraud detection. Example `{ dv: '1', fingerprint: 'VaxSw2aXZa'}`. Where the `fingerprint` should be the same for the same devices and it's not linked to the user ID. It's the device ID like browser / mobile application / remote system  */
  sender?: Maybe<Scalars['JSON']>;
  /**  Integration context  */
  context?: Maybe<BillingIntegrationOrganizationContext>;
  /**  `billing data source` local object ID. Used only for the internal needs of the `integration component`  */
  importId?: Maybe<Scalars['String']>;
  /**  Billing property  */
  property?: Maybe<BillingProperty>;
  /**  Billing account  */
  account?: Maybe<BillingAccount>;
  /**  Period date (01.2020, 02.2020, ...)  */
  period?: Maybe<Scalars['String']>;
  /**  Raw non-structured data obtained from the `billing data source`. Used only for the internal needs of the `integration component`.  */
  raw?: Maybe<Scalars['JSON']>;
  /**  Total sum to pay. The sum of all services  */
  toPay?: Maybe<Scalars['String']>;
  /**  Structured items in the receipt obtained from the `billing data source`. Amount of payment is required for use in the `receipt template`. Structure example: {"Maintenance and repair": {"name": "maintenance-and-repair", "payment": "1129.17", "currency": "RUB", "formula": "payment = tariff * volume + recalculation + privilege + penalty", "tariff": "19.95", "volume": "56.6", "isByMeter": true, "recalculation": "0.0", "privilege": "0.0", "penalty": "0"}, ...}  */
  services?: Maybe<Scalars['JSON']>;
  /**  Structured metadata obtained from the `billing data source`. Some of this data is required for use in the `receipt template`. Examples of data keys: `payer name`, `full address`, `living space`, `non-living space`, `registered residents`, `living residents`, `news message`  */
  meta?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<User>;
  updatedBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['String']>;
};

export type BillingReceiptWhereInput = {
  AND?: Maybe<Array<Maybe<BillingReceiptWhereInput>>>;
  OR?: Maybe<Array<Maybe<BillingReceiptWhereInput>>>;
  dv?: Maybe<Scalars['Int']>;
  dv_not?: Maybe<Scalars['Int']>;
  dv_lt?: Maybe<Scalars['Int']>;
  dv_lte?: Maybe<Scalars['Int']>;
  dv_gt?: Maybe<Scalars['Int']>;
  dv_gte?: Maybe<Scalars['Int']>;
  dv_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  dv_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sender?: Maybe<Scalars['JSON']>;
  sender_not?: Maybe<Scalars['JSON']>;
  sender_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  sender_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  context?: Maybe<BillingIntegrationOrganizationContextWhereInput>;
  context_is_null?: Maybe<Scalars['Boolean']>;
  importId?: Maybe<Scalars['String']>;
  importId_not?: Maybe<Scalars['String']>;
  importId_contains?: Maybe<Scalars['String']>;
  importId_not_contains?: Maybe<Scalars['String']>;
  importId_starts_with?: Maybe<Scalars['String']>;
  importId_not_starts_with?: Maybe<Scalars['String']>;
  importId_ends_with?: Maybe<Scalars['String']>;
  importId_not_ends_with?: Maybe<Scalars['String']>;
  importId_i?: Maybe<Scalars['String']>;
  importId_not_i?: Maybe<Scalars['String']>;
  importId_contains_i?: Maybe<Scalars['String']>;
  importId_not_contains_i?: Maybe<Scalars['String']>;
  importId_starts_with_i?: Maybe<Scalars['String']>;
  importId_not_starts_with_i?: Maybe<Scalars['String']>;
  importId_ends_with_i?: Maybe<Scalars['String']>;
  importId_not_ends_with_i?: Maybe<Scalars['String']>;
  importId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  importId_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  property?: Maybe<BillingPropertyWhereInput>;
  property_is_null?: Maybe<Scalars['Boolean']>;
  account?: Maybe<BillingAccountWhereInput>;
  account_is_null?: Maybe<Scalars['Boolean']>;
  period?: Maybe<Scalars['String']>;
  period_not?: Maybe<Scalars['String']>;
  period_lt?: Maybe<Scalars['String']>;
  period_lte?: Maybe<Scalars['String']>;
  period_gt?: Maybe<Scalars['String']>;
  period_gte?: Maybe<Scalars['String']>;
  period_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  period_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  raw?: Maybe<Scalars['JSON']>;
  raw_not?: Maybe<Scalars['JSON']>;
  raw_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  raw_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  toPay?: Maybe<Scalars['String']>;
  toPay_not?: Maybe<Scalars['String']>;
  toPay_contains?: Maybe<Scalars['String']>;
  toPay_not_contains?: Maybe<Scalars['String']>;
  toPay_starts_with?: Maybe<Scalars['String']>;
  toPay_not_starts_with?: Maybe<Scalars['String']>;
  toPay_ends_with?: Maybe<Scalars['String']>;
  toPay_not_ends_with?: Maybe<Scalars['String']>;
  toPay_i?: Maybe<Scalars['String']>;
  toPay_not_i?: Maybe<Scalars['String']>;
  toPay_contains_i?: Maybe<Scalars['String']>;
  toPay_not_contains_i?: Maybe<Scalars['String']>;
  toPay_starts_with_i?: Maybe<Scalars['String']>;
  toPay_not_starts_with_i?: Maybe<Scalars['String']>;
  toPay_ends_with_i?: Maybe<Scalars['String']>;
  toPay_not_ends_with_i?: Maybe<Scalars['String']>;
  toPay_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  toPay_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  services?: Maybe<Scalars['JSON']>;
  services_not?: Maybe<Scalars['JSON']>;
  services_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  services_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  meta?: Maybe<Scalars['JSON']>;
  meta_not?: Maybe<Scalars['JSON']>;
  meta_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  meta_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  v?: Maybe<Scalars['Int']>;
  v_not?: Maybe<Scalars['Int']>;
  v_lt?: Maybe<Scalars['Int']>;
  v_lte?: Maybe<Scalars['Int']>;
  v_gt?: Maybe<Scalars['Int']>;
  v_gte?: Maybe<Scalars['Int']>;
  v_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  v_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  createdAt?: Maybe<Scalars['String']>;
  createdAt_not?: Maybe<Scalars['String']>;
  createdAt_lt?: Maybe<Scalars['String']>;
  createdAt_lte?: Maybe<Scalars['String']>;
  createdAt_gt?: Maybe<Scalars['String']>;
  createdAt_gte?: Maybe<Scalars['String']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedAt_not?: Maybe<Scalars['String']>;
  updatedAt_lt?: Maybe<Scalars['String']>;
  updatedAt_lte?: Maybe<Scalars['String']>;
  updatedAt_gt?: Maybe<Scalars['String']>;
  updatedAt_gte?: Maybe<Scalars['String']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy?: Maybe<UserWhereInput>;
  createdBy_is_null?: Maybe<Scalars['Boolean']>;
  updatedBy?: Maybe<UserWhereInput>;
  updatedBy_is_null?: Maybe<Scalars['Boolean']>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedAt_not?: Maybe<Scalars['String']>;
  deletedAt_lt?: Maybe<Scalars['String']>;
  deletedAt_lte?: Maybe<Scalars['String']>;
  deletedAt_gt?: Maybe<Scalars['String']>;
  deletedAt_gte?: Maybe<Scalars['String']>;
  deletedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  deletedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  newId?: Maybe<Scalars['String']>;
  newId_not?: Maybe<Scalars['String']>;
  newId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  newId_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type BillingReceiptWhereUniqueInput = {
  id: Scalars['ID'];
};

export enum SortBillingReceiptsBy {
  DvAsc = 'dv_ASC',
  DvDesc = 'dv_DESC',
  ContextAsc = 'context_ASC',
  ContextDesc = 'context_DESC',
  ImportIdAsc = 'importId_ASC',
  ImportIdDesc = 'importId_DESC',
  PropertyAsc = 'property_ASC',
  PropertyDesc = 'property_DESC',
  AccountAsc = 'account_ASC',
  AccountDesc = 'account_DESC',
  PeriodAsc = 'period_ASC',
  PeriodDesc = 'period_DESC',
  ToPayAsc = 'toPay_ASC',
  ToPayDesc = 'toPay_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  VAsc = 'v_ASC',
  VDesc = 'v_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  CreatedByAsc = 'createdBy_ASC',
  CreatedByDesc = 'createdBy_DESC',
  UpdatedByAsc = 'updatedBy_ASC',
  UpdatedByDesc = 'updatedBy_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC'
}

export type BillingReceiptUpdateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  context?: Maybe<BillingIntegrationOrganizationContextRelateToOneInput>;
  importId?: Maybe<Scalars['String']>;
  property?: Maybe<BillingPropertyRelateToOneInput>;
  account?: Maybe<BillingAccountRelateToOneInput>;
  period?: Maybe<Scalars['String']>;
  raw?: Maybe<Scalars['JSON']>;
  toPay?: Maybe<Scalars['String']>;
  services?: Maybe<Scalars['JSON']>;
  meta?: Maybe<Scalars['JSON']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserRelateToOneInput>;
  updatedBy?: Maybe<UserRelateToOneInput>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['String']>;
};

export type BillingReceiptsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<BillingReceiptUpdateInput>;
};

export type BillingReceiptCreateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  context?: Maybe<BillingIntegrationOrganizationContextRelateToOneInput>;
  importId?: Maybe<Scalars['String']>;
  property?: Maybe<BillingPropertyRelateToOneInput>;
  account?: Maybe<BillingAccountRelateToOneInput>;
  period?: Maybe<Scalars['String']>;
  raw?: Maybe<Scalars['JSON']>;
  toPay?: Maybe<Scalars['String']>;
  services?: Maybe<Scalars['JSON']>;
  meta?: Maybe<Scalars['JSON']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserRelateToOneInput>;
  updatedBy?: Maybe<UserRelateToOneInput>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['String']>;
};

export type BillingReceiptsCreateInput = {
  data?: Maybe<BillingReceiptCreateInput>;
};

export enum TicketHistoryRecordHistoryActionType {
  C = 'c',
  U = 'u',
  D = 'd'
}

/**  A keystone list  */
export type TicketHistoryRecord = {
  __typename?: 'TicketHistoryRecord';
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the TicketHistoryRecord List config, or
   *  2. As an alias to the field set on 'labelField' in the TicketHistoryRecord List config, or
   *  3. As an alias to a 'name' field on the TicketHistoryRecord List (if one exists), or
   *  4. As an alias to the 'id' field on the TicketHistoryRecord List.
   */
  _label_?: Maybe<Scalars['String']>;
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  organization?: Maybe<Scalars['String']>;
  statusReopenedCounter?: Maybe<Scalars['Int']>;
  statusReason?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['JSON']>;
  client?: Maybe<Scalars['String']>;
  clientName?: Maybe<Scalars['String']>;
  clientEmail?: Maybe<Scalars['String']>;
  clientPhone?: Maybe<Scalars['String']>;
  operator?: Maybe<Scalars['String']>;
  assignee?: Maybe<Scalars['String']>;
  executor?: Maybe<Scalars['String']>;
  classifier?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  related?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['JSON']>;
  property?: Maybe<Scalars['String']>;
  entranceName?: Maybe<Scalars['String']>;
  floorName?: Maybe<Scalars['String']>;
  unitName?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  sourceMeta?: Maybe<Scalars['JSON']>;
  statusUpdatedAt?: Maybe<Scalars['String']>;
  isPaid?: Maybe<Scalars['Boolean']>;
  isEmergency?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['JSON']>;
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<TicketHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type TicketHistoryRecordWhereInput = {
  AND?: Maybe<Array<Maybe<TicketHistoryRecordWhereInput>>>;
  OR?: Maybe<Array<Maybe<TicketHistoryRecordWhereInput>>>;
  dv?: Maybe<Scalars['Int']>;
  dv_not?: Maybe<Scalars['Int']>;
  dv_lt?: Maybe<Scalars['Int']>;
  dv_lte?: Maybe<Scalars['Int']>;
  dv_gt?: Maybe<Scalars['Int']>;
  dv_gte?: Maybe<Scalars['Int']>;
  dv_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  dv_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sender?: Maybe<Scalars['JSON']>;
  sender_not?: Maybe<Scalars['JSON']>;
  sender_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  sender_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  organization?: Maybe<Scalars['String']>;
  organization_not?: Maybe<Scalars['String']>;
  organization_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  organization_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  statusReopenedCounter?: Maybe<Scalars['Int']>;
  statusReopenedCounter_not?: Maybe<Scalars['Int']>;
  statusReopenedCounter_lt?: Maybe<Scalars['Int']>;
  statusReopenedCounter_lte?: Maybe<Scalars['Int']>;
  statusReopenedCounter_gt?: Maybe<Scalars['Int']>;
  statusReopenedCounter_gte?: Maybe<Scalars['Int']>;
  statusReopenedCounter_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  statusReopenedCounter_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  statusReason?: Maybe<Scalars['String']>;
  statusReason_not?: Maybe<Scalars['String']>;
  statusReason_contains?: Maybe<Scalars['String']>;
  statusReason_not_contains?: Maybe<Scalars['String']>;
  statusReason_starts_with?: Maybe<Scalars['String']>;
  statusReason_not_starts_with?: Maybe<Scalars['String']>;
  statusReason_ends_with?: Maybe<Scalars['String']>;
  statusReason_not_ends_with?: Maybe<Scalars['String']>;
  statusReason_i?: Maybe<Scalars['String']>;
  statusReason_not_i?: Maybe<Scalars['String']>;
  statusReason_contains_i?: Maybe<Scalars['String']>;
  statusReason_not_contains_i?: Maybe<Scalars['String']>;
  statusReason_starts_with_i?: Maybe<Scalars['String']>;
  statusReason_not_starts_with_i?: Maybe<Scalars['String']>;
  statusReason_ends_with_i?: Maybe<Scalars['String']>;
  statusReason_not_ends_with_i?: Maybe<Scalars['String']>;
  statusReason_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  statusReason_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Scalars['String']>;
  status_not?: Maybe<Scalars['String']>;
  status_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  status_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  number?: Maybe<Scalars['JSON']>;
  number_not?: Maybe<Scalars['JSON']>;
  number_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  number_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  client?: Maybe<Scalars['String']>;
  client_not?: Maybe<Scalars['String']>;
  client_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  client_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  clientName?: Maybe<Scalars['String']>;
  clientName_not?: Maybe<Scalars['String']>;
  clientName_contains?: Maybe<Scalars['String']>;
  clientName_not_contains?: Maybe<Scalars['String']>;
  clientName_starts_with?: Maybe<Scalars['String']>;
  clientName_not_starts_with?: Maybe<Scalars['String']>;
  clientName_ends_with?: Maybe<Scalars['String']>;
  clientName_not_ends_with?: Maybe<Scalars['String']>;
  clientName_i?: Maybe<Scalars['String']>;
  clientName_not_i?: Maybe<Scalars['String']>;
  clientName_contains_i?: Maybe<Scalars['String']>;
  clientName_not_contains_i?: Maybe<Scalars['String']>;
  clientName_starts_with_i?: Maybe<Scalars['String']>;
  clientName_not_starts_with_i?: Maybe<Scalars['String']>;
  clientName_ends_with_i?: Maybe<Scalars['String']>;
  clientName_not_ends_with_i?: Maybe<Scalars['String']>;
  clientName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  clientName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  clientEmail?: Maybe<Scalars['String']>;
  clientEmail_not?: Maybe<Scalars['String']>;
  clientEmail_contains?: Maybe<Scalars['String']>;
  clientEmail_not_contains?: Maybe<Scalars['String']>;
  clientEmail_starts_with?: Maybe<Scalars['String']>;
  clientEmail_not_starts_with?: Maybe<Scalars['String']>;
  clientEmail_ends_with?: Maybe<Scalars['String']>;
  clientEmail_not_ends_with?: Maybe<Scalars['String']>;
  clientEmail_i?: Maybe<Scalars['String']>;
  clientEmail_not_i?: Maybe<Scalars['String']>;
  clientEmail_contains_i?: Maybe<Scalars['String']>;
  clientEmail_not_contains_i?: Maybe<Scalars['String']>;
  clientEmail_starts_with_i?: Maybe<Scalars['String']>;
  clientEmail_not_starts_with_i?: Maybe<Scalars['String']>;
  clientEmail_ends_with_i?: Maybe<Scalars['String']>;
  clientEmail_not_ends_with_i?: Maybe<Scalars['String']>;
  clientEmail_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  clientEmail_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  clientPhone?: Maybe<Scalars['String']>;
  clientPhone_not?: Maybe<Scalars['String']>;
  clientPhone_contains?: Maybe<Scalars['String']>;
  clientPhone_not_contains?: Maybe<Scalars['String']>;
  clientPhone_starts_with?: Maybe<Scalars['String']>;
  clientPhone_not_starts_with?: Maybe<Scalars['String']>;
  clientPhone_ends_with?: Maybe<Scalars['String']>;
  clientPhone_not_ends_with?: Maybe<Scalars['String']>;
  clientPhone_i?: Maybe<Scalars['String']>;
  clientPhone_not_i?: Maybe<Scalars['String']>;
  clientPhone_contains_i?: Maybe<Scalars['String']>;
  clientPhone_not_contains_i?: Maybe<Scalars['String']>;
  clientPhone_starts_with_i?: Maybe<Scalars['String']>;
  clientPhone_not_starts_with_i?: Maybe<Scalars['String']>;
  clientPhone_ends_with_i?: Maybe<Scalars['String']>;
  clientPhone_not_ends_with_i?: Maybe<Scalars['String']>;
  clientPhone_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  clientPhone_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  operator?: Maybe<Scalars['String']>;
  operator_not?: Maybe<Scalars['String']>;
  operator_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  operator_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  assignee?: Maybe<Scalars['String']>;
  assignee_not?: Maybe<Scalars['String']>;
  assignee_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  assignee_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  executor?: Maybe<Scalars['String']>;
  executor_not?: Maybe<Scalars['String']>;
  executor_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  executor_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  classifier?: Maybe<Scalars['String']>;
  classifier_not?: Maybe<Scalars['String']>;
  classifier_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  classifier_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  details?: Maybe<Scalars['String']>;
  details_not?: Maybe<Scalars['String']>;
  details_contains?: Maybe<Scalars['String']>;
  details_not_contains?: Maybe<Scalars['String']>;
  details_starts_with?: Maybe<Scalars['String']>;
  details_not_starts_with?: Maybe<Scalars['String']>;
  details_ends_with?: Maybe<Scalars['String']>;
  details_not_ends_with?: Maybe<Scalars['String']>;
  details_i?: Maybe<Scalars['String']>;
  details_not_i?: Maybe<Scalars['String']>;
  details_contains_i?: Maybe<Scalars['String']>;
  details_not_contains_i?: Maybe<Scalars['String']>;
  details_starts_with_i?: Maybe<Scalars['String']>;
  details_not_starts_with_i?: Maybe<Scalars['String']>;
  details_ends_with_i?: Maybe<Scalars['String']>;
  details_not_ends_with_i?: Maybe<Scalars['String']>;
  details_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  details_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  related?: Maybe<Scalars['String']>;
  related_not?: Maybe<Scalars['String']>;
  related_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  related_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  meta?: Maybe<Scalars['JSON']>;
  meta_not?: Maybe<Scalars['JSON']>;
  meta_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  meta_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  property?: Maybe<Scalars['String']>;
  property_not?: Maybe<Scalars['String']>;
  property_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  property_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  entranceName?: Maybe<Scalars['String']>;
  entranceName_not?: Maybe<Scalars['String']>;
  entranceName_contains?: Maybe<Scalars['String']>;
  entranceName_not_contains?: Maybe<Scalars['String']>;
  entranceName_starts_with?: Maybe<Scalars['String']>;
  entranceName_not_starts_with?: Maybe<Scalars['String']>;
  entranceName_ends_with?: Maybe<Scalars['String']>;
  entranceName_not_ends_with?: Maybe<Scalars['String']>;
  entranceName_i?: Maybe<Scalars['String']>;
  entranceName_not_i?: Maybe<Scalars['String']>;
  entranceName_contains_i?: Maybe<Scalars['String']>;
  entranceName_not_contains_i?: Maybe<Scalars['String']>;
  entranceName_starts_with_i?: Maybe<Scalars['String']>;
  entranceName_not_starts_with_i?: Maybe<Scalars['String']>;
  entranceName_ends_with_i?: Maybe<Scalars['String']>;
  entranceName_not_ends_with_i?: Maybe<Scalars['String']>;
  entranceName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  entranceName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  floorName?: Maybe<Scalars['String']>;
  floorName_not?: Maybe<Scalars['String']>;
  floorName_contains?: Maybe<Scalars['String']>;
  floorName_not_contains?: Maybe<Scalars['String']>;
  floorName_starts_with?: Maybe<Scalars['String']>;
  floorName_not_starts_with?: Maybe<Scalars['String']>;
  floorName_ends_with?: Maybe<Scalars['String']>;
  floorName_not_ends_with?: Maybe<Scalars['String']>;
  floorName_i?: Maybe<Scalars['String']>;
  floorName_not_i?: Maybe<Scalars['String']>;
  floorName_contains_i?: Maybe<Scalars['String']>;
  floorName_not_contains_i?: Maybe<Scalars['String']>;
  floorName_starts_with_i?: Maybe<Scalars['String']>;
  floorName_not_starts_with_i?: Maybe<Scalars['String']>;
  floorName_ends_with_i?: Maybe<Scalars['String']>;
  floorName_not_ends_with_i?: Maybe<Scalars['String']>;
  floorName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  floorName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  unitName?: Maybe<Scalars['String']>;
  unitName_not?: Maybe<Scalars['String']>;
  unitName_contains?: Maybe<Scalars['String']>;
  unitName_not_contains?: Maybe<Scalars['String']>;
  unitName_starts_with?: Maybe<Scalars['String']>;
  unitName_not_starts_with?: Maybe<Scalars['String']>;
  unitName_ends_with?: Maybe<Scalars['String']>;
  unitName_not_ends_with?: Maybe<Scalars['String']>;
  unitName_i?: Maybe<Scalars['String']>;
  unitName_not_i?: Maybe<Scalars['String']>;
  unitName_contains_i?: Maybe<Scalars['String']>;
  unitName_not_contains_i?: Maybe<Scalars['String']>;
  unitName_starts_with_i?: Maybe<Scalars['String']>;
  unitName_not_starts_with_i?: Maybe<Scalars['String']>;
  unitName_ends_with_i?: Maybe<Scalars['String']>;
  unitName_not_ends_with_i?: Maybe<Scalars['String']>;
  unitName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  unitName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  source?: Maybe<Scalars['String']>;
  source_not?: Maybe<Scalars['String']>;
  source_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  source_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  sourceMeta?: Maybe<Scalars['JSON']>;
  sourceMeta_not?: Maybe<Scalars['JSON']>;
  sourceMeta_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  sourceMeta_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  statusUpdatedAt?: Maybe<Scalars['String']>;
  statusUpdatedAt_not?: Maybe<Scalars['String']>;
  statusUpdatedAt_lt?: Maybe<Scalars['String']>;
  statusUpdatedAt_lte?: Maybe<Scalars['String']>;
  statusUpdatedAt_gt?: Maybe<Scalars['String']>;
  statusUpdatedAt_gte?: Maybe<Scalars['String']>;
  statusUpdatedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  statusUpdatedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  isPaid?: Maybe<Scalars['Boolean']>;
  isPaid_not?: Maybe<Scalars['Boolean']>;
  isEmergency?: Maybe<Scalars['Boolean']>;
  isEmergency_not?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  v?: Maybe<Scalars['Int']>;
  v_not?: Maybe<Scalars['Int']>;
  v_lt?: Maybe<Scalars['Int']>;
  v_lte?: Maybe<Scalars['Int']>;
  v_gt?: Maybe<Scalars['Int']>;
  v_gte?: Maybe<Scalars['Int']>;
  v_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  v_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  createdAt?: Maybe<Scalars['String']>;
  createdAt_not?: Maybe<Scalars['String']>;
  createdAt_lt?: Maybe<Scalars['String']>;
  createdAt_lte?: Maybe<Scalars['String']>;
  createdAt_gt?: Maybe<Scalars['String']>;
  createdAt_gte?: Maybe<Scalars['String']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedAt_not?: Maybe<Scalars['String']>;
  updatedAt_lt?: Maybe<Scalars['String']>;
  updatedAt_lte?: Maybe<Scalars['String']>;
  updatedAt_gt?: Maybe<Scalars['String']>;
  updatedAt_gte?: Maybe<Scalars['String']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy?: Maybe<Scalars['String']>;
  createdBy_not?: Maybe<Scalars['String']>;
  createdBy_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedBy?: Maybe<Scalars['String']>;
  updatedBy_not?: Maybe<Scalars['String']>;
  updatedBy_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedBy_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedAt_not?: Maybe<Scalars['String']>;
  deletedAt_lt?: Maybe<Scalars['String']>;
  deletedAt_lte?: Maybe<Scalars['String']>;
  deletedAt_gt?: Maybe<Scalars['String']>;
  deletedAt_gte?: Maybe<Scalars['String']>;
  deletedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  deletedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  newId?: Maybe<Scalars['JSON']>;
  newId_not?: Maybe<Scalars['JSON']>;
  newId_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  newId_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  history_date?: Maybe<Scalars['String']>;
  history_date_not?: Maybe<Scalars['String']>;
  history_date_lt?: Maybe<Scalars['String']>;
  history_date_lte?: Maybe<Scalars['String']>;
  history_date_gt?: Maybe<Scalars['String']>;
  history_date_gte?: Maybe<Scalars['String']>;
  history_date_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_date_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_action?: Maybe<TicketHistoryRecordHistoryActionType>;
  history_action_not?: Maybe<TicketHistoryRecordHistoryActionType>;
  history_action_in?: Maybe<Array<Maybe<TicketHistoryRecordHistoryActionType>>>;
  history_action_not_in?: Maybe<Array<Maybe<TicketHistoryRecordHistoryActionType>>>;
  history_id?: Maybe<Scalars['String']>;
  history_id_not?: Maybe<Scalars['String']>;
  history_id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_id_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type TicketHistoryRecordWhereUniqueInput = {
  id: Scalars['ID'];
};

export enum SortTicketHistoryRecordsBy {
  DvAsc = 'dv_ASC',
  DvDesc = 'dv_DESC',
  StatusReopenedCounterAsc = 'statusReopenedCounter_ASC',
  StatusReopenedCounterDesc = 'statusReopenedCounter_DESC',
  StatusReasonAsc = 'statusReason_ASC',
  StatusReasonDesc = 'statusReason_DESC',
  ClientNameAsc = 'clientName_ASC',
  ClientNameDesc = 'clientName_DESC',
  ClientEmailAsc = 'clientEmail_ASC',
  ClientEmailDesc = 'clientEmail_DESC',
  ClientPhoneAsc = 'clientPhone_ASC',
  ClientPhoneDesc = 'clientPhone_DESC',
  DetailsAsc = 'details_ASC',
  DetailsDesc = 'details_DESC',
  EntranceNameAsc = 'entranceName_ASC',
  EntranceNameDesc = 'entranceName_DESC',
  FloorNameAsc = 'floorName_ASC',
  FloorNameDesc = 'floorName_DESC',
  UnitNameAsc = 'unitName_ASC',
  UnitNameDesc = 'unitName_DESC',
  StatusUpdatedAtAsc = 'statusUpdatedAt_ASC',
  StatusUpdatedAtDesc = 'statusUpdatedAt_DESC',
  IsPaidAsc = 'isPaid_ASC',
  IsPaidDesc = 'isPaid_DESC',
  IsEmergencyAsc = 'isEmergency_ASC',
  IsEmergencyDesc = 'isEmergency_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  VAsc = 'v_ASC',
  VDesc = 'v_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  HistoryDateAsc = 'history_date_ASC',
  HistoryDateDesc = 'history_date_DESC',
  HistoryActionAsc = 'history_action_ASC',
  HistoryActionDesc = 'history_action_DESC'
}

export type TicketHistoryRecordUpdateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  organization?: Maybe<Scalars['String']>;
  statusReopenedCounter?: Maybe<Scalars['Int']>;
  statusReason?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['JSON']>;
  client?: Maybe<Scalars['String']>;
  clientName?: Maybe<Scalars['String']>;
  clientEmail?: Maybe<Scalars['String']>;
  clientPhone?: Maybe<Scalars['String']>;
  operator?: Maybe<Scalars['String']>;
  assignee?: Maybe<Scalars['String']>;
  executor?: Maybe<Scalars['String']>;
  classifier?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  related?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['JSON']>;
  property?: Maybe<Scalars['String']>;
  entranceName?: Maybe<Scalars['String']>;
  floorName?: Maybe<Scalars['String']>;
  unitName?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  sourceMeta?: Maybe<Scalars['JSON']>;
  statusUpdatedAt?: Maybe<Scalars['String']>;
  isPaid?: Maybe<Scalars['Boolean']>;
  isEmergency?: Maybe<Scalars['Boolean']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['JSON']>;
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<TicketHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type TicketHistoryRecordsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<TicketHistoryRecordUpdateInput>;
};

export type TicketHistoryRecordCreateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  organization?: Maybe<Scalars['String']>;
  statusReopenedCounter?: Maybe<Scalars['Int']>;
  statusReason?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['JSON']>;
  client?: Maybe<Scalars['String']>;
  clientName?: Maybe<Scalars['String']>;
  clientEmail?: Maybe<Scalars['String']>;
  clientPhone?: Maybe<Scalars['String']>;
  operator?: Maybe<Scalars['String']>;
  assignee?: Maybe<Scalars['String']>;
  executor?: Maybe<Scalars['String']>;
  classifier?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  related?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['JSON']>;
  property?: Maybe<Scalars['String']>;
  entranceName?: Maybe<Scalars['String']>;
  floorName?: Maybe<Scalars['String']>;
  unitName?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  sourceMeta?: Maybe<Scalars['JSON']>;
  statusUpdatedAt?: Maybe<Scalars['String']>;
  isPaid?: Maybe<Scalars['Boolean']>;
  isEmergency?: Maybe<Scalars['Boolean']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['JSON']>;
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<TicketHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type TicketHistoryRecordsCreateInput = {
  data?: Maybe<TicketHistoryRecordCreateInput>;
};

export type TicketStatusRelateToOneInput = {
  create?: Maybe<TicketStatusCreateInput>;
  connect?: Maybe<TicketStatusWhereUniqueInput>;
  disconnect?: Maybe<TicketStatusWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type UserRelateToManyInput = {
  create?: Maybe<Array<Maybe<UserCreateInput>>>;
  connect?: Maybe<Array<Maybe<UserWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<UserWhereUniqueInput>>>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type TicketClassifierRelateToOneInput = {
  create?: Maybe<TicketClassifierCreateInput>;
  connect?: Maybe<TicketClassifierWhereUniqueInput>;
  disconnect?: Maybe<TicketClassifierWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type TicketRelateToOneInput = {
  create?: Maybe<TicketCreateInput>;
  connect?: Maybe<TicketWhereUniqueInput>;
  disconnect?: Maybe<TicketWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type PropertyRelateToOneInput = {
  create?: Maybe<PropertyCreateInput>;
  connect?: Maybe<PropertyWhereUniqueInput>;
  disconnect?: Maybe<PropertyWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type TicketSourceRelateToOneInput = {
  create?: Maybe<TicketSourceCreateInput>;
  connect?: Maybe<TicketSourceWhereUniqueInput>;
  disconnect?: Maybe<TicketSourceWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

/**  A keystone list  */
export type Ticket = {
  __typename?: 'Ticket';
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the Ticket List config, or
   *  2. As an alias to the field set on 'labelField' in the Ticket List config, or
   *  3. As an alias to a 'name' field on the Ticket List (if one exists), or
   *  4. As an alias to the 'id' field on the Ticket List.
   */
  _label_?: Maybe<Scalars['String']>;
  /**  Data structure Version  */
  dv?: Maybe<Scalars['Int']>;
  /**  Client-side devise identification used for the anti-fraud detection. Example `{ dv: '1', fingerprint: 'VaxSw2aXZa'}`. Where the `fingerprint` should be the same for the same devices and it's not linked to the user ID. It's the device ID like browser / mobile application / remote system  */
  sender?: Maybe<Scalars['JSON']>;
  /**  Ref to the organization. The object will be deleted if the organization ceases to exist  */
  organization?: Maybe<Organization>;
  /**  Counter showing the number of changes `status` to `new_or_reopened`. Is not auto changed  */
  statusReopenedCounter?: Maybe<Scalars['Int']>;
  /**  Text reason for status changes. Sometimes you should describe the reason why you change the `status`  */
  statusReason?: Maybe<Scalars['String']>;
  status?: Maybe<TicketStatus>;
  /**  Autogenerated ticket human readable ID  */
  number?: Maybe<Scalars['Int']>;
  /**  Inhabitant/customer/person who has a problem or want to improve/order something. Not null if we have a registered client  */
  client?: Maybe<User>;
  /**  Inhabitant/customer/person who has a problem. Sometimes we get a problem from an unregistered client, in such cases we have a null inside the `client` and just have something here. Or sometimes clients want to change it  */
  clientName?: Maybe<Scalars['String']>;
  /**  Inhabitant/customer/person who has a problem. Sometimes we get a problem from an unregistered client, in such cases we have a null inside the `client` and just have something here. Or sometimes clients want to change it  */
  clientEmail?: Maybe<Scalars['String']>;
  /**  Inhabitant/customer/person who has a problem. Sometimes we get a problem from an unregistered client, in such cases we have a null inside the `client` and just have something here. Or sometimes clients want to change it  */
  clientPhone?: Maybe<Scalars['String']>;
  /**  Staff/person who created the issue (submitter). This may be a call center operator or an employee who speaks to a inhabitant/client and filled out an issue for him  */
  operator?: Maybe<User>;
  /**  Assignee/responsible employee/user who must ensure that the issue is fulfilled  */
  assignee?: Maybe<User>;
  /**  Executor employee/user who perform the issue  */
  executor?: Maybe<User>;
  /**  Staff/person who want to watch ticket changes  */
  watchers: Array<User>;
  _watchersMeta?: Maybe<_QueryMeta>;
  classifier?: Maybe<TicketClassifier>;
  /**  Text description of the issue. Maybe written by a user or an operator  */
  details?: Maybe<Scalars['String']>;
  /**  Sometimes, it is important for us to show related issues. For example, to show related issues  */
  related?: Maybe<Ticket>;
  /**  Extra analytics not related to remote system  */
  meta?: Maybe<Scalars['JSON']>;
  /**  Property related to the Ticket  */
  property?: Maybe<Property>;
  entranceName?: Maybe<Scalars['String']>;
  floorName?: Maybe<Scalars['String']>;
  unitName?: Maybe<Scalars['String']>;
  /**  Ticket source channel/system. Examples: call, email, visit, ...  */
  source?: Maybe<TicketSource>;
  /**  In the case of remote system sync, you can store some extra analytics. Examples: email, name, phone, ...  */
  sourceMeta?: Maybe<Scalars['JSON']>;
  /**  Status updated at time  */
  statusUpdatedAt?: Maybe<Scalars['String']>;
  /**  Indicates the ticket is paid  */
  isPaid?: Maybe<Scalars['Boolean']>;
  /**  Indicates the ticket is emergency  */
  isEmergency?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<User>;
  updatedBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['String']>;
};


/**  A keystone list  */
export type TicketWatchersArgs = {
  where?: Maybe<UserWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortUsersBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


/**  A keystone list  */
export type Ticket_WatchersMetaArgs = {
  where?: Maybe<UserWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortUsersBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type TicketWhereInput = {
  AND?: Maybe<Array<Maybe<TicketWhereInput>>>;
  OR?: Maybe<Array<Maybe<TicketWhereInput>>>;
  dv?: Maybe<Scalars['Int']>;
  dv_not?: Maybe<Scalars['Int']>;
  dv_lt?: Maybe<Scalars['Int']>;
  dv_lte?: Maybe<Scalars['Int']>;
  dv_gt?: Maybe<Scalars['Int']>;
  dv_gte?: Maybe<Scalars['Int']>;
  dv_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  dv_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sender?: Maybe<Scalars['JSON']>;
  sender_not?: Maybe<Scalars['JSON']>;
  sender_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  sender_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  organization?: Maybe<OrganizationWhereInput>;
  organization_is_null?: Maybe<Scalars['Boolean']>;
  statusReopenedCounter?: Maybe<Scalars['Int']>;
  statusReopenedCounter_not?: Maybe<Scalars['Int']>;
  statusReopenedCounter_lt?: Maybe<Scalars['Int']>;
  statusReopenedCounter_lte?: Maybe<Scalars['Int']>;
  statusReopenedCounter_gt?: Maybe<Scalars['Int']>;
  statusReopenedCounter_gte?: Maybe<Scalars['Int']>;
  statusReopenedCounter_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  statusReopenedCounter_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  statusReason?: Maybe<Scalars['String']>;
  statusReason_not?: Maybe<Scalars['String']>;
  statusReason_contains?: Maybe<Scalars['String']>;
  statusReason_not_contains?: Maybe<Scalars['String']>;
  statusReason_starts_with?: Maybe<Scalars['String']>;
  statusReason_not_starts_with?: Maybe<Scalars['String']>;
  statusReason_ends_with?: Maybe<Scalars['String']>;
  statusReason_not_ends_with?: Maybe<Scalars['String']>;
  statusReason_i?: Maybe<Scalars['String']>;
  statusReason_not_i?: Maybe<Scalars['String']>;
  statusReason_contains_i?: Maybe<Scalars['String']>;
  statusReason_not_contains_i?: Maybe<Scalars['String']>;
  statusReason_starts_with_i?: Maybe<Scalars['String']>;
  statusReason_not_starts_with_i?: Maybe<Scalars['String']>;
  statusReason_ends_with_i?: Maybe<Scalars['String']>;
  statusReason_not_ends_with_i?: Maybe<Scalars['String']>;
  statusReason_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  statusReason_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<TicketStatusWhereInput>;
  status_is_null?: Maybe<Scalars['Boolean']>;
  number?: Maybe<Scalars['Int']>;
  number_not?: Maybe<Scalars['Int']>;
  number_lt?: Maybe<Scalars['Int']>;
  number_lte?: Maybe<Scalars['Int']>;
  number_gt?: Maybe<Scalars['Int']>;
  number_gte?: Maybe<Scalars['Int']>;
  number_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  number_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  client?: Maybe<UserWhereInput>;
  client_is_null?: Maybe<Scalars['Boolean']>;
  clientName?: Maybe<Scalars['String']>;
  clientName_not?: Maybe<Scalars['String']>;
  clientName_contains?: Maybe<Scalars['String']>;
  clientName_not_contains?: Maybe<Scalars['String']>;
  clientName_starts_with?: Maybe<Scalars['String']>;
  clientName_not_starts_with?: Maybe<Scalars['String']>;
  clientName_ends_with?: Maybe<Scalars['String']>;
  clientName_not_ends_with?: Maybe<Scalars['String']>;
  clientName_i?: Maybe<Scalars['String']>;
  clientName_not_i?: Maybe<Scalars['String']>;
  clientName_contains_i?: Maybe<Scalars['String']>;
  clientName_not_contains_i?: Maybe<Scalars['String']>;
  clientName_starts_with_i?: Maybe<Scalars['String']>;
  clientName_not_starts_with_i?: Maybe<Scalars['String']>;
  clientName_ends_with_i?: Maybe<Scalars['String']>;
  clientName_not_ends_with_i?: Maybe<Scalars['String']>;
  clientName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  clientName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  clientEmail?: Maybe<Scalars['String']>;
  clientEmail_not?: Maybe<Scalars['String']>;
  clientEmail_contains?: Maybe<Scalars['String']>;
  clientEmail_not_contains?: Maybe<Scalars['String']>;
  clientEmail_starts_with?: Maybe<Scalars['String']>;
  clientEmail_not_starts_with?: Maybe<Scalars['String']>;
  clientEmail_ends_with?: Maybe<Scalars['String']>;
  clientEmail_not_ends_with?: Maybe<Scalars['String']>;
  clientEmail_i?: Maybe<Scalars['String']>;
  clientEmail_not_i?: Maybe<Scalars['String']>;
  clientEmail_contains_i?: Maybe<Scalars['String']>;
  clientEmail_not_contains_i?: Maybe<Scalars['String']>;
  clientEmail_starts_with_i?: Maybe<Scalars['String']>;
  clientEmail_not_starts_with_i?: Maybe<Scalars['String']>;
  clientEmail_ends_with_i?: Maybe<Scalars['String']>;
  clientEmail_not_ends_with_i?: Maybe<Scalars['String']>;
  clientEmail_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  clientEmail_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  clientPhone?: Maybe<Scalars['String']>;
  clientPhone_not?: Maybe<Scalars['String']>;
  clientPhone_contains?: Maybe<Scalars['String']>;
  clientPhone_not_contains?: Maybe<Scalars['String']>;
  clientPhone_starts_with?: Maybe<Scalars['String']>;
  clientPhone_not_starts_with?: Maybe<Scalars['String']>;
  clientPhone_ends_with?: Maybe<Scalars['String']>;
  clientPhone_not_ends_with?: Maybe<Scalars['String']>;
  clientPhone_i?: Maybe<Scalars['String']>;
  clientPhone_not_i?: Maybe<Scalars['String']>;
  clientPhone_contains_i?: Maybe<Scalars['String']>;
  clientPhone_not_contains_i?: Maybe<Scalars['String']>;
  clientPhone_starts_with_i?: Maybe<Scalars['String']>;
  clientPhone_not_starts_with_i?: Maybe<Scalars['String']>;
  clientPhone_ends_with_i?: Maybe<Scalars['String']>;
  clientPhone_not_ends_with_i?: Maybe<Scalars['String']>;
  clientPhone_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  clientPhone_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  operator?: Maybe<UserWhereInput>;
  operator_is_null?: Maybe<Scalars['Boolean']>;
  assignee?: Maybe<UserWhereInput>;
  assignee_is_null?: Maybe<Scalars['Boolean']>;
  executor?: Maybe<UserWhereInput>;
  executor_is_null?: Maybe<Scalars['Boolean']>;
  /**  condition must be true for all nodes  */
  watchers_every?: Maybe<UserWhereInput>;
  /**  condition must be true for at least 1 node  */
  watchers_some?: Maybe<UserWhereInput>;
  /**  condition must be false for all nodes  */
  watchers_none?: Maybe<UserWhereInput>;
  classifier?: Maybe<TicketClassifierWhereInput>;
  classifier_is_null?: Maybe<Scalars['Boolean']>;
  details?: Maybe<Scalars['String']>;
  details_not?: Maybe<Scalars['String']>;
  details_contains?: Maybe<Scalars['String']>;
  details_not_contains?: Maybe<Scalars['String']>;
  details_starts_with?: Maybe<Scalars['String']>;
  details_not_starts_with?: Maybe<Scalars['String']>;
  details_ends_with?: Maybe<Scalars['String']>;
  details_not_ends_with?: Maybe<Scalars['String']>;
  details_i?: Maybe<Scalars['String']>;
  details_not_i?: Maybe<Scalars['String']>;
  details_contains_i?: Maybe<Scalars['String']>;
  details_not_contains_i?: Maybe<Scalars['String']>;
  details_starts_with_i?: Maybe<Scalars['String']>;
  details_not_starts_with_i?: Maybe<Scalars['String']>;
  details_ends_with_i?: Maybe<Scalars['String']>;
  details_not_ends_with_i?: Maybe<Scalars['String']>;
  details_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  details_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  related?: Maybe<TicketWhereInput>;
  related_is_null?: Maybe<Scalars['Boolean']>;
  meta?: Maybe<Scalars['JSON']>;
  meta_not?: Maybe<Scalars['JSON']>;
  meta_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  meta_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  property?: Maybe<PropertyWhereInput>;
  property_is_null?: Maybe<Scalars['Boolean']>;
  entranceName?: Maybe<Scalars['String']>;
  entranceName_not?: Maybe<Scalars['String']>;
  entranceName_contains?: Maybe<Scalars['String']>;
  entranceName_not_contains?: Maybe<Scalars['String']>;
  entranceName_starts_with?: Maybe<Scalars['String']>;
  entranceName_not_starts_with?: Maybe<Scalars['String']>;
  entranceName_ends_with?: Maybe<Scalars['String']>;
  entranceName_not_ends_with?: Maybe<Scalars['String']>;
  entranceName_i?: Maybe<Scalars['String']>;
  entranceName_not_i?: Maybe<Scalars['String']>;
  entranceName_contains_i?: Maybe<Scalars['String']>;
  entranceName_not_contains_i?: Maybe<Scalars['String']>;
  entranceName_starts_with_i?: Maybe<Scalars['String']>;
  entranceName_not_starts_with_i?: Maybe<Scalars['String']>;
  entranceName_ends_with_i?: Maybe<Scalars['String']>;
  entranceName_not_ends_with_i?: Maybe<Scalars['String']>;
  entranceName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  entranceName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  floorName?: Maybe<Scalars['String']>;
  floorName_not?: Maybe<Scalars['String']>;
  floorName_contains?: Maybe<Scalars['String']>;
  floorName_not_contains?: Maybe<Scalars['String']>;
  floorName_starts_with?: Maybe<Scalars['String']>;
  floorName_not_starts_with?: Maybe<Scalars['String']>;
  floorName_ends_with?: Maybe<Scalars['String']>;
  floorName_not_ends_with?: Maybe<Scalars['String']>;
  floorName_i?: Maybe<Scalars['String']>;
  floorName_not_i?: Maybe<Scalars['String']>;
  floorName_contains_i?: Maybe<Scalars['String']>;
  floorName_not_contains_i?: Maybe<Scalars['String']>;
  floorName_starts_with_i?: Maybe<Scalars['String']>;
  floorName_not_starts_with_i?: Maybe<Scalars['String']>;
  floorName_ends_with_i?: Maybe<Scalars['String']>;
  floorName_not_ends_with_i?: Maybe<Scalars['String']>;
  floorName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  floorName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  unitName?: Maybe<Scalars['String']>;
  unitName_not?: Maybe<Scalars['String']>;
  unitName_contains?: Maybe<Scalars['String']>;
  unitName_not_contains?: Maybe<Scalars['String']>;
  unitName_starts_with?: Maybe<Scalars['String']>;
  unitName_not_starts_with?: Maybe<Scalars['String']>;
  unitName_ends_with?: Maybe<Scalars['String']>;
  unitName_not_ends_with?: Maybe<Scalars['String']>;
  unitName_i?: Maybe<Scalars['String']>;
  unitName_not_i?: Maybe<Scalars['String']>;
  unitName_contains_i?: Maybe<Scalars['String']>;
  unitName_not_contains_i?: Maybe<Scalars['String']>;
  unitName_starts_with_i?: Maybe<Scalars['String']>;
  unitName_not_starts_with_i?: Maybe<Scalars['String']>;
  unitName_ends_with_i?: Maybe<Scalars['String']>;
  unitName_not_ends_with_i?: Maybe<Scalars['String']>;
  unitName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  unitName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  source?: Maybe<TicketSourceWhereInput>;
  source_is_null?: Maybe<Scalars['Boolean']>;
  sourceMeta?: Maybe<Scalars['JSON']>;
  sourceMeta_not?: Maybe<Scalars['JSON']>;
  sourceMeta_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  sourceMeta_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  statusUpdatedAt?: Maybe<Scalars['String']>;
  statusUpdatedAt_not?: Maybe<Scalars['String']>;
  statusUpdatedAt_lt?: Maybe<Scalars['String']>;
  statusUpdatedAt_lte?: Maybe<Scalars['String']>;
  statusUpdatedAt_gt?: Maybe<Scalars['String']>;
  statusUpdatedAt_gte?: Maybe<Scalars['String']>;
  statusUpdatedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  statusUpdatedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  isPaid?: Maybe<Scalars['Boolean']>;
  isPaid_not?: Maybe<Scalars['Boolean']>;
  isEmergency?: Maybe<Scalars['Boolean']>;
  isEmergency_not?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  v?: Maybe<Scalars['Int']>;
  v_not?: Maybe<Scalars['Int']>;
  v_lt?: Maybe<Scalars['Int']>;
  v_lte?: Maybe<Scalars['Int']>;
  v_gt?: Maybe<Scalars['Int']>;
  v_gte?: Maybe<Scalars['Int']>;
  v_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  v_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  createdAt?: Maybe<Scalars['String']>;
  createdAt_not?: Maybe<Scalars['String']>;
  createdAt_lt?: Maybe<Scalars['String']>;
  createdAt_lte?: Maybe<Scalars['String']>;
  createdAt_gt?: Maybe<Scalars['String']>;
  createdAt_gte?: Maybe<Scalars['String']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedAt_not?: Maybe<Scalars['String']>;
  updatedAt_lt?: Maybe<Scalars['String']>;
  updatedAt_lte?: Maybe<Scalars['String']>;
  updatedAt_gt?: Maybe<Scalars['String']>;
  updatedAt_gte?: Maybe<Scalars['String']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy?: Maybe<UserWhereInput>;
  createdBy_is_null?: Maybe<Scalars['Boolean']>;
  updatedBy?: Maybe<UserWhereInput>;
  updatedBy_is_null?: Maybe<Scalars['Boolean']>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedAt_not?: Maybe<Scalars['String']>;
  deletedAt_lt?: Maybe<Scalars['String']>;
  deletedAt_lte?: Maybe<Scalars['String']>;
  deletedAt_gt?: Maybe<Scalars['String']>;
  deletedAt_gte?: Maybe<Scalars['String']>;
  deletedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  deletedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  newId?: Maybe<Scalars['String']>;
  newId_not?: Maybe<Scalars['String']>;
  newId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  newId_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type TicketWhereUniqueInput = {
  id: Scalars['ID'];
};

export enum SortTicketsBy {
  DvAsc = 'dv_ASC',
  DvDesc = 'dv_DESC',
  OrganizationAsc = 'organization_ASC',
  OrganizationDesc = 'organization_DESC',
  StatusReopenedCounterAsc = 'statusReopenedCounter_ASC',
  StatusReopenedCounterDesc = 'statusReopenedCounter_DESC',
  StatusReasonAsc = 'statusReason_ASC',
  StatusReasonDesc = 'statusReason_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  NumberAsc = 'number_ASC',
  NumberDesc = 'number_DESC',
  ClientAsc = 'client_ASC',
  ClientDesc = 'client_DESC',
  ClientNameAsc = 'clientName_ASC',
  ClientNameDesc = 'clientName_DESC',
  ClientEmailAsc = 'clientEmail_ASC',
  ClientEmailDesc = 'clientEmail_DESC',
  ClientPhoneAsc = 'clientPhone_ASC',
  ClientPhoneDesc = 'clientPhone_DESC',
  OperatorAsc = 'operator_ASC',
  OperatorDesc = 'operator_DESC',
  AssigneeAsc = 'assignee_ASC',
  AssigneeDesc = 'assignee_DESC',
  ExecutorAsc = 'executor_ASC',
  ExecutorDesc = 'executor_DESC',
  WatchersAsc = 'watchers_ASC',
  WatchersDesc = 'watchers_DESC',
  ClassifierAsc = 'classifier_ASC',
  ClassifierDesc = 'classifier_DESC',
  DetailsAsc = 'details_ASC',
  DetailsDesc = 'details_DESC',
  RelatedAsc = 'related_ASC',
  RelatedDesc = 'related_DESC',
  PropertyAsc = 'property_ASC',
  PropertyDesc = 'property_DESC',
  EntranceNameAsc = 'entranceName_ASC',
  EntranceNameDesc = 'entranceName_DESC',
  FloorNameAsc = 'floorName_ASC',
  FloorNameDesc = 'floorName_DESC',
  UnitNameAsc = 'unitName_ASC',
  UnitNameDesc = 'unitName_DESC',
  SourceAsc = 'source_ASC',
  SourceDesc = 'source_DESC',
  StatusUpdatedAtAsc = 'statusUpdatedAt_ASC',
  StatusUpdatedAtDesc = 'statusUpdatedAt_DESC',
  IsPaidAsc = 'isPaid_ASC',
  IsPaidDesc = 'isPaid_DESC',
  IsEmergencyAsc = 'isEmergency_ASC',
  IsEmergencyDesc = 'isEmergency_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  VAsc = 'v_ASC',
  VDesc = 'v_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  CreatedByAsc = 'createdBy_ASC',
  CreatedByDesc = 'createdBy_DESC',
  UpdatedByAsc = 'updatedBy_ASC',
  UpdatedByDesc = 'updatedBy_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC'
}

export type TicketUpdateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  organization?: Maybe<OrganizationRelateToOneInput>;
  statusReopenedCounter?: Maybe<Scalars['Int']>;
  statusReason?: Maybe<Scalars['String']>;
  status?: Maybe<TicketStatusRelateToOneInput>;
  number?: Maybe<Scalars['Int']>;
  client?: Maybe<UserRelateToOneInput>;
  clientName?: Maybe<Scalars['String']>;
  clientEmail?: Maybe<Scalars['String']>;
  clientPhone?: Maybe<Scalars['String']>;
  operator?: Maybe<UserRelateToOneInput>;
  assignee?: Maybe<UserRelateToOneInput>;
  executor?: Maybe<UserRelateToOneInput>;
  watchers?: Maybe<UserRelateToManyInput>;
  classifier?: Maybe<TicketClassifierRelateToOneInput>;
  details?: Maybe<Scalars['String']>;
  related?: Maybe<TicketRelateToOneInput>;
  meta?: Maybe<Scalars['JSON']>;
  property?: Maybe<PropertyRelateToOneInput>;
  entranceName?: Maybe<Scalars['String']>;
  floorName?: Maybe<Scalars['String']>;
  unitName?: Maybe<Scalars['String']>;
  source?: Maybe<TicketSourceRelateToOneInput>;
  sourceMeta?: Maybe<Scalars['JSON']>;
  statusUpdatedAt?: Maybe<Scalars['String']>;
  isPaid?: Maybe<Scalars['Boolean']>;
  isEmergency?: Maybe<Scalars['Boolean']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserRelateToOneInput>;
  updatedBy?: Maybe<UserRelateToOneInput>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['String']>;
};

export type TicketsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<TicketUpdateInput>;
};

export type TicketCreateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  organization?: Maybe<OrganizationRelateToOneInput>;
  statusReopenedCounter?: Maybe<Scalars['Int']>;
  statusReason?: Maybe<Scalars['String']>;
  status?: Maybe<TicketStatusRelateToOneInput>;
  number?: Maybe<Scalars['Int']>;
  client?: Maybe<UserRelateToOneInput>;
  clientName?: Maybe<Scalars['String']>;
  clientEmail?: Maybe<Scalars['String']>;
  clientPhone?: Maybe<Scalars['String']>;
  operator?: Maybe<UserRelateToOneInput>;
  assignee?: Maybe<UserRelateToOneInput>;
  executor?: Maybe<UserRelateToOneInput>;
  watchers?: Maybe<UserRelateToManyInput>;
  classifier?: Maybe<TicketClassifierRelateToOneInput>;
  details?: Maybe<Scalars['String']>;
  related?: Maybe<TicketRelateToOneInput>;
  meta?: Maybe<Scalars['JSON']>;
  property?: Maybe<PropertyRelateToOneInput>;
  entranceName?: Maybe<Scalars['String']>;
  floorName?: Maybe<Scalars['String']>;
  unitName?: Maybe<Scalars['String']>;
  source?: Maybe<TicketSourceRelateToOneInput>;
  sourceMeta?: Maybe<Scalars['JSON']>;
  statusUpdatedAt?: Maybe<Scalars['String']>;
  isPaid?: Maybe<Scalars['Boolean']>;
  isEmergency?: Maybe<Scalars['Boolean']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserRelateToOneInput>;
  updatedBy?: Maybe<UserRelateToOneInput>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['String']>;
};

export type TicketsCreateInput = {
  data?: Maybe<TicketCreateInput>;
};

export enum TicketSourceHistoryRecordHistoryActionType {
  C = 'c',
  U = 'u',
  D = 'd'
}

/**  A keystone list  */
export type TicketSourceHistoryRecord = {
  __typename?: 'TicketSourceHistoryRecord';
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the TicketSourceHistoryRecord List config, or
   *  2. As an alias to the field set on 'labelField' in the TicketSourceHistoryRecord List config, or
   *  3. As an alias to a 'name' field on the TicketSourceHistoryRecord List (if one exists), or
   *  4. As an alias to the 'id' field on the TicketSourceHistoryRecord List.
   */
  _label_?: Maybe<Scalars['String']>;
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  organization?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['JSON']>;
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<TicketSourceHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type TicketSourceHistoryRecordWhereInput = {
  AND?: Maybe<Array<Maybe<TicketSourceHistoryRecordWhereInput>>>;
  OR?: Maybe<Array<Maybe<TicketSourceHistoryRecordWhereInput>>>;
  dv?: Maybe<Scalars['Int']>;
  dv_not?: Maybe<Scalars['Int']>;
  dv_lt?: Maybe<Scalars['Int']>;
  dv_lte?: Maybe<Scalars['Int']>;
  dv_gt?: Maybe<Scalars['Int']>;
  dv_gte?: Maybe<Scalars['Int']>;
  dv_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  dv_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sender?: Maybe<Scalars['JSON']>;
  sender_not?: Maybe<Scalars['JSON']>;
  sender_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  sender_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  organization?: Maybe<Scalars['String']>;
  organization_not?: Maybe<Scalars['String']>;
  organization_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  organization_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<Scalars['String']>;
  type_not?: Maybe<Scalars['String']>;
  type_contains?: Maybe<Scalars['String']>;
  type_not_contains?: Maybe<Scalars['String']>;
  type_starts_with?: Maybe<Scalars['String']>;
  type_not_starts_with?: Maybe<Scalars['String']>;
  type_ends_with?: Maybe<Scalars['String']>;
  type_not_ends_with?: Maybe<Scalars['String']>;
  type_i?: Maybe<Scalars['String']>;
  type_not_i?: Maybe<Scalars['String']>;
  type_contains_i?: Maybe<Scalars['String']>;
  type_not_contains_i?: Maybe<Scalars['String']>;
  type_starts_with_i?: Maybe<Scalars['String']>;
  type_not_starts_with_i?: Maybe<Scalars['String']>;
  type_ends_with_i?: Maybe<Scalars['String']>;
  type_not_ends_with_i?: Maybe<Scalars['String']>;
  type_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  type_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  v?: Maybe<Scalars['Int']>;
  v_not?: Maybe<Scalars['Int']>;
  v_lt?: Maybe<Scalars['Int']>;
  v_lte?: Maybe<Scalars['Int']>;
  v_gt?: Maybe<Scalars['Int']>;
  v_gte?: Maybe<Scalars['Int']>;
  v_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  v_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  createdAt?: Maybe<Scalars['String']>;
  createdAt_not?: Maybe<Scalars['String']>;
  createdAt_lt?: Maybe<Scalars['String']>;
  createdAt_lte?: Maybe<Scalars['String']>;
  createdAt_gt?: Maybe<Scalars['String']>;
  createdAt_gte?: Maybe<Scalars['String']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedAt_not?: Maybe<Scalars['String']>;
  updatedAt_lt?: Maybe<Scalars['String']>;
  updatedAt_lte?: Maybe<Scalars['String']>;
  updatedAt_gt?: Maybe<Scalars['String']>;
  updatedAt_gte?: Maybe<Scalars['String']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy?: Maybe<Scalars['String']>;
  createdBy_not?: Maybe<Scalars['String']>;
  createdBy_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedBy?: Maybe<Scalars['String']>;
  updatedBy_not?: Maybe<Scalars['String']>;
  updatedBy_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedBy_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedAt_not?: Maybe<Scalars['String']>;
  deletedAt_lt?: Maybe<Scalars['String']>;
  deletedAt_lte?: Maybe<Scalars['String']>;
  deletedAt_gt?: Maybe<Scalars['String']>;
  deletedAt_gte?: Maybe<Scalars['String']>;
  deletedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  deletedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  newId?: Maybe<Scalars['JSON']>;
  newId_not?: Maybe<Scalars['JSON']>;
  newId_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  newId_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  history_date?: Maybe<Scalars['String']>;
  history_date_not?: Maybe<Scalars['String']>;
  history_date_lt?: Maybe<Scalars['String']>;
  history_date_lte?: Maybe<Scalars['String']>;
  history_date_gt?: Maybe<Scalars['String']>;
  history_date_gte?: Maybe<Scalars['String']>;
  history_date_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_date_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_action?: Maybe<TicketSourceHistoryRecordHistoryActionType>;
  history_action_not?: Maybe<TicketSourceHistoryRecordHistoryActionType>;
  history_action_in?: Maybe<Array<Maybe<TicketSourceHistoryRecordHistoryActionType>>>;
  history_action_not_in?: Maybe<Array<Maybe<TicketSourceHistoryRecordHistoryActionType>>>;
  history_id?: Maybe<Scalars['String']>;
  history_id_not?: Maybe<Scalars['String']>;
  history_id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_id_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type TicketSourceHistoryRecordWhereUniqueInput = {
  id: Scalars['ID'];
};

export enum SortTicketSourceHistoryRecordsBy {
  DvAsc = 'dv_ASC',
  DvDesc = 'dv_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  VAsc = 'v_ASC',
  VDesc = 'v_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  HistoryDateAsc = 'history_date_ASC',
  HistoryDateDesc = 'history_date_DESC',
  HistoryActionAsc = 'history_action_ASC',
  HistoryActionDesc = 'history_action_DESC'
}

export type TicketSourceHistoryRecordUpdateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  organization?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['JSON']>;
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<TicketSourceHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type TicketSourceHistoryRecordsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<TicketSourceHistoryRecordUpdateInput>;
};

export type TicketSourceHistoryRecordCreateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  organization?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['JSON']>;
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<TicketSourceHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type TicketSourceHistoryRecordsCreateInput = {
  data?: Maybe<TicketSourceHistoryRecordCreateInput>;
};

export enum TicketSourceTypeType {
  MobileApp = 'mobile_app',
  WebApp = 'web_app',
  OrganizationSite = 'organization_site',
  Call = 'call',
  Visit = 'visit',
  Email = 'email',
  SocialNetwork = 'social_network',
  Messenger = 'messenger',
  RemoteSystem = 'remote_system',
  Other = 'other'
}

/**  Ticket source. Income call, mobile app, external system, ...  */
export type TicketSource = {
  __typename?: 'TicketSource';
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the TicketSource List config, or
   *  2. As an alias to the field set on 'labelField' in the TicketSource List config, or
   *  3. As an alias to a 'name' field on the TicketSource List (if one exists), or
   *  4. As an alias to the 'id' field on the TicketSource List.
   */
  _label_?: Maybe<Scalars['String']>;
  /**  Data structure Version  */
  dv?: Maybe<Scalars['Int']>;
  /**  Client-side devise identification used for the anti-fraud detection. Example `{ dv: '1', fingerprint: 'VaxSw2aXZa'}`. Where the `fingerprint` should be the same for the same devices and it's not linked to the user ID. It's the device ID like browser / mobile application / remote system  */
  sender?: Maybe<Scalars['JSON']>;
  /**  Ref to the organization. If this ref is null the object is common for all organizations  */
  organization?: Maybe<Organization>;
  type?: Maybe<TicketSourceTypeType>;
  name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<User>;
  updatedBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['String']>;
};

export type TicketSourceWhereInput = {
  AND?: Maybe<Array<Maybe<TicketSourceWhereInput>>>;
  OR?: Maybe<Array<Maybe<TicketSourceWhereInput>>>;
  dv?: Maybe<Scalars['Int']>;
  dv_not?: Maybe<Scalars['Int']>;
  dv_lt?: Maybe<Scalars['Int']>;
  dv_lte?: Maybe<Scalars['Int']>;
  dv_gt?: Maybe<Scalars['Int']>;
  dv_gte?: Maybe<Scalars['Int']>;
  dv_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  dv_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sender?: Maybe<Scalars['JSON']>;
  sender_not?: Maybe<Scalars['JSON']>;
  sender_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  sender_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  organization?: Maybe<OrganizationWhereInput>;
  organization_is_null?: Maybe<Scalars['Boolean']>;
  type?: Maybe<TicketSourceTypeType>;
  type_not?: Maybe<TicketSourceTypeType>;
  type_in?: Maybe<Array<Maybe<TicketSourceTypeType>>>;
  type_not_in?: Maybe<Array<Maybe<TicketSourceTypeType>>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  v?: Maybe<Scalars['Int']>;
  v_not?: Maybe<Scalars['Int']>;
  v_lt?: Maybe<Scalars['Int']>;
  v_lte?: Maybe<Scalars['Int']>;
  v_gt?: Maybe<Scalars['Int']>;
  v_gte?: Maybe<Scalars['Int']>;
  v_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  v_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  createdAt?: Maybe<Scalars['String']>;
  createdAt_not?: Maybe<Scalars['String']>;
  createdAt_lt?: Maybe<Scalars['String']>;
  createdAt_lte?: Maybe<Scalars['String']>;
  createdAt_gt?: Maybe<Scalars['String']>;
  createdAt_gte?: Maybe<Scalars['String']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedAt_not?: Maybe<Scalars['String']>;
  updatedAt_lt?: Maybe<Scalars['String']>;
  updatedAt_lte?: Maybe<Scalars['String']>;
  updatedAt_gt?: Maybe<Scalars['String']>;
  updatedAt_gte?: Maybe<Scalars['String']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy?: Maybe<UserWhereInput>;
  createdBy_is_null?: Maybe<Scalars['Boolean']>;
  updatedBy?: Maybe<UserWhereInput>;
  updatedBy_is_null?: Maybe<Scalars['Boolean']>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedAt_not?: Maybe<Scalars['String']>;
  deletedAt_lt?: Maybe<Scalars['String']>;
  deletedAt_lte?: Maybe<Scalars['String']>;
  deletedAt_gt?: Maybe<Scalars['String']>;
  deletedAt_gte?: Maybe<Scalars['String']>;
  deletedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  deletedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  newId?: Maybe<Scalars['String']>;
  newId_not?: Maybe<Scalars['String']>;
  newId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  newId_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type TicketSourceWhereUniqueInput = {
  id: Scalars['ID'];
};

export enum SortTicketSourcesBy {
  DvAsc = 'dv_ASC',
  DvDesc = 'dv_DESC',
  OrganizationAsc = 'organization_ASC',
  OrganizationDesc = 'organization_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  VAsc = 'v_ASC',
  VDesc = 'v_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  CreatedByAsc = 'createdBy_ASC',
  CreatedByDesc = 'createdBy_DESC',
  UpdatedByAsc = 'updatedBy_ASC',
  UpdatedByDesc = 'updatedBy_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC'
}

export type TicketSourceUpdateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  organization?: Maybe<OrganizationRelateToOneInput>;
  type?: Maybe<TicketSourceTypeType>;
  name?: Maybe<Scalars['String']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserRelateToOneInput>;
  updatedBy?: Maybe<UserRelateToOneInput>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['String']>;
};

export type TicketSourcesUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<TicketSourceUpdateInput>;
};

export type TicketSourceCreateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  organization?: Maybe<OrganizationRelateToOneInput>;
  type?: Maybe<TicketSourceTypeType>;
  name?: Maybe<Scalars['String']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserRelateToOneInput>;
  updatedBy?: Maybe<UserRelateToOneInput>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['String']>;
};

export type TicketSourcesCreateInput = {
  data?: Maybe<TicketSourceCreateInput>;
};

export enum TicketClassifierHistoryRecordHistoryActionType {
  C = 'c',
  U = 'u',
  D = 'd'
}

/**  A keystone list  */
export type TicketClassifierHistoryRecord = {
  __typename?: 'TicketClassifierHistoryRecord';
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the TicketClassifierHistoryRecord List config, or
   *  2. As an alias to the field set on 'labelField' in the TicketClassifierHistoryRecord List config, or
   *  3. As an alias to a 'name' field on the TicketClassifierHistoryRecord List (if one exists), or
   *  4. As an alias to the 'id' field on the TicketClassifierHistoryRecord List.
   */
  _label_?: Maybe<Scalars['String']>;
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  organization?: Maybe<Scalars['String']>;
  parent?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['JSON']>;
  name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['JSON']>;
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<TicketClassifierHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type TicketClassifierHistoryRecordWhereInput = {
  AND?: Maybe<Array<Maybe<TicketClassifierHistoryRecordWhereInput>>>;
  OR?: Maybe<Array<Maybe<TicketClassifierHistoryRecordWhereInput>>>;
  dv?: Maybe<Scalars['Int']>;
  dv_not?: Maybe<Scalars['Int']>;
  dv_lt?: Maybe<Scalars['Int']>;
  dv_lte?: Maybe<Scalars['Int']>;
  dv_gt?: Maybe<Scalars['Int']>;
  dv_gte?: Maybe<Scalars['Int']>;
  dv_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  dv_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sender?: Maybe<Scalars['JSON']>;
  sender_not?: Maybe<Scalars['JSON']>;
  sender_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  sender_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  organization?: Maybe<Scalars['String']>;
  organization_not?: Maybe<Scalars['String']>;
  organization_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  organization_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  parent?: Maybe<Scalars['String']>;
  parent_not?: Maybe<Scalars['String']>;
  parent_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  parent_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  fullName?: Maybe<Scalars['JSON']>;
  fullName_not?: Maybe<Scalars['JSON']>;
  fullName_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  fullName_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  v?: Maybe<Scalars['Int']>;
  v_not?: Maybe<Scalars['Int']>;
  v_lt?: Maybe<Scalars['Int']>;
  v_lte?: Maybe<Scalars['Int']>;
  v_gt?: Maybe<Scalars['Int']>;
  v_gte?: Maybe<Scalars['Int']>;
  v_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  v_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  createdAt?: Maybe<Scalars['String']>;
  createdAt_not?: Maybe<Scalars['String']>;
  createdAt_lt?: Maybe<Scalars['String']>;
  createdAt_lte?: Maybe<Scalars['String']>;
  createdAt_gt?: Maybe<Scalars['String']>;
  createdAt_gte?: Maybe<Scalars['String']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedAt_not?: Maybe<Scalars['String']>;
  updatedAt_lt?: Maybe<Scalars['String']>;
  updatedAt_lte?: Maybe<Scalars['String']>;
  updatedAt_gt?: Maybe<Scalars['String']>;
  updatedAt_gte?: Maybe<Scalars['String']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy?: Maybe<Scalars['String']>;
  createdBy_not?: Maybe<Scalars['String']>;
  createdBy_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedBy?: Maybe<Scalars['String']>;
  updatedBy_not?: Maybe<Scalars['String']>;
  updatedBy_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedBy_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedAt_not?: Maybe<Scalars['String']>;
  deletedAt_lt?: Maybe<Scalars['String']>;
  deletedAt_lte?: Maybe<Scalars['String']>;
  deletedAt_gt?: Maybe<Scalars['String']>;
  deletedAt_gte?: Maybe<Scalars['String']>;
  deletedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  deletedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  newId?: Maybe<Scalars['JSON']>;
  newId_not?: Maybe<Scalars['JSON']>;
  newId_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  newId_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  history_date?: Maybe<Scalars['String']>;
  history_date_not?: Maybe<Scalars['String']>;
  history_date_lt?: Maybe<Scalars['String']>;
  history_date_lte?: Maybe<Scalars['String']>;
  history_date_gt?: Maybe<Scalars['String']>;
  history_date_gte?: Maybe<Scalars['String']>;
  history_date_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_date_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_action?: Maybe<TicketClassifierHistoryRecordHistoryActionType>;
  history_action_not?: Maybe<TicketClassifierHistoryRecordHistoryActionType>;
  history_action_in?: Maybe<Array<Maybe<TicketClassifierHistoryRecordHistoryActionType>>>;
  history_action_not_in?: Maybe<Array<Maybe<TicketClassifierHistoryRecordHistoryActionType>>>;
  history_id?: Maybe<Scalars['String']>;
  history_id_not?: Maybe<Scalars['String']>;
  history_id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_id_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type TicketClassifierHistoryRecordWhereUniqueInput = {
  id: Scalars['ID'];
};

export enum SortTicketClassifierHistoryRecordsBy {
  DvAsc = 'dv_ASC',
  DvDesc = 'dv_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  VAsc = 'v_ASC',
  VDesc = 'v_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  HistoryDateAsc = 'history_date_ASC',
  HistoryDateDesc = 'history_date_DESC',
  HistoryActionAsc = 'history_action_ASC',
  HistoryActionDesc = 'history_action_DESC'
}

export type TicketClassifierHistoryRecordUpdateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  organization?: Maybe<Scalars['String']>;
  parent?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['JSON']>;
  name?: Maybe<Scalars['String']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['JSON']>;
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<TicketClassifierHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type TicketClassifierHistoryRecordsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<TicketClassifierHistoryRecordUpdateInput>;
};

export type TicketClassifierHistoryRecordCreateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  organization?: Maybe<Scalars['String']>;
  parent?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['JSON']>;
  name?: Maybe<Scalars['String']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['JSON']>;
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<TicketClassifierHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type TicketClassifierHistoryRecordsCreateInput = {
  data?: Maybe<TicketClassifierHistoryRecordCreateInput>;
};

/**  Ticket typification/classification. We have a organization specific classification. We check the ticket attrs differently depending on the classifier  */
export type TicketClassifier = {
  __typename?: 'TicketClassifier';
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the TicketClassifier List config, or
   *  2. As an alias to the field set on 'labelField' in the TicketClassifier List config, or
   *  3. As an alias to a 'name' field on the TicketClassifier List (if one exists), or
   *  4. As an alias to the 'id' field on the TicketClassifier List.
   */
  _label_?: Maybe<Scalars['String']>;
  /**  Data structure Version  */
  dv?: Maybe<Scalars['Int']>;
  /**  Client-side devise identification used for the anti-fraud detection. Example `{ dv: '1', fingerprint: 'VaxSw2aXZa'}`. Where the `fingerprint` should be the same for the same devices and it's not linked to the user ID. It's the device ID like browser / mobile application / remote system  */
  sender?: Maybe<Scalars['JSON']>;
  /**  Ref to the organization. If this ref is null the object is common for all organizations  */
  organization?: Maybe<Organization>;
  /**  Multi level classification support  */
  parent?: Maybe<TicketClassifier>;
  /**  Multi level name  */
  fullName?: Maybe<Scalars['String']>;
  /**  This level name  */
  name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<User>;
  updatedBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['String']>;
};

export type TicketClassifierWhereInput = {
  AND?: Maybe<Array<Maybe<TicketClassifierWhereInput>>>;
  OR?: Maybe<Array<Maybe<TicketClassifierWhereInput>>>;
  dv?: Maybe<Scalars['Int']>;
  dv_not?: Maybe<Scalars['Int']>;
  dv_lt?: Maybe<Scalars['Int']>;
  dv_lte?: Maybe<Scalars['Int']>;
  dv_gt?: Maybe<Scalars['Int']>;
  dv_gte?: Maybe<Scalars['Int']>;
  dv_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  dv_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sender?: Maybe<Scalars['JSON']>;
  sender_not?: Maybe<Scalars['JSON']>;
  sender_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  sender_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  organization?: Maybe<OrganizationWhereInput>;
  organization_is_null?: Maybe<Scalars['Boolean']>;
  parent?: Maybe<TicketClassifierWhereInput>;
  parent_is_null?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  v?: Maybe<Scalars['Int']>;
  v_not?: Maybe<Scalars['Int']>;
  v_lt?: Maybe<Scalars['Int']>;
  v_lte?: Maybe<Scalars['Int']>;
  v_gt?: Maybe<Scalars['Int']>;
  v_gte?: Maybe<Scalars['Int']>;
  v_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  v_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  createdAt?: Maybe<Scalars['String']>;
  createdAt_not?: Maybe<Scalars['String']>;
  createdAt_lt?: Maybe<Scalars['String']>;
  createdAt_lte?: Maybe<Scalars['String']>;
  createdAt_gt?: Maybe<Scalars['String']>;
  createdAt_gte?: Maybe<Scalars['String']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedAt_not?: Maybe<Scalars['String']>;
  updatedAt_lt?: Maybe<Scalars['String']>;
  updatedAt_lte?: Maybe<Scalars['String']>;
  updatedAt_gt?: Maybe<Scalars['String']>;
  updatedAt_gte?: Maybe<Scalars['String']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy?: Maybe<UserWhereInput>;
  createdBy_is_null?: Maybe<Scalars['Boolean']>;
  updatedBy?: Maybe<UserWhereInput>;
  updatedBy_is_null?: Maybe<Scalars['Boolean']>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedAt_not?: Maybe<Scalars['String']>;
  deletedAt_lt?: Maybe<Scalars['String']>;
  deletedAt_lte?: Maybe<Scalars['String']>;
  deletedAt_gt?: Maybe<Scalars['String']>;
  deletedAt_gte?: Maybe<Scalars['String']>;
  deletedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  deletedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  newId?: Maybe<Scalars['String']>;
  newId_not?: Maybe<Scalars['String']>;
  newId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  newId_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type TicketClassifierWhereUniqueInput = {
  id: Scalars['ID'];
};

export enum SortTicketClassifiersBy {
  DvAsc = 'dv_ASC',
  DvDesc = 'dv_DESC',
  OrganizationAsc = 'organization_ASC',
  OrganizationDesc = 'organization_DESC',
  ParentAsc = 'parent_ASC',
  ParentDesc = 'parent_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  VAsc = 'v_ASC',
  VDesc = 'v_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  CreatedByAsc = 'createdBy_ASC',
  CreatedByDesc = 'createdBy_DESC',
  UpdatedByAsc = 'updatedBy_ASC',
  UpdatedByDesc = 'updatedBy_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC'
}

export type TicketClassifierUpdateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  organization?: Maybe<OrganizationRelateToOneInput>;
  parent?: Maybe<TicketClassifierRelateToOneInput>;
  name?: Maybe<Scalars['String']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserRelateToOneInput>;
  updatedBy?: Maybe<UserRelateToOneInput>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['String']>;
};

export type TicketClassifiersUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<TicketClassifierUpdateInput>;
};

export type TicketClassifierCreateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  organization?: Maybe<OrganizationRelateToOneInput>;
  parent?: Maybe<TicketClassifierRelateToOneInput>;
  name?: Maybe<Scalars['String']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserRelateToOneInput>;
  updatedBy?: Maybe<UserRelateToOneInput>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['String']>;
};

export type TicketClassifiersCreateInput = {
  data?: Maybe<TicketClassifierCreateInput>;
};

export enum TicketStatusHistoryRecordHistoryActionType {
  C = 'c',
  U = 'u',
  D = 'd'
}

/**  A keystone list  */
export type TicketStatusHistoryRecord = {
  __typename?: 'TicketStatusHistoryRecord';
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the TicketStatusHistoryRecord List config, or
   *  2. As an alias to the field set on 'labelField' in the TicketStatusHistoryRecord List config, or
   *  3. As an alias to a 'name' field on the TicketStatusHistoryRecord List (if one exists), or
   *  4. As an alias to the 'id' field on the TicketStatusHistoryRecord List.
   */
  _label_?: Maybe<Scalars['String']>;
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  organization?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['JSON']>;
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<TicketStatusHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type TicketStatusHistoryRecordWhereInput = {
  AND?: Maybe<Array<Maybe<TicketStatusHistoryRecordWhereInput>>>;
  OR?: Maybe<Array<Maybe<TicketStatusHistoryRecordWhereInput>>>;
  dv?: Maybe<Scalars['Int']>;
  dv_not?: Maybe<Scalars['Int']>;
  dv_lt?: Maybe<Scalars['Int']>;
  dv_lte?: Maybe<Scalars['Int']>;
  dv_gt?: Maybe<Scalars['Int']>;
  dv_gte?: Maybe<Scalars['Int']>;
  dv_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  dv_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sender?: Maybe<Scalars['JSON']>;
  sender_not?: Maybe<Scalars['JSON']>;
  sender_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  sender_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  organization?: Maybe<Scalars['String']>;
  organization_not?: Maybe<Scalars['String']>;
  organization_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  organization_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<Scalars['String']>;
  type_not?: Maybe<Scalars['String']>;
  type_contains?: Maybe<Scalars['String']>;
  type_not_contains?: Maybe<Scalars['String']>;
  type_starts_with?: Maybe<Scalars['String']>;
  type_not_starts_with?: Maybe<Scalars['String']>;
  type_ends_with?: Maybe<Scalars['String']>;
  type_not_ends_with?: Maybe<Scalars['String']>;
  type_i?: Maybe<Scalars['String']>;
  type_not_i?: Maybe<Scalars['String']>;
  type_contains_i?: Maybe<Scalars['String']>;
  type_not_contains_i?: Maybe<Scalars['String']>;
  type_starts_with_i?: Maybe<Scalars['String']>;
  type_not_starts_with_i?: Maybe<Scalars['String']>;
  type_ends_with_i?: Maybe<Scalars['String']>;
  type_not_ends_with_i?: Maybe<Scalars['String']>;
  type_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  type_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  v?: Maybe<Scalars['Int']>;
  v_not?: Maybe<Scalars['Int']>;
  v_lt?: Maybe<Scalars['Int']>;
  v_lte?: Maybe<Scalars['Int']>;
  v_gt?: Maybe<Scalars['Int']>;
  v_gte?: Maybe<Scalars['Int']>;
  v_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  v_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  createdAt?: Maybe<Scalars['String']>;
  createdAt_not?: Maybe<Scalars['String']>;
  createdAt_lt?: Maybe<Scalars['String']>;
  createdAt_lte?: Maybe<Scalars['String']>;
  createdAt_gt?: Maybe<Scalars['String']>;
  createdAt_gte?: Maybe<Scalars['String']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedAt_not?: Maybe<Scalars['String']>;
  updatedAt_lt?: Maybe<Scalars['String']>;
  updatedAt_lte?: Maybe<Scalars['String']>;
  updatedAt_gt?: Maybe<Scalars['String']>;
  updatedAt_gte?: Maybe<Scalars['String']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy?: Maybe<Scalars['String']>;
  createdBy_not?: Maybe<Scalars['String']>;
  createdBy_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedBy?: Maybe<Scalars['String']>;
  updatedBy_not?: Maybe<Scalars['String']>;
  updatedBy_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedBy_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedAt_not?: Maybe<Scalars['String']>;
  deletedAt_lt?: Maybe<Scalars['String']>;
  deletedAt_lte?: Maybe<Scalars['String']>;
  deletedAt_gt?: Maybe<Scalars['String']>;
  deletedAt_gte?: Maybe<Scalars['String']>;
  deletedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  deletedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  newId?: Maybe<Scalars['JSON']>;
  newId_not?: Maybe<Scalars['JSON']>;
  newId_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  newId_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  history_date?: Maybe<Scalars['String']>;
  history_date_not?: Maybe<Scalars['String']>;
  history_date_lt?: Maybe<Scalars['String']>;
  history_date_lte?: Maybe<Scalars['String']>;
  history_date_gt?: Maybe<Scalars['String']>;
  history_date_gte?: Maybe<Scalars['String']>;
  history_date_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_date_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_action?: Maybe<TicketStatusHistoryRecordHistoryActionType>;
  history_action_not?: Maybe<TicketStatusHistoryRecordHistoryActionType>;
  history_action_in?: Maybe<Array<Maybe<TicketStatusHistoryRecordHistoryActionType>>>;
  history_action_not_in?: Maybe<Array<Maybe<TicketStatusHistoryRecordHistoryActionType>>>;
  history_id?: Maybe<Scalars['String']>;
  history_id_not?: Maybe<Scalars['String']>;
  history_id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  history_id_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type TicketStatusHistoryRecordWhereUniqueInput = {
  id: Scalars['ID'];
};

export enum SortTicketStatusHistoryRecordsBy {
  DvAsc = 'dv_ASC',
  DvDesc = 'dv_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  VAsc = 'v_ASC',
  VDesc = 'v_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  HistoryDateAsc = 'history_date_ASC',
  HistoryDateDesc = 'history_date_DESC',
  HistoryActionAsc = 'history_action_ASC',
  HistoryActionDesc = 'history_action_DESC'
}

export type TicketStatusHistoryRecordUpdateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  organization?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['JSON']>;
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<TicketStatusHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type TicketStatusHistoryRecordsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<TicketStatusHistoryRecordUpdateInput>;
};

export type TicketStatusHistoryRecordCreateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  organization?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['JSON']>;
  history_date?: Maybe<Scalars['String']>;
  history_action?: Maybe<TicketStatusHistoryRecordHistoryActionType>;
  history_id?: Maybe<Scalars['String']>;
};

export type TicketStatusHistoryRecordsCreateInput = {
  data?: Maybe<TicketStatusHistoryRecordCreateInput>;
};

export enum TicketStatusTypeType {
  NewOrReopened = 'new_or_reopened',
  Processing = 'processing',
  Canceled = 'canceled',
  Completed = 'completed',
  Deferred = 'deferred'
}

/**  Ticket status. We have a organization specific statuses  */
export type TicketStatus = {
  __typename?: 'TicketStatus';
  /**
   * This virtual field will be resolved in one of the following ways (in this order):
   *  1. Execution of 'labelResolver' set on the TicketStatus List config, or
   *  2. As an alias to the field set on 'labelField' in the TicketStatus List config, or
   *  3. As an alias to a 'name' field on the TicketStatus List (if one exists), or
   *  4. As an alias to the 'id' field on the TicketStatus List.
   */
  _label_?: Maybe<Scalars['String']>;
  /**  Data structure Version  */
  dv?: Maybe<Scalars['Int']>;
  /**  Client-side devise identification used for the anti-fraud detection. Example `{ dv: '1', fingerprint: 'VaxSw2aXZa'}`. Where the `fingerprint` should be the same for the same devices and it's not linked to the user ID. It's the device ID like browser / mobile application / remote system  */
  sender?: Maybe<Scalars['JSON']>;
  /**  Ref to the organization. If this ref is null the object is common for all organizations  */
  organization?: Maybe<Organization>;
  /**  Ticket status. You should also increase `statusReopenedCounter` if you want to reopen ticket  */
  type?: Maybe<TicketStatusTypeType>;
  name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<User>;
  updatedBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['String']>;
};

export type TicketStatusWhereInput = {
  AND?: Maybe<Array<Maybe<TicketStatusWhereInput>>>;
  OR?: Maybe<Array<Maybe<TicketStatusWhereInput>>>;
  dv?: Maybe<Scalars['Int']>;
  dv_not?: Maybe<Scalars['Int']>;
  dv_lt?: Maybe<Scalars['Int']>;
  dv_lte?: Maybe<Scalars['Int']>;
  dv_gt?: Maybe<Scalars['Int']>;
  dv_gte?: Maybe<Scalars['Int']>;
  dv_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  dv_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sender?: Maybe<Scalars['JSON']>;
  sender_not?: Maybe<Scalars['JSON']>;
  sender_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  sender_not_in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  organization?: Maybe<OrganizationWhereInput>;
  organization_is_null?: Maybe<Scalars['Boolean']>;
  type?: Maybe<TicketStatusTypeType>;
  type_not?: Maybe<TicketStatusTypeType>;
  type_in?: Maybe<Array<Maybe<TicketStatusTypeType>>>;
  type_not_in?: Maybe<Array<Maybe<TicketStatusTypeType>>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  v?: Maybe<Scalars['Int']>;
  v_not?: Maybe<Scalars['Int']>;
  v_lt?: Maybe<Scalars['Int']>;
  v_lte?: Maybe<Scalars['Int']>;
  v_gt?: Maybe<Scalars['Int']>;
  v_gte?: Maybe<Scalars['Int']>;
  v_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  v_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  createdAt?: Maybe<Scalars['String']>;
  createdAt_not?: Maybe<Scalars['String']>;
  createdAt_lt?: Maybe<Scalars['String']>;
  createdAt_lte?: Maybe<Scalars['String']>;
  createdAt_gt?: Maybe<Scalars['String']>;
  createdAt_gte?: Maybe<Scalars['String']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedAt_not?: Maybe<Scalars['String']>;
  updatedAt_lt?: Maybe<Scalars['String']>;
  updatedAt_lte?: Maybe<Scalars['String']>;
  updatedAt_gt?: Maybe<Scalars['String']>;
  updatedAt_gte?: Maybe<Scalars['String']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdBy?: Maybe<UserWhereInput>;
  createdBy_is_null?: Maybe<Scalars['Boolean']>;
  updatedBy?: Maybe<UserWhereInput>;
  updatedBy_is_null?: Maybe<Scalars['Boolean']>;
  deletedAt?: Maybe<Scalars['String']>;
  deletedAt_not?: Maybe<Scalars['String']>;
  deletedAt_lt?: Maybe<Scalars['String']>;
  deletedAt_lte?: Maybe<Scalars['String']>;
  deletedAt_gt?: Maybe<Scalars['String']>;
  deletedAt_gte?: Maybe<Scalars['String']>;
  deletedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  deletedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  newId?: Maybe<Scalars['String']>;
  newId_not?: Maybe<Scalars['String']>;
  newId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  newId_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type TicketStatusWhereUniqueInput = {
  id: Scalars['ID'];
};

export enum SortTicketStatusesBy {
  DvAsc = 'dv_ASC',
  DvDesc = 'dv_DESC',
  OrganizationAsc = 'organization_ASC',
  OrganizationDesc = 'organization_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  VAsc = 'v_ASC',
  VDesc = 'v_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  CreatedByAsc = 'createdBy_ASC',
  CreatedByDesc = 'createdBy_DESC',
  UpdatedByAsc = 'updatedBy_ASC',
  UpdatedByDesc = 'updatedBy_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC'
}

export type TicketStatusUpdateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  organization?: Maybe<OrganizationRelateToOneInput>;
  type?: Maybe<TicketStatusTypeType>;
  name?: Maybe<Scalars['String']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserRelateToOneInput>;
  updatedBy?: Maybe<UserRelateToOneInput>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['String']>;
};

export type TicketStatusesUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<TicketStatusUpdateInput>;
};

export type TicketStatusCreateInput = {
  dv?: Maybe<Scalars['Int']>;
  sender?: Maybe<Scalars['JSON']>;
  organization?: Maybe<OrganizationRelateToOneInput>;
  type?: Maybe<TicketStatusTypeType>;
  name?: Maybe<Scalars['String']>;
  v?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserRelateToOneInput>;
  updatedBy?: Maybe<UserRelateToOneInput>;
  deletedAt?: Maybe<Scalars['String']>;
  newId?: Maybe<Scalars['String']>;
};

export type TicketStatusesCreateInput = {
  data?: Maybe<TicketStatusCreateInput>;
};


export type _ListAccess = {
  __typename?: '_ListAccess';
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'create' operations.
   * NOTE: 'create' can only return a Boolean.
   * It is not possible to specify a declarative Where clause for this
   * operation
   */
  create?: Maybe<Scalars['Boolean']>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'read' operations.
   */
  read?: Maybe<Scalars['JSON']>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'update' operations.
   */
  update?: Maybe<Scalars['JSON']>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'delete' operations.
   */
  delete?: Maybe<Scalars['JSON']>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'auth' operations.
   */
  auth?: Maybe<Scalars['JSON']>;
};

export type _ListQueries = {
  __typename?: '_ListQueries';
  /** Single-item query name */
  item?: Maybe<Scalars['String']>;
  /** All-items query name */
  list?: Maybe<Scalars['String']>;
  /** List metadata query name */
  meta?: Maybe<Scalars['String']>;
};

export type _ListMutations = {
  __typename?: '_ListMutations';
  /** Create mutation name */
  create?: Maybe<Scalars['String']>;
  /** Create many mutation name */
  createMany?: Maybe<Scalars['String']>;
  /** Update mutation name */
  update?: Maybe<Scalars['String']>;
  /** Update many mutation name */
  updateMany?: Maybe<Scalars['String']>;
  /** Delete mutation name */
  delete?: Maybe<Scalars['String']>;
  /** Delete many mutation name */
  deleteMany?: Maybe<Scalars['String']>;
};

export type _ListInputTypes = {
  __typename?: '_ListInputTypes';
  /** Input type for matching multiple items */
  whereInput?: Maybe<Scalars['String']>;
  /** Input type for matching a unique item */
  whereUniqueInput?: Maybe<Scalars['String']>;
  /** Create mutation input type name */
  createInput?: Maybe<Scalars['String']>;
  /** Create many mutation input type name */
  createManyInput?: Maybe<Scalars['String']>;
  /** Update mutation name input */
  updateInput?: Maybe<Scalars['String']>;
  /** Update many mutation name input */
  updateManyInput?: Maybe<Scalars['String']>;
};

export type _ListSchemaFields = {
  __typename?: '_ListSchemaFields';
  /** The path of the field in its list */
  path?: Maybe<Scalars['String']>;
  /**
   * The name of the field in its list
   * @deprecated Use `path` instead
   */
  name?: Maybe<Scalars['String']>;
  /** The field type (ie, Checkbox, Text, etc) */
  type?: Maybe<Scalars['String']>;
};

export type _ListSchemaRelatedFields = {
  __typename?: '_ListSchemaRelatedFields';
  /** The typename as used in GraphQL queries */
  type?: Maybe<Scalars['String']>;
  /** A list of GraphQL field names */
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type _ListSchema = {
  __typename?: '_ListSchema';
  /** The typename as used in GraphQL queries */
  type?: Maybe<Scalars['String']>;
  /**
   * Top level GraphQL query names which either return this type, or
   * provide aggregate information about this type
   */
  queries?: Maybe<_ListQueries>;
  /** Top-level GraphQL mutation names */
  mutations?: Maybe<_ListMutations>;
  /** Top-level GraphQL input types */
  inputTypes?: Maybe<_ListInputTypes>;
  /** Information about fields defined on this list */
  fields?: Maybe<Array<Maybe<_ListSchemaFields>>>;
  /**
   * Information about fields on other types which return this type, or
   * provide aggregate information about this type
   */
  relatedFields?: Maybe<Array<Maybe<_ListSchemaRelatedFields>>>;
};


export type _ListSchemaFieldsArgs = {
  where?: Maybe<_ListSchemaFieldsInput>;
};

export type _ListMeta = {
  __typename?: '_ListMeta';
  /** The Keystone list key */
  key?: Maybe<Scalars['String']>;
  /**
   * The Keystone List name
   * @deprecated Use `key` instead
   */
  name?: Maybe<Scalars['String']>;
  /** The list's user-facing description */
  description?: Maybe<Scalars['String']>;
  /** The list's display name in the Admin UI */
  label?: Maybe<Scalars['String']>;
  /** The list's singular display name */
  singular?: Maybe<Scalars['String']>;
  /** The list's plural display name */
  plural?: Maybe<Scalars['String']>;
  /** The list's data path */
  path?: Maybe<Scalars['String']>;
  /** Access control configuration for the currently authenticated request */
  access?: Maybe<_ListAccess>;
  /** Information on the generated GraphQL schema */
  schema?: Maybe<_ListSchema>;
};

export type _QueryMeta = {
  __typename?: '_QueryMeta';
  count?: Maybe<Scalars['Int']>;
};

export type _KsListsMetaInput = {
  key?: Maybe<Scalars['String']>;
  /** Whether this is an auxiliary helper list */
  auxiliary?: Maybe<Scalars['Boolean']>;
};

export type _ListSchemaFieldsInput = {
  type?: Maybe<Scalars['String']>;
};

export type RegisterNewUserInput = {
  dv: Scalars['Int'];
  sender: Scalars['JSON'];
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  firebaseIdToken?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['JSON']>;
};

export type AuthenticateUserWithFirebaseIdTokenInput = {
  firebaseIdToken: Scalars['String'];
};

export type AuthenticateUserWithFirebaseIdTokenOutput = {
  __typename?: 'AuthenticateUserWithFirebaseIdTokenOutput';
  item?: Maybe<User>;
};

export type RegisterNewOrganizationInput = {
  dv: Scalars['Int'];
  sender: Scalars['JSON'];
  country: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  meta: Scalars['JSON'];
  avatar?: Maybe<Scalars['Upload']>;
};

export type InviteNewOrganizationEmployeeInput = {
  dv: Scalars['Int'];
  sender: Scalars['JSON'];
  organization: OrganizationWhereUniqueInput;
  email: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type AcceptOrRejectOrganizationInviteInput = {
  dv: Scalars['Int'];
  sender: Scalars['JSON'];
  isRejected?: Maybe<Scalars['Boolean']>;
  isAccepted?: Maybe<Scalars['Boolean']>;
};

export type UnauthenticateUserOutput = {
  __typename?: 'unauthenticateUserOutput';
  /**
   * `true` when unauthentication succeeds.
   * NOTE: unauthentication always succeeds when the request has an invalid or missing authentication token.
   */
  success?: Maybe<Scalars['Boolean']>;
};

export type AuthenticateUserOutput = {
  __typename?: 'authenticateUserOutput';
  /**  Used to make subsequent authenticated requests by setting this token in a header: 'Authorization: Bearer <token>'.  */
  token?: Maybe<Scalars['String']>;
  /**  Retrieve information on the newly authenticated User here.  */
  item?: Maybe<User>;
};

export type Query = {
  __typename?: 'Query';
  /**  Search for all UserHistoryRecord items which match the where clause.  */
  allUserHistoryRecords?: Maybe<Array<Maybe<UserHistoryRecord>>>;
  /**  Search for the UserHistoryRecord item with the matching ID.  */
  UserHistoryRecord?: Maybe<UserHistoryRecord>;
  /**  Perform a meta-query on all UserHistoryRecord items which match the where clause.  */
  _allUserHistoryRecordsMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the UserHistoryRecord list.  */
  _UserHistoryRecordsMeta?: Maybe<_ListMeta>;
  /**  Search for all User items which match the where clause.  */
  allUsers?: Maybe<Array<Maybe<User>>>;
  /**  Search for the User item with the matching ID.  */
  User?: Maybe<User>;
  /**  Perform a meta-query on all User items which match the where clause.  */
  _allUsersMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the User list.  */
  _UsersMeta?: Maybe<_ListMeta>;
  /**  Search for all ForgotPasswordActionHistoryRecord items which match the where clause.  */
  allForgotPasswordActionHistoryRecords?: Maybe<Array<Maybe<ForgotPasswordActionHistoryRecord>>>;
  /**  Search for the ForgotPasswordActionHistoryRecord item with the matching ID.  */
  ForgotPasswordActionHistoryRecord?: Maybe<ForgotPasswordActionHistoryRecord>;
  /**  Perform a meta-query on all ForgotPasswordActionHistoryRecord items which match the where clause.  */
  _allForgotPasswordActionHistoryRecordsMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the ForgotPasswordActionHistoryRecord list.  */
  _ForgotPasswordActionHistoryRecordsMeta?: Maybe<_ListMeta>;
  /**  Search for all ForgotPasswordAction items which match the where clause.  */
  allForgotPasswordActions?: Maybe<Array<Maybe<ForgotPasswordAction>>>;
  /**  Search for the ForgotPasswordAction item with the matching ID.  */
  ForgotPasswordAction?: Maybe<ForgotPasswordAction>;
  /**  Perform a meta-query on all ForgotPasswordAction items which match the where clause.  */
  _allForgotPasswordActionsMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the ForgotPasswordAction list.  */
  _ForgotPasswordActionsMeta?: Maybe<_ListMeta>;
  /**  Search for all OrganizationHistoryRecord items which match the where clause.  */
  allOrganizationHistoryRecords?: Maybe<Array<Maybe<OrganizationHistoryRecord>>>;
  /**  Search for the OrganizationHistoryRecord item with the matching ID.  */
  OrganizationHistoryRecord?: Maybe<OrganizationHistoryRecord>;
  /**  Perform a meta-query on all OrganizationHistoryRecord items which match the where clause.  */
  _allOrganizationHistoryRecordsMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the OrganizationHistoryRecord list.  */
  _OrganizationHistoryRecordsMeta?: Maybe<_ListMeta>;
  /**  Search for all Organization items which match the where clause.  */
  allOrganizations?: Maybe<Array<Maybe<Organization>>>;
  /**  Search for the Organization item with the matching ID.  */
  Organization?: Maybe<Organization>;
  /**  Perform a meta-query on all Organization items which match the where clause.  */
  _allOrganizationsMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the Organization list.  */
  _OrganizationsMeta?: Maybe<_ListMeta>;
  /**  Search for all OrganizationEmployeeHistoryRecord items which match the where clause.  */
  allOrganizationEmployeeHistoryRecords?: Maybe<Array<Maybe<OrganizationEmployeeHistoryRecord>>>;
  /**  Search for the OrganizationEmployeeHistoryRecord item with the matching ID.  */
  OrganizationEmployeeHistoryRecord?: Maybe<OrganizationEmployeeHistoryRecord>;
  /**  Perform a meta-query on all OrganizationEmployeeHistoryRecord items which match the where clause.  */
  _allOrganizationEmployeeHistoryRecordsMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the OrganizationEmployeeHistoryRecord list.  */
  _OrganizationEmployeeHistoryRecordsMeta?: Maybe<_ListMeta>;
  /**  Search for all OrganizationEmployee items which match the where clause.  */
  allOrganizationEmployees?: Maybe<Array<Maybe<OrganizationEmployee>>>;
  /**  Search for the OrganizationEmployee item with the matching ID.  */
  OrganizationEmployee?: Maybe<OrganizationEmployee>;
  /**  Perform a meta-query on all OrganizationEmployee items which match the where clause.  */
  _allOrganizationEmployeesMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the OrganizationEmployee list.  */
  _OrganizationEmployeesMeta?: Maybe<_ListMeta>;
  /**  Search for all OrganizationEmployeeRoleHistoryRecord items which match the where clause.  */
  allOrganizationEmployeeRoleHistoryRecords?: Maybe<Array<Maybe<OrganizationEmployeeRoleHistoryRecord>>>;
  /**  Search for the OrganizationEmployeeRoleHistoryRecord item with the matching ID.  */
  OrganizationEmployeeRoleHistoryRecord?: Maybe<OrganizationEmployeeRoleHistoryRecord>;
  /**  Perform a meta-query on all OrganizationEmployeeRoleHistoryRecord items which match the where clause.  */
  _allOrganizationEmployeeRoleHistoryRecordsMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the OrganizationEmployeeRoleHistoryRecord list.  */
  _OrganizationEmployeeRoleHistoryRecordsMeta?: Maybe<_ListMeta>;
  /**  Search for all OrganizationEmployeeRole items which match the where clause.  */
  allOrganizationEmployeeRoles?: Maybe<Array<Maybe<OrganizationEmployeeRole>>>;
  /**  Search for the OrganizationEmployeeRole item with the matching ID.  */
  OrganizationEmployeeRole?: Maybe<OrganizationEmployeeRole>;
  /**  Perform a meta-query on all OrganizationEmployeeRole items which match the where clause.  */
  _allOrganizationEmployeeRolesMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the OrganizationEmployeeRole list.  */
  _OrganizationEmployeeRolesMeta?: Maybe<_ListMeta>;
  /**  Search for all PropertyHistoryRecord items which match the where clause.  */
  allPropertyHistoryRecords?: Maybe<Array<Maybe<PropertyHistoryRecord>>>;
  /**  Search for the PropertyHistoryRecord item with the matching ID.  */
  PropertyHistoryRecord?: Maybe<PropertyHistoryRecord>;
  /**  Perform a meta-query on all PropertyHistoryRecord items which match the where clause.  */
  _allPropertyHistoryRecordsMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the PropertyHistoryRecord list.  */
  _PropertyHistoryRecordsMeta?: Maybe<_ListMeta>;
  /**  Search for all Property items which match the where clause.  */
  allProperties?: Maybe<Array<Maybe<Property>>>;
  /**  Search for the Property item with the matching ID.  */
  Property?: Maybe<Property>;
  /**  Perform a meta-query on all Property items which match the where clause.  */
  _allPropertiesMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the Property list.  */
  _PropertiesMeta?: Maybe<_ListMeta>;
  /**  Search for all BillingIntegrationHistoryRecord items which match the where clause.  */
  allBillingIntegrationHistoryRecords?: Maybe<Array<Maybe<BillingIntegrationHistoryRecord>>>;
  /**  Search for the BillingIntegrationHistoryRecord item with the matching ID.  */
  BillingIntegrationHistoryRecord?: Maybe<BillingIntegrationHistoryRecord>;
  /**  Perform a meta-query on all BillingIntegrationHistoryRecord items which match the where clause.  */
  _allBillingIntegrationHistoryRecordsMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the BillingIntegrationHistoryRecord list.  */
  _BillingIntegrationHistoryRecordsMeta?: Maybe<_ListMeta>;
  /**  Search for all BillingIntegration items which match the where clause.  */
  allBillingIntegrations?: Maybe<Array<Maybe<BillingIntegration>>>;
  /**  Search for the BillingIntegration item with the matching ID.  */
  BillingIntegration?: Maybe<BillingIntegration>;
  /**  Perform a meta-query on all BillingIntegration items which match the where clause.  */
  _allBillingIntegrationsMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the BillingIntegration list.  */
  _BillingIntegrationsMeta?: Maybe<_ListMeta>;
  /**  Search for all BillingIntegrationAccessRightHistoryRecord items which match the where clause.  */
  allBillingIntegrationAccessRightHistoryRecords?: Maybe<Array<Maybe<BillingIntegrationAccessRightHistoryRecord>>>;
  /**  Search for the BillingIntegrationAccessRightHistoryRecord item with the matching ID.  */
  BillingIntegrationAccessRightHistoryRecord?: Maybe<BillingIntegrationAccessRightHistoryRecord>;
  /**  Perform a meta-query on all BillingIntegrationAccessRightHistoryRecord items which match the where clause.  */
  _allBillingIntegrationAccessRightHistoryRecordsMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the BillingIntegrationAccessRightHistoryRecord list.  */
  _BillingIntegrationAccessRightHistoryRecordsMeta?: Maybe<_ListMeta>;
  /**  Search for all BillingIntegrationAccessRight items which match the where clause.  */
  allBillingIntegrationAccessRights?: Maybe<Array<Maybe<BillingIntegrationAccessRight>>>;
  /**  Search for the BillingIntegrationAccessRight item with the matching ID.  */
  BillingIntegrationAccessRight?: Maybe<BillingIntegrationAccessRight>;
  /**  Perform a meta-query on all BillingIntegrationAccessRight items which match the where clause.  */
  _allBillingIntegrationAccessRightsMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the BillingIntegrationAccessRight list.  */
  _BillingIntegrationAccessRightsMeta?: Maybe<_ListMeta>;
  /**  Search for all BillingIntegrationOrganizationContextHistoryRecord items which match the where clause.  */
  allBillingIntegrationOrganizationContextHistoryRecords?: Maybe<Array<Maybe<BillingIntegrationOrganizationContextHistoryRecord>>>;
  /**  Search for the BillingIntegrationOrganizationContextHistoryRecord item with the matching ID.  */
  BillingIntegrationOrganizationContextHistoryRecord?: Maybe<BillingIntegrationOrganizationContextHistoryRecord>;
  /**  Perform a meta-query on all BillingIntegrationOrganizationContextHistoryRecord items which match the where clause.  */
  _allBillingIntegrationOrganizationContextHistoryRecordsMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the BillingIntegrationOrganizationContextHistoryRecord list.  */
  _BillingIntegrationOrganizationContextHistoryRecordsMeta?: Maybe<_ListMeta>;
  /**  Search for all BillingIntegrationOrganizationContext items which match the where clause.  */
  allBillingIntegrationOrganizationContexts?: Maybe<Array<Maybe<BillingIntegrationOrganizationContext>>>;
  /**  Search for the BillingIntegrationOrganizationContext item with the matching ID.  */
  BillingIntegrationOrganizationContext?: Maybe<BillingIntegrationOrganizationContext>;
  /**  Perform a meta-query on all BillingIntegrationOrganizationContext items which match the where clause.  */
  _allBillingIntegrationOrganizationContextsMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the BillingIntegrationOrganizationContext list.  */
  _BillingIntegrationOrganizationContextsMeta?: Maybe<_ListMeta>;
  /**  Search for all BillingIntegrationLog items which match the where clause.  */
  allBillingIntegrationLogs?: Maybe<Array<Maybe<BillingIntegrationLog>>>;
  /**  Search for the BillingIntegrationLog item with the matching ID.  */
  BillingIntegrationLog?: Maybe<BillingIntegrationLog>;
  /**  Perform a meta-query on all BillingIntegrationLog items which match the where clause.  */
  _allBillingIntegrationLogsMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the BillingIntegrationLog list.  */
  _BillingIntegrationLogsMeta?: Maybe<_ListMeta>;
  /**  Search for all BillingPropertyHistoryRecord items which match the where clause.  */
  allBillingPropertyHistoryRecords?: Maybe<Array<Maybe<BillingPropertyHistoryRecord>>>;
  /**  Search for the BillingPropertyHistoryRecord item with the matching ID.  */
  BillingPropertyHistoryRecord?: Maybe<BillingPropertyHistoryRecord>;
  /**  Perform a meta-query on all BillingPropertyHistoryRecord items which match the where clause.  */
  _allBillingPropertyHistoryRecordsMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the BillingPropertyHistoryRecord list.  */
  _BillingPropertyHistoryRecordsMeta?: Maybe<_ListMeta>;
  /**  Search for all BillingProperty items which match the where clause.  */
  allBillingProperties?: Maybe<Array<Maybe<BillingProperty>>>;
  /**  Search for the BillingProperty item with the matching ID.  */
  BillingProperty?: Maybe<BillingProperty>;
  /**  Perform a meta-query on all BillingProperty items which match the where clause.  */
  _allBillingPropertiesMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the BillingProperty list.  */
  _BillingPropertiesMeta?: Maybe<_ListMeta>;
  /**  Search for all BillingAccountHistoryRecord items which match the where clause.  */
  allBillingAccountHistoryRecords?: Maybe<Array<Maybe<BillingAccountHistoryRecord>>>;
  /**  Search for the BillingAccountHistoryRecord item with the matching ID.  */
  BillingAccountHistoryRecord?: Maybe<BillingAccountHistoryRecord>;
  /**  Perform a meta-query on all BillingAccountHistoryRecord items which match the where clause.  */
  _allBillingAccountHistoryRecordsMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the BillingAccountHistoryRecord list.  */
  _BillingAccountHistoryRecordsMeta?: Maybe<_ListMeta>;
  /**  Search for all BillingAccount items which match the where clause.  */
  allBillingAccounts?: Maybe<Array<Maybe<BillingAccount>>>;
  /**  Search for the BillingAccount item with the matching ID.  */
  BillingAccount?: Maybe<BillingAccount>;
  /**  Perform a meta-query on all BillingAccount items which match the where clause.  */
  _allBillingAccountsMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the BillingAccount list.  */
  _BillingAccountsMeta?: Maybe<_ListMeta>;
  /**  Search for all BillingMeterResourceHistoryRecord items which match the where clause.  */
  allBillingMeterResourceHistoryRecords?: Maybe<Array<Maybe<BillingMeterResourceHistoryRecord>>>;
  /**  Search for the BillingMeterResourceHistoryRecord item with the matching ID.  */
  BillingMeterResourceHistoryRecord?: Maybe<BillingMeterResourceHistoryRecord>;
  /**  Perform a meta-query on all BillingMeterResourceHistoryRecord items which match the where clause.  */
  _allBillingMeterResourceHistoryRecordsMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the BillingMeterResourceHistoryRecord list.  */
  _BillingMeterResourceHistoryRecordsMeta?: Maybe<_ListMeta>;
  /**  Search for all BillingMeterResource items which match the where clause.  */
  allBillingMeterResources?: Maybe<Array<Maybe<BillingMeterResource>>>;
  /**  Search for the BillingMeterResource item with the matching ID.  */
  BillingMeterResource?: Maybe<BillingMeterResource>;
  /**  Perform a meta-query on all BillingMeterResource items which match the where clause.  */
  _allBillingMeterResourcesMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the BillingMeterResource list.  */
  _BillingMeterResourcesMeta?: Maybe<_ListMeta>;
  /**  Search for all BillingAccountMeterHistoryRecord items which match the where clause.  */
  allBillingAccountMeterHistoryRecords?: Maybe<Array<Maybe<BillingAccountMeterHistoryRecord>>>;
  /**  Search for the BillingAccountMeterHistoryRecord item with the matching ID.  */
  BillingAccountMeterHistoryRecord?: Maybe<BillingAccountMeterHistoryRecord>;
  /**  Perform a meta-query on all BillingAccountMeterHistoryRecord items which match the where clause.  */
  _allBillingAccountMeterHistoryRecordsMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the BillingAccountMeterHistoryRecord list.  */
  _BillingAccountMeterHistoryRecordsMeta?: Maybe<_ListMeta>;
  /**  Search for all BillingAccountMeter items which match the where clause.  */
  allBillingAccountMeters?: Maybe<Array<Maybe<BillingAccountMeter>>>;
  /**  Search for the BillingAccountMeter item with the matching ID.  */
  BillingAccountMeter?: Maybe<BillingAccountMeter>;
  /**  Perform a meta-query on all BillingAccountMeter items which match the where clause.  */
  _allBillingAccountMetersMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the BillingAccountMeter list.  */
  _BillingAccountMetersMeta?: Maybe<_ListMeta>;
  /**  Search for all BillingAccountMeterReadingHistoryRecord items which match the where clause.  */
  allBillingAccountMeterReadingHistoryRecords?: Maybe<Array<Maybe<BillingAccountMeterReadingHistoryRecord>>>;
  /**  Search for the BillingAccountMeterReadingHistoryRecord item with the matching ID.  */
  BillingAccountMeterReadingHistoryRecord?: Maybe<BillingAccountMeterReadingHistoryRecord>;
  /**  Perform a meta-query on all BillingAccountMeterReadingHistoryRecord items which match the where clause.  */
  _allBillingAccountMeterReadingHistoryRecordsMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the BillingAccountMeterReadingHistoryRecord list.  */
  _BillingAccountMeterReadingHistoryRecordsMeta?: Maybe<_ListMeta>;
  /**  Search for all BillingAccountMeterReading items which match the where clause.  */
  allBillingAccountMeterReadings?: Maybe<Array<Maybe<BillingAccountMeterReading>>>;
  /**  Search for the BillingAccountMeterReading item with the matching ID.  */
  BillingAccountMeterReading?: Maybe<BillingAccountMeterReading>;
  /**  Perform a meta-query on all BillingAccountMeterReading items which match the where clause.  */
  _allBillingAccountMeterReadingsMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the BillingAccountMeterReading list.  */
  _BillingAccountMeterReadingsMeta?: Maybe<_ListMeta>;
  /**  Search for all BillingReceiptHistoryRecord items which match the where clause.  */
  allBillingReceiptHistoryRecords?: Maybe<Array<Maybe<BillingReceiptHistoryRecord>>>;
  /**  Search for the BillingReceiptHistoryRecord item with the matching ID.  */
  BillingReceiptHistoryRecord?: Maybe<BillingReceiptHistoryRecord>;
  /**  Perform a meta-query on all BillingReceiptHistoryRecord items which match the where clause.  */
  _allBillingReceiptHistoryRecordsMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the BillingReceiptHistoryRecord list.  */
  _BillingReceiptHistoryRecordsMeta?: Maybe<_ListMeta>;
  /**  Search for all BillingReceipt items which match the where clause.  */
  allBillingReceipts?: Maybe<Array<Maybe<BillingReceipt>>>;
  /**  Search for the BillingReceipt item with the matching ID.  */
  BillingReceipt?: Maybe<BillingReceipt>;
  /**  Perform a meta-query on all BillingReceipt items which match the where clause.  */
  _allBillingReceiptsMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the BillingReceipt list.  */
  _BillingReceiptsMeta?: Maybe<_ListMeta>;
  /**  Search for all TicketHistoryRecord items which match the where clause.  */
  allTicketHistoryRecords?: Maybe<Array<Maybe<TicketHistoryRecord>>>;
  /**  Search for the TicketHistoryRecord item with the matching ID.  */
  TicketHistoryRecord?: Maybe<TicketHistoryRecord>;
  /**  Perform a meta-query on all TicketHistoryRecord items which match the where clause.  */
  _allTicketHistoryRecordsMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the TicketHistoryRecord list.  */
  _TicketHistoryRecordsMeta?: Maybe<_ListMeta>;
  /**  Search for all Ticket items which match the where clause.  */
  allTickets?: Maybe<Array<Maybe<Ticket>>>;
  /**  Search for the Ticket item with the matching ID.  */
  Ticket?: Maybe<Ticket>;
  /**  Perform a meta-query on all Ticket items which match the where clause.  */
  _allTicketsMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the Ticket list.  */
  _TicketsMeta?: Maybe<_ListMeta>;
  /**  Search for all TicketSourceHistoryRecord items which match the where clause.  */
  allTicketSourceHistoryRecords?: Maybe<Array<Maybe<TicketSourceHistoryRecord>>>;
  /**  Search for the TicketSourceHistoryRecord item with the matching ID.  */
  TicketSourceHistoryRecord?: Maybe<TicketSourceHistoryRecord>;
  /**  Perform a meta-query on all TicketSourceHistoryRecord items which match the where clause.  */
  _allTicketSourceHistoryRecordsMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the TicketSourceHistoryRecord list.  */
  _TicketSourceHistoryRecordsMeta?: Maybe<_ListMeta>;
  /**  Search for all TicketSource items which match the where clause.  */
  allTicketSources?: Maybe<Array<Maybe<TicketSource>>>;
  /**  Search for the TicketSource item with the matching ID.  */
  TicketSource?: Maybe<TicketSource>;
  /**  Perform a meta-query on all TicketSource items which match the where clause.  */
  _allTicketSourcesMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the TicketSource list.  */
  _TicketSourcesMeta?: Maybe<_ListMeta>;
  /**  Search for all TicketClassifierHistoryRecord items which match the where clause.  */
  allTicketClassifierHistoryRecords?: Maybe<Array<Maybe<TicketClassifierHistoryRecord>>>;
  /**  Search for the TicketClassifierHistoryRecord item with the matching ID.  */
  TicketClassifierHistoryRecord?: Maybe<TicketClassifierHistoryRecord>;
  /**  Perform a meta-query on all TicketClassifierHistoryRecord items which match the where clause.  */
  _allTicketClassifierHistoryRecordsMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the TicketClassifierHistoryRecord list.  */
  _TicketClassifierHistoryRecordsMeta?: Maybe<_ListMeta>;
  /**  Search for all TicketClassifier items which match the where clause.  */
  allTicketClassifiers?: Maybe<Array<Maybe<TicketClassifier>>>;
  /**  Search for the TicketClassifier item with the matching ID.  */
  TicketClassifier?: Maybe<TicketClassifier>;
  /**  Perform a meta-query on all TicketClassifier items which match the where clause.  */
  _allTicketClassifiersMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the TicketClassifier list.  */
  _TicketClassifiersMeta?: Maybe<_ListMeta>;
  /**  Search for all TicketStatusHistoryRecord items which match the where clause.  */
  allTicketStatusHistoryRecords?: Maybe<Array<Maybe<TicketStatusHistoryRecord>>>;
  /**  Search for the TicketStatusHistoryRecord item with the matching ID.  */
  TicketStatusHistoryRecord?: Maybe<TicketStatusHistoryRecord>;
  /**  Perform a meta-query on all TicketStatusHistoryRecord items which match the where clause.  */
  _allTicketStatusHistoryRecordsMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the TicketStatusHistoryRecord list.  */
  _TicketStatusHistoryRecordsMeta?: Maybe<_ListMeta>;
  /**  Search for all TicketStatus items which match the where clause.  */
  allTicketStatuses?: Maybe<Array<Maybe<TicketStatus>>>;
  /**  Search for the TicketStatus item with the matching ID.  */
  TicketStatus?: Maybe<TicketStatus>;
  /**  Perform a meta-query on all TicketStatus items which match the where clause.  */
  _allTicketStatusesMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the TicketStatus list.  */
  _TicketStatusesMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for all lists.  */
  _ksListsMeta?: Maybe<Array<Maybe<_ListMeta>>>;
  /** The version of the Keystone application serving this API. */
  appVersion?: Maybe<Scalars['String']>;
  authenticatedUser?: Maybe<User>;
};


export type QueryAllUserHistoryRecordsArgs = {
  where?: Maybe<UserHistoryRecordWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortUserHistoryRecordsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryUserHistoryRecordArgs = {
  where: UserHistoryRecordWhereUniqueInput;
};


export type Query_AllUserHistoryRecordsMetaArgs = {
  where?: Maybe<UserHistoryRecordWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortUserHistoryRecordsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllUsersArgs = {
  where?: Maybe<UserWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortUsersBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type Query_AllUsersMetaArgs = {
  where?: Maybe<UserWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortUsersBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllForgotPasswordActionHistoryRecordsArgs = {
  where?: Maybe<ForgotPasswordActionHistoryRecordWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortForgotPasswordActionHistoryRecordsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryForgotPasswordActionHistoryRecordArgs = {
  where: ForgotPasswordActionHistoryRecordWhereUniqueInput;
};


export type Query_AllForgotPasswordActionHistoryRecordsMetaArgs = {
  where?: Maybe<ForgotPasswordActionHistoryRecordWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortForgotPasswordActionHistoryRecordsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllForgotPasswordActionsArgs = {
  where?: Maybe<ForgotPasswordActionWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortForgotPasswordActionsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryForgotPasswordActionArgs = {
  where: ForgotPasswordActionWhereUniqueInput;
};


export type Query_AllForgotPasswordActionsMetaArgs = {
  where?: Maybe<ForgotPasswordActionWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortForgotPasswordActionsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllOrganizationHistoryRecordsArgs = {
  where?: Maybe<OrganizationHistoryRecordWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortOrganizationHistoryRecordsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryOrganizationHistoryRecordArgs = {
  where: OrganizationHistoryRecordWhereUniqueInput;
};


export type Query_AllOrganizationHistoryRecordsMetaArgs = {
  where?: Maybe<OrganizationHistoryRecordWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortOrganizationHistoryRecordsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllOrganizationsArgs = {
  where?: Maybe<OrganizationWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortOrganizationsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryOrganizationArgs = {
  where: OrganizationWhereUniqueInput;
};


export type Query_AllOrganizationsMetaArgs = {
  where?: Maybe<OrganizationWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortOrganizationsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllOrganizationEmployeeHistoryRecordsArgs = {
  where?: Maybe<OrganizationEmployeeHistoryRecordWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortOrganizationEmployeeHistoryRecordsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryOrganizationEmployeeHistoryRecordArgs = {
  where: OrganizationEmployeeHistoryRecordWhereUniqueInput;
};


export type Query_AllOrganizationEmployeeHistoryRecordsMetaArgs = {
  where?: Maybe<OrganizationEmployeeHistoryRecordWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortOrganizationEmployeeHistoryRecordsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllOrganizationEmployeesArgs = {
  where?: Maybe<OrganizationEmployeeWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortOrganizationEmployeesBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryOrganizationEmployeeArgs = {
  where: OrganizationEmployeeWhereUniqueInput;
};


export type Query_AllOrganizationEmployeesMetaArgs = {
  where?: Maybe<OrganizationEmployeeWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortOrganizationEmployeesBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllOrganizationEmployeeRoleHistoryRecordsArgs = {
  where?: Maybe<OrganizationEmployeeRoleHistoryRecordWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortOrganizationEmployeeRoleHistoryRecordsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryOrganizationEmployeeRoleHistoryRecordArgs = {
  where: OrganizationEmployeeRoleHistoryRecordWhereUniqueInput;
};


export type Query_AllOrganizationEmployeeRoleHistoryRecordsMetaArgs = {
  where?: Maybe<OrganizationEmployeeRoleHistoryRecordWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortOrganizationEmployeeRoleHistoryRecordsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllOrganizationEmployeeRolesArgs = {
  where?: Maybe<OrganizationEmployeeRoleWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortOrganizationEmployeeRolesBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryOrganizationEmployeeRoleArgs = {
  where: OrganizationEmployeeRoleWhereUniqueInput;
};


export type Query_AllOrganizationEmployeeRolesMetaArgs = {
  where?: Maybe<OrganizationEmployeeRoleWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortOrganizationEmployeeRolesBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllPropertyHistoryRecordsArgs = {
  where?: Maybe<PropertyHistoryRecordWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortPropertyHistoryRecordsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryPropertyHistoryRecordArgs = {
  where: PropertyHistoryRecordWhereUniqueInput;
};


export type Query_AllPropertyHistoryRecordsMetaArgs = {
  where?: Maybe<PropertyHistoryRecordWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortPropertyHistoryRecordsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllPropertiesArgs = {
  where?: Maybe<PropertyWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortPropertiesBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryPropertyArgs = {
  where: PropertyWhereUniqueInput;
};


export type Query_AllPropertiesMetaArgs = {
  where?: Maybe<PropertyWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortPropertiesBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllBillingIntegrationHistoryRecordsArgs = {
  where?: Maybe<BillingIntegrationHistoryRecordWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBillingIntegrationHistoryRecordsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryBillingIntegrationHistoryRecordArgs = {
  where: BillingIntegrationHistoryRecordWhereUniqueInput;
};


export type Query_AllBillingIntegrationHistoryRecordsMetaArgs = {
  where?: Maybe<BillingIntegrationHistoryRecordWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBillingIntegrationHistoryRecordsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllBillingIntegrationsArgs = {
  where?: Maybe<BillingIntegrationWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBillingIntegrationsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryBillingIntegrationArgs = {
  where: BillingIntegrationWhereUniqueInput;
};


export type Query_AllBillingIntegrationsMetaArgs = {
  where?: Maybe<BillingIntegrationWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBillingIntegrationsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllBillingIntegrationAccessRightHistoryRecordsArgs = {
  where?: Maybe<BillingIntegrationAccessRightHistoryRecordWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBillingIntegrationAccessRightHistoryRecordsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryBillingIntegrationAccessRightHistoryRecordArgs = {
  where: BillingIntegrationAccessRightHistoryRecordWhereUniqueInput;
};


export type Query_AllBillingIntegrationAccessRightHistoryRecordsMetaArgs = {
  where?: Maybe<BillingIntegrationAccessRightHistoryRecordWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBillingIntegrationAccessRightHistoryRecordsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllBillingIntegrationAccessRightsArgs = {
  where?: Maybe<BillingIntegrationAccessRightWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBillingIntegrationAccessRightsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryBillingIntegrationAccessRightArgs = {
  where: BillingIntegrationAccessRightWhereUniqueInput;
};


export type Query_AllBillingIntegrationAccessRightsMetaArgs = {
  where?: Maybe<BillingIntegrationAccessRightWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBillingIntegrationAccessRightsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllBillingIntegrationOrganizationContextHistoryRecordsArgs = {
  where?: Maybe<BillingIntegrationOrganizationContextHistoryRecordWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBillingIntegrationOrganizationContextHistoryRecordsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryBillingIntegrationOrganizationContextHistoryRecordArgs = {
  where: BillingIntegrationOrganizationContextHistoryRecordWhereUniqueInput;
};


export type Query_AllBillingIntegrationOrganizationContextHistoryRecordsMetaArgs = {
  where?: Maybe<BillingIntegrationOrganizationContextHistoryRecordWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBillingIntegrationOrganizationContextHistoryRecordsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllBillingIntegrationOrganizationContextsArgs = {
  where?: Maybe<BillingIntegrationOrganizationContextWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBillingIntegrationOrganizationContextsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryBillingIntegrationOrganizationContextArgs = {
  where: BillingIntegrationOrganizationContextWhereUniqueInput;
};


export type Query_AllBillingIntegrationOrganizationContextsMetaArgs = {
  where?: Maybe<BillingIntegrationOrganizationContextWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBillingIntegrationOrganizationContextsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllBillingIntegrationLogsArgs = {
  where?: Maybe<BillingIntegrationLogWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBillingIntegrationLogsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryBillingIntegrationLogArgs = {
  where: BillingIntegrationLogWhereUniqueInput;
};


export type Query_AllBillingIntegrationLogsMetaArgs = {
  where?: Maybe<BillingIntegrationLogWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBillingIntegrationLogsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllBillingPropertyHistoryRecordsArgs = {
  where?: Maybe<BillingPropertyHistoryRecordWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBillingPropertyHistoryRecordsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryBillingPropertyHistoryRecordArgs = {
  where: BillingPropertyHistoryRecordWhereUniqueInput;
};


export type Query_AllBillingPropertyHistoryRecordsMetaArgs = {
  where?: Maybe<BillingPropertyHistoryRecordWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBillingPropertyHistoryRecordsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllBillingPropertiesArgs = {
  where?: Maybe<BillingPropertyWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBillingPropertiesBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryBillingPropertyArgs = {
  where: BillingPropertyWhereUniqueInput;
};


export type Query_AllBillingPropertiesMetaArgs = {
  where?: Maybe<BillingPropertyWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBillingPropertiesBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllBillingAccountHistoryRecordsArgs = {
  where?: Maybe<BillingAccountHistoryRecordWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBillingAccountHistoryRecordsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryBillingAccountHistoryRecordArgs = {
  where: BillingAccountHistoryRecordWhereUniqueInput;
};


export type Query_AllBillingAccountHistoryRecordsMetaArgs = {
  where?: Maybe<BillingAccountHistoryRecordWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBillingAccountHistoryRecordsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllBillingAccountsArgs = {
  where?: Maybe<BillingAccountWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBillingAccountsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryBillingAccountArgs = {
  where: BillingAccountWhereUniqueInput;
};


export type Query_AllBillingAccountsMetaArgs = {
  where?: Maybe<BillingAccountWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBillingAccountsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllBillingMeterResourceHistoryRecordsArgs = {
  where?: Maybe<BillingMeterResourceHistoryRecordWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBillingMeterResourceHistoryRecordsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryBillingMeterResourceHistoryRecordArgs = {
  where: BillingMeterResourceHistoryRecordWhereUniqueInput;
};


export type Query_AllBillingMeterResourceHistoryRecordsMetaArgs = {
  where?: Maybe<BillingMeterResourceHistoryRecordWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBillingMeterResourceHistoryRecordsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllBillingMeterResourcesArgs = {
  where?: Maybe<BillingMeterResourceWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBillingMeterResourcesBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryBillingMeterResourceArgs = {
  where: BillingMeterResourceWhereUniqueInput;
};


export type Query_AllBillingMeterResourcesMetaArgs = {
  where?: Maybe<BillingMeterResourceWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBillingMeterResourcesBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllBillingAccountMeterHistoryRecordsArgs = {
  where?: Maybe<BillingAccountMeterHistoryRecordWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBillingAccountMeterHistoryRecordsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryBillingAccountMeterHistoryRecordArgs = {
  where: BillingAccountMeterHistoryRecordWhereUniqueInput;
};


export type Query_AllBillingAccountMeterHistoryRecordsMetaArgs = {
  where?: Maybe<BillingAccountMeterHistoryRecordWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBillingAccountMeterHistoryRecordsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllBillingAccountMetersArgs = {
  where?: Maybe<BillingAccountMeterWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBillingAccountMetersBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryBillingAccountMeterArgs = {
  where: BillingAccountMeterWhereUniqueInput;
};


export type Query_AllBillingAccountMetersMetaArgs = {
  where?: Maybe<BillingAccountMeterWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBillingAccountMetersBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllBillingAccountMeterReadingHistoryRecordsArgs = {
  where?: Maybe<BillingAccountMeterReadingHistoryRecordWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBillingAccountMeterReadingHistoryRecordsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryBillingAccountMeterReadingHistoryRecordArgs = {
  where: BillingAccountMeterReadingHistoryRecordWhereUniqueInput;
};


export type Query_AllBillingAccountMeterReadingHistoryRecordsMetaArgs = {
  where?: Maybe<BillingAccountMeterReadingHistoryRecordWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBillingAccountMeterReadingHistoryRecordsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllBillingAccountMeterReadingsArgs = {
  where?: Maybe<BillingAccountMeterReadingWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBillingAccountMeterReadingsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryBillingAccountMeterReadingArgs = {
  where: BillingAccountMeterReadingWhereUniqueInput;
};


export type Query_AllBillingAccountMeterReadingsMetaArgs = {
  where?: Maybe<BillingAccountMeterReadingWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBillingAccountMeterReadingsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllBillingReceiptHistoryRecordsArgs = {
  where?: Maybe<BillingReceiptHistoryRecordWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBillingReceiptHistoryRecordsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryBillingReceiptHistoryRecordArgs = {
  where: BillingReceiptHistoryRecordWhereUniqueInput;
};


export type Query_AllBillingReceiptHistoryRecordsMetaArgs = {
  where?: Maybe<BillingReceiptHistoryRecordWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBillingReceiptHistoryRecordsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllBillingReceiptsArgs = {
  where?: Maybe<BillingReceiptWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBillingReceiptsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryBillingReceiptArgs = {
  where: BillingReceiptWhereUniqueInput;
};


export type Query_AllBillingReceiptsMetaArgs = {
  where?: Maybe<BillingReceiptWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBillingReceiptsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllTicketHistoryRecordsArgs = {
  where?: Maybe<TicketHistoryRecordWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortTicketHistoryRecordsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryTicketHistoryRecordArgs = {
  where: TicketHistoryRecordWhereUniqueInput;
};


export type Query_AllTicketHistoryRecordsMetaArgs = {
  where?: Maybe<TicketHistoryRecordWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortTicketHistoryRecordsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllTicketsArgs = {
  where?: Maybe<TicketWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortTicketsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryTicketArgs = {
  where: TicketWhereUniqueInput;
};


export type Query_AllTicketsMetaArgs = {
  where?: Maybe<TicketWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortTicketsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllTicketSourceHistoryRecordsArgs = {
  where?: Maybe<TicketSourceHistoryRecordWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortTicketSourceHistoryRecordsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryTicketSourceHistoryRecordArgs = {
  where: TicketSourceHistoryRecordWhereUniqueInput;
};


export type Query_AllTicketSourceHistoryRecordsMetaArgs = {
  where?: Maybe<TicketSourceHistoryRecordWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortTicketSourceHistoryRecordsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllTicketSourcesArgs = {
  where?: Maybe<TicketSourceWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortTicketSourcesBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryTicketSourceArgs = {
  where: TicketSourceWhereUniqueInput;
};


export type Query_AllTicketSourcesMetaArgs = {
  where?: Maybe<TicketSourceWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortTicketSourcesBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllTicketClassifierHistoryRecordsArgs = {
  where?: Maybe<TicketClassifierHistoryRecordWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortTicketClassifierHistoryRecordsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryTicketClassifierHistoryRecordArgs = {
  where: TicketClassifierHistoryRecordWhereUniqueInput;
};


export type Query_AllTicketClassifierHistoryRecordsMetaArgs = {
  where?: Maybe<TicketClassifierHistoryRecordWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortTicketClassifierHistoryRecordsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllTicketClassifiersArgs = {
  where?: Maybe<TicketClassifierWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortTicketClassifiersBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryTicketClassifierArgs = {
  where: TicketClassifierWhereUniqueInput;
};


export type Query_AllTicketClassifiersMetaArgs = {
  where?: Maybe<TicketClassifierWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortTicketClassifiersBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllTicketStatusHistoryRecordsArgs = {
  where?: Maybe<TicketStatusHistoryRecordWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortTicketStatusHistoryRecordsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryTicketStatusHistoryRecordArgs = {
  where: TicketStatusHistoryRecordWhereUniqueInput;
};


export type Query_AllTicketStatusHistoryRecordsMetaArgs = {
  where?: Maybe<TicketStatusHistoryRecordWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortTicketStatusHistoryRecordsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllTicketStatusesArgs = {
  where?: Maybe<TicketStatusWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortTicketStatusesBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryTicketStatusArgs = {
  where: TicketStatusWhereUniqueInput;
};


export type Query_AllTicketStatusesMetaArgs = {
  where?: Maybe<TicketStatusWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortTicketStatusesBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type Query_KsListsMetaArgs = {
  where?: Maybe<_KsListsMetaInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /**  Create a single UserHistoryRecord item.  */
  createUserHistoryRecord?: Maybe<UserHistoryRecord>;
  /**  Create multiple UserHistoryRecord items.  */
  createUserHistoryRecords?: Maybe<Array<Maybe<UserHistoryRecord>>>;
  /**  Update a single UserHistoryRecord item by ID.  */
  updateUserHistoryRecord?: Maybe<UserHistoryRecord>;
  /**  Update multiple UserHistoryRecord items by ID.  */
  updateUserHistoryRecords?: Maybe<Array<Maybe<UserHistoryRecord>>>;
  /**  Delete a single UserHistoryRecord item by ID.  */
  deleteUserHistoryRecord?: Maybe<UserHistoryRecord>;
  /**  Delete multiple UserHistoryRecord items by ID.  */
  deleteUserHistoryRecords?: Maybe<Array<Maybe<UserHistoryRecord>>>;
  /**  Create a single User item.  */
  createUser?: Maybe<User>;
  /**  Create multiple User items.  */
  createUsers?: Maybe<Array<Maybe<User>>>;
  /**  Update a single User item by ID.  */
  updateUser?: Maybe<User>;
  /**  Update multiple User items by ID.  */
  updateUsers?: Maybe<Array<Maybe<User>>>;
  /**  Delete a single User item by ID.  */
  deleteUser?: Maybe<User>;
  /**  Delete multiple User items by ID.  */
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  /**  Create a single ForgotPasswordActionHistoryRecord item.  */
  createForgotPasswordActionHistoryRecord?: Maybe<ForgotPasswordActionHistoryRecord>;
  /**  Create multiple ForgotPasswordActionHistoryRecord items.  */
  createForgotPasswordActionHistoryRecords?: Maybe<Array<Maybe<ForgotPasswordActionHistoryRecord>>>;
  /**  Update a single ForgotPasswordActionHistoryRecord item by ID.  */
  updateForgotPasswordActionHistoryRecord?: Maybe<ForgotPasswordActionHistoryRecord>;
  /**  Update multiple ForgotPasswordActionHistoryRecord items by ID.  */
  updateForgotPasswordActionHistoryRecords?: Maybe<Array<Maybe<ForgotPasswordActionHistoryRecord>>>;
  /**  Delete a single ForgotPasswordActionHistoryRecord item by ID.  */
  deleteForgotPasswordActionHistoryRecord?: Maybe<ForgotPasswordActionHistoryRecord>;
  /**  Delete multiple ForgotPasswordActionHistoryRecord items by ID.  */
  deleteForgotPasswordActionHistoryRecords?: Maybe<Array<Maybe<ForgotPasswordActionHistoryRecord>>>;
  /**  Create a single ForgotPasswordAction item.  */
  createForgotPasswordAction?: Maybe<ForgotPasswordAction>;
  /**  Create multiple ForgotPasswordAction items.  */
  createForgotPasswordActions?: Maybe<Array<Maybe<ForgotPasswordAction>>>;
  /**  Update a single ForgotPasswordAction item by ID.  */
  updateForgotPasswordAction?: Maybe<ForgotPasswordAction>;
  /**  Update multiple ForgotPasswordAction items by ID.  */
  updateForgotPasswordActions?: Maybe<Array<Maybe<ForgotPasswordAction>>>;
  /**  Delete a single ForgotPasswordAction item by ID.  */
  deleteForgotPasswordAction?: Maybe<ForgotPasswordAction>;
  /**  Delete multiple ForgotPasswordAction items by ID.  */
  deleteForgotPasswordActions?: Maybe<Array<Maybe<ForgotPasswordAction>>>;
  /**  Create a single OrganizationHistoryRecord item.  */
  createOrganizationHistoryRecord?: Maybe<OrganizationHistoryRecord>;
  /**  Create multiple OrganizationHistoryRecord items.  */
  createOrganizationHistoryRecords?: Maybe<Array<Maybe<OrganizationHistoryRecord>>>;
  /**  Update a single OrganizationHistoryRecord item by ID.  */
  updateOrganizationHistoryRecord?: Maybe<OrganizationHistoryRecord>;
  /**  Update multiple OrganizationHistoryRecord items by ID.  */
  updateOrganizationHistoryRecords?: Maybe<Array<Maybe<OrganizationHistoryRecord>>>;
  /**  Delete a single OrganizationHistoryRecord item by ID.  */
  deleteOrganizationHistoryRecord?: Maybe<OrganizationHistoryRecord>;
  /**  Delete multiple OrganizationHistoryRecord items by ID.  */
  deleteOrganizationHistoryRecords?: Maybe<Array<Maybe<OrganizationHistoryRecord>>>;
  /**  Create a single Organization item.  */
  createOrganization?: Maybe<Organization>;
  /**  Create multiple Organization items.  */
  createOrganizations?: Maybe<Array<Maybe<Organization>>>;
  /**  Update a single Organization item by ID.  */
  updateOrganization?: Maybe<Organization>;
  /**  Update multiple Organization items by ID.  */
  updateOrganizations?: Maybe<Array<Maybe<Organization>>>;
  /**  Delete a single Organization item by ID.  */
  deleteOrganization?: Maybe<Organization>;
  /**  Delete multiple Organization items by ID.  */
  deleteOrganizations?: Maybe<Array<Maybe<Organization>>>;
  /**  Create a single OrganizationEmployeeHistoryRecord item.  */
  createOrganizationEmployeeHistoryRecord?: Maybe<OrganizationEmployeeHistoryRecord>;
  /**  Create multiple OrganizationEmployeeHistoryRecord items.  */
  createOrganizationEmployeeHistoryRecords?: Maybe<Array<Maybe<OrganizationEmployeeHistoryRecord>>>;
  /**  Update a single OrganizationEmployeeHistoryRecord item by ID.  */
  updateOrganizationEmployeeHistoryRecord?: Maybe<OrganizationEmployeeHistoryRecord>;
  /**  Update multiple OrganizationEmployeeHistoryRecord items by ID.  */
  updateOrganizationEmployeeHistoryRecords?: Maybe<Array<Maybe<OrganizationEmployeeHistoryRecord>>>;
  /**  Delete a single OrganizationEmployeeHistoryRecord item by ID.  */
  deleteOrganizationEmployeeHistoryRecord?: Maybe<OrganizationEmployeeHistoryRecord>;
  /**  Delete multiple OrganizationEmployeeHistoryRecord items by ID.  */
  deleteOrganizationEmployeeHistoryRecords?: Maybe<Array<Maybe<OrganizationEmployeeHistoryRecord>>>;
  /**  Create a single OrganizationEmployee item.  */
  createOrganizationEmployee?: Maybe<OrganizationEmployee>;
  /**  Create multiple OrganizationEmployee items.  */
  createOrganizationEmployees?: Maybe<Array<Maybe<OrganizationEmployee>>>;
  /**  Update a single OrganizationEmployee item by ID.  */
  updateOrganizationEmployee?: Maybe<OrganizationEmployee>;
  /**  Update multiple OrganizationEmployee items by ID.  */
  updateOrganizationEmployees?: Maybe<Array<Maybe<OrganizationEmployee>>>;
  /**  Delete a single OrganizationEmployee item by ID.  */
  deleteOrganizationEmployee?: Maybe<OrganizationEmployee>;
  /**  Delete multiple OrganizationEmployee items by ID.  */
  deleteOrganizationEmployees?: Maybe<Array<Maybe<OrganizationEmployee>>>;
  /**  Create a single OrganizationEmployeeRoleHistoryRecord item.  */
  createOrganizationEmployeeRoleHistoryRecord?: Maybe<OrganizationEmployeeRoleHistoryRecord>;
  /**  Create multiple OrganizationEmployeeRoleHistoryRecord items.  */
  createOrganizationEmployeeRoleHistoryRecords?: Maybe<Array<Maybe<OrganizationEmployeeRoleHistoryRecord>>>;
  /**  Update a single OrganizationEmployeeRoleHistoryRecord item by ID.  */
  updateOrganizationEmployeeRoleHistoryRecord?: Maybe<OrganizationEmployeeRoleHistoryRecord>;
  /**  Update multiple OrganizationEmployeeRoleHistoryRecord items by ID.  */
  updateOrganizationEmployeeRoleHistoryRecords?: Maybe<Array<Maybe<OrganizationEmployeeRoleHistoryRecord>>>;
  /**  Delete a single OrganizationEmployeeRoleHistoryRecord item by ID.  */
  deleteOrganizationEmployeeRoleHistoryRecord?: Maybe<OrganizationEmployeeRoleHistoryRecord>;
  /**  Delete multiple OrganizationEmployeeRoleHistoryRecord items by ID.  */
  deleteOrganizationEmployeeRoleHistoryRecords?: Maybe<Array<Maybe<OrganizationEmployeeRoleHistoryRecord>>>;
  /**  Create a single OrganizationEmployeeRole item.  */
  createOrganizationEmployeeRole?: Maybe<OrganizationEmployeeRole>;
  /**  Create multiple OrganizationEmployeeRole items.  */
  createOrganizationEmployeeRoles?: Maybe<Array<Maybe<OrganizationEmployeeRole>>>;
  /**  Update a single OrganizationEmployeeRole item by ID.  */
  updateOrganizationEmployeeRole?: Maybe<OrganizationEmployeeRole>;
  /**  Update multiple OrganizationEmployeeRole items by ID.  */
  updateOrganizationEmployeeRoles?: Maybe<Array<Maybe<OrganizationEmployeeRole>>>;
  /**  Delete a single OrganizationEmployeeRole item by ID.  */
  deleteOrganizationEmployeeRole?: Maybe<OrganizationEmployeeRole>;
  /**  Delete multiple OrganizationEmployeeRole items by ID.  */
  deleteOrganizationEmployeeRoles?: Maybe<Array<Maybe<OrganizationEmployeeRole>>>;
  /**  Create a single PropertyHistoryRecord item.  */
  createPropertyHistoryRecord?: Maybe<PropertyHistoryRecord>;
  /**  Create multiple PropertyHistoryRecord items.  */
  createPropertyHistoryRecords?: Maybe<Array<Maybe<PropertyHistoryRecord>>>;
  /**  Update a single PropertyHistoryRecord item by ID.  */
  updatePropertyHistoryRecord?: Maybe<PropertyHistoryRecord>;
  /**  Update multiple PropertyHistoryRecord items by ID.  */
  updatePropertyHistoryRecords?: Maybe<Array<Maybe<PropertyHistoryRecord>>>;
  /**  Delete a single PropertyHistoryRecord item by ID.  */
  deletePropertyHistoryRecord?: Maybe<PropertyHistoryRecord>;
  /**  Delete multiple PropertyHistoryRecord items by ID.  */
  deletePropertyHistoryRecords?: Maybe<Array<Maybe<PropertyHistoryRecord>>>;
  /**  Create a single Property item.  */
  createProperty?: Maybe<Property>;
  /**  Create multiple Property items.  */
  createProperties?: Maybe<Array<Maybe<Property>>>;
  /**  Update a single Property item by ID.  */
  updateProperty?: Maybe<Property>;
  /**  Update multiple Property items by ID.  */
  updateProperties?: Maybe<Array<Maybe<Property>>>;
  /**  Delete a single Property item by ID.  */
  deleteProperty?: Maybe<Property>;
  /**  Delete multiple Property items by ID.  */
  deleteProperties?: Maybe<Array<Maybe<Property>>>;
  /**  Create a single BillingIntegrationHistoryRecord item.  */
  createBillingIntegrationHistoryRecord?: Maybe<BillingIntegrationHistoryRecord>;
  /**  Create multiple BillingIntegrationHistoryRecord items.  */
  createBillingIntegrationHistoryRecords?: Maybe<Array<Maybe<BillingIntegrationHistoryRecord>>>;
  /**  Update a single BillingIntegrationHistoryRecord item by ID.  */
  updateBillingIntegrationHistoryRecord?: Maybe<BillingIntegrationHistoryRecord>;
  /**  Update multiple BillingIntegrationHistoryRecord items by ID.  */
  updateBillingIntegrationHistoryRecords?: Maybe<Array<Maybe<BillingIntegrationHistoryRecord>>>;
  /**  Delete a single BillingIntegrationHistoryRecord item by ID.  */
  deleteBillingIntegrationHistoryRecord?: Maybe<BillingIntegrationHistoryRecord>;
  /**  Delete multiple BillingIntegrationHistoryRecord items by ID.  */
  deleteBillingIntegrationHistoryRecords?: Maybe<Array<Maybe<BillingIntegrationHistoryRecord>>>;
  /**  Create a single BillingIntegration item.  */
  createBillingIntegration?: Maybe<BillingIntegration>;
  /**  Create multiple BillingIntegration items.  */
  createBillingIntegrations?: Maybe<Array<Maybe<BillingIntegration>>>;
  /**  Update a single BillingIntegration item by ID.  */
  updateBillingIntegration?: Maybe<BillingIntegration>;
  /**  Update multiple BillingIntegration items by ID.  */
  updateBillingIntegrations?: Maybe<Array<Maybe<BillingIntegration>>>;
  /**  Delete a single BillingIntegration item by ID.  */
  deleteBillingIntegration?: Maybe<BillingIntegration>;
  /**  Delete multiple BillingIntegration items by ID.  */
  deleteBillingIntegrations?: Maybe<Array<Maybe<BillingIntegration>>>;
  /**  Create a single BillingIntegrationAccessRightHistoryRecord item.  */
  createBillingIntegrationAccessRightHistoryRecord?: Maybe<BillingIntegrationAccessRightHistoryRecord>;
  /**  Create multiple BillingIntegrationAccessRightHistoryRecord items.  */
  createBillingIntegrationAccessRightHistoryRecords?: Maybe<Array<Maybe<BillingIntegrationAccessRightHistoryRecord>>>;
  /**  Update a single BillingIntegrationAccessRightHistoryRecord item by ID.  */
  updateBillingIntegrationAccessRightHistoryRecord?: Maybe<BillingIntegrationAccessRightHistoryRecord>;
  /**  Update multiple BillingIntegrationAccessRightHistoryRecord items by ID.  */
  updateBillingIntegrationAccessRightHistoryRecords?: Maybe<Array<Maybe<BillingIntegrationAccessRightHistoryRecord>>>;
  /**  Delete a single BillingIntegrationAccessRightHistoryRecord item by ID.  */
  deleteBillingIntegrationAccessRightHistoryRecord?: Maybe<BillingIntegrationAccessRightHistoryRecord>;
  /**  Delete multiple BillingIntegrationAccessRightHistoryRecord items by ID.  */
  deleteBillingIntegrationAccessRightHistoryRecords?: Maybe<Array<Maybe<BillingIntegrationAccessRightHistoryRecord>>>;
  /**  Create a single BillingIntegrationAccessRight item.  */
  createBillingIntegrationAccessRight?: Maybe<BillingIntegrationAccessRight>;
  /**  Create multiple BillingIntegrationAccessRight items.  */
  createBillingIntegrationAccessRights?: Maybe<Array<Maybe<BillingIntegrationAccessRight>>>;
  /**  Update a single BillingIntegrationAccessRight item by ID.  */
  updateBillingIntegrationAccessRight?: Maybe<BillingIntegrationAccessRight>;
  /**  Update multiple BillingIntegrationAccessRight items by ID.  */
  updateBillingIntegrationAccessRights?: Maybe<Array<Maybe<BillingIntegrationAccessRight>>>;
  /**  Delete a single BillingIntegrationAccessRight item by ID.  */
  deleteBillingIntegrationAccessRight?: Maybe<BillingIntegrationAccessRight>;
  /**  Delete multiple BillingIntegrationAccessRight items by ID.  */
  deleteBillingIntegrationAccessRights?: Maybe<Array<Maybe<BillingIntegrationAccessRight>>>;
  /**  Create a single BillingIntegrationOrganizationContextHistoryRecord item.  */
  createBillingIntegrationOrganizationContextHistoryRecord?: Maybe<BillingIntegrationOrganizationContextHistoryRecord>;
  /**  Create multiple BillingIntegrationOrganizationContextHistoryRecord items.  */
  createBillingIntegrationOrganizationContextHistoryRecords?: Maybe<Array<Maybe<BillingIntegrationOrganizationContextHistoryRecord>>>;
  /**  Update a single BillingIntegrationOrganizationContextHistoryRecord item by ID.  */
  updateBillingIntegrationOrganizationContextHistoryRecord?: Maybe<BillingIntegrationOrganizationContextHistoryRecord>;
  /**  Update multiple BillingIntegrationOrganizationContextHistoryRecord items by ID.  */
  updateBillingIntegrationOrganizationContextHistoryRecords?: Maybe<Array<Maybe<BillingIntegrationOrganizationContextHistoryRecord>>>;
  /**  Delete a single BillingIntegrationOrganizationContextHistoryRecord item by ID.  */
  deleteBillingIntegrationOrganizationContextHistoryRecord?: Maybe<BillingIntegrationOrganizationContextHistoryRecord>;
  /**  Delete multiple BillingIntegrationOrganizationContextHistoryRecord items by ID.  */
  deleteBillingIntegrationOrganizationContextHistoryRecords?: Maybe<Array<Maybe<BillingIntegrationOrganizationContextHistoryRecord>>>;
  /**  Create a single BillingIntegrationOrganizationContext item.  */
  createBillingIntegrationOrganizationContext?: Maybe<BillingIntegrationOrganizationContext>;
  /**  Create multiple BillingIntegrationOrganizationContext items.  */
  createBillingIntegrationOrganizationContexts?: Maybe<Array<Maybe<BillingIntegrationOrganizationContext>>>;
  /**  Update a single BillingIntegrationOrganizationContext item by ID.  */
  updateBillingIntegrationOrganizationContext?: Maybe<BillingIntegrationOrganizationContext>;
  /**  Update multiple BillingIntegrationOrganizationContext items by ID.  */
  updateBillingIntegrationOrganizationContexts?: Maybe<Array<Maybe<BillingIntegrationOrganizationContext>>>;
  /**  Delete a single BillingIntegrationOrganizationContext item by ID.  */
  deleteBillingIntegrationOrganizationContext?: Maybe<BillingIntegrationOrganizationContext>;
  /**  Delete multiple BillingIntegrationOrganizationContext items by ID.  */
  deleteBillingIntegrationOrganizationContexts?: Maybe<Array<Maybe<BillingIntegrationOrganizationContext>>>;
  /**  Create a single BillingIntegrationLog item.  */
  createBillingIntegrationLog?: Maybe<BillingIntegrationLog>;
  /**  Create multiple BillingIntegrationLog items.  */
  createBillingIntegrationLogs?: Maybe<Array<Maybe<BillingIntegrationLog>>>;
  /**  Update a single BillingIntegrationLog item by ID.  */
  updateBillingIntegrationLog?: Maybe<BillingIntegrationLog>;
  /**  Update multiple BillingIntegrationLog items by ID.  */
  updateBillingIntegrationLogs?: Maybe<Array<Maybe<BillingIntegrationLog>>>;
  /**  Delete a single BillingIntegrationLog item by ID.  */
  deleteBillingIntegrationLog?: Maybe<BillingIntegrationLog>;
  /**  Delete multiple BillingIntegrationLog items by ID.  */
  deleteBillingIntegrationLogs?: Maybe<Array<Maybe<BillingIntegrationLog>>>;
  /**  Create a single BillingPropertyHistoryRecord item.  */
  createBillingPropertyHistoryRecord?: Maybe<BillingPropertyHistoryRecord>;
  /**  Create multiple BillingPropertyHistoryRecord items.  */
  createBillingPropertyHistoryRecords?: Maybe<Array<Maybe<BillingPropertyHistoryRecord>>>;
  /**  Update a single BillingPropertyHistoryRecord item by ID.  */
  updateBillingPropertyHistoryRecord?: Maybe<BillingPropertyHistoryRecord>;
  /**  Update multiple BillingPropertyHistoryRecord items by ID.  */
  updateBillingPropertyHistoryRecords?: Maybe<Array<Maybe<BillingPropertyHistoryRecord>>>;
  /**  Delete a single BillingPropertyHistoryRecord item by ID.  */
  deleteBillingPropertyHistoryRecord?: Maybe<BillingPropertyHistoryRecord>;
  /**  Delete multiple BillingPropertyHistoryRecord items by ID.  */
  deleteBillingPropertyHistoryRecords?: Maybe<Array<Maybe<BillingPropertyHistoryRecord>>>;
  /**  Create a single BillingProperty item.  */
  createBillingProperty?: Maybe<BillingProperty>;
  /**  Create multiple BillingProperty items.  */
  createBillingProperties?: Maybe<Array<Maybe<BillingProperty>>>;
  /**  Update a single BillingProperty item by ID.  */
  updateBillingProperty?: Maybe<BillingProperty>;
  /**  Update multiple BillingProperty items by ID.  */
  updateBillingProperties?: Maybe<Array<Maybe<BillingProperty>>>;
  /**  Delete a single BillingProperty item by ID.  */
  deleteBillingProperty?: Maybe<BillingProperty>;
  /**  Delete multiple BillingProperty items by ID.  */
  deleteBillingProperties?: Maybe<Array<Maybe<BillingProperty>>>;
  /**  Create a single BillingAccountHistoryRecord item.  */
  createBillingAccountHistoryRecord?: Maybe<BillingAccountHistoryRecord>;
  /**  Create multiple BillingAccountHistoryRecord items.  */
  createBillingAccountHistoryRecords?: Maybe<Array<Maybe<BillingAccountHistoryRecord>>>;
  /**  Update a single BillingAccountHistoryRecord item by ID.  */
  updateBillingAccountHistoryRecord?: Maybe<BillingAccountHistoryRecord>;
  /**  Update multiple BillingAccountHistoryRecord items by ID.  */
  updateBillingAccountHistoryRecords?: Maybe<Array<Maybe<BillingAccountHistoryRecord>>>;
  /**  Delete a single BillingAccountHistoryRecord item by ID.  */
  deleteBillingAccountHistoryRecord?: Maybe<BillingAccountHistoryRecord>;
  /**  Delete multiple BillingAccountHistoryRecord items by ID.  */
  deleteBillingAccountHistoryRecords?: Maybe<Array<Maybe<BillingAccountHistoryRecord>>>;
  /**  Create a single BillingAccount item.  */
  createBillingAccount?: Maybe<BillingAccount>;
  /**  Create multiple BillingAccount items.  */
  createBillingAccounts?: Maybe<Array<Maybe<BillingAccount>>>;
  /**  Update a single BillingAccount item by ID.  */
  updateBillingAccount?: Maybe<BillingAccount>;
  /**  Update multiple BillingAccount items by ID.  */
  updateBillingAccounts?: Maybe<Array<Maybe<BillingAccount>>>;
  /**  Delete a single BillingAccount item by ID.  */
  deleteBillingAccount?: Maybe<BillingAccount>;
  /**  Delete multiple BillingAccount items by ID.  */
  deleteBillingAccounts?: Maybe<Array<Maybe<BillingAccount>>>;
  /**  Create a single BillingMeterResourceHistoryRecord item.  */
  createBillingMeterResourceHistoryRecord?: Maybe<BillingMeterResourceHistoryRecord>;
  /**  Create multiple BillingMeterResourceHistoryRecord items.  */
  createBillingMeterResourceHistoryRecords?: Maybe<Array<Maybe<BillingMeterResourceHistoryRecord>>>;
  /**  Update a single BillingMeterResourceHistoryRecord item by ID.  */
  updateBillingMeterResourceHistoryRecord?: Maybe<BillingMeterResourceHistoryRecord>;
  /**  Update multiple BillingMeterResourceHistoryRecord items by ID.  */
  updateBillingMeterResourceHistoryRecords?: Maybe<Array<Maybe<BillingMeterResourceHistoryRecord>>>;
  /**  Delete a single BillingMeterResourceHistoryRecord item by ID.  */
  deleteBillingMeterResourceHistoryRecord?: Maybe<BillingMeterResourceHistoryRecord>;
  /**  Delete multiple BillingMeterResourceHistoryRecord items by ID.  */
  deleteBillingMeterResourceHistoryRecords?: Maybe<Array<Maybe<BillingMeterResourceHistoryRecord>>>;
  /**  Create a single BillingMeterResource item.  */
  createBillingMeterResource?: Maybe<BillingMeterResource>;
  /**  Create multiple BillingMeterResource items.  */
  createBillingMeterResources?: Maybe<Array<Maybe<BillingMeterResource>>>;
  /**  Update a single BillingMeterResource item by ID.  */
  updateBillingMeterResource?: Maybe<BillingMeterResource>;
  /**  Update multiple BillingMeterResource items by ID.  */
  updateBillingMeterResources?: Maybe<Array<Maybe<BillingMeterResource>>>;
  /**  Delete a single BillingMeterResource item by ID.  */
  deleteBillingMeterResource?: Maybe<BillingMeterResource>;
  /**  Delete multiple BillingMeterResource items by ID.  */
  deleteBillingMeterResources?: Maybe<Array<Maybe<BillingMeterResource>>>;
  /**  Create a single BillingAccountMeterHistoryRecord item.  */
  createBillingAccountMeterHistoryRecord?: Maybe<BillingAccountMeterHistoryRecord>;
  /**  Create multiple BillingAccountMeterHistoryRecord items.  */
  createBillingAccountMeterHistoryRecords?: Maybe<Array<Maybe<BillingAccountMeterHistoryRecord>>>;
  /**  Update a single BillingAccountMeterHistoryRecord item by ID.  */
  updateBillingAccountMeterHistoryRecord?: Maybe<BillingAccountMeterHistoryRecord>;
  /**  Update multiple BillingAccountMeterHistoryRecord items by ID.  */
  updateBillingAccountMeterHistoryRecords?: Maybe<Array<Maybe<BillingAccountMeterHistoryRecord>>>;
  /**  Delete a single BillingAccountMeterHistoryRecord item by ID.  */
  deleteBillingAccountMeterHistoryRecord?: Maybe<BillingAccountMeterHistoryRecord>;
  /**  Delete multiple BillingAccountMeterHistoryRecord items by ID.  */
  deleteBillingAccountMeterHistoryRecords?: Maybe<Array<Maybe<BillingAccountMeterHistoryRecord>>>;
  /**  Create a single BillingAccountMeter item.  */
  createBillingAccountMeter?: Maybe<BillingAccountMeter>;
  /**  Create multiple BillingAccountMeter items.  */
  createBillingAccountMeters?: Maybe<Array<Maybe<BillingAccountMeter>>>;
  /**  Update a single BillingAccountMeter item by ID.  */
  updateBillingAccountMeter?: Maybe<BillingAccountMeter>;
  /**  Update multiple BillingAccountMeter items by ID.  */
  updateBillingAccountMeters?: Maybe<Array<Maybe<BillingAccountMeter>>>;
  /**  Delete a single BillingAccountMeter item by ID.  */
  deleteBillingAccountMeter?: Maybe<BillingAccountMeter>;
  /**  Delete multiple BillingAccountMeter items by ID.  */
  deleteBillingAccountMeters?: Maybe<Array<Maybe<BillingAccountMeter>>>;
  /**  Create a single BillingAccountMeterReadingHistoryRecord item.  */
  createBillingAccountMeterReadingHistoryRecord?: Maybe<BillingAccountMeterReadingHistoryRecord>;
  /**  Create multiple BillingAccountMeterReadingHistoryRecord items.  */
  createBillingAccountMeterReadingHistoryRecords?: Maybe<Array<Maybe<BillingAccountMeterReadingHistoryRecord>>>;
  /**  Update a single BillingAccountMeterReadingHistoryRecord item by ID.  */
  updateBillingAccountMeterReadingHistoryRecord?: Maybe<BillingAccountMeterReadingHistoryRecord>;
  /**  Update multiple BillingAccountMeterReadingHistoryRecord items by ID.  */
  updateBillingAccountMeterReadingHistoryRecords?: Maybe<Array<Maybe<BillingAccountMeterReadingHistoryRecord>>>;
  /**  Delete a single BillingAccountMeterReadingHistoryRecord item by ID.  */
  deleteBillingAccountMeterReadingHistoryRecord?: Maybe<BillingAccountMeterReadingHistoryRecord>;
  /**  Delete multiple BillingAccountMeterReadingHistoryRecord items by ID.  */
  deleteBillingAccountMeterReadingHistoryRecords?: Maybe<Array<Maybe<BillingAccountMeterReadingHistoryRecord>>>;
  /**  Create a single BillingAccountMeterReading item.  */
  createBillingAccountMeterReading?: Maybe<BillingAccountMeterReading>;
  /**  Create multiple BillingAccountMeterReading items.  */
  createBillingAccountMeterReadings?: Maybe<Array<Maybe<BillingAccountMeterReading>>>;
  /**  Update a single BillingAccountMeterReading item by ID.  */
  updateBillingAccountMeterReading?: Maybe<BillingAccountMeterReading>;
  /**  Update multiple BillingAccountMeterReading items by ID.  */
  updateBillingAccountMeterReadings?: Maybe<Array<Maybe<BillingAccountMeterReading>>>;
  /**  Delete a single BillingAccountMeterReading item by ID.  */
  deleteBillingAccountMeterReading?: Maybe<BillingAccountMeterReading>;
  /**  Delete multiple BillingAccountMeterReading items by ID.  */
  deleteBillingAccountMeterReadings?: Maybe<Array<Maybe<BillingAccountMeterReading>>>;
  /**  Create a single BillingReceiptHistoryRecord item.  */
  createBillingReceiptHistoryRecord?: Maybe<BillingReceiptHistoryRecord>;
  /**  Create multiple BillingReceiptHistoryRecord items.  */
  createBillingReceiptHistoryRecords?: Maybe<Array<Maybe<BillingReceiptHistoryRecord>>>;
  /**  Update a single BillingReceiptHistoryRecord item by ID.  */
  updateBillingReceiptHistoryRecord?: Maybe<BillingReceiptHistoryRecord>;
  /**  Update multiple BillingReceiptHistoryRecord items by ID.  */
  updateBillingReceiptHistoryRecords?: Maybe<Array<Maybe<BillingReceiptHistoryRecord>>>;
  /**  Delete a single BillingReceiptHistoryRecord item by ID.  */
  deleteBillingReceiptHistoryRecord?: Maybe<BillingReceiptHistoryRecord>;
  /**  Delete multiple BillingReceiptHistoryRecord items by ID.  */
  deleteBillingReceiptHistoryRecords?: Maybe<Array<Maybe<BillingReceiptHistoryRecord>>>;
  /**  Create a single BillingReceipt item.  */
  createBillingReceipt?: Maybe<BillingReceipt>;
  /**  Create multiple BillingReceipt items.  */
  createBillingReceipts?: Maybe<Array<Maybe<BillingReceipt>>>;
  /**  Update a single BillingReceipt item by ID.  */
  updateBillingReceipt?: Maybe<BillingReceipt>;
  /**  Update multiple BillingReceipt items by ID.  */
  updateBillingReceipts?: Maybe<Array<Maybe<BillingReceipt>>>;
  /**  Delete a single BillingReceipt item by ID.  */
  deleteBillingReceipt?: Maybe<BillingReceipt>;
  /**  Delete multiple BillingReceipt items by ID.  */
  deleteBillingReceipts?: Maybe<Array<Maybe<BillingReceipt>>>;
  /**  Create a single TicketHistoryRecord item.  */
  createTicketHistoryRecord?: Maybe<TicketHistoryRecord>;
  /**  Create multiple TicketHistoryRecord items.  */
  createTicketHistoryRecords?: Maybe<Array<Maybe<TicketHistoryRecord>>>;
  /**  Update a single TicketHistoryRecord item by ID.  */
  updateTicketHistoryRecord?: Maybe<TicketHistoryRecord>;
  /**  Update multiple TicketHistoryRecord items by ID.  */
  updateTicketHistoryRecords?: Maybe<Array<Maybe<TicketHistoryRecord>>>;
  /**  Delete a single TicketHistoryRecord item by ID.  */
  deleteTicketHistoryRecord?: Maybe<TicketHistoryRecord>;
  /**  Delete multiple TicketHistoryRecord items by ID.  */
  deleteTicketHistoryRecords?: Maybe<Array<Maybe<TicketHistoryRecord>>>;
  /**  Create a single Ticket item.  */
  createTicket?: Maybe<Ticket>;
  /**  Create multiple Ticket items.  */
  createTickets?: Maybe<Array<Maybe<Ticket>>>;
  /**  Update a single Ticket item by ID.  */
  updateTicket?: Maybe<Ticket>;
  /**  Update multiple Ticket items by ID.  */
  updateTickets?: Maybe<Array<Maybe<Ticket>>>;
  /**  Delete a single Ticket item by ID.  */
  deleteTicket?: Maybe<Ticket>;
  /**  Delete multiple Ticket items by ID.  */
  deleteTickets?: Maybe<Array<Maybe<Ticket>>>;
  /**  Create a single TicketSourceHistoryRecord item.  */
  createTicketSourceHistoryRecord?: Maybe<TicketSourceHistoryRecord>;
  /**  Create multiple TicketSourceHistoryRecord items.  */
  createTicketSourceHistoryRecords?: Maybe<Array<Maybe<TicketSourceHistoryRecord>>>;
  /**  Update a single TicketSourceHistoryRecord item by ID.  */
  updateTicketSourceHistoryRecord?: Maybe<TicketSourceHistoryRecord>;
  /**  Update multiple TicketSourceHistoryRecord items by ID.  */
  updateTicketSourceHistoryRecords?: Maybe<Array<Maybe<TicketSourceHistoryRecord>>>;
  /**  Delete a single TicketSourceHistoryRecord item by ID.  */
  deleteTicketSourceHistoryRecord?: Maybe<TicketSourceHistoryRecord>;
  /**  Delete multiple TicketSourceHistoryRecord items by ID.  */
  deleteTicketSourceHistoryRecords?: Maybe<Array<Maybe<TicketSourceHistoryRecord>>>;
  /**  Create a single TicketSource item.  */
  createTicketSource?: Maybe<TicketSource>;
  /**  Create multiple TicketSource items.  */
  createTicketSources?: Maybe<Array<Maybe<TicketSource>>>;
  /**  Update a single TicketSource item by ID.  */
  updateTicketSource?: Maybe<TicketSource>;
  /**  Update multiple TicketSource items by ID.  */
  updateTicketSources?: Maybe<Array<Maybe<TicketSource>>>;
  /**  Delete a single TicketSource item by ID.  */
  deleteTicketSource?: Maybe<TicketSource>;
  /**  Delete multiple TicketSource items by ID.  */
  deleteTicketSources?: Maybe<Array<Maybe<TicketSource>>>;
  /**  Create a single TicketClassifierHistoryRecord item.  */
  createTicketClassifierHistoryRecord?: Maybe<TicketClassifierHistoryRecord>;
  /**  Create multiple TicketClassifierHistoryRecord items.  */
  createTicketClassifierHistoryRecords?: Maybe<Array<Maybe<TicketClassifierHistoryRecord>>>;
  /**  Update a single TicketClassifierHistoryRecord item by ID.  */
  updateTicketClassifierHistoryRecord?: Maybe<TicketClassifierHistoryRecord>;
  /**  Update multiple TicketClassifierHistoryRecord items by ID.  */
  updateTicketClassifierHistoryRecords?: Maybe<Array<Maybe<TicketClassifierHistoryRecord>>>;
  /**  Delete a single TicketClassifierHistoryRecord item by ID.  */
  deleteTicketClassifierHistoryRecord?: Maybe<TicketClassifierHistoryRecord>;
  /**  Delete multiple TicketClassifierHistoryRecord items by ID.  */
  deleteTicketClassifierHistoryRecords?: Maybe<Array<Maybe<TicketClassifierHistoryRecord>>>;
  /**  Create a single TicketClassifier item.  */
  createTicketClassifier?: Maybe<TicketClassifier>;
  /**  Create multiple TicketClassifier items.  */
  createTicketClassifiers?: Maybe<Array<Maybe<TicketClassifier>>>;
  /**  Update a single TicketClassifier item by ID.  */
  updateTicketClassifier?: Maybe<TicketClassifier>;
  /**  Update multiple TicketClassifier items by ID.  */
  updateTicketClassifiers?: Maybe<Array<Maybe<TicketClassifier>>>;
  /**  Delete a single TicketClassifier item by ID.  */
  deleteTicketClassifier?: Maybe<TicketClassifier>;
  /**  Delete multiple TicketClassifier items by ID.  */
  deleteTicketClassifiers?: Maybe<Array<Maybe<TicketClassifier>>>;
  /**  Create a single TicketStatusHistoryRecord item.  */
  createTicketStatusHistoryRecord?: Maybe<TicketStatusHistoryRecord>;
  /**  Create multiple TicketStatusHistoryRecord items.  */
  createTicketStatusHistoryRecords?: Maybe<Array<Maybe<TicketStatusHistoryRecord>>>;
  /**  Update a single TicketStatusHistoryRecord item by ID.  */
  updateTicketStatusHistoryRecord?: Maybe<TicketStatusHistoryRecord>;
  /**  Update multiple TicketStatusHistoryRecord items by ID.  */
  updateTicketStatusHistoryRecords?: Maybe<Array<Maybe<TicketStatusHistoryRecord>>>;
  /**  Delete a single TicketStatusHistoryRecord item by ID.  */
  deleteTicketStatusHistoryRecord?: Maybe<TicketStatusHistoryRecord>;
  /**  Delete multiple TicketStatusHistoryRecord items by ID.  */
  deleteTicketStatusHistoryRecords?: Maybe<Array<Maybe<TicketStatusHistoryRecord>>>;
  /**  Create a single TicketStatus item.  */
  createTicketStatus?: Maybe<TicketStatus>;
  /**  Create multiple TicketStatus items.  */
  createTicketStatuses?: Maybe<Array<Maybe<TicketStatus>>>;
  /**  Update a single TicketStatus item by ID.  */
  updateTicketStatus?: Maybe<TicketStatus>;
  /**  Update multiple TicketStatus items by ID.  */
  updateTicketStatuses?: Maybe<Array<Maybe<TicketStatus>>>;
  /**  Delete a single TicketStatus item by ID.  */
  deleteTicketStatus?: Maybe<TicketStatus>;
  /**  Delete multiple TicketStatus items by ID.  */
  deleteTicketStatuses?: Maybe<Array<Maybe<TicketStatus>>>;
  startPasswordRecovery?: Maybe<Scalars['String']>;
  changePasswordWithToken?: Maybe<Scalars['String']>;
  registerNewUser?: Maybe<User>;
  authenticateUserWithFirebaseIdToken?: Maybe<AuthenticateUserWithFirebaseIdTokenOutput>;
  registerNewOrganization?: Maybe<Organization>;
  inviteNewOrganizationEmployee?: Maybe<OrganizationEmployee>;
  acceptOrRejectOrganizationInviteById?: Maybe<OrganizationEmployee>;
  acceptOrRejectOrganizationInviteByCode?: Maybe<OrganizationEmployee>;
  /**  Authenticate and generate a token for a User with the Password Authentication Strategy.  */
  authenticateUserWithPassword?: Maybe<AuthenticateUserOutput>;
  unauthenticateUser?: Maybe<UnauthenticateUserOutput>;
  updateAuthenticatedUser?: Maybe<User>;
};


export type MutationCreateUserHistoryRecordArgs = {
  data?: Maybe<UserHistoryRecordCreateInput>;
};


export type MutationCreateUserHistoryRecordsArgs = {
  data?: Maybe<Array<Maybe<UserHistoryRecordsCreateInput>>>;
};


export type MutationUpdateUserHistoryRecordArgs = {
  id: Scalars['ID'];
  data?: Maybe<UserHistoryRecordUpdateInput>;
};


export type MutationUpdateUserHistoryRecordsArgs = {
  data?: Maybe<Array<Maybe<UserHistoryRecordsUpdateInput>>>;
};


export type MutationDeleteUserHistoryRecordArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUserHistoryRecordsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateUserArgs = {
  data?: Maybe<UserCreateInput>;
};


export type MutationCreateUsersArgs = {
  data?: Maybe<Array<Maybe<UsersCreateInput>>>;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  data?: Maybe<UserUpdateInput>;
};


export type MutationUpdateUsersArgs = {
  data?: Maybe<Array<Maybe<UsersUpdateInput>>>;
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateForgotPasswordActionHistoryRecordArgs = {
  data?: Maybe<ForgotPasswordActionHistoryRecordCreateInput>;
};


export type MutationCreateForgotPasswordActionHistoryRecordsArgs = {
  data?: Maybe<Array<Maybe<ForgotPasswordActionHistoryRecordsCreateInput>>>;
};


export type MutationUpdateForgotPasswordActionHistoryRecordArgs = {
  id: Scalars['ID'];
  data?: Maybe<ForgotPasswordActionHistoryRecordUpdateInput>;
};


export type MutationUpdateForgotPasswordActionHistoryRecordsArgs = {
  data?: Maybe<Array<Maybe<ForgotPasswordActionHistoryRecordsUpdateInput>>>;
};


export type MutationDeleteForgotPasswordActionHistoryRecordArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteForgotPasswordActionHistoryRecordsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateForgotPasswordActionArgs = {
  data?: Maybe<ForgotPasswordActionCreateInput>;
};


export type MutationCreateForgotPasswordActionsArgs = {
  data?: Maybe<Array<Maybe<ForgotPasswordActionsCreateInput>>>;
};


export type MutationUpdateForgotPasswordActionArgs = {
  id: Scalars['ID'];
  data?: Maybe<ForgotPasswordActionUpdateInput>;
};


export type MutationUpdateForgotPasswordActionsArgs = {
  data?: Maybe<Array<Maybe<ForgotPasswordActionsUpdateInput>>>;
};


export type MutationDeleteForgotPasswordActionArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteForgotPasswordActionsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateOrganizationHistoryRecordArgs = {
  data?: Maybe<OrganizationHistoryRecordCreateInput>;
};


export type MutationCreateOrganizationHistoryRecordsArgs = {
  data?: Maybe<Array<Maybe<OrganizationHistoryRecordsCreateInput>>>;
};


export type MutationUpdateOrganizationHistoryRecordArgs = {
  id: Scalars['ID'];
  data?: Maybe<OrganizationHistoryRecordUpdateInput>;
};


export type MutationUpdateOrganizationHistoryRecordsArgs = {
  data?: Maybe<Array<Maybe<OrganizationHistoryRecordsUpdateInput>>>;
};


export type MutationDeleteOrganizationHistoryRecordArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteOrganizationHistoryRecordsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateOrganizationArgs = {
  data?: Maybe<OrganizationCreateInput>;
};


export type MutationCreateOrganizationsArgs = {
  data?: Maybe<Array<Maybe<OrganizationsCreateInput>>>;
};


export type MutationUpdateOrganizationArgs = {
  id: Scalars['ID'];
  data?: Maybe<OrganizationUpdateInput>;
};


export type MutationUpdateOrganizationsArgs = {
  data?: Maybe<Array<Maybe<OrganizationsUpdateInput>>>;
};


export type MutationDeleteOrganizationArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteOrganizationsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateOrganizationEmployeeHistoryRecordArgs = {
  data?: Maybe<OrganizationEmployeeHistoryRecordCreateInput>;
};


export type MutationCreateOrganizationEmployeeHistoryRecordsArgs = {
  data?: Maybe<Array<Maybe<OrganizationEmployeeHistoryRecordsCreateInput>>>;
};


export type MutationUpdateOrganizationEmployeeHistoryRecordArgs = {
  id: Scalars['ID'];
  data?: Maybe<OrganizationEmployeeHistoryRecordUpdateInput>;
};


export type MutationUpdateOrganizationEmployeeHistoryRecordsArgs = {
  data?: Maybe<Array<Maybe<OrganizationEmployeeHistoryRecordsUpdateInput>>>;
};


export type MutationDeleteOrganizationEmployeeHistoryRecordArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteOrganizationEmployeeHistoryRecordsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateOrganizationEmployeeArgs = {
  data?: Maybe<OrganizationEmployeeCreateInput>;
};


export type MutationCreateOrganizationEmployeesArgs = {
  data?: Maybe<Array<Maybe<OrganizationEmployeesCreateInput>>>;
};


export type MutationUpdateOrganizationEmployeeArgs = {
  id: Scalars['ID'];
  data?: Maybe<OrganizationEmployeeUpdateInput>;
};


export type MutationUpdateOrganizationEmployeesArgs = {
  data?: Maybe<Array<Maybe<OrganizationEmployeesUpdateInput>>>;
};


export type MutationDeleteOrganizationEmployeeArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteOrganizationEmployeesArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateOrganizationEmployeeRoleHistoryRecordArgs = {
  data?: Maybe<OrganizationEmployeeRoleHistoryRecordCreateInput>;
};


export type MutationCreateOrganizationEmployeeRoleHistoryRecordsArgs = {
  data?: Maybe<Array<Maybe<OrganizationEmployeeRoleHistoryRecordsCreateInput>>>;
};


export type MutationUpdateOrganizationEmployeeRoleHistoryRecordArgs = {
  id: Scalars['ID'];
  data?: Maybe<OrganizationEmployeeRoleHistoryRecordUpdateInput>;
};


export type MutationUpdateOrganizationEmployeeRoleHistoryRecordsArgs = {
  data?: Maybe<Array<Maybe<OrganizationEmployeeRoleHistoryRecordsUpdateInput>>>;
};


export type MutationDeleteOrganizationEmployeeRoleHistoryRecordArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteOrganizationEmployeeRoleHistoryRecordsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateOrganizationEmployeeRoleArgs = {
  data?: Maybe<OrganizationEmployeeRoleCreateInput>;
};


export type MutationCreateOrganizationEmployeeRolesArgs = {
  data?: Maybe<Array<Maybe<OrganizationEmployeeRolesCreateInput>>>;
};


export type MutationUpdateOrganizationEmployeeRoleArgs = {
  id: Scalars['ID'];
  data?: Maybe<OrganizationEmployeeRoleUpdateInput>;
};


export type MutationUpdateOrganizationEmployeeRolesArgs = {
  data?: Maybe<Array<Maybe<OrganizationEmployeeRolesUpdateInput>>>;
};


export type MutationDeleteOrganizationEmployeeRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteOrganizationEmployeeRolesArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreatePropertyHistoryRecordArgs = {
  data?: Maybe<PropertyHistoryRecordCreateInput>;
};


export type MutationCreatePropertyHistoryRecordsArgs = {
  data?: Maybe<Array<Maybe<PropertyHistoryRecordsCreateInput>>>;
};


export type MutationUpdatePropertyHistoryRecordArgs = {
  id: Scalars['ID'];
  data?: Maybe<PropertyHistoryRecordUpdateInput>;
};


export type MutationUpdatePropertyHistoryRecordsArgs = {
  data?: Maybe<Array<Maybe<PropertyHistoryRecordsUpdateInput>>>;
};


export type MutationDeletePropertyHistoryRecordArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePropertyHistoryRecordsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreatePropertyArgs = {
  data?: Maybe<PropertyCreateInput>;
};


export type MutationCreatePropertiesArgs = {
  data?: Maybe<Array<Maybe<PropertiesCreateInput>>>;
};


export type MutationUpdatePropertyArgs = {
  id: Scalars['ID'];
  data?: Maybe<PropertyUpdateInput>;
};


export type MutationUpdatePropertiesArgs = {
  data?: Maybe<Array<Maybe<PropertiesUpdateInput>>>;
};


export type MutationDeletePropertyArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePropertiesArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateBillingIntegrationHistoryRecordArgs = {
  data?: Maybe<BillingIntegrationHistoryRecordCreateInput>;
};


export type MutationCreateBillingIntegrationHistoryRecordsArgs = {
  data?: Maybe<Array<Maybe<BillingIntegrationHistoryRecordsCreateInput>>>;
};


export type MutationUpdateBillingIntegrationHistoryRecordArgs = {
  id: Scalars['ID'];
  data?: Maybe<BillingIntegrationHistoryRecordUpdateInput>;
};


export type MutationUpdateBillingIntegrationHistoryRecordsArgs = {
  data?: Maybe<Array<Maybe<BillingIntegrationHistoryRecordsUpdateInput>>>;
};


export type MutationDeleteBillingIntegrationHistoryRecordArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteBillingIntegrationHistoryRecordsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateBillingIntegrationArgs = {
  data?: Maybe<BillingIntegrationCreateInput>;
};


export type MutationCreateBillingIntegrationsArgs = {
  data?: Maybe<Array<Maybe<BillingIntegrationsCreateInput>>>;
};


export type MutationUpdateBillingIntegrationArgs = {
  id: Scalars['ID'];
  data?: Maybe<BillingIntegrationUpdateInput>;
};


export type MutationUpdateBillingIntegrationsArgs = {
  data?: Maybe<Array<Maybe<BillingIntegrationsUpdateInput>>>;
};


export type MutationDeleteBillingIntegrationArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteBillingIntegrationsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateBillingIntegrationAccessRightHistoryRecordArgs = {
  data?: Maybe<BillingIntegrationAccessRightHistoryRecordCreateInput>;
};


export type MutationCreateBillingIntegrationAccessRightHistoryRecordsArgs = {
  data?: Maybe<Array<Maybe<BillingIntegrationAccessRightHistoryRecordsCreateInput>>>;
};


export type MutationUpdateBillingIntegrationAccessRightHistoryRecordArgs = {
  id: Scalars['ID'];
  data?: Maybe<BillingIntegrationAccessRightHistoryRecordUpdateInput>;
};


export type MutationUpdateBillingIntegrationAccessRightHistoryRecordsArgs = {
  data?: Maybe<Array<Maybe<BillingIntegrationAccessRightHistoryRecordsUpdateInput>>>;
};


export type MutationDeleteBillingIntegrationAccessRightHistoryRecordArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteBillingIntegrationAccessRightHistoryRecordsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateBillingIntegrationAccessRightArgs = {
  data?: Maybe<BillingIntegrationAccessRightCreateInput>;
};


export type MutationCreateBillingIntegrationAccessRightsArgs = {
  data?: Maybe<Array<Maybe<BillingIntegrationAccessRightsCreateInput>>>;
};


export type MutationUpdateBillingIntegrationAccessRightArgs = {
  id: Scalars['ID'];
  data?: Maybe<BillingIntegrationAccessRightUpdateInput>;
};


export type MutationUpdateBillingIntegrationAccessRightsArgs = {
  data?: Maybe<Array<Maybe<BillingIntegrationAccessRightsUpdateInput>>>;
};


export type MutationDeleteBillingIntegrationAccessRightArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteBillingIntegrationAccessRightsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateBillingIntegrationOrganizationContextHistoryRecordArgs = {
  data?: Maybe<BillingIntegrationOrganizationContextHistoryRecordCreateInput>;
};


export type MutationCreateBillingIntegrationOrganizationContextHistoryRecordsArgs = {
  data?: Maybe<Array<Maybe<BillingIntegrationOrganizationContextHistoryRecordsCreateInput>>>;
};


export type MutationUpdateBillingIntegrationOrganizationContextHistoryRecordArgs = {
  id: Scalars['ID'];
  data?: Maybe<BillingIntegrationOrganizationContextHistoryRecordUpdateInput>;
};


export type MutationUpdateBillingIntegrationOrganizationContextHistoryRecordsArgs = {
  data?: Maybe<Array<Maybe<BillingIntegrationOrganizationContextHistoryRecordsUpdateInput>>>;
};


export type MutationDeleteBillingIntegrationOrganizationContextHistoryRecordArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteBillingIntegrationOrganizationContextHistoryRecordsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateBillingIntegrationOrganizationContextArgs = {
  data?: Maybe<BillingIntegrationOrganizationContextCreateInput>;
};


export type MutationCreateBillingIntegrationOrganizationContextsArgs = {
  data?: Maybe<Array<Maybe<BillingIntegrationOrganizationContextsCreateInput>>>;
};


export type MutationUpdateBillingIntegrationOrganizationContextArgs = {
  id: Scalars['ID'];
  data?: Maybe<BillingIntegrationOrganizationContextUpdateInput>;
};


export type MutationUpdateBillingIntegrationOrganizationContextsArgs = {
  data?: Maybe<Array<Maybe<BillingIntegrationOrganizationContextsUpdateInput>>>;
};


export type MutationDeleteBillingIntegrationOrganizationContextArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteBillingIntegrationOrganizationContextsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateBillingIntegrationLogArgs = {
  data?: Maybe<BillingIntegrationLogCreateInput>;
};


export type MutationCreateBillingIntegrationLogsArgs = {
  data?: Maybe<Array<Maybe<BillingIntegrationLogsCreateInput>>>;
};


export type MutationUpdateBillingIntegrationLogArgs = {
  id: Scalars['ID'];
  data?: Maybe<BillingIntegrationLogUpdateInput>;
};


export type MutationUpdateBillingIntegrationLogsArgs = {
  data?: Maybe<Array<Maybe<BillingIntegrationLogsUpdateInput>>>;
};


export type MutationDeleteBillingIntegrationLogArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteBillingIntegrationLogsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateBillingPropertyHistoryRecordArgs = {
  data?: Maybe<BillingPropertyHistoryRecordCreateInput>;
};


export type MutationCreateBillingPropertyHistoryRecordsArgs = {
  data?: Maybe<Array<Maybe<BillingPropertyHistoryRecordsCreateInput>>>;
};


export type MutationUpdateBillingPropertyHistoryRecordArgs = {
  id: Scalars['ID'];
  data?: Maybe<BillingPropertyHistoryRecordUpdateInput>;
};


export type MutationUpdateBillingPropertyHistoryRecordsArgs = {
  data?: Maybe<Array<Maybe<BillingPropertyHistoryRecordsUpdateInput>>>;
};


export type MutationDeleteBillingPropertyHistoryRecordArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteBillingPropertyHistoryRecordsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateBillingPropertyArgs = {
  data?: Maybe<BillingPropertyCreateInput>;
};


export type MutationCreateBillingPropertiesArgs = {
  data?: Maybe<Array<Maybe<BillingPropertiesCreateInput>>>;
};


export type MutationUpdateBillingPropertyArgs = {
  id: Scalars['ID'];
  data?: Maybe<BillingPropertyUpdateInput>;
};


export type MutationUpdateBillingPropertiesArgs = {
  data?: Maybe<Array<Maybe<BillingPropertiesUpdateInput>>>;
};


export type MutationDeleteBillingPropertyArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteBillingPropertiesArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateBillingAccountHistoryRecordArgs = {
  data?: Maybe<BillingAccountHistoryRecordCreateInput>;
};


export type MutationCreateBillingAccountHistoryRecordsArgs = {
  data?: Maybe<Array<Maybe<BillingAccountHistoryRecordsCreateInput>>>;
};


export type MutationUpdateBillingAccountHistoryRecordArgs = {
  id: Scalars['ID'];
  data?: Maybe<BillingAccountHistoryRecordUpdateInput>;
};


export type MutationUpdateBillingAccountHistoryRecordsArgs = {
  data?: Maybe<Array<Maybe<BillingAccountHistoryRecordsUpdateInput>>>;
};


export type MutationDeleteBillingAccountHistoryRecordArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteBillingAccountHistoryRecordsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateBillingAccountArgs = {
  data?: Maybe<BillingAccountCreateInput>;
};


export type MutationCreateBillingAccountsArgs = {
  data?: Maybe<Array<Maybe<BillingAccountsCreateInput>>>;
};


export type MutationUpdateBillingAccountArgs = {
  id: Scalars['ID'];
  data?: Maybe<BillingAccountUpdateInput>;
};


export type MutationUpdateBillingAccountsArgs = {
  data?: Maybe<Array<Maybe<BillingAccountsUpdateInput>>>;
};


export type MutationDeleteBillingAccountArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteBillingAccountsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateBillingMeterResourceHistoryRecordArgs = {
  data?: Maybe<BillingMeterResourceHistoryRecordCreateInput>;
};


export type MutationCreateBillingMeterResourceHistoryRecordsArgs = {
  data?: Maybe<Array<Maybe<BillingMeterResourceHistoryRecordsCreateInput>>>;
};


export type MutationUpdateBillingMeterResourceHistoryRecordArgs = {
  id: Scalars['ID'];
  data?: Maybe<BillingMeterResourceHistoryRecordUpdateInput>;
};


export type MutationUpdateBillingMeterResourceHistoryRecordsArgs = {
  data?: Maybe<Array<Maybe<BillingMeterResourceHistoryRecordsUpdateInput>>>;
};


export type MutationDeleteBillingMeterResourceHistoryRecordArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteBillingMeterResourceHistoryRecordsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateBillingMeterResourceArgs = {
  data?: Maybe<BillingMeterResourceCreateInput>;
};


export type MutationCreateBillingMeterResourcesArgs = {
  data?: Maybe<Array<Maybe<BillingMeterResourcesCreateInput>>>;
};


export type MutationUpdateBillingMeterResourceArgs = {
  id: Scalars['ID'];
  data?: Maybe<BillingMeterResourceUpdateInput>;
};


export type MutationUpdateBillingMeterResourcesArgs = {
  data?: Maybe<Array<Maybe<BillingMeterResourcesUpdateInput>>>;
};


export type MutationDeleteBillingMeterResourceArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteBillingMeterResourcesArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateBillingAccountMeterHistoryRecordArgs = {
  data?: Maybe<BillingAccountMeterHistoryRecordCreateInput>;
};


export type MutationCreateBillingAccountMeterHistoryRecordsArgs = {
  data?: Maybe<Array<Maybe<BillingAccountMeterHistoryRecordsCreateInput>>>;
};


export type MutationUpdateBillingAccountMeterHistoryRecordArgs = {
  id: Scalars['ID'];
  data?: Maybe<BillingAccountMeterHistoryRecordUpdateInput>;
};


export type MutationUpdateBillingAccountMeterHistoryRecordsArgs = {
  data?: Maybe<Array<Maybe<BillingAccountMeterHistoryRecordsUpdateInput>>>;
};


export type MutationDeleteBillingAccountMeterHistoryRecordArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteBillingAccountMeterHistoryRecordsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateBillingAccountMeterArgs = {
  data?: Maybe<BillingAccountMeterCreateInput>;
};


export type MutationCreateBillingAccountMetersArgs = {
  data?: Maybe<Array<Maybe<BillingAccountMetersCreateInput>>>;
};


export type MutationUpdateBillingAccountMeterArgs = {
  id: Scalars['ID'];
  data?: Maybe<BillingAccountMeterUpdateInput>;
};


export type MutationUpdateBillingAccountMetersArgs = {
  data?: Maybe<Array<Maybe<BillingAccountMetersUpdateInput>>>;
};


export type MutationDeleteBillingAccountMeterArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteBillingAccountMetersArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateBillingAccountMeterReadingHistoryRecordArgs = {
  data?: Maybe<BillingAccountMeterReadingHistoryRecordCreateInput>;
};


export type MutationCreateBillingAccountMeterReadingHistoryRecordsArgs = {
  data?: Maybe<Array<Maybe<BillingAccountMeterReadingHistoryRecordsCreateInput>>>;
};


export type MutationUpdateBillingAccountMeterReadingHistoryRecordArgs = {
  id: Scalars['ID'];
  data?: Maybe<BillingAccountMeterReadingHistoryRecordUpdateInput>;
};


export type MutationUpdateBillingAccountMeterReadingHistoryRecordsArgs = {
  data?: Maybe<Array<Maybe<BillingAccountMeterReadingHistoryRecordsUpdateInput>>>;
};


export type MutationDeleteBillingAccountMeterReadingHistoryRecordArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteBillingAccountMeterReadingHistoryRecordsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateBillingAccountMeterReadingArgs = {
  data?: Maybe<BillingAccountMeterReadingCreateInput>;
};


export type MutationCreateBillingAccountMeterReadingsArgs = {
  data?: Maybe<Array<Maybe<BillingAccountMeterReadingsCreateInput>>>;
};


export type MutationUpdateBillingAccountMeterReadingArgs = {
  id: Scalars['ID'];
  data?: Maybe<BillingAccountMeterReadingUpdateInput>;
};


export type MutationUpdateBillingAccountMeterReadingsArgs = {
  data?: Maybe<Array<Maybe<BillingAccountMeterReadingsUpdateInput>>>;
};


export type MutationDeleteBillingAccountMeterReadingArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteBillingAccountMeterReadingsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateBillingReceiptHistoryRecordArgs = {
  data?: Maybe<BillingReceiptHistoryRecordCreateInput>;
};


export type MutationCreateBillingReceiptHistoryRecordsArgs = {
  data?: Maybe<Array<Maybe<BillingReceiptHistoryRecordsCreateInput>>>;
};


export type MutationUpdateBillingReceiptHistoryRecordArgs = {
  id: Scalars['ID'];
  data?: Maybe<BillingReceiptHistoryRecordUpdateInput>;
};


export type MutationUpdateBillingReceiptHistoryRecordsArgs = {
  data?: Maybe<Array<Maybe<BillingReceiptHistoryRecordsUpdateInput>>>;
};


export type MutationDeleteBillingReceiptHistoryRecordArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteBillingReceiptHistoryRecordsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateBillingReceiptArgs = {
  data?: Maybe<BillingReceiptCreateInput>;
};


export type MutationCreateBillingReceiptsArgs = {
  data?: Maybe<Array<Maybe<BillingReceiptsCreateInput>>>;
};


export type MutationUpdateBillingReceiptArgs = {
  id: Scalars['ID'];
  data?: Maybe<BillingReceiptUpdateInput>;
};


export type MutationUpdateBillingReceiptsArgs = {
  data?: Maybe<Array<Maybe<BillingReceiptsUpdateInput>>>;
};


export type MutationDeleteBillingReceiptArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteBillingReceiptsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateTicketHistoryRecordArgs = {
  data?: Maybe<TicketHistoryRecordCreateInput>;
};


export type MutationCreateTicketHistoryRecordsArgs = {
  data?: Maybe<Array<Maybe<TicketHistoryRecordsCreateInput>>>;
};


export type MutationUpdateTicketHistoryRecordArgs = {
  id: Scalars['ID'];
  data?: Maybe<TicketHistoryRecordUpdateInput>;
};


export type MutationUpdateTicketHistoryRecordsArgs = {
  data?: Maybe<Array<Maybe<TicketHistoryRecordsUpdateInput>>>;
};


export type MutationDeleteTicketHistoryRecordArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTicketHistoryRecordsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateTicketArgs = {
  data?: Maybe<TicketCreateInput>;
};


export type MutationCreateTicketsArgs = {
  data?: Maybe<Array<Maybe<TicketsCreateInput>>>;
};


export type MutationUpdateTicketArgs = {
  id: Scalars['ID'];
  data?: Maybe<TicketUpdateInput>;
};


export type MutationUpdateTicketsArgs = {
  data?: Maybe<Array<Maybe<TicketsUpdateInput>>>;
};


export type MutationDeleteTicketArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTicketsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateTicketSourceHistoryRecordArgs = {
  data?: Maybe<TicketSourceHistoryRecordCreateInput>;
};


export type MutationCreateTicketSourceHistoryRecordsArgs = {
  data?: Maybe<Array<Maybe<TicketSourceHistoryRecordsCreateInput>>>;
};


export type MutationUpdateTicketSourceHistoryRecordArgs = {
  id: Scalars['ID'];
  data?: Maybe<TicketSourceHistoryRecordUpdateInput>;
};


export type MutationUpdateTicketSourceHistoryRecordsArgs = {
  data?: Maybe<Array<Maybe<TicketSourceHistoryRecordsUpdateInput>>>;
};


export type MutationDeleteTicketSourceHistoryRecordArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTicketSourceHistoryRecordsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateTicketSourceArgs = {
  data?: Maybe<TicketSourceCreateInput>;
};


export type MutationCreateTicketSourcesArgs = {
  data?: Maybe<Array<Maybe<TicketSourcesCreateInput>>>;
};


export type MutationUpdateTicketSourceArgs = {
  id: Scalars['ID'];
  data?: Maybe<TicketSourceUpdateInput>;
};


export type MutationUpdateTicketSourcesArgs = {
  data?: Maybe<Array<Maybe<TicketSourcesUpdateInput>>>;
};


export type MutationDeleteTicketSourceArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTicketSourcesArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateTicketClassifierHistoryRecordArgs = {
  data?: Maybe<TicketClassifierHistoryRecordCreateInput>;
};


export type MutationCreateTicketClassifierHistoryRecordsArgs = {
  data?: Maybe<Array<Maybe<TicketClassifierHistoryRecordsCreateInput>>>;
};


export type MutationUpdateTicketClassifierHistoryRecordArgs = {
  id: Scalars['ID'];
  data?: Maybe<TicketClassifierHistoryRecordUpdateInput>;
};


export type MutationUpdateTicketClassifierHistoryRecordsArgs = {
  data?: Maybe<Array<Maybe<TicketClassifierHistoryRecordsUpdateInput>>>;
};


export type MutationDeleteTicketClassifierHistoryRecordArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTicketClassifierHistoryRecordsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateTicketClassifierArgs = {
  data?: Maybe<TicketClassifierCreateInput>;
};


export type MutationCreateTicketClassifiersArgs = {
  data?: Maybe<Array<Maybe<TicketClassifiersCreateInput>>>;
};


export type MutationUpdateTicketClassifierArgs = {
  id: Scalars['ID'];
  data?: Maybe<TicketClassifierUpdateInput>;
};


export type MutationUpdateTicketClassifiersArgs = {
  data?: Maybe<Array<Maybe<TicketClassifiersUpdateInput>>>;
};


export type MutationDeleteTicketClassifierArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTicketClassifiersArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateTicketStatusHistoryRecordArgs = {
  data?: Maybe<TicketStatusHistoryRecordCreateInput>;
};


export type MutationCreateTicketStatusHistoryRecordsArgs = {
  data?: Maybe<Array<Maybe<TicketStatusHistoryRecordsCreateInput>>>;
};


export type MutationUpdateTicketStatusHistoryRecordArgs = {
  id: Scalars['ID'];
  data?: Maybe<TicketStatusHistoryRecordUpdateInput>;
};


export type MutationUpdateTicketStatusHistoryRecordsArgs = {
  data?: Maybe<Array<Maybe<TicketStatusHistoryRecordsUpdateInput>>>;
};


export type MutationDeleteTicketStatusHistoryRecordArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTicketStatusHistoryRecordsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateTicketStatusArgs = {
  data?: Maybe<TicketStatusCreateInput>;
};


export type MutationCreateTicketStatusesArgs = {
  data?: Maybe<Array<Maybe<TicketStatusesCreateInput>>>;
};


export type MutationUpdateTicketStatusArgs = {
  id: Scalars['ID'];
  data?: Maybe<TicketStatusUpdateInput>;
};


export type MutationUpdateTicketStatusesArgs = {
  data?: Maybe<Array<Maybe<TicketStatusesUpdateInput>>>;
};


export type MutationDeleteTicketStatusArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTicketStatusesArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationStartPasswordRecoveryArgs = {
  email: Scalars['String'];
};


export type MutationChangePasswordWithTokenArgs = {
  token: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRegisterNewUserArgs = {
  data: RegisterNewUserInput;
};


export type MutationAuthenticateUserWithFirebaseIdTokenArgs = {
  data: AuthenticateUserWithFirebaseIdTokenInput;
};


export type MutationRegisterNewOrganizationArgs = {
  data: RegisterNewOrganizationInput;
};


export type MutationInviteNewOrganizationEmployeeArgs = {
  data: InviteNewOrganizationEmployeeInput;
};


export type MutationAcceptOrRejectOrganizationInviteByIdArgs = {
  id: Scalars['ID'];
  data: AcceptOrRejectOrganizationInviteInput;
};


export type MutationAcceptOrRejectOrganizationInviteByCodeArgs = {
  inviteCode: Scalars['String'];
  data: AcceptOrRejectOrganizationInviteInput;
};


export type MutationAuthenticateUserWithPasswordArgs = {
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};


export type MutationUpdateAuthenticatedUserArgs = {
  data?: Maybe<UserUpdateInput>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}
