const changeA = document.querySelector(".change_a");

const prdmenuList = document.querySelector(".prdmenu_list");
const menuButton = document.querySelectorAll("button");
const orderList2 = document.querySelector(".orderList_2");
const orderlistBoxText = document.querySelector(".orderList_data .orderlist_box_text");

const modal = document.querySelector(".modal");
const modal2 = document.querySelector(".modal2");


/*const closeBtn2 = document.querySelector(".closeBtn2");
*/
let num = 1;

load(num);


menuButton[0].onclick = () => {
	console.log(1);
	num = 1;
	load(num);
}

menuButton[1].onclick = () => {
	console.log(2);
	 num = 2;
	load(num);
}

menuButton[2].onclick = () => {
	console.log(3);
	num = 3;
	load(num);
}

menuButton[3].onclick = () => {
	console.log(4);
	num = 4;
	load(num);
}

menuButton[4].onclick = () => {
	console.log(5);
	num = 5;
	load(num);
}

menuButton[5].onclick = () => {
	console.log(6);
	num = 6;
	load(num);
}

function load(category) {
    $.ajax({
        type: "GET",
        url: "/api/mainMenu",
        data: {
            "category": category,
        },
        async: false,
        dataType: "json",
        success: (response) => {
            console.log(response);
            getList(response.data);
            
        },
        error: errorMessage
    });
}

function getList(data) {
    const prdmenuList = document.querySelector(".prdmenu_list");
	console.log(data);
    // 기존 내용을 비우고 새로운 데이터를 추가하기 위해 innerHTML 초기화
    prdmenuList.innerHTML = '';

    for (let content of data) {
        const listContent = `
	        <button type="button" class="menuBtn" id=1>
	            <li>
	                <div class="prd_img">
	                    <img src="${content.mainmenuImage}">
	                </div>
	                <div>
	                    <p id ="maniemenu_name_${content.mainmenuName}" class="tit"> <strong>${content.mainmenuName}</strong></p>
	                    <p class="price">₩${content.mainmenuPrice}~</p>
	                   	<p id = "mainmenu_code_${content.mainmenuCode}" class = "mainmenu_code"></p>
	                </div>
	            </li>
	        </button>
        `;
        prdmenuList.innerHTML += listContent;        
    }
       
     const menuBtn = document.querySelectorAll(".menuBtn");
     
  	 const menuCodeMap = new Map();
  	 const mainmenuNameMap = new Map();
  	 
     for(let i =0; i<menuBtn.length; i++) {
		 
		 let mainmenuCode = menuBtn[i].querySelector(".mainmenu_code").getAttribute("id");
		 let index = mainmenuCode.lastIndexOf("_");
		 mainmenuCode = mainmenuCode.substring(index+1);
		 menuCodeMap.set(i, mainmenuCode);
		 
		 let mainmenuName = menuBtn[i].querySelector(".tit").getAttribute("id");
		 let nameIndex = mainmenuName.lastIndexOf("_");
		 mainmenuName = mainmenuName.substring(nameIndex+1);
		 mainmenuNameMap.set(i, mainmenuName);
	 }
	 
	 for(let i = 0; i <menuBtn.length; i++) {
		 menuBtn[i].onclick = () => {
			let mainMenuName = mainmenuNameMap.get(i);
			let mainMenuCode = menuCodeMap.get(i);
			getModal(mainMenuCode, mainMenuName);
			openModal();
			
			const closeBtn = document.querySelector(".closeBtn");
			closeBtn.onclick = () => {
			closeModal();
			}	
		 }
	 }
	 
}

function errorMessage(request, status, error) {
    alert("요청실패")
    console.log(request.status);
    console.log(request.responseText);
    console.log(error);
}

//옵션모달창 함수 
function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
	modal.style.display = 'none';
}

function getModal(mainmenucode,mainMenuName) {
	$.ajax({
		type: "GET",
        url: "/api/optionMenu",
        data: {
            "mainMenuCode" : mainmenucode
        },
        async: false,
        dataType: "json",
        success: (response) => {
		loadModal(response.data,mainMenuName, mainmenucode);        
        },
        error: errorMessage
	});
}


