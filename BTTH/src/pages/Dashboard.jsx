import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Table, Button, Form } from 'react-bootstrap';

// icon
import OverviewIcon from '../assets/Squares-four-1.png';
import BellIcon from '../assets/Bell-1.png';
import QuestionIcon from '../assets/Question-1.png';
import UserIcon from '../assets/Avatar-313.png';
import SearchIcon from '../assets/Search.png';
import PencilIcon from '../assets/create.png';
import ReportIcon from '../assets/File-text-1.png';

// image
import Avatar1 from '../assets/Avatar.png';
import Avatar2 from '../assets/Avatar (1).png';
import Avatar3 from '../assets/Avatar (2).png';
import Avatar4 from '../assets/Avatar (3).png';
import Avatar5 from '../assets/Avatar (4).png';
import Avatar6 from '../assets/Avatar (5).png';

const Dashboard = () => {
    const [stats, setStats] = useState([]);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await fetch('https://67c844700acf98d07085b8a0.mockapi.io/Stats');
                const data = await response.json();

                const formattedStats = data.map(item => ({
                    title: item.title,
                    value: item.value,
                    change: item.change,
                    icon: item.icon // Sử dụng icon từ API
                }));

                setStats(formattedStats);
            } catch (error) {
                console.error('Error fetching stats:', error);
            }
        };

        fetchStats();
    }, []);

    const orders = [
        {
            avatar: Avatar1,
            name: 'Elizabeth Lee',
            company: 'AvatarSystems',
            value: '$359',
            date: '10/07/2023',
            status: 'New'
        },
        {
            avatar: Avatar2,
            name: 'Carlos Garcia',
            company: 'SmoozeShift',
            value: '$747',
            date: '24/07/2023',
            status: 'New'
        },
        {
            avatar: Avatar3,
            name: 'Elizabeth Bailey',
            company: 'Prime Time Telecom',
            value: '$664',
            date: '08/08/2023',
            status: 'In-progress'
        },
        {
            avatar: Avatar4,
            name: 'Ryan Brown',
            company: 'OmniTech Corporation',
            value: '$541',
            date: '31/08/2023',
            status: 'In-progress'
        },
        {
            avatar: Avatar5,
            name: 'Ryan Young',
            company: 'DataStream Inc.',
            value: '$769',
            date: '01/05/2023',
            status: 'Completed'
        },
        {
            avatar: Avatar6,
            name: 'Hailey Adams',
            company: 'FlowRush',
            value: '$922',
            date: '10/06/2023',
            status: 'Completed'
        }
    ];

    const getStatusBadgeClass = (status) => {
        switch (status) {
            case 'New':
                return 'text-primary bg-primary bg-opacity-10 px-2 py-1 rounded-pill';
            case 'In-progress':
                return 'text-warning bg-warning bg-opacity-10 px-2 py-1 rounded-pill';
            case 'Completed':
                return 'text-success bg-success bg-opacity-10 px-2 py-1 rounded-pill';
            default:
                return 'text-secondary';
        }
    };


    return (
        <div className="px-4 py-3">
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="m-0" style={{ color: '#ff4081' }}><strong>Dashboard</strong></h3>
                <div className="d-flex align-items-center gap-3">
                    <div className="position-relative">
                        <img src={SearchIcon} alt="" className='position-absolute top-50 start-0 translate-middle-y ms-3 text-muted' />
                        <Form.Control
                            type="search"
                            placeholder="Search..."
                            className="ps-5 rounded-pill"
                            style={{ backgroundColor: '#f8f9fa', border: 'none' }}
                        />
                    </div>
                    <button className="border-0 bg-transparent"><img src={BellIcon} alt="" /></button>
                    <button className="border-0 bg-transparent"><img src={QuestionIcon} alt="" /></button>
                    <button className="border-0 bg-transparent"><img src={UserIcon} alt="" /></button>
                </div>
            </div>

            {/* Overview Section */}
            <div className="mb-4">
                <h6 className="mb-3 d-flex align-items-center gap-2">
                    <img src={OverviewIcon} alt="" />
                    Overview
                </h6>
                <Row>
                    {stats.map((stat, index) => (
                        <Col md={4} key={index}>
                            <Card className="h-100 border-0 shadow-sm">
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <div className="text-muted small mb-1">{stat.title}</div>
                                            <h3 className="mb-2 fw-bold">{stat.value}</h3>
                                            <div className="text-success small">
                                                ↑ {stat.change} period of change
                                            </div>
                                        </div>
                                        <div className="p-3 rounded-circle" >
                                            <div>
                                                <img src={stat.icon} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>







            {/* Detailed Report Section */}
            <div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h6 className="mb-0 d-flex align-items-center gap-2">
                        <img src={ReportIcon} alt="" />
                        Detailed report
                    </h6>
                    <div>
                        <Button variant="outline-primary" size="sm" className="me-2 rounded-pill px-3">
                            Import
                        </Button>
                        <Button variant="outline-primary" size="sm" className="rounded-pill px-3">
                            Export
                        </Button>
                    </div>
                </div>

                <Card className="border-0 shadow-sm">
                    <Card.Body>
                        <Table hover responsive className="align-middle">
                            <thead className="text-muted" style={{ fontSize: '0.875rem' }}>
                                <tr>
                                    <th>
                                        <input type="checkbox" className="form-check-input" />
                                    </th>
                                    <th>CUSTOMER NAME</th>
                                    <th>COMPANY</th>
                                    <th>ORDER VALUE</th>
                                    <th>ORDER DATE</th>
                                    <th>STATUS</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order, index) => (
                                    <tr key={index}>
                                        <td>
                                            <input type="checkbox" className="form-check-input" />
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="me-3">
                                                    <div className="avatar">
                                                        <img src={order.avatar} alt="" />
                                                    </div>
                                                </div>
                                                {order.name}
                                            </div>
                                        </td>
                                        <td>{order.company}</td>
                                        <td>{order.value}</td>
                                        <td>{order.date}</td>
                                        <td>
                                            <span className={getStatusBadgeClass(order.status)}>
                                                {order.status}
                                            </span>
                                        </td>
                                        <td>
                                            <button className="border-0 bg-transparent"><img src={PencilIcon} alt="" /></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        <div className="d-flex justify-content-between align-items-center mt-4">
                            <div className="text-muted small">63 results</div>
                            <div className="d-flex gap-2">
                                {[1, 2, 3, 4, '...', 10, 11].map((page, index) => (
                                    <Button
                                        key={index}
                                        variant={page === 1 ? 'primary' : 'light'}
                                        size="sm"
                                        className="rounded-circle"
                                        style={{ width: '32px', height: '32px', padding: 0 }}
                                    >
                                        {page}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Dashboard;