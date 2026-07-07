new Vue({
    el:'#app1',
    data:{
        isOpen:false,
        skillList:skillList,
        listContent:listContent,
    },
    methods:{
        toggle(){
            this.isOpen=!this.isOpen;
        }
    }
});