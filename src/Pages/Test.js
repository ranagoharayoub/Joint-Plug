import React, { useState } from 'react'
import './Test.css'
function Test({slider}) {
    const [state, setstate] = useState(false)
    console.log(state)
    return (
        <div className='test'>
            <button onClick={()=> setstate(true)}>Click</button>
        </div>
    )
}

export default Test
