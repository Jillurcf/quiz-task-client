import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaFacebook, FaYoutube, FaLinkedin, FaInstagram,  } from "react-icons/fa";




const Signup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const role = "user";
    const status = 'varified'
const userInfo = {name, photo, email, password, role, status}
console.log(userInfo);
    console.log(name, photo, email, password);
    if (password.length < 6) {
      new Swal("The password is less than 6 characters");
    }

    if (!/[A-Z]/.test(password)) {
      return new Swal(
        "Password should have one capital letter and one special character"
      );
    } else if (!/[!@#$%^&*]/.test(password)) {
      return new Swal(
        "Password should have one capital letter and one special character"
      );
    }

  //   createUser(email, password)
  //   .then((result) => {
  //     console.log(result);
  //  })
  //   .then((error) => {
  //     console.log(error);
  //   });

    

        navigate(location?.state ? location?.state : '/')

       

    e.target.reset();

    // const user = { email, createdAt: createdAt };

    new Swal("Registration SuccessFull");
    navigate(location?.state ? location.state : "/");
  };

  return (
    <div className="hero min-h-screen max-w-screen-xl mx-auto">
     
      <div className="hero-content  text-pink-950">
        <div className="flex">
          {/* register image part start */}
          <div
            className="hero"
            style={{
              backgroundImage: 'url(https://i.ibb.co/yBS2sF6/register-Img.jpg)'
            }}

          >
            
            <div className="hero-overlay bg-opacity-90"></div>
            <div className="hero-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold leading-tight">Welcome to <br /> <span className="text-pink-600">Quiz Task Project</span></h1>
                <p className="mb-5 text-pink-300">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ipsum maiores voluptate, possimus fuga sapiente unde perferendis magni labore ullam aut delectus totam explicabo impedit animi reprehenderit cupiditate qui incidunt!
                </p>
               <div className="flex gap-4 text-pink-300 mt-48">
                <FaFacebook />
                <FaYoutube />
                <FaLinkedin />
                <FaInstagram />
               </div>
              </div>
            </div>
          </div>
         
          <div className=" card flex-shrink-0 shadow-2xl text-pink-950">
            <form onSubmit={handleRegister} className="card-body">
              <h1 className="text-pink-900 font-bold">Please Sign Up Here</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="border rounded-md p-2 w-full"
                    required
                  />
              
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="file"
                  name="photo"
                  placeholder="Yout photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
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
                <label className="">
                  <input
                    type="checkbox"
                    name=""
                    placeholder=""
                    className=""
                    required
                  />
                  <span className="px-2">
                    I understand agree to the all user agreement and{" "}
                    <a href="">privacy policy</a>
                  </span>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-pink-600 text-white">Register</button>
              </div>
              <p className=" mb-4">
                Already have an account? Please
                <Link
                  className="ml-2 underline text-pink-700 font-semibold"
                  to="/signin"
                >
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
