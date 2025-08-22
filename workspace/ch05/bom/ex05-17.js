// Geolocation API
const btn = document.querySelector("button");
btn?.addEventListener("click", find);
function find() {
    navigator.geolocation.getCurrentPosition((currentPosition) => {
        console.log(currentPosition);
        const position = {
            lat: currentPosition.coords.latitude, // 위도
            lng: currentPosition.coords.longitude, // 경도
            accuracy: currentPosition.coords.accuracy, // 위경도 오차(m)
        };
        showPosition(position);
    }, () => { }, { enableHighAccuracy: true }); // 성공했을 때 실행할 콜백 함수 (실패는 고려하지 않음)
}
const myPosition = document.querySelector("#my-position");
function showPosition(position) {
    if (myPosition) {
        myPosition.textContent = `${position.lat}, ${position.lng} (${position.accuracy}m)`;
        panTo(position);
        showMarker(position);
        showAccuracy(position);
    }
}
const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
const options = {
    //지도를 생성할 때 필요한 기본 옵션
    center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
    level: 7, //지도의 레벨(확대, 축소 정도)
};
const map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
function panTo(position) {
    // 이동할 위도 경도 위치를 생성합니다
    var moveLatLon = new window.kakao.maps.LatLng(position.lat, position.lng);
    // 지도 중심을 부드럽게 이동시킵니다
    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
    map.panTo(moveLatLon);
}
function showMarker(position) {
    // 지도를 클릭한 위치에 표출할 마커입니다
    var marker = new window.kakao.maps.Marker({
        // 지도 중심좌표에 마커를 생성합니다
        position: new window.kakao.maps.LatLng(position.lat, position.lng),
    });
    // 지도에 마커를 표시합니다
    marker.setMap(map);
}
function showAccuracy(position) {
    // 지도에 표시할 원을 생성합니다
    var circle = new window.kakao.maps.Circle({
        center: new window.kakao.maps.LatLng(position.lat, position.lng), // 원의 중심좌표 입니다
        radius: position.accuracy, // 미터 단위의 원의 반지름입니다
        strokeWeight: 5, // 선의 두께입니다
        strokeColor: "#75B8FA", // 선의 색깔입니다
        strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle: "dashed", // 선의 스타일 입니다
        fillColor: "#CFE7FF", // 채우기 색깔입니다
        fillOpacity: 0.7, // 채우기 불투명도 입니다
    });
    // 지도에 원을 표시합니다
    circle.setMap(map);
}
export {};
