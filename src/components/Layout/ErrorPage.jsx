import { Helmet } from "react-helmet-async";
import errorImage from "../../assets/images/errorPage.png";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <Helmet>
                <title>Error 404 | Gadget Genie</title>
            </Helmet>


            <Navbar></Navbar>
            <div className="my-10 flex flex-col items-center gap-5">
                <img className="h-80" src={errorImage} alt="" />

                <Link to="/"><button className="btn bg-thirdColor text-white hover:bg-primaryColor">Go to Home</button></Link>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;