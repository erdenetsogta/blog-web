import { useEffect, useState } from "react";
import { TodosError } from "./TodosError";

export function TodosNew({ onSave }) {
    const [text, setText] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        console.log("effect");
    }, [text]);

    function handleTextChange(e) {
        setText(e.target.value);
    }

    function handleSave() {
        if (text === "") {
            setError("Utgaa bichne uu");
        } else {
            onSave(text);
            setError("");
            setText("");
        }
    }

    function handleKeyUp(e) {
        if (e.code === "Enter") {
            handleSave();
        }
    }

    return (
        <>
            <input value={text} style={{ borderColor: error ? "red" : "black" }} onChange={handleTextChange} onKeyUp={handleKeyUp} />
            <button onClick={handleSave}>Хадгалах</button>
            <TodosError error={error} />
        </>
    );
}
