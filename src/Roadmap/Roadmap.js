import React from 'react'
import { useState } from 'react'
import Nodejs from './Nodejs'
import './map.css'
const Roadmap = () => {
  const [component, setComponent] = useState('')

  
  return (
    <div className='admin-cont'>
      <div className='bottom'>
        <div className='admin-left'>
          <div className='head'>Skill Based</div>
          <div className='admin-btn'>
            {/* <button onClick={() => setComponent('javascript')}>
              {' '}
              JavaScript
            </button> */}
            <button onClick={() => setComponent('nodejs')}> Node Js</button>
            {/* <button onClick={() => setComponent('nodejs')}> React</button> */}
            {/* <button onClick={() => setComponent('nodejs')}> Python </button> */}
            {/* <button onClick={() => setComponent('nodejs')}> Java</button> */}
          </div>
          <br />
          {/* <div className='head'>Role Based</div>
          <div className='admin-btn'>
            <button onClick={() => setComponent('javascript')}>
              {' '}
              FrontEnd
            </button>
            <button onClick={() => setComponent('nodejs')}> Backend</button>
          </div> */}
        </div>
        <div className='admin-right'>
          {component === 'nodejs' ? <Nodejs /> : null}
          {component === '' ? (
            <div
              style={{
                textAlign: 'center',
                fontSize: 'xx-large',
                color: 'black',
                minHeight: '68.2vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow:
                  ' rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
               
              }}
            >
              <div className='click' > CLICK A SKILL TO SEE THE ROADMAP</div>{' '}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default Roadmap
