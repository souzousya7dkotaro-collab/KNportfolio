skillItems= [
    {id:1,name:'HTML5',image:'skill01.png',desc:'HTMLとはWebページの構造や内容を記述するための基本言語',
        add:'見出し、文章、画像、リンク、リスト、表、フォーム'},
    {id:2,name:'CSS3',image:'skill02.png',desc:'CSSとはWebページの「見た目」や「レイアウト」を指定するスタイルシート言語',
        add:'背景、画像の幅と高さ、余白、装飾、フレックス、グリッド、１カラム、２カラム、レスポンシブ対応、タイル型レイアウト'},
    {id:3,name:'javascript',image:'skill03.png',desc:'javascriptとはWebサイトに動きをつけたり、便利な機能を追加したりするために開発されたプログラミング言語',
        add:'if文、while文、for文、配列、関数、addEventListener、'},
];

const skillContent = document.querySelector('.skill-content');

const skillModal = document.getElementById('skill-modal');
const skillModalImg = document.getElementById('skill-modal-img');
const skillModalName = document.getElementById('skill-modal-name');
const skillModalDesc = document.getElementById('skill-modal-desc');
const skillModalAdd = document.getElementById('skill-modal-add');
const skillModalClose = document.getElementById('skill-modal-close');

let htmlContent = '';
for (let item of skillItems){
    htmlContent +=
    `
    <button>
        <img src="images/${item.image}" alt="skill-img" data-id="${item.id}">
    </button>
    `;
}        
    skillContent.innerHTML = htmlContent;

    skillContent.addEventListener('click',(event)=>{
        const skillId = event.target.dataset.id;
        if(skillId){
            for(let item of skillItems){
                if(item.id == skillId){
                    skillModalImg.src = './images/' + item.image;
                    skillModalName.innerText = item.name;
                    skillModalAdd.innerText = item.add;
                    skillModalDesc.innerText = item.desc;
                }
            }
        }
        skillModal.showModal();
    });

    skillModalClose.addEventListener('click',()=>{
        skillModal.close();
    });