export type User = {
  id: number
  email: String
  username: String
  firstName: String | null
  lastName: String | null
  posts?: Post[]
  userGroups?: GroupUser[]
  groupGeneralTokens?: GeneralTokenGroupUser[]
}

export type CreateUser = Omit<
  User,
  'id' | 'posts' | 'userGroups' | 'groupGeneralTokens'
>

export type Post = {
  id: number
  postData: String
  title: String
  conent: String
  author: User
  authorId: User['id']
  group: Group
  groupId: number
}

export type Group = {
  id: number
  name: String
  description: String
  posts?: Post[]
  groupUsers?: GroupUser[]
  userGeneralTokens?: GeneralTokenGroupUser
}

export type GeneralToken = {
  id: String
  title: String
  description: String
  groupUsers?: GeneralTokenGroupUser[]
}

export type GroupUser = {
  id: number
  user: User
  userId: User['id']
  group: Group
  groupId: number
  dateJoined: String
}

export type GeneralTokenGroupUser = {
  id: number
  user: User
  userId: User['id']
  group: Group
  groupId: number
  generalToken: GeneralToken
  generalTokenId: String
  dateAssigned: String
}
