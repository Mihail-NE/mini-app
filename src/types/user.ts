export type localUser = {
    login: string;
    id: number;
    avatar: string;
    name: string;
    company: string;
    blog: string;
    location: string;
    bio: string;
    twitter: string;
    repos: number;
    followers: number;
    following: number;
    created: string;
};

export type User = {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    name: string;
    company: string;
    blog: string;
    location: string;
    bio: string | null;
    twitter_username: string | null;
    public_repos: number;
    followers: number;
    following: number;
    created_at: string;
};

export type NotFoundError = {
    message: string;
    documentation_url: string;
};
