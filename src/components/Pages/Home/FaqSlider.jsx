// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { MdQuestionAnswer } from 'react-icons/md';
import { Link } from 'react-router-dom';

const FaqSlider = () => {

    return (
        <div className='my-10'>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                navigation={true}
                loop={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="border p-4 rounded-xl absolute mt-7">
                        <div className="bg-primaryColor w-16 h-16 flex items-center justify-center rounded-full absolute -top-6 left-1/2 -translate-x-1/2 z-20">
                            <MdQuestionAnswer className="text-white text-2xl" />
                        </div>

                        <h2 className="text-xl font-bold font-montserrat mb-4 mt-7 text-center">What types of electronic items do you repair?</h2>

                        <h4 className="text-secondaryColor font-medium text-center">We repair a wide range of electronic items including smartphones, tablets, laptops, desktop computers, gaming consoles, and more.</h4>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="border p-4 rounded-xl relative mt-7">
                        <div className="bg-primaryColor w-16 h-16 flex items-center justify-center rounded-full absolute -top-6 left-1/2 -translate-x-1/2">
                            <MdQuestionAnswer className="text-white text-2xl" />
                        </div>
                        <h2 className="text-xl font-bold font-montserrat mb-4 mt-7 text-center">How long does a typical repair take?</h2>

                        <h4 className="text-secondaryColor font-medium text-center">The repair time can vary depending on the complexity of the issue and the availability of parts. However, most repairs are completed within 1-3 business days.</h4>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="border p-4 rounded-xl relative mt-7">
                        <div className="bg-primaryColor w-16 h-16 flex items-center justify-center rounded-full absolute -top-6 left-1/2 -translate-x-1/2">
                            <MdQuestionAnswer className="text-white text-2xl" />
                        </div>
                        <h2 className="text-xl font-bold font-montserrat mb-4 mt-7 text-center">Do you provide a warranty for your repairs?</h2>

                        <h4 className="text-secondaryColor font-medium text-center">Yes, we offer a warranty on our repairs. The length of the warranty varies depending on the type of repair, but typically its 30 days for parts and labor.</h4>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="border p-4 rounded-xl relative mt-7">
                        <div className="bg-primaryColor w-16 h-16 flex items-center justify-center rounded-full absolute -top-6 left-1/2 -translate-x-1/2">
                            <MdQuestionAnswer className="text-white text-2xl" />
                        </div>
                        <h2 className="text-xl font-bold font-montserrat mb-4 mt-7 text-center">What if my device cannot be repaired?</h2>

                        <h4 className="text-secondaryColor font-medium text-center">In rare cases where a device cannot be repaired, we will provide you with alternative solutions, such as data recovery or assistance with device replacement.</h4>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="border p-4 rounded-xl relative mt-7">
                        <div className="bg-primaryColor w-16 h-16 flex items-center justify-center rounded-full absolute -top-6 left-1/2 -translate-x-1/2">
                            <MdQuestionAnswer className="text-white text-2xl" />
                        </div>
                        <h2 className="text-xl font-bold font-montserrat mb-4 mt-7 text-center">How much will the repair cost?</h2>

                        <h4 className="text-secondaryColor font-medium text-center">The cost of the repair depends on the nature of the problem and the specific device. We offer free diagnostic assessments, and once we identify the issue, we will provide you with a transparent quote before proceeding with the repair.</h4>
                    </div>
                </SwiperSlide>

            </Swiper>

            <div className='text-center mt-6'>
                <Link to="/allfaq">
                    <button className="btn bg-primaryColor text-white hover:bg-thirdColor">
                        View All FAQ
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default FaqSlider;