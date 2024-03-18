import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import AdminHeader from '../../components/Header/AdminHeader';

const EventsTable = ({ events, onSelect, onDelete }) => {
    const headerStyle = {
        fontSize: '1.1em' // Increase font size for table headers
    };

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={headerStyle}>Event ID</TableCell> {/* Added Event ID header */}
                        <TableCell style={headerStyle}>User UUID</TableCell>
                        <TableCell style={headerStyle}>Event Name</TableCell>
                        <TableCell style={headerStyle}>Event Date</TableCell>
                        <TableCell style={headerStyle}>Event Time</TableCell>
                        <TableCell style={headerStyle}>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {events.map((event) => (
                        <TableRow key={event.id || event._id}>
                            <TableCell>{event.eventId || event._id}</TableCell> {/* Populating Event ID */}
                            <TableCell>{event.userUUID}</TableCell>
                            <TableCell>{event.eventName}</TableCell>
                            <TableCell>{event.eventDate}</TableCell>
                            <TableCell>{event.eventTime}</TableCell>
                            <TableCell>
                                <Button
                                    variant="contained"
                                    onClick={() => onSelect(event)}
                                    style={{ color: 'white', background: 'red', marginRight: '10px' }}
                                >
                                    Edit
                                </Button>
                                <Button
                                    variant="contained"
                                    style={{ backgroundColor: 'black', color: 'white' }}
                                    onClick={() => onDelete(event.userUUID, event.eventId || event._id)}
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

export default EventsTable;
