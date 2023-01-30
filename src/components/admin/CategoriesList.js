import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useSearchParams } from "react-router-dom";

export function CategoriesList({ list, onChange }) {
    return (
        <>
            {list.map((item) => (
                <ListItem key={item.id} category={item} onChange={onChange} />
            ))}
        </>
    );
}

function ListItem({ category, onChange }) {
    const [searchParams, setSearchParams] = useSearchParams({});

    function handleDelete() {
        if (window.confirm("Delete?")) {
            axios.delete(`http://localhost:8000/categories/${category.id}`).then((res) => {
                const { status } = res;
                if (status === 200) {
                    onChange();
                }
            });
        }
    }

    return (
        <Card key={category.id} className="mb-2">
            <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                    <div>{category.name}</div>

                    <div>
                        <Button variant="outline-primary" onClick={() => setSearchParams({ editing: category.id })}>
                            Засах
                        </Button>{" "}
                        <Button variant="outline-danger" onClick={handleDelete}>
                            Устгах
                        </Button>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}
