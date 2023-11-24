import { createSlice } from "@reduxjs/toolkit";

const DepenseSlice = createSlice({
  name: "depenses",
  initialState: {
    budget: 123,
    depenses: [
      {
        titre: "Voiture",
        montant: 123,
      },
    ],
  }, 
  reducers: {
    add_depense : (state,action)=>{
        state.depenses= [...state.depenses , action.payload]

    },
    addbdg : (state,action)=>{
        state.budget += Number(action.budget)
    }
  },
});

export const {add_depense, addbdg} = DepenseSlice.actions
export default DepenseSlice.reducer