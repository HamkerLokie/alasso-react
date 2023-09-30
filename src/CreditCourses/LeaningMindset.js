import React from 'react'

const LeaningMindset = ({ crs }) => {
  return (
    <div class='content'>
      <div className='topic-cc'>{crs} <br />
             <h6>Link to Course - <a target={'_blank'} href="https://www.linkedin.com/learning/paths/chandigarh-university-learning-and-problem-solving-skills?u=92961692">Learning & Problem Solving</a></h6></div>

      <p class='cc-boxes'>
        &nbsp;1:&nbsp;Does a busy lifestyle distract from learing ? <br />{' '}
        <br />
        &nbsp;<strong class='ans'>It does not allow enough space</strong> <br />
        &nbsp;It crowds out love <br />
        &nbsp;It competes with good ideas <br />
        &nbsp;It destroys the emotional environment <br />
      </p>

      <p class='cc-boxes'>
        &nbsp;2:&nbsp;What factor most influences the need for lifelong learing
        ? <br /> <br />
        &nbsp;conflict <br />
        &nbsp;improvement <br />
        &nbsp;illness <br />
        &nbsp;<strong class='ans'>change</strong> <br />
      </p>
      <p class='cc-boxes'>
        &nbsp;3:&nbsp;What task is a primary element of creating a learing
        inventory ? <br /> <br />
        &nbsp;
        <strong class='ans'>
          Create an organized list of learning experiences of all kinds
          throughout your life.{' '}
        </strong>
        <br />
        &nbsp;Create a matrix of successes and failures and the reasons for them
        throughout your life. <br />
        &nbsp;Create a detailed account of new opportunities and how they relate
        to old successes. <br />
        &nbsp;List the honors and awards you have earned throughout your life.{' '}
        <br />
      </p>
    </div>
  )
}

export default LeaningMindset
