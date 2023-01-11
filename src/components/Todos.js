import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodosError } from "./TodosError";
import { TodosList } from "./TodosList";
import { TodosNew } from "./TodosNew";

export function Todos() {
    const [text, setText] = useState("");
    const [todos, setTodos] = useState([]);
    const [error, setError] = useState("");
    const [editingTexts, setEditingTexts] = useState({});

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

    function editTodoInline(id, index) {
        const newEditingTexts = { ...editingTexts };
        newEditingTexts[id] = todos[index].text;
        setEditingTexts(newEditingTexts);
    }

    function handleEditingText(id, e) {
        const newEditingTexts = { ...editingTexts };
        newEditingTexts[id] = e.target.value;
        setEditingTexts(newEditingTexts);
    }

    function cancelEditing(id) {
        const newEditingTexts = { ...editingTexts };
        newEditingTexts[id] = undefined;
        setEditingTexts(newEditingTexts);
    }

    function updateEditingText(index, id) {
        const newTodos = [...todos];
        newTodos[index].text = editingTexts[id];
        setTodos(newTodos);

        cancelEditing(id);
    }

    function handleKeyUp(e) {
        if (e.code === "Enter") {
            addTodo();
        }
    }

    return (
        <div>
            <TodosNew text={text} error={error} handleTextChange={handleTextChange} handleKeyUp={handleKeyUp} addTodo={addTodo} />
            <TodosError error={error} />

            <TodosList
                todos={todos}
                editingTexts={editingTexts}
                handleEditingText={handleEditingText}
                cancelEditing={cancelEditing}
                updateEditingText={updateEditingText}
                handleDoneChange={handleDoneChange}
                editTodoInline={editTodoInline}
                handleDelete12={handleDelete12}
            />
        </div>
    );
}
