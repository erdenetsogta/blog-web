import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

export function Articles() {
    const [list, setList] = useState([]);
    const [searchParams] = useSearchParams();
    const [pages, setPages] = useState();

    const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;

    function loadArticles(page, query = "") {
        axios.get(`http://localhost:8000/articles?q=${query}&page=${page}`).then((res) => {
            const { data, status } = res;
            if (status === 200) {
                const { list, count } = data;
                setList(list);
                setPages(Math.ceil(count / 10));
            } else {
                alert(`Aldaa garlaa: ${status}`);
            }
        });
    }

    useEffect(() => {
        loadArticles(page, "");
    }, [page]);

    return (
        <>
            <Link to="/admin/articles/new" className="btn btn-primary">
                Шинэ мэдээ
            </Link>

            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Гарчиг</th>
                        <th>Ангилал</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((article) => (
                        <tr key={article.id}>
                            <td>{article.title}</td>
                            <td>{article.categoryId}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <nav aria-label="Page navigation example">
                <ul class="pagination" style={{ flexWrap: "wrap" }}>
                    {page !== 1 && (
                        <li class="page-item">
                            <Link to={`?page=${page - 1}`} class="page-link">
                                Өмнөх
                            </Link>
                        </li>
                    )}

                    {[...Array(pages)].map((_, index) => (
                        <li key={index} class={`page-item ${page == index + 1 ? "active" : ""}`}>
                            <Link to={`?page=${index + 1}`} class="page-link">
                                {index + 1}
                            </Link>
                        </li>
                    ))}

                    {page !== pages && (
                        <li class="page-item">
                            <Link to={`?page=${page + 1}`} class="page-link">
                                Дараах
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
        </>
    );
}
