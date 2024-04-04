import { configureStore } from '@reduxjs/toolkit'
import auth from './modules/authSlice' 
import cart from './modules/cartSlice' 
import customer from './modules/customerSlice' 
import notice from './modules/noticeSlice' 
import pagination from './modules/paginationSlice' 

export const store = configureStore({
  reducer: {
    auth,
    cart,
    customer,
    notice,
    pagination,
     
  },
})