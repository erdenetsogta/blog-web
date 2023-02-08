import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";

export function CategoriesEdit({ show, onClose, onComplete, editingId }) {
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);
    const [date, setDate] = useState("");

    const a = useRef(0);

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

    console.log(a);

    const inputEl = useRef();
    const divEl = useRef();

    const myInterval = useRef();

    useEffect(() => {
        if (show) {
            inputEl.current.focus();
            divEl.current.append("<strong> hello </strong>");
            console.log(divEl.current);

            myInterval.current = setInterval(() => {
                // setDate(new Date().toISOString());
                console.log("Inside interval", new Date());
            }, 1000);

            // clearInterval(myInterval);
        }
    }, [show]);

    useEffect(() => {
        if (!show) {
            clearInterval(myInterval.current);
        }
    }, [show]);

    return (
        <>
            <Modal show={show} onHide={onClose}>
                {date}
                <Modal.Header closeButton>
                    <Modal.Title>
                        {a.current} Modal heading
                        <button
                            onClick={() => {
                                a.current = 10;
                            }}
                        >
                            Change a
                        </button>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div ref={divEl}>
                        <input ref={inputEl} disabled={loading} className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
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
