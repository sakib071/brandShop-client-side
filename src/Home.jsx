import { useLoaderData } from "react-router-dom";
import BrandCards from "./BrandCards";

const Home = () => {

    const products = useLoaderData();
    console.log(products);

    return (
        <div>
            <div className='container flex flex-col items-center mt-44 mx-auto'>
                <h1 className='text-3xl font-bold'> WE Have <span className="text-blue-600">0{products.length}</span> Brands Available</h1>
                <div className='grid md:grid-cols-3 gap-5 mb-24'>
                    {
                        products.map(product => <BrandCards key={product.id} product={product}></BrandCards>)
                    }
                </div>
            </div>
        </div>


    );
};

export default Home;