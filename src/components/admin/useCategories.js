import axios from "axios";
import { useEffect, useState } from "react";

export function useCategories(searchedQuery) {
    const [list, setList] = useState([]);

    function loadCategories(query = "") {
        const token = localStorage.getItem("loginToken");
        axios.get(`http://localhost:8000/categories?q=${query}&token=${token}`).then((res) => {
            const { data, status } = res;
            if (status === 200) {
                setList(data);
            } else {
                alert(`Aldaa garlaa: ${status}`);
            }
        });
    }

    useEffect(() => {
        loadCategories(searchedQuery);
    }, [searchedQuery]);

    return list;
}
