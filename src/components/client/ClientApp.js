import { Link, Route, Routes, useParams } from "react-router-dom";

export function ClientApp() {
    return (
        <div>
            <Link to="/">Home</Link> <Link to="/blog">Blog</Link>
            <Routes>
                <Route path="/" element={<div>Home page</div>} />
                <Route path="/blog" element={<div>Blog list</div>} />
                <Route path="/blog/:slug" element={<SingleBlog />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

function SingleBlog() {
    const { slug } = useParams();

    return <div>Single Blog component : {slug}</div>;
}

function NotFound() {
    return <div>Not Found</div>;
}
