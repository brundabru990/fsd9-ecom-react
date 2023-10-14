import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductByCategory } from "../../../Api/HttpApi";
import ProductComponent from "../../../components/ProductListComponent/ProductComponent/ProductComponent";
import './ProductCategory.css';

const ProductCategory = () => {
    let { id } = useParams(); 
    const [productList, setProductList] = useState([]);
    useEffect(() => { 
        const fetchData = async () => {
            try {
                const _data = await fetchProductByCategory(id);
                setProductList(_data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, [id]);
    return (
        <>

            <div className="home-products">

                {productList ? (
                    <>
                        <div className="row row-cols-1 row-cols-md-6 g-6 row-center">
                            {productList.slice(0, 12).map(product => (
                                <>
                                    <ProductComponent product={product} key={product._id}> </ProductComponent>
                                </>
                            ))}
                        </div>
                    </>
                ) : (
                    <>Loading...</>
                )}


            </div>
        </>
    )
}

export default ProductCategory;