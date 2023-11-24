import React from 'react'
import { useSelector } from 'react-redux'

export default function Stats() {
const budget= useSelector(state=>state.depenses.budget)
const depenses = useSelector(state=>state.depenses.depenses)
const total = depenses.reduce((sum,d)=>d.montant,0);



  return (
    <div>
        <h1>Budget : {budget}</h1>
        <h1> Depenses:  {total}</h1>
        <h1> Ecart : {total - budget}</h1>
    </div>
  )
}
