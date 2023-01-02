import Card from "./components/Card";
import { Article, Header } from "./Header";

import "./main.css";

function App() {
    return (
        <div className="App" style={{ backgroundColor: "#ccc" }}>
            <Header />
            <Card />
            <Card />
            <Article />
            <br />

            <Card />
        </div>
    );
}

export default App;
