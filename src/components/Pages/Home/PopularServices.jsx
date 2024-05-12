import { useEffect, useState } from "react";


const PopularServices = () => {
    const [services, setServices] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }, [])

    return (
        <div>

        </div>
    );
};

export default PopularServices;