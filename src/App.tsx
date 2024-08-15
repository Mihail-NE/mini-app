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
                {...defaultUser}
            />
        </Container>
    );
}

export default App;
