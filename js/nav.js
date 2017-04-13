// JavaScript Document

var navTop = document.querySelector('nav');
 
 document.querySelector('.navButton')
 .addEventListener('click', function(e)
 {
 e.preventDefault();	 
 if(navTop.getAttribute('data-state') == 'expanded')
 {
	 navTop.setAttribute('data-state', 'collapsed');
 }
 
 else
 {
	 navTop.setAttribute('data-state', 'expanded');
 }	 
 });		
 