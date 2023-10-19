import { useLoaderData } from 'react-router-dom'
import './App.css'
import BrandCards from './BrandCards';

function App() {

  const products = useLoaderData();
  console.log(products);

  return (
    <div className='container flex flex-col items-center'>
      <h1 className='text-3xl font-bold'> All Brands {products.length} </h1>
      <div className='grid md:grid-cols-3 gap-5'>
        {
          products.map(product => <BrandCards key={product.id} product={product}></BrandCards>)
        }
      </div>
    </div>
  )
}

export default App
