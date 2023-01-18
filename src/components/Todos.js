import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import { TodoListItem } from "./TodosListItem";
import { TodosNew } from "./TodosNew";

export function Todos() {
    const [todos, setTodos] = useState([]);
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams({ n: 3 });

    console.log(searchParams.get("name"));
    console.log(searchParams.get("id"));
    console.log(searchParams.get("job"));

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
        toast.success("🦄 Success!");
        navigate("/admin");
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

    function changeSearchParam() {
        setSearchParams({ job: "developer" });
    }

    return (
        <div>
            <button onClick={changeSearchParam}>change</button>
            <TodosNew onSave={handleSave} />

            <ul>
                {todos.map((todo, index) => {
                    return <TodoListItem key={todo.id} todo={todo} onUpdate={(text) => handleUpdate(index, text)} onDelete={() => handleDelete(index)} />;
                })}
            </ul>
        </div>
    );
}
