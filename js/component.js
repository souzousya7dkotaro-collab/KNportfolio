Vue.component('skill-list',{
    props:{
        skill:{type:Object},
        listContent:{type:Array}
    },
    //2-1listContentをfilteredContentに
    template:`
        <section :id="skill.category">
            <h2 :class="'contents-title ' + skill.category + '-header'">
            {{skill.title}}</h2>
            <div>
            <list-content
            v-for="content in filteredContent" 
            :key="content.id" 
            :content="content"
            @content-modal="$emit('content-modal',$event)">
            </list-content>
            </div>
            </section>
    `,
    computed:{
        filteredContent(){
            return this.listContent.filter
            (content=>content.category === this.skill.category);
        }
    }
});

Vue.component('list-content',{
    props:{
    content:{type:Object}
    },
    methods:{
        openContentModal(){
            this.$emit('content-modal',this.content)
    }},
    template:`
    <button @click="openContentModal">
        <img :src="'images/' + content.image" alt="content-img" :data-id="content.id">
    </button>
    `
});

Vue.component('content-modal',{
    template:`
    <dialog ref="openContentModal" id="content-modal" class="rounded-3 shadow border-0 p-0">
    <div class="content-modal" v-if="filteredContent">
        <div class="content-modal-header border-bottom-0 pb-0">
            <button class="btn-close ms-auto" type="button" id="content-modal-close" aria-label="Close"
            @click="closeModal"></button>
        </div>
        <div class="content-modal-body text-center p-4">
            <img :src="'images/'+filteredContent.image" :alt="filteredContent.id" :id="filteredContent.id" 
            class="mb-3 border border-3 border-primary">
            <h2 id="skill-modal-name">{{filteredContent.name}}</h2>
            <span id="skill-modal-add">{{filteredContent.add}}</span>
            <p id="skill-modal-desc">{{filteredContent.desc}}</p>
        </div>
    </div>
</dialog>
    `,
    data(){return{
        filteredContent:null,
    }},
    methods:{
        openContentModal(content){
            this.filteredContent=content;
            this.$refs.openContentModal.showModal();
        },
        closeModal(){
            this.filteredContent=null;
            this.$refs.openContentModal.close();
        }
    }
});

