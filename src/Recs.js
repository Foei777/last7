import React, { useState } from 'react';
import './Rec.css'; // Import CSS file for styling

function Recs() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const redirectToVerifyPage = () => {
    window.location.href = '/verify';
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://aqueous-thicket-47905-18fe763d5974.herokuapp.com/api/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ phoneNumber })
      });

      const data = await response.json();
      setMessage(data.message);

      // เก็บ token ใน Local Storage หากส่ง OTP สำเร็จ
      if (data.token) {
        localStorage.setItem('token', data.token);
        // เรียกใช้ฟังก์ชันเพื่อเปลี่ยนเส้นทางไปยังหน้า Verify.js
        redirectToVerifyPage();
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      setMessage('Failed to send OTP');
    }
  };

  return (
    <div className="Rec">
      <h1>โปรดกรอกเบอร์โทรศัพท์</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <button type="submit">ส่งรหัส OTP</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default Recs;
