import React from 'react';
import { Row, Col, Card, Table, Button, Form } from 'react-bootstrap';

// icon
import CartIcon from '../assets/Button-1509.png';
import DollarIcon from '../assets/Button-1529.png';
import PeopleIcon from '../assets/Button-1530.png';
import OverviewIcon from '../assets/Squares-four-1.png';
import ReportIcon from '../assets/File-text-1.png';
import BellIcon from '../assets/Bell-1.png';
import QuestionIcon from '../assets/Question-1.png';
import UserIcon from '../assets/Avatar-313.png';
import PencilIcon from '../assets/create.png';
import SearchIcon from '../assets/Search.png';

// image
import Avatar1 from '../assets/Avatar.png';
import Avatar2 from '../assets/Avatar (1).png';
import Avatar3 from '../assets/Avatar (2).png';
import Avatar4 from '../assets/Avatar (3).png';
import Avatar5 from '../assets/Avatar (4).png';
import Avatar6 from '../assets/Avatar (5).png';

const Dashboard = () => {
    

    return (
        <div className="px-4 py-3">
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="m-0" style={{ color: '#ff4081' }}><strong>Dashboard</strong></h3>
                <div className="d-flex align-items-center gap-3">
                    <div className="position-relative">
                        <img src={SearchIcon} alt="" className='position-absolute top-50 start-0 translate-middle-y ms-3 text-muted'/>
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

        </div>
    );
};

export default Dashboard;