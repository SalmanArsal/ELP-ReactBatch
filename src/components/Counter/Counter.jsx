import React,{ useState, Fragment}  from 'react'

const Counter = () => {
   let [count, setCount] = useState(0)
   let handleCounter = () =>{
        setCount(count + 1)
   }

  return (
    <>
        <h1>COUNTER APP</h1>
        <hr />
        <button onClick={handleCounter}>Count: {count} </button>
    </>
  )
}

export default Counter