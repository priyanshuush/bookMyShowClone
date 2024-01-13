// // Theater.js

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Theater = () => {
//   const [seats, setSeats] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch seat data from the database
//     const fetchSeatData = async () => {
//       try {
//         // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
//         const response = await axios.get('YOUR_API_ENDPOINT');
//         setSeats(response.data);
//       } catch (err) {
//         setError('Error fetching seat data');
//       }
//     };

//     fetchSeatData();
//   }, []);

//   const handleSeatClick = async (seatId) => {
//     // Check if the seat is already booked
//     const isBooked = seats.find((seat) => seat.id === seatId && seat.booked);

//     if (isBooked) {
//       // Seat is already booked, handle accordingly (show message, etc.)
//       console.log('This seat is already booked.');
//     } else {
//       // Seat is not booked, you can book it or perform other actions
//       console.log('Booking seat:', seatId);

//       // Update the seat status in the database (you'll need an API endpoint for this)
//       try {
//         await axios.put(`YOUR_API_ENDPOINT/${seatId}`, { booked: true });
//         // Update the local state to reflect the change
//         setSeats((prevSeats) =>
//           prevSeats.map((seat) =>
//             seat.id === seatId ? { ...seat, booked: true } : seat
//           )
//         );
//       } catch (err) {
//         console.error('Error updating seat status:', err);
//       }
//     }
//   };

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div>
//       <h1>Theater Layout</h1>
//       <div className="theater-container">
//         {seats.map((seat) => (
//           <div
//             key={seat.id}
//             className={`seat ${seat.booked ? 'booked' : ''}`}
//             onClick={() => handleSeatClick(seat.id)}
//           >
//             {seat.id}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Theater;


// Theater.js

import React, { useState } from 'react';
import "./Theater.css"

const Theater = () => {
  const totalSeats = 30; // Adjust the total number of seats as needed
  const [bookedSeats, setBookedSeats] = useState([]);

  const handleSeatClick = (seatNumber) => {
    // Check if the seat is already booked
    const isBooked = bookedSeats.includes(seatNumber);

    if (isBooked) {
      // Seat is already booked, handle accordingly (show message, etc.)
      console.log(`Seat ${seatNumber} is already booked.`);
    } else {
      // Seat is not booked, you can book it or perform other actions
      console.log(`Booking seat: ${seatNumber}`);
      setBookedSeats((prevSeats) => [...prevSeats, seatNumber]);
    }
  };

  const renderSeats = () => {
    const seats = [];
    for (let i = 1; i <= totalSeats; i++) {
      const isBooked = bookedSeats.includes(i);
      seats.push(
        <div
          key={i}
          className={`seat ${isBooked ? 'booked' : ''}`}
          onClick={() => handleSeatClick(i)}
        >
          {i}
        </div>
      );
    }
    return seats;
  };

  return (
    <div>
      <h1>Theater Layout</h1>
      <div className="theater-container">{renderSeats()}</div>
    </div>
  );
};

export default Theater;
