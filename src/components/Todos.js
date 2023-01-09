import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// const initialTodos = ["gertee tseverleh - 1", "shalaa ugaah", "hool hiih", "hool hiih"];
// const litodos = [<li>gertee tseverleh</li>, <li>shalaa ugaah</li>, <li>hool hiih</li>];

const a = ["asdasda"]; // huuchin butets
const a1 = [{ text: "sdfsdfsdfs", id: 123, done: true }]; // shine butets

export function Todos({ message }) {
    const [text, setText] = useState("");
    const [todos, setTodos] = useState([]);
    const [error, setError] = useState("");

    function handleTextChange(e) {
        setText(e.target.value);
    }

    function addTodo() {
        if (text === "") {
            setError("Utgaa bichne uu");
        } else {
            const newTodo = {
                text: text,
                done: false,
                id: uuidv4(),
            };
            const newTodos = [newTodo, ...todos];
            setTodos(newTodos);
            setText("");
            setError("");
        }
    }

    function handleDelete12(bairlal1) {
        if (window.confirm("Устах уу?")) {
            const newTodos = [...todos];
            newTodos.splice(bairlal1, 1); // delete item from array using index
            setTodos(newTodos);
        }
    }

    function handleDoneChange(id, e) {
        const newTodos = [...todos];

        let index;
        for (let i = 0; i < todos.length; i++) {
            if (id === todos[i].id) {
                index = i;
                break;
            }
        }
        // const index = newTodos.findIndex((todo) => todo.id === id);

        newTodos[index].done = !newTodos[index].done; // e.target.checked;

        setTodos(newTodos);
    }

    return (
        <div>
            <input value={text} style={{ borderColor: error ? "red" : "black" }} onChange={handleTextChange} />
            <button onClick={addTodo}>Нэмэх</button>

            {error && <div style={{ color: "red" }}>Aldaa: {error}</div>}

            <ul>
                {todos.map((todo1, index1) => {
                    const d = index1 * 2;

                    return (
                        <li key={todo1.id} style={{ textDecoration: todo1.done ? "line-through" : "none" }}>
                            <input type="checkbox" onChange={(e) => handleDoneChange(todo1.id, e)} /> {todo1.text} <button onClick={() => handleDelete12(index1, d)}>Устгах</button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
