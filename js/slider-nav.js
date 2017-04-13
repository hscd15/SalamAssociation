// JavaScript Document

////////////////////////////////////////////////////////////// Slider Functions
 window.onload = function()
 
    {
		
 var sliderBtn1 = document.querySelector('.sliderOne');
 var sliderBtn2 = document.querySelector('.sliderTwo');
 var sliderBtn3 = document.querySelector('.sliderThree');
 var sliderBtn4 = document.querySelector('.sliderFour');

 	document.querySelector('.sOne')
	.addEventListener('click', function(e)
 	{
 	e.preventDefault();	 
 	if(sliderBtn1.getAttribute('data-state') == 'expanded')
 	{
		 sliderBtn1.setAttribute('data-state', 'collapsed');
		 sliderBtn2.setAttribute('data-state', 'collapsed');
		 sliderBtn3.setAttribute('data-state', 'collapsed');
		 sliderBtn4.setAttribute('data-state', 'collapsed');

 	}
 	else
 	{
		 sliderBtn1.setAttribute('data-state', 'expanded');
		 
 	}	 
 	});
 
 var sliderBtn2 = document.querySelector('.sliderTwo');
 var sliderBtn1 = document.querySelector('.sliderOne');
 var sliderBtn3 = document.querySelector('.sliderThree');
 var sliderBtn4 = document.querySelector('.sliderFour');

 	document.querySelector('.sTwo')
	.addEventListener('click', function(e)
 	{
 	e.preventDefault();	 
 	if(sliderBtn2.getAttribute('data-state') == 'expanded')
 	{
		 sliderBtn2.setAttribute('data-state', 'collapsed');
		 sliderBtn1.setAttribute('data-state', 'collapsed');
		 sliderBtn3.setAttribute('data-state', 'collapsed');
		 sliderBtn4.setAttribute('data-state', 'collapsed');

 	}
 	else
 	{
		 sliderBtn2.setAttribute('data-state', 'expanded');
		 
 	}	 
 	}); 

 var sliderBtn3 = document.querySelector('.sliderThree');
 
 	document.querySelector('.sThree')
	.addEventListener('click', function(e)
 	{
 	e.preventDefault();	 
 	if(sliderBtn3.getAttribute('data-state') == 'expanded')
 	{
		 sliderBtn3.setAttribute('data-state', 'collapsed');
 	}
 	else
 	{
		 sliderBtn3.setAttribute('data-state', 'expanded');
		 
 	}	 
 	});
	
 var sliderBtn4 = document.querySelector('.sliderFour');
 
 	document.querySelector('.sFour')
	.addEventListener('click', function(e)
 	{
 	e.preventDefault();	 
 	if(sliderBtn4.getAttribute('data-state') == 'expanded')
 	{
		 sliderBtn4.setAttribute('data-state', 'collapsed');
 	}
 	else
 	{
		 sliderBtn4.setAttribute('data-state', 'expanded');
		 
 	}	 
 	});
 
	}