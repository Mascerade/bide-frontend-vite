export type User = {
  id: String
  username: String
  firstName: String | null
  posts: Post[]
  userGroups: GroupUser[]
  groupGeneralTokens: GeneralTokenGroupUser[]
}

export type Post = {
  id: number
  postData: String
  title: String
  conent: String
  author: User
  group: Group
}

export type Group = {
  id: number
  title: String
  description: String
  posts: Post[]
  groupUsers: GroupUser[]
  userGeneralTokens: GeneralTokenGroupUser
}

export type GeneralToken = {
  id: String
  title: String
  description: String
  groupUsers: GeneralTokenGroupUser[]
}

export type GroupUser = {
  id: number
  user: User
  group: Group
  dateJoined: String
}

export type GeneralTokenGroupUser = {
  id: number
  user: User
  group: Group
  generalToken: GeneralToken
  dateAssigned: String
}
