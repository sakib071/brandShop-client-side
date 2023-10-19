import { useLoaderData } from "react-router-dom";
import BrandCards from "./BrandCards";
import Specialty from "./Specialty";
import Review from "./Review";
import { useState } from "react";

const Home = () => {

    const [darkMode, setDarkMode] = useState(false);
    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    const products = useLoaderData();
    console.log(products);

    return (
        <div className={`min-h-screen pb-16 ${darkMode ? 'dark:bg-gray-900 dark:text-white' : 'bg-white text-black'}`}>

            <div className="carousel w-full mt-16">
                <div id="item1" className="carousel-item w-full h-[80vh]">
                    <img src={"https://i.ibb.co/DMxz5v6/image.png"} className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={"https://i.ibb.co/z6nzBx5/image.png"} className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={"https://i.ibb.co/fkMwztx/image.png"} className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div>
            <div className="mx-auto flex justify-center mt-20 h-20 w-20 rounded-lg shadow-md">
                <div className="theme-toggle flex items-center">
                    <input
                        type="checkbox"
                        checked={darkMode}
                        onChange={toggleTheme}
                        className="toggle"
                    />
                </div>
            </div>

            <div className={`container flex flex-col items-center mt-32 mx-auto ${darkMode ? 'dark:bg-gray-900 dark:text-white' : 'bg-white text-black'}`}>
                <h1 className='text-3xl font-bold mb-10'> We Have <span className="text-blue-600">0{products.length}</span> Brands Available</h1>
                <div className='grid md:grid-cols-3 gap-5'>
                    {
                        products.map(product => <BrandCards key={product.id} product={product}></BrandCards>)
                    }
                </div>
            </div>
            <Specialty></Specialty>
            <Review></Review>
        </div>


    );
};

export default Home;