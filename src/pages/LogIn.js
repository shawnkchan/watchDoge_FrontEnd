import { TextField } from '@mui/material'
import {React, useState} from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../firebase_setup/firebase'
import {NavLink, useNavigate} from 'react-router-dom'
import duke from '../static/IMG_2683.jpg'

function LogIn() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential)=> {
            const user = userCredential.user
            navigate('/')
            console.log(user)
        })
        .catch((error)=> {
            const errorCode = error.code
            const errorMessage = error.errorMessage
            console.log(errorCode, errorMessage)
        })
    }

  return (
    <div id='login'>                                            
        <div id='card'>
            <h1 id='title'> Watch Doge </h1>
            <img src={duke} id='icon'/>
            <h3>Register an account</h3>
                <form id='form'>
                    <div id='textcontainer'>
                        <input
                            className='textfield'
                            id="email-address"
                            name="email"
                            type="email"
                            required
                            autoFocus
                            placeholder="Email address"
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <div id='textcontainer'>
                        <input
                            className='textfield'
                            id="password"
                            name="password"
                            type="password"
                            required
                            placeholder="Password"
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>
            
                    <div>
                        <button
                            id='button'
                            onClick={onLogin}
                        >
                            Log in
                        </button>
                    </div>
                </form>
            
            <p className="text-sm text-white text-center">
                No account yet? {' '}
                <NavLink to="/signup">
                    Sign up
                </NavLink>
            </p>
            <br></br>
        </div>
                                    
    </div>
  )
}

export default LogIn
