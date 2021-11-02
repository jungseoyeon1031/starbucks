const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

// 서치 요소에 이벤트 추가
// 서치 클래스를 클릭하면 함수 실행, 함수 내용 검색 요소의 포커스
searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute ('placeholder', '통합검색');
  // html 속성을 지정하는 메소드 (속성이름, 실제 들어갈 이름)
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute ('placeholder', '');
  // 요소에 블러 처리 search 부분에 포커스 취소
});

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
// -> 선택자 대체용

window.addEventListener('scroll', _.throttle (function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // 배지 숨기기
    // gasp.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    //위로 이동 버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0
    });
    //배지 보이기
  } else {
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    }); 
    //위로 이동 버튼 숨기기!
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300));
// _.throttle(함수, 시간(밀리세컨드 단위))
// 출력되고 있는 화면에 스크롤 이벤트 추가해서 화면 스크롤시 함수 실행
// 스크롤 하는 동안 함수 실행을 0.3초 동안 함수 한번에 실행 되는 것 방지

toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});
// 태그를 클릭했을 때 -> .7s 동안 스크롤을 0으로 가져가겠다


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
  //gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .5,
    // 1번째는 0.7s, 1.4s, 2.1s, 2.7s
    opacity: 1
  });
});

new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  // autoplay: true,
  // loop: true
});
new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, //한번에 보여줄 슬라이드 수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자 요소
    clickable: true //사용자의 페이지 번호 요소 제공 가능
  },
  navigation: {
    prevEl: '.promotion .swiper-prev', // 이전 슬라이드 버튼
    nextEl: '.promotion .swiper-next' // 다음 슬라이드 버튼
  }
});

new Swiper('.awards .swiper-container', {
autoplay: true,
loop: true,
spaceBetween: 30,
slidesPerView: 5,
remove: true,
navigation: {
  prevEl: '.awards .swiper-prev', // 이전 슬라이드 버튼
  nextEl: '.awards .swiper-next' // 다음 슬라이드 버튼
},
});


// 
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  // 프로모션 토글 버튼을 클릭하면
  isHidePromotion = !isHidePromotion
  // !뒤에 값을 반대 값을 할당한다 false -> ture (프로모션 값이 숨겨졌니?)
  if (isHidePromotion) {
    // 숨김 처리 / 프로모션 만든 부분에 
    promotionEl.classList.add('hide');
  } else {
    // 보임 처리
    promotionEl.classList.remove('hide');
  }
});


//떠있는 반복 애니메이션 만들기
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(selector, // 선택자
    random(1.5, 2.5), // 애니메이션 동작 시간
    { //옵션
    y: size,
    repeat: -1, //반복
    yoyo: true, //올라갔다 내려갔다 돌아오는
    ease: Power1.easeInOut, //타이밍함수! 원하는 형태로 진행
    delay: random(0,delay)
    }
  );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl) {
  // 아래 객체데이터
  new ScrollMagic
  .Scene({ // 감시할 장면(Scene)을 추가
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
  })
  .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
  .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)
});


const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear(); // 2021년 숫자가 지정한 클래스에 글자로 삽입