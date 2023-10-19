import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";

const Products = () => {
    // const { _id, name, brandName, type, price, rating, imageURL, description } = product;

    const products = useLoaderData();
    console.log(products);

    return (
        <div className='container flex flex-col items-center'>
            <h1 className='text-3xl font-bold'> Products {products.length} </h1>
            <div className='grid md:grid-cols-2 gap-5'>
                {
                    products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};


export default Products;