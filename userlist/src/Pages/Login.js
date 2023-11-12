import React,{useState,useCallback, useContext} from 'react';
import { Link, useNavigate } from "react-router-dom"
import { LoginAndRegisterImg } from '../Components';
import {getItemsFromLocalStorage } from '../Hooks/LocalStorage'
import { UserContext } from '../App';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigater = useNavigate()
  const {isUserLogin, setUserLogin} = useContext(UserContext)


// Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const allUser = getItemsFromLocalStorage("user");

    const isUserPresent = allUser.some((item) => item.email === formData.email && item.password === formData.password )

    if(isUserPresent){
      alert("login Succesful")
      setUserLogin(true)
      navigater('/user')
    }else{
      alert("user not Registered")
    }


    // Here, you can perform actions with the collected form data
    console.log('Submitted Form Data:', formData);

    // Reset form fields if needed
    setFormData({
      email: '',
      password: '',
    });
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
           <LoginAndRegisterImg/>
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
              {/* Email input */}

              <div class="m-4">
                <input type="email"
                 name='email'
                    class="form-control" 
                    placeholder='Enter email id'
                    value={formData.email}
                    onChange={handleInputChange}
                     />
              </div>

              {/* Password input */}
              <div class="m-4">
                <input type="password"
                 name='password' 
                  class="form-control"
                   placeholder='Enter password' 
                   value={formData.password}
                    onChange={handleInputChange}
                   />
              </div>

              <div className='m-4'>
                <button type="submit" className="btn btn-block " style={{ backgroundColor: "#4E2C90", color: "white" }}>
                  Login
                </button>

               
                <Link to="/register" className="btn btn-block " style={{ backgroundColor: "#4E2C90", color: "white" }}>
                  Register
                </Link>
                <Link className='mt-1 float-end text-secondary'>Forgot Password ?</Link>

              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
