import { FaHome, FaList, FaTrophy, FaUsers } from "react-icons/fa";
import { MdQuiz, MdLeaderboard } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
// import useCart from "../Hooks/useCart";

// import useAuth from "../Hooks/useAuth";
// import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
//   const [cart] = useCart();
//   const { user } = useAuth();

 
//   const [isAdmin] = useAdmin();
//   console.log(isAdmin);

  return (
    <div className="flex">
      {/* dashboard sidebar */}
      <div className=" w-64 min-h-screen bg-purple-400">
        <ul className="menu p-4">
          {/* {isAdmin == "admin" ? ( */}
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome>
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/mangeUsers">
                  <FaUsers></FaUsers>
                  Mange Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageQuiz">
                <MdQuiz />
                  Manage Quiz
                </NavLink>
              </li>
              <div className="divider">OR</div>
              <li>
                <NavLink to="/dashboard/userProfile">
                  <FaUsers></FaUsers>
                  My Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <FaHome></FaHome>
                  Home
                </NavLink>
              </li>
            </>
          {/* ) : ( */}
            <>
             {/* {
              isAdmin == "creator" ? */}
               <li>
              <NavLink to="/dashboard/userHome">
                <FaHome></FaHome>
              User Home
              </NavLink>
            </li> :  <li>
              <NavLink to="/dashboard/userHome">
                <FaHome></FaHome>
                Home
              </NavLink>
            </li>
             {/* } */}
              {/* {
                isAdmin == "creator" ?  */}
                <li>
                <NavLink to="/dashboard/addContest">
                <MdQuiz />
                 Add Quiz
                </NavLink>
              </li> : <li>
                <NavLink to="/dashboard/userWinning">
                 <MdLeaderboard />
                LeaderBoard
                </NavLink>
              </li>
              {/* } */}
             {/* {
              isAdmin == "creator" ?  */}
               <li>
              <NavLink to="/dashboard/createdContest">
               <MdQuiz />
                My Created Quiz
              </NavLink>
            </li> :  <li>
              <NavLink to="/dashboard/cart">
                
                {/* My Participated Contest, cart ({cart.length}) */}
              </NavLink>
            </li>
             {/* } */}
           
              <div className="divider">OR</div>
              <li>
                <NavLink to="/dashboard/userProfile">
                  <FaUsers></FaUsers>
                  My Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <FaHome></FaHome>
                  Home
                </NavLink>
              </li>
            </>
          {/* )} */}
          {/* <li>                  
                    <NavLink to="/dashboard/review">
                   <FaAd></FaAd>
                  Ad a Review
                    </NavLink>
                </li>
                <li>                  
                    <NavLink to="/dashboard/paymentHistory">
                    <FaList></FaList>
                  Real Payment History
                    </NavLink>
                </li>
                </>
             }
                {/* Shared navLink */}
          {/* <div className="divider">OR</div>
                <li>                  
                    <NavLink to="/">
                    <FaHome></FaHome>
                  Home
                    </NavLink>
                </li>
                <li>                  
                    <NavLink to="/order/salad">
                    <FaSearch></FaSearch>
                 Menu
                    </NavLink>
                </li>
                <li>                  
                    <NavLink to="/order/contact">
                 <FaEnvelope></FaEnvelope>
                 Contact
                    </NavLink>
                </li> */}
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
