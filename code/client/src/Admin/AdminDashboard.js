import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from '../../Assets/Images/adminbot.png';
import './CustomStyles.css';
import Image1 from '../../Assets/Images/Free-PowerPoint-Animations-Graphic-Mama-Character-Gif-Animation-14.gif';
import AdminHeader from '../../components/Header/AdminHeader';
import { Button } from '@mui/material';

const AdminDashboard = () => {
    return (
        <>
            <AdminHeader />
            <div className="sticky-top">
                <div className="container-fluid bg-black text-white p-6 py-5">
                    <div className="row align-items-center">
                        <div className="col-md-5">
                            <img src={Image} alt="AdminBot" className="img-fluid" />
                        </div>
                        <div className="col-md-7">
                        <h1 className="text-start mb-3 text-uppercase" style={{ color: 'red', fontSize: '3rem' }}>Admin Dashboard</h1>
                            <div className="text-start">
                                <p>Unleash your administrative prowess on the dashboard! Seamlessly sculpt the user landscape with the power to edit profiles and fine-tune access privileges. Elevate the experience further by orchestrating unforgettable moments – effortlessly create and manage events with a few clicks, turning your admin domain into a hub of organizational brilliance!</p>
                                <Link to="/admin/users" className="mb-3">
                                    <Button className="MuiButtonBase-root MuiButton-root MuiButton-contained me-2" style={{ color: 'white', background: 'red', marginRight: '10px' }}>User Management</Button>
                                </Link>
                                <Link to="/admin/events">
                                    <Button className="MuiButtonBase-root MuiButton-root MuiButton-contained" style={{ color: 'white', background: 'red', marginRight: '10px' }}>Add Events</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                <img src={Image1}></img>
                </div>
            </div>
        </>
    );
};

export default AdminDashboard;
