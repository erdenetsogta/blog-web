import axios from "axios";
import parse from "html-react-parser";
import { useEffect, useState } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";

export function ClientApp() {
    return (
        <div>
            {/* <ParticlesSample /> */}
            <div>
                <Link to="/">Home</Link> <Link to="/blog">Blog</Link>
                <Routes>
                    <Route path="/" element={<div>Home page</div>} />
                    <Route path="/blog" element={<div>Blog list</div>} />
                    <Route path="/blog/:id" element={<SingleBlog />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </div>
    );
}

function SingleBlog() {
    const { id } = useParams();
    const [article, setArticle] = useState();

    useEffect(() => {
        axios.get(`http://localhost:8000/articles/${id}`).then((res) => {
            const { data, status } = res;
            if (status === 200) {
                setArticle(data);
            } else {
                alert(`Aldaa garlaa: ${status}`);
            }
        });
    }, []);

    if (!article) return <div>Loading...</div>;

    return (
        <div className="container" style={{ maxWidth: 700 }}>
            <h1 className="mb-4">{article.title}</h1>

            <div className="content">{parse(article.text)}</div>
        </div>
    );
}

function NotFound() {
    return <div>Not Found</div>;
}
