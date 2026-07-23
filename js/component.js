Vue.component('site-nav',{
    props:{
        isNavOpen:{type:Boolean,default:false}
    },
    data(){
        return{
            isOpen:false,
        };
    },
        template:`
    <nav class="site-nav" :class="{'nav-open':isNavOpen}">
        <div class="container d-flex justify-content-end">
        <button
            type="button" class="nav-toggle" @click="$emit('toggle-nav')" aria-label="メニュー">
            ☰</button>

        <ul class="flex-row" id="nav" >
            <li><a href="#my" @click="$emit('toggle-nav')">自己紹介</a></li>
            <li><a href="#application" @click="$emit('toggle-nav')">アプリケーション</a></li>
            <li><a href="#skill" @click="$emit('toggle-nav')">スキル</a></li>
            <li><a href="#dev" @click="$emit('toggle-nav')">開発環境</a></li>
            <li><a href="#license" @click="$emit('toggle-nav')">所有資格</a></li>
            <li><a href="#qa" @click="$emit('toggle-nav')">お問い合わせ</a></li>
        </ul>
        </div>
    </nav>

        `
    });

Vue.component('app-list',{
    props:{
        app:{type:Object}
    },
    template:`
        <a :href="'app/' +app.folder+ '/' +app.file"
        class="mb-3 border border-3 border-primary">
            <img :src="\`images/\${app.image}\`" :alt="app.name">
        </a>
    `
});

Vue.component('skill-list',{
    props:{
        skill:{type:Object},
        listContent:{type:Array},
        appList:{type:Array}
    },
    data(){
        return{
            isOpen:false
        };
    },
        methods:{
        toggle(){
            this.isOpen=!this.isOpen;
        },
    },
    //2-1listContentをfilteredContentに
    template:`
        <section :id="skill.category">
            <h2 :class="'contents-title ' + skill.category + '-header'" @click="toggle()">
            <span class="float-start">{{isOpen ? '△':'▼'}}</span>
            {{skill.title}}
            <span class="float-end">{{isOpen ? '△':'▼'}}</span>
            </h2>
            <div v-if="isOpen">
            <div v-if="skill.category === 'application'" class="app-container">
            <app-list
            v-for="app in appList" :key="app.id" :app="app"></app-list>
            </div>
            <div v-else class="skill-container">
            <list-content
            v-for="content in filteredContent" 
            :key="content.id" 
            :content="content"
            @content-modal="$emit('content-modal',$event)">
            </list-content>
            </div>
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
    <button @click="openContentModal" class="list-content">
        <img :src="'images/' + content.image" alt="content-img" :data-id="content.id"
        class="mb-3 border border-3 border-primary">
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

