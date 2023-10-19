import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {

    const product = useLoaderData();
    const { _id, name, brandName, type, price, rating, imageURL, description } = product;

    const handleUpdateProduct = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name?.value;
        const brandName = form.brandName?.value;
        const type = form.type?.value;
        const price = form.price?.value;
        const rating = form.rating?.value;
        const imageURL = form.imageURL?.value;
        const description = form.description?.value;
        const updatedProduct = { name, brandName, type, price, rating, imageURL, description }

        fetch(`http://localhost:5000/product/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div>
            <h2 className="text-3xl font-bold mb-10 mt-24 text-center">Update Product: {name}</h2>
            <form onSubmit={handleUpdateProduct} className="bg-base-100 w-fit mx-auto shadow-md p-10 rounded-lg">
                <div className="form-control space-y-5">
                    <div className="flex gap-5 justify-center">
                        <input type="text" name="name" defaultValue={name} placeholder="Name" className="input input-bordered w-full max-w-sm" />
                        <input type="text" name="brandName" defaultValue={brandName} placeholder="Brand name" className="input input-bordered w-full max-w-sm" />
                    </div>
                    <div className="flex gap-5 justify-center">
                        <input type="text" name="type" defaultValue={type} placeholder="Type" className="input input-bordered w-full max-w-sm" />
                        <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full max-w-sm" />
                        <input type="text" name="rating" defaultValue={rating} placeholder="Rating" className="input input-bordered w-full max-w-sm" />
                    </div>
                    <div className="flex flex-col gap-5 justify-center">
                        <input type="text" name="imageURL" defaultValue={imageURL} placeholder="Image URL" className="input input-bordered w-full" />
                        <input type="text" name="description" defaultValue={description} placeholder="Description" className="input input-bordered w-full" />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-neutral w-full">Update Product</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UpdateProduct;