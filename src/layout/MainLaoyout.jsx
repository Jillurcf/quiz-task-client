import { Outlet } from "react-router-dom";
import NavBar from "../component/common/NavBar";


const MainLaoyout = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
        </div>
    );
};

export default MainLaoyout;