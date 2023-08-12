/*
사용자 현재위치 가져오기
사용자의 위치를 가져오면 해당 위치를 변수 myLocation에 저장하고, 네이버 지도에서 표시하기 위해 naver.maps.LatLng 객체로 변환합니다.
처음 호출 시에는 마커를 생성하여 해당 위치에 표시합니다. 이후 호출 시에는 마커를 해당 위치로 이동시킵니다.
지도의 중심을 사용자의 위치로 설정하여 해당 위치가 화면에 나타나도록 합니다.
위치 정보를 가져올 수 없는 경우에는 사용자에게 알림을 표시합니다.
*/
function showMyLocation() {
    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(function (position) {
            var myLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
            };
            var mymarker = new naver.maps.Marker({
                position: new naver.maps.LatLng(myLocation.lat, myLocation.lng),
                map: map
            }); 
            map.setCenter(new naver.maps.LatLng(myLocation.lat, myLocation.lng));
        });
    }
    
}

//지역검색
function showSmallList() {
    var bigList = document.getElementById("bigList");
    var selectedValue = bigList.options[bigList.selectedIndex].value;
    var smallList = document.getElementById("smallList");
    var smallListOptions = smallList.getElementsByTagName("option");
    
    if (selectedValue === "21") {
        for (var i = 1; i < smallListOptions.length; i++) {
            smallListOptions[i].style.display = "block";
        }
    } else {
        for (var i = 1; i < smallListOptions.length; i++) {
            smallListOptions[i].style.display = "none";
        }
    }
}
//지역검색2
/*const listContainerElement = document.getElementById("listContainer");
const storeLiElements = listContainerElement.querySelectorAll("#store");
const storeNumber = document.querySelector(".store_number");
storeNumber.textContent = storeLiElements.length;*/

//지역검색3
function showStoreList() {
    var smallList = document.getElementById("smallList");
    var selectedValue = smallList.options[smallList.selectedIndex].value;
    var listContainer = document.getElementById("listContainer");
    var liItems = listContainer.querySelectorAll("#store");
    
    var visibleStoreCount = 0; // 보이는 liItems의 수를 저장할 변수

    for (var i = 0; i < liItems.length; i++) {
        if (liItems[i].getAttribute("value") === selectedValue) {
            liItems[i].style.display = "block";
            visibleStoreCount++;
        } else {
            liItems[i].style.display = "none";
        }
    }
    
    var storeNumber = document.querySelector(".store_number");
    storeNumber.textContent = visibleStoreCount; // 보이는 liItems의 수를 업데이트
}

