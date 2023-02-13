import axios from "axios";

export function useCreateArticle() {
    function createArticle({ title, categoryId, text }) {
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

    return createArticle;
}
