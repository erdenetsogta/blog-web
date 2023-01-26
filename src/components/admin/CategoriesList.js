import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export function CategoriesList({ list }) {
    return (
        <>
            {list.map((item) => (
                <ListItem key={item.id} category={item} />
            ))}
        </>
    );
}

function ListItem({ category }) {
    function handleDelete() {
        if (window.confirm("Delete?")) {
            axios.delete(`http://localhost:8000/categories/${category.id}`).then((res) => {
                const { data, status } = res;
                console.log({ data, status });
            });
        }
    }

    return (
        <Card key={category.id} className="mb-2">
            <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                    <div>{category.name}</div>

                    <div>
                        <Button variant="outline-primary">Засах</Button>{" "}
                        <Button variant="outline-danger" onClick={handleDelete}>
                            Устгах
                        </Button>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}
