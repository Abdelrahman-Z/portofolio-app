import React from 'react'
import {useNavigate} from 'react-router-dom'
const Card = ({ data }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/${data.numericCode}`)
  }
  return (
    <div className='country-card' onClick={handleClick}>
        <div className='image'>
          <img src={data.flags.svg}></img>
          </div>
          <div className='data'>
              <h1>{data.name}</h1>
              <p><span>Population:</span> {data.population}</p>
              <p><span>Region:</span> {data.region}</p>
              <p><span>Capital:</span> {data.capital}</p>
          </div>
    </div>
  )
}

export default Card