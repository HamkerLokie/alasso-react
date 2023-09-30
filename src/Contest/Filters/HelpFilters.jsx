import React, { useEffect } from 'react'
import axios from 'axios'

const HelpFilter = ({ codeContest, setFiltered, platform, setPlatform }) => {
  useEffect(() => {
    const filtered = codeContest.filter(contest => {
      return contest.site === platform
    })

    // const filtered = JSON.parse(codeContest).filter(contest => {
    //   platform = contest.site
    // })

    setFiltered(filtered)
  }, [platform])

  
  return (
    <>
      <button onClick={() => setPlatform('HackerRank')} className={`contest-btns`}>
        All
      </button>
      <button onClick={() => setPlatform('HackerRank')} className={`contest-btns`}>
        Hacker Rank
      </button>
      
      <button onClick={() => setPlatform('HackerEarth')} className='contest-btns'>
        Hacker Earth
      </button>
      <button onClick={() => setPlatform('CodeChef')} className='contest-btns'>
        Code Chef
      </button>
      <button onClick={() => setPlatform('CodeForces')} className='contest-btns'>
        Code Forces
      </button>
      <button onClick={() => setPlatform('LeetCode')} className='contest-btns'>
        Leet Code
      </button>
      <button onClick={() => setPlatform('Kick Start')} className='contest-btns'>
        Kick Start
      </button>
      <button onClick={() => setPlatform('AtCoder')} className='contest-btns'>
        AtCoder
      </button>
    </>
  )
}

export default HelpFilter
