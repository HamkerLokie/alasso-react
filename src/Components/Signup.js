import React, { useState } from 'react'
import './css/Signup.css'
import { toast } from 'react-hot-toast'
import { useEffect } from 'react'
import axios from '../axios'
import { useNavigate } from 'react-router-dom'
import { Vortex } from 'react-loader-spinner'

const Signup = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [email, setemail] = useState('')
  const [mobile, setmobile] = useState('')
  const [password, setpassword] = useState('')
  const [cpassword, setcpassword] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('jwttoken')
    if (token) {
      navigate('/')
    } else {
      toast('WE ARE READY TO WELCOME YOU', {
        icon: '😍',
        style: {
          background: 'black',
          color: 'white'
        }
      })
    }
  }, [])

  const postForm = async e => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await axios.post('/user/register', {
        username,
        email,
        mobile,
        password,
        cpassword
      })
      toast.success(`We are Happy to see you ${username}, Please Login`)
      navigate('/login')
    } catch (error) {
      toast.error(`${error?.response?.data?.message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='box-cont'>
      <div className='left'>
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
        <form method='POST' onSubmit={postForm}>
          <input
            type='text'
            name={username}
            onChange={e => setUsername(e.target.value)}
            placeholder='Username'
          />
          <input
            type='text'
            name={email}
            onChange={e => setemail(e.target.value)}
            placeholder='E-mail'
          />
          <input
            type='text'
            name={mobile}
            onChange={e => setmobile(e.target.value)}
            placeholder='Mobile No.'
          />
          <input
            type='password'
            name={password}
            onChange={e => setpassword(e.target.value)}
            placeholder='Password'
          />
          <input
            type='password'
            name={cpassword}
            onChange={e => setcpassword(e.target.value)}
            placeholder='Confirm Password'
          />
          <input className='bbtn' type='submit' />
        </form>
        <hr />
        <div className='yet'>
          <span>Already Registered?</span>
          <a onClick={() => navigate('/login')}>Login </a>
        </div>
      </div>
    </div>
  )
}

export default Signup
