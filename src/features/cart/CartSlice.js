import { createSlice } from "@reduxjs/toolkit"



const initialState = {
products: []

}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart : (state,action)=>{
      const existingItem = state.products.find((product)=>product.id === action.payload.id)
      if(existingItem){
        existingItem.quantity += 1
      } else {
        state.products.push({...action.payload, quantity: 1})
      }
    },
    removeFromCart: (state,action)=>{
      state.products = state.products.filter((product)=>product.id !== action.payload)
    },
    updateQuantity: (state,action)=>{
      const product = state.products.find((product)=>product.id === action.payload.id)
      if(product){
        product.quantity = action.payload.quantity
      }
    }
  }
})


export const {addToCart,removeFromCart,updateQuantity} = cartSlice.actions
export default cartSlice.reducer