import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import HelpFilters from './Filters/HelpFilters'
import HelpCards from './Filters/HelpCards'
import { v4 as uuidV4 } from 'uuid'
import '../Components/css/Help.css'
import { InfinitySpin } from 'react-loader-spinner'
import { useAuthStore } from '../store'

const Contest = () => {
  const [codeContest, setCodeContests] = useState([])
  const [filtered, setFiltered] = useState([])
  const [platform, setPlatform] = useState('')
  const navigate = useNavigate()

  async function getContests () {
    const data = await axios.get('https://kontests.net/api/v1/all')
    const allContests = data.data
    setCodeContests(allContests)
    setFiltered(allContests)
  }



  useEffect(() => {
    const section = document.querySelector('.filter-btns')
    var cardDown = document.querySelectorAll('.filter-btns')
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          cardDown.forEach(element => {
            element.classList.add('animated')

          })
        }
      })
    })
    observer.observe(section)

    

    const token = useAuthStore.getState().token
    if (!token) {
      navigate('/login-alert-404')
    }
   
    getContests()

  }, [navigate])

  useEffect(() => {

      const sections = document.querySelector('.contest-wrap')
      const helpCard = document.querySelectorAll('.helpcard')
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            helpCard.forEach(i => {
              i.classList.add('show')
            })
          }
        })
      })
    
      observer.observe(sections)
    
    
   
  }, [filtered])


  




 
 


 
  return (
    <div className='help-cont'>
      <div className='banner'>
        <img src='images/Contests_page.png' alt='' />
      </div>
      <div className='buttons btnss filter-btns'>
        <HelpFilters
          codeContest={codeContest}
          setFiltered={setFiltered}
          platform={platform}
          setPlatform={setPlatform}
        />

      </div>

      <div className='contest-wrap'>
        {filtered.length > 0 ? (
          filtered.map(contest => {
            return <div className="helpcard"><HelpCards  key={uuidV4()} contest={contest} /></div> 
          })
        ) : (
          <div
            style={{ alignItems: 'center', marginLeft: '36%', width: '100vw' }}
          >
            <InfinitySpin width='200' color='#FF5353' />
          </div>
        )}
      </div>
    </div>
  )
}

export default Contest
