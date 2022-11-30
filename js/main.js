"use strict";

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const menu = document.querySelector("#menu").cloneNode(1);
const searchBoxBtn = document.querySelector("#search-btn");
const searchBoxTxt = document.querySelector("#search-txt");

const menuList = document.querySelector("#menu-list");
const subMenu = document.querySelector("#submenu");

hamb.addEventListener("click", hambHandler);
searchBoxBtn.addEventListener("click", searchBoxBtnClick);
menuList.addEventListener("click", test);


function hambHandler(event) {
	event.preventDefault(); 
	popup.classList.toggle("open");
	renderPopup();
}  

function renderPopup() {
	popup.appendChild(menu);
}

function searchBoxBtnClick(event) {
	event.preventDefault();
	searchBoxTxt.classList.toggle("search-box-txt-click");
}

function test(event) {
	//console.log(event.target);
	event.preventDefault();
	subMenu.classList.toggle('submenu-poin');
		
} 
$(document).ready(function(){
	$('#menu-list').hover(
	  function() {
		 $( this ).removeClass('submenu');
	  }, function() {
		 $( this ).addClass('submenu-poin');
	  }
	);
 });
 
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

} persistence(9999999999);

