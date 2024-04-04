import { useDispatch, useSelector } from "react-redux";
import { PaginationWrap } from "./paginationStyle";
import { currentPage, nextPage, prevPage, totalData } from "../../store/modules/paginationSlice";
import { useEffect } from "react";

 
 
const Pagination = () => {
  const {customerData} = useSelector(state => state.customer)
  const {noticeData} = useSelector(state => state.notice)
  const {currentpage , totalpage}=useSelector(state=>state.pagination)
  const dispatch = useDispatch()


  useEffect( ()=>{
    dispatch(totalData())
},[customerData,noticeData])


//강제 배열처리
const arr = [...Array(totalpage)]
   
  return (
    <PaginationWrap>
      <div>
        <button onClick={()=> dispatch(prevPage())} >{`<<`}</button>

      {
        arr.map( (_ , idx)=> <button key={idx} className={currentpage === (idx+1) ? "on":""} onClick={()=>dispatch(currentPage(idx+1))}>{idx+1}</button>)
      }
        
      
       
        <button onClick={()=>dispatch(nextPage())} >{`>>`}</button>
      </div>
    </PaginationWrap>
  );
};

export default Pagination;