//지도설정
var map;
//지도 불러오면 서울에서 시작
function initMap() {
    map = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(37.5665, 126.9780), // 초기 지도 중심 위치 (서울)
      zoom: 15 // 지도 줌 레벨
    });
    var showLocationButton = document.getElementById('showLocationButton');
    showLocationButton.addEventListener('click', showMyLocation);
    
    //부산매장위치
    //부산강서구
    //01부산명지DT점
    var marker01 = new naver.maps.Marker({
        position: new naver.maps.LatLng(35.09482505414533, 128.922921650987),
        map: map,
        icon: {
            url: "/static/img/pin.png"
        }
    });
    //02김해공항DT점
    var marker02 = new naver.maps.Marker({
        position: new naver.maps.LatLng(35.17637362085831, 128.95835532845024),
        map: map,
        icon: {
            url: "/static/img/pin.png"
        }
    });
    //금정구
    //03부산금정오일뱅크점
    var marker03 = new naver.maps.Marker({
        position: new naver.maps.LatLng(35.233048201687566, 129.09190028455757),
        map: map,
        icon: {
            url: "/static/img/pin.png"
        }
    });
    //04부산대점
    var marker04 = new naver.maps.Marker({
        position: new naver.maps.LatLng(35.230478833706314, 129.08661474736118),
        map: map,
        icon: {
            url: "/static/img/pin.png"
        }
    });
    //05부산외대점
    var marker05 = new naver.maps.Marker({
        position: new naver.maps.LatLng(35.26582923209979, 129.08565867374273),
        map: map,
        icon: {
            url: "/static/img/pin.png"
        }
    });
    //기장군
    //06부산정관DT점
    var marker06 = new naver.maps.Marker({
        position: new naver.maps.LatLng(35.32714926881166, 129.17625460145422),
        map: map,
        icon: {
            url: "/static/img/pin.png"
        }
    });
    //07부산기장DT점
    var marker07 = new naver.maps.Marker({
        position: new naver.maps.LatLng(35.24253675228221, 129.22022826029166),
        map: map,
        icon: {
            url: "/static/img/pin.png"
        }
    });
    //08부산오시리아점
    var marker08 = new naver.maps.Marker({
        position: new naver.maps.LatLng(35.193788510240694, 129.21443541732307),
        map: map,
        icon: {
            url: "/static/img/pin.png"
        }
    });
    //남구
    //09부산대연GS점
    var marker09 = new naver.maps.Marker({
        position: new naver.maps.LatLng(35.136248258719355, 129.09830584980858),
        map: map,
        icon: {
            url: "/static/img/pin.png"
        }
    });
    //10부산용호분포SK점
    var marker10 = new naver.maps.Marker({
        position: new naver.maps.LatLng(35.12175705279849, 129.1120828214256),
        map: map,
        icon: {
            url: "/static/img/pin.png"
        }
    });
    //동래구
    //11부산안락DT점
    var marker11 = new naver.maps.Marker({
        position: new naver.maps.LatLng(35.19983231648358, 129.09317775145664),
        map: map,
        icon: {
            url: "/static/img/pin.png"
        }
    });
    //12부산사직점
    var marker12 = new naver.maps.Marker({
        position: new naver.maps.LatLng(35.19564984777759, 129.05935671738644),
        map: map,
        icon: {
            url: "/static/img/pin.png"
        }
    });
    //13부산수안역점
    var marker13 = new naver.maps.Marker({
        position: new naver.maps.LatLng(35.202881043665116, 129.0811241783889),
        map: map,
        icon: {
            url: "/static/img/pin.png"
        }
    });
    //부산진구
    //14부산양정점
    var marker14 = new naver.maps.Marker({
        position: new naver.maps.LatLng(35.17050055455176, 129.06967491768043),
        map: map,
        icon: {
            url: "/static/img/pin.png"
        }
    });
    //15부산서면일번가점
    var marker15 = new naver.maps.Marker({ 
        position: new naver.maps.LatLng(35.15493774826688, 129.0580281048491),
        map: map,
        icon: {
            url: "/static/img/pin.png"
        }
    });
    //16부산개금점
    var marker16 = new naver.maps.Marker({
        position: new naver.maps.LatLng(35.15282211323402, 129.0250246946157),
        map: map,
        icon: {
            url: "/static/img/pin.png"
        }
    });
    //북구
    //17부산화명점
    var marker17 = new naver.maps.Marker({
        position: new naver.maps.LatLng(35.23435757837503, 129.01298552239822),
        map: map,
        icon: {
            url: "/static/img/pin.png"
        }
    });
    //사상구
    //18부산서부터미널점
    var marker18 = new naver.maps.Marker({
        position: new naver.maps.LatLng(35.16379004939367, 128.9836010763125),
        map: map,
        icon: {
            url: "/static/img/pin.png"
        }
    });
    //19부산주례점
    var marker19 = new naver.maps.Marker({
        position: new naver.maps.LatLng(35.15036809880176, 129.00515369043333),
        map: map,
        icon: {
            url: "/static/img/pin.png"
        }
    });
    //사하구
    //20부산괴정역점
    var marker20 = new naver.maps.Marker({
        position: new naver.maps.LatLng(35.09947046568165, 128.9936316381926),
        map: map,
        icon: {
            url: "/static/img/pin.png"
        }
    });
    //21부산구평DT점
    var marker21 = new naver.maps.Marker({
        position: new naver.maps.LatLng(35.08622272412021, 128.98871536777642),
        map: map,
        icon: {
            url: "/static/img/pin.png"
        }
    });
    //22부산신평DT점
    var marker22 = new naver.maps.Marker({
        position: new naver.maps.LatLng(35.08506728908087, 128.96757171231127),
        map: map,
        icon: {
            url: "/static/img/pin.png"
        }
    });
    //23부산하단역점
    var marker23 = new naver.maps.Marker({
        position: new naver.maps.LatLng(35.106589008976954, 128.96776549135004),
        map: map,
        icon: {
            url: "/static/img/pin.png"
        }
    });
    //연제구
    //24연산토곡SKDT점
    var marker24 = new naver.maps.Marker({
        position: new naver.maps.LatLng(35.18226192269547, 129.1074735238225),
        map: map,
        icon: {
            url: "/static/img/pin.png"
        }
    });
    //25부산연산RFS점
    var marker25 = new naver.maps.Marker({
        position: new naver.maps.LatLng(35.184978114852385, 129.08042597686534),
        map: map,
        icon: {
            url: "/static/img/pin.png"
        }
    });
    //영도구
    //26부산영도DT점
    var marker26 = new naver.maps.Marker({
        position: new naver.maps.LatLng(35.09446933285846, 129.04712680444717),
        map: map,
        icon: {
            url: "/static/img/pin.png"
        }
    });
    //해운대구
    //27부산센텀오일뱅크점
    var marker27 = new naver.maps.Marker({
        position: new naver.maps.LatLng(35.18176412888765, 129.12345561821257),
        map: map,
        icon: {
            url: "/static/img/pin.png"
        }
    });
    //28해운대신도시1점
    var marker28 = new naver.maps.Marker({
        position: new naver.maps.LatLng(35.16841180728148, 129.1825995967501),
        map: map,
        icon: {
            url: "/static/img/pin.png"
        }
    });
    //29해운대비치점
    var marker29 = new naver.maps.Marker({
        position: new naver.maps.LatLng(35.16169773687401, 129.16077533922868),
        map: map,
        icon: {
            url: "/static/img/pin.png"
        }
    });
    //30해운대우동점
    var marker30 = new naver.maps.Marker({
        position: new naver.maps.LatLng(35.163367149604575, 129.14136888336932),
        map: map,
        icon: {
            url: "/static/img/pin.png"
        }
    });
    //31부산센텀시티점
    var marker31 = new naver.maps.Marker({
        position: new naver.maps.LatLng(35.171568202619014, 129.130861703932),
        map: map,
        icon: {
            url: "/static/img/pin.png"
        }
    });
}




















































