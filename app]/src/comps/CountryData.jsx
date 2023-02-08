import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import '../css/container.css'
import '../css/countryData.css'
const CountryData = ({dark}) => {
    const { id } = useParams()
    const data = useSelector(state => state.users)
    const country = data.find(el => el.numericCode === id)
    const borders = country.borders
    const bordersCountry = data.filter(el => {
        return borders && borders.find(i => el.alpha3Code === i)
    })
    const languages = country.languages.map(el => el.name)
  return (
      <div className={`full-page ${dark && 'dark'}`}>
          <div className='container'>
              <Link to='/' className='button'><i class="fa-solid fa-arrow-left"></i> back</Link>
              <div className='data'>
                  <div className='left'>
                      <img src={country.flags.svg}></img>
                  </div>
                  <div className='right'>
                      <h1>{country.name}</h1>
                      <div className='all-data'>
                        <div className='left'>
                              <p><span>Native Name:</span>{country.nativeName}</p>
                              <p><span>Population:</span>{country.population}</p>
                              <p><span>Region:</span>{country.region}</p>
                              <p><span>Sub Region:</span>{country.subregion}</p>
                              <p><span>Capital:</span>{country.capital}</p>
                        </div>
                        <div className='right'>
                              <p><span>Top Level Domain:</span>{country.topLevelDomain}</p>
                              <p><span>Currencies:</span>{country.currencies[0].name}</p>
                              <p><span>Language:</span>{languages.join(',')}</p>
                        </div>
                      </div>
                      <div className='border-countries'>
                          <span>Border Countries:</span>
                          <div>
                          {bordersCountry?.slice(0,3).map(el => (
                              <Link key={el.alpha3Code} to={`/${el.numericCode}`}>{el.name}</Link>
                          ))}
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default CountryData