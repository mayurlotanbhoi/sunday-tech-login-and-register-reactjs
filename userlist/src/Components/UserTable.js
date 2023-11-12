import React from 'react'

export default function UserTable({ showUserdetail, tableData }) {
  return (
    <div className='mt-3'>

      <table className="table table-responsive align-middle mb-0 bg-white table-borderless p-5">
        <thead className="" style={{ backgroundColor: "#E8EBF0" }}>
          <tr className=' text-secondary '>
            <th> IMAGE <i className=' fa fa-arrow-up'></i></th>
            <th>NAME <i className=' fa fa-arrow-up'></i></th>
            <th>GENDAR <i className=' fa fa-arrow-up'></i></th>
            <th>EMAIL <i className=' fa fa-arrow-up'></i></th>
            {/* <th>Actions <i className=' fa fa-arrow-up'></i></th> */}
          </tr>
        </thead>
        <tbody>

          {tableData.map((item, index) => {
            return (
              <tr className='mt-4 custom-table-row' key={index} >
                <td className='custom-table-cell'>
                  <div className="d-flex align-items-center">
                    <img
                      src={item.image}
                      alt=""
                      style={{ width: "45px", height: "45px" }}
                      className="rounded-circle"
                    />

                  </div>
                </td>
                <td className="custom-table-cell">
                  <div className="ms-3" style={{ cursor: "pointer" }} onClick={() =>showUserdetail(item)}>
                    <p className="fw-bold mb-1">{item.firstName + " " + item.lastName}</p>
                    {/* <p className="text-muted mb-0">john.doe@gmail.com</p> */}
                  </div>
                </td>
                <td className="custom-table-cell">
                  <span className=" d-inline">{item.gender}</span>
                </td>

                <td className="custom-table-cell w-100 d-flex justify-content-around align-items-center mt-2">
                  <span style={{ width: "150px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", verticalAlign: "middle" }}>{item.email}</span>
                  <span className='fw-bolder cursor-pointer' style={{ fontSize: "1.5rem", cursor: "pointer" }}>&#8285;</span>
                </td>
              </tr>

            )
          })}

          {/* <!-- More rows... --> */}
        </tbody>
      </table>

    </div>
  )
}
