/* Modal window */

const show = document.querySelector(".show");
const modal = document.querySelector(".modal");
const modalBodyImage = document.querySelector(".modal-body-image");
const closeButton = document.querySelector(".close-button");

function toggleModal(e) {
    modal.classList.toggle("show-modal");
    if (e.target === closeButton) {
        return;
    }
    modalBodyImage.setAttribute('src', e.target.src);
}

show.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);

/* Theme */

const body = document.querySelector("body");
const setTheme = theme => body.className = theme;

document.getElementById('theme-select').addEventListener('change', function() {
    setTheme(this.value);
});
