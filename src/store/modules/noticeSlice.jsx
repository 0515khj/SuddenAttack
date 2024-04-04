import { createSlice } from '@reduxjs/toolkit'
import noticedata from '../../assets/api/noticedata'

const initialState = {

    noticeData : noticedata

}
export const noticeSlice = createSlice({
  name: 'notice',
  initialState,
  reducers: {
  },
})


export default noticeSlice.reducer