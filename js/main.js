//"use strict";

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const menu = document.querySelector("#menu").cloneNode(1);
const menuList = document.querySelector("#menu-list");
const subMenu = document.querySelector("#submenu");

hamb.addEventListener("click", hambHandler);

// == выпадающий меню == 
document.getElementById('menu').onmouseover = function(event) {
	var target = event.target;
	if(target.className == 'menu-list') {
		var s = target.getElementsByClassName('submenu');
		closeMenu();
		s[0].style.display="block";
	}
}

document.onmouseover = function(event){
	var target = event.target;
	console.log(event.target);
	if(target.className!=='menu-list' && target.className!=='submenu'){
		closeMenu();
	}
}

function closeMenu(){
	var menu = document.getElementById('menu');
	var subm = document.getElementsByClassName('submenu');
	for(let i=0; i<subm.length; i++) {
		subm[i].style.display="none";
	}
}
// == / выпадающий меню == 

function hambHandler(event) {
	event.preventDefault(); 
	popup.classList.toggle("open");
	menu.classList.add('menu__burger');

	renderPopup();


}  

function renderPopup() {
	popup.appendChild(menu);
}

 //Kata from Codewars
function persistence(num){
	let result = 0;
	let newRes = Array.from(num.toString(), Number);

	if(newRes.length == 1) console.log(0);
	while(newRes.length > 1){
		newRes = newRes.reduce((acc, rec) => acc * rec);
		newRes = Array.from(newRes.toString(), Number);
		result++;
	} 
	console.log(result);

} //persistence(9999999999);

function testCycle(){
	let numberOfFilms = 0;
	let nameOfFilms = '';
	for (let i = 0; i < 1; i++){
	 numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	 nameOfFilms = prompt('название фильмов которых вы просмотрели?', '');
	 while(numberOfFilms == false){
			numberOfFilms = +prompt('это поле объязательно нужно заполнить!!!', '');
	 }
	}
	
	while(nameOfFilms.length < 50) {
		nameOfFilms = prompt('название фильмов должен состоять не менее 50 символов! Введите заново:', '');

	}
	
	
	console.log(numberOfFilms, nameOfFilms);

} testCycle();