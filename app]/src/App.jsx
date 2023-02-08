import Header from './comps/Header'
import {Routes , Route} from 'react-router-dom'
import Landing from './comps/Landing'
import { useState } from 'react'
import CountryData from './comps/CountryData'
function App() {
  const [dark, setDark] = useState(false)
  return (
    <div className="App">
      <Header dark={dark} setDark={setDark} />
      <Routes>
        <Route path='/' element={<Landing dark={dark}/>} />
        <Route path='/:id' element={<CountryData dark={dark} />} />
      </Routes>
    </div>
  )
}

export default App
