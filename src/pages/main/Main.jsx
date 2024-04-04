import { MainWrap, VisualWrap } from "./MainStyle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Content1 from "../../components/main/Content1";
import Content2 from "../../components/main/Content2";


 

const Main = () => {
    return (
        <>

            <VisualWrap>
            <Swiper
      modules={[Autoplay]}
      spaceBetween={0}
      slidesPerView={1}  // 이미지 보여주는 갯수
    //   onSlideChange={() => console.log('slide change')}
    //   onSwiper={(swiper) => console.log(swiper)}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}>
      <SwiperSlide><img src="./images/visual1.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./images/visual2.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./images/visual3.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./images/visual4.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./images/visual5.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./images/visual6.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./images/visual7.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./images/visual9.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./images/visual10.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./images/visual11.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./images/visual12.jpg" alt="" /></SwiperSlide>
      
    </Swiper>
            
            </VisualWrap>



            <MainWrap >
                <Content1/>
                <Content2/>
            </MainWrap>

            
        </>
    );
};

export default Main;