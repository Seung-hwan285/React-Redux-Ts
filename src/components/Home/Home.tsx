import React, {useEffect, useState} from "react";
import axios from "axios";
import {useGetAllProductsQuery} from "../../features/Home/productApi";
import "../../css/home.scss"
import {useDispatch, useSelector} from "react-redux";
import {addToCart, deleteCart} from "../../features/Cart/cartSlice";
import { useNavigate } from 'react-router-dom';
import {showOpen} from "../../features/Home/modalSlice";
import {RootState} from "../../store";
import Modal from "../Modal/Modal";
function Home() :JSX.Element{

    const {data,isLoading} = useGetAllProductsQuery("productsApi");

    const dispatch = useDispatch();

    const history = useNavigate();



    const showUI = useSelector((state: RootState)=>state.modal);

    let showUiValue =showUI.show;


    const onDeleteCart = (product : React.MouseEvent<HTMLButtonElement>)=>{
        dispatch(deleteCart(product));
    }


    const onAddToCart =(product : React.MouseEvent<HTMLButtonElement>)=>{
        // action 전달
        dispatch(showOpen());

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
                                    {/*modaldata product ={product}*/}
                                    <button onClick={()=>onAddToCart(product)} className="product-btn">상품 추가하기</button>
                                    <button id ="delete-btn" onClick={()=>onDeleteCart(product)}>상품 삭제</button>



                                </div>

                            ))

                        }
                            {showUiValue ? <Modal

                            /> : null}

                        </div>


                    </>
                )
            }
        </div>
    )
}

export default Home;