const mobileBar = document.querySelector('.mobile-bar');
const mobileMenuModal = document.querySelector('.mobile-menu-modal');
const mobileMenuClose = document.querySelector('.mobile-menu-close');
const mobileMenuInner = document.querySelector('.mobile-menu-inner');

mobileBar.addEventListener('click', function(event) {
    mobileMenuModal.classList.add('open');
});

mobileMenuClose.addEventListener('click', function(event) {
    mobileMenuModal.classList.remove('open');
});

mobileMenuModal.addEventListener('click', function(event) {
    mobileMenuModal.classList.remove('open');
});

mobileMenuInner.addEventListener('click', function(event) {
    event.stopPropagation();
});