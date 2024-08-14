import Card from "./components/Card/Card";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import { defaultUser } from "./mock";

function App() {
    return (
        <Container>
            <Header />
            <Search hasError onSubmit={() => {}} />
            <Card
                repos={defaultUser.repos}
                followers={defaultUser.followers}
                following={defaultUser.following}
                login={defaultUser.login}
                name={defaultUser.name}
                created={defaultUser.created}
                avatar={defaultUser.avatar}
                bio={defaultUser.bio}
            />
        </Container>
    );
}

export default App;
