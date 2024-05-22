import { ContentStyle1 } from "./ContentStyle";
import { useEffect, useState } from "react";
import {  Link  } from "react-router-dom";




const Content1 = () => {


    const [data,setData]=useState([])

    useEffect(() => {
        setData([
            '핵쟁이 박제합니다',
            '밀봉1개 팝니다',
            '파마스 노블 삽니다',
            '볼링 치고 싶다',
            '모든 총기 티켓 필요하신분?',
        ]);
    }, []);

    const cp = (category) => {
        // 각 카테고리에 해당하는 데이터를 설정
        switch (category) {
            case '게시판':
                setData([
                    <Link to={"/notice"}>핵쟁이 박제합니다</Link>,
                    <Link to={"/notice"}>밀봉1개 팝니다</Link>,
                    <Link to={"/notice"}>파마스 노블 삽니다</Link>,
                    <Link to={"/notice"}>볼링 치고 싶다</Link>,
                    <Link to={"/notice"}>모든 총기 티켓 필요하신분?</Link>,
                ]);
               <Link to={"/customer"}></Link>
                break;
            case '고객문의':
                setData([
                    <Link to={"/customer"}>게임 시작눌러도 시작을안해요...</Link>,
                    <Link to={"/customer"}>계속 끊김 현상이 발생합니다ㅠㅠ</Link>,
                    <Link to={"/customer"}>핵쟁이 신고합니다!!</Link>,
                    <Link to={"/customer"}>매너등급 조건이 어떻게 되나요?</Link>,
                    <Link to={"/customer"}>캐시로 아이템을 샀는데 잘못샀어요..</Link>,
                ]);
                break;
            case '플리마켓':
                setData([
                    <Link to={"/product"}>전기충격기</Link>,
                    <Link to={"/product"}>Mak-12(IS) Evil 영구제</Link>,
                    <Link to={"/product"}>돌격 기간연장 영구제</Link>,
                    <Link to={"/product"}>[M]AK-47 Noble</Link>,
                    <Link to={"/product"}>조유리 캐릭터</Link>,
                ]);
                break;
            default:
                setData([]);
        }
    };


    

    return (
        <ContentStyle1>
            <div className="inner">
                <div className="con-box">
                    <div className="con1">
                        <h3>SA뉴스</h3> 
                        <button onClick={()=>cp('게시판')}>게시판</button>
                        <button onClick={()=>cp('고객문의')} >고객문의</button>
                        <button onClick={()=>cp('플리마켓')} >플리마켓</button>
                        
                        <ul>
                            {data.map((item, idx) => (
                                <li key={idx}><p>{item}</p></li>
                            ))}
                        </ul>

                       
                    
                    </div>
                    <div className="con2">
                        <div className="con2inner">
                    <h3>GUILLOTINE</h3>
                        </div>
                        <div className="con21">
                        <em>23월17일 </em> <p >총 판결 수</p>
                        </div>
                        <div className="con22">
                            <strong>218</strong><p>건</p>
                        </div>
                        <div className="con23">
                            <em className="con231">유죄</em><p className="con232">87</p>
                            <em className="con233">무죄</em><p className="con234">158</p>
                        </div>
                        <div className="con24">
                            <p>12월 17일(일) 진행된</p>
                            <p><span>218건</span>의 재판중 유죄는 <span>87건</span>으로,</p>
                            <p>전일대비 <span>4건</span> 증가 하였습니다.</p>
                        </div>
                    </div>
                    <div className="con3">
                                <h3>오늘의 피플</h3>
                                <div className="con3pic">
                                    <img src="./images/ca1.png" alt="" />
                                    <img src="./images/ca2.png" alt="" />
                                </div>
                                <div className="con3inner">
                                    <img src="./images/class.png" alt=""/>
                                    <p><span>줌키면다잡음</span> <strong>랭킹 : <span>5,778</span>위</strong></p>
                                </div>
                    </div>
                    <div className="con4">
                                <h3>GM 이야기</h3>
                                <div className="con4all">
                                <div className="con41">
                                    <img src="./images/visual3.jpg" alt="" />
                                    <p><strong>12.21</strong><span> 축복의 가든</span></p>
                                </div>
                                <div className="con42">
                                    <img src="./images/visual4.jpg" alt="" />
                                    <p><strong>12.07</strong><span> 2023 파이널 시즌</span></p>
                                </div>
                                </div>
                    </div>
                </div>
            </div>
        </ContentStyle1>
    );
};

export default Content1;