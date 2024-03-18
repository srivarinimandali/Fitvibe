import express from "express";
import * as eventsData from '../controllers/eventList-controller.js';

const router = express.Router();
// create event 
router.route('/saveEvent')
    .post(eventsData.postEventTime)
router.route('/createEvent')
    .post(eventsData.createEvent);
router.route('/eventsData')
    .get(eventsData.getAllEventsData)
    
router.route('/getEvents')
    .get(eventsData.getSavedEvents)

router.route('/getAllSavedEvents/:uuid')
.get(eventsData.getAllSavedEvents)

router.route('/getSavedEvents')
.get(eventsData.getSavedEvents)

router.route('/allAndSavedEvents')
    .get(eventsData.getAllAndSavedEvents);
    
router.route('/getAllSavedEvents/:uuid/:eventId')
.delete(eventsData.unsubscribeEvent)

router.route('/getEvent/:eventId')
    .get(eventsData.getEventById);
    
router.route('/updateEvent/:eventId')
    .put(eventsData.updateEvent);
export default router;