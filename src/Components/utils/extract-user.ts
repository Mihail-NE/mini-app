import { LocalUser, User } from "../../types/user";


export const extractUser = (user: User): LocalUser => ({
  login: user.login,
  id: user.id,
  node_id: user.node_id,
  avatar: user.avatar_url,
  name: user.name,
  company: user.company,
  blog: user.blog,
  location: user.location,
  bio: user.bio,
  twitter: user.twitter_username,
  repos: user.public_repos,
  followers: user.followers,
  following: user.following,
  created: user.created_at,
})
