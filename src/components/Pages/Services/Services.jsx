import { Helmet } from "react-helmet-async";
import ServiceCard from "./ServiceCard";
import { Fade } from "react-awesome-reveal";
import { useEffect, useState } from "react";

const Services = () => {
    const [spinner, setSpinner] = useState(false);
    const [services, setServices] = useState([]);

    useEffect(() => {
        setSpinner(true);
        fetch('https://gadget-genie-server.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setSpinner(false);
            })
    }, [])

    if (spinner) {
        return <div className="flex justify-center mt-40">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }


    return (
        <div className="mt-8 mb-10">
            <Helmet>
                <title>Services | Gadget Genie</title>
            </Helmet>
            <div>
                <h2 className="text-center font-bold text-4xl font-montserrat underline mt-5">All Services</h2>
                <p className="text-center text-lg font-medium mt-3 mb-10">Discover all the services we provide here</p>


                <div className="space-y-4">
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