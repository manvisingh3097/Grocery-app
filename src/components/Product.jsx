import { Link } from "react-router-dom";
import Constants from "../api/Constants";

const Product = (props) => {
    const { _id, productName, price, mrp, unit, image } = props.data;

    return (
        <div className="col-sm-4">
            <div className="card">
                <img
                    src={Constants.IMAGE_URL + image}
                    alt=""
                    className="card-img-top" // Corrected className attribute
                />
                <div className="card-body">
                    <h5 className="card-title">{productName}</h5>
                    <p className="card-text">{unit}</p>
                    <h2>
                        <span>&#8377;</span>
                        {price}
                        <span style={{ fontSize: '22px', color: '#888', marginLeft: '10px' }}> {/* Corrected style attribute */}
                            <del>
                                <span>&#8377;</span>
                                {mrp}
                            </del>
                        </span>
                    </h2>
                    <Link to={`/products/detail/${_id}`} className="btn btn-primary btn-block"> {/* Corrected class attribute */}
                        Show Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;
