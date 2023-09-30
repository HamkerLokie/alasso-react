import React, { useEffect } from 'react'
import './css/CreditInside.css'
import { useState } from 'react'
import WritingEmails from '../CreditCourses/WritingEmails'
import BuildingTrust from '../CreditCourses/BuildingTrust'
import BussPresent from '../CreditCourses/BussPresent'
import CriticalThink from '../CreditCourses/CriticalThink'
import EffectiveList from '../CreditCourses/EffectiveList'
import ImproveListen from '../CreditCourses/ImproveListen'
import TeamworkFound from '../CreditCourses/TeamworkFound'
import LeaningMindset from '../CreditCourses/LeaningMindset'
import PositiveChange from '../CreditCourses/PositiveChange'
import CriticalThinkTm from '../CreditCourses/CriticalThinkTm'
import FindTimeMange from '../CreditCourses/FindTimeMange'
import TimeManageFunda from '../CreditCourses/TimeManageFunda'
import JobHunter from '../CreditCourses/JobHunter'
import EntFoundation from '../CreditCourses/EntFoundation'
import CreatingBusinessMindset from '../CreditCourses/creating-a-business-plan'
import FindingAndTestingYourBusinessIdea from '../CreditCourses/finding-and-testing-your-business-idea'
import UniqueWaysToGenerateCreativeIdeas from '../CreditCourses/unique-ways-to-generate-creative-ideas'
import SocialMediaMarketingForSmallBusiness from '../CreditCourses/social-media-marketing-for-small-business'
import LeadingInGovernment from '../CreditCourses/leading-in-government'
import BusinessEthics from '../CreditCourses/businessethics'
import Leadership from '../CreditCourses/leadershipstrategiesforwomen'
import SkillsforInclusiveConsersations from '../CreditCourses/skillsforinclusiveconversations'
import UnconsciousBias from '../CreditCourses/unconsciousbias'
import BusinessWriting from '../CreditCourses/businesswriting'
import TechinalWriting from '../CreditCourses/technicalwriting'
import WritingWhitePapers from '../CreditCourses/writingwhitepapers'
import PreparingForSuccessful from '../CreditCourses/preparingforsuccessful'

import Creatingacultureofchange from '../CreditCourses/creatingacultureofchange'
import Crosscultureintelligence from '../CreditCourses/crosscultureintelligence'
import Conversationsatwork from '../CreditCourses/conversationsatwork'
import Discoveringyourstrengths from '../CreditCourses/discoveringyourstrengths'
import Developingalearningmindeset from '../CreditCourses/developingalearningmindset'
import Interpersonalcommunication from '../CreditCourses/interpersonalcommunication'
import Learingwithemotionalintelligence from '../CreditCourses/learningwithemotionalintelligence'
import ManagingAdverseTeam from '../CreditCourses/managingadiverseteam'
import Sustainableweek1 from '../CreditCourses/Sustainable-week1'
import Sustainableweek2 from '../CreditCourses/Sustainable-week2'
import Sustainableweek3 from '../CreditCourses/Sustainable-week3'
import Sustainableweek4 from '../CreditCourses/Sustaiable-week4'
import Sustainableweek5 from '../CreditCourses/Sustainable-week5'

import { useParams } from 'react-router-dom'
import ReqCourse from './ReqCourse'
import IntrotoBusinessAnalytics from '../CreditCourses/IntrotoBusinessAnalytics'
import BusinessAnalyticsFoundations from '../CreditCourses/BusinessAnalyticsFoundations'
import DataAnalyticsforBusinessProfessionals from '../CreditCourses/DataAnalytics'
import ManagingTeams from '../CreditCourses/ManagingTeams'
import MarketingData from '../CreditCourses/MarketingData'
import NewmanagerFoundation from '../CreditCourses/NewmanagerFoundation'
import Sustinabletourims from '../CreditCourses/Sustainabletourism'
import Wellbeingweek2 from '../CreditCourses/Wellbeing-Week2'
import Wellbeingweek3 from '../CreditCourses/Wellbeing-Week3'
import Wellbeingweek4 from '../CreditCourses/Wellbeing-Week4'
import Wellbeingweek5 from '../CreditCourses/Wellbeing-Week5'
import Wellbeingweek6 from '../CreditCourses/Wellbeing-Week6'

