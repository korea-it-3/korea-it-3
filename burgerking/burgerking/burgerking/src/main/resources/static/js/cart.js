const cartMenuList  = document.querySelector(".cart_menu_list");
const modal2 = document.querySelector(".modal2");

getCart();

function getCart() {
	$.ajax({
		type: "GET",
        url: "/api/cartList",
        data: {
        },
        async: false,
        dataType: "json",
        success: (response) => {
            console.log(response);
           	addCart(response.data);
        },
        error: errorMessage
	});
}




function addCart(data) {
//카트 리스트 로드 
	const cartMenuList  = document.querySelector(".cart_menu_list");
	menuListInnerHtml(data);

//메뉴변경 벼튼을 눌렀을때 
	const sideChangeBtn = document.querySelectorAll(".side_change_btn");
	for(let i = 0; i < sideChangeBtn.length; i++) {
		sideChangeBtn[i].onclick = () => {
			console.log(sideChangeBtn[i]);
			console.log(data[i]);
			openModal2();
			
			const changeMenuBtn = document.querySelectorAll(".menuList2 li");
//프렌치프라이 눌렀을 때 
			changeMenuBtn[0].onclick = () => {	
				data[i].sidemenuCode = 1;
				data[i].sidechangeName = "프렌치프라이L";
				data[i].sidechangePrice = 0;
				data[i].totalPrice = data[i].optionmenuPrice ;
				data[i].eaXtotalPrice = data[i].totalPrice * data[i].ea;
				data[0].orderListAmount = 0;
				for (let content of data) {
					data[0].orderListAmount += content.eaXtotalPrice;
				}
				console.log("sidemenuCode: " +data[i].sidemenuCode);
				console.log("sidechangeName: " +data[i].sidechangeName);
				console.log("sidechangePrice: " +data[i].sidechangePrice);
				console.log("totalPrice: " +data[i].totalPrice);
				console.log("eaXtotalPrice: " +data[i].eaXtotalPrice);
				console.log("orderListAmount: " +data[0].orderListAmount);
				menuListInnerHtml(data);
				addCart(data);
			}
//치즈프라이 눌렀을 때 
			changeMenuBtn[1].onclick = () => {	
				data[i].sidemenuCode = 2;
				data[i].sidechangeName = "치즈프라이 교환";
				data[i].sidechangePrice = 400;
				data[i].totalPrice = data[i].optionmenuPrice + 400;
				data[i].eaXtotalPrice = data[i].totalPrice * data[i].ea;
				data[0].orderListAmount = 0;
				for (let content of data) {
					data[0].orderListAmount += content.eaXtotalPrice;
				}
				
				console.log("sidemenuCode: " +data[i].sidemenuCode);
				console.log("sidechangeName: " +data[i].sidechangeName);
				console.log("sidechangePrice: " +data[i].sidechangePrice);
				console.log("totalPrice: " +data[i].totalPrice);
				console.log("eaXtotalPrice: " +data[i].eaXtotalPrice);
				console.log("orderListAmount: " +data[0].orderListAmount);
				menuListInnerHtml(data);
				addCart(data);
			}
			
			const closeBtn2 = document.querySelector(".closeBtn2");
			closeBtn2.onclick = () => {
					closeModal2();
			}
			const choiceBtn = document.querySelector(".change_menu_btn");
			choiceBtn.onclick = () => {
					closeModal2();
			}
			
			
			
		}
	}


//수량 변경 버튼을 눌렀을 때 
 	const minusBtn = document.querySelectorAll(".minus");
 	const plusBtn = document.querySelectorAll(".plus");
 	
 	for(let i = 0; i < minusBtn.length; i++) {
		 minusBtn[i].onclick= () => {
			 data[i].ea = data[i].ea -1;
 			 if(data[i].ea<1) {data[i].ea = 1;}
			 data[i].eaXtotalPrice = data[i].ea * (data[i].optionmenuPrice + data[i].sidechangePrice);
 			 data[0].orderListAmount = data[0].orderListAmount +(data[i].optionmenuPrice + data[i].sidechangePrice);
			 menuListInnerHtml(data);
			 addCart(data);
		}
	}
 	
 	for(let i = 0; i < plusBtn.length; i++) {
		 plusBtn[i].onclick= () => {
			 data[i].ea = data[i].ea +1;
			 data[i].eaXtotalPrice = data[i].ea * (data[i].optionmenuPrice + data[i].sidechangePrice);
			 data[0].orderListAmount = data[0].orderListAmount +(data[i].optionmenuPrice + data[i].sidechangePrice);
			 console.log(data[0].orderListAmount);
			 menuListInnerHtml(data);
			 addCart(data);
		 }
	}
 	
	const orderBtn = document.querySelector(".order_btn");
	orderBtn.onclick = () => {
		console.log("버튼클릭");
		postOrder();
	}
	
	
//전체 선택을 눌렀을때 
  const allCheckBox = document.querySelector(".all_check_box");
  const checkBox = document.querySelectorAll(".mono_menu_checkbox");
 	
  allCheckBox.onclick = () => {
	  if(!allCheckBox.checked) {
		  for(let i = 0; i < checkBox.length; i++) {
			  checkBox[i].checked = false;
		  }
	  }else {
		  for(let i = 0; i < checkBox.length; i++) {
			  checkBox[i].checked = true;
		  }
	  }
  }	
  
//하단 총 주문금액   
  totalPriceInnerHtml(data[0].orderListAmount);
  
//주문하기 눌러서 요청 보내기 

/*postOrder();*/

console.log(data);


	
}


