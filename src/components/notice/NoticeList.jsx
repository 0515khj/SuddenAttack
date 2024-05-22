 
// import noticedata from '../../assets/api/noticedata';
import { useEffect } from 'react';
import { addData, currentPage } from '../../store/modules/paginationSlice';
import NoticeItem from './NoticeItem';
import { NoticeListWrap } from './NoticeStyle';
import {useDispatch, useSelector} from 'react-redux' 

const NoticeList = () => {
    const {noticeData} = useSelector(state => state.notice)
    const {currentpage,postspage} = useSelector(state => state.pagination)
    const dispatch = useDispatch()

    const lastPost = currentpage *  postspage //
    const firstPost = lastPost - postspage
    const currentPost = noticeData.slice(firstPost , lastPost)

    useEffect( ()=>{
        dispatch(addData(noticeData))
    },[])
       
    
    return (
        <NoticeListWrap>
        <table className="noticeTable">
            <caption>게시판</caption>
            <colgroup>
                <col className="num" />
                <col className="title" />               
                <col className="date" />               
            </colgroup>
            <thead>
                <tr>
                    <th>구분</th>
                    <th>내용</th>
                    <th>작성자</th>
                    <th>작성일</th>
                    <th>조회수</th>
                </tr>
            </thead>
            <tbody>
                  {
                    currentPost.map(item =><NoticeItem key={item.id} item={item}/>)
                  }
           </tbody>
        </table>
        </NoticeListWrap>
    );
};

export default NoticeList;