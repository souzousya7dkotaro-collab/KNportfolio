const getTransactionHistory = () => {
const history = localStorage.getItem('transaction_history');
if(history){
    return JSON.parse(history);
}else{
    return[];
}
};
    const addTransactionHistory = (type,product,quantity) =>{
    const history = getTransactionHistory();
    const newHistoryItem={
        type:type,
        id:Date.now()+Math.random(),
        date:new Date().toLocaleString(),
        productId:product.id,
        name:product.name,
        quantity:Number(quantity)
    };
    history.push(newHistoryItem);
    localStorage.setItem('transaction_history',JSON.stringify(history));
};
