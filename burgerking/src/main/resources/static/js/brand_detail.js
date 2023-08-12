const toQsrButton = document.querySelectorAll('.toQsrButton');
function toQsr() {
    window.location.href = 'http://localhost:8001/a/qsr';
};
toQsrButton.forEach(button => {
    button.addEventListener('click', toQsr);
});
const toAwardButton = document.querySelectorAll('.toAwardButton');
function toAward() {
    window.location.href = 'http://localhost:8001/a/awards';
};
toAwardButton.forEach(button => {
    button.addEventListener('click', toAward);
});
const toNewItemButton = document.querySelectorAll('.toNewItemButton');
function toNewItem() {
    window.location.href = 'http://localhost:8001/a/newsNewItem';
};
toNewItemButton.forEach(button => {
    button.addEventListener('click', toNewItem);
});
const toEsgButton = document.querySelectorAll('.toEsgButton');
function toEsg() {
    window.location.href = 'http://localhost:8001/a/esg';
};
toEsgButton.forEach(button => {
    button.addEventListener('click', toEsg);
});


const buttons = document.querySelectorAll('.item4 button');
const containers = document.querySelectorAll('.containor09');

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