import React, { useState } from 'react'

const TogglePara = () => {
    let [bool, setBool] = useState(true)
    // console.log("re-rendered")
  return (
    <>
        <button onClick={() => setBool(!bool)}>Toggle</button>
        {bool ? 
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad id soluta similique aliquid quae perspiciatis blanditiis enim sed nulla non reiciendis illum alias sequi porro quasi et, quia deleniti neque?</p>
            : ""
        }
    </>
  )
}

export default TogglePara