new Vue({
    el:'#arrive',
    data:{
        products:getProducts(),
        newProductName:'',
        newProductPrice:'',
        selectedProduct:'',
        numberProduct:1
    },
    methods:{
        newProduct(){
            //１：商品名の入力、価格の入力
            //2:入力されて登録されたらIDを新しく作る
            //3:新しく作られたら商品名と価格を連携して配列を作る
            //4:initialproductに突っ込む
            //5:保存するローカルストレージ（すでに答えを知っている）
            // 1. 新商品名と価格が空っぽじゃないかチェックする
        // 2. 新しいIDを作る（現在の最大ID + 1）
        // 3. 商品リストの配列に新しいデータを追加する
        // 4. ローカルストレージに保存する
        // 5. 入力欄を空っぽにリセットする
            if (!this.newProductName || !this.newProductPrice){
                alert('商品名と価格を入力して下さい');
                return;
        }
        const newId = this.products.length > 0 ?
        this.products[this.products.length -1].id +1 :1;
        //オブジェクト作成
        const newProduct ={
            id:newId,
            name:this.newProductName,
            price:this.newProductPrice,
            stock:0
        };
        //配列に追加
        this.products.push(newProduct);
        //ローカルストレージに保存
        saveProducts(this.products);
        alert(`「${this.newProductName}」を登録しました。`)
        //入力欄をクリア
        this.newProductName='';
        this.newProductPrice='';
        },
        arriveProduct(){
            //商品名を押す
            //数を選ぶ
            //登録ボタンを押す
            //取引履歴を追加する
            //ローカルストレージに保存する
            //さくじょする　
            if (!this.selectedProduct){
                alert('商品名を選んで下さい');
                return;
        }
            const product = this.products.find(product => product.id
                === Number(this.selectedProduct))
            if(product){
                product.stock += Number(this.numberProduct);
                saveProducts(this.products);

                addTransactionHistory('入荷',product,this.numberProduct);

                alert(`${product.name}の在庫を${this.numberProduct}個を増やしました。`);
                this.selectedProduct='';
                this.numberProduct=1;
            }
        }

    }
});