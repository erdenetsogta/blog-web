import { AwesomeButton } from "react-awesome-button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { categories } from "../mockdata/categories";

const error = "";

export function CategoryList({ deletable, editable }) {
    if (error) {
        return null;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <Container>
            {categories.map((cat1) => (
                <ListItem cat1={cat1} editable={cat1.editable} deletable={cat1.deletable} />
            ))}
        </Container>
    );
}

function ListItem({ cat1, editable, deletable }) {
    function deleteThis() {
        alert("Delete");
    }

    return (
        <Card key={cat1.id} className="mb-2">
            <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        {cat1.name} {cat1.id}
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
