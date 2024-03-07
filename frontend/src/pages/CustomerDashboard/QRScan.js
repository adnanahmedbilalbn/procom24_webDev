import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaCloudUploadAlt } from "react-icons/fa";

const QRScan = () => {
  const [qrCodeImage, setQRCodeImage] = useState(null);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setQRCodeImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setQRCodeImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="qr-code-uploader">
      <div className="upload-box flex flex-col" onDrop={handleDrop} onDragOver={handleDragOver}>
      <h1 className='mr-auto p-5 text-2xl	'>Upload Files</h1>
          <div className="browse-box">
            {/* <input
              type="file"
              accept="image/*"
              onChange={handleFileInputChange}
              className="file-input"
            />
            <p className="browse-text">Drag & Drop or Browse</p> */}

            <div>
              <FaCloudUploadAlt />
            </div>
            <div>
              <h2>Drop QR Image Here</h2>              
            </div>
            <div>
              <p>Supported format : PNG, JPG</p>              
            </div>
            <div>
              <p>OR</p>              
            </div>
            <div>
              <p>Browse files</p>              
            </div>
          </div>
          <div className='p-5'>
            <Button variant='transparent'>Cancel</Button>
            <Button className='bg-cyan-400'>Upload</Button>

          </div>
      </div>
    </div>
  );
};

export default QRScan;
