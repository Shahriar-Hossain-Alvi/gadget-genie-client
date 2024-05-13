import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const ManageServiceCard = ({ mySingleService, handleDelete }) => {
    // const { loggedInUser } = useContext(AuthContext);
    const { _id, imgURL, description, price, serviceName, serviceArea } = mySingleService;


    return (
        <div>
            <div className='border p-4 rounded-2xl border-primaryColor'>
                <div className='grid grid-cols-5 gap-3 mb-4'>

                    {/* left part */}
                    <div className='col-span-2 flex flex-col justify-between space-y-3'>
                        <div></div>

                        <div className='space-y-4'>
                            <h2 className='font-bold font-montserrat text-4xl'>{serviceName}</h2>
                            <p className='text-secondaryColor'>{description.slice(0, 100)}...</p>
                        </div>

                        {/* buttons */}
                        <div className='flex justify-center items-center gap-6'>
                            <Link to={`/editDetails/${_id}`}>
                                <button className="btn btn-lg btn-success text-white hover:bg-primaryColor">Edit</button>
                            </Link>

                            <button onClick={() => handleDelete(_id)} className="btn btn-lg btn-error text-white">Delete</button>
                        </div>
                    </div>

                    {/* middle part */}
                    <div className='border-x flex border-x-thirdColor flex-col justify-center items-center gap-7'>
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
                    </div>

                    {/* image */}
                    <div className='col-span-2'>
                        <img className='w-full h-72 rounded-2xl' src={imgURL} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

ManageServiceCard.propTypes = {
    mySingleService: PropTypes.object,
    handleEdit: PropTypes.func,
    handleDelete: PropTypes.func
}

export default ManageServiceCard;