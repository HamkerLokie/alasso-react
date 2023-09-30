import React, { useEffect } from 'react'
import { toast } from 'react-hot-toast'

const HelpFilters = ({ category, setCategory, setFiltered, help }) => {
  useEffect(() => {
    const filtered = help.filter(helps => {
      
      return helps.category === category
    })

    setFiltered(filtered)
    toast.success(`${category.toUpperCase()}`)
  }, [category])

  return (
    <>
    <div className="help-btn-container">
      <button onClick={() => setCategory('mooc')} className='btnss mooc'>
        MOOCs
      </button>
      <button onClick={() => setCategory('gp')} className='btnss gp'>
        {' '}
        General Proficiency
      </button>
      <button
        onClick={() => setCategory('coursera')}
        className='btnss coursera'
      >
        Coursera
      </button>
      <button onClick={() => setCategory('nptel')} className='btnss outlook'>
        NPTEL
      </button>
      <button onClick={() => setCategory('outlook')} className='btnss outlook'>
        Outlook
      </button>
      </div>
      <hr style={{margin: 0}}/>
    </>
  )
}

export default HelpFilters
