//슬라이드
// $(function(){
// 	$('.slick-track').slick({
// 		slide: 'div',        //슬라이드 되어야 할 태그 ex) div, li 
// 		infinite : true,     //무한 반복 옵션     
// 		slidesToShow : 1,        // 한 화면에 보여질 컨텐츠 개수
// 		slidesToScroll : 1,        //스크롤 한번에 움직일 컨텐츠 개수
// 		speed : 100,     // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
// 		arrows : true,         // 옆으로 이동하는 화살표 표시 여부
// 		dots : true,         // 스크롤바 아래 점으로 페이지네이션 여부
// 		autoplay : true,            // 자동 스크롤 사용 여부
// 		autoplaySpeed : 10000,         // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
// 		pauseOnHover : true,        // 슬라이드 이동    시 마우스 호버하면 슬라이더 멈추게 설정
// 		vertical : false,        // 세로 방향 슬라이드 옵션
// 		dotsClass : "slick-dots",     //아래 나오는 페이지네이션(점) css class 지정
// 		draggable : true,     //드래그 가능 여부 
			
// 		// responsive: [ // 반응형 웹 구현 옵션
// 		// 	{  
// 		// 	breakpoint: 960, //화면 사이즈 960px
// 		// 	settings: {
// 		// 		//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
// 		// 		slidesToShow:3 
// 		// 		} 
// 		// 	},
// 		// 	{ 
// 		// 	breakpoint: 768, //화면 사이즈 768px
// 		// 	settings: {    
// 		// 		//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
// 		// 		slidesToShow:2 
// 		// 		} 
// 		// 	}
// 		// ]

// 	});
// });
// $(document).ready(function () {
//     // 슬라이더를 초기화합니다.
//     $('#slickBanner').slick({
//         // 설정 옵션을 추가할 수 있습니다.
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         dots: true, // 페이지네이션 (pagination) 활성화
//         prevArrow: $('.btn_prev'), // 이전 버튼을 사용자 정의 버튼으로 설정
//         nextArrow: $('.btn_next'), // 다음 버튼을 사용자 정의 버튼으로 설정
//         autoplay: true, // 자동 재생 활성화
//         autoplaySpeed: 2000, // 슬라이드 간 시간 간격 (밀리초)
//         pauseOnHover: false // 마우스 호버 시 자동 재생 일시 중지 여부
//         // 필요한 경우, 더 많은 옵션을 추가할 수 있습니다.
//     });

//     // 일시정지 버튼 클릭 시 자동 재생을 일시 정지/재개합니다.
//     $('#btnPause').click(function() {
//         var $slider = $('#slickBanner');
//         if ($slider.hasClass('slick-autoplay')) {
//             $slider.slick('slickPause');
//             $(this).find('span').text('재생');
//         } else {
//             $slider.slick('slickPlay');
//             $(this).find('span').text('일시정지');
//         }
//     });
// });
