import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const EditDetails = () => {
    const singleService = useLoaderData();
    // console.log(singleService);

    const { _id, serviceName, imgURL, price, providerEmail, description, providerName, serviceArea } = singleService;

    const handleEdit = e => {
        e.preventDefault();
        const form = e.target;
        const serviceName = form.serviceName.value;
        const imgURL = form.imgURL.value;
        const serviceArea = form.serviceArea.value;
        const price = form.price.value;
        const description = form.description.value;

        const updatedService = {
            serviceName, imgURL, serviceArea, price, description, status: 'done'
        }


        Swal.fire({
            title: "Proceed?",
            text: "Check Before Updating",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, approve"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://gadget-genie-server.vercel.app/services/${_id}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(updatedService)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Updated!",
                                text: "Your service information updated successfully.",
                                icon: "success"
                            });
                        }
                    })
            }
        });

    }

    return (
        <div>
            <h2 className="text-3xl text-center font-bold mt-5 font-montserrat underline">Edit and Update Service Info</h2>

            <div className="my-10 max-w-xs md:max-w-2xl mx-auto lg:max-w-6xl">
                <form onSubmit={handleEdit}>
                    {/* service id and name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-5">
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
                            <input name="price" type="text"
                                defaultValue={price}
                                placeholder="price" className="input input-bordered" />
                        </div>
                    </div>

                    {/* description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">description</span>
                        </label>
                        <textarea defaultValue={description} name="description"
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