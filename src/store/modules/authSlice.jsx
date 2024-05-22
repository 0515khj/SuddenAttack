import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  dataList :[],
  user : null ,
  authed: false 
    
}

let no = 1 

export const authSliceSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;              
      const newItem = state.dataList.find( item => item.email ===  email )
      if( newItem.password === password ) {
          state.user = newItem
          state.authed = true     
      }  
    },
    logout: (state, action) => {
        state.user = null
        state.authed = false 
    },
    singup:( state, action ) => {
      state.dataList = [ ...state.dataList, { id:no++, ...action.payload }]
    }
  },
})

export const {login, logout, singup } = authSliceSlice.actions

export default authSliceSlice.reducer