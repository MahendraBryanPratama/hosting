const header = document.querySelector("header");
window.addEventlistener ("scroll" function() {
	header.classList.toogle ("sticky" window.scrollY > 100);
});

let	menu = document.querySelector('#menu-icon');
let	navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toogle('bx-x');
	navlist.classList.toogle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-bx');
	navlist.classList.remove('open');
};