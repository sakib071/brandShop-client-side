import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";

const ProductCard = ({ product }) => {
    const { _id, name, brandName, type, price, rating, imageURL, description } = product;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://technology-electronics-server-with-auth-q8ov57eni.vercel.app/product/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Product has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className="card card-side bg-base-100 h-[30vh] w-[30vw] mx-auto shadow-xl">
            <figure className="ml-10"><img src={imageURL} alt="" /></figure>
            <div className="card-body justify-center text-left flex flex-row items-center gap-3">
                <div className="space-y-2">
                    <h2 className="text-xl font-bold">{name}</h2>
                    <p className="text-sm w-64">{description}</p>
                    <div className="flex gap-2">
                        <div className="badge badge-outline">{brandName}</div>
                        <div className="badge badge-outline">{type}</div>
                    </div>
                    <div className="">
                        <p className="text-lg font-bold">${price}</p>
                        <p className="text-md font-semibold">Rating: <span className="font-bold text-amber-400">{rating}</span> </p>
                    </div>
                </div>

                <div className="card-actions">
                    <div className="flex flex-col space-y-3">
                        <Link to={`/product/details/${_id}`}>
                            <button className="btn btn-sm">Details</button>
                        </Link>
                        <a href={`http://localhost:5173/product/updateProduct/${_id}`}>
                            <button className="btn w-full btn-sm">Edit</button>
                        </a>
                        <button onClick={() => handleDelete(_id)} className="btn bg-red-600 text-white btn-sm hover:text-black">Delete</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

ProductCard.propTypes = {
    product: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        brandName: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        imageURL: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
};


export default ProductCard;