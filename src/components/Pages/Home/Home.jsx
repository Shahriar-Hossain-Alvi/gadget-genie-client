import { Helmet } from "react-helmet";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Gadget Genie</title>
            </Helmet>
            <h2 className="text-5xl text-red-700">This is home</h2>
            <h2 className="text-5xl text-primaryColor">This is home</h2>
            <h2 className="text-5xl text-secondaryColor">This is home</h2>
        </div>
    );
};

export default Home;