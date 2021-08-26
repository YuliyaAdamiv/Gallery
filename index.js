/* Modal window */

const gallery = document.querySelector(".gallery");
const modal = document.querySelector("aside");
const modalBodyImage = document.querySelector(".modal-body-image");
const closeButton = document.querySelector(".close-button");

function toggleModal(e) {
    modal.classList.toggle("show-modal");
    if (e.target === closeButton) {
        return;
    }
    modalBodyImage.setAttribute('src', e.target.src);
}

gallery.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);

/* Theme */

const body = document.querySelector("body");
const setTheme = theme => body.className = theme;

document.getElementById('theme-select').addEventListener('change', function() {
    setTheme(this.value);
});
