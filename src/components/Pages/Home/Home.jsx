import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Providers/AuthProvider";



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
                <h2 className="text-5xl text-red-700">This is home</h2>
                <h2 className="text-5xl text-primaryColor">This is home</h2>
                <h2 className="text-5xl text-secondaryColor">This is home</h2>
            </div>
        </div>
    );
};

export default Home;