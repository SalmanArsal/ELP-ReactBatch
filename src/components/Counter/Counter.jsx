import React,{ useState, Fragment}  from 'react'

const Counter = ({name, age}) => {
  // console.log(props.name)
   let [count, setCount] = useState(0)
   let handleCounter = () =>{
        setCount(count + 1)
   }

  return (
    <>
        <h1>COUNTER APP created by {name} {age}</h1>
        <hr />
        <button onClick={handleCounter}>Count: {count} </button>
    </>
  )
}

export default Counter