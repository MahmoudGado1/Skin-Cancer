/* eslint-disable no-unused-vars */
import { useState, useRef } from "react";
import "./SkinCancer.css";
// eslint-disable-next-line no-unused-vars
import { CheckCircle2Icon, UploadCloudIcon, XIcon, CameraIcon } from "lucide-react";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";

const SkinCancer = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    address: "",
    phone: "",
    gender: "",
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [cameraActive, setCameraActive] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isFormValid = () => {
    const { name, age, address, phone, gender } = formData;
    return (
      name.trim() &&
      age.trim() &&
      address.trim() &&
      phone.trim() &&
      gender.trim() &&
      selectedImage
    );
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
    document.getElementById("fileInput").value = ""; // Reset file input
  };

  const handleSend = (event) => {
    event.preventDefault();
    if (isFormValid()) {
      toast.success("Send successful!", {
        position: "top-center",
        icon: <CheckCircle2Icon />,
        autoClose: 5000,
      });

      setFormData({
        name: "",
        age: "",
        address: "",
        phone: "",
        gender: "",
      });
      setSelectedImage(null);
    }
  };

  const handleClick = () => {
    document.getElementById("fileInput").click();
  };

  const startCamera = async () => {
    try {
      setCameraActive(true);
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  const capturePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (video && canvas) {
      const context = canvas.getContext("2d");
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const imageUrl = canvas.toDataURL("image/png");
      setSelectedImage(imageUrl);
      stopCamera();
    }
  };

  const stopCamera = () => {
    setCameraActive(false);
    if (videoRef.current && videoRef.current.srcObject) {
      let stream = videoRef.current.srcObject;
      let tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
  };

  return (
    <div className="container skin-cancer">
      <div className="header-line line-depart">
        <span className="line" />
        <span className="text">Skin Cancer Detection</span>
      </div>
      <h1>Upload an image or take a photo to check for skin cancer.</h1>

      <form className="drag-drop-container">
        <div className="data-patient">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Patient Name"
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
          <div>
            <select name="gender" value={formData.gender} onChange={handleInputChange}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>

        {/* Drag & Drop or Upload Section */}
        {!cameraActive && (
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
                <span>Drag & Drop or click to upload image</span>
              </div>
            ) : (
              <div className="selected-image-container">
                <img src={selectedImage} alt="Selected" className="selected-image" />
                <Button variant="ghost" size="icon" onClick={handleRemoveImage}>
                  <XIcon className="w-4 h-4" />
                </Button>
              </div>
            )}
            <input type="file" id="fileInput" accept="image/*" onChange={handleFileChange} style={{ display: "none" }} />
          </div>
        )}

        {/* {cameraActive && (
          <div className="camera-container">
            <video ref={videoRef} autoPlay></video>
            <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
            <div className="bt">
            <button className="capture-btn" onClick={capturePhoto}>
              Capture Photo
            </button>
            <button className="stop-btn" onClick={stopCamera}>
              Close Camera
            </button>
            </div>
          </div>
        )} */}

        {/* {!cameraActive && (
          <div className="button-container">
            <button type="button" className="camera-btn" onClick={startCamera}>
              <CameraIcon className="icon" /> Open Camera
            </button>
          </div>
        )} */}

        <div className="button-container">
          <button className="send-btn" onClick={handleSend} disabled={!isFormValid()}>
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default SkinCancer;
