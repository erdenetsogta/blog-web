import axios from "axios";
import { useEffect, useState } from "react";

export function useCategories() {
    const [list, setList] = useState([]);

    function loadCategories(query = "") {
        axios.get(`http://localhost:8000/categories?q=${query}`).then((res) => {
            const { data, status } = res;
            if (status === 200) {
                setList(data);
            } else {
                alert(`Aldaa garlaa: ${status}`);
            }
        });
    }

    useEffect(() => {
        loadCategories("");
    }, []);

    return list;
}
