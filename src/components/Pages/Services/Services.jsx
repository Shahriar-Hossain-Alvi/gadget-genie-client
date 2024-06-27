import { Helmet } from "react-helmet-async";
import ServiceCard from "./ServiceCard";
import { Fade } from "react-awesome-reveal";
import { useEffect, useState } from "react";

const Services = () => {
    // const [spinner, setSpinner] = useState(false);
    const [services, setServices] = useState([]);
    const [searchedText, setSearchedText] = useState('');

    useEffect(() => {
        fetch(`https://gadget-genie-server.vercel.app/services?search=${searchedText}`)
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, [searchedText])

    if (services.length === 0) {
        return <div className="flex justify-center mt-40">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }

    const handleSearch = e => {
        e.preventDefault();
        const getSearchedText = e.target.search.value;
        console.log(getSearchedText);
        setSearchedText(getSearchedText)
    }

    return (
        <div className="mt-8 mb-10">
            <Helmet>
                <title>Services | Gadget Genie</title>
            </Helmet>
            <div>
                <h2 className="text-center font-bold text-4xl font-montserrat underline mt-5">All Services</h2>
                <p className="text-center text-lg font-medium mt-3 mb-10">Discover all the services we provide here</p>

                <form onSubmit={handleSearch} className="flex items-center justify-center gap-3 mb-10">
                    <h2>Search by name</h2>
                    <input name="search" type="text" className="bg-transparent border rounded-xl border-thirdColor px-2 py-1" />

                    <input type="submit" value="Search" className="btn bg-thirdColor text-white hover:bg-primaryColor" />
                </form>

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