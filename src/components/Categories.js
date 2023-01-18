import { useState } from "react";
import { Link } from "react-router-dom";
import { CategoriesEdit } from "./CategoriesEdit";
import { CategoriesList } from "./CategoriesList";

// [home, categories?q=ulstor]

export function Categories() {
    const [editing, setEditing] = useState(false);
    const [query, setQuery] = useState("");

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

            <input value={query} onChange={(e) => setQuery(e.target.value)} />
            <Link replace={true} to={`/admin/categories?search=${query}`}>
                Хайх
            </Link>

            {/* <Link reloadDocument to={`/admin/categories?search=${query}`}>
                Хайх
            </Link> */}

            <CategoriesList />
            <CategoriesEdit show={editing} onClose={closeModal} />
        </div>
    );
}
