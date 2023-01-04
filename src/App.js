import "bootstrap/dist/css/bootstrap.min.css";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { Header } from "./Header";

// or less ideally
import { Button } from "react-bootstrap";
import { CategoryList } from "./components/CategoryList";
import "./main.css";

const containerStyle = {
    backgroundColor: "#ccc",
    fontSize: "20px",
};

function App() {
    function sum(a, b) {
        return a + b;
    }
    const name = "Sarnai 1";

    return (
        <>
            <div className="App" style={{ ...containerStyle, textAlign: "center" }}>
                <Header xyzz="Jishee garchig" />
                <AwesomeButton type="primary">Button</AwesomeButton>
                <Button variant="primary">Primary</Button> {name}
                <div
                    style={{
                        backgroundColor: "#ccc",
                        fontSize: "20px",
                    }}
                >
                    {sum(1, 2)}
                </div>
            </div>

            <hr />

            <CategoryList editable={false} deletable={false} />

            <div></div>
        </>
    );
}

export default App;
