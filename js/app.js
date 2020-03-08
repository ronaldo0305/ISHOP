$(document).ready(function(){
  $('.your-class').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  fade: true
});
});
/*var circle = document.querySelector(".circle");
var circle1 = document.querySelector(".circle1");
var circle2 = document.querySelector(".circle2");
var circle3 = document.querySelector(".circle3");
var circle4 = document.querySelector(".circle4");

var text = document.querySelector(".content_text");
var text1 = document.querySelector(".content_text1");
var text2 = document.querySelector(".content_text2");
var text3 = document.querySelector(".content_text3");
var text4 = document.querySelector(".content_text4");

circle.classList.add("circle_js");


circle.addEventListener("click", function(){
text.style.display="block";	
text1.style.display="none";
text2.style.display="none";
text3.style.display="none";
text4.style.display="none";

	circle.classList.add("circle_js");
	circle1.classList.remove("circle_js");
	circle2.classList.remove("circle_js");
	circle3.classList.remove("circle_js");
	circle4.classList.remove("circle_js");

});
circle1.addEventListener("click", function(){
text.style.display="none";	
text1.style.display="block";
text2.style.display="none";
text3.style.display="none";
text4.style.display="none";

	circle1.classList.add("circle_js");
	circle.classList.remove("circle_js");
	circle2.classList.remove("circle_js");
	circle3.classList.remove("circle_js");
	circle4.classList.remove("circle_js");

})
circle2.addEventListener("click", function(){
text2.style.display="block";	
text1.style.display="none";
text.style.display="none";
text3.style.display="none";
text4.style.display="none";

	circle2.classList.add("circle_js");
	circle1.classList.remove("circle_js");
	circle2.classList.remove("circle_js");
	circle3.classList.remove("circle_js");
	circle4.classList.remove("circle_js");

})

*/;

var enlaces = document.querySelectorAll(".circle");
var prueba = document.querySelectorAll(".prueba");

enlaces.forEach(function(ele){
	ele.addEventListener("click", color);
});

function color(){
	var destino = this.getAttribute("href");


	despintar();

	console.log(destino);
	this.classList.add("circle_js");
	
	mostrar(destino);


}
 
function despintar(){
	
	prueba.forEach(function(ele){
		ele.classList.remove("visible");

	})

	enlaces.forEach(function(ele){
		ele.classList.remove("circle_js");

	})

	
};





function mostrar(elem){

	var section = document.querySelector(elem);
	
	section.classList.add("visible");
	
	



}

function ocultar(elem){
	
	this.classList.remove("visible");

}

var btnH = document.querySelector(".btn_header")
var header = document.querySelector(".header");
var subir = document.querySelector(".header_content");



btnH.addEventListener("click", function(){
	header.classList.toggle("header_visible");
	subir.classList.toggle("bottom")

})



