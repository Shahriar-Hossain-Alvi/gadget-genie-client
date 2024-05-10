import { Helmet } from "react-helmet-async";
import SwiperSlider from "../Shared/SwiperSlider";


const Register = () => {

    return (
        <div>
                <Helmet>
                    <title>Register | Gadget Genie</title>
                </Helmet>

                <div className="flex justify-between gap-6 my-10">

                    <div className="w-2/5">
                        <SwiperSlider></SwiperSlider>
                    </div>


                    <div className="hero w-3/5">
                        <div className="hero-content flex-col lg:flex-row w-full">
                            {/* registration form */}
                            <div className="card w-full  shadow-2xl">
                                <div>
                                    <h1 className="text-5xl font-bold">Sign Up</h1>
                                    <p className="py-6">Create an account with us to manage and book your services easily</p>
                                </div>


                                {/* form starts here */}
                                <form className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input name="name" type="text" placeholder="Enter your name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Photo Url</span>
                                        </label>
                                        <input name="photoUrl" type="text" placeholder="Enter your photo URL" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input name="email" type="email" placeholder="Enter your email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input name="password" type="password" placeholder="Enter your password" className="input input-bordered" required />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Login</button>
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