export function TodosError({ error }) {
    if (!error) return null;

    return <div style={{ color: "red" }}>Aldaa: {error}</div>;
}
