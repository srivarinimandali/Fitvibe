import { useEffect } from "react";
import { connect } from 'react-redux';
import { getEventBriteEvents, saveInterestedEvent } from "../../Store/Actions/EventsAction";
import './Events.scss';
import EventSearchBar from "./EventSearchBar";
import Loader from '../../components/Loader/Loader.js'
import { Grid } from "@mui/material";

const mapDisptchToProps = (dispatch) => {
    return {
        getEventBriteEvent: () => dispatch(getEventBriteEvents()),
        postInterestEvent: (interestedEvent) => dispatch(saveInterestedEvent(interestedEvent))
    }
  } 
  
  const mapStateToProps = (state) => {
    return {
        eventsList: state.Events.eventsData.allEvents, // Assuming this is the structure of your state
        isLoading: state.Loader.showLoader,
        currentUserDetails: state.Login.currentUserDetails
    }
};

const Events = (props) => {
  const { eventsList, isLoading, getEventBriteEvent, postInterestEvent} = props;

  useEffect(() => {
      getEventBriteEvent();
  },[]); 

  const eventDescriptions = [
    "Unveil the excitement as the clock ticks down – hurry up to grab tickets for the most anticipated event of the year!",
    "Don't miss out on the thrill and spectacle – secure your spot now by rushing to grab those coveted tickets before they vanish.",
    "The countdown is on, and so is the race to snag tickets for an unforgettable experience – act fast and secure your entry to the event of a lifetime!",
    "Time is of the essence – seize the moment and accelerate towards the ticket booth to ensure your presence at this extraordinary event.",
    "Feel the adrenaline surge as the ticket clock is ticking – quick, decisive action is your key to being part of this epic gathering, so don't delay!",
    "Hear the urgency in the whispers of excitement – act swiftly and secure your tickets before the opportunity slips away for this unmissable event.",
    "The demand is soaring, and so should your enthusiasm – rush to be part of the magic by securing your tickets without a moment's hesitation.",
    "Be swept away by the urgency in the air – make your move now and grab those tickets, ensuring your front-row seat to an event that promises to be legendary.",
    "Swift decisions lead to memorable moments – act promptly and grab your tickets to join the exhilarating celebration that awaits.",
    "Join the frenzy and be part of the exclusive circle – hurry, as tickets are flying off the shelves, and you won't want to be left behind!"
  ];
  

  const __renderEventCards = () => {
    if (eventsList && eventsList.length > 0) {
      return eventsList.map((item, index) => {
        const { images, name, dates, url, _embedded } = item;
        const eventDate = dates?.start?.localDate;
        const eventTime = dates?.start?.localTime;
  
        // Extract the city name from the _embedded data
        const city = _embedded?.venues[0]?.city?.name;
        const description = eventDescriptions[index % eventDescriptions.length];

        return (
          <div key={index} className="card-wrapper">
            <div className="left-part">
              {images && images.length > 0 && (
                <img src={images[0].url} alt={`${name} event`} />
              )}
            </div>
            <div className="right-part">
              <div className="card-title">
                <h2>{name}</h2>
                <div>{city && `${city}, `}{eventDate}</div> {/* Display city and event date */}
             
              </div>
              {eventTime && <span>Time: {eventTime}</span>}
              <p className="info">
              {description}              </p>
              <div className="right-bottom">
                <button 
                  onClick={() => saveEventData(item)} 
                  className="event-button">
                  Register
                </button>
                <button 
                  onClick={() => window.open(url, "_blank")} 
                  className="event-button">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        );
      });
    } else {
      return (
        <Grid className="not-result" style={{ minHeight: "100vh" }}>
          <h1>Sorry, no results found.</h1>
        </Grid>
      );
    }
  };
  
  // ... rest of your component
  

  const saveEventData = (data) => {
    const interestedEvent = {
      eventId: data.id,
      eventName: data.name,
      eventDate: data.dates?.start?.localDate,
      eventTime: data.dates?.start?.localTime,
      userUUID: props.currentUserDetails.uuid
    }
    postInterestEvent(interestedEvent)
  }

  return isLoading ? <Loader/> : (
    <div className="events-container">
      <h1 className="event-title">EVENTS</h1>
      <EventSearchBar />
      {__renderEventCards()}
    </div>
  );
}

export default connect(mapStateToProps, mapDisptchToProps)(Events);
