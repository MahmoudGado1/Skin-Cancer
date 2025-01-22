import { useState } from "react";
import "./SkinCancer.css";
import { UploadCloudIcon, XIcon } from "lucide-react";
import { Button } from "react-bootstrap";

const SkinCancer = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    address: "",
    phone: "",
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isFormValid = () => {
    const { name, age, address, phone } = formData;
    return name.trim() && age.trim() && address.trim() && phone.trim() && selectedImage;
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragActive(false);

    const file = event.dataTransfer.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    const fileInput = document.getElementById("fileInput");

    if (fileInput) {
      fileInput.value = ""; // Reset file input
    }
  };

  const handleSend = (event) => {
    event.preventDefault();
    if (isFormValid()) {
      alert("Image sent successfully!");
      setFormData({
        name: "",
        age: "",
        address: "",
        phone: "",
      });
      setSelectedImage(null);
    }
  };

  const handleClick = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div className="container skin-cancer">
      <div className="header-line line-depart">
        <span className="line" />
        <span className="text">Skin Cancer Detection</span>
      </div>
      <h1>
        Upload an image of your skin to check for potential signs of skin
        cancer.
      </h1>
      <form className="drag-drop-container">
        <div className="data-patient">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name Patient"
            />
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              placeholder="Age"
            />
          </div>
          <div>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Address"
            />
            <input
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone"
            />
          </div>
        </div>
        <div
          className={`drop-area ${dragActive ? "active" : ""}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={!selectedImage ? handleClick : null}
        >
          {!selectedImage ? (
            <div className="upload-image">
              <UploadCloudIcon className="icon" />
              <span className="">Drag & Drop or click to upload image</span>
            </div>
          ) : (
            <div className="selected-image-container">
              <img
                src={selectedImage}
                alt="Selected"
                className="selected-image"
              />
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-foreground"
                onClick={handleRemoveImage}
              >
                <XIcon className="w-4 h-4" />
              </Button>
            </div>
          )}
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </div>
        <div className="button-container">
          <button
            className="send-btn"
            onClick={handleSend}
            disabled={!isFormValid()}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default SkinCancer;
