import axios from '../axios'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'

const AddAdmin = ({ portalFor }) => {
  const [name, setname] = useState('')
  const [uid, setuid] = useState('')
  const [course, setCourse] = useState('')
  const [role, setrole] = useState('')
  const [linkedIn, setlinkedIn] = useState('')
  const [instagram, setinstagram] = useState('')
  const [year, setyear] = useState('')

  const handleAdmin = async e => {
    e.preventDefault()
    const res = await axios.post('/add-developer', { name, uid, course, role, linkedIn, instagram, year })
      .then(() => {
        setname('')
        setuid('')
        setCourse('')
        setrole('')
        setinstagram('')
        setlinkedIn('')
        toast.success(`${name} Added as Developer`)
      })
      .catch(err => {
        console.log('from react');
        console.log(err)
      })
  }

  return (
    <div className='files-form'>
      <div
        style={{
          textAlign: 'center',
          color: 'white',
          padding: '.6em 0em .6em 0em',
          background: 'linear-gradient(90deg, #254380 -3.1%, #54A7C8 112.18%)'
        }}
      >
        {' '}
        ADD {portalFor.toUpperCase()}
      </div>

      <form method='POST' >
        <input
          type='text'
          onChange={e => setname(e.target.value)}
          name={name}
          placeholder='Name'
        />
        <input
          type='text'
          onChange={e => setuid(e.target.value)}
          name={uid}
          placeholder='UID'
        />
        <input
          type='text'
          onChange={e => setCourse(e.target.value)}
          name={course}
          placeholder='Course'
        />
        <input
          type='text'
          onChange={e => setrole(e.target.value)}
          name={role}
          placeholder='Role'
        />
        <input
          type='text'
          onChange={e => setyear(e.target.value)}
          name={year}
          placeholder='Year'
        />
        <input
          type='text'
          onChange={e => setlinkedIn(e.target.value)}
          name={linkedIn}
          placeholder='LinkedIn Link'
        />
        <input
          type='text'
          onChange={e => setinstagram(e.target.value)}
          name={instagram}
          placeholder='Instagram Link'
        />
        <br />
        {/* <input type={'submit'} value={'Submit'} /> */}
        <button onClick={handleAdmin}>Submit</button>
      </form>
    </div>
  )
}

export default AddAdmin
