const cyclistFilter = document.querySelector('#cyclist-filter');
const pedalFilter = document.querySelector('#pedal-filter');
const pedalItems = document.querySelectorAll('#pedal-filter div.filter-item-container');

let pedaladas;

pedalItems.forEach(element => {
    console.log
    element.style.display = 'none';
});

loadQuery('select cd_ciclista, pedal, distance, locality from pedaladas', (error, results) => {
    if (error) {
        console.error('Erro:', error);
      } else {
        
        pedaladas = results[0].values.sort((a, b) => {
            if (a[0] !== b[0]) {
                return a[0] - b[0];
            }
            return a[1] - b[1];
        });
    
        //console.log(pedaladas);
    }
});

//Insere os ciclistas no filtro
for(i = 1; i <= 19; i++){
    cyclistFilter.innerHTML = cyclistFilter.innerHTML + `<div class="filter-item" >
    <input type="checkbox" id="ciclista${i.toString().padStart(2,'0')}" value="${i}" disabled >
    <label for="ciclista${i.toString().padStart(2,'0')}" id="${i}" onmouseover="showItems(this)" disabled >Ciclista ${i.toString().padStart(2,'0')}</label><br>
</div>`
}



//pega o valor do atributo do elmento passado nos parametros
function getCSSAttribute(elem, attr){
    return window.getComputedStyle(elem).getPropertyValue(attr);
}

function toggleDropdown(elem) {
    firstChild = elem.firstElementChild;

    //se o elemento clicado for o headerbox apenas e não seus filhos
    if(event.target.classList.contains('header-box')){
    
        var overlay = document.getElementById("overlay");

        if (firstChild.style.display === "flex") {
            firstChild.style.display = "none";
            overlay.style.display = "none";
        } else {
            firstChild.style.display = "flex";
            overlay.style.display = "inherit";
        }
    }
}

function closeDropdown() {
    var dropdown = document.querySelectorAll(".filter-box");
    var overlay = document.getElementById("overlay");
    dropdown.forEach(function (item){
        item.style.display = "none";
        overlay.style.display = "none";
    });
}

function toggleItems(elem){
    
    let cyclist = elem.firstElementChild.value;

    pedalItems.forEach(element => {
        element.style.display = 'none';
    });

    pedalItems.forEach(element => {
        if(element.ciclista = cyclist){
            console.log(element.ciclista);
            element.style.display = 'inline-block';
        }else{
            
            element.style.display = 'none';
        }
    });
}

function hideAllItems(){
    items = document.querySelectorAll('.filter-item-container');

    items.forEach(function(item){
        item.style.display = 'none';
    });
}

function showItems(master){
    
    IDitem = master.id;

    items = document.querySelectorAll('.filter-item-container');

    hideAllItems();

    items.forEach(function(item){
        if(item.getAttribute('ciclista') == IDitem){
            item.style.display = 'inline-block';   
        }
    });
}