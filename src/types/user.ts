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
    avatar_url: string;
    name: string;
    company: string;
    blog: string;
    location: string;
    bio: string;
    twitter_username: string;
    public_repos: number;
    followers: number;
    following: number;
    created_at: string;
};

export type NotFoundError = {
    message: string;
    documentation_url: string;
};

// "login": "mark",
// "id": 297,
// "node_id": "MDQ6VXNlcjI5Nw==",
// "avatar_url": "https://avatars.githubusercontent.com/u/297?v=4",
// "name": "Mark Josef",
// "company": "Division by Zero, LLC",
// "blog": "McPhage.com",
// "location": "Buffalo, NY",
// "bio": null,
// "twitter_username": null,
// "public_repos": 40,
// "followers": 85,
// "following": 26,
// "created_at": "2008-02-15T18:28:56Z",
