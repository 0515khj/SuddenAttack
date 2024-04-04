import { createSlice } from '@reduxjs/toolkit'
import customerdata from '../../assets/api/customerdata'
// import {nanoid} from 'nanoid'


const initialState = {

  customerData:customerdata,
  current:[]

    
}

let no = customerdata.length+1

export const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    add:(state,action)=>{
      state.customerData.push({id:no++, ...action.payload})
    },
    remove:(state,action)=>{
      state.customerData = state.customerData.filter(item => item.id !== action.payload)
    },
    edit:(state,action)=>{
      state.current = action.payload
    },
    update:(state,action)=>{
      state.customerData = state.customerData.map(item => item.id=== action.payload.id ? action.payload : item)
    },
    cancel:(state,action)=>{

    },
   
  },
})

export const { add,remove,edit,update,cancel} = customerSlice.actions

export default customerSlice.reducer