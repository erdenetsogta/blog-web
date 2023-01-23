import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CategoriesEdit } from "./CategoriesEdit";
import { CategoriesList } from "./CategoriesList";

export function Categories() {
    const [searchParams, setSearchParams] = useSearchParams({});

    const [list, setList] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((req) => req.json())
            .then((data) => setList(data.products));
    }, []);

    function closeModal() {
        setSearchParams({});
    }

    const editing = searchParams.get("editing") === "new";

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1>Ангилал</h1>
                <button className="btn btn-success" onClick={() => setSearchParams({ editing: "new" })}>
                    Шинэ
                </button>
            </div>

            <CategoriesList list={list} />
            <CategoriesEdit show={editing} onClose={closeModal} />
        </div>
    );
}
