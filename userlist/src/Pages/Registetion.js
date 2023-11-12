
import React, { useState } from 'react';
import {  useNavigate } from "react-router-dom"
import { LoginAndRegisterImg } from '../Components';
import { addItemToLocalStorage, getItemsFromLocalStorage } from "../Hooks/LocalStorage"

export default function Registetion() {

  const navigater = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can perform actions with the collected form data
    console.log('Submitted Form Data:', formData);
    const allUser = getItemsFromLocalStorage("user");
    const isUserAlreadyExist = allUser.some((item) => item.email === formData.email && item.password === formData.password )

    if(isUserAlreadyExist){
      alert("User Already Exist")
      return;
    }
    const isUserAdded = addItemToLocalStorage("user", formData)
    console.log(isUserAdded)

    if(isUserAdded){
      navigater('/')
    }

  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };


  return (
    <section className="p-0 m-0" style={{ margin: '0', padding: '0', width: '100vw', height: '100vh' }}>
      <div className="container-fluid h-100">
        <div className="row h-100">
          {/* Left Column (Image) */}
          <div className="col-lg-6 d-flex align-items-center justify-content-center p-0">
            <LoginAndRegisterImg />
          </div>

          {/* Right Column (Form) */}
          <div className="col-lg-6 flex-column d-flex align-items-center justify-content-center ">
            <div className=' text-center'>
              <img src='https://www.shipcomwireless.com/img/shipcom-logo-black.svg'
                alt="Chemistry Lab"
                className="img-fluid w-100"
                style={{ maxHeight: 'calc(6vh)' }} />
              <h3 className=' fw-bolder mt-3' style={{ color: "#292B5A" }}>Welcome</h3>

              <span className=' text-secondary'>Login to Labs Monitoring System</span>

            </div>
            <form className="w-75" onSubmit={handleSubmit}>
              {/* Username input */}
              <div className="m-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                />
              </div>

              {/* Email input */}
              <div className="m-4">
                <input
                  type="email"

                  className="form-control"
                  placeholder="Enter email id"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              {/* Password input */}
              <div className="m-4">
                <input
                  type="password"

                  className="form-control"
                  placeholder="Enter password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>

              {/* Submit button */}
              <div className="m-4">
                <button type="submit" className="btn btn-block" style={{ backgroundColor: "#4E2C90", color: "white" }}>
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}


