import { useState } from "react";
import { Link } from "react-router-dom";

export function Articles() {
    const [text, setText] = useState();

    return (
        <>
            <Link to="/admin/articles/new" className="btn btn-primary">
                Шинэ мэдээ
            </Link>
        </>
    );
}
