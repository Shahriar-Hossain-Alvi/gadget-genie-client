import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Providers/AuthProvider";
import FaqSlider from "./FaqSlider";



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
                <h2 className="text-5xl text-red-700">This is banner</h2>
                <h2 className="text-5xl text-primaryColor">This is popular services</h2>

                <div>
                    <h2 className="text-3xl font-bold text-center font-montserrat">FAQ</h2>
                    <FaqSlider></FaqSlider>
                </div>
            </div>
        </div>
    );
};

export default Home;