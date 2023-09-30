import React from 'react'
import './css/LoginAlert.css'
import { Link } from 'react-router-dom'

const LoginAlert = () => {
  return (
    <div className='login-alert'>
      <div className='alert-wrapper'>
        <span> Please Login to Access this page</span>

        <Link to={'/login'} className='link'>Login</Link>
      </div>
    </div>
  )
}

export default LoginAlert
