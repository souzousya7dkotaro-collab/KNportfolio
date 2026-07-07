Vue.component('header-component',{
    props:{
        isNavOpen:Boolean,
    },
    template:`
    <header class="page-header wrapper" :class="{open:isNavOpen}">
        <h1 ><a href="index.html">KNのポートフォリオ</a></h1>
        <nav>
            <ul class="flex-row">
                <li><a href="#my">自己紹介</a></li>
                <li><a href="#skill">スキル</a></li>
                <li><a href="#dev">開発環境</a></li>
                <li><a href="#license">所有資格</a></li>
                <li><a href="#study">学習中の資格</a></li>
                <li><a href="#interest">興味のある分野</a></li>
                <li><a href="#app">作品・アプリ</a></li>
                <li><a href="#hobby">趣味・特技</a></li>
                <li><a href="#qa">お問い合わせ</a></li>
                <li><a href="#etc">etc...</a></li>
            </ul>
        </nav>
        <button type="button" class="nav-btn" id="nav-btn" @click="$emit('toggle-nav')">
                <span class="nav-btn-line">
                    <span class="visually-hidden ">メニュー開閉</span>
                </span>
            </button>
        <img src="images/SPmainvisual.jpg" alt="SP_mainvisual">
    </header>
    `

});

new Vue({
    el:'#app',
    data:{
        isNavOpen:false
    },
    methods:{
        toggleNav(){
            this.isNavOpen = !this.isNavOpen;
        }
    }
    });
