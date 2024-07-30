

import { Link, useLocation, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";


import { FaFacebook, FaYoutube, FaLinkedin, FaInstagram,  } from "react-icons/fa";


const SignIn = () => {
 
  const location = useLocation();
  const navigate = useNavigate();
  

  const handleSignin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    if (!userEmail) {
      new Swal("Email or passwrod does not match");
    } else if (!userPassword) {
      new Swal("Email or passwrod does not match");
    }

    navigate(location?.state ? location.state : "/");
   
  };

  

  return (
    <div className=" h-screen items-center flex">
     
      <div className="hero items-center">
        <div className="flex justify-between">
           {/* register image part start */}
           <div
            className="hero w-4/6"
            style={{
              backgroundImage: 'url(https://i.ibb.co/XyWpP16/signin-Img.jpg)'
            }}

          >
            
            <div className="hero-overlay bg-opacity-90"></div>
            <div className="hero-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold leading-tight text-white">Welcome to <br /> <span className="text-pink-600">Quiz Task Project</span></h1>
                <p className="mb-5 text-pink-300">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus qui similique fuga illo fugiat sequi hic, eligendi possimus. Ipsa ab obcaecati est recusandae cum illo, mollitia similique asperiores itaque consectetur.
                </p>
               <div className="flex gap-4 text-pink-300 mt-24">
                <FaFacebook />
                <FaYoutube />
                <FaLinkedin />
                <FaInstagram />
               </div>
              </div>
            </div>
          </div>
         
          <div className="card shadow-2xl w-96">
          
            <form  className="card-body">
            <h1 className="text-pink-900 font-bold">Please Signin Here</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                
              </div>

              <div className="form-control mt-6">
                
                
                <button className="text-white font-bold btn bg-pink-600">Sign In</button>
              </div>
              <p className=" mb-4">
                Do not have an account? Please
                <Link
                  className="ml-2 underline text-pink-700 font-semibold"
                  to="/signup"
                >
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
