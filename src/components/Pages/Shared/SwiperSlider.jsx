//swiper slider
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiperStyle.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import repairImage1 from "../../../assets/images/repair1.webp";
import repairImage2 from "../../../assets/images/repair2.jpg";
import repairImage3 from "../../../assets/images/repair3.png";
import repairImage4 from "../../../assets/images/repair4.jpg";
import repairImage5 from "../../../assets/images/repair5.jpg";

const SwiperSlider = () => {

    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: false,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper rounded-2xl"
        >
            <SwiperSlide>
                <img src={repairImage1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={repairImage2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={repairImage3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={repairImage4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={repairImage5} alt="" />
            </SwiperSlide>
        </Swiper>
    );
};

export default SwiperSlider;