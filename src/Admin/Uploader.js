import React, { useState, useRef, useEffect } from 'react'
import Dropzone from 'react-dropzone'
import { toast } from 'react-hot-toast'
import axios from '../axios'
import './admin-css/course.css'
import { Vortex } from 'react-loader-spinner'

const Uploader = ({ portalFor }) => {
  let token
  useEffect(() => {
    token = localStorage.getItem('jwttoken')
  }, [])
  const [file, setFile] = useState(null)

  const [uploading, setuploading] = useState(false)

  const [title, settitle] = useState('')
  const [subject, setsubject] = useState('')
  const [semester, setsemester] = useState('')
  const [unit, setunit] = useState('')
  const [worksheet_number, setworksheet_number] = useState('')
  const [file_category, setfile_category] = useState('')

  const dropRef = useRef() // React ref for managing the hover state of droppable area

  const onDrop = files => {
    const [uploadedFile] = files
    setFile(uploadedFile)

    const fileReader = new FileReader()

    fileReader.readAsDataURL(uploadedFile)
    dropRef.current.style.border = '2px dashed #e9ebeb'
  }

  const updateBorder = dragState => {
    if (dragState === 'over') {
      dropRef.current.style.border = '2px solid #000'
    } else if (dragState === 'leave') {
      dropRef.current.style.border = '2px dashed green'
    }
  }

  const handleOnSubmit = async event => {
    event.preventDefault()
    setuploading(true)
    try {
      if (title.trim() !== '' && subject.trim() !== '') {
        if (file) {
          const formData = new FormData()
          formData.append('file', file)
          formData.append('title', title)
          formData.append('subject', subject)
          formData.append('semester', semester)
          formData.append('unit', unit)
          formData.append('worksheet_number', worksheet_number)
          formData.append('file_category', file_category)

          await axios.post(`/upload`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': `Bearer ${token}`
            }
          })
          setfile_category('')
          setsemester('')
          setworksheet_number('')
          setsubject('')
          settitle('')
          setunit('')
          toast.success('File Uploaded Succesfully')
        }
      }
    } catch (error) {
      console.log(error)
      console.log('error from react')
    } finally {
      setuploading(false)
    }
  }
  return (
    <div className='files-form'>
      {uploading && (
        <Vortex
          visible={true}
          height='80'
          width='100%'
          ariaLabel='vortex-loading'
          wrapperStyle={{ width: '100%' }}
          wrapperClass='vortex-wrapper'
          colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
        />
      )}
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

      <form className='search-form' onSubmit={handleOnSubmit}>
        <input
          type='text'
          name='title'
          value={title}
          placeholder='Enter Name'
          onChange={e => settitle(e.target.value)}
        />
        <input
          type='text'
          name='subject'
          value={subject}
          placeholder='Enter Subject'
          onChange={e => setsubject(e.target.value)}
        />
        <input
          type='number'
          name='semester'
          value={semester}
          placeholder='Enter Semester'
          onChange={e => setsemester(e.target.value)}
        />
        <input
          type='number'
          name='unit'
          value={unit}
          placeholder='Enter Unit'
          onChange={e => setunit(e.target.value)}
        />
        <input
          type='number'
          name='worksheet_number'
          value={worksheet_number}
          placeholder='Enter Worksheet Number'
          onChange={e => setworksheet_number(e.target.value)}
        />
        <input
          type='text'
          name='file_category'
          value={file_category}
          placeholder='Enter File Category'
          onChange={e => setfile_category(e.target.value)}
        />

        <div className='upload-section'>
          <Dropzone
            onDrop={onDrop}
            onDragEnter={() => updateBorder('over')}
            onDragLeave={() => updateBorder('leave')}
          >
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps({ className: 'drop-zone' })} ref={dropRef}>
                <input {...getInputProps()} />
                <p>Drag and Drop a file OR Click Here</p>
                {file && (
                  <div>
                    <strong>Selected file:</strong> {file.name}
                  </div>
                )}
              </div>
            )}
          </Dropzone>
        </div>
        <br />

        <button oncClick={handleOnSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default Uploader
