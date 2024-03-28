import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./About.css"

function About() {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [numGuests, setNumGuests] = useState(1);

  useEffect(() => {
    const currentDate = new Date(); // วันที่ปัจจุบัน
    const formattedDate = currentDate.toISOString().split('T')[0]; // รูปแบบให้เป็น "YYYY-MM-DD"

    // Set วันที่เข้าเป็นวันปัจจุบัน
    setCheckInDate(formattedDate);

    // Set วันที่ออกเป็นวันถัดไปหลังจาก วันที่เข้า
    const nextDay = new Date(currentDate);
    nextDay.setDate(nextDay.getDate() + 1); // เพิ่ม 1 วัน
    const nextFormattedDate = nextDay.toISOString().split('T')[0];
    setCheckOutDate(nextFormattedDate);

    // เมื่อ component โหลด ใช้ค่าที่เก็บใน localStorage หากมีอยู่
    const storedNumGuests = localStorage.getItem('numGuests');
    if (storedNumGuests) {
      setNumGuests(parseInt(storedNumGuests));
    }
  }, []); // ให้ useEffect ทำงานเฉพาะเมื่อ component โหลดเท่านั้น

  const handleCheckInDateChange = (e) => {
    setCheckInDate(e.target.value);
    localStorage.setItem('checkInDate', e.target.value);
  };

  const handleCheckOutDateChange = (e) => {
    setCheckOutDate(e.target.value);
    localStorage.setItem('checkOutDate', e.target.value);
  };

  const handleNumGuestsChange = (e) => {
    const value = parseInt(e.target.value);
    setNumGuests(value);
    localStorage.setItem('numGuests', value.toString());
  };

  const handleReservationSubmit = () => {
    // เอาค่าที่ผู้ใช้ป้อนในแบบฟอร์มออก
    console.log('Check-in Date:', checkInDate);
    console.log('Check-out Date:', checkOutDate);
    console.log('Number of Guests:', numGuests);

    // เก็บค่าลงใน localStorage
    localStorage.setItem('checkInDate', checkInDate);
    localStorage.setItem('checkOutDate', checkOutDate);
    localStorage.setItem('numGuests', numGuests.toString());
  };

  return (
    <>
      <section className="about-section text-center" id="about">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8">
              <h2 className="text-white mb-4">โปรดเลือกการจองของคุณ</h2>
              <p className="text-white-50">
                <a href="https://startbootstrap.com/theme/grayscale/">the preview page.</a>
                The theme is open source, and you can use it for any purpose, personal or commercial.
              </p>
              <form>
                <label htmlFor="checkInDate">วันที่เข้าที่พัก :</label>
                <input
                  type="date"
                  id="checkInDate"
                  value={checkInDate}
                  onChange={handleCheckInDateChange}
                />
                <br />

                <label htmlFor="checkOutDate">วันออกที่พัก :</label>
                <input
                  type="date"
                  id="checkOutDate"
                  value={checkOutDate}
                  onChange={handleCheckOutDateChange}
                />
                <br />

                <label htmlFor="numGuests">จำนวนผู้เข้าพัก :</label>
                <input
                  type="number"
                  id="numGuests"
                  value={numGuests}
                  onChange={handleNumGuestsChange}
                />
                <br />
                <br/>

                <div>
                  <Link to="/projects">
                    <button type="button" onClick={handleReservationSubmit}>
                      ตกลง
                    </button>
                  </Link>
                  <br />
                  <br />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
