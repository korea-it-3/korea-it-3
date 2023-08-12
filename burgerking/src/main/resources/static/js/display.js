const popupButton = document.getElementById('popupButton');

popupButton.addEventListener('click', function() {
    // 팝업창에 표시될 새로운 창
    const popupContent = document.createElement('div');
    popupContent.textContent = "팝업창에 표시될 내용";

    // 팝업창을 띄울 div 요소
    const popupWrapper = document.createElement('div');
    popupWrapper.classList.add('popup-wrapper');
    popupWrapper.appendChild(popupContent);

    // 닫기 버튼
    const closeButton = document.createElement('button');
    closeButton.textContent = "닫기";
    closeButton.addEventListener('click', function() {
        document.body.removeChild(popupWrapper); // 팝업창 닫기
    });
    popupWrapper.appendChild(closeButton);

    document.body.appendChild(popupWrapper); // 팝업창 보여주기
});
