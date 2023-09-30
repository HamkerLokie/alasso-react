import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './css/sem.css'
import Modal from 'react-modal'
import Semester from '../Components/Semester'
import { customStyles } from '../utils/customStyles'

const Sem_num = ({ selectedCourse, selectedSemester }) => {
  const [semPop, setSemPop] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [overlay, setOverlay] = useState(false)
  const [selectedSubjects, setselectedSubjects] = useState([])
  const [sem, setsem] = useState('')

  const sems = [...selectedSemester]

  const modalStyles = {
    backgroundColor: 'red'
  }

  const sortedSemesterData = sems.sort((a, b) => {
    const semNumA = a.sem_num
    const semNumB = b.sem_num
    return semNumA.localeCompare(semNumB, undefined, { numeric: true })
  })

  const handleClick = (subjects, sem) => {
    setselectedSubjects(subjects)
    setSemPop(true)
    setShowModal(!showModal)
    setOverlay(false)
    setsem(sem)
  }

  return (
    <div className='pop1'>
      <div className={`overlay ${overlay ? 'visible' : ''}`} />
      <div className='pop'>
        {sortedSemesterData.map(i => {
          return (
            <div key={i.sem_num}>
              <div className='po-li'>
                <button
                  className='link'
                  onClick={() => handleClick(i.subjects, i.sem_num)}
                >
                  Semester {i.sem_num}
                </button>
              </div>
            </div>
          )
        })}
      </div>
      {setSemPop && (
        <Modal
          ariaHideApp={false}
          style={customStyles}
          isOpen={showModal}
          onRequestClose={() => setShowModal(false)}
        >
          <Semester
            sem={sem}
            selectedCourse={selectedCourse}
            selectedSubjects={selectedSubjects}
          />
        </Modal>
      )}
    </div>
  )
}

export default Sem_num
