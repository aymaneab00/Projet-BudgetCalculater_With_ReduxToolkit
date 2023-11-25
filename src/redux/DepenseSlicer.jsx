import { createSlice } from "@reduxjs/toolkit";

const DepenseSlice = createSlice({
  name: "depenses",
  initialState: {
    budget: 0,
    depenses: [
      // {
      //   titre: "Voiture",
      //   montant: 123,
      // },
    ],
  }, 
  reducers: {
    add_depense : (state,action)=>{
        state.depenses= [...state.depenses , action.payload]

    },
    addbdg : (state,action)=>{
        state.budget += action.payload
    }
  },
});

export const {add_depense, addbdg} = DepenseSlice.actions
export default DepenseSlice.reducer