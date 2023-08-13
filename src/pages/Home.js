import React, { useEffect } from 'react'
import { useState, useRef} from 'react'
import handleSubmit from '../handles/handlesubmit'
import io from 'socket.io-client'


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

    // const [videoFrame, setVideoFrame] = useState(null)

    // useEffect(()=> {
    //     const socket = io('http://192.168.68.121:5000')
    //     socket.on('video_stream', (data) => {
    //         const frameData = data.data
    //         const frameUrl = 'data:image/jpeg;base64,' + frameData
    //         setVideoFrame(frameUrl)
    //     })

    //     return () => {
    //         socket.disconnect()
    //     }
    // }, [])
    const [buttonHeld, setButtonHeld] = useState(false)


    let startMotor = ()=> {
        // await fetch('/motor')
        setButtonHeld(true)
        while (buttonHeld) {
            // await fetch('/motor')
            console.log('button held')
        }
    }

    let stopMotor = async ()=> {
        // await fetch('/stopMotor')
        setButtonHeld(false)
        console.log('motor stopped')
    }

  return (
    <div>
      <div id='camera'></div>
        <button onClick={getData}>Click Me</button>
        <button onClick={getState}>Toggle Visibility</button>
        {state && <h1>{data.context}</h1>}
        <form onSubmit={submithandler}>
            <input type='text' ref={dataRef}/>
            <button type='submit'>Save</button>
        </form>
        <div id='videoContainer'>
            <img id='videoFeed' src='/video_feed' alt='Video Frame'/>
        </div>
        <div className='buttonContainer'>
            <div>
                <button>Up</button>
            </div>
            <div>
                <button onMouseDown={startMotor} onMouseUp={stopMotor} onMouseLeave={stopMotor}>Left</button>
                <button>Right</button>
            </div>
            <div>
                <button>Down</button>
            </div>
        </div>
        <button>Turn Off</button>
    </div>
  )
}

export default Home
