import React, { useState } from 'react'
import { useRef } from 'react'

const UpdatEmail = () => {
    let [user, setUser] = useState({
        name:"Salman",
        email:"Salman@gmail.com"
    })

    let ref = useRef()

    let handleSubmit = (e) =>{
        e.preventDefault()
        setUser({...user, email: ref.current.value})
        ref.current.value = ""
    }

  return (
    <div style={{marginTop:"6rem"}}>
        <form onSubmit={handleSubmit} >
            <input type="email" placeholder='Enter Email'  ref={ref} name='email'/>
            <button type='submit' >Update Email</button>
        </form>

        <h1>Name: {user.name}</h1>
        <h1>Email: {user.email}</h1>
    </div>
  )
}

export default UpdatEmail