import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addbdg } from '../redux/DepenseSlicer';

export default function AddBudget() {
    const [bdg,setbdg]=useState(0)
    const dispatch = useDispatch();
  return (
    <form onSubmit={(e)=>e.preventDefault()}>

<input type="text" placeholder='Budget' value={bdg} onChange={(e)=>setbdg(Number(e.target.value))} />

<button onClick={()=>dispatch(addbdg(bdg))}>Ajouter Budget</button>

    </form>
  )
}
