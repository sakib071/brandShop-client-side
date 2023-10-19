import { NavLink } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content bg-base-100 shadow-md rounded-lg">
                    <div className="text-left p-5 space-y-5 max-w-md">
                        <h1 className="text-3xl font-bold">Contact With Us</h1>
                        <p className="text-lg">We are all ears and excited to hear from you. Just fire away using the contact form below.</p>
                        <div className="text-left mt-5 space-y-3 w-full">
                            <input type="text" placeholder="Name" className="input input-bordered w-full max-w-lg" />
                            <input type="text" placeholder="Email address" className="input input-bordered w-full max-w-lg" />
                            <textarea className="textarea textarea-bordered w-full" placeholder="Bio"></textarea>
                        </div>
                        <button className="btn btn-neutral w-full" onClick={() => document.getElementById('my_modal_5').showModal()}>Submit</button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">Hey there!</h3>
                                <p className="py-4">Your response is submitted</p>
                                <div className="modal-action">
                                    <form method="dialog">
                                        <NavLink to="/">
                                            <button className="btn btn-neutral w-full">Back to home</button>
                                        </NavLink>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;