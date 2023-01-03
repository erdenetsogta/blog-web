import Card from "./components/Card";

export function Header({ xyzz }) {
    return (
        <>
            {xyzz}
            <Card />
            <Card />
            <Article />
        </>
    );
}

export function Article() {
    return <div>hi</div>;
}
