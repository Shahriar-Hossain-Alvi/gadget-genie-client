import img1 from "../../../assets/images/beforeAndAfter.jpg";
import img2 from "../../../assets/images/gamingConsoleFix.jpg";
import img3 from "../../../assets/images/replaceScreens.jpg";
import img4 from "../../../assets/images/techniciansAtWork.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Banner = () => {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0
        // responsive: [
        //     {
        //         breakpoint: 1024,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1,
        //             infinite: true,
        //             dots: true
        //         }
        //     },
        //     {
        //         breakpoint: 600,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1,
        //             initialSlide: 0
        //         }
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1
        //         }
        //     }
        // ]
    };


    return (
        <div className="slider-container h-96 w-full">
            <Slider {...settings}>
                <div className="relative rounded-2xl">
                    <img className="h-96 w-full rounded-2xl" src={img1} alt="" />
                    <div className="absolute top-0 left-0 bg-black w-full h-full opacity-50 rounded-2xl">
                        <h2 className="text-3xl font-bold text-white p-2">Before and After Repair</h2>
                    </div>
                </div>

                <div className="relative rounded-2xl">
                    <img className="h-96 w-full rounded-2xl" src={img2} alt="" />
                    <div className="absolute top-0 left-0 bg-black w-full h-full opacity-50 rounded-2xl">
                        <h2 className="text-3xl font-bold text-white p-2">We fix gaming console</h2>
                    </div>
                </div>

                <div className="relative rounded-2xl">
                    <img className="h-96 w-full rounded-2xl" src={img3} alt="" />
                    <div className="absolute top-0 left-0 bg-black w-full h-full opacity-50 rounded-2xl">
                        <h2 className="text-3xl font-bold text-white p-2">We replace batteries and screens</h2>
                    </div>
                </div>

                <div className="relative rounded-2xl">
                    <img className="h-96 rounded-2xl w-full" src={img4} alt="" />
                    <div className="absolute top-0 left-0 bg-black w-full h-full opacity-50 rounded-2xl">
                        <h2 className="text-3xl font-bold text-white p-2">Our technician at work</h2>
                    </div>
                </div>
            </Slider>
        </div>

    );
};

export default Banner;