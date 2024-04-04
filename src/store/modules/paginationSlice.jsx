import { createSlice } from '@reduxjs/toolkit'
import {nanoid} from 'nanoid'

const initialState = {
    pageData:[], // 페이지에 표시할 데이터 배열
    currentpage:1, // 현제 페이지
    totalpage:1, // 전체 페이지 수 
    postspage:10, // 한 페이지당 표시할 데이터 개수
}

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    prevPage :(state,action) => {
        if(state.currentpage === 1){
            state.currentpage = 1   // 현재 페이지가 1일때는 더이상 감소하지 않는다
        }else{                  
            state.currentpage--  // 현재페이지가 1보다 크면 감소한다.
        }
    },
    nextPage : (state,action)=>{
        if(state.currentpage === state.totalpage){
            state.currentpage = state.totalpage // 현재 페이지가 최대 페이지일 때는 더이상 증가하지 않는다
        }else{
            state.currentpage++ //현재 페이지 증가++ 고로 현재 페이지가 최대 페이지보다 작으면 증가한다
        }

    },
    currentPage : (state,action)=>{
        state.currentpage = action.payload  // 현재 페이지를 지정된 페이지로 설정한다
                // 커런트페이지 - 현재 페이지
    },
    addData : ( state,action) => {
        state.pageData = action.payload // action.payload 이건  notice 데이타가 들어오는것 
    },              // 페이지에 표시할 데이터를 설정한다
    totalData : ( state,action) => {    // 
        state.currentpage = 1   // 총 데이터 수를 계산하기 전에 현재 페이지를 1로 설정한다
        state.totalpage =Math.ceil(state.pageData.length / state.postspage) 
    },
   
  },
})

export const {prevPage,nextPage,currentPage,addData,totalData } = paginationSlice.actions

export default paginationSlice.reducer