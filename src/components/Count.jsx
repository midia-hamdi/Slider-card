import React, {useState, useEffect} from 'react'

export default function Count() {
    const [count, setcount] = useState(0)

    function increment(){
        setTimeout(() => {
            setcount(preveCount => preveCount + 1);
            console.log(count)
        }, 2000)
    }

    function decrement(){
        setTimeout(() => {
            setcount( count -1)
        }, 2000)
    }

    useEffect(() => {
        console.log('Effect...')
    })

  return (
    <div className='counter'>
        <button className='bg-info' onClick={decrement}>-</button>
        <p className='count'>{count}</p>
        <button className='bg-success' onClick={increment}>+</button>
    </div>
  )
}
