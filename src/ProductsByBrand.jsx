import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';

const ProductsByBrand = () => {
    const { brandName } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch products by brandName
        fetch(`http://localhost:5000/product?brandName=${brandName}`)
            .then((response) => response.json())
            .then((data) => setProducts(data.filter(product => product.brandName == brandName)));
    }, [brandName]);

    console.log(products);

    return (

        <div className="mt-20 p-10">
            <div className="carousel w-full h-[50vh] mt-16">
                <div id="item1" className="carousel-item w-full h-[80vh]">
                    <img src={"https://i.ibb.co/DMxz5v6/image.png"} className="w-full object-contain" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={"https://i.ibb.co/z6nzBx5/image.png"} className="w-full object-contain" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={"https://i.ibb.co/fkMwztx/image.png"} className="w-full object-contain" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div>
            <h2 className="text-3xl font-bold text-center mb-5">Products by <span className="text-blue-700 uppercase">{brandName}</span></h2>
            {
                products.length > 0 ?
                    <div className='lg:max-w-7xl mx-auto grid md:grid-cols-2 gap-5'>
                        {
                            products.map(product => <ProductCard key={product._id} product={product} route={"brands"}></ProductCard>)
                        }
                    </div>
                    : <p className='text-4xl font-bold text-red-500 mt-52 text-center h-[25vh]'>No data available</p>
            }
        </div>
    );
};

export default ProductsByBrand;
