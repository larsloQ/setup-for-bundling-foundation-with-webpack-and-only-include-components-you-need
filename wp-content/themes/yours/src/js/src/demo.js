// menu.js
// trgger animation on mainmenu open : show full logo
import $ from 'jquery';
window.$ = $;

$( document ).ready( function() {
	$( document ).foundation();
	$("#current").text(Foundation.MediaQuery.current) 
	console.log("Foundation.MediaQuery.current: ",Foundation.MediaQuery.current) //supposed to be removed in production
} );

/* this function is supposed to be es5-ified */
window.addEventListener('resize', (ev)=>{
	document.getElementById("current").innerHTML = Foundation.MediaQuery.current;
}, false);