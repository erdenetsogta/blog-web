import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";

export function CategoriesEdit({ show, onClose, onComplete }) {
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);

    function handleSave() {
        setLoading(true);

        axios
            .post("http://localhost:8000/categories", {
                name: name,
            })
            .then((res) => {
                const { status } = res;
                if (status === 201) {
                    onComplete();
                    onClose();
                    setLoading(false);
                    setName("");
                }
            });
    }

    return (
        <>
            <Modal show={show} onHide={onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input disabled={loading} className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                </Modal.Body>
                <Modal.Footer>
                    <Button disabled={loading} variant="secondary" onClick={onClose}>
                        Close
                    </Button>
                    <Button loading disabled={loading} variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>

                {loading && (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                )}
            </Modal>
        </>
    );
}
