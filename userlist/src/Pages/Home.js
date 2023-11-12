import React, { useState,useContext } from 'react'
import { UserTable, Modal } from '../Components'
import { useFetch } from '../Hooks';
import { UserContext } from '../App';
import { useNavigate } from 'react-router-dom';

export default function Home() {

  const apiUrl = 'https://dummyjson.com/users';
  const { data, loading, error } = useFetch(apiUrl);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sidePannelData, setSidePannelData] = useState({});
  const {isUserLogin, setUserLogin} = useContext(UserContext)
  const navigater = useNavigate()


  if(!isUserLogin){
    navigater("/")
    return;
  }



 
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  const openModal = (modeldata) => {
    // console.log(modeldata)
    const {
      id,
      firstName,
      lastName,
      image,
      phone,
      address: { address, city, postalCode, state },
      company: { title }
    } = modeldata;

    const userSubDetails = {
      id,
      firstName,
      lastName,
      image,
      phone,
      address: { address, city, postalCode, state },
      company: { title }
    };
    setSidePannelData(userSubDetails)
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className=' container-fluid' style={{ backgroundColor: "#F3F5F8", width: '100vw', minHeight: "100vh" }}>
      <div className=' container pt-5'>
        <div className=' d-flex justify-content-between'>
          <div className=' lh-sm'>
            <h5 className=' text-secondary m-0 p-0'>Users</h5>
            <span className=' text-secondary'>Here are all the users for this projects</span>
          </div>

          <button className=' btn h-25' style={{ border: "2px solid #4E2C90", color: "#4E2C90" }}> <i className=' fa fa-plus'></i> Add User </button>
        </div>


        <div className="input-group rounded position-relative mt-4" style={{ maxWidth: "20rem" }}>


          <div>
            <span className="input-group-text border-0 bg-white rounded-pill position-absolute text-secondary top-0 start-0" id="search-addon" style={{ zIndex: "999", }} >
              <i className="fas fa-search text-secondary" ></i>
            </span>
            <input type="search" className="form-control rounded-pill border-0 ps-5" placeholder="Search" aria-label="Search" aria-describedby="search-addon" style={{ paddingLeft: "2.5rem" }} />
          </div>

          <div className='d-flex align-items-center text-secondary ms-3'>
            <i className='fa fa-filter me-2 me-2'></i>
            <small className="m-0">Filter</small>
          </div>
        </div>

        {loading? <h1>Loading Data..</h1> : <UserTable showUserdetail={openModal} tableData={data.users} />}

      </div>

      <div>
        {/* <button onClick={openModal}>Open Modal</button> */}

        {isModalOpen && <Modal onClose={closeModal} userDetail={sidePannelData} />}
      </div>

    </div>
  )
}
