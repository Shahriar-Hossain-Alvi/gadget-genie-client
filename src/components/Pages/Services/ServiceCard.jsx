import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaHandPointDown } from "react-icons/fa";

const ServiceCard = ({ service }) => {
    const { _id, imgURL, description, price, serviceName, serviceArea, providerName, providerImage } = service;

    return (
        <div className='border p-4 rounded-2xl border-primaryColor mx-2 lg:mx-0'>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-4'>

                <div className='lg:col-span-2 flex flex-col justify-between text-center lg:text-left space-y-3'>
                    <div></div>

                    <div className='space-y-4'>
                        <h2 className='font-bold font-montserrat text-2xl md:text-3xl lg:text-4xl'>{serviceName}</h2>
                        <p className='text-secondaryColor'>{description.slice(0, 100)}...</p>
                    </div>

                    <div className='flex flex-col items-center lg:flex-none md:flex-none lg:items-start md:items-start'>
                        <h3 className='text-lg font-semibold mb-2 text-secondaryColor flex items-center gap-1'>Service Provider: <span><FaHandPointDown /></span></h3>
                        <div className='flex flex-col lg:flex-row items-center gap-3'>
                            <div className='order-2'>
                                <img className='w-12 h-12 rounded-full' src={providerImage} alt="" />
                            </div>

                            <div>
                                <h2 className='font-montserrat font-black text-lg text-thirdColor'>{providerName}</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='border-y border-y-thirdColor md:border-x flex lg:border-x md:border-x-thirdColor lg:border-x-thirdColor flex-col justify-center items-center py-3 md:py-0 lg:py-0 gap-7 md:border-y-0 lg:border-y-0'>
                    <div className='text-center'>
                        <p className='font-medium'>Starts From:</p>
                        <span className='font-montserrat text-2xl italic text-thirdColor font-bold'>${price}</span>
                    </div>

                    <div className='text-center'>
                        <p className='font-medium'>
                            Service Area:
                        </p>
                        <span className='font-montserrat text-2xl italic text-thirdColor font-bold'>{serviceArea}</span>
                    </div>
                    <Link to={`/servicedetails/${_id}`}>
                        <button className="btn bg-thirdColor text-white hover:bg-primaryColor btn-lg">View Detail</button>
                    </Link>
                </div>


                <div className='lg:col-span-2'>
                    <img className='w-full h-72 rounded-2xl' src={imgURL} alt="" />
                </div>
            </div>
        </div>
    );
};

ServiceCard.propTypes = {
    service: PropTypes.object,
}

export default ServiceCard;