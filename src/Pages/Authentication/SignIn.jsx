import { FcGoogle } from "react-icons/fc";
import login from '../../assets/images/login/login.svg';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";

const SignIn = () => {

    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value
        const password = form.password.value
        // console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const user = { email };
                // navigate(location?.state ? location.state : '/')
                // get access token
                axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                        if(res.data.success){
                            navigate(location?.state ? location.state : '/')
                        }
                    })
            })
            .catch(error => console.log(error))
    }


    return (
        <section className="lg:h-[500px]  flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
            <div className="md:w-1/3 max-w-sm">
                <img
                    src={login}
                    alt="Sample image" />
            </div>
            <div className="md:w-1/3 max-w-sm">
                {/* <div className="text-center md:text-left flex items-center">
                    <label className="mr-1">Sign in with</label>

                    <button
                        type="button"
                        className="mx-1 h-9 w-9 rounded-full bg-blue-100 hover:bg-blue-700 uppercase leading-normal">

                        <FcGoogle className="h-8 w-8 pl-1"></FcGoogle>
                    </button>
                </div>
                <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                    <p className="mx-4 mb-0 text-center font-semibold text-slate-500">Or</p>
                </div> */}

                {/* Form section start */}

                <form onSubmit={handleLogin}>
                    <input className="text-md w-full px-4 py-3 border border-solid border-gray-300 rounded" type="email" name="email" placeholder="Email Address" required />
                    <input className="text-md w-full px-4 py-3 border border-solid border-gray-300 rounded mt-4" type="password" name="password" placeholder="Password" required />
                    <div className="text-center md:text-left">
                        <button className="mt-4 bg-orange-600 hover:bg-orange-700 px-10 py-2 text-white font-semibold text-md uppercase rounded tracking-wider" type="submit">Login</button>
                    </div>
                </form>
                <div className="mt-4 font-semibold text-md text-slate-500 text-center md:text-left">
                    Don't have an account? <Link className="text-red-600 hover:underline hover:underline-offset-4" to="/signup">Register</Link>
                </div>
            </div>
        </section>
    )
}

export default SignIn