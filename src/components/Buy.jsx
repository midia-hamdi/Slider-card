import React, {useState, useEffect} from 'react'
import BuyBtn from './BuyBtn'
import Count from './Count'
import Max from './Max'

export default function Buy({name, id}) {
    const [max, setMax] = useState (0)

    useEffect(() => {
        const fetchMax = setInterval(() => {
            fetch(`http://localhost:3000/restricts?hero_id=${id}`)
            .then(Response => Response.json())
            .then(restricts => {
            setMax(restricts[0].max)
            })
        }, 2000)

        return () => clearInterval(fetchMax)
    }, [id])

    return (
        <div className='buy-wrapper'>
            <BuyBtn name={name}/>
            <div>
            <Max max={max}/>
            <Count />
            </div>
        </div>
    )
}
