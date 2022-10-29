const body = document.body
const btn = document.querySelector('.nav__toggle')
const logo = document.querySelector('.nav__logo')
const moon = document.querySelector('.moon')
const sun = document.querySelector('.sun')
const bg = document.querySelector('.hero__header')

function dark () {
	body.classList.add("dark")
	logo.src = "images/logo-dark-mode.svg"
	moon.classList.add("hidden")
	sun.classList.remove("hidden") 
}

function light () {
	body.classList.remove("dark")
	logo.src = "images/logo-light-mode.svg"
	moon.classList.remove("hidden")
	sun.classList.add("hidden")

}

let currentTheme = localStorage.getItem("theme")

// Setting the theme based on the local storage
if (currentTheme === 'dark') {
	dark()
} else {
	light()
}

// dark mode toggler button
btn.addEventListener('click', () => {
	body.classList.toggle('dark')

	if (body.classList.contains("dark")) {
		localStorage.setItem('theme','dark')
		dark()

	} else {
		localStorage.setItem('theme','light')
		light()
	}
})

