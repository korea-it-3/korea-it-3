//헤더 창내리기
function addClass() {
    const targetDiv = document.querySelector('.head_menuWrap');
    targetDiv.classList.add('GNB_open');
}

function removeClass() {
    const targetDiv = document.querySelector('.head_menuWrap');
    targetDiv.classList.remove('GNB_open');
}
//헤더 메뉴
const toSpeButton = document.querySelectorAll('.toSpeButton');
const toSpeList = document.querySelectorAll('.toSpeList');
const toNewButton = document.querySelectorAll('.toNewButton');
const toNewList = document.querySelectorAll('.toNewList');
const toPreButton = document.querySelectorAll('.toPreButton');
const toPreList = document.querySelectorAll('.toPreList');
const toWhopButton = document.querySelectorAll('.toWhopButton');
const toWhopList = document.querySelectorAll('.toWhopList');
const toChicButton = document.querySelectorAll('.toChicButton');
const toChicList = document.querySelectorAll('.toChicList');
const toAllDayButton = document.querySelectorAll('.toAllDayButton');
const toAllDayList = document.querySelectorAll('.toAllDayList');
const toSideButton = document.querySelectorAll('.toSideButton');
const toSideList = document.querySelectorAll('.toSideList');
const toDrinkButton = document.querySelectorAll('.toDrinkButton');
const toDrinkList = document.querySelectorAll('.toDrinkList');
const findButton = document.querySelectorAll('.findButton');
const findList = document.querySelectorAll('.findList');
const eventButton = document.querySelectorAll('.eventButton');
const eventList = document.querySelectorAll('.eventList');
const brandButton = document.querySelectorAll('.brandButton');
const brandList = document.querySelectorAll('.brandList');
const brandWhoButton = document.querySelectorAll('.brandWhoButton');
const brandWhoList = document.querySelectorAll('.brandWhoList');
const brandComButton = document.querySelectorAll('.brandComButton');
const brandComList = document.querySelectorAll('.brandComList');
const chainButton = document.querySelectorAll('.chainButton');
const chainList = document.querySelectorAll('.chainList');
const deliveryButton = document.querySelectorAll('.deliveryButton');
const deliveryList = document.querySelectorAll('.deliveryList');
const announceButton = document.querySelectorAll('.announceButton');
const announceList = document.querySelectorAll('.announceList');
const howtoAppButton = document.querySelectorAll('.howtoAppButton');
const howtoAppList = document.querySelectorAll('.howtoAppList');
const faqButton = document.querySelectorAll('.faqButton');
const faqList = document.querySelectorAll('.faqList');
const qnaButton = document.querySelectorAll('.qnaButton');
const qnaList = document.querySelectorAll('.qnaList');
const crueButton = document.querySelectorAll('.crueButton');
const crueList = document.querySelectorAll('.crueList');
const termList = document.querySelectorAll('.termList');
const privacyList = document.querySelectorAll('.privacyList');
const legalList = document.querySelectorAll('.legalList');

//홈버튼


//스페셜&할인
function toSpe() {
    window.location.href = 'http://localhost:8001/a/menu/스페셜&할인팩';
};
toSpeButton.forEach(button => {
    button.addEventListener('click', toSpe);
});
toSpeList.forEach(item => {
    item.addEventListener('click', toSpe);
});

//신제품
function toNew() {
    window.location.href = 'http://localhost:8001/a/menu/신제품(NEW)';
}
toNewButton.forEach(button => {
    button.addEventListener('click', toNew);
});
toNewList.forEach(item => {
    item.addEventListener('click', toNew);
});


//프리미엄
function toPre() {
    window.location.href = 'http://localhost:8001/a/menu/프리미엄';
}
toPreButton.forEach(button => {
    button.addEventListener('click', toPre);
});
toPreList.forEach(item => {
    item.addEventListener('click', toPre);
});

//와퍼&주니어
function toWhop() {
    window.location.href = 'http://localhost:8001/a/menu/와퍼&주니어'; 
}
toWhopButton.forEach(button => {
    button.addEventListener('click', toWhop);
});
toWhopList.forEach(item => {
    item.addEventListener('click', toWhop);
});

//치킨&슈림프
function toChic() {
    window.location.href = 'http://localhost:8001/a/menu/치킨&슈림프버거';
}
toChicButton.forEach(button => {
    button.addEventListener('click', toChic);
});
toChicList.forEach(item => {
    item.addEventListener('click', toChic);
});

//올데이킹&킹모닝
function toAllDay() {
    window.location.href = 'http://localhost:8001/a/menu/올데이킹&킹모닝';
}
toAllDayButton.forEach(button => {
    button.addEventListener('click', toAllDay);
});
toAllDayList.forEach(item => {
    item.addEventListener('click', toAllDay);
});

//사이드
function toSide() {
    window.location.href = 'http://localhost:8001/a/menu/사이드';
}
toSideButton.forEach(button => {
    button.addEventListener('click', toSide);
});
toSideList.forEach(item => {
    item.addEventListener('click', toSide);
});

