import React, { useState } from 'react';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import BookingForm from './components/BookingForm';
import BookingConfirmation from './components/BookingConfirmation';

function App() {
  const [currentPage, setCurrentPage] = useState('list');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [bookingInfo, setBookingInfo] = useState(null);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setCurrentPage('details');
  };

  const handleBookSeat = () => {
    setCurrentPage('booking');
  };

  const handleBookingSubmit = (info) => {
    setBookingInfo(info);
    setCurrentPage('confirmation');
  };

  return (
    <div>
    <h1 style={{textAlign:'center'}}>Movie Booking App</h1>
    
      {currentPage === 'list' && <MovieList onMovieClick={handleMovieClick} />}
      {currentPage === 'details' && selectedMovie && (
        <MovieDetails movie={selectedMovie} onBookSeat={handleBookSeat} />
      )}
      {currentPage === 'booking' && selectedMovie && (
        <BookingForm movie={selectedMovie} onBookingSubmit={handleBookingSubmit} />
      )}
      {currentPage === 'confirmation' && bookingInfo && (
        <BookingConfirmation bookingInfo={bookingInfo} />
      )}
    </div>
  );
}

export default App;
