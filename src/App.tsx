import Card from "./Components/Card/Card";
import Container from "./Components/Container/Container";
import Header from "./Components/Header/Header";
import Search from "./Components/Search/Search";
import { defaultUser } from "./mock";
import { useState } from "react";
import { LocalUser, User } from "./types/user";
import { extractUser } from "./Components/utils/extract-user";
import { isGithubUser } from "./Components/utils/typeguards";

const BASE_URL = "https://api.github.com/users/";

function App() {
    const [user, setUser] = useState<LocalUser | null>(defaultUser);

    const fetchUser = async (username: string) => {
        const url = BASE_URL + username;
        const response = await fetch(url);
        const user = await response.json() as User;

        if (isGithubUser(user)) {
            setUser(extractUser(user));
        } else {
            setUser(null);
        }
    };

    return (
        <Container>
            <Header />
            <Search hasError={!user} onSubmit={fetchUser} />
            {user && <Card {...user} />}
        </Container>
    );
}

export default App;
