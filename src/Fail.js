
import React  from 'react';
import { Link } from 'react-router-dom'; 

function App() {

      

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 mt-5">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title">ชำระไม่สำเร็จ</h1>
              <p className="card-text">โปรดทำการจองใหม่</p>
              <Link to="/">
                <button>กลับไปหน้าหลัก</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
