import { Helmet } from "react-helmet-async";



const Home = () => {
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