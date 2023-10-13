const openBtn = document.querySelector('.js-open');
const modalBox = document.getElementById("modal-box");
const modalBg = document.getElementById("modal-background");
openBtn.addEventListener('click', function(event) {
    event.preventDefault();
    modalBox.classList.add('active');
    modalBg.classList.add('active');
});

const closeBtns = document.querySelectorAll('.js-close'); // NodeList
for(i=0; i < closeBtns.length; i++) {
    closeBtns[i].addEventListener('click', function(event) {
        event.preventDefault();
        modalBox.classList.remove('active');
        modalBg.classList.remove('active');
    });
};
