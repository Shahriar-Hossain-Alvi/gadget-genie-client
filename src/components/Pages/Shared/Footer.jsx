import logo from "../../../assets/images/navLogo.png";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaRegClock, FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaMobileAlt  } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-primaryColor text-white md:grid md:grid-cols-2 lg:flex lg:justify-between">
                <aside>
                    <img className="w-24 h-24" src={logo} alt="" />
                    <p className="font-bold font-montserrat text-2xl">Gadget Genie</p>
                    <p> Providing reliable tech services since 2020</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Main Branch</h6>
                    <p className="flex items-center gap-1"><FaLocationDot className="text-thirdColor" /> 79/A Commercial Area Airport Rd, Dhaka 1229</p>
                    <p className="flex items-center gap-1"><FaPhoneAlt  className="text-thirdColor"/> +027443791</p>
                    <p className="flex items-center gap-1"><FaMobileAlt className="text-thirdColor" /> +8801339827615</p>
                    <p className="flex items-center gap-1"><MdMailOutline className="text-thirdColor" />support@gadgetgenie.com</p>
                </nav>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Opening Hours</h6>
                    <ul className="space-y-1">
                        <li>
                            <div className="flex justify-between gap-10">
                                <h2 className="flex items-center gap-1"><span><FaRegClock className="text-thirdColor" /></span>Saturday</h2>
                                <p>8:00 AM - 9:00 PM</p>
                            </div>
                        </li>
                        <li>
                            <div className="flex justify-between gap-10">
                                <h2 className="flex items-center gap-1"><span><FaRegClock className="text-thirdColor" /></span> Sunday</h2>
                                <p>8:00 AM - 9:00 PM</p>
                            </div>
                        </li>
                        <li>
                            <div className="flex justify-between gap-10">
                                <h2 className="flex items-center gap-1"><span><FaRegClock className="text-thirdColor" /></span> Monday</h2>
                                <p>8:00 AM - 9:00 PM</p>
                            </div>
                        </li>
                        <li>
                            <div className="flex justify-between gap-10">
                                <h2 className="flex items-center gap-1"><span><FaRegClock className="text-thirdColor" /></span>Tuesday</h2>
                                <p>8:00 AM - 9:00 PM</p>
                            </div>
                        </li>
                        <li>
                            <div className="flex justify-between gap-10">
                                <h2 className="flex items-center gap-1"><span><FaRegClock className="text-thirdColor" /></span>Wednesday</h2>
                                <p>8:00 AM - 9:00 PM</p>
                            </div>
                        </li>
                        <li>
                            <div className="flex justify-between gap-10">
                                <h2 className="flex items-center gap-1"><span><FaRegClock className="text-thirdColor" /></span> Thursday</h2>
                                <p>9:00 AM - 4:00 PM</p>
                            </div>
                        </li>
                        <li>
                            <div className="flex justify-between gap-10">
                                <h2 className="flex items-center gap-1"><span><FaRegClock className="text-thirdColor" /></span>Friday</h2>
                                <p>CLOSED</p>
                            </div>
                        </li>
                    </ul>
                </nav>
            </footer>


            {/* copyright section */}
            <footer className="footer items-center p-4 bg-neutral text-neutral-content flex justify-between">
                <aside className="items-center grid-flow-col">
                    <img className="w-10 h-10" src={logo} alt="" />
                    <p>Copyright © 2024 - All right reserved</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <a href="#" className="text-3xl hover:text-thirdColor"><FaFacebook></FaFacebook>
                    </a>
                    <a href="#" className="text-3xl hover:text-thirdColor"><FaLinkedin></FaLinkedin></a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;