import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Providers/AuthProvider";
import BookedServicesCard from "./BookedServicesCard";


const BookedService = () => {
    const { loggedInUser } = useContext(AuthContext);
    const loggedInUserEmail = loggedInUser?.email;

    const [myBookedServices, setMyBookedServices] = useState([]);

    useEffect(() => {
        fetch(`https://gadget-genie-server.vercel.app/bookings?loggedUserEmail=${loggedInUserEmail}`)
            .then(res => res.json())
            .then(data => {
                setMyBookedServices(data);
            })
    }, [loggedInUserEmail])


    return (
        <div>
            <Helmet>
                <title>Booked Service | Gadget Genie</title>
            </Helmet>

            <h2 className="text-3xl text-center font-bold underline font-montserrat my-10">Booked Services</h2>

            <div>
                {
                    myBookedServices.length === 0 ?
                        <div>
                            <h2 className="text-center font-medium text-2xl mb-8">You do not have any booked Services</h2>
                        </div>
                        :
                        <div>
                            <h2 className="text-center font-medium text-2xl mb-8">You have booked {myBookedServices.length} services</h2>

                            <div>
                                <div className="overflow-x-auto">
                                    <table className="table">
                                        {/* head */}
                                        <thead>
                                            <tr>
                                                <th>Service Image</th>
                                                <th>Instruction</th>
                                                <th>Date</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                myBookedServices.map(myBookedService => <BookedServicesCard key={myBookedService._id} myBookedService={myBookedService}></BookedServicesCard>)
                                            }
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                }
            </div>
        </div>
    );
};

export default BookedService;