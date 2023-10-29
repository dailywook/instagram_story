window.onload = function() {
  // window가 로드되면 실행 = 이 함수를
  console.log("start")
  // start 메세지 출력하다
  init()
};
  
function init() {
  console.log("init")

  const moreBtn = document.querySelector('.more_btn')
  moreBtn.addEventListener('click', morePop);
  

// Swipe 인터렉션
  const swiper = new Swiper(".swiper", {
    pagination: {
      el: ".swiper-pagination",
      },
    }
  )};


  function changeDrawMode() {
    // init은 로드용이기 때문에 화면이 돌아가려면, 새로 지정한 함수로 돌려야 한다. 시작점과 반환점이 다르다.
  let drawTab = document.querySelector('.draw_contents');
  drawTab.classList.remove('active')
  let drawBtn = document.querySelector('.instagram_content');
  drawBtn.classList.remove('active')
  let slideBar = document.querySelector('.slider_bar');
  slideBar.classList.remove('active')


  const moreBtn = document.querySelector('.more_btn')
  moreBtn.addEventListener('click', morePop);

  }


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
  slideBar.addEventListener('click', drawSlide);
  // slideBar 잘못 선언한거 수정
  let drawBtn = document.querySelector('.instagram_content');
  drawBtn.classList.toggle('active')
  let drawTab = document.querySelector('.draw_contents');
  drawTab.classList.toggle('active')
  const completeBtn = document.querySelector('.complete_btn')
  completeBtn.addEventListener('click', changeDrawMode); 
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

let colorValue;
// 해당 함수에 해당 값을 전달하거나 전역 변수로 설정해야 합니다. 이를 전역 변수로 설정하는 예시를 보여드리겠습니다. 
// 먼저 전역 변수를 선언하고, 이벤트가 발생할 때 해당 변수를 업데이트합니다. 그런 다음 이 변수를 다른 함수에서 사용할 수 있습니다. 
// 예를 들어 전역 변수 'selectedColor'를 사용하여 이를 수행할 수 있습니다.

// 위에서 변수 선언후에 아래에서 정의 해준다 이게 가능하구나


// Touch 좌표 선정
function drawCanvas () {
  console.log("drawCanvas");
  const drawingCanvas = document.querySelector('.canvas')
  drawingCanvas.addEventListener('touchmove', onMouseMove);
  drawingCanvas.addEventListener('touchend', onMouseUp);


  // Change Color 이벤트 발생
  const colorChip = document.querySelectorAll('.color')
  // querySelectorAll을 작성하면 그냥 addEventListner로 가능하지 않는다. 
  // 동일한 기능을 줄려고 한다면 한가지 div(ex color라는 class를 만들고 Html에서 Style 지정으로 한가지 div를 동일시한 이벤트, 액션을 줄 수 있다)로 만들고, inline방식으로 변경하고 동작을 동일하게 지정해주는 것이 좋다(html 해야할듯)
  // 그리고 동일하게 클릭이벤트 생성

  colorChip.forEach(function(colorClick) {
    // color들을 선택한 colorChip에 각각에 함수 colorBtn적용
    colorClick.addEventListener("click", function (event) {
      // 클릭이벤트 생성 -> click시 함수 적용 -> 컬러벨류는 이벤트의 타겟된 색상 값을 가져온다. 클릭된 요소의 텍스트 콘솔에 출력
      colorValue = event.target.dataset.color;
      // 선택된 색상을 전역 변수에 할당     
      console.log(colorValue)
     
      // 출력한다 "눌린 버튼:"을 붙이고 이벤트에 타겟에 dataset에 컬러값을
      // event로 console.log를 찍으면 확인할 수 있는 것들이 뜬다. target이든 다른것이든
      // 또는 다른 작업을 수행할 수 있습니다.
    });
   
  });
  
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


function onMouseUp(evt) {
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
  // drawingCanvas는 도큐먼트에 캔버스라는 Class를 쿼리셀렉트 한다
  let div = document.createElement('div');
  div.className = 'drawdot'
  //  위에서 선언을 했으니 그 부분에 넣는 것은 필수 (drawingCanvas) - 여기다가 넣어라
  drawingCanvas.appendChild(div)


  // 슬라이드값을 선택하려함
  const slider = document.querySelector('#myRange');
  // slider는 도큐먼트에서 쿼리를 선택한다 id myRange = Html에서 input에 있는 속성을 가져온다
  const slideValue = slider.value;
    // slideValue는 slider의 value를 가져온다.
  console.log('slider =', slideValue)


  


  // ColorChip 반영
  // const color = document.querySelector('#myRange');

  // 여기에 선언한 것들을 넣어주고 새로 생성된 div에 반영되게끔 해줘야한다. div = 새로 생성된 drawdot뭉치
  gsap.to(div, 0, {x:stX, y:stY, opacity: 1, backgroundColor: colorValue, scale: slideValue})
  // 여기다가 scale값을 넣으니 .drawdot이라는 클래스명에 다 반영이 되는것이다
  // drawdot은 dot기준 클래스인지 변화하면 안되는 클래스
  }


  // 탭하면 그게 true가 되고 나머지는 false
  // 탭하면 숫자 1이 올라가고, 는 한번 돌아야해서 불가능 
  // 다른 하나는 함수를 여러개 만들어 다시 다시 반영 반영 반영
  // 일단 버튼 이벤트를 따로 다만들고, 클릭이벤트를 생성


  