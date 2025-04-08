import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Table, Button, Form } from 'react-bootstrap';

// icon
import OverviewIcon from '../assets/Squares-four-1.png';
import BellIcon from '../assets/Bell-1.png';
import QuestionIcon from '../assets/Question-1.png';
import UserIcon from '../assets/Avatar-313.png';
import SearchIcon from '../assets/Search.png';

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
        </div>
    );
};

export default Dashboard;