import React, { useEffect } from 'react'
import { useState } from 'react'
import './css/Creditcourse.css'
import toast from 'react-hot-toast'
import CreditInside from './CreditInside'
import { useNavigate } from 'react-router-dom'

const CreditCourse = () => {
  const navigate = useNavigate()

  useEffect(() => {
    var cards = document.querySelectorAll('.cp')

    window.addEventListener('load', function () {
      cards.forEach(e => {
        e.classList.add('animated')
      })
    })

    const section = document.querySelector('.course-platform')
    var cards = document.querySelectorAll('.cp')
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          cards.forEach(element => {
            element.classList.add('animated')
          })
        }
      })
    })

    observer.observe(section)
  }, [])

  const handleCredit = creditCourse => {
    const validCourses = ['Linkedin', 'Coursera', 'springboard']

    const message = validCourses.includes(creditCourse)
      ? navigate(creditCourse)
        ? 'Answers'
        : 'Answers'
      : `answers coming soon....keep a check`

    toast.success(`${creditCourse} ${message}`, {
      style: {
        padding: '16px',
        color: 'white'
      }
    })
  }

  return (
    <div className='display-wrapper'>
      <div className='sub-cont'>
        <div className='display-text plat-text ' style={{color:'white'}}>
          Find all of your Credit Courses..
        </div>

        <img src='/images/creditcourse_top.png' alt='' />
      </div>

      <div className='platforms'>
        <div className='plat-top'>
          <div className='plat-title'>PLATFORMS</div>
        </div>

        <hr />
        <section className='course-platform'>
          <div onClick={() => handleCredit('Linkedin')} className='cp cp1'>
            <img
              className='img-cp'
              src='course_images/linkedin.png'
              alt='hii'
            />
            <span className='span'>Linkedin</span>
          </div>
          <div onClick={() => handleCredit('Coursera')} className='cp cp2'>
            <img
              className='img-cp'
              src='course_images/coursera.png'
              alt='hii'
            />
            <span className='span'>Coursera</span>
          </div>
          <div
            onClick={() => handleCredit('springboard')}
            className='cp cp3'
          >
            <img className='img-cp' src='course_images/springboard.png' alt='hii' />
            <span className='span'>Spring Board (VAC)</span>
          </div>
          <div onClick={() => handleCredit('CodeChef')} className='cp cp3'>
            <img
              className='img-cp'
              src='course_images/codechef.png'
              alt='hii'
            />
            <span className='span'>CodeChef</span>
          </div>
        </section>
      </div>
    </div>
  )
}

export default CreditCourse
