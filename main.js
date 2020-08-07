//Select element function
const selectElement = function(element) {
	return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function() {
	body.classList.toggle('open');
});


const btn = document.querySelector(".btn-dark");
	      const theme = document.querySelector("#theme-link");
	      btn.addEventListener("click", function() {
	        // Swap out the URL for the different stylesheets
	        if (theme.getAttribute("href") == "light-theme.css") {
	          theme.href = "dark-theme.css";
	        } else {
	          theme.href = "light-theme.css";
	        }
	      });


//Scroll Reveal
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
	origin: 'left',
	duration: 1000,
	distance: '25rem',
	delay: 300
});

sr.reveal('.animate-right', {
	origin: 'right',
	duration: 1000,
	distance: '25rem',
	delay: 600
});

sr.reveal('.animate-top', {
	origin: 'top',
	duration: 1000,
	distance: '25rem',
	delay: 600
});

sr.reveal('.animate-bottom', {
	origin: 'bottom',
	duration: 1000,
	distance: '25rem',
	delay: 600
});

//Hover cards
var iconBx = document.querySelectorAll('.iconBx');
		var contextBx = document.querySelectorAll('.contextBx');

		for (var i=0; i<iconBx.length; i++){
			iconBx[i].addEventListener('mouseover', function(){
				for (var i=0; i<contextBx.length; i++){
					contextBx[i].className='contextBx';
				}
				document.getElementById(this.dataset.id).className = 'contextBx active';

				for (var i=0; i<iconBx.length; i++){
					iconBx[i].className='iconBx';
				}
				this.className='iconBx active';
			})
		}