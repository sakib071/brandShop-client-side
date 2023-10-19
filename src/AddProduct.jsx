
const AddProduct = () => {
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
            })

    }

    return (
        <div>
            <h2 className="text-3xl font-bold mb-10 mt-24">Add Product</h2>
            <form onSubmit={handleAddProduct} className="bg-base-100 w-fit mx-auto shadow-md p-10 rounded-lg">
                <div className="form-control space-y-5">
                    <div className="flex gap-5 justify-center">
                        <input type="text" name="name" placeholder="Name" className="input input-bordered w-full max-w-sm" />
                        <input type="text" name="brandName" placeholder="Brand name" className="input input-bordered w-full max-w-sm" />
                    </div>
                    <div className="flex gap-5 justify-center">
                        <input type="text" name="type" placeholder="Type" className="input input-bordered w-full max-w-sm" />
                        <input type="number" name="price" placeholder="Price" className="input input-bordered w-full max-w-sm" />
                        <input type="number" name="rating" placeholder="Rating" className="input input-bordered w-full max-w-sm" />
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