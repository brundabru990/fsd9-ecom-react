import React, { useEffect, useState } from 'react';
import './NavCategory.css';
import { fetchAllCategory } from '../../Api/HttpApi';

const NavCatBoxComponent = ({ category }) => {
    return (
        <div className="nav-box">
            <div className='box-center'>
                <div className="box-center-div" style={{ width: '64px', height: '64px' }}>
                    <img src={category.imgUrl} alt="product" />
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
                            <NavCatBoxComponent category={category}></NavCatBoxComponent>
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