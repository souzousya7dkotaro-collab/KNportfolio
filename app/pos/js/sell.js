new Vue({
    el:'#sell',
    data:{
        products:getProducts(),
        cartItems:[
            {id:Date.now(),selectedProduct:null,quantity:1}
        ],
        inputMoney:0
    },
    computed:{
        totalBeforeTax(){
            let total = 0;
            this.cartItems.forEach(item=>{
                if(item.selectedProduct){
                    total += item.selectedProduct.price * item.quantity;
                }
            });
            return total;
        },
        tax(){
            return Math.floor(this.totalBeforeTax*0.10);
        },
        totalWithTax(){
            return this.totalBeforeTax + this.tax;
        },
        outputChange(){
            if(this.inputMoney >= this.totalWithTax){
                return this.inputMoney - this.totalWithTax;
            }
            return 0;
        }
    },
    watch:{
        cartItems:{
            deep:true,
            handler(newVal){
                const lastItem = newVal[newVal.length-1];
                if(lastItem.selectedProduct !== null){
                    this.addItem();
                }
            }
        }
    },
    methods:{
        addItem(){
            this.cartItems.push({
                id:Date.now()+Math.random(),
                selectedProduct:null,
                quantity:1
                });
            },
        checkOut(){
            if(this.totalWithTax === 0){
                alert("商品が選択されていません。");
                return;
            }
            if(this.totalWithTax > this.inputMoney){
                alert("現金が足りません。");
                return;
            }

            let Error =false;
            this.cartItems.forEach(item =>{
                if(item.selectedProduct){
                    const targetProduct = this.products.find(p => p.id === item.selectedProduct.id);
                    if(targetProduct){
                        if(item.quantity > targetProduct.stock){
                            alert(`「${targetProduct.name}」の在庫が足りません。（現在の在庫：${targetProduct.stock}個`);
                            Error = true;
                        }
                    }
                }
            });
            if(Error){
                return;
            }

            this.cartItems.forEach(item=> {
                if(item.selectedProduct){
                    const targetProduct = this.products.find(p => p.id === item.selectedProduct.id);
                    if(targetProduct){
                        targetProduct.stock -= item.quantity;
                    }
                    addTransactionHistory('販売',item.selectedProduct,item.quantity);
                    }
            });
            saveProducts(this.products);

            alert("清算が完了しました。お釣りは"+this.outputChange+"円です");
            this.clearCart();
        },
        clearCart(){
            this.cartItems=[
                {id:Date.now(),selectedProduct:null,quantity:1}
            ];
            this.inputMoney = 0;
        }
    }
});