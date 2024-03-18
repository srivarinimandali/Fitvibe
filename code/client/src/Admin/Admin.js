import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserTable from './UserTable';
import UserForm from './UserForm';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import AdminHeader from '../../components/Header/AdminHeader';

const Admin = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:9000/users');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const handleUserSelect = (user) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    };

    const handleUserSave = async (userData) => {
        try {
            if (selectedUser) {
                await axios.put(`http://localhost:9000/users/${selectedUser.uuid}`, userData);
            } 
            fetchUsers(); // Refresh the list
        } catch (error) {
            console.error('Error saving user:', error);
        } finally {
            setIsModalOpen(false);
        }
    };

    const handleUserDelete = async (userId) => {
        try {
            await axios.delete(`http://localhost:9000/users/${userId}`);
            fetchUsers(); // Refresh the list after deletion
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedUser(null);
    };

    return (
        <div>
            <AdminHeader/>
            <Dialog open={isModalOpen} onClose={handleCloseModal}>
            <DialogTitle style={{ textAlign: 'center', fontSize: '1.5em', textTransform: 'uppercase' }}>
  Edit User
</DialogTitle>
                <DialogContent>
                    <UserForm user={selectedUser} onSave={handleUserSave} />
                </DialogContent>
            </Dialog>
            <UserTable users={users} onSelect={handleUserSelect} onDelete={handleUserDelete} />
        </div>
    );
};

export default Admin;
