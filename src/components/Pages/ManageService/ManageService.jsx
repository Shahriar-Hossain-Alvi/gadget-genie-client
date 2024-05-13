import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Providers/AuthProvider";
import ManageServiceCard from "./ManageServiceCard";


const ManageService = () => {
    const { loggedInUser } = useContext(AuthContext);
    const [myAddedServices, setMyAddedServices] = useState([]);
    const [spinner, setSpinner] = useState(false);


    useEffect(() => {
        setSpinner(true);
        fetch(`https://gadget-genie-server.vercel.app/myservices?providerEmail=${loggedInUser?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyAddedServices(data);
                setSpinner(false);
            })
    }, [loggedInUser])

    if (spinner) {
        return <div className="flex justify-center mt-40">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }

    return (
        <div>
            <Helmet>
                <title>Manage Service | Gadget Genie</title>
            </Helmet>

            <h1 className="text-center text-4xl font-bold font-montserrat underline mt-5 mb-10">My Added Services</h1>

            <div className="space-y-5">
                {
                    myAddedServices.map(mySingleService => <ManageServiceCard key={mySingleService._id} mySingleService={mySingleService}></ManageServiceCard>)
                }
            </div>
        </div>
    );
};

export default ManageService;