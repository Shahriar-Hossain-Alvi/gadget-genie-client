import PropTypes from 'prop-types';
import { useContext } from "react"
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {

    const { loggedInUser, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="flex justify-center mt-40">
            <span className="loading loading-spinner text-primaryColor"></span>
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