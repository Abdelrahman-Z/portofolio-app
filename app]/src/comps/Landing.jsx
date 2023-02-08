import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../css/container.css'
import '../css/landing.css'
import { serachContinent, serachCountry } from '../redux/countrySlice'
import Card from './Card'
const Landing = ({ dark }) => {
  const users = useSelector(state => state.users)
  const dispatch = useDispatch()
  const handleChangeForInput = (e) => {
    dispatch(serachCountry(e.target.value))
  }
  const handleChangeForSelect = (e) => {
    dispatch(serachContinent(e.target.value))
  }
  return (
    <div className={`landing ${dark && 'dark'}`}>
      <div className='container'>
        <div className='searching'>
            <input type={'text'} onChange={(e)=> handleChangeForInput(e)} placeholder='search for a country...' />
            <select onChange={(e)=> handleChangeForSelect(e)} >
              <option>Filter by region</option>
              <option>Africa</option>
              <option>Americas</option>
              <option>Asia</option>
              <option>Europe</option> 
              <option>Oceania</option>
            </select>
        </div>
        <div className='countries'>
          {users.map(el => (
            <Card key={el.name} data={el} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Landing