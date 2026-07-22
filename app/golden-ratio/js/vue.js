new Vue({
    el:'#app',
    data:{
        objectList:objectList,
        selectedName:''
    },
        computed:{
        selectedItem(){
            return this.objectList.find(item => item.name
                === this.selectedName)||null;
        },
        goldenRatio(){
            if(!this.selectedItem||this.selectedItem.id === 0){
                return {base:'---',mixer:'---'};
            }
            const gram = this.selectedItem.gram;
            const ml = this.selectedItem.ml;
            const gcd = getGCD(gram,ml);

            return{
                base: gram/gcd,
                mixer: ml/gcd
            }
        }
    },
});