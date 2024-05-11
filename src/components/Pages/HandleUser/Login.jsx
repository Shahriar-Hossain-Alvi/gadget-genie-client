import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Lottie from 'react-lottie';
import logInAnimation from "../../../assets/Animation/Animation.json";


const Login = () => {

    //animation controls
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: logInAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };


    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const user = { email, password };
        console.log(user);

        form.reset();
    }

    return (
        <div>
            <Helmet>
                <title>Login | Gadget Genie</title>
            </Helmet>


            <div className="my-8 flex flex-col lg:flex-row items-center justify-center">
                <div className="lg:w-2/5 mb-8 lg:mb-0">
                    <Lottie
                        options={defaultOptions}
                        height={400}
                        width={400}
                    />
                </div>


                <div className="hero lg:w-3/5">
                    <div className="hero-content flex-col lg:flex-row w-full">
                        {/* registration form */}
                        <div className="card w-full  shadow-2xl shadow-primaryColor">
                            <div className="text-center mt-4 mb-4">
                                <h1 className="text-5xl font-bold">Login</h1>
                            </div>

                            {/* <div className="divider divider-error"></div> */}

                            <div className="flex justify-center items-center gap-3 mb-5 text-2xl">
                                Login with <button className="btn btn-circle bg-transparent border-none hover:bg-transparent text-4xl hover:text-5xl">
                                    <FcGoogle />
                                </button>
                            </div>

                            <div className="divider divider-info m-0">OR</div>


                            {/* form starts here */}
                            <form onSubmit={handleLogin} className="card-body pt-0">
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
                                    <input className="btn bg-primaryColor text-white hover:bg-thirdColor" type="submit" value="Login" />
                                </div>
                            </form>

                            <div>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                <p className="mb-4 text-center">Don't have an account? <Link className="text-red-600 hover:underline" to="/register">Register</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;