import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { useParams } from 'react-router-dom'
import axios from '../axios'
import './css/NPTELcourse.css'
import { useNavigate } from 'react-router-dom'

const NptelCourse = () => {
  const navigate = useNavigate()
  const { courseName } = useParams()
  const [fullData, setFullData] = useState([])
  const [assignment, setassignment] = useState([])
  const [content, setcontent] = useState([])
  const [week, setweek] = useState('')
  const [activeweek, setactiveweek] = useState('')
  const [loading, setloading] = useState(true)
  const [btnn, setbtnn] = useState(0)
  const [pagestate, setpagestate] = useState('assignment')
  const [disweeks, setdisweeks] = useState('unhide-weeks')

  const boxes = document.querySelectorAll('.ass-box')

  function showNextBox (index) {
    if (index >= boxes.length) {
      return
    }

    boxes[index].classList.add('show')

    setTimeout(() => {
      showNextBox(index + 1)
    }, 100)
  }

  showNextBox(0)

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = process.env.PUBLIC_URL + '/books/PYQ.zip'
    link.download = 'PYQ.zip'
    link.click()
  }

  useEffect(() => {
    const fetchCourse = async () => {
      const data = await (await axios.get('/nptel-courses')).data
      data.map(i => {
        if (i.courseName.toUpperCase() === courseName.toUpperCase()) {
          setassignment(i.assignments)
        }
      })
      setFullData(data)
    }

    const filterContent = () => {
      for (const j of assignment) {
        if (j.week_num === week) {
          setcontent(j.content)
        }
      }
      setloading(true)
    }

    fetchCourse()
    filterContent()
  }, [week])

  const handleClick = currWeek => {
    toast.success(`Week ${currWeek}`)
    setweek(currWeek)
    setactiveweek('active-week')
    setbtnn(currWeek)
  }

  const handleAssignmet = () => {
    setpagestate('assignment')
    setdisweeks('unhide-weeks')
  }
  const handleNotes = () => {
    setpagestate('notes')
    setdisweeks('hide-weeks')
  }

  const handleSolution = () => {
    setpagestate('solutions')
    setdisweeks('hide-weeks')
  }

  let index = 1

  if (!loading) {
    return <div>Loading........</div>
  }
  return (
    <div className='nptel-wrap'>
      <div className='head-nptel'>{courseName}</div>
      <div className='navigation'>
        <button className='btn-nptel assignments' onClick={handleAssignmet}>
          Assignments
        </button>
        <button className='btn-nptel notesnptel' onClick={handleNotes}>
          {' '}
          Notes
        </button>
        <button className='btn-nptel notesnptel' onClick={handleSolution}>
          {' '}
          Solutions
        </button>
      </div>
      <div className={`week-nptel ${disweeks}`}>
        <div className='weekNum'>Week {week}</div>
        <div className={`weekbtn `}>
          {assignment.length > 0 ? (
            assignment.reverse().map(i => {
              return (
                <button
                  onClick={() => handleClick(i.week_num)}
                  className={`week-btn ${
                    i.week_num === btnn ? activeweek : ''
                  }`}
                >
                  {i.week_num}
                </button>
              )
            })
          ) : (
            <div>Loading....</div>
          )}
        </div>
      </div>

      {pagestate === 'assignment' && (
        <div className='content-nptel' id='cont-nptel'>
          {content.length > 0 ? (
            content.map(content => {
              return (
                <div className='ass-box'>
                  <div className='question'>
                    <span>Question {index++} :</span>
                    <div>{content.question}</div>
                  </div>
                  <hr />
                  <div className='ansN'>
                    <span className='option'>
                      <b>Correct option . </b>
                    </span>
                    <div> {content.answer} </div>
                  </div>
                </div>
              )
            })
          ) : (
            <div
              style={{
                textAlign: 'center',
                fontSize: '5em',
                fontWeight: '800',
                fontFamily: 'Tilt Neon'
              }}
            >
              Select Week
            </div>
          )}
        </div>
      )}

      {pagestate === 'notes' && courseName === 'Probability And Statistics' && (
        <div style={{ textAlign: 'center' }} className='content-nptel-notes'>
          <div className='div-iframe'>
            <div className='title'>Bayes theorem</div>

            <iframe src='/books/Bayes theorem.pdf#toolbar=0' frameborder='0' />
          </div>

          <div className='div-iframe'>
            <div className='title'>Formula Sheet</div>

            <iframe
              src='/books/Probability&StatisticsFormulaGtm.pdf#toolbar=0'
              frameborder='0'
            />
          </div>

          <div className='div-iframe'>
            <div className='title'>Hypothesis</div>

            <iframe src='/books/Hypothesis.pdf#toolbar=0' frameborder='0' />
          </div>
          <div className='div-iframe'>
            <div className='title'>Mean, Median Mode</div>

            <iframe src='/books/MMM.pdf#toolbar=0' frameborder='0' />
          </div>

          <div className='div-iframe'>
            <div className='title'>formula sheet 2</div>

            <iframe src='/books/formula sheet.pdf#toolbar=0' frameborder='0' />
          </div>

          <div className='div-iframe'>
            <div className='title'>P&B Interference</div>

            <iframe
              src='/books/P&B Interference.pdf#toolbar=0'
              frameborder='0'
            />
          </div>

          <div className='div-iframe'>
            <div className='title'>Negative Binomial Distribution</div>

            <iframe src='/books/1st.pdf#toolbar=0' frameborder='0' />
          </div>

          <div className='div-iframe'>
            <div className='title'>BINOMIAL DISTRIBUTION</div>

            <iframe
              src='/books/BINOMIAL DISTRIBUTION.pdf#toolbar=0'
              frameborder='0'
            />
          </div>

          <div className='div-iframe'>
            {' '}
            <div className='title'>Bivarete distribution</div>
            <iframe
              src='/books/Bivarete distribution.pdf#toolbar=0'
              frameborder='0'
            />
          </div>
          <div className='div-iframe'>
            {' '}
            <div className='title'>cor relation and regression</div>
            <iframe
              src='/books/cor relation and regression.pdf#toolbar=0'
              frameborder='0'
            />
          </div>
          <div className='div-iframe'>
            {' '}
            <div className='title'>Curve fitting</div>
            <iframe src='/books/Curve fitting.pdf#toolbar=0' frameborder='0' />
          </div>
          <div className='div-iframe'>
            {' '}
            <div className='title'>large sample</div>
            <iframe src='/books/large sample.pdf#toolbar=0' frameborder='0' />
          </div>
          <div className='div-iframe'>
            {' '}
            <div className='title'>Normal distribution</div>
            <iframe
              src='/books/Normal distribution-1-13.pdf#toolbar=0'
              frameborder='0/'
            />
          </div>
          <div className='div-iframe'>
            {' '}
            <div className='title'>RANDOM VARIABLE</div>
            <iframe
              src='/books/RANDOM VARIABLE.pdf#toolbar=0'
              frameborder='0'
            />
          </div>
          <div className='div-iframe'>
            {' '}
            <div className='title'>Extra questions</div>
            <iframe
              src='/books/Extra questions.pdf#toolbar=0'
              frameborder='0'
            />
          </div>
        </div>
      )}

      {pagestate === 'solutions' &&
        courseName === 'Probability And Statistics' && (
          <div style={{ textAlign: 'center' }} className='content-nptel-notes'>
            <div className='div-iframe'>
              <div className='title'>Previous Year Solutions</div>
              <button style={{ marginTop: '31%' }} onClick={handleDownload}>
                Download Zip File
              </button>
            </div>
            <div className='div-iframe'>
              <div className='title'>Week 2</div>

              <iframe src='/books/Week 2.pdf#toolbar=0' frameborder='0' />
            </div>

            <div className='div-iframe'>
              <div className='title'>Week 3</div>

              <iframe src='/books/Week 3.pdf#toolbar=0' frameborder='0' />
            </div>

            <div className='div-iframe'>
              <div className='title'>Week 5</div>

              <iframe src='/books/Week 5.pdf#toolbar=0' frameborder='0' />
            </div>

            <div className='div-iframe'>
              <div className='title'>Week 6</div>

              <iframe src='/books/Week 6.pdf#toolbar=0' frameborder='0' />
            </div>

            <div className='div-iframe'>
              {' '}
              <div className='title'>Week 7</div>
              <iframe src='/books/Week 7.pdf#toolbar=0' frameborder='0' />
            </div>
            <div className='div-iframe'>
              {' '}
              <div className='title'>Week 8</div>
              <iframe src='/books/Week 8.pdf#toolbar=0' frameborder='0' />
            </div>
            <div className='div-iframe'>
              {' '}
              <div className='title'>Week 11</div>
              <iframe src='/books/Week 11pdf.pdf#toolbar=0' frameborder='0' />
            </div>
          </div>
        )}
    </div>
  )
}

export default NptelCourse
