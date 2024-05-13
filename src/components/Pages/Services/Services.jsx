import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import { Fade } from "react-awesome-reveal";

const Services = () => {
    const services = useLoaderData();

    return (
        <div className="mt-8">
            <Helmet>
                <title>Services | Gadget Genie</title>
            </Helmet>
            <div>
                <h2 className="text-center font-bold text-4xl font-montserrat underline">All Services</h2>
                <p className="text-center text-lg font-medium mt-3 mb-10">Discover all the services we provide here</p>


                <div className=" space-y-4">
                    <Fade>
                        {
                            services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                        }
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Services;