////////////////////
//함수 모음 
function openModal2() {
	 modal2.style.display = 'block';
}

function closeModal2 () {
	 modal2.style.display = 'none';
}



function postOrder () {
	console.log("put가기")
	$.ajax({
		type: "PUT",	
		url: "/api/putCart",
		contentType : "application/json",
        data :
		JSON.stringify([{
	        "cartCode": 45,
	        "mainmenuCode": 1,
	        "optionmenuCode": 3,
	        "sidechangeCode": 1,
	        "ea": 1
		 },
		 {
	        "cartCode": 50,
	        "mainmenuCode": 1,
	        "optionmenuCode": 3,
	        "sidechangeCode": 1,
	        "ea": 1
		 }
		 
		 ]),
		async: false,
        dataType: "json",

        success: (response) => {
       		console.log(response);
    	},
    	error: errorMessage
	});
}



function errorMessage(request, status, error) {
    alert("요청실패")
    console.log(request.status);
    console.log(request.responseText);
    console.log(error);
}



function menuListInnerHtml(data) {
	cartMenuList.innerHTML = '';
	for (let content of data) {
			const cartMenu = `
				<li>
                    <div class="list01">
                        <label>
                            <div style="display: flex;">
                                <input type="checkbox" class="mono_menu_checkbox" checked="on">
                                <span class="menutit">${content.mainmenuName} ${content.optionmenuName}</span>
                            </div>
                            
                            <div class="mono_price"> +${content.optionmenuPrice}원</div>
                        </label>
                        <div class="menu_img">
                            <img src="${content.optionmenuImage}">
                        </div>
                    </div>
                    <div class="set_menu_detail">
                       <dl>
                            <dt>재료추가</dt>
                            <dd>
                                <ul>
                                    <li>없음</li>
                                </ul>
                                <button class="change_btn"><span>변경</span></button>
                            </dd>
                       </dl>

                       <dl>
                            <dt>사이드</dt>
                                <dd>
                                    <div>
                                        <ul>
                                        <li>${content.sidechangeName}</li>
                                        <span class="plus_price"> +${content.sidechangePrice}원</span>
                                        </ul>
                                    </div>
                                    
                                    <button class="change_btn side_change_btn">
                                   		<span>변경</span>
                                    </button>
                                </dd>
                        </dl>
                        
                        <dl>
                            <dt>음료</dt>
                            <dd>
                                <div>
                                    <ul>
                                    <li>스프라이트L</li>
                                    <span class="plus_price">+0원</span>
                                </ul>
                                </div>
                                
                                <button class="change_btn"><span>변경</span></button>
                            </dd>
                        </dl>

                        <div  style = "border-top: 1px solid #f4f4f4;" class="quantity">
                            <strong  class="quantity_txt">수량</strong>
                           <div class="quantity_btn">
                                <button class="minus">-</button>
                                <div>
                                     <input type="number" readonly="readonly" value=${content.ea}>
                                </div>
                               
                                <button class="plus">+</button>
                        </div>
                            <div class="quantity_price">
                                <div><strong>합계금액</strong></div>
                                <div><span>${content.eaXtotalPrice}원</span></div>
                            </div>
                           
                        </div>
                    </div>
                    <div>
                    	<p id = "cart_code_${content.cartCode}"></p>
                    	<p id = "mainmenu_code_${content.mainmenuCode}"></p>
                    	<p id = "optionmenu_code_${content.optionmenuCode}" ></p>
                    	<p id = "sidemenu_code_${content.sidemenuCode}" ></p>
                    	<p id = "ea_${content.ea}" ></p>
                    </div>
                </li>
			`;
		cartMenuList.innerHTML += cartMenu;
	}
}

function totalPriceInnerHtml (price) {
	const totalPrice  = document.querySelector(".totla_price");
	totalPrice.innerHTML = ``;
	
	const inner = `<dt><strong>총 주문금액</strong></dt>
                 <dd><strong>${price}원</strong></dd>`;
    totalPrice.innerHTML = inner;
}


