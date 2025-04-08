import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

const EditModal = ({ show, handleClose, order, onSave }) => {
    const [editedOrder, setEditedOrder] = useState(order);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedOrder(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://67c844700acf98d07085b8a0.mockapi.io/Orders/${order.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editedOrder),
            });

            if (!response.ok) {
                throw new Error('Failed to update order');
            }

            onSave(editedOrder);
            handleClose();
            // Reload the page after successful save
            window.location.reload();
        } catch (error) {
            console.error('Error updating order:', error);
            alert('Failed to update order. Please try again.');
        }
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Order</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>Customer Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={editedOrder?.name || ''}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Company</Form.Label>
                        <Form.Control
                            type="text"
                            name="company"
                            value={editedOrder?.company || ''}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Order Value</Form.Label>
                        <Form.Control
                            type="text"
                            name="value"
                            value={editedOrder?.value || ''}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Status</Form.Label>
                        <Form.Select
                            name="status"
                            value={editedOrder?.status || ''}
                            onChange={handleChange}
                        >
                            <option value="New">New</option>
                            <option value="In-progress">In-progress</option>
                            <option value="Completed">Completed</option>
                        </Form.Select>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
};

export default EditModal; 