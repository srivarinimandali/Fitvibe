import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventsTable from './EventsTable';
import EventForm from './EventForm';
import { Dialog, DialogTitle, DialogContent, Button } from '@mui/material';
import AdminHeader from '../../components/Header/AdminHeader';

const AdminEvents = () => {
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const response = await axios.get('http://localhost:9000/getEvents');
            setEvents(response.data);
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };

    const handleEventSelect = (eventId) => {
        setSelectedEvent(eventId);
        setIsModalOpen(true);
    };

    const handleEventSave = async (eventData) => {
        try {
            if (selectedEvent) {
                // Update an existing event
                await axios.put(`http://localhost:9000/updateEvent/${selectedEvent.eventId}`, eventData);
            } else {
                // Create a new event
                await axios.post('http://localhost:9000/createEvent', eventData);
            }
            fetchEvents();
        } catch (error) {
            console.error('Error saving event:', error);
        } finally {
            setIsModalOpen(false);
            setSelectedEvent(null);
        }
    };

    const handleEventDelete = async (uuid,eventId) => {
        try {
            await axios.delete(`http://localhost:9000/getAllSavedEvents/${uuid}/${eventId}`);
            fetchEvents();
        } catch (error) {
            console.error('Error deleting event:', error);
        }
    };

    const handleCreateNewEvent = () => {
        setSelectedEvent(null);
        setIsModalOpen(true);
    }

    return (
        <div>
            <AdminHeader/>
            <Button
    onClick={handleCreateNewEvent}
    variant="contained"
    style={{
        backgroundColor: 'red', 
        color: 'white',
        fontSize: 'larger',
        padding: '10px 20px', // Adjust padding as needed
        marginTop: '20px', // Adds padding on top
        marginBottom: '20px' // Adds padding on bottom
    }}
>
    Create Event
</Button>
            <EventsTable events={events} onSelect={handleEventSelect} onDelete={handleEventDelete} />
            <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <DialogTitle>{selectedEvent ? 'Update Event' : 'Create Event'}</DialogTitle>
                <DialogContent>
                    <EventForm event={selectedEvent} onSave={handleEventSave} />
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default AdminEvents;
