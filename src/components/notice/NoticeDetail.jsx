import { useNavigate, useParams } from "react-router-dom";
import { NoticeDetailWrap } from "./NoticeStyle";
import { useSelector } from "react-redux";


const NoticeDetail = () => {
  const {noticeID}=useParams()
  const {noticeData}=useSelector(state => state.notice)

  const newItem = noticeData.find(item => item.id === Number(noticeID) )
  const {id , title , name , good ,date , content} = newItem
  const navigate =useNavigate()
    

    return (
        <NoticeDetailWrap>
          <div className="inner">
           
          <h2> 공지사항 </h2>
            <div className="con">
            <h3> [{title}] {content}  </h3>
            <div className="nd">
                <p className="name">{name}</p>
                <p className="date">작성일: <span>{date}</span> </p>
                <p className="good">조회: <span>{good}</span> </p>
                </div>
              
                <p className="txt"> {content}  </p>
            </div>
            <button onClick={()=>navigate(`/notice`)} >목록으로</button>
          </div>
        </NoticeDetailWrap>
    );
};

export default NoticeDetail;