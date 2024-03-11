const p = document.querySelectorAll('p');
const img = document.querySelectorAll('.img')

function addHidden(el) {
    p.forEach((valor,indice) => {
        if(!valor.classList.contains('hidden')){
            valor.classList.add('hidden')
            img[indice].src = "assets/img/icon-plus.svg";
        }

        if(el.classList.contains(`active-hidden-${indice}`)){
            p[indice].classList.remove('hidden');
            img[indice].src = "assets/img/icon-minus.svg";
        }
    });
}

document.addEventListener('click',(e) => {
    const el = e.target;
    let classeChanges = el.classList.value.split(' ');
    classeChanges = classeChanges[0];
    
    if(el.classList.contains(classeChanges)){
        addHidden(el);
    }

});