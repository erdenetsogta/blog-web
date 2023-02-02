import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import axios from "axios";
import { useState } from "react";
import { CategoriesSelector } from "./CategoriesSelector";

export function ArticlesNew() {
    const [text, setText] = useState();
    const [title, setTitle] = useState("");
    const [categoryId, setCategoryId] = useState("");

    function submit() {
        console.log({ text, categoryId });

        axios
            .post("http://localhost:8000/articles", {
                title, // title: title,
                categoryId, //  categoryId: categoryId,
                text, // text: text,
            })
            .then((res) => {
                const { status } = res;
                if (status === 201) {
                    alert("Success");
                }
            });
    }

    return (
        <>
            <h1 className="mb-4">Шинэ мэдээ</h1>

            <CategoriesSelector value={categoryId} onChange={(val) => setCategoryId(val)} />

            <input className="form-control mt-4 mb-4" placeholder="Мэдээний гарчиг" value={title} onChange={(e) => setTitle(e.target.value)} />

            <CKEditor
                editor={ClassicEditor}
                data={text}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    setText(data);
                    // console.log({ event, editor, data });
                }}
            />

            <button onClick={submit}>Хадгалах</button>

            {/* <div>{text}</div>

            <div dangerouslySetInnerHTML={{ __html: text }}></div> */}
        </>
    );
}
