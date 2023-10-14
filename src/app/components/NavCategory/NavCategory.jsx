import React, { useEffect, useState } from 'react';
import './NavCategory.css';
import { fetchAllCategory } from '../../Api/HttpApi';
import { Link } from 'react-router-dom';

const NavCatBoxComponent = ({ category }) => { 
   

    return (
        <div className="nav-box">
            <div className='box-center'>
                <div className="box-center-div" style={{ width: '64px', height: '64px' }}>
                    <Link to={`/category/${category.id}`}>
                        <img src={category.imgUrl} alt="product" >


                        </img>
                    </Link>
                </div>
                <span>
                    {category.name}
                </span>
            </div>
        </div>
    );
}

const NavCateogry = () => {
    const [productCategories, setProductCategories] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const _data = await fetchAllCategory();
                setProductCategories(_data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, []);


    return (<>



        <div className='nav-cat-container'>
            <div className="nav-cat-box">
                <div className="nav-box"></div>
                {productCategories ? (
                    <>
                        {productCategories.map(category => (
                            <NavCatBoxComponent category={category} key={category.id}></NavCatBoxComponent>
                        ))}

                    </>
                ) : (
                    <>Loading...</>
                )}
                <div className="nav-box"></div>
            </div>
        </div>
    </>);
}

export default NavCateogry;