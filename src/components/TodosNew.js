export function TodosNew({ text, error, handleTextChange, handleKeyUp, addTodo }) {
    return (
        <>
            <input value={text} style={{ borderColor: error ? "red" : "black" }} onChange={handleTextChange} onKeyUp={handleKeyUp} />
            <button onClick={addTodo}>Хадгалах</button>
        </>
    );
}
