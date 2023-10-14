import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchProductDetail } from "../../../Api/HttpApi";
import './ProductDetail.css';

const ProductDetail = () => {

    let { id } = useParams();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const _data = await fetchProductDetail(id);
                setProduct(_data);
                console.log(_data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, [id]);


    return (
        <>
            
    <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src={product.imgUrl} className="product_imgUrl d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy"/>
      </div>
      <div className="col-lg-6">
        <h1 className="display-9 fw-bold text-body-emphasis lh-1 mb-3">{product.name}</h1>
        <p className="lead">
         
          
        </p>
        <div className="container d-flex">
                <div className="col-md-3 p-3"> 
                  Seller
                </div>
                <div className="col-md-9 p-3">  
                 {/* {product.sellerUser.firstName} */}
                </div>
         </div>
        <div className="container d-flex">
                <div className="col-md-3 p-3"> 
                  Description
                </div>
                <div className="col-md-9 p-3">  
                {product.description}
                </div>
         </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn  btn-outline-secondary  btn-lg px-4 me-md-2">Add To wishlisth</button>
          <button type="button" className="btn btn-primary btn-lg px-4">Add To Cart</button>
        </div>
      </div>
    </div>
  </div>

        </>
    )
}

export default ProductDetail;