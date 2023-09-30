import React, { useEffect } from 'react'

const HelpCards = ({ help }) => {

  

  return (
    
    <div className='ques'>
      <h3>{help.ques}</h3>
      <p>{help.ans}</p>
    </div>
  )
}

export default HelpCards
