import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { getAuth, updateProfile } from "firebase/auth";
import { AuthContext } from "./AuthProvider";

const Register = () => {

    const { createUser } = useContext(AuthContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [photo, setPhoto] = useState('');
    // const [success, setSuccess] = useState('');
    const [registerError, setRegisterError] = useState('');
    const auth = getAuth();
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        setRegisterError('');
        // setSuccess('');

        if (password.length < 6) {
            toast.error('Password should be at least 6 characters or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error('Your password should have at least one upper case characters.')
            return;
        }

        const handleUpdateProfile = (name, photo) => {
            return updateProfile(auth.currentUser, {
                displayName: name, photoURL: photo
            })
        }

        createUser(email, password)
            .then(result => {
                handleUpdateProfile(name, photo)
                console.log(result.user);
                setName('');
                setEmail('');
                setPassword('');
                navigate('/');
                toast.success('User created successfully');
                const user = { email };
                fetch('https://technology-electronics-server-with-auth-hnovuqxi3.vercel.app/user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json()
                        .then(data => {
                            console.log(data);
                            toast.success('User created successfully');
                        }))
            })
            .catch(error => {
                console.error(error);
                toast.error('Email already in use');
                // setRegisterError(error.message);
            })
    }
    return (
        <div>
            <div className="hero h-[80vh] bg-base-100">
                <div className="hero-content flex-col lg:flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>

                    <div className="card flex-shrink-0 w-[70vw] max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleRegister}>
                            <div className="form-control">
                                <input
                                    type="name"
                                    placeholder="Name"
                                    name="name"
                                    className="input input-bordered"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    className="input input-bordered"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <input
                                    type="photo"
                                    placeholder="Photo URL"
                                    name="photo"
                                    className="input input-bordered"
                                    value={photo}
                                    onChange={e => setPhoto(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <input
                                    type="password"
                                    placeholder="password"
                                    name="password"
                                    className="input input-bordered"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    required />
                                <label className="label">
                                    <a href="/login" className="label-text-alt text-sm link link-hover">Already have an account?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            {
                                registerError && <p className="text-red-700">{registerError}</p>
                            }
                        </form>

                    </div>
                </div>
            </div>
            <ToastContainer />

        </div>
    );
};

export default Register;