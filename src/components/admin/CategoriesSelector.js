import { useCategories } from "./useCategories";

export function CategoriesSelector({ value, onChange }) {
    const categories = useCategories();

    return (
        <>
            <select value={value} onChange={(e) => onChange(e.target.value)}>
                <option value="">Ангилалгүй</option>
                {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                        {category.name}
                    </option>
                ))}
            </select>
        </>
    );
}
