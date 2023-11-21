import React from 'react'
import BuyBtn from './BuyBtn'
import Count from './Count'

export default function Buy({name}) {
    return (
        <div className='buy-wrapper'>
            <BuyBtn name={name}/>
            <div>
                <div>
                    Max: 1000
                </div>
            <Count />
            </div>
        </div>
    )
}
