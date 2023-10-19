import PropTypes from 'prop-types';

const BrandCards = ({ product }) => {
    const { brandName, image } = product;

    return (
        <div>
            <div className="card card-compact w-96 h-full bg-base-100 shadow-xl">
                <figure><img src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{brandName}</h2>
                </div>
            </div>
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
