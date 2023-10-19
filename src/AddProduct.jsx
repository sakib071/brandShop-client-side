import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'

const AddProduct = () => {

    const products = useLoaderData();

    console.log(products);

    const handleAddProduct = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const imageURL = form.imageURL.value;
        const description = form.description.value;
        const newProduct = { name, brandName, type, price, rating, imageURL, description }
        console.log(newProduct);

        //send data to server
        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
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
            <h2 className="text-3xl font-bold mb-5 mt-48 text-center">Add Product</h2>
            <form onSubmit={handleAddProduct} className="bg-base-100 w-fit mx-auto shadow-md p-10 rounded-lg">
                <div className="form-control space-y-5">
                    <div className="flex gap-5 justify-center">
                        <input type="text" name="name" placeholder="Name" className="input input-bordered w-full max-w-sm" />
                        <input type="text" name="brandName" placeholder="Brand name" className="input input-bordered w-full max-w-sm" />
                    </div>
                    <div className="flex gap-5 justify-center">
                        <input type="text" name="type" placeholder="Type" className="input input-bordered w-full max-w-sm" />
                        <input type="text" name="price" placeholder="Price" className="input input-bordered w-full max-w-sm" />
                        <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full max-w-sm" />
                    </div>
                    <div className="flex flex-col gap-5 justify-center">
                        <input type="text" name="imageURL" placeholder="Image URL" className="input input-bordered w-full" />
                        <input type="text" name="description" placeholder="Description" className="input input-bordered w-full" />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-neutral w-full">Add Product</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;