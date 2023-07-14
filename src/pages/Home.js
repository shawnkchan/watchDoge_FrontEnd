import React from 'react'
import { useState } from 'react'

function Home() {
    let [data, setData] = useState([])


    let getData = async() => {
      let response = await fetch('/api')
      let data = await response.json()
      setData(data) 
      console.log(data)
    }
    
    let [state, setState] = useState(true)

    let getState = ()=> {
        setState(!state)
        console.log(state)
    } 

  return (
    <div>
      <div id='camera'></div>
        <button onClick={getData}>Click Me</button>
        <button onClick={getState}>Toggle Visibility</button>
        {state && <h1>{data.context}</h1>}
    </div>
  )
}

export default Home
