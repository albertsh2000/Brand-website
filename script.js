const hamburgerBtn = document.querySelector(".hamburger")
const header = document.querySelector(".header")
const mobileMenu = document.querySelector(".mobile-menu")
const modal = document.querySelector('.modal-container');
const openModal = document.querySelector('.btn');
const closeModal = document.querySelector('.close__modal');

function changeBgColor() {
    window.scrollY > 0 ?
        header.classList.add("sticky") :
        header.classList.remove("sticky")
}

window.addEventListener("scroll", changeBgColor)

hamburgerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    mobileMenu.classList.add("active");
})

const children = mobileMenu.children;

for (let i = 0; i < children.length; i++) {
    children[i].addEventListener('click', () => {
        mobileMenu.classList.remove("active")
    })
}

openModal.addEventListener('click', function() {
        modal.classList.add('show')
    })


closeModal.addEventListener('click', function() {
    modal.classList.remove('show');
})