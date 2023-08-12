// 전역 변수 선언
var map;
var stores = [
  { name: 'Store A', lat: 37.123, lng: 126.456 },
  { name: 'Store B', lat: 37.456, lng: 126.789 },
  // Add more store data here...
];

// 네이버 지도 초기화 함수
function initMap() {
    naver.maps.ServiceAPI("ut62adbc95");
    map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(37.7749, 126.4194), // 기본 지도 중심 위치 (서울)
        zoom: 12 // 기본 줌 레벨
    });
}

// 가장 가까운 매장을 찾는 함수
function findNearestStore() {
  var address = document.getElementById('addressInput').value;
  naver.maps.Service.geocode({ address: address }, function (status, response) {
    if (status === naver.maps.Service.Status.OK) {
      var userLocation = response.result.items[0].point;
      var nearestStore = findNearestStoreToUser(userLocation);
      showNearestStoreOnMap(nearestStore);
      alert('Nearest Store: ' + nearestStore.name + '\nDistance: ' + nearestStore.distance.toFixed(2) + ' meters');
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

// 사용자 위치와 가장 가까운 매장을 찾는 함수
function findNearestStoreToUser(userLocation) {
  var nearestStore;
  var nearestDistance = Infinity;

  for (var i = 0; i < stores.length; i++) {
    var store = stores[i];
    var storeLocation = new naver.maps.LatLng(store.lat, store.lng);
    var distance = naver.maps.Util.getDistance(userLocation, storeLocation);

    if (distance < nearestDistance) {
      nearestDistance = distance;
      nearestStore = store;
      nearestStore.distance = distance;
    }
  }

  return nearestStore;
}

// 가장 가까운 매장을 지도에 표시하는 함수
function showNearestStoreOnMap(store) {
  map.setCenter(new naver.maps.LatLng(store.lat, store.lng));
  var marker = new naver.maps.Marker({
    position: new naver.maps.LatLng(store.lat, store.lng),
    map: map,
    title: store.name
  });
}
