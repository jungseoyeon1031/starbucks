
// 공통으로 사용되는 js 내용

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



const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear(); // 2021년 숫자가 지정한 클래스에 글자로 삽입