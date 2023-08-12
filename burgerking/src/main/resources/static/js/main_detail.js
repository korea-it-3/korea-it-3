//메인슬라이드
const button = document.getElementById("btnPause");
let isAutoSlideEnabled = true; // 자동 슬라이드 활성화 여부
$(function(){
	const slider = $('#slider-div');
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
		prevArrow : $('#btnPrev1'),        // 이전 화살표 모양 설정
		nextArrow : $('#btnNext1'),        // 다음 화살표 모양 설정
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

/**************************************/

//딜리버리 모달
let initialIndex = -1; // 초기 상태를 저장하는 변수

const modal2 = document.getElementById("modal2")
function modalOn2() {
    modal2.style.display = "flex"
	currentIndex = 1;
    // 초기 상태로 복원
    showTab(currentIndex);
    // margin-left 값을 -167로 설정
    $('.tab02').css('margin-left', -167);
	$('.item4 li').removeClass('on');
	$('.item4 li').eq(1).addClass('on');
}
function isModalOn2() {
    return modal2.style.display === "flex"
}
function modalOff2() {
    modal2.style.display = "none"
	// currentIndex와 initialIndex를 초기화
    currentIndex = -1;
    initialIndex = -1;
}

const btnModal2 = document.getElementById("btn-modal2")
btnModal2.addEventListener("click", e => {	
    modalOn2()
})

const closeBtn2 = modal2.querySelector(".close-area2")
closeBtn2.addEventListener("click", e => {
    modalOff2()
})
// modal2.addEventListener("click", e => {
//     const evTarget = e.target
//     if(evTarget.classList.contains("modal-overlay")) {
//         modalOff2()
//     }
// })
// window.addEventListener("keyup", e => {
//     if(isModalOn2() && e.key === "Escape") {
//         modalOff2()
//     }
// })

//딜리버리 모달 tab02
$(document).ready(function() {
    let currentIndex = 1;

    // 리스트 버튼 클릭을 처리합니다
    $('.item4 li button').click(function() {
        $('.item4 li').removeClass('on');
        $(this).parent().addClass('on');
        currentIndex = $(this).parent().index();
        showTab(currentIndex);
    });

    // "이전" 버튼 클릭을 처리합니다
    $('#btnPrev2').click(function() {
        currentIndex = (currentIndex - 1 + $('.item4 li').length) % $('.item4 li').length;
        moveOnClass(currentIndex);
        updateButtonStatus();
        const newMarginLeft = parseInt($('.tab02').css('margin-left')) + 167;
        // 0 이상으로는 올라가지 않도록 제한합니다.
        if (newMarginLeft > 0) {
            $('.tab02').css('margin-left', 0);
        } else {
            $('.tab02').css('margin-left', newMarginLeft + 'px');
        }
    });

    // "다음" 버튼 클릭을 처리합니다
    $('#btnNext2').click(function() {
        currentIndex = (currentIndex + 1) % $('.item4 li').length;
        moveOnClass(currentIndex);
        updateButtonStatus();
        const newMarginLeft = parseInt($('.tab02').css('margin-left')) - 167;
        // -340 이하로는 내려가지 않도록 제한합니다.
        if (newMarginLeft < -340) {
            $('.tab02').css('margin-left', -340);
        } else {
            $('.tab02').css('margin-left', newMarginLeft + 'px');
        }
    });

    // "on" 클래스를 지정된 인덱스로 이동시키는 함수입니다
    function moveOnClass(index) {
        $('.item4 li').removeClass('on');
        $('.item4 li').eq(index).addClass('on');
        showTab(currentIndex);
    }

    // 버튼 상태를 업데이트하는 함수입니다
    function updateButtonStatus() {
        $('#btnPrev2').prop('disabled', currentIndex === 0);
        $('#btnNext2').prop('disabled', currentIndex === $('.item4 li').length - 1);
    }

    // 초기 버튼 상태를 설정합니다
    updateButtonStatus();
});

function showTab(index) {
    // 모든 tab-content 숨기기
    $('.tab_cont').hide();
    // 선택한 index에 해당하는 tab-content만 보이도록 처리
    $('.tab_cont').eq(index).show();
}

$(document).ready(function() {
    const slider = $('.tutorial .slick-list');

    // 슬라이더 초기화
    slider.slick({
        slide: '.cont', // 슬라이드 되어야 할 태그
        slidesToShow: 1, // 한 화면에 보여질 컨텐츠 개수
        slidesToScroll: 1, // 스크롤 한번에 움직일 컨텐츠 개수
        speed: 800, // 다음 버튼 누르고 다음 화면 뜨는데 걸리는 시간(ms)
        arrows: true, // 옆으로 이동하는 화살표 표시 여부
        prevArrow: $('.btn_prev'), // 이전 화살표 모양 설정
        nextArrow: $('.btn_next'), // 다음 화살표 모양 설정
    });
});

// //지도설정
// var map;
// //지도 불러오면 서울에서 시작
// function initMap() {
//     map = new naver.maps.Map('map', {
//       center: new naver.maps.LatLng(37.5665, 126.9780), // 초기 지도 중심 위치 (서울)
//       zoom: 15 // 지도 줌 레벨
//     });
//     var showLocationButton = document.getElementById('showLocationButton');
//     showLocationButton.addEventListener('click', showMyLocation);
    
//     //부산매장위치
//     //부산강서구
//     //01부산명지DT점
//     var marker01 = new naver.maps.Marker({
//         position: new naver.maps.LatLng(35.09482505414533, 128.922921650987),
//         map: map,
//         icon: {
//             url: "/static/img/pin.png"
//         }
//     });
//     //02김해공항DT점
//     var marker02 = new naver.maps.Marker({
//         position: new naver.maps.LatLng(35.17637362085831, 128.95835532845024),
//         map: map,
//         icon: {
//             url: "/static/img/pin.png"
//         }
//     });
//     //금정구
//     //03부산금정오일뱅크점
//     var marker03 = new naver.maps.Marker({
//         position: new naver.maps.LatLng(35.233048201687566, 129.09190028455757),
//         map: map,
//         icon: {
//             url: "/static/img/pin.png"
//         }
//     });
//     //04부산대점
//     var marker04 = new naver.maps.Marker({
//         position: new naver.maps.LatLng(35.230478833706314, 129.08661474736118),
//         map: map,
//         icon: {
//             url: "/static/img/pin.png"
//         }
//     });
//     //05부산외대점
//     var marker05 = new naver.maps.Marker({
//         position: new naver.maps.LatLng(35.26582923209979, 129.08565867374273),
//         map: map,
//         icon: {
//             url: "/static/img/pin.png"
//         }
//     });
//     //기장군
//     //06부산정관DT점
//     var marker06 = new naver.maps.Marker({
//         position: new naver.maps.LatLng(35.32714926881166, 129.17625460145422),
//         map: map,
//         icon: {
//             url: "/static/img/pin.png"
//         }
//     });
//     //07부산기장DT점
//     var marker07 = new naver.maps.Marker({
//         position: new naver.maps.LatLng(35.24253675228221, 129.22022826029166),
//         map: map,
//         icon: {
//             url: "/static/img/pin.png"
//         }
//     });
//     //08부산오시리아점
//     var marker08 = new naver.maps.Marker({
//         position: new naver.maps.LatLng(35.193788510240694, 129.21443541732307),
//         map: map,
//         icon: {
//             url: "/static/img/pin.png"
//         }
//     });
//     //남구
//     //09부산대연GS점
//     var marker09 = new naver.maps.Marker({
//         position: new naver.maps.LatLng(35.136248258719355, 129.09830584980858),
//         map: map,
//         icon: {
//             url: "/static/img/pin.png"
//         }
//     });
//     //10부산용호분포SK점
//     var marker10 = new naver.maps.Marker({
//         position: new naver.maps.LatLng(35.12175705279849, 129.1120828214256),
//         map: map,
//         icon: {
//             url: "/static/img/pin.png"
//         }
//     });
//     //동래구
//     //11부산안락DT점
//     var marker11 = new naver.maps.Marker({
//         position: new naver.maps.LatLng(35.19983231648358, 129.09317775145664),
//         map: map,
//         icon: {
//             url: "/static/img/pin.png"
//         }
//     });
//     //12부산사직점
//     var marker12 = new naver.maps.Marker({
//         position: new naver.maps.LatLng(35.19564984777759, 129.05935671738644),
//         map: map,
//         icon: {
//             url: "/static/img/pin.png"
//         }
//     });
//     //13부산수안역점
//     var marker13 = new naver.maps.Marker({
//         position: new naver.maps.LatLng(35.202881043665116, 129.0811241783889),
//         map: map,
//         icon: {
//             url: "/static/img/pin.png"
//         }
//     });
//     //부산진구
//     //14부산양정점
//     var marker14 = new naver.maps.Marker({
//         position: new naver.maps.LatLng(35.17050055455176, 129.06967491768043),
//         map: map,
//         icon: {
//             url: "/static/img/pin.png"
//         }
//     });
//     //15부산서면일번가점
//     var marker15 = new naver.maps.Marker({ 
//         position: new naver.maps.LatLng(35.15493774826688, 129.0580281048491),
//         map: map,
//         icon: {
//             url: "/static/img/pin.png"
//         }
//     });
//     //16부산개금점
//     var marker16 = new naver.maps.Marker({
//         position: new naver.maps.LatLng(35.15282211323402, 129.0250246946157),
//         map: map,
//         icon: {
//             url: "/static/img/pin.png"
//         }
//     });
//     //북구
//     //17부산화명점
//     var marker17 = new naver.maps.Marker({
//         position: new naver.maps.LatLng(35.23435757837503, 129.01298552239822),
//         map: map,
//         icon: {
//             url: "/static/img/pin.png"
//         }
//     });
//     //사상구
//     //18부산서부터미널점
//     var marker18 = new naver.maps.Marker({
//         position: new naver.maps.LatLng(35.16379004939367, 128.9836010763125),
//         map: map,
//         icon: {
//             url: "/static/img/pin.png"
//         }
//     });
//     //19부산주례점
//     var marker19 = new naver.maps.Marker({
//         position: new naver.maps.LatLng(35.15036809880176, 129.00515369043333),
//         map: map,
//         icon: {
//             url: "/static/img/pin.png"
//         }
//     });
//     //사하구
//     //20부산괴정역점
//     var marker20 = new naver.maps.Marker({
//         position: new naver.maps.LatLng(35.09947046568165, 128.9936316381926),
//         map: map,
//         icon: {
//             url: "/static/img/pin.png"
//         }
//     });
//     //21부산구평DT점
//     var marker21 = new naver.maps.Marker({
//         position: new naver.maps.LatLng(35.08622272412021, 128.98871536777642),
//         map: map,
//         icon: {
//             url: "/static/img/pin.png"
//         }
//     });
//     //22부산신평DT점
//     var marker22 = new naver.maps.Marker({
//         position: new naver.maps.LatLng(35.08506728908087, 128.96757171231127),
//         map: map,
//         icon: {
//             url: "/static/img/pin.png"
//         }
//     });
//     //23부산하단역점
//     var marker23 = new naver.maps.Marker({
//         position: new naver.maps.LatLng(35.106589008976954, 128.96776549135004),
//         map: map,
//         icon: {
//             url: "/static/img/pin.png"
//         }
//     });
//     //연제구
//     //24연산토곡SKDT점
//     var marker24 = new naver.maps.Marker({
//         position: new naver.maps.LatLng(35.18226192269547, 129.1074735238225),
//         map: map,
//         icon: {
//             url: "/static/img/pin.png"
//         }
//     });
//     //25부산연산RFS점
//     var marker25 = new naver.maps.Marker({
//         position: new naver.maps.LatLng(35.184978114852385, 129.08042597686534),
//         map: map,
//         icon: {
//             url: "/static/img/pin.png"
//         }
//     });
//     //영도구
//     //26부산영도DT점
//     var marker26 = new naver.maps.Marker({
//         position: new naver.maps.LatLng(35.09446933285846, 129.04712680444717),
//         map: map,
//         icon: {
//             url: "/static/img/pin.png"
//         }
//     });
//     //해운대구
//     //27부산센텀오일뱅크점
//     var marker27 = new naver.maps.Marker({
//         position: new naver.maps.LatLng(35.18176412888765, 129.12345561821257),
//         map: map,
//         icon: {
//             url: "/static/img/pin.png"
//         }
//     });
//     //28해운대신도시1점
//     var marker28 = new naver.maps.Marker({
//         position: new naver.maps.LatLng(35.16841180728148, 129.1825995967501),
//         map: map,
//         icon: {
//             url: "/static/img/pin.png"
//         }
//     });
//     //29해운대비치점
//     var marker29 = new naver.maps.Marker({
//         position: new naver.maps.LatLng(35.16169773687401, 129.16077533922868),
//         map: map,
//         icon: {
//             url: "/static/img/pin.png"
//         }
//     });
//     //30해운대우동점
//     var marker30 = new naver.maps.Marker({
//         position: new naver.maps.LatLng(35.163367149604575, 129.14136888336932),
//         map: map,
//         icon: {
//             url: "/static/img/pin.png"
//         }
//     });
//     //31부산센텀시티점
//     var marker31 = new naver.maps.Marker({
//         position: new naver.maps.LatLng(35.171568202619014, 129.130861703932),
//         map: map,
//         icon: {
//             url: "/static/img/pin.png"
//         }
//     });
// }