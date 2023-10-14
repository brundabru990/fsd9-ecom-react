import { Outlet } from "react-router";
import NavCateogry from "../../components/NavCategory/NavCategory";

const ProductsLayout = ()=>{
    return (
        <>
        <NavCateogry></NavCateogry>
        <Outlet> </Outlet>
        <div className="col text-center">

             <img src="https://new-ella-demo.myshopify.com/cdn/shop/files/home-20-banner-large-1.png?v=1646369739&amp;width=2000"/>
        </div>
        </>
    )
}

export default ProductsLayout;