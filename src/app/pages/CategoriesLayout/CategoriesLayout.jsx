import { Outlet } from "react-router-dom";
import NavCateogry from "../../components/NavCategory/NavCategory";

const CategoriesLayout = ()=>{ 
    return ( 
        <>
         <NavCateogry></NavCateogry> 
         <Outlet> </Outlet>
        </>
    )
}

export default CategoriesLayout;