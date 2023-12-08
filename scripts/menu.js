function openMenu(elem){

    if(elem.id == 'openDataIcon'){
        menu = document.querySelector('#menuDados');
        overlay = document.querySelector('#menuoverlay');
        closeIcon = document.querySelector('#closeDataMenuIcon');
    }else if(elem.id == 'openOptionsIcon'){
        menu = document.querySelector('#menuOpcoes');
        overlay = document.querySelector('#menuoverlay');
        closeIcon = document.querySelector('#closeOptionsMenuIcon');
    }
    /*
    menu = document.querySelector('#menuOpcoes');
    overlay = document.querySelector('#menuoverlay');
    closeIcon = document.querySelector('#closeOptionsMenuIcon');
    */

    overlay.style.display = 'inline-block';
    menu.style.left = 'auto';
    menu.style.right = '0%';
    closeIcon.style.display = 'inline-block';

}

function closeMenu(elem){

    if(elem.id == 'openDataIcon'){
        menu = document.querySelector('#menuDados');
        overlay = document.querySelector('#menuoverlay');
        closeIcon = document.querySelector('#closeDataMenuIcon');
    }else if(elem.id == 'openOptionsIcon'){
        menu = document.querySelector('#menuOpcoes');
        overlay = document.querySelector('#menuoverlay');
        closeIcon = document.querySelector('#closeOptionsMenuIcon');
    }
    /*
    menu = document.querySelector('#menuOpcoes');
    overlay = document.querySelector('#menuoverlay');
    closeIcon = document.querySelector('#closeOptionsMenuIcon');
    */
    overlay.style.display = 'none';
    menu.style.left = '100%';
    menu.style.right = 'auto';
    closeIcon.style.display = 'none';
}