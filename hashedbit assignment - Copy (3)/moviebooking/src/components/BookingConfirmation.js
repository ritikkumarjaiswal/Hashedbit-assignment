import React from 'react';
import './Bookingconfirmation.css'

function BookingConfirmation({ bookingInfo }) {
  const { movieId, name, email, mobile } = bookingInfo;
  const bookingId = Math.floor(Math.random() * 1000000);

  return (
    <div className='confirmation'>
      <h1>Booking Confirmation</h1>
      <p>Booking ID: {bookingId}</p>
      <p>Movie ID: {movieId}</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Mobile: {mobile}</p>
    </div>
  );
}

export default BookingConfirmation;
