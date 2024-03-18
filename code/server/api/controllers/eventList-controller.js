import { eventData } from './../services/index.js';
import { httpUtils } from './../utils/index.js'
import axios from 'axios'

export const postEventTime = async (request, response) => {
    try {
        const payload = request.body;
        const event = await eventData.saveEventData(payload);
        httpUtils.setSuccessResponse(event,response);
    } catch (error) {
        httpUtils.setErrorResponse(error,response);
    }

}
export const getEventById = async (request, response) => {
    try {
        const eventId = request.params.eventId;
        const event = await eventData.getEventById(eventId);
        if (!event) {
            // Handle the case when the event is not found
            httpUtils.setErrorResponse({ message: 'Event not found' }, response);
        } else {
            // Send the event data as a success response
            httpUtils.setSuccessResponse(event, response);
        }
    } catch (error) {
        httpUtils.setErrorResponse(error, response);
    }
}

export const getAllEventsData = async (request, response) => {
    try{ 
        const inputText = request.query.inputText;
        axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=euV5a4ABIaiEzzLNWB89cUfz1llz28YI&keyword=${inputText}`)
        .then(res => {
            httpUtils.setSuccessResponse(res.data, response);
        })
        .catch(error => {
            httpUtils.setErrorResponse(error,response);
            console.log(error, "error");
        });
    
    } catch(error) {
        httpUtils.setErrorResponse(error,response);
    }

}
export const getEventsData = async (inputText) => {
    try{ 
        const res = await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=euV5a4ABIaiEzzLNWB89cUfz1llz28YI&keyword=${inputText}`);
        return res.data; 
    
    } catch(error) {
        console.log(error, "error in getAllEventsData");
        throw error; // Re-throw the error to be caught by the caller

        // httpUtils.setErrorResponse(error,response);
    }

}
export const getAllAndSavedEvents = async (req, res) => {
    try {
        const allEventsDataPromise = getEventsData(req.query.inputText);
        const savedEventsDataPromise = eventData.getSavedEvents();
        const [allEventsData, savedEventsData] = await Promise.all([allEventsDataPromise, savedEventsDataPromise]);


        const combinedEvents = {
            allEvents: allEventsData._embedded.events, // Adjust depending on the structure of allEventsData
            savedEvents: savedEventsData
        };

        httpUtils.setSuccessResponse(combinedEvents, res);
    } catch (error) {
        // Handle errors appropriately
        console.error('Error in getAllAndSavedEvents:', error); // Log the error to the console
        httpUtils.setErrorResponse(error, res);
    }
};



export const getAllSavedEvents = async (request, response) => {
    try{ 
        const uuid = request.params.uuid
        const event = await eventData.getAllSavedEvents(uuid);
        httpUtils.setSuccessResponse(event, response);
    } catch(error) {
        console.log("error ",error);
        httpUtils.setErrorResponse(error,response);
    }

}
export const getSavedEvents = async (request, response) => {
    try{ 
        
        const event = await eventData.getSavedEvents();
        httpUtils.setSuccessResponse(event, response);
    } catch(error) {
        console.log("error ",error);
        httpUtils.setErrorResponse(error,response);
    }

}
export const unsubscribeEvent = async (request, response) => {
    try{ 
        const uuid = request.params.uuid;
        const eventId = request.params.eventId;
        const event = await eventData.unsubscribeEvent(uuid, eventId);
        httpUtils.setSuccessResponse(event, response);
    } catch(error) {
        console.log("error ",error);
        httpUtils.setErrorResponse(error,response);
    }

}


export const createEvent = async (request, response) => {
    try {
        const neweventData = request.body;

        // Call the service function to create a new event
        const newEvent = await eventData.createEvent(neweventData);

        // Send a success response with the created event
        httpUtils.setSuccessResponse(newEvent, response);
    } catch (error) {
        // Handle errors and send an error response
        httpUtils.setErrorResponse(error, response);
    }
}
export const updateEvent = async (request, response) => {
    try {
        const eventId = request.params.eventId;
        const updatedEvent = request.body; // The updated event data

        // Update the event in the database
        const event = await eventData.updateEvent(eventId, updatedEvent);

        // Send a success response with the updated event data
        httpUtils.setSuccessResponse(event, response);
    } catch (error) {
        // Handle errors and send an error response
        httpUtils.setErrorResponse(error, response);
    }
};