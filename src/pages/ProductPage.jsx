import Navbar from "../components/Navbar";
import SubCategory from "../components/SubCategory";
import ProductList from "../components/ProductList";
const ProductPage = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <SubCategory />
                    </div>
                    <div className="col-lg-3">
                        <ProductList />
                    </div>
                </div> 
            </div>
        </>
    );
};
export default ProductPage;