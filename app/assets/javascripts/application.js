// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require turbolinks
//= require_tree .


//alert('meow'); pops up meow

//sanity check that js is working
//alert('js is added to application!');
//
var slides, slides_total, slide_current;

// means to execute the code only once the document has finished loading
document.addEventListener('DOMContentLoaded', function(){	// get the pictures!

	slides = document.getElementsByClassName("col-sm-12");
	slides_total = slides.length;	// let's start with the first picture
	slide_current = 0;
	changePicture(slide_current);

	document.getElementsByClassName('prev')[0].addEventListener('click', function () {
      if(slide_current > 0){
        slide_current--;
      }else{
        slide_current = (slides_total - 1);
      }
      	console.log(slide_current);
      changePicture(slide_current);
    });

 document.getElementsByClassName('next')[0].addEventListener('click', function () {
      if(slide_current < (slides_total -1)){
        slide_current++;
      }else{
        slide_current = 0;
      }

      changePicture(slide_current);
    });

  document.getElementsByClassName('reset')[0].addEventListener('click', function () {
      slide_current = 0;
        
      changePicture(slide_current);
    });


	window.setInterval(function(){	
		changePicture(slide_current);
			if(slide_current >= (slides_total-1)){
			slide_current = 0;
			}else{
			slide_current++; //this is an abbreviation for slide_current = slide_current + 1
			}
		console.log(slide_current);
		}, 3000);
});
// helper functino takes a slide as input
function changePicture(slide){
	// iterate though all slides
	for(var i = 0; i < slides.length; i++){
		//change their display to none
		slides[i].style.display = 'none';
	};
	// change the display for the current slide back on!
	slides[slide].style.display = 'block';

};

// First we get the element with class .prev, we want to add an event listener
    // to that element so we can perform a function every time teh element is clicked
    