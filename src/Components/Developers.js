import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import Carousel from 'react-multi-carousel'
import axios from '../axios'
import '../Components/css/Developers.css'
import 'react-multi-carousel/lib/styles.css'
import { InfinitySpin } from 'react-loader-spinner'
const Developers = () => {
  

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  const [images, setImages] = useState([])
  const [loading, setloading] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get('/get-developers')
      const devData = data.data
      setImages(devData)
      setloading(false)
    }
    fetchData()
    toast.success('MEET THE DEVELOPERS')
  }, [])

  const devs = images.map(dev => {
    return (
      <div key={dev._id} className='developers'>
        <div className='image'>
          <img src='/icons/585e4bcdcb11b227491c3396.png' alt='' />
        </div>
        <div className='credent'>
          <div className='initials'>{dev.name}</div>
          <div className='initials'>{dev.year}nd Year</div>
          <div className='initials'>{dev.role}</div>
          <span className='initials'>
            <a target={'_blank'} href={dev.instagram}>
              {' '}
              <i class='fa fa-instagram' aria-hidden='true'></i>{' '}
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a target={'_blank'} href={dev.linkedIn}>
              {' '}
              <i class='fa fa-linkedin' aria-hidden='true'></i>
            </a>
          </span>
        </div>
      </div>
    )
  })

  return (
    <div className='help-cont'>
      <div className='banner'>
        <img src='/images/developers_top.png' alt='' />
      </div>

      <div className='dev-section'>
        <Carousel className='dev-caor' responsive={responsive}>
          {devs.length > 0 ? (
            devs
          ) : (
            <div
              style={{
                alignItems: 'center',
                textAlign: 'center',
                width: '100vw'
              }}
            >
              <InfinitySpin width='200' color='#FF5353' />
            </div>
          )}
        </Carousel>
      </div>
    </div>
  )
}

export default Developers
