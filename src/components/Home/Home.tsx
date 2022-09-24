import {useGetAllProductsQuery} from "../../features/Product/productApi";



function Home() :JSX.Element{


    const {data,isLoading} = useGetAllProductsQuery('products');


    console.log(isLoading);
    console.log(data);
    return(
        <div className="home-container">
            {isLoading ? <h2>로딩중..</h2>
            :   (
                <>
                    <h2>New Arrivals</h2>

                    {data.map((product :any)=>(
                        <div key={product.id}>
                            <h3>{product.name}</h3>
                            <img src={product.img} alt={product.name}/>
                            <div className="product-detail">
                                <span>{product.price}</span>
                            </div>

                            <button>상품추가하기</button>
                        </div>
                    ))

                    }
                </>
                )
            }
        </div>
    )
}

export default Home;