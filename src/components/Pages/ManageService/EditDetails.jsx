import { useLoaderData } from "react-router-dom";


const EditDetails = () => {
    const singleService = useLoaderData();
    console.log(singleService);

    const { _id, serviceName, imgURL, price, providerEmail, description, providerName, serviceArea } = singleService;

    return (
        <div>
            <h2 className="text-3xl text-center font-bold mt-5 font-montserrat underline">Edit and Update Service Info</h2>


            <div className="my-10">
                <form>
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
                                defaultValue={serviceName} placeholder="Enter your service name" className="input input-bordered" required />
                        </div>
                    </div>



                    {/* service img  */}
                    <div className="grid grid-cols-2 gap-5">
                        <div className="form-control col-span-2">
                            <label className="label">
                                <span className="label-text">Service Image</span>
                            </label>
                            <input name="imgURL" type="text" defaultValue={imgURL} placeholder="Enter the image url of the service" className="input input-bordered" required />
                        </div>
                    </div>


                    {/* service area and price */}
                    <div className="grid grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Area</span>
                            </label>
                            <input name="serviceArea" type="text" defaultValue={serviceArea} className="input input-bordered" placeholder="Service area" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input name="price" type="text" placeholder="price"
                                defaultValue={price} className="input input-bordered" required />
                        </div>
                    </div>

                    {/* description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">description</span>
                        </label>
                        <textarea name="description"
                            className="textarea textarea-bordered" placeholder="Write the details of your service"></textarea>
                    </div>

                    {/* provider name and email */}
                    <div className="grid grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Provider Name</span>
                            </label>
                            <input name="providerName" type="text" defaultValue={providerName} placeholder="Current user email" className="input input-bordered" required readOnly />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Provider Email</span>
                            </label>
                            <input name="providerEmail" type="text" placeholder="provider email"
                                defaultValue={providerEmail} className="input input-bordered" required readOnly />
                        </div>
                    </div>

                    <div className="flex justify-center items-center mt-5 gap-5">
                        <input className="btn bg-thirdColor text-white hover:bg-primaryColor" type="submit" value="Update" required />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditDetails;