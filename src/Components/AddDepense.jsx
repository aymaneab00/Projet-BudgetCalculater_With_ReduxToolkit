import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add_depense } from '../redux/DepenseSlicer';


export default function AddDepense() {
  const dispatch = useDispatch();
    const [depense,setdepense]=useState('')
    const[montant,setmontant]=useState(0)
  return (
    <form action="" onSubmit={(e)=>e.preventDefault()}>
        <input type="text"  value={depense} onChange={e=>setdepense(e.target.value)}/> Depense
        <input type="number"  value={montant} onChange={e=>setmontant(Number(e.target.value))}/> Montant
        <button onClick={()=>dispatch(add_depense({titre:depense,montant:montant}))}> Ajouter une depense </button>
    </form>
  )
}
