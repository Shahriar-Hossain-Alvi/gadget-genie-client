// import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";


const BookedService = () => {

    // const [myBookedServices, setMyBookedServices] = useState([]);

    // useEffect(()=>{
    //     fetch()
    // }, [])

    return (
        <div>
            <Helmet>
                <title>Booked Service | Gadget Genie</title>
            </Helmet>
            
            <h2>Booked Service</h2>
        </div>
    );
};

export default BookedService;