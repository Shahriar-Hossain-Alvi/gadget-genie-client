import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const PopularServicesCard = ({ service }) => {
    const { _id, imgURL, description, providerName, providerImage, serviceName, price } = service;

    return (
        <div className='border p-4 rounded-2xl border-primaryColor'>
            <div className='grid grid-cols-2 gap-3 mb-4'>
                <div className='flex flex-col justify-center space-y-3'>
                    <h2 className='font-bold font-montserrat text-2xl'>{serviceName}</h2>
                    <p className='text-secondaryColor'>{description.slice(0, 100)}...</p>
                    <p className='font-medium'>Starts From: <span className='font-montserrat text-2xl italic text-thirdColor font-bold'>${price}</span></p>
                </div>
                <div>
                    <img className='w-full h-60 rounded-2xl' src={imgURL} alt="" />
                </div>
            </div>

            <div className='flex justify-between items-center border-t pt-2'>
                <div className='flex items-center gap-3'>
                    <div>
                        <img className='w-12 h-12 rounded-full' src={providerImage} alt="" />
                    </div>

                    <div>
                        <h2 className='font-montserrat font-black text-lg text-thirdColor'>{providerName}</h2>
                    </div>
                </div>
                <div>
                    <Link to={`/services/${_id}`}>
                        <button className="btn bg-thirdColor text-white hover:bg-primaryColor btn-">View Detail</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

PopularServicesCard.propTypes = {
    service: PropTypes.object,
}

export default PopularServicesCard;