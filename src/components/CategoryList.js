import { useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { categories } from "../mockdata/categories";

const error = "";

export function CategoryList({ deletable, editable }) {
    const [counter, setCounter] = useState(10); //hook
    const [editing, setEditing] = useState(); // ehnii utga
    const [name, setName] = useState("hello");
    const [dname, setDname] = useState("");

    if (error) {
        return null;
    }

    console.log("rendering...");

    if (error) {
        return <div>{error}</div>;
    }

    function increment(event) {
        console.log(event);
        if (true) {
            setCounter(counter + 1);
        }
        setName("pinecone");
    }

    function handleChange(event) {
        setName(event.target.value);
    }
    console.log(editing);

    return (
        <Container>
            {counter}

            {editing && (
                <div>
                    <input value={name} onChange={handleChange} />
                    <button onClick={() => setEditing(false)}>close</button>
                </div>
            )}

            {name}
            <button onClick={increment}>Add</button>
            <button onClick={() => setEditing(true)}>Шинэ</button>
            {categories.map((cat1) => (
                <ListItem name={name} cat1={cat1} editable={cat1.editable} deletable={cat1.deletable} />
            ))}
            {name}
            {name}
        </Container>
    );
}

function ListItem({ name, cat1, editable, deletable }) {
    function deleteThis() {
        alert("Delete");
    }

    return (
        <Card key={cat1.id} className="mb-2">
            <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        {cat1.name} {cat1.id} {name}
                    </div>

                    <div>
                        {editable && <button className="btn btn-primary">Засах</button>}

                        {deletable ? (
                            <button className="btn btn-danger" onClick={deleteThis}>
                                Устгах
                            </button>
                        ) : null}

                        <AwesomeButton type="primary" onPress={deleteThis}>
                            Button
                        </AwesomeButton>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}
