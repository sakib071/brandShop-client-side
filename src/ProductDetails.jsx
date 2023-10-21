import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { AuthContext } from './AuthProvider';

const ProductDetails = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    console.log("My cart", id);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setProduct(data);
            })
            .catch((error) => {
                console.error('Error fetching product details: ', error);
            });
    }, [id]);

    const addProductToCart = () => {

        // event.preventDefault();

        const currentUserEmail = user?.email;
        const name = product?.name;
        const brandName = product?.brandName;
        const type = product?.type;
        const price = product?.price;
        const rating = product?.rating;
        const imageURL = product?.imageURL;
        const description = product?.description;
        const myCart = { currentUserEmail, name, brandName, type, price, rating, imageURL, description }
        console.log("new cart", myCart);

        //send data to server
        fetch('http://localhost:5000/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(myCart)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div>
            <h2>Product Details</h2>
            {
                product ? (
                    <div>
                        <div className="card w-[40vw] mx-auto mt-20 bg-base-100 shadow-xl">
                            <p className='text-3xl font-bold text-center mb-3'>Product Details</p>
                            <figure><img src={product?.imageURL} alt="Shoes" /></figure>
                            <div className=" p-10 space-y-3">
                                <h2 className="card-title text-3xl font-bold">{product?.name}</h2>
                                <p className='text-xl'>{product?.description}</p>
                                <div className='flex px-1 justify-between'>
                                    <p className='text-xl font-bold'>Brand: {product?.brandName}</p>
                                    <p className='text-xl font-bold'>Price: ${product?.price}</p>
                                    <p className='text-xl font-bold'>Rating: {product?.rating}</p>
                                </div>

                                <Link to={`/product/details/${id}`}>
                                    <div className="card-actions justify-end">
                                        <button onClick={() => addProductToCart(product)} className="btn btn-neutral">Add to Cart</button>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                ) : (
                    <p>Loading product details...</p>
                )
            }
        </div>
    );
};

export default ProductDetails;
