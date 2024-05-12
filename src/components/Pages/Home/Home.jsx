/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Providers/AuthProvider";
import FaqSlider from "./FaqSlider";
import Banner from "./Banner"
import PopularServices from "./PopularServices";




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
                <div className="my-4 grid grid-cols-2 gap-5">
                    <div className="flex flex-col justify-center">
                        <h2 className="font-bold font-montserrat text-5xl">Don't Trash It, Fix It! <span className="text-thirdColor italic underline">Gadget Genie</span> to the Rescue!</h2>
                        <p className="text-xl mt-3 font-medium">We breathe new life into your electronics. Expert repairs, affordable prices.</p>
                    </div>
                    <Banner></Banner>
                </div>

                <div className="my-4">
                    <h2 className="text-3xl font-bold text-center font-montserrat">Popular Services</h2>
                    <PopularServices></PopularServices>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-center font-montserrat">FAQ</h2>
                    <FaqSlider></FaqSlider>
                </div>
            </div>
        </div>
    );
};

export default Home;