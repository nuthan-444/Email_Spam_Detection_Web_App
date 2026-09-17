import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import InputForm from './components/InputForm'

function App() {

  
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<InputForm />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
