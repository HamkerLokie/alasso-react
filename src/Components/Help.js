import React, { useState, useEffect } from 'react'
import './css/Help.css'
import HelpFilters from '../Filters/HelpFilters'
import HelpCards from '../Filters/HelpCards'
import axios from '../axios'
import { toast } from 'react-hot-toast'

const Help = () => {
  const [category, setCategory] = useState('')
  const [help, setHelp] = useState([])
  const [filtered, setFiltered] = useState([])

  useEffect(() => {
    const getHelp = async () => {
      const data = await axios.get('/get-doubts')
      console.log('help', data)

      const allHelps = data.data
      setHelp(allHelps)
      setFiltered(allHelps)
    }
    getHelp()
    toast.success('All Helps Updated')
  }, [])

  return (
    <div className='help-cont'>
      <div className='banner'>
        <img src='/images/Help_page.png' alt='' />
      </div>
      <div className='buttons'>
        <HelpFilters
          category={category}
          setCategory={setCategory}
          setFiltered={setFiltered}
          help={help}
        />
      </div>
      <div className='questions'>
        {filtered.length > 0 ? (
          filtered.map(help => {
            return <HelpCards key={help._id} help={help} />
          })
        ) : (
          <div
            style={{
              alignItems: 'center',
              textAlign: 'center',
              width: '100vw'
            }}
          >
            <div>Nothing to Show</div>
          </div>
        ) }
      </div>
    </div>
  )
}

export default Help
