import React, { useState } from 'react'
import '../css/Header.css'
import '../css/container.css'
const Header = ({ dark , setDark}) => {
    
  return (
      <div className={`header ${dark && 'dark'}`}>
          <div className='container'>
              <h1>Where in the world ?</h1>
              <button onClick={() => setDark(state => !state)}>{
                  dark ?
                      <i class="fa-solid fa-moon"></i>
                      :
                      <i class="fa-regular fa-moon"></i>
              } Dark Mode</button>
          </div>
    </div>
  )
}

export default Header