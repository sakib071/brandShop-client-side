import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { id } = useParams(); // Get the product ID from the route
    const [product, setProduct] = useState(null);

    // Fetch the product details based on the ID
    useEffect(() => {
        // Make an API request to retrieve product details
        fetch(`http://localhost:5000/product/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setProduct(data); // Update the product state with the retrieved data
            })
            .catch((error) => {
                console.error('Error fetching product details: ', error);
            });
    }, [id]);

    // Render the product details once data is available
    return (
        <div>
            <h2>Product Details</h2>
            {
                product ? (
                    <div>
                        <div className="card w-[40vw] mx-auto mt-20 bg-base-100 shadow-xl">
                            <p className='text-3xl font-bold text-center mb-3'>Product Details</p>
                            <figure><img src={product.imageURL} alt="Shoes" /></figure>
                            <div className=" p-10 space-y-3">
                                <h2 className="card-title text-3xl font-bold">{product.name}</h2>
                                <p className='text-xl'>{product.description}</p>
                                <div className='flex px-1 justify-between'>
                                    <p className='text-xl font-bold'>Brand: {product.brandName}</p>
                                    <p className='text-xl font-bold'>Price: ${product.price}</p>
                                    <p className='text-xl font-bold'>Rating: {product.rating}</p>
                                </div>


                                <div className="card-actions justify-end">
                                    <button className="btn btn-neutral">Add to Cart</button>
                                </div>
                            </div>
                        </div>

                        {/* <h3>{product.name}</h3>
                        <p>Brand: {product.brandName}</p>
                        <p>Type: {product.type}</p>
                        <p>Price: ${product.price}</p>
                        <p>Rating: {product.rating}</p>
                        <img src={product.imageURL} alt={product.name} /> */}
                    </div>
                ) : (
                    <p>Loading product details...</p>
                )
            }
        </div>
    );
};

export default ProductDetails;
