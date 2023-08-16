import React, { useEffect } from 'react'
import { useState, useRef} from 'react'
import handleSubmit from '../handles/handlesubmit'
import io from 'socket.io-client'
import { setRef } from '@mui/material'
import Banner from '../components/Banner'


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

    const dataRef = useRef()

    const submithandler = (e) => {
        e.preventDefault()
        handleSubmit(dataRef.current.value)
        dataRef.current.value = ""
    }

////Functions to call motor API////
    
    const mouseDownLeft = async() => {
        await fetch('/motor/left')
    }
    
    const mouseDownRight = async() => {
        await fetch('/motor/right')
    }

    const mouseDownUp = async() => {
        await fetch('/motor/up')
    }

    const mouseDownDown = async() => {
        await fetch('/motor/down')
    }

    ////CODE FOR HOLD AND TURN, NOT READY YET////
    // const [buttonHeld, setButtonHeld] = useState(false)
    
    // const apiCall = async() => {
    //     if (buttonHeld) {
    //         console.log('button')
    //         await fetch('/motor')
    //     }
    // }

    // useEffect(()=> {
    //     if (buttonHeld) {
    //         const apiLoopInterval = setInterval(apiCall, 900)
    //         return () => {
    //             clearInterval(apiLoopInterval)
    //         }
    //     }
    // }, [buttonHeld])

    // const mouseDown = () => {
    //     console.log('mouse down')
    //     setButtonHeld(true)
    //     console.log(buttonHeld)
    //     apiCall()

    // }

    // const mouseUp = () => {
    //     setButtonHeld(false)
    // }

  return (
    <div>
      <div id='bannerContainer'>
          {/* <h1>test</h1> */}
          <Banner />
      </div>
      <div id='camera'></div>
        
        {/* <button onClick={getData}>Click Me</button>
        <button onClick={getState}>Toggle Visibility</button>
        {state && <h1>{data.context}</h1>}
        <form onSubmit={submithandler}>
            <input type='text' ref={dataRef}/>
            <button type='submit'>Save</button>
        </form> */}
        <div id='videoContainer'>
            <img id='videoFeed' src='/video_feed' alt='Video Frame'/>
        </div>

        <div className='buttonContainer'>
            <div>
                <button onMouseDown={mouseDownUp}>Up</button>
            </div>
            <div>
                <button onMouseDown={mouseDownLeft}>Left</button>
                <button onMouseDown={mouseDownRight}>Right</button>
            </div>
            <div>
                <button onMouseDown={mouseDownDown}>Down</button>
            </div>
        </div>
        <button>Turn Off</button>
    </div>
  )
}

export default Home
