import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

const UserTable = ({ users, onSelect, onDelete }) => {
    const headerStyle = {
        fontSize: '1.1em' // Increase font size for table headers
    };

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={headerStyle}>User Name</TableCell>
                        <TableCell style={headerStyle}>Full Name</TableCell>
                        <TableCell style={headerStyle}>Role</TableCell>
                        <TableCell style={headerStyle}>Email</TableCell>
                        <TableCell style={headerStyle}>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                        <TableRow key={user.uuid}>
                            <TableCell>{user.uuid}</TableCell>
                            <TableCell>{`${user.firstName} ${user.lastName}`}</TableCell>
                            <TableCell>
                                <span
                                    style={{
                                        color: user.role === 'admin' ? 'red' : 'green',
                                        textTransform: 'uppercase',
                                        fontSize: '1.1em'
                                    }}
                                >
                                    {user.role}
                                </span>
                            </TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>
                                <Button 
                                    variant="contained" 
                                    onClick={() => onSelect(user)}
                                    style={{ color: 'white', background:'red' }}
                                >
                                    Edit
                                </Button>
                                <Button 
                                    variant="contained" 
                                    style={{ 
                                        marginLeft: '10px', 
                                        backgroundColor: 'black', 
                                        color: 'white' 
                                    }}
                                    onClick={() => onDelete(user.uuid)}
                                >
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default UserTable;
