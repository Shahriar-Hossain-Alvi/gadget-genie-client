import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";


const ServiceDetails = () => {
    const service = useLoaderData();

    const { providerEmail, providerImage, providerName, serviceName, _id, imgURL, description, price, serviceArea } = service;

    return (
        <div className="mt-10">
            <Helmet>
                <title>Service Details || Gadget Genie</title>
            </Helmet>
            {/* provider details */}
            <div className="mb-6 border rounded-2xl border-secondaryColor max-w-lg py-4 mx-auto">
                <h2 className="text-center font-medium text-2xl">Details of Service Provider</h2>
                <div className="flex gap-5 items-center justify-center">
                    <img className="w-28 h-28 rounded-full" src={providerImage} alt="" />
                    <div>
                        <h2 className="text-3xl font-bold font-montserrat mb-1">{providerName}</h2>
                        <h4 className="text-xl font-medium text-secondaryColor">{providerEmail}</h4>
                    </div>
                </div>
                <h2 className="text-center mt-5 text-2xl font-semibold ">Service Area: {serviceArea}</h2>
            </div>

            <h2 className="text-4xl font-bold text-primaryColor text-center mb-5 mt-8">Service Details</h2>

            {/* single service setion */}
            <div className="grid grid-cols-2 items-center mb-8 gap-5">
                <div>
                    <img className="w-full h-80 rounded-2xl" src={imgURL} alt="" />
                </div>

                <div>
                    <h2 className="font-bold font-montserrat text-4xl mb-5">{serviceName}</h2>

                    <p className="font-medium text-lg text-secondaryColor mb-5">{description}</p>

                    <div className="flex justify-between items-center">
                        <h3 className="text-xl text-thirdColor font-bold font-montserrat">Price: Starts from <span className="italic text-3xl">${price}</span> only</h3>
                        <Link to={`/bookservice/${_id}`}>
                            <button className="btn bg-thirdColor text-white hover:bg-primaryColor">Book Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;