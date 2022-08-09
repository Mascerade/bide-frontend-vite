export type User = {
  id: number
  email: string
  password: string
  username: string
  firstName: string | null
  lastName: string | null
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
  postDate: string
  title: string
  content: string
  author?: User
  authorId: User['id']
  group?: Group
  groupId: number
}

export type CreatePost = Omit<
  Post,
  'id' | 'postDate' | 'author' | 'authorId' | 'group' | 'groupId'
>

export type Group = {
  id: number
  name: string
  title: string
  description: string
  posts?: Post[]
  groupUsers?: GroupUser[]
  userGeneralTokens?: GeneralTokenGroupUser[]
}

export type GeneralToken = {
  id: string
  title: string
  description: string
  groupUsers?: GeneralTokenGroupUser[] | null
}

export type GroupUser = {
  id: number
  user?: User
  userId: User['id']
  group?: Group
  groupId: number
  dateJoined: string
}

export type GeneralTokenGroupUser = {
  id: number
  user: User
  userId: User['id']
  group?: Group
  groupId: number
  generalToken?: GeneralToken
  generalTokenId: string
  dateAssigned: string
}

export type JoinGroupRequest = {
  id: number
  requestDate: string
  userRequesting?: User
  userRequestingId: number
  group?: Group
  groupId: number
}
