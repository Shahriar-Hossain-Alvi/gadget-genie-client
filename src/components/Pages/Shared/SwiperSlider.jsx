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

//Framer motion
import { useState } from "react";
import { motion } from "framer-motion";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const SwiperSlider = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);

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
                <motion.div
                    initial={false}
                    animate={
                        isLoaded && isInView
                            ?
                            { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                            :
                            { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                    }
                    transition={{ duration: 1, delay: 1 }}
                    viewport={{ once: true }}
                    onViewportEnter={() => setIsInView(true)} className='h-full'
                >
                    <img src={repairImage1} alt="" onLoad={() => setIsLoaded(true)} />
                </motion.div>
            </SwiperSlide>



            <SwiperSlide>
                <motion.div
                    initial={false}
                    animate={
                        isLoaded && isInView
                            ?
                            { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                            :
                            { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                    }
                    transition={{ duration: 1, delay: 1 }}
                    viewport={{ once: true }}
                    onViewportEnter={() => setIsInView(true)} className='h-full'
                >
                    <img src={repairImage2} alt="" onLoad={() => setIsLoaded(true)} />
                </motion.div>
            </SwiperSlide>

            <SwiperSlide>
                <motion.div
                    initial={false}
                    animate={
                        isLoaded && isInView
                            ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                            : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                    }
                    transition={{ duration: 1, delay: 1 }}
                    viewport={{ once: true }}
                    onViewportEnter={() => setIsInView(true)} className='h-full'
                >
                    <img src={repairImage3} alt="" onLoad={() => setIsLoaded(true)} />
                </motion.div>
            </SwiperSlide>

            <SwiperSlide>
                <motion.div
                    initial={false}
                    animate={
                        isLoaded && isInView
                            ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                            : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                    }
                    transition={{ duration: 1, delay: 1 }}
                    viewport={{ once: true }}
                    onViewportEnter={() => setIsInView(true)} className='h-full'
                >
                    <img src={repairImage4} alt="" onLoad={() => setIsLoaded(true)} />
                </motion.div>
            </SwiperSlide>

            <SwiperSlide>
                <motion.div
                    initial={false}
                    animate={
                        isLoaded && isInView
                            ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                            : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                    }
                    transition={{ duration: 1, delay: 1 }}
                    viewport={{ once: true }}
                    onViewportEnter={() => setIsInView(true)} className='h-full'
                >
                    <img src={repairImage5} alt="" onLoad={() => setIsLoaded(true)} />
                </motion.div>
            </SwiperSlide>
        </Swiper>
    );
};

export default SwiperSlider;