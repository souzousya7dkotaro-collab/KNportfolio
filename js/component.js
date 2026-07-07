Vue.component('skill-list',{
    props:{
        skill:{type:Object},
        skillContent:{type:Array}
    },
    template:`
        <section :id="skill.category">
            <h2 :class="'contents-title ' + skill.category + '-header'">{{skill.title}}</h2>
            <div>
            <skill-content
            v-for="content in skillContent" 
            :key="content.id" 
            :content="content">
            </skill-content>
            </div>
            </section>
    `,
});

Vue.component('skill-content',{
    props:{
    content:{type:Object, required:true}
    },
    template:`
    <button>
        <img :src="'images/' + content.image" alt="content-img" :data-id="content.id">
    </button>
    `
});

