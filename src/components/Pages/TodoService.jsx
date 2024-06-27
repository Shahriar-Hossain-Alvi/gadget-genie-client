import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext, useEffect, useState } from "react";
import TodoTableRows from "./TodoTableRows";


const TodoService = () => {
    const { loggedInUser } = useContext(AuthContext);
    const [servicesTodo, setServicesTodo] = useState([]);

    useEffect(() => {
        fetch(`https://gadget-genie-server.vercel.app/todo-services/${loggedInUser?.email}`)
            .then(res => res.json())
            .then(data => {
                setServicesTodo(data)
            })
    }, [loggedInUser])

    return (
        <div>
            <Helmet>
                <title>Todo Service | Gadget Genie</title>
            </Helmet>

            <h2 className="text-center font-bold my-10 text-3xl">Services to do</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#SL</th>
                            <th>Service Name</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Booked by</th>
                            <th>Instruction</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                        {
                            servicesTodo.map((singleTodoService, index) => <TodoTableRows 
                            key={singleTodoService._id} singleTodoService={singleTodoService}
                            index={index}
                            ></TodoTableRows>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TodoService;