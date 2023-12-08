function openMenu(){
    menu = document.querySelector('#menu');
    overlay = document.querySelector('#menuoverlay');
    closeIcon = document.querySelector('#closeMenuIcon');

    overlay.style.display = 'inline-block';
    menu.style.left = 'auto';
    menu.style.right = '0%';
    closeIcon.style.display = 'inline-block';

}

function closeMenu(){
    menu = document.querySelector('#menu');
    overlay = document.querySelector('#menuoverlay');
    closeIcon = document.querySelector('#closeMenuIcon');

    overlay.style.display = 'none';
    menu.style.left = '100%';
    menu.style.right = 'auto';
    closeIcon.style.display = 'none';
}