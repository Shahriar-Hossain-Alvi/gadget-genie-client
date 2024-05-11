import { Helmet } from "react-helmet-async";
import SwiperSlider from "../Shared/SwiperSlider";


const Register = () => {

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;

        const user = { name, photoUrl, email, password };
        console.log(user);
    }


    return (
        <div>
            <Helmet>
                <title>Register | Gadget Genie</title>
            </Helmet>

            <div className="flex flex-col-reverse lg:flex-row justify-between gap-6 my-10">

                <div className=" w-full lg:w-2/5">
                    <SwiperSlider></SwiperSlider>
                </div>


                <div className="hero lg:w-3/5">
                    <div className="hero-content flex-col lg:flex-row w-full">
                        {/* registration form */}
                        <div className="card w-full  shadow-2xl shadow-primaryColor">
                            <div className="text-center mt-4">
                                <h1 className="text-5xl font-bold">Sign Up</h1>
                                <p className="py-6">Create an account with us to manage and book your services easily</p>
                            </div>


                            {/* form starts here */}
                            <form onSubmit={handleSignUp} className="card-body">
                                <div className="lg:flex lg:gap-2 lg:w-full">
                                    <div className="lg:w-1/2 form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input name="name" type="text" placeholder="Enter your name" className="input input-bordered" required />
                                    </div>
                                    <div className="lg:w-1/2 form-control">
                                        <label className="label">
                                            <span className="label-text">Photo Url</span>
                                        </label>
                                        <input name="photoUrl" type="text" placeholder="Enter your photo URL" className="input input-bordered" required />
                                    </div>
                                </div>
                                <div className="lg:flex lg:gap-2 lg:w-full">
                                    <div className="lg:w-1/2 form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input name="email" type="email" placeholder="Enter your email" className="input input-bordered" required />
                                    </div>
                                    <div className="lg:w-1/2 form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input name="password" type="password" placeholder="Enter your password" className="input input-bordered" required />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn bg-primaryColor text-white hover:bg-thirdColor" type="submit" value="Sign up" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Register;