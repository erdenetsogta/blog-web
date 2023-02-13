import axios from "axios";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "use-debounce";
import { CategoriesEdit } from "./CategoriesEdit";
import { CategoriesList } from "./CategoriesList";
import { useCategories } from "./useCategories";
import { useFetch } from "./useFetch";

axios.interceptors.request.use((config) => {
    console.log("Request sent to: ", config.url);
    return config;
});

export function Categories() {
    const [searchParams, setSearchParams] = useSearchParams({});
    const [query, setQuery] = useState("");
    const [searchedQuery] = useDebounce(query, 1000);
    const categories = useCategories();
    const articles = useFetch("http://localhost:8000/articles?page=1");

    console.log({ articles });

    function closeModal() {
        setSearchParams({});
    }

    const editing = searchParams.get("editing");

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1>Ангилал</h1>
                <button className="btn btn-success" onClick={() => setSearchParams({ editing: "new" })}>
                    Шинэ
                </button>
            </div>

            <input value={query} onChange={(e) => setQuery(e.target.value)} />
            {/* <button onClick={() => loadCategories(query)}>Хайх</button> */}

            <CategoriesList searchedQuery={searchedQuery} list={categories} />
            <CategoriesEdit show={editing} editingId={editing} onClose={closeModal} />
        </div>
    );
}
