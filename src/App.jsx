import { useState } from 'react'

function App() {

  const [message, setMessage] = useState("App")

  return (
    <>
     <h1>{message}</h1>
    </>
  )
}

export default App
