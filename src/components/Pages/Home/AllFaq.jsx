import { Helmet } from "react-helmet-async";
import { MdQuestionAnswer } from "react-icons/md";

const Faq = () => {
    return (
        <div>
            <Helmet>
                <title>
                    FAQs || Gadget Genie
                </title>
            </Helmet> 
            <h2 className="text-3xl font-bold text-center mt-6">Frequently Asked Questions</h2>

            <div className="grid grid-cols-1 mx-2 lg:mx-0 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 mb-10 space-y-5">

                <div className="border p-4 rounded-xl relative">
                    <div className="bg-primaryColor w-16 h-16 flex items-center justify-center rounded-full absolute -top-6 left-1/2 -translate-x-1/2 ">
                        <MdQuestionAnswer className="text-white text-2xl" />
                    </div>

                    <h2 className="text-xl font-bold font-montserrat mb-4 mt-7 text-center">What types of electronic items do you repair?</h2>

                    <h4 className="text-secondaryColor font-medium text-center">We repair a wide range of electronic items including smartphones, tablets, laptops, desktop computers, gaming consoles, and more.</h4>
                </div>

                <div className="border p-4 rounded-xl relative">
                    <div className="bg-primaryColor w-16 h-16 flex items-center justify-center rounded-full absolute -top-6 left-1/2 -translate-x-1/2">
                        <MdQuestionAnswer className="text-white text-2xl" />
                    </div>
                    <h2 className="text-xl font-bold font-montserrat mb-4 mt-7 text-center">How long does a typical repair take?</h2>

                    <h4 className="text-secondaryColor font-medium text-center">The repair time can vary depending on the complexity of the issue and the availability of parts. However, most repairs are completed within 1-3 business days.</h4>
                </div>

                <div className="border p-4 rounded-xl relative">
                    <div className="bg-primaryColor w-16 h-16 flex items-center justify-center rounded-full absolute -top-6 left-1/2 -translate-x-1/2">
                        <MdQuestionAnswer className="text-white text-2xl" />
                    </div>
                    <h2 className="text-xl font-bold font-montserrat mb-4 mt-7 text-center">Do you provide a warranty for your repairs?</h2>

                    <h4 className="text-secondaryColor font-medium text-center">Yes, we offer a warranty on our repairs. The length of the warranty varies depending on the type of repair, but typically its 30 days for parts and labor.</h4>
                </div>

                <div className="border p-4 rounded-xl relative">
                    <div className="bg-primaryColor w-16 h-16 flex items-center justify-center rounded-full absolute -top-6 left-1/2 -translate-x-1/2">
                        <MdQuestionAnswer className="text-white text-2xl" />
                    </div>
                    <h2 className="text-xl font-bold font-montserrat mb-4 mt-7 text-center">What if my device cannot be repaired?</h2>

                    <h4 className="text-secondaryColor font-medium text-center">In rare cases where a device cannot be repaired, we will provide you with alternative solutions, such as data recovery or assistance with device replacement.</h4>
                </div>

                <div className="border p-4 rounded-xl relative">
                    <div className="bg-primaryColor w-16 h-16 flex items-center justify-center rounded-full absolute -top-6 left-1/2 -translate-x-1/2">
                        <MdQuestionAnswer className="text-white text-2xl" />
                    </div>
                    <h2 className="text-xl font-bold font-montserrat mb-4 mt-7 text-center">How much will the repair cost?</h2>

                    <h4 className="text-secondaryColor font-medium text-center">The cost of the repair depends on the nature of the problem and the specific device. We offer free diagnostic assessments, and once we identify the issue, we will provide you with a transparent quote before proceeding with the repair.</h4>
                </div>

                <div className="border p-4 rounded-xl relative">
                    <div className="bg-primaryColor w-16 h-16 flex items-center justify-center rounded-full absolute -top-6 left-1/2 -translate-x-1/2">
                        <MdQuestionAnswer className="text-white text-2xl" />
                    </div>
                    <h2 className="text-xl font-bold font-montserrat mb-4 mt-7 text-center">Do you offer on-site repairs?</h2>

                    <h4 className="text-secondaryColor font-medium text-center">Currently, we do not offer on-site repairs. However, you can drop off your device at our repair center, or we can arrange pickup and delivery services for your convenience.</h4>
                </div>

                <div className="border p-4 rounded-xl relative">
                    <div className="bg-primaryColor w-16 h-16 flex items-center justify-center rounded-full absolute -top-6 left-1/2 -translate-x-1/2">
                        <MdQuestionAnswer className="text-white text-2xl" />
                    </div>
                    <h2 className="text-xl font-bold font-montserrat mb-4 mt-7 text-center">Is it safe to provide my personal data when getting my device repaired?</h2>

                    <h4 className="text-secondaryColor font-medium text-center">Absolutely. We take data privacy and security seriously. Our technicians are trained to handle your device and data with the utmost care and confidentiality. We recommend backing up your data before bringing in your device for repair, but if you need assistance with data backup, we are here to help.</h4>
                </div>

                <div className="border p-4 rounded-xl relative">
                    <div className="bg-primaryColor w-16 h-16 flex items-center justify-center rounded-full absolute -top-6 left-1/2 -translate-x-1/2">
                        <MdQuestionAnswer className="text-white text-2xl" />
                    </div>
                    <h2 className="text-xl font-bold font-montserrat mb-4 mt-7 text-center">Are your technicians certified?</h2>

                    <h4 className="text-secondaryColor font-medium text-center">Yes, our technicians are highly skilled and certified professionals with extensive experience in electronic repairs. They undergo regular training to stay updated with the latest technologies and repair techniques.</h4>
                </div>

                <div className="border p-4 rounded-xl relative">
                    <div className="bg-primaryColor w-16 h-16 flex items-center justify-center rounded-full absolute -top-6 left-1/2 -translate-x-1/2">
                        <MdQuestionAnswer className="text-white text-2xl" />
                    </div>
                    <h2 className="text-xl font-bold font-montserrat mb-4 mt-7 text-center">Can I track the status of my repair online?</h2>

                    <h4 className="text-secondaryColor font-medium text-center">Yes, you can track the status of your repair online through our website or by contacting our customer support team. We will keep you informed every step of the way, from diagnosis to completion.</h4>
                </div>

                <div className="border p-4 rounded-xl relative">
                    <div className="bg-primaryColor w-16 h-16 flex items-center justify-center rounded-full absolute -top-6 left-1/2 -translate-x-1/2">
                        <MdQuestionAnswer className="text-white text-2xl" />
                    </div>
                    <h2 className="text-xl font-bold font-montserrat mb-4 mt-7 text-center">Do you offer discounts for multiple repairs or returning customers?</h2>

                    <h4 className="text-secondaryColor font-medium text-center">Yes, we value our customers and offer discounts for multiple repairs as well as special promotions for returning customers. Be sure to check our website or inquire with our staff for current offers and discounts.</h4>
                </div>
            </div>
        </div>
    );
};

export default Faq;

