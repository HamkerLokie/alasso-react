import React from 'react'
import './css/LoginAlert.css'
import { Link } from 'react-router-dom'


const AdminAlert = () => {
  return (
    <div className='login-alert'>
      <div className='alert-wrapper'>
        <span>Unauthorized Page - Only Admins have access to this</span>
        <Link to={'/'} className='link'>Back to Home</Link>
      </div>
    </div>
  )
}

export default AdminAlert
