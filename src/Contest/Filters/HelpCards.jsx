import React, { useEffect } from 'react'


const HelpCards = ({ contest }) => {
  
  return (
    <div className='singleCard'>
      <div className=" contest-label contest-timing">{contest.start_time.slice(0,10)} - {contest.end_time.slice(0,10)}</div>
      <br />
      <div className=" contest-label contest-name"> <b>Name:</b>  {contest.name.slice(0,20)}</div>
      <div className=" contest-label contest-plat"> <b>Platform: </b>   {contest.site}</div>
      <div className=" contest-label contest-date"><b>Starts:</b>  {contest.start_time.slice(0,10)}</div>
      <br />
      <a  className='contest-btn' target='_blank' href={contest.url} > Click to Visit</a>
    </div>
  )
}

export default HelpCards