const CreditInside = () => {
  const [componentOpen, setComponentOpen] = useState(false)
  const [btntext, setbtntext] = useState('Request Course')
  useEffect(() => {
    const section = document.querySelector('#opt')
    var selects = document.querySelectorAll('#menu')

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          selects.forEach(element => {
            element.classList.add('animated')
          })
        }
      })
    })
    observer.observe(section)
  })

  useEffect(() => {
    const section = document.querySelector('#solution')
    var selects = document.querySelector('.content')
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          selects.classList.add('animated')
        }
      })
    })
    observer.observe(section)
  })

  const [selectedOption, setSelectedOption] = useState('')
  const { platform } = useParams()

  const handleOptionChange = event => {
    console.log(event.target.value)
    setSelectedOption(event.target.value)
  }

  const openReqForm = () => {
    setComponentOpen(!componentOpen)
    if (!componentOpen) {
      setbtntext('Close Form')
    } else {
      setbtntext('Request Course')
    }
  }

  const springboardData = [
    { label: 'Angular', value: 'Angular' },
    { label: 'DevOps', value: 'Devops' },
    { label: 'TypeScript', value: 'TypeScript' }
  ]

  return (
    <div className='cc-wrapper'>
      <div className='cc-left'>
        <div className='options' id='opt'>
          <button onClick={openReqForm} className='btn-req' id='menu'>
            {' '}
            {btntext}
          </button>
          {componentOpen && <ReqCourse />}
          {platform === 'Linkedin' ? (
            <>
              <select
                id='menu'
                onChange={handleOptionChange}
                value={'Interpersonal Skills'}
              >
                <option value=''>Interpersonal Skills</option>
                <option value='Creating a Culture of Change'>
                  Creating a Culture of Change
                </option>
                <option value='Cross Culture Intelligence'>
                  Cross Culture Intelligence
                </option>
                <option value='Conversation at Work'>
                  Conversation at Work
                </option>
                <option value='Discovering Your Strength'>
                  Discovering Your Strength
                </option>
                <option value='Developing a Learning Mindset'>
                  Developing a Learning Mindset
                </option>
                <option value='Interpersonal Communication'>
                  Interpersonal Communication
                </option>
                <option value='Learning with Emotional Intelligence'>
                  Learning with Emotional Intelligence
                </option>
                <option value='Managing Adverse Team'>
                  Managing Adverse Team
                </option>
              </select>

              <select
                id='menu'
                onChange={handleOptionChange}
                value={'Business Analytics'}
              >
                <option value=''>Business Analytics</option>
                <option value='Intro to Business Analytics'>
                  Intro to Business Analytics
                </option>
                <option value='Business Analytics Foundations'>
                  Business Analytics Foundations
                </option>
                <option value='Data Analytics'>Data Analytics</option>
                <option value='Managing Teams'>Managing Teams</option>
                <option value='New Manager Foundation'>
                  New Manager Foundation
                </option>
                <option value='Marketing Data'>Marketing Data</option>
              </select>

              <select
                id='menu'
                onChange={handleOptionChange}
                value={'Ethics and Gender Equality'}
              >
                <option value=''>Ethics and Gender Equality</option>
                <option value='Bussiness Ethics'>Bussiness Ethics</option>
                <option value='Leadership Strategies for Women'>
                  Leadership Strategies for Women
                </option>
                <option value='Skills for Inclusive Conversations'>
                  Skills for Inclusive Conversations
                </option>
                <option value='Unconscious Bias'>Unconscious Bias</option>
              </select>

              <select
                id='menu'
                onChange={handleOptionChange}
                value={'Academic Research Paper Writing'}
              >
                <option value=''>Academic Research Paper Writing</option>
                <option value='Bussiness Writing'>Bussiness Writing</option>
                <option value='Preparing for Successfull...'>
                  Preparing for Successfull...
                </option>
                <option value='Writing White Papers'>
                  Writing White Papers
                </option>
                <option value='Technical Writing'>Technical Writing</option>
              </select>

              <select
                id='menu'
                value={'Job Hunter and Resume Writing'}
                onChange={handleOptionChange}
              >
                <option value='Job Hunter Anwsers'>
                  Job Hunter and Resume Writing
                </option>
                <option value='Job Hunter Anwsers'>Job Hunter Anwsers</option>
              </select>
              <select
                id='menu'
                value={'Time management and ways of thinking'}
                onChange={handleOptionChange}
              >
                <option value=''>Time management and ways of thinking</option>
                <option value='Critical Thinking tm'>Critical Thinking</option>
                <option value='Finding your Time Management'>
                  Finding your Time Management
                </option>
                <option value='Time Management Fundamentals'>
                  Time Management Fundamentals
                </option>
              </select>

              <select
                id='menu'
                value={'Entrepreneurship'}
                onChange={handleOptionChange}
              >
                <option value=''>Entrepreneurship</option>
                <option value='Entrepreneurship Foundations'>
                  Entrepreneurship Foundations
                </option>

                <option value='Unique ways to Generate Creative Ideas'>
                  Unique ways to Generate Creative Ideas
                </option>
                <option value='Finding and Testing your Business Idea'>
                  Finding and Testing your Business Idea
                </option>
                <option value='Creating a Business Plan'>
                  Creating a Business Plan
                </option>

                <option value='Social Media Marketing for Small Business'>
                  Social Media Marketing for Small Business
                </option>
                <option value='Leading in Government'>
                  Leading in Government
                </option>
              </select>

              <select
                id='menu'
                value={'Learning and Problem Solving Skills'}
                onChange={handleOptionChange}
              >
                <option value=''>Learning and problem solving skills</option>
                <option value='Developing a learning Mindset'>
                  Developing a learning Mindset
                </option>
                <option value='Critical Thinking ps'>Critical Thinking</option>
                <option value='Managing Stress for Positive Change'>
                  Managing Stress for Positive Change
                </option>
              </select>
              <select
                id='menu'
                value={'Team Skills'}
                onChange={handleOptionChange}
              >
                <option value=''>Team Skills</option>
                <option value='Writing Mails'>Writing Mails</option>
                <option value='Building Trust'>Building Trust</option>
                <option value='Business Plan'>
                  Creating and Giving Business Plan
                </option>
                <option value='Critical Thinking'>Critical Thinking</option>
                <option value='Effective Listening'>Effective Listening</option>
                <option value='Listening Skills'>
                  Improving your Listening Skills
                </option>
                <option value='Teamwork Foundations'>
                  Teamwork Foundations
                </option>
              </select>
            </>
          ) : null}

          {platform === 'Coursera' ? (
            <>
              <select
                id='menu'
                onChange={handleOptionChange}
                value={'Science of Well-Being'}
              >
                <option value=''>Science of Well-Being</option>
                <option value='SWB-Week 2'>Week 2</option>
                <option value='SWB-Week 3'>Week 3</option>
                <option value='SWB-Week 4'>Week 4</option>
                <option value='SWB-Week 5'>Week 5</option>
                <option value='SWB-Week 6'>Week 6</option>
              </select>
              <select
                id='menu'
                onChange={handleOptionChange}
                value={'Sustainable Development Goals'}
              >
                <option value=''>Sustainable Development Goals</option>
                <option value='Week 1'>Week 1</option>
                <option value='Week 2'>Week 2</option>
                <option value='Week 3'>Week 3</option>
                <option value='Week 4'>Week 4</option>
                <option value='Week 5'>Week 5</option>
              </select>

              <select
                id='menu'
                onChange={handleOptionChange}
                value={'Sustainable Tourism'}
              >
                <option value=''>Sustainable Tourism</option>
                <option disabled value='Sustainable Tourism'>
                  Sustainable Tourism
                </option>
              </select>
            </>
          ) : null}

          {platform === 'springboard' ? (
            <>
              {springboardData.map((button, index) => (
                <button
                  style={{ background: 'white', color: 'black' }}
                  value={button.label}
                  key={index}
                  onClick={handleOptionChange}
                  className='btn-req'
                  id='menu'
                >
                  {button.label}
                </button>
              ))}
            </>
          ) : null}
        </div>
      </div>

      <div className='cc-right' id='solution'>
        {/* Coursera */}

        {selectedOption === '' && platform === 'Coursera' ? (
          <Sustinabletourims crs={'Sustainable Toursim: Combined Answers'} />
        ) : null}
        {selectedOption === '' && platform === 'springboard' ? (
          <div className='div-iframe'>
            <iframe
              style={{ minHeight: '90vh', width: '90%' }}
              src='/books/angular.pdf'
              frameborder='0'
            />
          </div>
        ) : null}

        {selectedOption === 'Sustainable Tourism' ? (
          <Sustinabletourims crs={selectedOption} />
        ) : null}

        {selectedOption === 'Week 1' ? (
          <Sustainableweek1 crs={selectedOption} />
        ) : null}
        {selectedOption === 'Week 2' ? (
          <Sustainableweek2 crs={selectedOption} />
        ) : null}
        {selectedOption === 'Week 3' ? (
          <Sustainableweek3 crs={selectedOption} />
        ) : null}
        {selectedOption === 'Week 4' ? (
          <Sustainableweek4 crs={selectedOption} />
        ) : null}

        {selectedOption === 'Week 5' ? (
          <Sustainableweek5 crs={selectedOption} />
        ) : null}

        {selectedOption === 'SWB-Week 6' ? (
          <Wellbeingweek6 crs={selectedOption} />
        ) : null}
        {selectedOption === 'SWB-Week 2' ? (
          <Wellbeingweek2 crs={selectedOption} />
        ) : null}
        {selectedOption === 'SWB-Week 3' ? (
          <Wellbeingweek3 crs={selectedOption} />
        ) : null}
        {selectedOption === 'SWB-Week 4' ? (
          <Wellbeingweek4 crs={selectedOption} />
        ) : null}

        {selectedOption === 'SWB-Week 5' ? (
          <Wellbeingweek5 crs={selectedOption} />
        ) : null}

        {/* LinkedIN */}
        {/* Interperspnal SKills */}

        {selectedOption === 'Intro to Business Analytics' ? (
          <IntrotoBusinessAnalytics crs={selectedOption} />
        ) : null}
        {selectedOption === 'Business Analytics Foundations' ? (
          <BusinessAnalyticsFoundations crs={selectedOption} />
        ) : null}

        {selectedOption === 'Data Analytics' ? (
          <DataAnalyticsforBusinessProfessionals crs={selectedOption} />
        ) : null}

        {selectedOption === 'Managing Teams' ? (
          <ManagingTeams crs={selectedOption} />
        ) : null}

        {selectedOption === 'New Manager Foundation' ? (
          <NewmanagerFoundation crs={selectedOption} />
        ) : null}
        {selectedOption === 'Marketing Data' ? (
          <MarketingData crs={selectedOption} />
        ) : null}

        {selectedOption === 'Creating a Culture of Change' ? (
          <Creatingacultureofchange crs={selectedOption} />
        ) : null}

        {selectedOption === 'Cross Culture Intelligence' ? (
          <Crosscultureintelligence crs={selectedOption} />
        ) : null}

        {selectedOption === 'Conversation at Work' ? (
          <Conversationsatwork crs={selectedOption} />
        ) : null}

        {selectedOption === 'Discovering Your Strength' ? (
          <Discoveringyourstrengths crs={selectedOption} />
        ) : null}

        {selectedOption === 'Developing a Learning Mindset' ? (
          <Developingalearningmindeset crs={selectedOption} />
        ) : null}

        {selectedOption === 'Interpersonal Communication' ? (
          <Interpersonalcommunication crs={selectedOption} />
        ) : null}

        {selectedOption === 'Learning with Emotional Intelligence' ? (
          <Learingwithemotionalintelligence crs={selectedOption} />
        ) : null}

        {selectedOption === 'Managing Adverse Team' ? (
          <ManagingAdverseTeam crs={selectedOption} />
        ) : null}

        {selectedOption === '' ? <JobHunter crs={'Job Hunter'} /> : null}
        {selectedOption === 'Writing Mails' ? (
          <WritingEmails crs={selectedOption} />
        ) : null}
        {selectedOption === 'Building Trust' ? (
          <BuildingTrust crs={selectedOption} />
        ) : null}
        {selectedOption === 'Business Plan' ? (
          <BussPresent crs={selectedOption} />
        ) : null}
        {selectedOption === 'Critical Thinking' ? (
          <CriticalThink crs={selectedOption} />
        ) : null}
        {selectedOption === 'Effective Listening' ? (
          <EffectiveList crs={selectedOption} />
        ) : null}
        {selectedOption === 'Listening Skills' ? (
          <ImproveListen crs={selectedOption} />
        ) : null}
        {selectedOption === 'Teamwork Foundations' ? (
          <TeamworkFound crs={selectedOption} />
        ) : null}
        {selectedOption === 'Developing a learning Mindset' ? (
          <LeaningMindset crs={selectedOption} />
        ) : null}
        {/* {selectedOption === 'Critical Thinking ps' ? <LeaningMindset/>: null} */}
        {selectedOption === 'Managing Stress for Positive Change' ? (
          <PositiveChange crs={selectedOption} />
        ) : null}
        {selectedOption === 'Critical Thinking tm' ? (
          <CriticalThinkTm crs={selectedOption} />
        ) : null}
        {selectedOption === 'Finding your Time Management' ? (
          <FindTimeMange crs={selectedOption} />
        ) : null}
        {selectedOption === 'Time Management Fundamentals' ? (
          <TimeManageFunda crs={selectedOption} />
        ) : null}
        {selectedOption === 'Job Hunter Anwsers' ? (
          <JobHunter crs={selectedOption} />
        ) : null}

        {/* EntrePreneurship */}

        {selectedOption === 'Entrepreneurship Foundations' ? (
          <EntFoundation crs={selectedOption} />
        ) : null}
        {selectedOption === 'Unique ways to Generate Creative Ideas' ? (
          <UniqueWaysToGenerateCreativeIdeas crs={selectedOption} />
        ) : null}
        {selectedOption === 'Creating a Business Plan' ? (
          <CreatingBusinessMindset crs={selectedOption} />
        ) : null}
        {selectedOption === 'Finding and Testing your Business Idea' ? (
          <FindingAndTestingYourBusinessIdea crs={selectedOption} />
        ) : null}
        {selectedOption === 'Social Media Marketing for Small Business' ? (
          <SocialMediaMarketingForSmallBusiness crs={selectedOption} />
        ) : null}
        {selectedOption === 'Leading in Government' ? (
          <LeadingInGovernment crs={selectedOption} />
        ) : null}

        {/* Ethics and gender Equality */}

        {selectedOption === 'Bussiness Ethics' ? (
          <BusinessEthics crs={selectedOption} />
        ) : null}
        {selectedOption === 'Leadership Strategies for Women' ? (
          <Leadership crs={selectedOption} />
        ) : null}
        {selectedOption === 'Skills for Inclusive Conversations' ? (
          <SkillsforInclusiveConsersations crs={selectedOption} />
        ) : null}
        {selectedOption === 'Unconscious Bias' ? (
          <UnconsciousBias crs={selectedOption} />
        ) : null}

        {/* IPR */}

        {selectedOption === 'Preparing for Successfull...' ? (
          <PreparingForSuccessful crs={selectedOption} />
        ) : null}
        {selectedOption === 'Bussiness Writing' ? (
          <BusinessWriting crs={selectedOption} />
        ) : null}
        {selectedOption === 'Writing White Papers' ? (
          <WritingWhitePapers crs={selectedOption} />
        ) : null}
        {selectedOption === 'Technical Writing' ? (
          <TechinalWriting crs={selectedOption} />
        ) : null}

        {selectedOption === 'DevOps' ? (
          <div className='div-iframe'>
            <iframe
              style={{ minHeight: '90vh', minWidth:'90%', marginLeft:'5%'}}
              src='/books/devops.pdf'
              frameborder='0'
            />
          </div>
        ) : null}
        {selectedOption === 'TypeScript' ? (
          <div className='div-iframe'>
            <iframe
              style={{ minHeight: '90vh', minWidth:'90%', marginLeft:'5%'}}
              src='/books/typescript.pdf'
              frameborder='0'
            />
          </div>
        ) : null}
        {selectedOption === 'Angular' ? (
          <div className='div-iframe'>
            <iframe
              style={{ minHeight: '90vh', minWidth:'90%', marginLeft:'5%'}}
              src='/books/angular.pdf'
              frameborder='0'
            />
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default CreditInside
