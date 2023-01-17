import { useState } from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import { TodoListItem } from "./TodosListItem";
import { TodosNew } from "./TodosNew";

export function Todos() {
    const [todos, setTodos] = useState([]);

    function handleSave(text) {
        // const newTodo = ;
        const newTodos = [
            {
                text: text,
                id: uuidv4(),
            },
            ...todos,
        ];
        setTodos(newTodos);
        toast.warn("🦄 Wow so easy!", {
            position: "top-right",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    function handleDelete(index) {
        if (window.confirm("Устах уу?")) {
            const newTodos = [...todos];
            newTodos.splice(index, 1);
            setTodos(newTodos);
        }
    }

    function handleUpdate(index, text) {
        const newTodos = [...todos];
        newTodos[index].text = text;
        setTodos(newTodos);
    }

    return (
        <div>
            <TodosNew onSave={handleSave} />

            <ul>
                {todos.map((todo, index) => {
                    return <TodoListItem key={todo.id} todo={todo} onUpdate={(text) => handleUpdate(index, text)} onDelete={() => handleDelete(index)} />;
                })}
            </ul>
        </div>
    );
}
