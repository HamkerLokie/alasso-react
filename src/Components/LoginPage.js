import React from 'react'
import { useState } from 'react'
import '../Components/css/Login.css'
import axios from '../axios'
import { Link, useNavigate } from 'react-router-dom'
import { Vortex } from 'react-loader-spinner'
import toast from 'react-hot-toast'
import { useEffect } from 'react'
import { useGetFromStore } from '../hooks/zustandHooks'
import { useAuthStore } from '../store'
const Login = () => {
  const navigate = useNavigate()
  const token = useGetFromStore(useAuthStore, state => state.token)
  const setStoreToken = useAuthStore((state) => state.setToken)
  useEffect(() => {
    if (token) {
      navigate('/')
    }
  })

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async e => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await axios.post('/user/login', { email, password })

      const { access_token } = res.data

      setStoreToken(access_token)
     

    } catch (error) {
      error.response &&
        error.response.data &&
        toast.error(error.response.data.message)
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
        <h3>Login</h3>

        <form method='POST'>
          <input
            type='email'
            name={email}
            onChange={e => setemail(e.target.value)}
            placeholder='E-MAIL'
          />
          <input
            type='password'
            name={password}
            onChange={e => setpassword(e.target.value)}
            placeholder='PASSWORD'
          />
          <input
            className='login-inp'
            onClick={handleLogin}
            type='submit'
            value='Login'
          />
        </form>

        <div className='new'>
          <span>New To Alasso?</span>
          <Link className='link' to={'/signup'}>
            Sign Up
          </Link>
        </div>
        <div className='credential'>
          <span>Login Through</span>
          <div>
            <a href=''>
              {' '}
              <i
                class=' text-primary fa fa-2x fa-facebook'
                aria-hidden='true'
              ></i>{' '}
            </a>
            <a href=''>
              {' '}
              <i
                class=' text-danger fa fa-2x fa-google'
                aria-hidden='true'
              ></i>{' '}
            </a>
            <a href=''>
              {' '}
              <i
                class=' text-primary fa fa-2x fa-twitter'
                aria-hidden='true'
              ></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
