import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import axios from '../axios'
import './admin-css/course.css'

const CoursePost = ({ portalFor }) => {
  const [courseName, setCourseName] = useState('')
  const [sem_num, setSemesterNumber] = useState('')
  const [link, setLink] = useState('')
  const [subs, setsubs] = useState([])
  const [token, setToken] = useState()

  useEffect(() => {
    const token = localStorage.getItem('jwttoken')
    setToken(token)
  }, [])

  const handleSubmit = async e => {
    
    e.preventDefault()
    const data = { courseName, sem_num, link, subs }
    try {
      const res = await axios.post('/add-subjects', data,{
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      setCourseName('')
      setSemesterNumber('')
      setLink('')
      setsubs('')
      toast.success(`Subjects added to ${courseName}`)
    } catch (error) {
      console.log(error)
    }
  }

  const handleQuestionChange = (e, index) => {
    const newsubs = [...subs]
    newsubs[index][e.target.name] = e.target.value
    setsubs(newsubs)
  }

  const addQuestion = () => {
    setsubs([...subs, { sub_name: '', sub_code: '', sub_credit: '' }])
  }

  return (
    <div className='files-form form-course'>
      <div
        style={{
          textAlign: 'center',
          color: 'white',
          padding: '.6em 0em .6em 0em',
          background: 'linear-gradient(90deg, #254380 -3.1%, #54A7C8 112.18%)'
        }}
      >
        {' '}
        ADD {portalFor.toUpperCase()}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={courseName}
          placeholder='Course Name'
          onChange={e => setCourseName(e.target.value)}
        />

        <input
          type='number'
          placeholder='Semester Number'
          value={sem_num}
          onChange={e => setSemesterNumber(e.target.value)}
        />
        <input
          type='text'
          placeholder='Link'
          value={link}
          onChange={e => setLink(e.target.value)}
        />
        <br />
        {subs.map((q, index) => (
          <div className='files-form' key={index}>
            <input
              placeholder={`Subject Name ${index + 1}`}
              type='text'
              name='sub_name'
              value={q.sub_name}
              onChange={e => handleQuestionChange(e, index)}
            />
            <br />
            <input
              type='text'
              placeholder={`Subject Code ${index + 1}`}
              name='sub_code'
              value={q.sub_code}
              onChange={e => handleQuestionChange(e, index)}
            />
            <br />
            <input
              type='text'
              name='sub_credit'
              placeholder={`Subject Credit ${index + 1}`}
              value={q.sub_credit}
              onChange={e => handleQuestionChange(e, index)}
            />
          </div>
        ))}
        <button type='button' onClick={addQuestion}>
          Add Subject
        </button>
        <br />

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default CoursePost
