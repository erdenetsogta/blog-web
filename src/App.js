import "bootstrap/dist/css/bootstrap.min.css";
import "react-awesome-button/dist/styles.css";
import Container from "react-bootstrap/Container";
import { Categories } from "./components/Categories";

function App() {
    return (
        <Container>
            <Categories />
        </Container>
    );
}

export default App;
