import { useEffect, useState } from "react";
import PopularServicesCard from "./PopularServicesCard";
import { Fade } from "react-awesome-reveal";



const PopularServices = () => {
    const [firstSixServices, setFirstSixServices] = useState([]);

    useEffect(() => {
        fetch('https://gadget-genie-server.vercel.app/firstsixservices')
            .then(res => res.json())
            .then(data => {
                setFirstSixServices(data);
            })
    }, [])

    


    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mx-2 lg:mx-0">
            {/* <Fade> */}
                {
                    firstSixServices.map(service => <PopularServicesCard key={service._id} service={service}></PopularServicesCard>)
                }
            {/* </Fade> */}
        </div>
    );
};

export default PopularServices;