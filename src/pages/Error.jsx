import React from 'react'
import { Link, useNavigate, useRouteError } from 'react-router-dom'

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  // console.log(error)
  return (
    <div className='error'>
      <h1>Uh oh! We've got a Problem.</h1>
      <p>{error.message || error.statusText}</p>
      <div className="flex-md">
        <button className="btn btn--dark" onClick={()=>navigate(-1)}>
          <span>Go Back</span>
        </button>
        {/* Link to home */}
        <Link to="/" className='btn btn--dark'>
          <span>Go Home</span>
        </Link>
      </div>
    </div>
  )
}

export default Error