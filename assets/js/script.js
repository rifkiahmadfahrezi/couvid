const navbarToggle = document.querySelector('.menu-toggle')
const navMenu = document.querySelector('.nav-menu')
const nav = document.querySelector('nav')


const trigger = document.querySelectorAll('section#info .container .label')
const text = document.querySelectorAll('section#info .container .text')


navbarToggle.addEventListener('click', () => {
	navMenu.classList.toggle('slide')
})



// accordion
trigger.forEach((el) => {
	el.addEventListener('click', function() {
		this.classList.toggle('show-text')
	})
})


