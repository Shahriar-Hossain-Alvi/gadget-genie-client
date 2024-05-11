import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const UserProfile = () => {
    const {loggedInUser} = useContext(AuthContext);

    return (
        <div className="text-center my-10">
            <h2 className="text-2xl font-bold mb-7">Profile</h2>

            <div className="border p-10 rounded-2xl shadow-2xl relative">
                <div className="absolute top-0 w-20 h-20">
                    <img className="rounded-full w-full
                    " src={loggedInUser? loggedInUser.photoURL : ''} alt="" />
                </div>
                <div>
                    <h2>Name: {loggedInUser? loggedInUser.displayName : ''}</h2>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;