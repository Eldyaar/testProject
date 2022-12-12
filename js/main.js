"use strict";

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


// === test ===

let numberOfFilms;

function start(){
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	}

} start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: true
};

function showMyDB() {
	if (personalMovieDB.privat == false) {
		console.log(personalMovieDB);
	}
} showMyDB();

function writeYourGenres() {
	
	for (let i = 0, j = 1; i < 3; i++) {
		personalMovieDB.genres[i] = prompt(`Ваш любимый жанр по номером ${j}:`);
		j++;
	}
	console.log(personalMovieDB);
} writeYourGenres();

// === / test ===