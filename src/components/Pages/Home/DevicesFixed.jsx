/* eslint-disable react/no-unescaped-entities */
import SlotCounter from 'react-slot-counter';
import { SlScreenSmartphone } from "react-icons/sl";
import { GiLaptop } from "react-icons/gi";
import { GiConsoleController } from "react-icons/gi";
import { IoDesktopOutline } from "react-icons/io5";
import { BsSmartwatch } from "react-icons/bs";

const DevicesFixed = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold text-center font-montserrat mb-6'>Devices we've fixed</h2>

            <div className='grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-2 justify-between items-center text-center bg-primaryColor py-8 text-white px-10'>
                <div className='space-y-2'>
                    <SlScreenSmartphone className='mx-auto w-10 h-10' />
                    <span className='text-2xl font-bold font-montserrat'>
                        <SlotCounter value={312} duration={2} />
                    </span>
                    <h2>Smartphones</h2>
                </div>

                <div className='space-y-2'>
                    <GiLaptop className='mx-auto w-10 h-10' />
                    <span className='text-2xl font-bold font-montserrat'>
                        <SlotCounter value={258} duration={2} />
                    </span>
                    <h2>Laptops</h2>
                </div>

                <div className='space-y-2'>
                    <GiConsoleController className='mx-auto w-10 h-10' />
                    <span className='text-2xl font-bold font-montserrat'>
                        <SlotCounter value={87} duration={2} />
                    </span>
                    <h2>Consols</h2>
                </div>

                <div className='space-y-2'>
                    <IoDesktopOutline className='mx-auto w-10 h-10' />
                    <span className='text-2xl font-bold font-montserrat'>
                        <SlotCounter value={178} duration={2} />
                    </span>
                    <h2>Desktops</h2>
                </div>

                <div className='space-y-2'>
                    <BsSmartwatch className='mx-auto w-10 h-10' />
                    <span className='text-2xl font-bold font-montserrat'>
                        <SlotCounter value={123} duration={2} />
                    </span>
                    <h2>Smartwatches</h2>
                </div>
            </div>
        </div>
    );
};

export default DevicesFixed;