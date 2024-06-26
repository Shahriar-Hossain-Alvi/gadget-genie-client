import { Link, NavLink } from "react-router-dom";
import navLogo from "../../../assets/images/navLogo.png"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { LuSun } from "react-icons/lu";
import { MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {

    window.addEventListener('scroll', function () {
        const navbar = document.getElementById('navbar');
        // const content = document.getElementById('content');
        const navbarHeight = navbar.offsetHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition > navbarHeight) {
            navbar.classList.add('fixed', 'top-0');
            navbar.classList.remove('relative');
            // content.style.paddingTop = navbarHeight + 'px'; 
            // Adjust content padding when navbar becomes fixed
        } else {
            navbar.classList.remove('fixed', 'top-0');
            navbar.classList.add('relative');
            // content.style.paddingTop = '0';
        }
    });


    const { loggedInUser, logout, loading } = useContext(AuthContext);
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : "light");

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute('data-theme', localTheme)
    }, [theme]);

    const handleToogleTheme = e => {
        if (e.target.checked) {
            setTheme('dark');
        }
        else {
            setTheme('light');
        }
    }


    const handleLogout = () => {
        logout();
    }


    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/services'>Services</NavLink></li>
        {
            loggedInUser &&
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
        }
    </>

    return (
        <div id="navbar" className="relative z-50 navbar bg-primaryColor">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primaryColor text-white rounded-box w-52">
                        {navLinks}
                        <li>
                            <label className="swap swap-rotate mr-1 md:mr-3 lg:mr-3 md:hidden">

                                {/* this hidden checkbox controls the state */}
                                <input
                                    onChange={handleToogleTheme}
                                    checked={theme === 'light' ? false : true}
                                    type="checkbox" />

                                {/* sun icon */}
                                <LuSun className="swap-on fill-current w-6 h-6 md:w-10 md:h-10 lg:w-10 lg:h-10" />

                                {/* moon icon */}

                                <MdOutlineDarkMode className="swap-off fill-current w-6 h-6 md:w-10 md:h-10 lg:w-10 lg:h-10 text-white" />
                            </label>
                        </li>
                    </ul>
                </div>
                <div className="bg-transparent items-center">
                    <Link to="/" className="flex items-center lg:text-xl text-white font-montserrat">
                        <img className="w-10 h-10 lg:w-12 lg:h-12 rounded-full" src={navLogo} alt="" />
                        Gadget Genie
                    </Link>
                </div>
            </div>


            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white">
                    {navLinks}
                </ul>
            </div>

            {
                loading ?
                    <div className="navbar-end">
                        <label className="swap swap-rotate mr-1 md:mr-3 lg:mr-3">

                            {/* this hidden checkbox controls the state */}
                            <input
                                onChange={handleToogleTheme}
                                checked={theme === 'light' ? false : true}
                                type="checkbox" />

                            {/* sun icon */}
                            <LuSun className="swap-on fill-current w-6 h-6 md:w-10 md:h-10 lg:w-10 lg:h-10" />

                            {/* moon icon */}

                            <MdOutlineDarkMode className="swap-off fill-current w-6 h-6 md:w-10 md:h-10 lg:w-10 lg:h-10 text-white" />
                        </label>
                        <span className="loading loading-spinner text-white"></span>
                    </div>
                    :
                    <div className="navbar-end">
                        <label className="swap swap-rotate mr-1 md:mr-3 lg:mr-3 invisible md:visible lg:visible">

                            {/* this hidden checkbox controls the state */}
                            <input
                                onChange={handleToogleTheme}
                                checked={theme === 'light' ? false : true}
                                type="checkbox" />

                            {/* sun icon */}
                            <LuSun className="swap-on fill-current w-6 h-6 md:w-10 md:h-10 lg:w-10 lg:h-10" />

                            {/* moon icon */}

                            <MdOutlineDarkMode className="swap-off fill-current w-6 h-6 md:w-10 md:h-10 lg:w-10 lg:h-10 text-white" />
                        </label>
                        {
                            loggedInUser ?
                                <div className="flex justify-center items-center gap-1">
                                    <div className="dropdown dropdown-end">
                                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img alt="Tailwind CSS Navbar component" src={loggedInUser?.photoURL} />
                                            </div>
                                        </div>
                                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content rounded-box w-52 text-center bg-primaryColor text-white space-y-2">
                                            <li className="">
                                                {loggedInUser?.displayName}
                                            </li>
                                            <li className=""><NavLink to="/userProfile">Profile</NavLink></li>
                                        </ul>
                                    </div>
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
            }

        </div>
    );
};

export default Navbar;