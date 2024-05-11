import { createContext, useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged, } from "firebase/auth";
import app from "../firebase/firebase.config"


export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    //store user info
    const [loggedInUser, setLoggedInUser] = useState(null);

    //set loading icon
    const [loading, setLoading] = useState(true);

    //create user with email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //login user with email and password
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    //google sign in
    const googlePopUpSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }


    //observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setLoggedInUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, [])






    const authInfo = {
        loggedInUser,
        loading,
        createUser,
        signInUser,
        googlePopUpSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}


export default AuthProvider;