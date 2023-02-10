import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Articles() {
    const [list, setList] = useState([]);

    function loadArticles(query = "") {
        axios.get(`http://localhost:8000/articles?q=${query}`).then((res) => {
            const { data, status } = res;
            if (status === 200) {
                setList(data);
            } else {
                alert(`Aldaa garlaa: ${status}`);
            }
        });
    }

    useEffect(() => {
        loadArticles();
    }, []);

    return (
        <>
            <Link to="/admin/articles/new" className="btn btn-primary">
                Шинэ мэдээ
            </Link>

            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Гарчиг</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((article) => (
                        <tr key={article.id}>
                            <td>{article.title}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                        <a class="page-link" href="#">
                            Previous
                        </a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">
                            1
                        </a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">
                            2
                        </a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">
                            3
                        </a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">
                            Next
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
}
