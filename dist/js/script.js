const body = document.body
const btn = document.querySelector('.nav__toggle')
const logo = document.querySelector('.nav__logo')
const moon = document.querySelector('.moon')
const sun = document.querySelector('.sun')
const bg = document.querySelector('.hero__header')

// dark mode configuration
btn.addEventListener('click', () => {
	body.classList.toggle('dark')

	if (body.classList.contains("dark")) {
		logo.src = "images/logo-dark-mode.svg"
		moon.classList.add("hidden")
		sun.classList.remove("hidden")
	} else {
		logo.src = "images/logo-light-mode.svg"
		moon.classList.remove("hidden")
		sun.classList.add("hidden")
	}
})

