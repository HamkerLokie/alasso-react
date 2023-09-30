import React, { useState, useEffect } from 'react'
import axios from '../axios'
import './admin-css/courseReq.css'
function CourseReq ({portalFor}) {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const token = localStorage.getItem('jwttoken')
    axios
      .get('/getReqCourses', {
        headers: {
          Authorization: `Bearer ${token}`,
        }})
      .then(response => {
        console.log(response)
        setCourses(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const handleCompletedChange = (event, courseId) => {
    // Update the completed status of the specified course on the server
    axios
      .post('/update-req-course', { courseId, completed: event.target.checked })
      .then(response => {
        console.log(response)
        setCourses(
          courses.map(course => {
            if (course._id === courseId) {
              return {
                ...course,
                completed: event.target.checked
              }
            } else {
              return course
            }
          })
        )
        window.location.reload();
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div className='req-course'>
      <h1>{portalFor}</h1>
      <table>
        <thead>
          <tr>
            <th>Course name</th>
            <th>Course Platform</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <tr key={course._id}>
              <td>{course.courseName}</td>
              <td>{course.platform}</td>
              <td>
                <input
                  type='checkbox'
                  checked={course.completed}
                  onChange={event => handleCompletedChange(event, course._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CourseReq
