import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "./AuthProvider";

const Login = () => {


    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('Login successfully');
                navigate('/');
                e.target.reset();

            })
            .catch(error => {
                console.error(error);
                toast.error('Login failed, Try again!');

            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                toast.success('Login successfully');
                navigate('/');
                console.log(result.user)
            })
            .catch(error => {
                toast.error('Login failed, Try again!');
                console.error(error)
            })
    }

    return (
        <div>
            <div className="hero h-[90vh] bg-base-100">
                <div className="hero-content flex-col lg:flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>

                    <div className="card flex-shrink-0 w-[70vw] max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text" >Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="email"
                                    name="email"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text" >Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="password"
                                    name="password"
                                    className="input input-bordered"
                                    required
                                />
                                <label className="label text-sm">
                                    <a href="#" className="link-hover">Forgot password?</a>
                                    <a href="/register" className="link-hover">Dont have an account?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-neutral">Login</button>
                            </div>
                            <div className="divider">OR</div>
                            <div className="form-control mt-1">
                                <button onClick={handleGoogleSignIn} className="btn hover:bg-red-600 bg-red-500 text-white">Google</button>
                            </div>
                        </form>
                    </div>
                </div >
                <ToastContainer />
            </div>


        </div >
    );
};

export default Login;