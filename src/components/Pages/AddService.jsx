import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Providers/AuthProvider";


const AddService = () => {
    const { loggedInUser } = useContext(AuthContext);

    const handleAddService = e => {
        e.preventDefault();
        const form = e.target;
        const imgURL = form.imgURL.value;
        const serviceName = form.serviceName.value;
        const price = form.price.value;
        const serviceArea = form.serviceArea.value;
        const description = form.description.value;
        const providerEmail = loggedInUser?.email;
        const providerName = loggedInUser?.displayName;
        const providerImage = loggedInUser?.photoURL;

        const serviceDetails = {
            imgURL, serviceArea, serviceName, price, description, providerEmail, providerImage, providerName
        }

        console.log(serviceDetails);

    }

    return (
        <div>
            <Helmet>
                <title>Add Service | Gadget Genie</title>
            </Helmet>
            <div>
                <h2 className="text-center text-3xl font-bold font-montserrat mt-5">Add Service</h2>
                <p className="text-center mt-2 font-medium text-lg text-secondaryColor">Use the form to add a new service</p>

                <div className="hero">
                    <div className="hero-content pt-0 w-full">
                        <div className="card shrink-0 w-full">

                            <form onSubmit={handleAddService} className="card-body w-full">
                                {/* service image and name */}
                                <div className="grid grid-cols-2 gap-5">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Image url of the service</span>
                                        </label>
                                        <input name="imgURL" type="text" placeholder="Enter the image url of the service" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Service Name</span>
                                        </label>
                                        <input name="serviceName" type="text" placeholder="Enter your service name" className="input input-bordered" required />
                                    </div>
                                </div>

                                {/* service price and area */}
                                <div className="grid grid-cols-2 gap-5">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input name="price" type="text" placeholder="Enter the price of the service" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Service Area</span>
                                        </label>
                                        <input name="serviceArea" type="text" placeholder="Enter your service area" className="input input-bordered" required />
                                    </div>
                                </div>

                                {/* description */}
                                <div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Service Description</span>
                                        </label>
                                        <textarea name="description"
                                            className="textarea textarea-bordered" placeholder="Enter your service description briefly" required></textarea>
                                    </div>
                                </div>


                                {/* service provider information */}
                                <div className="grid grid-cols-3 gap-3">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Provider</span>
                                        </label>
                                        <input name="providerName" type="text" placeholder={loggedInUser?.displayName} className="input input-bordered" disabled required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Provider email</span>
                                        </label>
                                        <input type="text" placeholder={loggedInUser?.email} className="input input-bordered font-bold" disabled required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Provider image</span>
                                        </label>
                                        <input type="text" placeholder={loggedInUser?.photoURL} className="input input-bordered" disabled required />
                                    </div>
                                </div>



                                <div className="form-control mt-6">
                                    <input className="btn bg-primaryColor text-white hover:bg-thirdColor" type="submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;