//음료&디저트
function toDrink() {
    window.location.href = 'http://localhost:8001/a/menu/음료&디저트';
}
toDrinkButton.forEach(button => {
    button.addEventListener('click', toDrink);
});
toDrinkList.forEach(item => {
    item.addEventListener('click', toDrink);
});

//매장찾기
function find() {
    window.location.href = 'http://localhost:8001/a/store';
}
findButton.forEach(button => {
    button.addEventListener('click', find);
});
findList.forEach(item => {
    item.addEventListener('click', find);
});

//이벤트
function event() {
    window.location.href = 'http://localhost:8001/a/event/0/1';
}
eventButton.forEach(button => {
    button.addEventListener('click', event);
});
eventList.forEach(item => {
    item.addEventListener('click', event);
});

//브랜드스토리
function brand() {
    window.location.href = 'http://localhost:8001/a/story';
}
brandButton.forEach(button => {
    button.addEventListener('click', brand);
});
brandList.forEach(item => {
    item.addEventListener('click', brand);
});
function brandWho() {
    window.location.href = 'http://localhost:8001/a/whyBkr';
}
brandWhoButton.forEach(button => {
    button.addEventListener('click', brandWho);
});
brandWhoList.forEach(item => {
    item.addEventListener('click', brandWho);
});
function brandCom() {
    window.location.href = 'http://localhost:8001/a/newsAd';
}
brandComButton.forEach(button => {
    button.addEventListener('click', brandCom);
});
brandComList.forEach(item => {
    item.addEventListener('click', brandCom);
});

//공지사항
function announce() {
    window.location.href = 'http://localhost:8001/a/notice/1';
}
announceButton.forEach(button => {
    button.addEventListener('click', announce);
});
announceList.forEach(item => {
    item.addEventListener('click', announce);
});

//버거킹앱이용안내
function howto() {
    window.location.href = 'http://localhost:8001/a/appGuide';
}
howtoAppButton.forEach(button => {
    button.addEventListener('click', chain);
});
howtoAppList.forEach(item => {
    item.addEventListener('click', chain);
});

//FAQ
function faq() {
    window.location.href = 'http://localhost:8001/a/faq';
}
faqButton.forEach(button => {
    button.addEventListener('click', faq);
});
faqList.forEach(item => {
    item.addEventListener('click', faq);
});

//문의
function qna() {
    window.location.href = 'http://localhost:8001/a/question';
}
qnaButton.forEach(button => {
    button.addEventListener('click', qna);
});
qnaList.forEach(item => {
    item.addEventListener('click', qna);
});

//가맹점문의
function chain() {
    window.location.href = 'http://localhost:8001/a/branch';
}
chainButton.forEach(button => {
    button.addEventListener('click', chain);
});
chainList.forEach(item => {
    item.addEventListener('click', chain);
});

//딜리버리주문
function delivery() {
    window.location.href = 'http://localhost:8001/a/';
}
deliveryButton.forEach(button => {
    button.addEventListener('click', delivery);
});
deliveryList.forEach(item => {
    item.addEventListener('click', delivery);
});

//인재채용
function crue() {
    window.location.href = 'http://localhost:8001/a/recruit';
}
crueButton.forEach(button => {
    button.addEventListener('click', crue);
});
crueList.forEach(item => {
    item.addEventListener('click', crue);
});

//이용약관
function terms() {
    window.location.href = 'http://localhost:8001/a/terms';
}
termList.forEach(item => {
    item.addEventListener('click', terms);
});

//개인정보처리방침
function privacy() {
    window.location.href = 'http://localhost:8001/a/privacy';
}
privacyList.forEach(item => {
    item.addEventListener('click', privacy);
});

//법적고지
function legal() {
    window.location.href = 'http://localhost:8001/a/legal';
}
legalList.forEach(item => {
    item.addEventListener('click', legal);
});

//사업자등록번호 모달
const modal = document.getElementById("modal")
function modalOn() {
    modal.style.display = "flex"
}
function isModalOn() {
    return modal.style.display === "flex"
}
function modalOff() {
    modal.style.display = "none"
}

const btnModal = document.getElementById("btn-modal")
btnModal.addEventListener("click", e => {
    modalOn()
})

const closeBtn = modal.querySelector(".close-area")
closeBtn.addEventListener("click", e => {
    modalOff()
})
modal.addEventListener("click", e => {
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

//스크롤버튼
function handleScroll() {
var scrollButton = document.getElementById('scrollButton');
if (window.scrollY >= 700) {
    scrollButton.style.display = 'inline'; // 스크롤이 일정 위치 이상 내려가면 버튼을 보이도록 설정
    scrollButton.style.opacity = 1;
} else {
    scrollButton.style.display = 'none'; // 그 외의 경우에는 버튼을 숨기도록 설정
    scrollButton.style.opacity = 0;
}
}
// 페이지 상단으로 스크롤하는 함수
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 스크롤 이벤트 리스너 등록
window.addEventListener('scroll', handleScroll);