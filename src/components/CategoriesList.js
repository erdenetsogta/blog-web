import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { categories } from "../mockdata/categories";

export function CategoriesList() {
    return (
        <>
            {categories.map((angilal) => (
                <ListItem category={angilal} />
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
                        {category.name} #{category.id}
                    </div>

                    <div>
                        <Button variant="outline-primary">Засах</Button> <Button variant="outline-danger">Устгах</Button>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}
