
import { useDispatch, useSelector } from "react-redux";
import { CustomerAddWrap } from "./CustomerStyle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { update } from "../../store/modules/customerSlice";


const CustomerEdit = () => {
    const {current}=useSelector(state => state.customer)
    const [user , setUser]=useState(current)
    const {name , title , content,date}=user
    const [now , setNow] = useState(new Date()) 

    const dispatch = useDispatch()
    const navigate = useNavigate()


    const cp = e =>{
        const {name , value}=e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    const onSubmit = e=>{
        e.preventDefault()
        if(!title||!content||!name) return
        user.date = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`
        dispatch(update(user))
        setUser({name:'',content:'',title:''})
        navigate(-1)
    }

    const onGo = e =>{
        e.preventDefault() 
        navigate(`/customer`)
    }

    return (
        <CustomerAddWrap>
            <div className="inner">
                <h2> 고객문의수정 </h2>
                <form onSubmit={onSubmit} className="customer-add" >
                    <p>  <input type="text" placeholder="제목" onChange={cp} value={title} name="title" /></p>
                    <p>  <input type="text" placeholder="작성자" onChange={cp} value={name} name="name"  /></p>
                   
                    <p>  
                        <textarea cols="100" rows="10" 
                        placeholder="문의하기" onChange={cp} value={content} name="content"
                        ></textarea>
                    </p>

                    <p>
                        <button onClick={onGo} >목록으로</button>
                        <button type="submit">저장하기</button>
                        <button onClick={()=>navigate(-1)}  >취소하기</button>
                    </p>
                </form>
            </div>
        </CustomerAddWrap>
    );
};

export default CustomerEdit;