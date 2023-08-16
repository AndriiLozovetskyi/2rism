const menu = document.querySelector('.menu__body')
const menuBtn = document.querySelector('.head-section_ico')

const body = document.body;

if (menu && menuBtn) {
	menuBtn.addEventListener('click', e => {
		menu.classList.toggle('active')
		menuBtn.classList.toggle('active')
		body.classList.toggle('lock')
	})

	 menu.addEventListener('click', e => {
	 	if (e.target.classList.contains('.menu__body')) {
	 		menu.classList.remove('active')
			menuBtn.classList.remove('active')
			body.classList.remove('lock')
	 	}
	 })

	menu.querySelectorAll('.menu__body_link').forEach(link => {
		link.addEventListener('click', () => {
			menu.classList.remove('active')
			menuBtn.classList.remove('active')
			body.classList.remove('lock')
		})
	})
}

/*===========================================*/

const anchors = document.querySelectorAll('a[href*="#"]');

 anchors.forEach(anchor => {
 	anchor.addEventListener('click', event => {
 		event.preventDefault();

 		const blockID = anchor.getAttribute('href').substring(1);

 		document.getElementById(blockID).scrollIntoView({
 			behavior: 'smooth',
 			block: 'start'
 		})
 	})
 })