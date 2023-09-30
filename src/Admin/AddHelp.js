import React from 'react'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import axios from '../axios'

const AddHelp = ({portalFor}) => {
  const [ques, setQues] = useState('')
  const [ans, setAns] = useState('')
  const [category, setCategory] = useState('')

  const adddoubts = e => {
    e.preventDefault()

    axios
      .post('/upload-help', { ques, ans, category })
      .then(() => {
        setAns('')
        setQues('')
        setCategory('')
        toast.success(`${category.toUpperCase()} Help Added`);
      })
      .catch(err => console.log(err.response.data))
  }
  return (
    <div className='files-form'>
        <div style={{textAlign: 'center', color:'white', padding:'.6em 0em .6em 0em', background:'linear-gradient(90deg, #254380 -3.1%, #54A7C8 112.18%)'}}> ADD {portalFor.toUpperCase()}</div>
    <form action="POST">
        <input type="text" name='ques' value={ques} onChange={(e) => setQues(e.target.value)} placeholder='Question'/>
        <input type="text" name='ans' value={ans} onChange={(e) => setAns(e.target.value)} placeholder='Answer'/>
        <input type="text" name='category' value={category} onChange={(e) => setCategory(e.target.value)} placeholder='Category'/>
        <br/>
        <button type="submit" onClick={adddoubts}>Submit</button>
    </form>

    
</div>
  )
}

export default AddHelp
