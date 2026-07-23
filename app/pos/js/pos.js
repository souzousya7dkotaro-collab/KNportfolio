new Vue({
    el:'#index',
    data:{

    },
    methods:{
        clearLocalStorage(){
            window.confirm("消去しますか？")
            localStorage.clear();
        }
    }
})