import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>

            <div className="container mx-auto font-roboto">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Root;