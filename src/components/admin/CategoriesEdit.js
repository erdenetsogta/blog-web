import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";

export function CategoriesEdit({ show, onClose, onComplete, editingId }) {
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (editingId) {
            axios.get(`http://localhost:8000/categories/${editingId}`).then((res) => {
                const { data, status } = res;
                if (status === 200) {
                    setName(data.name);
                } else {
                    alert(`Aldaa garlaa: ${status}`);
                }
            });
        }
    }, [editingId]);

    function handleSave() {
        setLoading(true);

        if (editingId === "new") {
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
        } else {
            axios
                .put(`http://localhost:8000/categories/${editingId}`, {
                    name: name,
                })
                .then((res) => {
                    const { status } = res;
                    if (status === 200) {
                        onComplete();
                        onClose();
                        setLoading(false);
                        setName("");
                    }
                });
        }
    }

    return (
        <>
            <Modal show={show} onHide={onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading {editingId}</Modal.Title>
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
