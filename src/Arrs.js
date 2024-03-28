import React, { useState } from 'react';
import LoginComponent from './LoginComponent';
import "./Arrs.css"

function Arrs() {
    const [showLogin, setShowLogin] = useState(false); // กำหนดค่าเริ่มต้นเป็น false

    const handleLogin = (username, password) => {
        // ตรวจสอบข้อมูลล็อกอินและทำสิ่งที่คุณต้องการ
        console.log('Login with:', username, password);

        // ทำการเข้าสู่ระบบและปิดหน้าต่างล็อกอิน
        setShowLogin(false);
    };

    const handleOpenLogin = () => {
        setShowLogin(true);
    };

    const handleCloseLogin = () => {
        setShowLogin(false);
    };

    return (
        <div id="arr">
            <h1>SmileLockers</h1>
            <button onClick={handleOpenLogin}>โปรดใส่ข้อมูลของคุณ</button>

            {showLogin && (
                <LoginComponent onLogin={handleLogin} onClose={handleCloseLogin} />
            )}
        </div>
    )
}

export default Arrs;
