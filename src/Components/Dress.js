import React, { useEffect, useState } from 'react'
import './css/dress.css'
import axios from '../axios'
import { useGetFromStore } from '../hooks/zustandHooks'
import toast from 'react-hot-toast'
import { useAuthStore } from '../store'
import { useNavigate } from 'react-router-dom'

const Dress = () => {
  const navigate = useNavigate()
  const token = useGetFromStore(useAuthStore, state => state.token)

  const [cupi, setcupi] = useState('')

  const [formData, setFormData] = useState({
    name: '',
    uid: '',
    number: '',
    selectedItems: [],
    pantsColor: '',
    upiId: '',
    size: 'XS',
    cost: 0
  })

  useEffect(() => {
    const calculateCost = () => {
      const itemPrices = {
        pant: 600,
        tie: 50,
        shirt: 500,
        blazer: 1000
      }

      let totalCost = 0
      formData.selectedItems.forEach(item => {
        totalCost += itemPrices[item] || 0
      })

      if (
        formData.selectedItems.includes('pant') &&
        formData.selectedItems.includes('tie') &&
        formData.selectedItems.includes('blazer') &&
        formData.selectedItems.includes('shirt')
      ) {
        totalCost = 2000
      }

      setFormData({ ...formData, cost: totalCost })
    }

    calculateCost()
  }, [formData.selectedItems])

  const handleInputChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleCheckboxChange = e => {
    const { name, checked } = e.target
    if (name === 'all' && checked) {
      setFormData({
        ...formData,
        selectedItems: ['pant', 'tie', 'blazer', 'shirt'],
        pantsColor: ''
      })
    } else if (name === 'all' && !checked) {
      setFormData({ ...formData, selectedItems: [], pantsColor: '' })
    } else {
      const updatedSelectedItems = checked
        ? [...formData.selectedItems, name]
        : formData.selectedItems.filter(item => item !== name)

      setFormData({ ...formData, selectedItems: updatedSelectedItems })
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()

    if (token) {
      if (formData.upiId === cupi) {
        const res = await axios.post('/buy/dress', formData)
        toast.success(res?.data.message)

        setFormData({
          name: '',
          uid: '',
          number: '',
          selectedItems: [],
          pantsColor: '',
          upiId: '',
          size: 'XS',
          cost: 0
        })
      } else {
        toast.error(`UPI ID DOESN'T MATCH`)
      }
    } else {
      toast.error('Please Login to Book')
    }
  }

  return (
    <div className='dress'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='Name'
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <input
          type='text'
          name='uid'
          placeholder='UID'
          value={formData.uid}
          onChange={handleInputChange}
          required
        />
        <input
          type='number'
          name='number'
          placeholder='Mobile Number'
          value={formData.number}
          onChange={handleInputChange}
          required
        />
        <div className='checkbx'>
          <label htmlFor='all'>
            <input
              type='checkbox'
              name='all'
              id='all'
              checked={formData.selectedItems.length === 4}
              onChange={handleCheckboxChange}
            />
            ALL
          </label>
        </div>
        <div className='checkbx'>
          <label htmlFor='pant'>
            <input
              type='checkbox'
              name='pant'
              id='pant'
              checked={formData.selectedItems.includes('pant')}
              onChange={handleCheckboxChange}
            />
            Pant
          </label>
        </div>
        {formData.selectedItems.includes('pant') && (
          <div>
            <label htmlFor='black'>
              <input
                type='radio'
                name='pantsColor'
                value='black'
                checked={formData.pantsColor === 'black'}
                onChange={handleInputChange}
              />
              Black
            </label>
            <label htmlFor='blue'>
              <input
                type='radio'
                name='pantsColor'
                value='blue'
                checked={formData.pantsColor === 'blue'}
                onChange={handleInputChange}
              />
              Blue
            </label>
          </div>
        )}
        <div className='checkbx'>
          <label htmlFor='tie'>
            <input
              type='checkbox'
              name='tie'
              id='tie'
              checked={formData.selectedItems.includes('tie')}
              onChange={handleCheckboxChange}
            />
            Tie
          </label>
        </div>
        <div className='checkbx'>
          <label htmlFor='blazer'>
            <input
              type='checkbox'
              name='blazer'
              id='blazer'
              checked={formData.selectedItems.includes('blazer')}
              onChange={handleCheckboxChange}
            />
            Blazer
          </label>
        </div>
        <div className='checkbx'>
          <label htmlFor='shirt'>
            <input
              type='checkbox'
              name='shirt'
              id='shirt'
              checked={formData.selectedItems.includes('shirt')}
              onChange={handleCheckboxChange}
            />
            Shirt
          </label>
        </div>
        <input
          type='text'
          name='upiId'
          placeholder='UPI-TRANSACTION ID(after payment)'
          value={formData.upiId}
          onChange={handleInputChange}
          required
        />
        <input
          type='text'
          value={cupi}
          onChange={e => setcupi(e.target.value)}
          placeholder='RE-ENTER UPI-TRANSACTION ID'
          required
        />
        <select name='size' value={formData.size} onChange={handleInputChange}>
          <option value='XS'>XS</option>
          <option value='S'>S</option>
          <option value='M'>M</option>
          <option value='L'>L</option>
          <option value='XL'>XL</option>
          <option value='XXL'>XXL</option>
          <option value='XXXL'>XXXL</option>
        </select>

        <div className='cost'>Total Cost: {formData.cost} Rs</div>

        <button type='submit'>Submit</button>
      </form>
      <div className='image'>
        <p>
          UPI NAME - <b>HIMASHU GUPTA</b>{' '}
        </p>
        <img src='/images/upi.jpg' style={{ width: '100%' }} alt='' />
      </div>
    </div>
  )
}

export default Dress
