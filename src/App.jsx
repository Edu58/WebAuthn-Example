import { useState } from 'react'
import './App.css'
import { createCreds, validateCreds } from './credentials/RegisterCreds'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='mb-4'>
        <button type="button" onClick={createCreds} className="btn btn-success">Register Credentials</button>
      </div>
      <div>
        <button type="button" onClick={validateCreds} className="btn btn-warning">Validate Credentials</button>
      </div>
    </>
  )
}

export default App
