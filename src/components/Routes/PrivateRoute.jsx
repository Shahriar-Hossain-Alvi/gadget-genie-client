import PropTypes from 'prop-types';
import { useContext } from "react"
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import loadingAnimation from "../../assets/Animation/loading.json";
import Lottie from 'react-lottie';

const PrivateRoute = ({ children }) => {

    const { loggedInUser, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="flex justify-center mt-40">
            <Lottie
                options={loadingAnimation}
                height={400}
                width={400}
            />
        </div>
    }

    if (loggedInUser) {
        return children;
    }

    return (
        <Navigate state={location.pathname} to="/login"></Navigate>
    );
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
}

export default PrivateRoute;