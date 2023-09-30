import React, { useState } from 'react'
import axios from '../axios'
import './css/reqCourse.css'
import { Vortex } from 'react-loader-spinner'
import { toast } from 'react-hot-toast'


function ReqCourse () {
  const [courseName, setCourseName] = useState('')
  const [platform, setplatform] = useState('')
  const [loading, setLoading] = useState(false)


  const handleSubmit = async event => {
    event.preventDefault();
    setLoading(true)
    const token = localStorage.getItem('jwttoken')
    try {
      const res = await axios.post('/submit-course', { courseName, platform }, {
        headers: {
          Authorization: `Bearer ${token}`,
        }});

        setCourseName('')
        setplatform('')
        toast.success(`${courseName} has been submitted to Alasso Team`)

    } catch (error) {
        toast.error('Login to Post')
    }
    finally{
      setLoading(false)
    }
   
  }

 

  return (
    <>
       {loading && (
          <Vortex
            visible={true}
            height='80'
            width='100%'
            ariaLabel='vortex-loading'
            wrapperStyle={{ width: '100%' }}
            wrapperClass='vortex-wrapper'
            colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
          />
        )}
      {(
        <form className='req-form' onSubmit={handleSubmit}>
          <input
            className='req-inp'
            type='text'
            placeholder='Course Name'
            value={courseName}
            onChange={event => setCourseName(event.target.value)}
          />
          <input
            className='req-inp'
            type='text'
            placeholder='Platform'
            value={platform}
            onChange={event => setplatform(event.target.value)}
          />
          <button className='btn-sb' type='submit'>
            Submit
          </button>
         
        </form>
      )}
    </>
  )
}

export default ReqCourse
