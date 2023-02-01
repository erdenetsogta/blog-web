import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useState } from "react";
import { CategoriesSelector } from "./CategoriesSelector";

export function ArticlesNew() {
    const [text, setText] = useState();
    const [categoryId, setCategoryId] = useState("");

    return (
        <>
            <CategoriesSelector value={categoryId} onChange={(val) => setCategoryId(val)} />

            <CKEditor
                editor={ClassicEditor}
                data={text}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    setText(data);
                    // console.log({ event, editor, data });
                }}
            />

            <div>{text}</div>

            <div dangerouslySetInnerHTML={{ __html: text }}></div>
        </>
    );
}
