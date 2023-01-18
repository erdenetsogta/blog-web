import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { CategoriesEdit } from "./CategoriesEdit";
import { CategoriesList } from "./CategoriesList";

// [home, categories?q=ulstor]

export function Categories() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams({});

    function closeModal() {
        setSearchParams({});
    }

    const editing = searchParams.get("editing") === "new";

    return (
        <div>
            <button onClick={() => navigate(-1)}>Буцах</button>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1>Ангилал</h1>
                <button className="btn btn-success" onClick={() => setSearchParams({ editing: "new" })}>
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
