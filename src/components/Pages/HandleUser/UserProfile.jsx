import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import wave2 from "../../../assets/wave2.svg";
import { Helmet } from "react-helmet-async";

const UserProfile = () => {
    const { loggedInUser } = useContext(AuthContext);

    
    return (
        <div className="text-center my-10">
            <Helmet>
                <title>Profile || Gadget Genie</title>
            </Helmet>

            <h2 className="text-5xl font-montserrat font-bold mb-16">Profile</h2>

            <div className="border p-10 rounded-2xl shadow-2xl shadow-thirdColor relative max-w-xl mx-auto">
                <div className="absolute -top-9 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full">
                    <img className="rounded-full w-20 h-20
                    " src={loggedInUser?.photoURL} alt="" />
                </div>


                <div className="absolute left-0 top-0 w-full -z-30 rounded-t-2xl">
                    <img className="rounded-t-2xl" src={wave2} alt="" />
                </div>


                <div className="mt-4">
                    <h2 className="bg-gradient-to-b from-thirdColor to-primaryColor font-medium text-lg bg-clip-text text-transparent">Name: {loggedInUser?.displayName}</h2>
                    <h3 className="bg-gradient-to-b from-thirdColor to-primaryColor font-medium text-lg bg-clip-text text-transparent">Email: {loggedInUser?.email}</h3>

                    <h4 className="bg-gradient-to-b from-thirdColor to-primaryColor font-medium text-lg bg-clip-text text-transparent">Verified: {loggedInUser?.emailVerified == true ? 'Yes' : 'No'}</h4>

                    <h4 className="bg-gradient-to-b from-thirdColor to-primaryColor font-medium text-lg bg-clip-text text-transparent">Profile Created: {loggedInUser?.metadata.creationTime}</h4>

                    <h4 className="bg-gradient-to-b from-thirdColor to-primaryColor font-medium text-lg bg-clip-text text-transparent">Last Login: {loggedInUser?.metadata.lastSignInTime}</h4>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;