// Intro.js
import React, { useEffect, useState } from 'react'
import './intro.css'

const Intro = () => {
  const [showLogo, setShowLogo] = useState(false)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShowLogo(true)

      setTimeout(() => {
        setShowContent(true)
      }, 1000)
    }, 500)
  }, [])

  return (
    <div className='intro-container'>
      <div className={`intro-logo ${showLogo ? 'logo-pop' : ''}`}>
        <img className='intro' src='/icons/main-logo.png' alt='Logo' />
        <div
          className={` logo-content ${showContent ? 'content-slide-up' : ''}`}
        >
          <h2 className='ease' style={{ fontSize: '2.3em', fontWeight: '800' }}>
            <span>Alasso</span>
          </h2>{' '}

          
          <i
            style={{ fontSize: '3.5em', fontWeight: '400' }}
            className={`  type-writer ${showContent ? 'type-animate' : ''}`}
          >
            Study With Ease
          </i>
        </div>
      </div>
    </div>
  )
}

export default Intro
