new Vue({
    el:'#app1',
    data:{
        isOpen:false,
        skillList:skillList,
        listContent:listContent,
        appList:appList,
        isNavOpen:false,
    },
    methods:{
        openContentModal(content){
            this.$refs.openContentModal.openContentModal(content);
        },
        toggleNav(){
            this.isNavOpen = !this.isNavOpen;
        }
    }
});