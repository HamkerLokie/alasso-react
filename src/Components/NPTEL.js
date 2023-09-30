import React, {
  useEffect,
  useState,
  useTransition,
  startTransition
} from 'react'
import './css/NPTEL.css'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import axios from '../axios'
import { useNavigate } from 'react-router-dom'
import { responsive } from '../utils/responsive'
const NPTEL = () => {
  const [courses, setcourse] = useState([])
  const [isPending, startTransition] = useTransition()
  const navigate = useNavigate()

  

  useEffect(() => {
    const blurDivs = document.querySelectorAll('.blur-load')
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
  }, [courses])
  
  useEffect(() => {
    startTransition(() => {
      const fetchCourse = async () => {
        const fetchedData = await axios.get('/nptel-courses')
        const data = await fetchedData.data
        setcourse(data)
      }
      fetchCourse()
    })
  }, [])

  const handleCourse = courseName => {
    navigate(`/nptel/${courseName}`)
  }

  let index = 1
  return (
    <>
      <div className='sub-cont'>
        <div className='banner'>
          <img src='/images/nptel_top.png' alt='' />
        </div>

        <div className='subs -nptel'>Courses</div>

        <div className='carousel'>
          <Carousel className='c-c' responsive={responsive}>
            {isPending ? (
              <div>Loading.....</div>
            ) : (
              courses.map(i => {
                return (
                  <div
                    className='c-item'
                    onClick={() => handleCourse(i.courseName)}
                    key={i._id}
                  >
                    <div className='name-code'>
                      <div
                        className='blur-load'
                        style={{
                          backgroundImage: `url('/course_images/nptel1.jpg')`
                        }}
                      >
                        <img
                          src={`/course_images/nptel${index++}.png`}
                          alt={`${i.courseName}`}
                          loading='lazy'
                        />
                      </div>
                      <button
                        className='-nptel'
                        onClick={() => handleCourse(i.courseName)}
                      >
                        {i.courseName}
                      </button>
                    </div>
                  </div>
                )
              })
            )}
          </Carousel>
        </div>
      </div>
    </>
  )
}

export default NPTEL
