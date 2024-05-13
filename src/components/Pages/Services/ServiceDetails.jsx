
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const ServiceDetails = () => {
    const service = useLoaderData();
    const { loggedInUser } = useContext(AuthContext);

    const { providerEmail, providerImage, providerName, serviceName, _id, imgURL, description, price, serviceArea } = service;

    const handleBooking = () => {
        console.log('clicked booking btn');
    }

    return (
        <div className="mt-10">
            <Helmet>
                <title>Service Details || Gadget Genie</title>
            </Helmet>
            {/* provider details */}
            <div className="mb-6 border rounded-2xl border-secondaryColor max-w-lg py-4 mx-auto">
                <h2 className="text-center font-medium text-2xl">Details of Service Provider</h2>
                <div className="flex gap-5 items-center justify-center">
                    <img className="w-28 h-28 rounded-full" src={providerImage} alt="" />
                    <div>
                        <h2 className="text-3xl font-bold font-montserrat mb-1">{providerName}</h2>
                        <h4 className="text-xl font-medium text-secondaryColor">{providerEmail}</h4>
                    </div>
                </div>
                <h2 className="text-center mt-5 text-2xl font-semibold ">Service Area: {serviceArea}</h2>
            </div>

            <h2 className="text-4xl font-bold text-primaryColor text-center mb-5 mt-8">Service Details</h2>

            {/* single service setion */}
            <div className="grid grid-cols-2 items-center mb-8 gap-5">
                <div>
                    <img className="w-full h-80 rounded-2xl" src={imgURL} alt="" />
                </div>

                <div>
                    <h2 className="font-bold font-montserrat text-4xl mb-5">{serviceName}</h2>

                    <p className="font-medium text-lg text-secondaryColor mb-5">{description}</p>

                    <div className="flex justify-between items-center">
                        <h3 className="text-xl text-thirdColor font-bold font-montserrat">Price: Starts from <span className="italic text-3xl">${price}</span> only</h3>

                        <button onClick={() => document.getElementById('my_modal_1').showModal()} className="btn bg-thirdColor text-white hover:bg-primaryColor">Book Now</button>
                    </div>
                </div>
            </div>

            {/* MODAL */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-center text-2xl text-thirdColor underline font-montserrat">Book Now!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* service id and name */}
                            <div className="grid grid-cols-2 gap-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Service ID</span>
                                    </label>
                                    <input name="serviceId" type="text"
                                        defaultValue={_id} placeholder='service id' className="input input-bordered " required readOnly />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Service Name</span>
                                    </label>
                                    <input name="serviceName" type="text"
                                        defaultValue={serviceName} placeholder="Enter your service name" className="input input-bordered" required readOnly />
                                </div>
                            </div>



                            {/* service img and provider email */}
                            <div className="grid grid-cols-2 gap-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Service Image</span>
                                    </label>
                                    <input name="imgURL" type="text" defaultValue={imgURL} placeholder="Enter the price of the service" className="input input-bordered" required readOnly />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Provider Email</span>
                                    </label>
                                    <input name="providerEmail" type="text" placeholder="provider email"
                                        defaultValue={providerEmail} className="input input-bordered" required readOnly />
                                </div>
                            </div>



                            {/* current user email and name */}
                            <div className="grid grid-cols-2 gap-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Current User Email</span>
                                    </label>
                                    <input name="loggedInUserEmail" type="text" defaultValue={loggedInUser?.email} placeholder="Current user email" className="input input-bordered" required readOnly />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Current User Name</span>
                                    </label>
                                    <input name="loggedInUserName" type="text" placeholder="provider email"
                                        defaultValue={loggedInUser?.displayName} className="input input-bordered" required readOnly />
                                </div>
                            </div>


                            {/* service taking date and price */}
                            <div className="grid grid-cols-2 gap-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Pick a date for servicing</span>
                                    </label>
                                    <input  name="serviceDate" type="date" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input name="price" type="text" placeholder="price"
                                        defaultValue={price} className="input input-bordered" required readOnly />
                                </div>
                            </div>


                            {/* special instruction */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Special Instruction</span>
                                </label>
                                <textarea name="instruction"
                                    className="textarea textarea-bordered" placeholder="Enter your if you have any instruction. Anything like address , area, customized service plan."></textarea>
                            </div>

                            <div className="flex justify-center items-center mt-5 gap-5">
                                <button onClick={handleBooking} className="btn bg-thirdColor text-white hover:bg-primaryColor">Purchase</button>

                                <button className="btn btn-error text-white">Close</button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default ServiceDetails;