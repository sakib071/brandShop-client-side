import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";

const Products = () => {
    // const { _id, name, brandName, type, price, rating, imageURL, description } = product;

    const products = useLoaderData();
    console.log(products);

    return (
        <div className='container flex flex-col items-center mx-auto mt-32'>
            <h1 className='text-3xl font-bold'> We have <span className="text-blue-600">{products.length}</span> products</h1>
            <div className='grid md:grid-cols-2 gap-5'>
                {
                    products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};


export default Products;