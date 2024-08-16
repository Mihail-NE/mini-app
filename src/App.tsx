import Card from "./components/Card/Card";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import { defaultUser } from "./mock";
import { useState } from "react";
import { LocalUser, NotFoundError, User } from "./types/user";
import { extractUser } from "./components/utils/extract-user";

const BASE_URL = "https//api.github.com/users/";

function App() {
    const [user, setUser] = useState<LocalUser | null>(defaultUser);

    const fetchUser = async (username: string) => {
        const url = BASE_URL + username;
        const response = await fetch(url);
        const user = (await response.json()) as User | NotFoundError;

        setUser(extractUser(user));
        if(isUser(user))
    };
    return (
        <Container>
            <Header />
            <Search hasError={!user} onSubmit={fetchUser} />
            {user && <Card {...defaultUser} />}
        </Container>
    );
}

export default App;
