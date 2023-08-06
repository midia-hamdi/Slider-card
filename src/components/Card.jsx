import React from 'react'
import Cardimage from './Cardimage'
import CardItem from './CardItem'
import UnitStates from './UnitStates'

export default function Card() {
  return (
 
        <div className="clash-card barbarian">
            <Cardimage />
            <CardItem type='clash-card__level clash-card__level--barbarian'>Level 4 </CardItem>
            <CardItem type='clash-card__unit-name'>The Barbarian </CardItem>
            <CardItem type='clash-card__unit-description'> 
            The Barbarian is a kilt-clad Scottish warrior with an angry, battle-ready expression, hungry for
            destruction. He has Killer yellow horseshoe mustache.</CardItem>
            <UnitStates />
        </div> 
        
  )
}

