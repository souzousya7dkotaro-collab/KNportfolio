new Vue({
    el:'#inventory',
    data:{
        products:getProducts(),
        history:getTransactionHistory()
    }
});