import { User } from "../../types/user";
export const isGithubUser = (user: User): user is User => 'id' in user;
