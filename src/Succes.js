import React, { useEffect } from 'react';
import axios from 'axios';
import './Succes.css';

function App() {
    useEffect(() => {
        // ดึงข้อมูลจาก localStorage
        const roomPrice = localStorage.getItem('roomPrice');
        const roomNumber = localStorage.getItem('roomNumber');
        const numGuests = localStorage.getItem('numGuests');
        const checkInDate = localStorage.getItem('checkInDate');
        const checkOutDate = localStorage.getItem('checkOutDate');
      
        // ดึงข้อมูล username, phonenumber, และ email จาก localStorage
        const username = localStorage.getItem('username');
        const phoneNumber = localStorage.getItem('phonenumber');
        const email = localStorage.getItem('email');
        
        // ส่งข้อมูลไปยังเซิร์ฟเวอร์
        axios.post('https://smsss-0220ec4fe776.herokuapp.com/send-sms', {
          roomPrice: roomPrice,
          roomNumber: roomNumber,
          numGuests: numGuests,
          checkInDate: checkInDate,
          checkOutDate: checkOutDate,
          // เพิ่มข้อมูล username, phonenumber, และ email ไปยัง body ของ request
          username: username,
          phonenumber: phoneNumber,
          email: email
        })
          .then(response => {
            console.log(response.data);
            // ทำอะไรต่อไปนี้หลังจากได้รับการตอบกลับจากเซิร์ฟเวอร์
          })
          .catch(error => {
            console.error('Error:', error);
          });
      }, []);
      

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 mt-5">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title">ทำการชำระสำเร็จ</h1>
              <p className="card-text">ขอบคุณที่ใช้บริการเรา!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
