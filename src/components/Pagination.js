import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {

  const {page,handlePageChange,totalPages} = useContext(AppContext);

  return (
    <div className='d-flex justify-content-center align-items-center mb-0 p-1 fixed-bottom bg-white shadow-lg'>
      
    
        
      {
        page > 1 &&
        (<button
          className='btn btn-primary me-2'
         onClick={()=>handlePageChange(page-1)}>
          Previous
        </button>)
      }

      {
        page < totalPages &&
        (
          <button
          className='btn btn-primary me-2'
          onClick={()=>handlePageChange(page+1)}>
            Next
          </button>
        )

      }

     
      
      
      <small className='fw-bold'>Page {page} of {totalPages}</small>
    </div>
  )
}

export default Pagination
