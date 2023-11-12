import React, { useState } from 'react';
// import './Modal.css'; // Make sure to create a CSS file for styles

const Modal = ({ onClose, userDetail }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300); // Adjust the delay to match the transition duration
  };

  return (
    <div className={`modal-overlay ${isVisible ? 'active' : ''}`} onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className=' p-4'>

          {/* <i className="fa fa-times" onClick={handleClose}></i> */}

          <div className=' text-center d-flex justify-content-between align-items-center'>
            <span className=' text-secondary'>User Details</span>
            <span className='fw-bolder cursor-pointer' style={{ fontSize: "1.5rem", cursor: "pointer" }} >&#8285;</span>
          </div>



          <div className='side-panal-card mt-3 d-flex'>
            <div className='me-3' >
              <img
                src={userDetail.image}
                alt=""
                style={{ width: "5rem", height: "5rem" }}
                className="rounded-circle"
              />
            </div>

            <div  >
              <p className="fw-bold m-1 p-0" >{userDetail.firstName + " " + userDetail.lastName}</p>
              <p className='text-secondary d-block m-1 p-0' style={{ fontSize: "14px", lineHeight: '1.5' }}>User id {userDetail.id}</p>
              <p className="badge rounded-pill d-inline text-white m-1 " style={{ backgroundColor: "#84D49D", lineHeight: '1.5' }}>Active</p>
            </div>



          </div>

        </div>
        <hr className=' text-secondary' />

        <div className='p-4'>
          <div className='fs-6  '>
            <i className='  fa fa-user-circle' ></i>
            <span className='ms-4 fw-bolder text-grey'>Basic & acount details</span>
          </div>

          <div className=' mt-4'>
            <p className="fw-bold m-1 p-0" >{userDetail.firstName + " " + userDetail.lastName}</p>
            <p className='text-secondary d-block fw-bold m-1 p-0' style={{ fontSize: "14px", lineHeight: '1.5' }}>Full name</p>
          </div>

          <div className=' mt-4'>
            <p className="fw-bold m-1 p-0" >{userDetail.company.title}</p>
            <p className='text-secondary d-block fw-bold m-1 p-0' style={{ fontSize: "14px", lineHeight: '1.5' }}>User rols</p>
          </div>

        </div>


        <hr className=' text-secondary' />

        <div className='p-4'>
          <div className='fs-6  '>
            <i className='  fa fa-contact-card' ></i>
            <span className='ms-4 fw-bolder text-grey'>Contact</span>
          </div>

          <div className=' mt-4'>
            <p className="fw-bold m-1 p-0" >{userDetail.phone}</p>
            <p className='text-secondary d-block fw-bold m-1 p-0' style={{ fontSize: "14px", lineHeight: '1.5' }}>Phone Number</p>
          </div>

          <div className=' mt-2'>
            {/* address: { address, city, postalCode, state }, */}
            <p className="fw-bold m-0  p-0" >{userDetail.address.address}</p>
            <p className="fw-bold m-0 p-0" >{userDetail.address.city + " " + userDetail.address.postalCode + " " + userDetail.address.state}</p>

            <p className='text-secondary d-block fw-bold m-1 p-0' style={{ fontSize: "14px", lineHeight: '1.5' }}>Address</p>
          </div>
        </div>



      </div>
    </div>
  );
};

export default Modal;
