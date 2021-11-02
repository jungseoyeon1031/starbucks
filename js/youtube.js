// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() { // 함수를 찾는 함수, 바꾸면 안됨
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', // 최초 재생할 유튜브 영상 iD
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: 'An6LvWQuj_8', // 반복 재생할 유튜브 영상 id 목록
    },
    events: {
      onReady: function (event) {
        event.target.mute() // 영상이 준비가 되면 익명 함수 실행, 영상 음소거 실행
      }
    }
  });
}
// 매개 변수는 유튜브 아이프레임 api 에서 확인 가능