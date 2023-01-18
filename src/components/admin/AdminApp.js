import { Link, NavLink, Route, Routes } from "react-router-dom";
import { Categories } from "../Categories";
import { Todos } from "../Todos";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// [category, todos, client, todos]

export function AdminApp() {
    return (
        <>
            <Routes>
                <Route path="/" element={<AdminNavbar />} />
                <Route path="/categories" element={<TodoNavbar />} />
                <Route path="/todos" element={<TodoNavbar />} />
            </Routes>
            <NavLink
                style={({ isActive }) => ({
                    background: isActive ? "red" : "teal",
                })}
                to="/admin/categories"
            >
                Categories
            </NavLink>{" "}
            <NavLink
                style={({ isActive }) => ({
                    background: isActive ? "red" : "teal",
                })}
                to="/admin/todos"
            >
                Todos
            </NavLink>
            <div style={{ maxWidth: 700, margin: "2rem auto" }}>
                <Routes>
                    <Route path="/" element={<div>Welcome to admin</div>} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/todos" element={<Todos />} />
                </Routes>
            </div>
        </>
    );
}

function AdminNavbar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link to="/admin" as={Link}>
                            Home
                        </Nav.Link>
                        <Nav.Link to="/admin/categories" as={Link}>
                            Categories
                        </Nav.Link>
                        <Nav.Link to="/admin/todos" as={Link}>
                            Todo
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

function TodoNavbar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link to="/admin" as={Link}>
                            Home
                        </Nav.Link>
                        <Nav.Link
                            to="/admin/categories"
                            as={NavLink}
                            style={({ isActive }) => ({
                                background: isActive ? "red" : "none",
                            })}
                        >
                            Categories
                        </Nav.Link>
                        <Nav.Link
                            to="/admin/todos"
                            as={NavLink}
                            style={({ isActive }) => ({
                                background: isActive ? "red" : "none",
                                fontSize: isActive ? 30 : 20,
                            })}
                        >
                            Todo
                        </Nav.Link>
                        <Nav.Link to="/admin/todos" as={Link}>
                            Todo create
                        </Nav.Link>
                        <Nav.Link to="/admin/todos" as={Link}>
                            Todo category
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
