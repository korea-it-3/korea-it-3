const toAllButton = document.querySelectorAll('.toAllButton');
const toNowButton = document.querySelectorAll('.toNowButton');
const toPastButton = document.querySelectorAll('.toPastButton');
const toMarketButton = document.querySelectorAll('.toMarketButton');
const eve01 = document.querySelectorAll('.eve01');
const eve02 = document.querySelectorAll('.eve02');
const eve03 = document.querySelectorAll('.eve03');
const eve04 = document.querySelectorAll('.eve04');
const eve05 = document.querySelectorAll('.eve05');
const mar01 = document.querySelectorAll('.mar01');

function toAll() {
    window.location.href = 'http://localhost:8001/a/event/0/all';
};
toAllButton.forEach(button => {
    button.addEventListener('click', toAll);
});
function toNow() {
    window.location.href = 'http://localhost:8001/a/event/0/1';
};
toNowButton.forEach(button => {
    button.addEventListener('click', toNow);
});
function toPast() {
    window.location.href = 'http://localhost:8001/a/event/0/2';
};
toPastButton.forEach(button => {
    button.addEventListener('click', toPast);
});
function toMarket() {
    window.location.href = 'http://localhost:8001/a/event/1/1';
};
toMarketButton.forEach(button => {
    button.addEventListener('click', toMarket);
});
function toeve01() {
    window.location.href = 'http://localhost:8001/a/eventDetail/001';
};
eve01.forEach(button => {
    button.addEventListener('click', toeve01);
});
function toeve02() {
    window.location.href = 'http://localhost:8001/a/eventDetail/002';
};
eve02.forEach(button => {
    button.addEventListener('click', toeve02);
});
function toeve03() {
    window.location.href = 'http://localhost:8001/a/eventDetail/003';
};
eve03.forEach(button => {
    button.addEventListener('click', toeve03);
});
function toeve04() {
    window.location.href = 'http://localhost:8001/a/eventDetail/004';
};
eve04.forEach(button => {
    button.addEventListener('click', toeve04);
});
function toeve05() {
    window.location.href = 'http://localhost:8001/a/eventDetail/005';
};
eve05.forEach(button => {
    button.addEventListener('click', toeve05);
});
function tomar01() {
    window.location.href = 'http://localhost:8001/a/eventDetail/101';
};
mar01.forEach(button => {
    button.addEventListener('click', tomar01);
});

function showMoreItems() {
    // 더보기 버튼을 클릭하면 해당 버튼을 숨깁니다.
    const moreButton = document.querySelector('.more');
    moreButton.style.display = 'none';

    // 숨겨진 항목들을 보이도록 합니다.
    const hiddenItems = document.querySelectorAll('.hidden');
    for (let i = 0; i < hiddenItems.length; i++) {
        hiddenItems[i].style.display = 'block';
    }
}