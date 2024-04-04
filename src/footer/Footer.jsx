import { FooterWrap } from "./FooterStyle";

 
const Footer = () => {
    return (
        <FooterWrap>
            <div className="inner">
            <ul className="innertop">
                    <li>회사소개</li>
                    <li>채용안내</li>
                    <li>제휴문의</li>
                    <li>이용자약관</li>
                    <li>게임이용등급안내</li>
                    <li style={{fontWeight:500}}>개인정보처리방침</li>
                    <li>청소년 보호정책</li>
                    <li>운영정책</li>
                    <li>넥슨PC방</li>
                    <li>게임시간선택제</li>
                </ul>
                <div className="innermiddle">
                    <p>(주)넥슨코리아 대표이사 이정헌</p>
                    <p> 경기도 성남시 분당구 판교로256번길7</p>
                    <p>전화 : 1588-7701</p>
                    <p>팩스 : 0502-258-8322</p>
                </div>
                <div className="innerbottom">
                    <p>E-mail : contact-us@nexon.co.kr</p>
                    <p>사업자등록번호 : 220-87-17483호</p>
                    <p>통신판매업 신고번호 : 제2013-경기성남-1659호</p>
                    <p className="bottomp">사업자정보확인</p>
                </div>
                <div className="innerlast">C NEXON Korea Corporation & NEXON Games Co, Ltd. All Rights Reserved.</div>
                <div className="innerimg">
                    <img src="./images/footer5.png" alt="" />
                    <img src="./images/footer6.png" alt="" />
                </div>  
            </div>
        </FooterWrap>
    );
};

export default Footer;