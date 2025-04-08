import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import { Container } from 'react-bootstrap';

const Layout = () => {
    return (
        <div className="d-flex">
            <Sidebar />
            <main className="flex-grow-1" style={{ marginLeft: '250px', padding: '20px', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
                <Container fluid className="py-3">
                    <Outlet />
                </Container>
            </main>
        </div>
    );
};

export default Layout; 