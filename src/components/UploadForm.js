import React from 'react';

function UploadForm({ onImageUpload }) {
  const fileInputRef = React.createRef();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      return;
    }
    if (!file.type.match('image.*')) {
      alert('Please select an image file.');
      return;
    }
    const imageUrl = URL.createObjectURL(file);
    onImageUpload(imageUrl);
  };

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/jpeg, image/png, image/gif"
        style={{ display: 'none' }}
      />
      <button className="upload-button" onClick={() => fileInputRef.current.click()}>
        Upload Image
      </button>
    </div>
  );
}

export default UploadForm;
