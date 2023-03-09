import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useState } from "react";
import { useArticleMutations } from "./articleMutations";
import { CategoriesSelector } from "./CategoriesSelector";

export function ArticlesNew() {
    const [content, setContent] = useState();
    const [title, setTitle] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const { createArticle } = useArticleMutations();

    return (
        <>
            <h1 className="mb-4">Шинэ мэдээ</h1>

            <CategoriesSelector value={categoryId} onChange={(val) => setCategoryId(val)} />

            <input className="form-control mt-4 mb-4" placeholder="Мэдээний гарчиг" value={title} onChange={(e) => setTitle(e.target.value)} />

            <CKEditor
                editor={ClassicEditor}
                data={content}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    setContent(data);
                    // console.log({ event, editor, data });
                }}
            />

            <button onClick={() => createArticle({ title, categoryId, content })}>Хадгалах</button>
        </>
    );
}
