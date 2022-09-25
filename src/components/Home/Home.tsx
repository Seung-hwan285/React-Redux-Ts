import React, {useEffect, useState} from "react";
import axios from "axios";
import {useGetAllProductsQuery} from "../../features/Product/productApi";
import "../../css/home.scss"
import {useDispatch} from "react-redux";
import {addToCart} from "../../features/Cart/cartSlice";

function Home() :JSX.Element{

    const {data,isLoading} = useGetAllProductsQuery("productsApi");

    const dispatch = useDispatch();

    const onAddToCart =(product : React.MouseEvent<HTMLButtonElement>)=>{
        // action 전달
        dispatch(addToCart(product));

    }

    return(
        <div className="home-container">
            {isLoading ? <h2>로딩중..</h2>
                :   (
                    <>
                        <h2 className="title">New Phones</h2>
                        <div className="products">
                        {
                            data.map((product : any)=>(

                                <div key={product.id} className="product">
                                    <h3>{product.name}</h3>

                                    <img id="image" src={product.img}/>


                                    <div>
                                        <span className="price">{product.price}</span>
                                    </div>
                                    <button onClick={()=>onAddToCart(product)} className="product-btn">상품 추가하기</button>

                                </div>
                            ))

                        }


                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Home;