import Event from '../models/eventList.js';


export const saveEventData = async (event) =>{
    const newEvent = await new Event(event);
    return newEvent.save();
}

export const getAllSavedEvents = async (userUUID) => {
    const allEvents = await Event.find({userUUID: userUUID});
    return allEvents
}
export const getSavedEvents = async () => {
    const allEvents = await Event.find();
    return allEvents
}
export const unsubscribeEvent = async (userUUID, eventId) => {
    await Event.findOneAndDelete({userUUID: userUUID, eventId: eventId});
    const allEvents = await Event.find({userUUID: userUUID});
    return allEvents
}
export const getEventById = async (eventId) => {
    const event = await Event.findOne({ eventId });
    return event;
}
export const updateEvent = async (eventId, updatedEvent) => {
    try {
        // Update the event in the database
        const event = await Event.findOneAndUpdate({ eventId: eventId }, updatedEvent, { new: true }); // 'new: true' returns the updated document
        return event;
    } catch (error) {
        throw error;
    }
}
export const createEvent = async (eventData) => {
    try {
        const newEvent = new Event(eventData);
        const savedEvent = await newEvent.save();
        return savedEvent;
    } catch (error) {
        throw error; // You might want to handle this more gracefully
    }
};
