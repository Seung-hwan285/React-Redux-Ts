interface JsonType {

    id:number;
    name :string;
    price : number;
    img : string;
}

interface ProductType{
    product : JsonType[];
}


export const product=[(
    {
        id:1,
        name : "iPhone 12 Prp",
        price:999,
        img :"https://raw.githubusercontent.com/chaoocharles/complete-shopping-cart/main/backend/images/galaxyS.png"

    }
)];

