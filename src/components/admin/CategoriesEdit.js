import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export function CategoriesEdit({ show, onClose }) {
    const [name, setName] = useState("");

    function handleSave() {
        axios
            .post("https://dummyjson.com/products", {
                name: name,
            })
            .then((res) => {
                const { data, status } = res;
                console.log({ data, status });
            });
    }

    return (
        <>
            <Modal show={show} onHide={onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
