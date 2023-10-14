import { Link } from "react-router-dom";

 

const ProductComponent = ({product})=>{
    // let { id } = useParams();
    // const [product, setProduct] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const _data = await fetchProductDetail(id);
    //             setProduct(_data);
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     fetchData();
    // }, []);


    return (
        <>

            <div className="col p-2"  key={product.id}>
                <Link to={`/products/${product.id}`}>
                
              
                                        <div className="card h-100">
                                           <div className='product-img-box'> <img src={product.imgUrl} style={{height:'200px',maxWidth:'200px'}} className="card-img-top" alt="..." /></div>
                                            <div className="card-body">
                                                <h5 className="card-title text-truncate">{product.name}</h5>
                                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                
                                                <div className="fw-bold">Min. {(100/(Math.random(10)*10)).toFixed(2)}% Off</div>
                                            </div>
                                            <div className="card-footer">
                                                <small className="fw-bold">Price : ₹ {product.price} </small>
                                            </div>
                                        </div>
                                        </Link>
              </div> 
        </>
    )
}

export default ProductComponent;