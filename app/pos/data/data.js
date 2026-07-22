const INITIAL_PRODUCTS=[
    {id:1, name:"りんご",price:100,stock:1},
    {id:2, name:"ごりら",price:150,stock:1},
    {id:3, name:"らっぱ",price:200,stock:1}
];

//   localStorage.setItem(キー名, 保存する値)
//   ('key',value);このセットで保存
//   localStorage.setItem('mySimpleMemo',value);　mySimpleMemo:'太郎'で保存される

const getProducts = () =>{
    const products = localStorage.getItem('products');
    if(!products){
        localStorage.setItem('products',JSON.stringify(INITIAL_PRODUCTS))
        return INITIAL_PRODUCTS;
    }
    return JSON.parse(products);
};
const saveProducts = (products)=>{
    localStorage.setItem('products',JSON.stringify(products));
};