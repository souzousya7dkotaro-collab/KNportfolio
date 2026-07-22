Vue.component('base-select',{
    props:{
        objectList:{type:Array}
    },
    data(){
        return{
            selectedName:''
        }
    },
    template:`
    <div class="base-calculator">
        <select class="base-select form-control w-50 mx-auto p-2 " name="base-select"
        v-model="$root.selectedName">
            <option :value="object.name"
            v-for="object in objectList" :key="object.id">
            {{object.base}}
            </option>
        </select>
        <base-content :selected-item="$root.selectedItem"
        :golden-ratio="goldenRatio"></base-content>
    </div>
    `,
});

Vue.component('base-content',{
    props:{
        selectedItem:{type:Object},
        goldenRatio:{type:Object}
    },
    template:`
        <div class="base-content" v-if="selectedItem && selectedItem.id !== 0">
            <golden-ratio :selected-item="$root.selectedItem" :golden-ratio="$root.goldenRatio"></golden-ratio>
            <div v-for="object in objectList" :key="object.id"></div>
            <table table-border class="mx-auto ">
                <tr>
                    <td>{{selectedItem.base}}</td>
                    <td>{{selectedItem.mixer}}</td>
                </tr>
                <tr>
                    <td>
                    <span v-if="selectedItem.baseCat === 'solid'">{{selectedItem.gram}}g</span>
                    <span v-else>{{selectedItem.gram}}ml</span>

                    </td>
                    <td>{{selectedItem.ml}}ml</td>
                </tr>
                <tr class="">
                    <td>{{selectedItem.customary}}</td>
                    <td v-if="selectedItem.alcohol === true">{{selectedItem.customary}}</td>
                </tr>
            </table>
        </div>
    `,
    methods:{

    }
});

Vue.component('golden-ratio',{
    props:{
        selectedItem:{type:Object},
        goldenRatio:{type:Object}
    },
    template:`
            <div class="mt-3">
                <h2>黄金比</h2>
                <p>{{this.selectedItem.ratio}}</p>
            </div>
    `,
    computed:{
    }
});

Vue.component('user-input',{
    data(){
        return{
        baseInput:'',
        mixerInput:'',
        totalInput:'',
    }
    },
    watch:{
        '$root.selectedName'(){
            this.clearInputs();
        }
    },
    methods:{
        calculate(type){
            const ratio = this.$root.goldenRatio;

            if(!ratio || ratio.base === '---'|| !this.$root.selectedItem){
                this.clearInputs();
                return;
            }
            
            const baseRatio = Number(ratio.base);
            const mixerRatio = Number(ratio.mixer);
            const ratioSum = baseRatio + mixerRatio;

            if(type === 'base'){
                if(!this.baseInput) return this.clearInputs();
                this.mixerInput = Math.round(this.baseInput*(mixerRatio/baseRatio));
                this.totalInput = this.baseInput + this.mixerInput;
            }else if(type === 'mixer'){
                if(!this.mixerInput) return this.clearInputs();
                this.baseInput = Math.round(this.mixerInput*(baseRatio/mixerRatio));
                this.totalInput = this.baseInput + this.mixerInput;
            }else if(type === 'total'){
                if(!this.totalInput) return this.clearInputs();
                this.baseInput = Math.round(this.totalInput / ratioSum * baseRatio);
                this.mixerInput = Math.round(this.totalInput / ratioSum *mixerRatio);
        }
    },
        clearInputs(){
            this.baseInput='';
            this.mixerInput='';
            this.totalInput='';
        }
    },
    template:`
        <div class="edge">
            <section class="mt-3">
            <h3>入力欄に数値を入れると黄金比で計算されます。</h3>
            <div v-if="$root.selectedItem && $root.selectedItem.category !== 'food'">
            <h4 class="mt-3 fs-6">飲みたい量（トータル）　例：総量４８０ｍｌ分飲みたい</６>
                <input class="form-control border w-50 mx-auto p-2"
                type="number" v-model.number="totalInput"
                @input="calculate('total')">
            </div>
            <h4 class="mt-3 fs-6">材料の量（ベース）：　例：コーヒー豆２５グラム残ってる</h4>
                <input class="form-control border w-50 mx-auto p-2"
                type="number" v-model.number="baseInput"
                @input="calculate('base')">
            <h4 class="mt-3 fs-6">使う水量（ミックス）：</h4>
                <input class="form-control border w-50 mx-auto p-2"
                type="number" v-model.number="mixerInput"
                @input="calculate('mixer')">
            </section>
        </div>
    `
});