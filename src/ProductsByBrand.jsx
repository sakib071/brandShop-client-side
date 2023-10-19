import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductsByBrand = () => {
    const { brandName } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch products by brandName
        fetch(`http://localhost:5000/product?brandName=${brandName}`)
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, [brandName]);

    return (
        <div className="mt-20 p-10">
            <h2 className="text-3xl font-bold text-center mb-5">Products by <span className="text-blue-700 uppercase">{brandName}</span></h2>
            <div className="max-w-7xl mx-auto grid grid-cols-3 gap-5">
                {products.map((product) => (
                    <div key={product._id} className="mx-auto">
                        <div className="card bg-base-100 h-[400px] w-[300px] shadow-xl">
                            <figure className="p-5">
                                <img className="w-full h-full object-cover" src={product.imageURL} alt="" />
                            </figure>
                            <div className="card-body justify-center flex flex-row items-center gap-3 h-full">
                                <div className="space-y-1">
                                    <h2 className="text-xl font-bold">{product.name}</h2>
                                    <p className="text-sm">{product.description}</p>
                                    <div className="flex gap-2 py-1">
                                        <div className="badge badge-outline">{product.brandName}</div>
                                        <div className="badge badge-outline">{product.type}</div>
                                    </div>
                                    <div className="flex justify-between p-1">
                                        <div>
                                            <p className="text-lg font-bold">${product.price}</p>
                                        </div>
                                        <div>
                                            <p className="text-lg font-semibold">
                                                Rating: <span className="font-bold text-amber-400">{product.rating}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsByBrand;
