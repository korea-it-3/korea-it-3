//매장찾기
const buttons = document.querySelectorAll('.item3 button');
const containers = document.querySelectorAll('.searchWrap .container01');

function showContainer(index) {
    containers.forEach(container => container.style.display = 'none');
    containers[index].style.display = 'block';

    buttons.forEach(button => button.parentNode.classList.remove('on'));
    buttons[index].parentNode.classList.add('on');
}

buttons.forEach((button, index) => {
    button.addEventListener('click', function() {
        showContainer(index);
    });
});

showContainer(0);

//매장옵션
const modal3 = document.getElementById("modal3")
function modalOn() {
    modal3.style.display = "flex"
}
function isModalOn() {
    return modal3.style.display === "flex"
}
function modalOff() {
    modal3.style.display = "none"
}

const btnModal3 = document.getElementById("btn-modal3")
btnModal3.addEventListener("click", e => {
    modalOn()
})

const closeBtn3 = modal3.querySelector(".close-area3")
closeBtn3.addEventListener("click", e => {
    modalOff()
})
modal3.addEventListener("click", e => {
    const evTarget = e.target
    if(evTarget.classList.contains("modal-overlay")) {
        modalOff()
    }
})
window.addEventListener("keyup", e => {
    if(isModalOn() && e.key === "Escape") {
        modalOff()
    }
})