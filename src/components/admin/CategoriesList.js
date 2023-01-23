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
    return (
        <Card key={category.id} className="mb-2">
            <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        {category.title} #{category.id}
                    </div>

                    <div>
                        <Button variant="outline-primary">Засах</Button> <Button variant="outline-danger">Устгах</Button>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}
