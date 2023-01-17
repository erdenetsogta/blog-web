import { Link, Route, Routes } from "react-router-dom";
import { Categories } from "../Categories";
import { Todos } from "../Todos";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export function AdminApp() {
    return (
        <>
            <Routes>
                <Route path="/" element={<AdminNavbar />} />
                <Route path="/categories" element={<AdminNavbar />} />
                <Route path="/todos" element={<TodoNavbar />} />
            </Routes>

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
                        <Nav.Link to="/admin/categories" as={Link}>
                            Categories
                        </Nav.Link>
                        <Nav.Link to="/admin/todos" as={Link}>
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
