import React, { useState } from 'react';
import Dig from './Dig.jpg'; // อยู่บรรทัดนี้

function Imres() {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    document.getElementById('fileInput').click();
  };

  return (
    <div className="App">
      <img src={Dig} alt="Default" style={{ maxWidth: '35%' }} />
      <h1 style={{ marginTop: '20px', marginBottom: '10px' }}>อัพโหลดสลิปของคุณ</h1>
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: 'none' }}
      />
      <button
        style={{
          backgroundColor: '#4CAF50', // สีพื้นหลัง
          border: 'none',
          color: 'white',
          padding: '15px 32px',
          textAlign: 'center',
          textDecoration: 'none',
          display: 'inline-block',
          fontSize: '16px',
          margin: '4px 2px',
          cursor: 'pointer',
          borderRadius: '8px'
        }}
        onClick={handleUploadClick}
      >
        ค้นหารูปภาพภายในเครื่อง
      </button>
      {image && (
        <div>
          <h2 style={{ marginTop: '20px' }}>Preview</h2>
          <img src={image} alt="Uploaded" />
        </div>
      )}
    </div>
  );
}

export default Imres;
