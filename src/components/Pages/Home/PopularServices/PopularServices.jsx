import { useEffect, useState } from "react";
import PopularServicesCard from "./PopularServicesCard";


const PopularServices = () => {
    const [firstSixServices, setFirstSixServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/firstsixservices')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setFirstSixServices(data);
            })
    }, [])

    console.log(firstSixServices);

    return (
        <div className="grid grid-cols-2 gap-5">
            {
                firstSixServices.map(service=><PopularServicesCard key={service._id} service={service}></PopularServicesCard>)
            }
        </div>
    );
};

export default PopularServices;