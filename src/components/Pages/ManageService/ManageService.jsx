import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Providers/AuthProvider";
import ManageServiceCard from "./ManageServiceCard";
import Swal from "sweetalert2";


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


    //delete a service
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://gadget-genie-server.vercel.app/services/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = myAddedServices.filter(mySingleAddedService => mySingleAddedService._id !== id);
                            setMyAddedServices(remaining);
                        }
                    })
            }
        });
    }

    return (
        <div>
            <Helmet>
                <title>Manage Service | Gadget Genie</title>
            </Helmet>

            <h1 className="text-center text-3xl md:text-4xl lg:text-4xl font-bold font-montserrat underline mt-5 mb-10">Manage Services</h1>

            {
                myAddedServices.length === 0 && 
                <p className="text-center font-medium text-2xl mb-8"> You have not added any services</p>
            }

            <div className="space-y-5 mb-10 mx-2 lg:mx-0">
                {
                    myAddedServices.map(mySingleService => <ManageServiceCard
                        key={mySingleService._id}
                        mySingleService={mySingleService}
                        handleDelete={handleDelete}
                    ></ManageServiceCard>)
                }
            </div>
        </div>
    );
};

export default ManageService;