// //위치를 지정하면 그 위치를 기준으로 가장 가까운 매장 3개를 가까운순으로 띄워주기
// DB에 저장된 좌표들을 가져오는 함수를 구현합니다.
// 사용자로부터 새로운 좌표 A를 입력받는 함수를 구현합니다.
// 두 좌표 사이의 거리를 계산하는 함수를 구현합니다.
// 입력받은 좌표 A와 DB의 좌표들과의 거리를 측정하여 가장 가까운 좌표 3개를 찾는 함수를 구현합니다.
// 결과를 출력하는 함수를 구현합니다.
// // 가상의 DB에 저장된 좌표들
// const coordinatesInDB = [
//     { x: 1, y: 2 },
//     { x: 5, y: 7 },
//     { x: 10, y: 12 },
//     // ... (총 30개의 좌표)
//   ];
  
//   // 두 좌표 사이의 거리를 계산하는 함수
//   function calculateDistance(coord1, coord2) {
//     const xDistance = coord2.x - coord1.x;
//     const yDistance = coord2.y - coord1.y;
//     const distance = Math.sqrt(xDistance * xDistance + yDistance * yDistance);
//     return distance;
//   }
  
//   // 가장 가까운 좌표 3개를 찾는 함수
//   function findClosestCoordinates(targetCoord, allCoordinates, numClosest) {
//     const distances = allCoordinates.map((coord) => ({
//       coordinate: coord,
//       distance: calculateDistance(targetCoord, coord),
//     }));
  
//     distances.sort((a, b) => a.distance - b.distance);
  
//     return distances.slice(0, numClosest).map((item) => item.coordinate);
//   }
  
//   // 거리가 3km 이하인 좌표들을 필터링하는 함수
//   function filterCoordinatesWithin3Km(targetCoord, allCoordinates) {
//     const filteredCoordinates = allCoordinates.filter((coord) => {
//       const distance = calculateDistance(targetCoord, coord);
//       return distance <= 3;
//     });
  
//     return filteredCoordinates;
//   }
  
//   // 실행 예시
//   async function main() {
//     try {
//       // 새로운 좌표 A를 사용자로부터 입력받음
//       const coordinateA = await getCoordinateFromUser();
//       console.log('New coordinate A:', coordinateA);
  
//       // DB에서 좌표들을 가져옴
//       console.log('Coordinates in DB:', coordinatesInDB);
  
//       // 거리가 3km 이하인 좌표들을 필터링
//       const nearbyCoordinates = filterCoordinatesWithin3Km(coordinateA, coordinatesInDB);
//       console.log('Coordinates within 3km:', nearbyCoordinates);
//     } catch (error) {
//       console.error('Error:', error.message);
//     }
//   }
  
//   main();
  