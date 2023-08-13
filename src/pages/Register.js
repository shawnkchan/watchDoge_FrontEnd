import { TextField } from '@mui/material'
import {React, useState} from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../firebase_setup/firebase'
import { useNavigate, NavLink} from 'react-router-dom'

function Register() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    
    const onSubmit = async(e)=>{
        e.preventDefault()

        await createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential)=> {
            const user = userCredential.user
            console.log(user)
            navigate("/login")
        })
        .catch((error)=>{
            const errorCode = error.errorCode
            const errorMessage = error.errorMessage
            console.log(errorCode, errorMessage)
            console.log('failed')
        })
    }
  return (
    <main >        
    <section>
        <div>
            <div>                  
                <h1> FocusApp </h1>                                                                            
                <form>     
                    <div>
                        <label htmlFor="email-address">
                            Email address
                        </label>
                        <input
                            type="email"
                            label="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}  
                            required                                    
                            placeholder="Email address"                                
                        />
                    </div>

                    <div>
                        <label htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            label="Create password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                            required                                 
                            placeholder="Password"              
                        />
                    </div>                                             
                    
                    <button
                        type="submit" 
                        onClick={onSubmit}                        
                    >  
                        Sign up                                
                    </button>
                                                                 
                </form>
               
                <p>
                    Already have an account?{' '}
                    <NavLink to="/login" >
                        Sign in
                    </NavLink>
                </p>                   
            </div>
        </div>
    </section>
</main>
  )
}

export default Register
