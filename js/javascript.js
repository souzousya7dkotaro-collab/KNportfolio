

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