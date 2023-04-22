import React, { useState } from 'react';
import "./App.css";

function App() {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [additionalRequirements, setAdditionalRequirements] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (pickupLocation.trim() === '' || dropoffLocation.trim() === '' || date.trim() === '' || time.trim() === '') {
      alert('Please fill in all required fields.');
    } else {
      setShowConfirmation(true);
    }
  }

  const handleReset = () => {
    setPickupLocation('');
    setDropoffLocation('');
    setDate('');
    setTime('');
    setAdditionalRequirements('');
    setShowConfirmation(false);
  }

  return (
    <div className="App">
      <div className='container'>
        <h1 className='heading'>Taxi Inquiry Service</h1>
        {showConfirmation ? (
          <div>
            <h2>Thank you for your inquiry!</h2>
            <p>Pickup location: {pickupLocation}</p>
            <p>Dropoff location: {dropoffLocation}</p>
            <p>Date: {date}</p>
            <p>Time: {time}</p>
            <p>Additional requirements: {additionalRequirements}</p>
            <button onClick={handleReset}>Submit another inquiry</button>
          </div>
      ) : (
          <form onSubmit={handleSubmit}>
            <div className='input'>
            <label htmlFor="pickupLocation">Pickup location:</label>
            <input type="text" id="pickupLocation" value={pickupLocation} onChange={(event) => setPickupLocation(event.target.value)} required />
            </div>
            <br />
            <div className='input'>
            <label htmlFor="dropoffLocation">Dropoff location:</label>
            <input type="text" id="dropoffLocation" value={dropoffLocation} onChange={(event) => setDropoffLocation(event.target.value)} required />
            </div>
            <br />
            <div className='input'>
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" value={date} onChange={(event) => setDate(event.target.value)} required />
            </div>
            <br />
            <div className='input'>
            <label htmlFor="time">Time:</label>
            <input type="time" id="time" value={time} onChange={(event) => setTime(event.target.value)} required />
            </div>
            <br />
            <div className='input'>
            <label htmlFor="additionalRequirements">Additional requirements:</label>
            <textarea id="additionalRequirements" value={additionalRequirements} onChange={(event) => setAdditionalRequirements(event.target.value)}></textarea>
            </div>
            <br />
            <button className='button' type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default App;
