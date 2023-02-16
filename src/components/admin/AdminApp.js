import axios from "axios";
import { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { UserContext } from "../../App";
import { Articles } from "./Articles";
import { ArticlesNew } from "./ArticlesNew";
import { Categories } from "./Categories";
import { Todos } from "./Todos";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin() {
        axios
            .get(`http://localhost:8000/login?username=${username}&password=${password}`)
            .then((res) => {
                const { data, status } = res;
                if (status === 200) {
                    const { token } = data;
                    localStorage.setItem("loginToken", token);
                    window.location.reload();
                }
            })
            .catch(({ response, code }) => {
                if (response.status === 401) {
                    alert("Нууц үг эсвэл нэр буруу байна");
                } else {
                    alert(code);
                }
            });
    }

    return (
        <div style={{ width: 200, margin: "2em auto" }}>
            <input className="form-control" placeholder="Хэрэглэгчийн нэр" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" className="form-control" placeholder="Нууц үг" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className="btn btn-primary" onClick={handleLogin}>
                Нэвтрэх
            </button>
        </div>
    );
}

export function AdminApp() {
    const displayName = useContext(UserContext);

    if (!localStorage.getItem("loginToken")) {
        return <Login />;
    }

    return (
        <>
            {displayName.greeting} {displayName.name}
            <AdminNavbar />
            <div style={{ maxWidth: 700, margin: "2rem auto" }}>
                <Routes>
                    <Route path="/" element={<Navigate to="/admin/categories" />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/todos" element={<Todos />} />
                    <Route path="/articles" element={<Articles />} />
                    <Route path="/articles/new" element={<ArticlesNew />} />
                </Routes>
            </div>
        </>
    );
}

function AdminNavbar() {
    const displayName = useContext(UserContext);

    // const theme = useContext(ThemeContext); //dark, light

    function logout() {
        localStorage.removeItem("loginToken");
        window.location.reload();
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    {displayName.greeting} {displayName.name}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link to="/admin/categories" as={NavLink}>
                            Categories
                        </Nav.Link>
                        <Nav.Link to="/admin/todos" as={NavLink}>
                            Todo
                        </Nav.Link>
                        <Nav.Link to="/admin/articles" as={NavLink}>
                            Articles
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <button onClick={logout}>Гарах</button>
            </Container>
        </Navbar>
    );
}
