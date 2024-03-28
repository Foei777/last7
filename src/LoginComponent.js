import React, { useState, useEffect } from 'react';
import "./Style.css"
import "./Header.css"
import axios from 'axios';
import { Link } from 'react-router-dom'; 

const LoginComponent = ({ onClose }) => { 

  const [username, setUsername] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [email, setEmail] = useState('');
  const [roomPrice, setRoomPrice] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [numGuests, setNumGuests] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  useEffect(() => {
    // Get values from localStorage
    const roomPriceFromStorage = localStorage.getItem('roomPrice');
    const roomNumberFromStorage = localStorage.getItem('roomNumber');
    const numGuestsFromStorage = localStorage.getItem('numGuests');
    const checkInDateFromStorage = localStorage.getItem('checkInDate');
    const checkOutDateFromStorage = localStorage.getItem('checkOutDate');

    // Set values to state
    setRoomPrice(roomPriceFromStorage);
    setRoomNumber(roomNumberFromStorage);
    setNumGuests(numGuestsFromStorage);
    setCheckInDate(checkInDateFromStorage);
    setCheckOutDate(checkOutDateFromStorage);
  }, []);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePhonenumberChange = (e) => {
    setPhonenumber(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleLoginClick = async () => {
    try {
      // Save additional data to localStorage
      localStorage.setItem('username', username);
      localStorage.setItem('phonenumber', phonenumber);
      localStorage.setItem('email', email);

      const response = await axios.post('https://jong-39c1960cda11.herokuapp.com/submit', {
        username,
        phonenumber,
        email,
        roomPrice,
        roomNumber,
        numGuests,
        checkInDate,
        checkOutDate
      });
  
      console.log(response.data);

    } catch (error) {
      console.error('Error submitting data:', error.message);
    }
  };

  return (
    <div className="login-component">
      <h2>ข้อมูลผู้เข้าพัก</h2>
      <label>
        ชื่อผู้เข้าพัก:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <label>
        เบอร์โทรศัพท์:
        <input type="phonenumber" value={phonenumber} onChange={handlePhonenumberChange} />
      </label>
      <label>
        อีเมล:
        <input type="Email" value={email} onChange={handleEmailChange} />
      </label>

      <Link to="/recs">
        <button onClick={handleLoginClick}>ยืนยัน</button>
      </Link>

      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default LoginComponent;
