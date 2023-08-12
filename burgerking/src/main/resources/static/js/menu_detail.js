//영양성분 모달
const modal3 = document.getElementById("modal3")
function modalOn3() {
    modal3.style.display = "flex"
}
function isModalOn3() {
    return modal3.style.display === "flex"
}
function modalOff3() {
    modal3.style.display = "none"
}

const btnModal3 = document.getElementById("btn-modal3")
btnModal3.addEventListener("click", e => {
    modalOn3()
})

const closeBtn3 = modal3.querySelector(".close-area3")
closeBtn3.addEventListener("click", e => {
    modalOff3()
})
modal3.addEventListener("click", e => {
    const evTarget = e.target
    if(evTarget.classList.contains("modal-overlay")) {
        modalOff3()
    }
})
window.addEventListener("keyup", e => {
    if(isModalOn3() && e.key === "Escape") {
        modalOff3()
    }
})

//영양성분 디테일
function toggleAccordion(button) {
    const accordionContent = button.parentElement.nextElementSibling;
    const containerElement = button.parentElement.parentElement;
  
    // 접혀있는 상태일 때, 내용을 펼치기
    if (accordionContent.style.display === 'none') {
      accordionContent.style.display = 'block';
      button.querySelector('span').textContent = 'contents hide';
      containerElement.classList.add('open'); // container02 origin_info에 "open" 클래스 추가
    } else { // 열려있는 상태일 때, 내용을 닫기
      accordionContent.style.display = 'none';
      button.querySelector('span').textContent = 'contents show';
      containerElement.classList.remove('open'); // container02 origin_info에서 "open" 클래스 제거
    }
}

//다른 메뉴
const button = document.getElementById("btnPause");
let isAutoSlideEnabled = true; // 자동 슬라이드 활성화 여부
$(function(){
	const slider = $('#slider-div2');
    slider.slick({
		slide: 'div',        //슬라이드 되어야 할 태그 ex) div, li 
		infinite : true,     //무한 반복 옵션     
		slidesToShow : 1,        // 한 화면에 보여질 컨텐츠 개수
		slidesToScroll : 1,        //스크롤 한번에 움직일 컨텐츠 개수
		speed : 800,     // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
		arrows : true,         // 옆으로 이동하는 화살표 표시 여부
		dots : true,         // 스크롤바 아래 점으로 페이지네이션 여부
		autoplay : true,            // 자동 스크롤 사용 여부
		autoplaySpeed : 4000,         // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
		pauseOnHover : true,        // 슬라이드 이동시 마우스 호버하면 슬라이더 멈추게 설정
		vertical : false,        // 세로 방향 슬라이드 옵션
		prevArrow : $('.btn_prev'),        // 이전 화살표 모양 설정
		nextArrow : $('.btn_next'),        // 다음 화살표 모양 설정
		dotsClass: "swiper-pagination",     //아래 나오는 페이지네이션(점) css class 지정
		draggable : true,     //드래그 가능 여부 
	});

    button.addEventListener("click", function () {
        if (isAutoSlideEnabled) {
            slider.slick('slickPause');
            button.classList.add("play");
        } else {
            slider.slick('slickPlay');
            button.classList.remove("play");
        }
        isAutoSlideEnabled = !isAutoSlideEnabled;
    });
});
  