import PropTypes from 'prop-types';


const TodoTableRows = ({ singleTodoService, index }) => {
    const { serviceName, serviceDate, price, bookedUserEmail, bookedUserName, instruction, status } = singleTodoService;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{serviceName}</td>
            <td>{price}</td>
            <td>{serviceDate}</td>
            <td>
                <h2>{bookedUserName}</h2>
                <h2>{bookedUserEmail}</h2>
            </td>
            <td>{instruction}</td>
            <td>
                <select className="select w-full max-w-xs">
                    <option defaultValue>{status}</option>
                    <option>working</option>
                    <option>completed</option>
                </select>

            </td>
        </tr>
    );
};

TodoTableRows.propTypes = {
    singleTodoService: PropTypes.object,
    index: PropTypes.number,
}

export default TodoTableRows;