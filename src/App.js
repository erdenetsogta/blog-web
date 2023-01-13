import "bootstrap/dist/css/bootstrap.min.css";
import "react-awesome-button/dist/styles.css";
import Container from "react-bootstrap/Container";
import { Greetings } from "./components/Greeting";
// import { Categories } from "./components/Categories";
import { Todos } from "./components/Todos";

const age = 77;

function App() {
    return (
        <Container>
            <Todos />
            <Greetings name="Baldan" age={20} />
            <Greetings name="Yunden" age={19} />
            <Greetings name="Horolmaa" age={age} />
        </Container>
    );
}

export default App;
