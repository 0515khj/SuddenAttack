import { createSlice } from '@reduxjs/toolkit'
import productData from '../../assets/api/cartdata'

const initialState = {
carts:[],
cartTotal :0,
products : productData,
del:[],

}



export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state,action) => {
      state.carts.push(action.payload)
    },

    removeCart: (state,action) => {
      state.carts=state.carts.filter(item=>item.id !== action.payload)
     },
     
     delCart:(state,action) =>{
      state.carts = action.payload 
     },

    totalCart: (state,action) => {
     state.cartTotal = state.carts.reduce((acc, cur) => acc + Number(cur.price), 0)
    },

    sortCart:(state,action)=>{
      if(action.payload !==''){
        state.products.sort((a,b)=>a[action.payload] > b[action.payload] ? 1:-1)
      }
    },

    searchCart:(state,action)=>{
      state.products = productData.filter(item => item.title.toLowerCase().includes(action.payload.toLowerCase()))
      
    },
    resetCart :(state,action)=>{
      state.products = productData    // 리셋 시키는값 = 데이터값을 그대로 다시 내보내면됨
    
    },
    cartsEdit:(state, action) => {
      let newItem = state.carts.find(item => item.id === action.payload.id)
      let original = productData.find(item => item.id === action.payload.id)
      if(newItem){
        newItem.price = original.price * action.payload.cnt
      }
    },
    allresetCart: (state,action)=>{
      state.carts= []   
      state.cartTotal=0;
    },
    deletselection: (state, action) => {
      state.del.push(action.payload);
    },
    undeletselection: (state, action) => {
      state.del = state.del.filter(id => id !== action.payload);
    },
    removeselection:(state)=>{
      state.carts = state.carts.filter(item =>
        !state.del.includes(item.id));
        state.del =[];
    }
   
  },
})

export const { addCart,removeCart,totalCart , sortCart,resetCart,cartsEdit , 
  searchCart,allresetCart,removeselection,deletselection,undeletselection} = cartSlice.actions

export default cartSlice.reducer