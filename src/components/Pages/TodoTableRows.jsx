import PropTypes from 'prop-types';
import Swal from 'sweetalert2';


const TodoTableRows = ({ singleTodoService, index }) => {
    const { _id, serviceName, serviceDate, price, bookedUserEmail, bookedUserName, instruction, status } = singleTodoService;

    const handleStatusUpdate = e => {
        const status = e.target.value;

        fetch(`http://localhost:5000/todo-services/${_id}`, {
            method: "PATCH",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: status })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Statues Updated",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

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
                <select onChange={handleStatusUpdate} className="select w-full max-w-xs">
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