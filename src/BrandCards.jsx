import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BrandCards = ({ product }) => {
    const { brandName, image } = product;

    return (
        <div>
            <Link to={`brands/${brandName}`}>
                <div className="card card-compact w-96 h-full bg-base-100 hover:shadow-xl transition-all ease-in-out">
                    <figure className='flex-grow p-5'><img src={image} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title p-1 flex-grow absolute bottom-5 left-5">{brandName}</h2>
                    </div>
                </div>
            </Link>

        </div>
    );
};

BrandCards.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        brandName: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
};

export default BrandCards;
