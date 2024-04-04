import { useNavigate } from "react-router-dom";
import { CustomerAddWrap } from "./CustomerStyle";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { add } from "../../store/modules/customerSlice";


const CustomerAdd = () => {  
    
    const navigate=useNavigate()
    const dispatch = useDispatch()

    const [user , setUser] = useState({name:'',title:'',content:'',date:''})

    const {name , title , content , date}=user
    const [now , setNow] = useState(new Date()) // 현재 년월일 입력코드

    const cp = e =>{
        const {name , value} = e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    const onSubmit = e =>{
        e.preventDefault()
        if(!title || !content || !name ) return
        user.date = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`
        dispatch(add(user))
        setUser({name:'',content:'',title:''})
        navigate((`/customer`))
    }

    const onGo = e =>{
        e.preventDefault() // 새로고침 방지용
        navigate(`/customer`)
    }


    return (
        <CustomerAddWrap>  
            <div className="inner">    
                <h2> 고객문의 </h2>
                <form  className="customer-add" onSubmit={onSubmit} >
                    <p>  <input type="text" placeholder="제목" onChange={cp} value={title} name="title"  /></p>
                    <p>  <input type="text" placeholder="작성자"  onChange={cp} value={name} name="name"  /></p>
                    <p>  
                        <textarea cols="100" rows="10" 
                        placeholder="문의하기"  onChange={cp} value={content} name="content"
                        ></textarea></p>
                    <p>
                        <button onClick={onGo}  >목록으로</button>
                        <button type="submit" >저장하기</button>
                        <button onClick={onGo} >취소하기</button>
                    </p>
                </form>
                </div>       
        </CustomerAddWrap>
    );
};

export default CustomerAdd;