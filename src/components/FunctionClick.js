import React from 'react'

function FunctionClick() {
    function clickHandler() {
        console.log('button clicked')
    }
  return (
    <div>
        <button className='btn btn-success' onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick