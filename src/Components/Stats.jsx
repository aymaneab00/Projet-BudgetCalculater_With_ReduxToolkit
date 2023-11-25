import React from 'react'
import { useSelector } from 'react-redux'

export default function Stats() {
const budget= useSelector(state=>state.depenses.budget)
const depenses = useSelector(state=>state.depenses.depenses)
const total = depenses.reduce((sum,d)=>d.montant,0);



  return (
    <div className='stats'>
        <p>Budget : {budget}</p>
       { console.log(budget)}
        <p> Depenses:  {total}</p>
        <p> Ecart : {total - budget}</p>
        {console.log(total - budget)}
    </div>
  )
}
