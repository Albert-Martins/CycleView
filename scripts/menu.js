function openMenu(){
    menu = document.querySelector('#menu');
    overlay = document.querySelector('#menuoverlay');

    overlay.style.display = 'inline-block';
    menu.style.left = 'auto';
    menu.style.right = '0%';

}

function closeMenu(){
    menu = document.querySelector('#menu');
    overlay = document.querySelector('#menuoverlay');

    overlay.style.display = 'none';
    menu.style.left = '100%';
    menu.style.right = 'auto';
}