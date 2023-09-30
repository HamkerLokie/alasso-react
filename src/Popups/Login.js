import React from 'react'
import { useState } from 'react'
import '../Components/css/Login.css'
import axios from '../axios'
import { useNavigate } from 'react-router-dom'
const Login = props => {

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

 const handleLogin = async (e) => {
  e.preventDefault();
  await axios.post('/user/login');


 }

  return props.trigger ? (
    <div className='login-cont'>
      <div className='inside-wrapper'>
        <h3>Login</h3>
        <form method='POST' onSubmit={handleLogin}>
          <input
            type='email'
            onChange={e => setemail(e.target.value)}
            name={email}
            id=''
            placeholder='E-MAIL'
          />
          <input
            type='password'
            onChange={e => setpassword(e.target.value)}
            name={password}
            id=''
            placeholder='PASSWORD'
          />
          <input type='submit' value='Submit' />
        </form>
        <div className='new'>
          <span>New To Alasso?</span>
          <button onClick={() => props.setTrigger(false)}>Sign up</button>
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
  ) : (
    ''
  )
}

export default Login
