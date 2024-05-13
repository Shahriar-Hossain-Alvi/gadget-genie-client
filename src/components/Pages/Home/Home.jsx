/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Providers/AuthProvider";
import FaqSlider from "./FaqSlider";
import Banner from "./Banner"
import PopularServices from "./PopularServices/PopularServices";
import { Link } from "react-router-dom";
import DevicesFixed from "./DevicesFixed";



const Home = () => {
    const { loading } = useContext(AuthContext);

    if (loading) {
        return <div className="flex justify-center mt-40">
            <span className="loading loading-spinner text-primaryColor"></span>
        </div>
    }


    return (
        <div>
            <Helmet>
                <title>Home | Gadget Genie</title>
            </Helmet>

            <div>
                {/* banner */}
                <div className="my-4 grid grid-cols-2 gap-4 overflow-hidden">
                    <div className="flex flex-col justify-center">
                        <h2 className="font-bold font-montserrat text-5xl">Don't Trash It, Fix It! <span className="text-thirdColor italic underline">Gadget Genie</span> to the Rescue!</h2>
                        <p className="text-xl mt-3 font-medium">We breathe new life into your electronics. Expert repairs, affordable prices.</p>
                    </div>
                    <Banner></Banner>
                </div>

                {/* fixed devices counter */}
                <div className="my-10">
                    <DevicesFixed></DevicesFixed>
                </div>

                {/* popular services */}
                <div className="my-20">
                    <h2 className="text-4xl font-bold text-center font-montserrat mb-3">Popular Services</h2>
                    <p className="text-center font-medium text-lg text-secondaryColor mb-8 max-w-md mx-auto">Here are some popular services of us. Scroll down and hit show all to see all the services we provide</p>
                    <PopularServices></PopularServices>

                    <div className="text-center mt-6">
                        <Link to='/services'>
                            <button className="btn bg-thirdColor text-white hover:bg-primaryColor btn-wide text-lg">Show All</button>
                        </Link>
                    </div>
                </div>

                {/* faq */}
                <div>
                    <h2 className="text-3xl font-bold text-center font-montserrat">FAQ</h2>
                    <FaqSlider></FaqSlider>
                </div>
            </div>
        </div>
    );
};

export default Home;