function loadModal(data, mainMenuName, mainMenuCode) {
	
	const modal = document.querySelector(".modal");
			const modalHTML = `
			<div class="modal_content">
            <div class="modal_wrap">
                <div class="menu_top">
                    <span>메뉴 선택</span>
                    <button class="closeBtn" type="button">❌</button>
                </div>
                <div class="menu_banner">
                    <div>
                        <span class="name">${mainMenuName}</span> <br>
                        <span class="explain"> <br><br> 콰트로치즈와퍼가 <br>
                         바비큐소스를 만나다!</span>
                    </div>
                    
                    <div>
                        <img src="https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/6879ed8c-87c8-427b-8573-6b74ccba210a.png">
                    </div>
                </div>
                <ul class="menuList_wrap">
                    <li>
                        <div>
                            <img src="https://d1cua0vf0mkpiy.cloudfront.net/images/menu/thumnail/10f0f3c9-18b4-471d-834a-47a249ee4a4c.png" alt="">
                        </div>
                        
                        <button type="button" class="optionMenu">
                            <div>
                            <p class="li01" style="padding-top: 20px;">${mainMenuName} </p>  <p class="li01">라지세트</p>
                            <p class="li02">${mainMenuName} </p>  <p class="li02">프렌치프라이L + 콜라L</p>
                            <p class="li03">￦${data[1].optionmenuPrice}</p>
                            <p id = "mainmenu_code_${data.mainmenuCode}" ></p>
                            <p id = "optionmenu_code_${data[1].optionmenuCode}" class="optionmenu_code"></p>
                            </div>
                        </button>
                    </li>
                    <li>
                        <div>
                            <img src="https://d1cua0vf0mkpiy.cloudfront.net/images/menu/thumnail/40073031-aa61-488b-9d3d-1242251db2bf.png" alt="">
                        </div>
                        
                        <button type="button" class="optionMenu">
                            <div>
                            <p class="li01" style="padding-top: 20px;">${mainMenuName} </p>  <p class="li01">세트</p>
                            <p class="li02">${mainMenuName} </p>  <p class="li02">프렌치프라이R + 콜라R</p>
                            <p class="li03">￦${data[2].optionmenuPrice}</p>
                            <p id = "mainmenu_code_${data.mainmenuCode}" ></p>
                            <p id = "optionmenu_code_${data[2].optionmenuCode}" class="optionmenu_code"></p>
                            </div>
                        </button>
                    </li>
                    <li>
                        <div>
                            <img src="https://d1cua0vf0mkpiy.cloudfront.net/images/menu/thumnail/644b2798-1791-4219-8540-f3ddc82315a2.png" alt="">
                        </div>
                        
                        <button type="button" class="optionMenu">
                            <div>
                            <p class="li01" style="padding-top: 20px;">${mainMenuName} </p>  
                            <p class="li02">단품 </p> 
                            <p class="li03">￦${data[3].optionmenuPrice}</p>
                            <p id = "mainmenu_code_${data.mainmenuCode}" ></p>
                            <p id = "optionmenu_code_${data[3].optionmenuCode}" class="optionmenu_code"></p>
                            </div>
                        </button>
                    </li>
                </ul>
            </div>
        </div>`;
   modal.innerHTML = modalHTML;
   
   const optionMenuBtn = document.querySelectorAll(".optionMenu");
   const optionmenuCodeMap = new Map();
   
   for(let i=0; i <3; i++) {
	    let optionmenuCode = optionMenuBtn[i].querySelector(".optionmenu_code").getAttribute("id");
   		let index = optionmenuCode.lastIndexOf("_");
   		optionmenuCode = optionmenuCode.substring(index+1);
   		optionmenuCodeMap.set(i,optionmenuCode);
   }
   
  for(let i =0; i < optionMenuBtn.length; i++) {
	  optionMenuBtn[i].onclick = () => {
	  console.log(i + "번째 버튼을 누르셨습니다.");
	  closeModal();
  	  getModal2(mainMenuCode, optionmenuCodeMap.get(i));
 	  }
  }
   
}


function openModal2() {
	 modal2.style.display = 'block';
}

function closeModal2 () {
	 modal2.style.display = 'none';
}
/*매개변수 넣기 */
function getModal2 (mainMenuCode, optionmenuCode) {
	const modal2 = document.querySelector(".modal2");
	const modalHTML2 = `
		<div class="modal_content2">
            <div class="modal_top2">
                <span>사이드변경</span>
                <button type="button" class="closeBtn2">❌</button>
            </div>

            <div class="modal_middle2">
                <ul class="menuList2">
                    <li class="menuList201">
                        
                        <button type="button class="change_menu_btn">
                                 <div>
                                    <img src="https://d1cua0vf0mkpiy.cloudfront.net/images/menu/option/bf80c698-5f34-489e-92dc-6e4c636c27fd.png" alt="">
                                </div>
                                <p class="tit2">프렌치프라이L</p>
                                <p class="price2">+0원</p>
                        </button>
                            
                        
                    </li>
                    <li class="menuList202">
                       
                        <button type="button" class="change_menu_btn">
                            <div>
                                 <img src="https://d1cua0vf0mkpiy.cloudfront.net/images/menu/option/88f6b236-6c6c-4b16-be97-16b9db1e2cb3.png   ">
                            </div>
                            <p class="tit2" >치즈프라이교환</p>
                            <p class="price2">+400원</p>
                        </button>
                    </li>

                </ul>
            </div>

            <di class="modal_bottom2">
                    <div>
                        <button type="button">
                        <span>선택</span>
                        </button>
                    </div>
            </div>
	`;
	 modal2.innerHTML = modalHTML2;
	 
	  openModal2();
	  
	  const closeBtn2 = document.querySelector(".closeBtn2");
	  closeBtn2.onclick = () => {
		   closeModal2();
	   }
	  
	  const changeMenuBtn = document.querySelectorAll(".menuList2 li");
	  changeMenuBtn[0].onclick = () => {
		 let sidechageCode = 1;
		 console.log("mainmenuCode: "+mainMenuCode);
		 console.log("optionmenuCode: "+optionmenuCode);
		 addCart(mainMenuCode, optionmenuCode,sidechageCode);
		 load(1);
	  }
	  changeMenuBtn[1].onclick = () => {
		   let sidechageCode = 2;
		   console.log("mainmenuCode: "+mainMenuCode);
		   console.log("optionmenuCode: "+optionmenuCode);
		   addCart(mainMenuCode, optionmenuCode,sidechageCode);
	  }
}

function addCart(mainMenuCode, optionmenuCode, sidechageCode) {
	$.ajax({
		type: "POST",
        url: "/api/addCart",
        contentType : "application/json",
        data: JSON.stringify({
            "mainmenuCode": mainMenuCode,
            "optionmenuCode": optionmenuCode,
            "sidechangeCode": sidechageCode
        }),
        async: false,
        dataType: "json",
        success: (response) => {
			console.log("장바구니 넣기 완료 ");
			closeModal2();
			window.location.href= "/cart";
        },
        error: errorMessage
	});
}

