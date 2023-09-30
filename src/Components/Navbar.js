import React, { useEffect, useState, useTransition } from 'react'
import './css/Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../axios'
import { useAuthStore } from '../store'
import { useGetFromStore } from '../hooks/zustandHooks'

const Navbar = () => {
  const navigate = useNavigate()
  const [isPending, startTransition] = useTransition()
  const user = useGetFromStore(useAuthStore, state => state.user)
  const [setStoreToken, setIsLoggedIn, setRole, setName, setEmail] =
    useAuthStore(state => [
      state.setToken,
      state.setRole,
      state.setEmail,
      state.setName,
      state.setIsLoggedIn
    ])

  useEffect(() => {
    startTransition(() => {
      const fetchCourses = async () => {
        const data = await (await axios.get('/getcourse')).data
        setcourses(data)
      }
      const fetchNptel = async () => {
        const data = await (await axios.get('/nptel-courses')).data
        setnptel(data)
      }
      fetchCourses()
      fetchNptel()
    })
  }, [])

  const [courses, setcourses] = useState([])
  const [nptel, setnptel] = useState([])

  const handleLogout = () => {
    startTransition(() => {
      setStoreToken('')
      setRole('')
      setName('')
      setEmail('')
      setIsLoggedIn(false)
      navigate('/signup')
    })
  }

  const courseMaps = courses.map((course, index) => {
    const sem = course.semester
    return (
      <li key={index} className='cse-sub-menu-link'>
        <span key={course._id} className='sub-menu-link'>
          {course.courseName}
        </span>
        <img
          className='sub-dropdown-icon'
          src='icons/dropdown_right_arrow.png'
          alt='icon'
        ></img>
        <div className='sub-menu deep-sub-menu cse-sub-menu'>
          <ul>
            <h5 className='sub-menu-heading'>Semester</h5>
            <hr />

            {sem.map((semester, index) => {
              let course_name = course.courseName
              let sem_num = semester.sem_num
              return (
                <li key={index}>
                  {' '}
                  <Link
                    key={semester._id}
                    className='sub-menu-link'
                    to={{
                      pathname: `/${course_name}/semester/${sem_num}`
                    }}
                  >
                    {semester.sem_num}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </li>
    )
  })

  const nptelMaps = nptel.map((course, index) => {
    return (
      <li key={index} className='.li-li'>
        <Link to={course.link} key={course._id} className='sub-menu-link'>
          {course.courseName}
        </Link>
      </li>
    )
  })

  return (
    <div className='navbar-container loadhome'>
      <nav className='navbar navbar-expand-lg bg-light'>
        <div className='container-fluid navcunt '>
          <Link className='navbar-brand active' to='/'>
            <img className='logo' src='/icons/logo.png' alt='ALASSO'></img>
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className=' nav-center-custom navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item studymaterial-sub-menu-hover mx-3'>
                <Link className='nav-link' to='/buy/dress/cu'>
                  Book CU Dress
                </Link>
              </li>
              <hr />
              <li className='nav-item studymaterial-sub-menu-hover mx-3'>
                <Link className='nav-link' to='/studymaterial'>
                  Study Material
                </Link>
                <div className='sub-menu studymaterial-dropdown'>
                  <ul>
                    <h5 className='sub-menu-heading'>Courses</h5>
                    <hr />

                    {courseMaps}

                    <li>
                      <Link className='sub-menu-link' to='/studymaterial'>
                        See all subjects
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <hr />
              <li className='nav-item nptel-sub-menu-hover mx-3'>
                <Link className='nav-link' to='/nptel'>
                  NPTEL
                </Link>
                <div className='sub-menu nptel-dropdown'>
                  <ul>
                    <h5 className='sub-menu-heading'>Courses</h5>
                    <hr />

                    {nptelMaps}
                  </ul>
                </div>
              </li>
              <hr />

              <li className='nav-item nptel-sub-menu-hover mx-3'>
                <Link className='nav-link' to='/creditcourse'>
                  Credit Courses
                </Link>
                <div className='sub-menu nptel-dropdown'>
                  <ul>
                    <h5 className='sub-menu-heading'>Platforms</h5>
                    <hr />
                    <li className='.li-li'>
                      <Link
                        to={'/creditcourse/Linkedin'}
                        className='sub-menu-link'
                      >
                        LinkedIn
                      </Link>
                    </li>
                    <li className='.li-li'>
                      <Link
                        to={'/creditcourse/Coursera'}
                        className='sub-menu-link'
                      >
                        Coursera
                      </Link>
                    </li>
                    <li className='.li-li'>
                      <Link
                        to={'/creditcourse/springboard'}
                        className='sub-menu-link'
                      >
                        Springboard
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <hr />
              <li className='nav-item mx-3'>
                <Link className='nav-link' to='/contests'>
                  Contests
                </Link>
              </li>

              <hr />
            </ul>
            <li className='nav-item mx-3'>
              {user ? (
                <button
                  onClick={handleLogout}
                  className='nav-btn bg-danger'
                  style={{
                    boxShadow:
                      'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'
                  }}
                >
                  Logout, {user}
                </button>
              ) : (
                <Link
                  className='btn btn-outline-success bg-success text-light'
                  to='/signup'
                  style={{
                    boxShadow:
                      'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'
                  }}
                >
                  Sign Up
                </Link>
              )}
            </li>
            <li className=' plus-icon-sub-menu-hover nav-item mx-3'>
              <Link
                className='btn rounded-circle bg-primary text-light'
                style={{
                  boxShadow:
                    'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'
                }}
              >
                <i class='fa fa-plus' aria-hidden='true'></i>
              </Link>
              <div
                className='sub-menu plus-dropdown'
                style={{
                  boxShadow:
                    'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'
                }}
              >
                <ul>
                  <Link className='nav-link-tip' to={'/help'}>
                    <i className='fa fa-2x fa-question' aria-hidden='true'>
                      <span className='tool-tip'>Help</span>
                    </i>
                  </Link>
                  <Link className='nav-link-tip' to={'/developers'}>
                    <i className='  fa fa-2x fa-code ' aria-hidden='true'>
                      <span className='tool-tip'>Developers</span>
                    </i>
                  </Link>

                  <Link className='nav-link-tip' to='/roadmap'>
                    <i className='  fa fa-2x fa-map-signs ' aria-hidden='true'>
                      <span className='tool-tip'>Roadmaps</span>
                    </i>
                  </Link>
                </ul>
              </div>
            </li>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
