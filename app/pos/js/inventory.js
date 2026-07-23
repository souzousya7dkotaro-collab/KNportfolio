new Vue({
    el:'#inventory',
    data:{
        products:getProducts(),
        history:getTransactionHistory()
    },
    computed:{
        allProductStock(){
            let total = 0;
            this.products.forEach(product=>{
                total += product.stock;
            });
            return total;
        },
            allProductPrice(){
            let total = 0;
            this.products.forEach(product=>{
                total += product.stock*product.price;
            });
            return total;
        },
    }
});