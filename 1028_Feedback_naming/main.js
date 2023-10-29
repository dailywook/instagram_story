window.onload = function() {
  console.log("1")
  init()
};
  
function init() {
  console.log("4")
  let drawTab = document.querySelector('.draw_contents');
  drawTab.classList.remove('active')
  let drawBtn = document.querySelector('.instagram_content');
  drawBtn.classList.remove('draw')
  let slideBar = document.querySelector('.slider_bar');
  slideBar.classList.remove('active')


  const moreBtn = document.querySelector('.more_btn')
  moreBtn.addEventListener('click', morePop);

// Swipe 인터렉션
  const swiper = new Swiper(".swiper", {
    pagination: {
      el: ".swiper-pagination",
      },
    }
  )};



function morePop() {
  console.log("2")
  let morePopBtn = document.querySelector('.more_btn_pop');
  morePopBtn.classList.toggle('active')
  const drawBtn = document.querySelector('.draw')
  drawBtn.addEventListener('click', drawTab);
};


function drawTab() {
  // 슬라이더 화면 진입시 1s 이후 슬라이드 터치가 없을 시 슬라이드 제자리로 만들기 - 어떻게
  // 그리기 진행시 슬라이드 접기 위치 이동
  console.log("drawTab")
  let slideBar = document.querySelector('.slider_bar');
  slideBar.classList.add('active')
  // slideBar.addEventListener('click', slideBar);
  let drawBtn = document.querySelector('.instagram_content');
  drawBtn.classList.toggle('draw')
  let drawTab = document.querySelector('.draw_contents');
  drawTab.classList.toggle('active')
  const completeBtn = document.querySelector('.complete_btn')
  completeBtn.addEventListener('click', init);
  let morePopBtn = document.querySelector('.more_btn_pop');
  morePopBtn.classList.remove('active')
  drawSlide()
  gsap.to('.slider_bar.active', 0, {x:0, opacity: 1, ease:'power2.inOut'})
  drawCanvas()
};



let slideTab = 0;

function drawSlide(evt) {
  // draw Slide 누르지 않음 opacity 0.4 x -25 이동 touchstart에 slideOnMouseDown으로 함수 이동
  console.log("drawSlide")
  let slideTab = document.querySelector('.slider_bar.active');
  slideTab.addEventListener('touchstart', slideOnMouseDown);
  slideTab.addEventListener('touchmove', slideOnMouseMove);
  gsap.to('.slider_bar.active', 0.2, {delay:2, x:-25, opacity: 0.4, ease:'power2.inOut'})

}

const touchCheck = 0;

function slideOnMouseDown(evt) {
  console.log('touchCheck')
  gsap.to('.slider_bar.active', 0.1, {x:0, opacity: 1, ease:'power2.inOut'})
  drawSlide();
  // touch 이후 다시 drawslide로 이동해서 딜레이 이후 동작 
}

function slideOnMouseMove(evt) {
  console.log('touchCheck')
  gsap.to('.slider_bar.active', 0.1, {x:0, opacity: 1, ease:'power2.inOut'})
    // drawSlide();
  // touch 이후 다시 drawslide로 이동해서 딜레이 이후 동작 


}


// Touch 좌표 선정
function drawCanvas () {
  console.log("drawCanvas");
  const drawingCanvas = document.querySelector('.canvas')
  drawingCanvas.addEventListener('touchmove', onMouseMove);
  drawingCanvas.addEventListener('touchend', onMouseUp);
}


// 손을 댔을때
function onMouseMove (evt) {
  console.log('touchStart');
  // 좌표따기 위한 Code
  stY = evt.changedTouches[0].clientY;
  stX = evt.changedTouches[0].clientX;
  // 좌표 출력 Touch Down으로 좌표 선정하기
  console.log('touchMoveY = ', stY);
  console.log('touchMoveX = ', stX);
  // 좌표는 가져왔고 좌표를 대입해 작성한다
  makeDot()
  // 태그들의 속성을 없앤다 - 고유 동작을 정지시킨다
  evt.preventDefault()
  let drawTab = document.querySelector('.draw_contents');
  drawTab.classList.remove('active')
}


function onMouseUp (evt) {
  console.log('touchEnd');
  stY = evt.changedTouches[0].clientY;
  stX = evt.changedTouches[0].clientX;
  // 좌표 출력 Touch Down으로 좌표 선정하기
  console.log('touchMoveY = ', stY);
  console.log('touchMoveX = ', stX);
  let drawTab = document.querySelector('.draw_contents');
  drawTab.classList.add('active')
}


function makeDot() {
  const drawingCanvas = document.querySelector('.canvas')
  let div = document.createElement('div');
  div.className = 'drawdot'
  //  위에서 선언을 했으니 그 부분에 넣는 것은 필수 (drawingCanvas) - 여기다가 넣어라
  drawingCanvas.appendChild(div)

  const element = document.querySelector('#myRange');
  // 현재 값 가져오기
  const rangeValue = element.value;
  console.log('slider =', rangeValue)
  // slide 값구했고
  // 여기에 선언한 것들을 넣어주고 새로 생성된 div에 반영되게끔 해줘야한다. div = 새로 생성된 drawdot뭉치
  gsap.to(div, 0, {x:stX, y:stY, opacity: 1, scale: rangeValue})
  
  // 여기다가 scale값을 넣으니 .drawdot이라는 클래스명에 다 반영이 되는것이다
  // drawdot은 dot기준 클래스인지 변화하면 안되는 클래스


  // ColorChip 반영
  

  }



  