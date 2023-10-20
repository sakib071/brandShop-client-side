import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        if (user) {
            const auth = getAuth();
            const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
                if (currentUser) {
                    setUserData({
                        displayName: currentUser.displayName,
                        photoURL: currentUser.photoURL,
                    });
                } else {
                    setUserData(null);
                }
            });

            return () => {
                unsubscribe();
            };
        }
    }, [user]);
    const handleLogOut = () => {
        logOut()
            .then(() => console.log('user logged out successfully'))
            .catch(error => console.error(error))
    }

    const navLinks = <>
        <div className="flex text-md font-semibold space-x-6">

            <li>
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-blue-700 underline" : ""
                    }>Home
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="/addProduct"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-blue-700 underline" : ""
                    }>Add Product
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="/myCart"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-blue-700 underline" : ""
                    }>My Cart
                </NavLink>
            </li>
            <li>
                <NavLink to="/contact" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-blue-700 underline" : ""
                }>Contact Us
                </NavLink>
            </li>
            {!user && <li>
                <NavLink to="/register" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-blue-700 underline" : ""
                }>Register
                </NavLink>
            </li>}
            {!user && <li>
                <NavLink to="/login" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-blue-700 underline" : ""
                }>Login
                </NavLink>
            </li>}
        </div>

    </>
    return (
        <div className="navbar z-10 fixed bg-base-100 top-0 p-6 h-[5vh] shadow-md justify-evenly remove-hover-effect">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div className="flex gap-2">
                    <img className="w-8 object-contain" src={"https://i.ibb.co/QFjy2Gx/image.png"} alt="" />
                    <a className="uppercase text-xl font-bold text-gray-900">TechWeb</a>
                </div>
            </div>
            <div className="hidden lg:flex w-full">
                <ul className="space-x-5 mx-auto px-1">
                    {navLinks}
                </ul>
            </div>

            <div className="navbar-end space-x-5">
                {
                    user && <>
                        <NavLink to="/profile"> <div className="avatar items-center">
                            <button className="btn-sm text-lg font-bold">{userData?.displayName}</button>
                            <div className="w-10 rounded-full">
                                <img src={userData?.photoURL} />
                            </div>
                        </div></NavLink>
                        <a onClick={handleLogOut} className="btn btn-sm bg-red-600 text-white">Sign out</a>
                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;