import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const NotFound = () => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
            <h1 className="display-1 fw-bold text-primary">404</h1>
            <h2 className="mb-4">Page Not Found</h2>
            <p className="text-muted mb-4">The page you are looking for doesn't exist or has been moved.</p>
            <Button as={Link} to="/" variant="primary">
                Go to Dashboard
            </Button>
        </div>
    );
};

export default NotFound; 