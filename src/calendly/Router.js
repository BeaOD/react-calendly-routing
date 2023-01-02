import React from 'react'
import { BrowserRouter,Routes,Route, } from 'react-router-dom'
import Calendly2 from './Calendly2'
import Calendly3 from './Calendly3'
import Calendly4 from './Calendly4'
import CalendlyS from './CalendlyS'




const router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Calendly2/>}/>
        <Route path='/Calendly3' element={<Calendly3/>}/>
        <Route path='/Calendly4' element={<Calendly4/>}/>
        <Route path='/CalendlyS' element={<CalendlyS/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default router