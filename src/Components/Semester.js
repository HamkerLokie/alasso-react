import React from 'react'
import './css/Semester.css'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import StarRatings from 'react-star-ratings'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { responsive } from '../utils/responsive'

const Semester = ({ selectedCourse, sem, selectedSubjects }) => {
  const navigate = useNavigate()

  let res = [...selectedSubjects]

  toast.success(`${selectedCourse} Semester ${sem} Selected`)

  const handleInput = subname => {
    navigate(`/${selectedCourse}/semester/${sem}/subject/${subname}`)
  }

  function getRandom () {
    return Math.floor(Math.random() * 8) + 1
  }

  return (
    <div className='carous'>
      <div className='course-cred'>{selectedCourse}</div>
      <div className='course-cred'>Sem: {sem}</div>
      <Carousel className='cor-sem' responsive={responsive}>
        {res.length ? (
          res.map(i => {
            return (
              <div
                className='course-item'
                onClick={() => handleInput(i.sub_name)}
                key={i.sub_code}
              >
                <div className='name-code-sem'>
                  <img
                    src={`/subject_images/img${getRandom()}.jpg`}
                    alt='icons'
                  />
                  <div className='sub-names'>
                    <div className='sun_name'>{i.sub_name.toUpperCase()}</div>
                    <div className='sun_name'>{i.sub_code.toUpperCase()}</div>
                  </div>
                  <div className='sub_cre'>
                    <StarRatings
                      rating={i.sub_credit}
                      starRatedColor='#254380'
                      numberOfStars={5}
                      starDimension='15px'
                      name='rating'
                    />
                  </div>
                  <button onClick={() => handleInput(i.sub_name)}>
                    See Content{' '}
                  </button>
                </div>
              </div>
            )
          })
        ) : (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '45vh',
              minWidth: '85vw'
            }}
          >
            <div>Content Coming Soon</div>
          </div>
        )}
      </Carousel>
    </div>
  )
}

export default Semester
