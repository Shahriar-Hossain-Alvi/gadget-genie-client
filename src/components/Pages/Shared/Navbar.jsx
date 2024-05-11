import { Link, NavLink } from "react-router-dom";
import navLogo from "../../../assets/images/navLogo.png"
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
    const { loggedInUser, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    }




    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/services'>Services</NavLink></li>
        <li>
            <details>
                <summary className="hover:bg-secondaryColor">Dashboard</summary>
                <ul className="p-2 bg-primaryColor">
                    <li><NavLink to="/addService">Add Service</NavLink></li>
                    <li><NavLink to="/manageService">Manage Service</NavLink></li>
                    <li><NavLink to="/bookedService">Booked Service</NavLink></li>
                    <li><NavLink to="/todoService">Service To-Do</NavLink></li>
                </ul>
            </details>
        </li>
    </>

    return (
        <div id="navbar" className="navbar bg-primaryColor">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primaryColor text-white rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div className="flex btn btn-ghost items-center">
                    <img className="w-12 h-12 rounded-full" src={navLogo} alt="" />
                    <a className="text-xl text-white font-montserrat">Gadget Genie</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    loggedInUser ?
                        <div>
                            <button onClick={handleLogout} className="btn">Logout</button>
                        </div>
                        :
                        <div>
                            <Link to='/login'>
                                <button className="btn">Login</button>
                            </Link>
                        </div>
                }



            </div>
        </div>
    );
};

export default Navbar;