const accordionBtns = document.querySelectorAll('.accordion__btn');

const closeAccordionItems = () => {
	accordionBtns.forEach((btn) => {
		btn.parentElement.classList.remove('active');
		btn.setAttribute('aria-expanded', false);
	});
};

accordionBtns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		closeAccordionItems();
		e.target.parentElement.classList.add('active');
		btn.setAttribute('aria-expanded', true);
	});
});
