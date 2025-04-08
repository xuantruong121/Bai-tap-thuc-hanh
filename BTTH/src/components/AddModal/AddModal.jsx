import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

const AddModal = ({ show, handleClose, onAdd }) => {
    const [newOrder, setNewOrder] = useState({
        name: '',
        company: '',
        value: '',
        status: 'New',
        date: new Date().toISOString().split('T')[0],
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
    });

    const [previewAvatar, setPreviewAvatar] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewOrder(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleValueChange = (e) => {
        let value = e.target.value;
        // Remove any non-numeric characters except decimal point
        value = value.replace(/[^0-9.]/g, '');
        // Ensure only one decimal point
        const parts = value.split('.');
        if (parts.length > 2) {
            value = parts[0] + '.' + parts.slice(1).join('');
        }
        setNewOrder(prev => ({
            ...prev,
            value: value
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                // Create a temporary image to check dimensions
                const img = new Image();
                img.onload = () => {
                    // Create a canvas to resize the image
                    const canvas = document.createElement('canvas');
                    canvas.width = 37;
                    canvas.height = 37;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0, 37, 37);
                    
                    // Convert to base64
                    const resizedImage = canvas.toDataURL('image/jpeg');
                    setPreviewAvatar(resizedImage);
                    setNewOrder(prev => ({
                        ...prev,
                        avatar: resizedImage
                    }));
                };
                img.src = reader.result;
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Format the value with $ prefix before sending
            const orderToSubmit = {
                ...newOrder,
                value: `$${newOrder.value}`
            };

            const response = await fetch('https://67c844700acf98d07085b8a0.mockapi.io/Orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderToSubmit),
            });

            if (!response.ok) {
                throw new Error('Failed to add order');
            }

            const addedOrder = await response.json();
            onAdd(addedOrder);
            handleClose();
            window.location.reload();
        } catch (error) {
            console.error('Error adding order:', error);
            alert('Failed to add order. Please try again.');
        }
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Order</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>Avatar</Form.Label>
                        <div className="d-flex align-items-center gap-3">
                            <div style={{ width: '37px', height: '37px', borderRadius: '50%', overflow: 'hidden' }}>
                                <img 
                                    src={previewAvatar || newOrder.avatar} 
                                    alt="Avatar preview" 
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                            <Form.Control
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="w-auto"
                            />
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Customer Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={newOrder.name}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Company</Form.Label>
                        <Form.Control
                            type="text"
                            name="company"
                            value={newOrder.company}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Order Value</Form.Label>
                        <div className="input-group">
                            <span className="input-group-text">$</span>
                            <Form.Control
                                type="text"
                                name="value"
                                value={newOrder.value}
                                onChange={handleValueChange}
                                required
                                placeholder="0.00"
                            />
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Status</Form.Label>
                        <Form.Select
                            name="status"
                            value={newOrder.status}
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
                        Add Order
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
};

export default AddModal; 