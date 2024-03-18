import React, { useState, useEffect } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
// import './EventForm.scss'; // Assuming you have a similar stylesheet

const EventForm = ({ event, onSave }) => {
    const initialFormState = {
        eventDate: '',
        eventTime: '',
        eventName: '',
        eventId: '',
        userUUID: ''
    };

    const [formData, setFormData] = useState(initialFormState);

    useEffect(() => {
        if (event) {
            setFormData({
                eventDate: event.eventDate || '',
                eventTime: event.eventTime || '',
                eventName: event.eventName || '',
                eventId: event.eventId || '',
                userUUID: event.userUUID || ''
            });
        } else {
            setFormData(initialFormState);
        }
    }, [event]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <div className="eventFormContainer">
            <form onSubmit={handleSubmit} className="eventForm">
                <TextField
                    label="Event Name"
                    name="eventName"
                    value={formData.eventName}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Event Date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Event Time"
                    name="eventTime"
                    value={formData.eventTime}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Event ID"
                    name="eventId"
                    value={formData.eventId}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="User UUID"
                    name="userUUID"
                    value={formData.userUUID}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <Button 
                    type="submit" 
                    variant="contained" 
                    style={{ backgroundColor: 'red', color: 'white' }} 
                    fullWidth
                >
                    {event ? 'Update Event' : 'Create Event'}
                </Button>
            </form>
        </div>
    );
};

export default EventForm;
