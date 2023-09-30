import React, { useEffect, useState } from 'react'
import './admin-css/nptelPost.css'
import axios from '../axios'
import { toast } from 'react-hot-toast'

const NptelPost = ({ portalFor }) => {
  const [courseName, setCourseName] = useState('')
  const [link, setLink] = useState('')
  const [weekNum, setWeekNum] = useState('')
  const [questions, setQuestions] = useState([])
  const [token, setToken] = useState()

  useEffect(() => {
    let token = localStorage.getItem('jwttoken')
    setToken(token)
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()
    console.log(courseName, link, weekNum, questions)
    try {
      const response = await axios.post(
        '/api/nptel',
        { courseName, link, weekNum, questions },
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      )
      console.log(response.data)
      toast.success(`${response.data.message}`)
    } catch (err) {
      console.log(err)
    }
  }

  const handleQuestionChange = (e, index) => {
    const newQuestions = [...questions]
    newQuestions[index][e.target.name] = e.target.value
    setQuestions(newQuestions)
  }

  const addQuestion = () => {
    setQuestions([...questions, { question: '', answer: '' }])
  }

  return (
    <div className='files-form'>
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

      <form onSubmit={handleSubmit} method='POST'>
        <input
          type='text'
          placeholder='Course Name'
          value={courseName}
          onChange={e => setCourseName(e.target.value)}
          required
        />
        <input
          type='text'
          placeholder='Link'
          value={link}
          onChange={e => setLink(e.target.value)}
          required
        />
        <input
          type='text'
          value={weekNum}
          placeholder='Week Number'
          onChange={e => setWeekNum(e.target.value)}
          required
        />
        <br />
        {questions.map((q, index) => (
          <div className='files-form' key={index}>
            <input
              type='text'
              placeholder={`Question ${index + 1}`}
              name='question'
              value={q.question}
              onChange={e => handleQuestionChange(e, index)}
            />
            <br />
            <input
              type='text'
              name='answer'
              placeholder={`Answer ${index + 1}`}
              value={q.answer}
              onChange={e => handleQuestionChange(e, index)}
            />
            <br />
          </div>
        ))}
        <button type='button' onClick={addQuestion}>
          Add Question
        </button>
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default NptelPost
