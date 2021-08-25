let modal = document.querySelector(".modal");
let show = document.querySelector(".show");
let modalBox = document.querySelector(".modal-box")
let closeButton = document.querySelector(".close-button");

function enterImage() {
    modalBox.append(window.addEventListener('click', (e) => console.log(e.target)));
}

function toggleModal() {
    enterImage();
    modal.classList.toggle("show-modal");

}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

show.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);



const setTheme = theme => document.documentElement.className = theme;

document.getElementById('#theme-select').addEventListener('change', function() {
    setTheme(this.value);
});


function myFunction() {
    var element = document.getElementById("dark");
    element.classList.toggle("dark-theme");
}