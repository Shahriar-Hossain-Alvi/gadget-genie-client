import { Helmet } from "react-helmet-async";
import SwiperSlider from "../Shared/SwiperSlider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";


const Register = () => {

    const { createUser, googlePopUpSignIn, loggedInUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;

        //password validation
        if (password.length < 6) {
            toast.error('Password should be at least 6 character');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error('Password should contain at least 1 uppercase character');
            return;
        }
        else if (!/[a-z]/.test(password)) {
            toast.error('Password should contain at least 1 lowercase character');
            return;
        }

        //create new user
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                toast('Profile Created successfully!');
                updateProfile(result.user, {
                    displayName: name, photoURL: photoUrl
                }).then(result => {
                    setTimeout(() => {
                        navigate(location?.state ? location.state : '/');
                    }, 1500)
                    console.log(result.user);
                }).catch((error) => {
                    toast.error(error);
                });
                form.reset();
            })
            .catch(error => {
                toast.error(error.message);
                console.error(error);
            })


    }


    const handleGoogleSignIn = () => {
        if (loggedInUser) {
            toast.error('Already logged in');
        }
        else {
            //sign in user
            googlePopUpSignIn()
                .then(result => {
                    toast('Signed In successfully!');

                    //navigate after login
                    setTimeout(() => {
                        navigate(location?.state ? location.state : '/');
                    }, 1500)
                    console.log(result.user);
                })
                .catch(error => {
                    toast.error(error.message);
                    console.error(error);
                })
        }
    }

    return (
        <div>
            <Helmet>
                <title>Register | Gadget Genie</title>
            </Helmet>

            <div className="flex flex-col-reverse lg:flex-row justify-between gap-6 my-10">

                <ToastContainer></ToastContainer>
                <div className="relative w-full lg:w-2/5">
                    <div className="absolute top-0 left-0 rounded-2xl z-10 opacity-70 bg-black w-full h-full">
                        <div className="max-w-md space-y-5 mx-auto text-center pt-40">
                            <h2 className="text-thirdColor font-montserrat font-black text-3xl">Sign up and try our services.</h2>
                            <p className="text-white  font-montserrat font-black text-3xl">We are the best in the field</p>
                        </div>
                    </div>
                    <SwiperSlider></SwiperSlider>
                </div>


                <div className="hero lg:w-3/5">
                    <div className="hero-content flex-col lg:flex-row w-full">

                        {/* registration form */}
                        <div className="card w-full  shadow-2xl shadow-primaryColor">
                            <div className="flex justify-center items-center gap-3 my-5 text-2xl font-medium font-montserrat">
                                Sign up with <button onClick={handleGoogleSignIn} className="btn btn-circle bg-transparent border-none hover:bg-transparent text-4xl hover:text-5xl">
                                    <FcGoogle />
                                </button>
                            </div>

                            <div className="divider divider-info">OR</div>

                            <div className="text-center mt-4">
                                <h1 className="text-5xl font-bold font-montserrat">Sign Up</h1>
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

                            <div>
                                <p className="mb-4 text-center"><Link className="text-red-600 hover:underline" to="/login">Login</Link> if you already have an account</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Register;