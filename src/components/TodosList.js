export function TodosList({ todos, editingTexts, handleEditingText, cancelEditing, updateEditingText, handleDoneChange, editTodoInline, handleDelete12 }) {
    return (
        <ul>
            {todos.map((todo1, index1) => {
                const d = index1 * 2;

                return (
                    <li key={todo1.id} style={{ textDecoration: todo1.done ? "line-through" : "none" }}>
                        {editingTexts[todo1.id] !== undefined ? (
                            <>
                                <NormalItem editingTexts={editingTexts} todo1={todo1} handleEditingText={handleEditingText} cancelEditing={cancelEditing} updateEditingText={updateEditingText} index1={index1} />
                            </>
                        ) : (
                            <>
                                <EditingItem handleDoneChange={handleDoneChange} todo1={todo1} editTodoInline={editTodoInline} handleDelete12={handleDelete12} index1={index1} />
                            </>
                        )}
                    </li>
                );
            })}
        </ul>
    );
}

function NormalItem({ editingTexts, todo1, handleEditingText, cancelEditing, updateEditingText, index1 }) {
    return (
        <>
            <input value={editingTexts[todo1.id]} onChange={(e) => handleEditingText(todo1.id, e)} />
            <button onClick={() => cancelEditing(todo1.id)}>Болих</button>
            <button onClick={() => updateEditingText(index1, todo1.id)}>Хадгалах</button>
        </>
    );
}

function EditingItem({ handleDoneChange, todo1, editTodoInline, handleDelete12, index1 }) {
    return (
        <>
            <input type="checkbox" onChange={(e) => handleDoneChange(todo1.id, e)} /> {todo1.text}
            {!todo1.done && (
                <>
                    <button onClick={() => editTodoInline(todo1.id, index1)}>Засах</button>
                </>
            )}
            <button onClick={() => handleDelete12(index1)}>Устгах</button>
        </>
    );
}
