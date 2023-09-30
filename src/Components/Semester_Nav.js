import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from '../axios'
import StarRatings from 'react-star-ratings'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import './css/Sem_Nav.css'
import toast from 'react-hot-toast'
const Semester_Nav = () => {
  const { selectcourse, selectsem } = useParams()
  let semNum = Number(selectsem)

  let navigate = useNavigate()

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

  const [requiredsem, setrequiredsem] = useState([])
  const [loading, setLoading] = useState(true)

  let index = 1
  useEffect(() => {
    const fetchCourse = async () => {
      const fetchedData = await axios.get('/getcourse')
      let data = fetchedData.data
      console.log('sem_nav', data)

      await data.map(i => {
        if (i.courseName === selectcourse) {
          return setrequiredsem(i.semester)
        }
      })
      setLoading(false)
      toast.success(`${selectcourse} Semester ${semNum} Selected`)
    }

    fetchCourse()
  }, [selectcourse, selectsem])

  if (loading) {
    return <div>Loading...</div>
  }

  const handleClick = subname => {
    navigate(`/${selectcourse}/semester/${selectsem}/subject/${subname}`)
  }

  function getRandom() {
    return Math.floor(Math.random() * 8) + 1
  }

  return (
    <div className='sub-cont'>
      <div className='banner'>
        <img src='/images/courses_top.png' alt='' />
      </div>
      <div className='course-cred course-cred-nav'>{selectcourse}</div>
      <div className='course-cred '>Sem: {selectsem}</div>

      <div className='s-n-c'>
        {requiredsem.map(i => {
          if (i.sem_num === JSON.stringify(semNum)) {
            return (
              <>
                <Carousel className='new-c-c' responsive={responsive}>
                  { i.subjects.map(j => {
                    return (
                      <div className='course-item x-c' key={j._Id}>
                        <div className='name-code-sem  c-i'>
                          <img
                            src={`/subject_images/img${getRandom()}.jpg`}
                            alt='icons'
                          />
                          <div className='sub-names'>
                            <div className='sun_name'>
                              {j.sub_name.toUpperCase()}
                            </div>
                            <div className='sun_name'>
                              {j.sub_code.toUpperCase()}
                            </div>
                          </div>
                          <div className='sub_cre'>
                            <StarRatings
                              rating={j.sub_credit}
                              starRatedColor='#254380'
                              numberOfStars={5}
                              starDimension='15px'
                              name='rating'
                            />
                          </div>
                          <button onClick={() => handleClick(j.sub_name)}>
                            See Content
                          </button>
                        </div>
                      </div>
                    )
                  })}
                </Carousel>
              </>
            )
          }
        })}
      </div>
    </div>
  )
}

export default Semester_Nav
