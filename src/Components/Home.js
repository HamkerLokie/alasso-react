import React, { Component, useState, useTransition } from 'react'
import BtnSlider from './homecomponents/BtnSlider'
import dataSlider from './homecomponents/dataSlider'
import './css/home.css'
import './homecomponents/Slider.css'
import { toast } from 'react-hot-toast'
import { useEffect } from 'react'
import DevbyLokie from '../Promotions/DevbyLokie'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../store'
import { useGetFromStore } from '../hooks/zustandHooks'

import axios from '../axios'

export default function Home () {
  const [isPending, startTransition] = useTransition()
  const [slideIndex, setSlideIndex] = useState(1)
  const [popuup, setpopup] = useState(true)
  const user = useGetFromStore(useAuthStore, state => state.user)
  const email = useGetFromStore(useAuthStore, state => state.email)

  const setEmail = useAuthStore(state => state.setEmail)
  const setName = useAuthStore(state => state.setName)
  const setRole = useAuthStore(state => state.setRole)
  const setIsLoggedIn = useAuthStore(state => state.setIsLoggedIn)

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1)
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1)
    }
  }
  const [transparent, setTransparent] = useState(false)
  const [dis, setdis] = useState(true)
  const [colors, setColor] = useState('white')

  useEffect(() => {
    startTransition(() => {
      const validateUse = async () => {
        const res = await axios.post('/validate')
        setRole(res?.data?.role)
        setName(res?.data?.username)
        setEmail(res?.data?.email)
        setIsLoggedIn(res?.data?.username ? true : false)
      }
      validateUse()
      toast(`Alasso Welcomes You ${user ? user : ''}`, {
        icon: '🙏',
        style: {
          background: 'linear-gradient(90deg, #254380 -3.1%, #54A7C8 112.18%)',
          color: 'white'
        },
        duration: 700
      })
    })

    const section = document.querySelector('#slide-home')
    var cardDown = document.querySelectorAll('.card-down')
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          cardDown.forEach(element => {
            element.classList.add('animated')
          })
        }
      })
    })

    // Start observing the section element
    observer.observe(section)

    function handleScroll () {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      if (scrollTop > 80) {
        setTransparent(true)
        setColor('none')
        setdis(false)
      } else {
        setTransparent(false)
        setColor('white')
        setdis(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const seen = localStorage.getItem('promo')
    if (!seen) {
      const section = document.querySelector('.overlay-m')
      var pop = document.querySelector('.popup')
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            pop.classList.add('pop-ani')
          }
        })
      })
      observer.observe(section)
    } else {
      const section = document.querySelector('.overlay-m')
      if (section) {
        section.classList.add('seen')
      }
      setpopup(false)
    }
  }, [])

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length)
    }
  }

  const moveDot = index => {
    setSlideIndex(index)
  }

  const divStyle = {
    background: transparent
      ? 'transparent'
      : 'linear-gradient(270deg, #31628D 0.87%, #3A70A0 10.35%, #3A6FA0 20.55%, #468BB4 29.72%, #4A92B9 39.92%, #54A1CA 50.11%, #4E9ABF 54.19%, #4A93BA 60.82%, #478DB5 66.94%, #3A6FA0 76.62%, #3A70A0 82.74%, #32658F 97.02%)',
    transition: 'background 6s ease-in-out',
    boxShadow:
      'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
    color: 'black',
    display: dis ? 'block' : 'none'
  }

  const close = () => {
    setpopup(false)
    localStorage.setItem('promo', 'seen')
  }

  useEffect(() => {
    const blurDivs = document.querySelectorAll('.blur-load-home')
    blurDivs.forEach(div => {
      const img = div.querySelector('img')

      function loaded () {
        div.classList.add('loaded')
      }

      if (img.complete) {
        loaded()
      } else {
        img.addEventListener('load', loaded)
      }
    })
  }, [])

  return (
    <>
      <div className={`qa-navbar loadhome`} style={divStyle}>
        <div className='links'>
          <Link
            style={{ color: colors }}
            to='/CSE/semester/4/subject/Computer%20Networks'
            className='qa-link'
          >
            Computer Networks
          </Link>
          <Link
            style={{ color: colors }}
            to='/CSE/semester/4/subject/Software%20Engineering'
            className='qa-link'
          >
            Software Engineering
          </Link>
          <Link
            style={{ color: colors }}
            to='/CSE/semester/4/subject/Python%20Lab'
            className='qa-link'
          >
            Python Lab
          </Link>
          <Link
            style={{ color: colors }}
            to='/CSE/semester/2/subject/Digital%20Electronics'
            className='qa-link'
          >
            Digital Electronics
          </Link>
          <Link
            style={{ color: colors }}
            to='/CSE/semester/2/subject/BEEE'
            className='qa-link'
          >
            BEEE
          </Link>
          <Link
            style={{ color: colors }}
            to='/CSE/semester/2/subject/Physics'
            className='qa-link'
          >
            Physics
          </Link>
          <Link
            style={{ color: colors }}
            to='/creditcourse/Linkedin'
            className='qa-link'
          >
            LinkedIn
          </Link>
        </div>
        <div className='hidden-nav' style={divStyle}>
          <div className='hidden-links'>
            <Link
              style={{ color: colors }}
              to='/CSE/semester/2/subject/Autocad'
              className='qa-link'
            >
              AutoCad
            </Link>
            <Link
              style={{ color: colors }}
              to='/CSE/semester/4/subject/Computer%20Architecture'
              className='qa-link'
            >
              COA
            </Link>
            <Link
              style={{ color: colors }}
              to='/nptel/Probability%20And%20Statistics'
              className='qa-link'
            >
              Prob & Stats
            </Link>
            <Link
              style={{ color: colors }}
              to='/nptel/Data%20Mining'
              className='qa-link'
            >
              Data Mining
            </Link>
            <Link
              style={{ color: colors }}
              to='/developers'
              className='qa-link'
            >
              Developers
            </Link>
          </div>
        </div>
      </div>

      <div className='container-slider loadhome'>
        {dataSlider.map((obj, index) => {
          return (
            <div
              key={obj.id}
              className={
                slideIndex === index + 1 ? 'slide active-anim' : 'slide'
              }
            >
              <p className='wlcmtxt'>
                <div className="blur-load-home" style={{
                          backgroundImage: `url('/images/blur.jpg')`
                        }}>
                <img className='home-s' src={`/images/img${index + 1}.png`}  />

                </div>
                
                <p className='highlights1'>Makes Your</p>
                <p className='highlights2'>College Journey</p>
                <p className={`highlights3`}>Easier</p>
              </p>
            </div>
          )
        })}
        <BtnSlider moveSlide={nextSlide} direction={'next'} />
        <BtnSlider moveSlide={prevSlide} direction={'prev'} />

        <div className='container-dots'>
          {Array.from({ length: 3 }).map((item, index) => (
            <div
              onClick={() => moveDot(index + 1)}
              className={slideIndex === index + 1 ? 'dot active' : 'dot'}
            ></div>
          ))}
        </div>

        {popuup && (
          <>
            <div className='overlay-m'></div>
            <div className='popup'>
              <DevbyLokie />
              <button onClick={close} className='btn-cl '>
                X
              </button>
            </div>
          </>
        )}

        {!popuup && (
          <div className='pro'>
            <a
              style={{
                boxShadow:
                  'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'
              }}
              href='https://devbylokie.netlify.app'
              target={'_blank'}
              className='promo-btn cl'
            >
              {' '}
              Get Your Semester Project Done
            </a>
          </div>
        )}

        <Link className='hum-btn' to='#cards-down'>
          START &darr;
        </Link>
      </div>

      <section id='cards-down'>
        <div id='slide-home'>
          <div className='card-down'>
            <div className='top'>
              <img
                className='home-img'
                src='icons/studymaterial_homepage.png'
                alt='studymaterial'
              />
              <h2 className='btn-carousel'>
                {' '}
                <Link to='/studymaterial'>Study Material</Link>{' '}
              </h2>
            </div>
          </div>

          <div className='card-down'>
            <div className='top'>
              <img
                className='home-img'
                src='icons/NPTEL.png'
                alt='studymaterial'
              />
              <h2 className='btn-carousel'>
                <Link to='/nptel'>NPTEL</Link>
              </h2>
            </div>
          </div>

          <div className='card-down'>
            <div className='top'>
              <img
                className='home-img'
                src='icons/Credit_graphic.png'
                alt='studymaterial'
              />
              <h2 className='btn-carousel'>
                <Link to='/creditcourse'>Credit Courses</Link>
              </h2>
            </div>
          </div>

          <div className='card-down'>
            <div className='top'>
              <img
                className='home-img'
                src='icons/roadmap_graphic.png'
                alt='studymaterial'
              />
              <h2 className='btn-carousel'>
                {' '}
                <Link to='/roadmap'>Roadmaps</Link>
              </h2>
            </div>
          </div>

          <div className='card-down'>
            <div className='top'>
              <img
                className='home-img'
                src='icons/contest.png'
                alt='studymaterial'
              />
              <h2 className='btn-carousel'>
                <Link to='/contests'>Contests</Link>
              </h2>
            </div>
          </div>

          <div className='card-down'>
            <div className='top'>
              <img
                className='home-img'
                src='icons/developers_homepage.png'
                alt='studymaterial'
              />
              <h2 className='btn-carousel'>
                <Link to='/developers'>Developers</Link>
              </h2>
            </div>
          </div>
          <div className='card-down'>
            <div className='top'>
              <img
                className='home-img'
                src='icons/help_homepage.png'
                alt='studymaterial'
              />
              <h2 className='btn-carousel'>
                {' '}
                <Link to='/help'>Help</Link>
              </h2>
            </div>
          </div>

          <div className='card-down'>
            <div className='top'>
              <img
                className='home-img'
                src='icons/discord.png'
                alt='studymaterial'
              />
              <h2 className='btn-carousel'>
                <Link to=''>Discord</Link>
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
