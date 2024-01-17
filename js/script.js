//Toggle Class Active u/ hamburger menu

const navbarnav = document.querySelector('.navbar-nav')

//When the hamburger-menu is clicked

document.querySelector('#hamburger-menu').onclick = () => {
navbarnav.classList.toggle('active')
};

//Toggle Class Active u/ search form

const searchform = document.querySelector('.search-form')
const searchbox = document.querySelector('#search-box')

//When the search-button is clicked

document.querySelector('#search-button').onclick = (e) => {
searchform.classList.toggle('active')
searchbox.focus()
e.preventDefault();
};

//Toggle Class Active u/ Shopping Cart

const shoppingcart = document.querySelector('.shopping-cart')

//When the shopping-cart is clicked

document.querySelector('#cart-button').onclick = (e) => {
shoppingcart.classList.toggle('active')
e.preventDefault();
};

// Klik di luar element
const hm = document.querySelector('#hamburger-menu')
const sb = document.querySelector('#search-button')
const cb = document.querySelector('#cart-button')

document.addEventListener('click', function(e) {
	if (!hm.contains(e.target) && !navbarnav.contains(e.target)) {
		navbarnav.classList.remove('active')
	}
	if (!sb.contains(e.target) && !searchform.contains(e.target)) {
		searchform.classList.remove('active')
	}
	if (!cb.contains(e.target) && !shoppingcart.contains(e.target)) {
		shoppingcart.classList.remove('active')
	}
});

// Modal Box

const ItemDetailModal = document.querySelector('#item-detail-modal');
const ItemDetailButtons = document.querySelectorAll('.item-detail-button');

ItemDetailButtons.forEach((btn) => {
	// When Modal Box is Clicked

btn.onclick = (e) => {
	ItemDetailModal.style.display = 'flex';
	e.preventDefault();
}

})

// When Close Model is Clicked

document.querySelector('.modal .close-icon').onclick = (e) =>{
	ItemDetailModal.style.display = 'none';
	e.preventDefault();
}

// Klik di luar Modal

window.onclick = (e) =>{
	if(e.target === ItemDetailModal){
		ItemDetailModal.style.display = 'none';
	}
}