import "bootstrap/dist/css/bootstrap.min.css";
import "react-awesome-button/dist/styles.css";
import Container from "react-bootstrap/Container";
// import { Categories } from "./components/Categories";
import { Todos } from "./components/Todos";

const a = "hi";

function App() {
    return (
        <Container>
            {/* <Categories /> */}
            <Todos message={a} />
        </Container>
    );
}

export default App;
