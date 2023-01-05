import { useState } from "react";
import { CategoriesEdit } from "./CategoriesEdit";
import { CategoriesList } from "./CategoriesList";

export function Categories() {
    const [editing, setEditing] = useState(false);

    function closeModal() {
        setEditing(false);
    }

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1>Ангилал</h1>
                <button className="btn btn-success" onClick={() => setEditing(true)}>
                    Шинэ
                </button>
            </div>

            <CategoriesList />

            <CategoriesEdit show={editing} onClose={closeModal} />
        </div>
    );
}
