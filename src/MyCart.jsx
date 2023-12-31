import { useContext, useState } from 'react';
import { AuthContext } from './AuthProvider';
import Swal from 'sweetalert2';

const MyCart = () => {
    const { user } = useContext(AuthContext);
    const [cart, setCart] = useState([]);

    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://technology-electronics-server-with-auth-q8ov57eni.vercel.app/cart/${_id}`, {
                    method: 'DELETE'
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            const updatedCart = cart?.filter((product) => product?._id !== _id);
                            setCart(updatedCart);
                            Swal.fire('Deleted!', 'Your product has been deleted.', 'success');
                        }
                    })
                    .catch((error) => {
                        console.error('Error deleting product from cart: ', error);
                    });
            }
        });
    }
    fetch('https://technology-electronics-server-with-auth-q8ov57eni.vercel.app/cart')
        .then((response) => response.json())
        .then((data) => setCart(data))


    const myCart = cart?.filter(item => item?.currentUserEmail == user?.email)

    return (
        <div className="mt-20 p-10">
            <h2 className="text-3xl font-bold text-center mb-5">My Cart</h2>
            {
                cart.length > 0 ? (
                    <div className="lg:max-w-7xl mx-auto grid md:grid-cols-2 gap-5">
                        {myCart.map(product => (
                            <div key={product?._id}>
                                <div className="card card-side bg-base-100 h-[30vh] w-[30vw] mx-auto shadow-xl">
                                    <figure>
                                        <img className='w-[200px] ml-10 object-cover' src={product?.imageURL} alt="" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="text-xl font-bold">{product?.name}</h2>
                                        <p className="text-sm w-64">{product?.description}</p>
                                        <p className='text-lg font-bold'>${product?.price}</p>
                                        <p className="text-md font-semibold">Rating: <span className="font-bold text-amber-400">{product?.rating}</span></p>
                                        <div className="card-actions justify-end">
                                            <button onClick={() => handleDelete(product?._id)} className="btn btn-sm bg-red-600 hover:text-black text-white font-semibold">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className='text-4xl font-bold text-red-500 mt-52 text-center h-[25vh]'>
                        No items in your cart.
                    </p>
                )
            }
        </div>
    );
};

export default MyCart;
