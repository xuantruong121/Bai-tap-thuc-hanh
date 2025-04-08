import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import dashboardIcon from '../../assets/Squares-four-1.png';
import projectsIcon from '../../assets/Folder.png';
import teamsIcon from '../../assets/Groups.png';
import analyticsIcon from '../../assets/Pie chart.png';
import messagesIcon from '../../assets/Chat.png';
import integrationsIcon from '../../assets/Code.png';
import logoImage from '../../assets/Image-1858.png';
import GroupIcon from '../../assets/Group.png';
import './Sidebar.css';

const Sidebar = () => {
    const location = useLocation();

    return (
        <div className="sidebar bg-white" style={{ width: '250px', position: 'fixed', height: '100vh', borderRight: '1px solid #dee2e6' }}>
            <div className="p-3 border-bottom">
                <div className="d-flex align-items-center">
                    <img src={logoImage} alt="Logo" />
                </div>
            </div>

            <Nav className="flex-column p-3">
                <Nav.Link as={Link} to="/" className={`mb-2 d-flex align-items-center ${location.pathname === '/' ? 'active' : ''}`}>
                    <img src={dashboardIcon} alt="Dashboard" className="me-2" style={{ width: '20px', height: '20px' }} />
                    Dashboard
                </Nav.Link>
                <Nav.Link as={Link} to="/projects" className={`mb-2 d-flex align-items-center ${location.pathname === '/projects' ? 'active' : ''}`}>
                    <img src={projectsIcon} alt="Projects" className="me-2" style={{ width: '20px', height: '20px' }} />
                    Projects
                </Nav.Link>
                <Nav.Link as={Link} to="/teams" className={`mb-2 d-flex align-items-center ${location.pathname === '/teams' ? 'active' : ''}`}>
                    <img src={teamsIcon} alt="Teams" className="me-2" style={{ width: '20px', height: '20px' }} />
                    Teams
                </Nav.Link>
                <Nav.Link as={Link} to="/analytics" className={`mb-2 d-flex align-items-center ${location.pathname === '/analytics' ? 'active' : ''}`}>
                    <img src={analyticsIcon} alt="Analytics" className="me-2" style={{ width: '20px', height: '20px' }} />
                    Analytics
                </Nav.Link>
                <Nav.Link as={Link} to="/messages" className={`mb-2 d-flex align-items-center ${location.pathname === '/messages' ? 'active' : ''}`}>
                    <img src={messagesIcon} alt="Messages" className="me-2" style={{ width: '20px', height: '20px' }} />
                    Messages
                </Nav.Link>
                <Nav.Link as={Link} to="/integrations" className={`mb-2 d-flex align-items-center ${location.pathname === '/integrations' ? 'active' : ''}`}>
                    <img src={integrationsIcon} alt="Integrations" className="me-2" style={{ width: '20px', height: '20px' }} />
                    Integrations
                </Nav.Link>
            </Nav>

            <div className="p-3 mt-auto" style={{ position: 'absolute', bottom: 0, width: '100%' }}>
                <div className="bg-light p-3 rounded">
                    <img src={GroupIcon} alt="" />
                    <h6>V2.0 is available</h6>
                    <button className="btn btn-primary btn-sm">Try now</button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;