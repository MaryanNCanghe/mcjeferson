import React from 'react';
import './Tour.css'; // Import your styles

const Tour = () => {
  // Define the event data directly within Tour.jsx
  const eventList = [
    {
      title: 'Concert 1',
      location: 'Casa do Thalys, Codo ',
      date: 'January 1, 2025',
      price: '$50',
      paypalLink: 'https://www.paypal.com/paypalme/yourPaypalUsername/concert-1'
    },
    {
      title: 'Concert 2',
      location: 'Venue 2, S. Paulo',
      date: 'February 15, 2025',
      price: '$70',
      paypalLink: 'https://www.paypal.com/paypalme/yourPaypalUsername/concert-2'
    },
    {
      title: 'Concert 2',
      location: 'Venue 2, Brasilia',
      date: 'February 15, 2025',
      price: '$50',
      paypalLink: 'https://www.paypal.com/paypalme/yourPaypalUsername/concert-2'
    },
    // Add more events as needed
  ];

  // EventItem component defined within Tour.jsx
  const EventItem = ({ title, location, date, price, paypalLink }) => (
    <div className="event-item">
      <h3>{title}</h3>
      <p>{location}</p>
      <p>Date: {date}</p>
      <p>Price: {price}</p>
      <a href={paypalLink} target="_blank" rel="noopener noreferrer">Buy Tickets</a>
    </div>
  );

  return (
    <div className="tour-section">
      <h1>Concerts</h1> {/* Title added here */}
      <div className="event-list">
        {eventList.map((event, index) => (
          <EventItem
            key={index}
            title={event.title}
            location={event.location}
            date={event.date}
            price={event.price}
            paypalLink={event.paypalLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Tour;
