import axios from '../axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './admin-css/Portal.css'
import CoursePost from './CoursePost'
import NptelPost from './NPTELpost'
import Uploader from './Uploader'
import AddHelp from './AddHelp'
import AddDeveloper from './AddDeveloper'
import CourseReq from './CourseReq'
import { useNavigate } from 'react-router-dom'

const AdminPortal = () => {
  const navigate = useNavigate()
  const [user, setuser] = useState('')

  useEffect(() => {
    const localUser = localStorage.getItem('admin')
    if (!localUser) {
      navigate('/admin-alert-404')
    } 
  }, [navigate])

  const [component, setComponent] = useState('')

  return (
    <div className='admin-cont'>
      <div className='atop'>
        <div className='ap'>Admin Portal</div>
        <div className='admin'>
          <img src='/icons/585e4bcdcb11b227491c3396.png' alt='' />
          <div>{user}</div>
        </div>
      </div>

      <div className='bottom'>
        <div className='admin-left'>
          <div className='head'>DOABLES</div>
          <div className='admin-btn'>
          <button onClick={() => setComponent('Requested Courses')}>
              {' '}
              Course Request
            </button>
        
            <button onClick={() => setComponent('files')}> Add Files</button>
            <button onClick={() => setComponent('nptel')}> Add NPTEL</button>
            <button onClick={() => setComponent('course')}> Add Course</button>
            <button onClick={() => setComponent('help')}> Add Help</button>
            <button onClick={() => setComponent('developer')}>
              {' '}
              Add Developer
            </button>
           
          </div>
        </div>
        <div className='admin-right'>
          {component === 'Requested Courses' ? (
            <CourseReq portalFor={component} />
          ) : null}
        
          {component === 'files' ? <Uploader portalFor={component} /> : null}
          {component === '' ? (
            <div
              style={{
                textAlign: 'center',
                background:
                  'linear-gradient(90.31deg, #0E0E0E 0.24%, #1F111B 19.22%, #391B34 33.73%, #662259 60.69%, #73235A 78.84%, #E1577B 99.79%)',
                fontSize: 'xx-large',
                color: 'white',
                height: '51.5vh'
              }}
            >
              {' '}
              Welcome{' '}
            </div>
          ) : null}
          {component === 'nptel' ? <NptelPost portalFor={component} /> : null}
          {component === 'course' ? <CoursePost portalFor={component} /> : null}
          {component === 'help' ? <AddHelp portalFor={component} /> : null}
          {component === 'developer' ? (
            <AddDeveloper portalFor={component} />
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default AdminPortal
