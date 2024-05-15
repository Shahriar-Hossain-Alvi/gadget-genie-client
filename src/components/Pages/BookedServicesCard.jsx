import PropTypes from 'prop-types';

const BookedServicesCard = ({ myBookedService }) => {

    const { imgURL, serviceName, price, serviceDate, instruction, status } = myBookedService;

    return (
        <tr>
            
            <td>
                <div className="flex flex-col md:flex-row lg:flex-row items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20">
                            <img src={imgURL} alt="" />
                        </div>
                    </div>
                    <div className='text-center md:text-left lg:text-left'>
                        <div className="font-bold">{serviceName}</div>
                        <div className="text-sm opacity-50">Price: ${price}</div>
                    </div>
                </div>
            </td>
            <td>
                <div>{instruction.length === 0 ? 'Did not provide any specific instruction' : instruction}</div>
            </td>
            <td>{serviceDate}</td>
            <th>
                <button className="badge badge-info badge-lg text-white">{status? status : "none"}</button>
            </th>
        </tr>
    );
};

BookedServicesCard.propTypes = {
    myBookedService: PropTypes.object,
}

export default BookedServicesCard;