import React, { useState } from 'react';
import './BookingForm.css';

function BookingForm({ movie, onBookingSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onBookingSubmit({ movieId: movie.id, name, email, mobile });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Book Seat for {movie.title}</h1>
      <div >
    
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Mobile:</label>
        <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
      </div>
      <button  type="submit">Submit</button>
    </form>
  );
}

export default BookingForm;
