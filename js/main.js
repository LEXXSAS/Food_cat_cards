let array = [
   {'id:': 0, 'eat': 'Печень утки разварная с артишоками.'},
   {'id:': 1, 'eat': 'Головы щучьи с чесноком да свежайшая сёмгушка.'},
   {'id:': 2, 'eat': 'Печень утки разварная с артишоками.'}
];

let newArray = [
   {'id:': 0, 'eat': 'Печалька, с фуа-гра закончился.'},
   {'id:': 1, 'eat': 'Печалька, с рыбой закончился.'},
   {'id:': 2, 'eat': 'Печалька, с курой закончился.'}
]

let cardsContainer = document.querySelectorAll('.cards__container');
let cardsContainerLink = document.querySelectorAll('.cards__container-link');
let figcaptureLinktwo = document.querySelectorAll('.figcapture__link-two');
let cardsSvgTwo = document.querySelectorAll('.cards-svg__two');
let cardContainerBack = document.querySelectorAll('.cards__container-back');


for(let item of cardContainerBack) {
   item.addEventListener('click', selected);
}

for(let item of cardsSvgTwo) {
   item.addEventListener('click', selected);
}
for(let item of figcaptureLinktwo) {
   item.addEventListener('click', selectedOnlink);
}

function selectedOnlink(event) {
   let curTarget = event.currentTarget;
   let parCurTarget = curTarget.parentElement;
   let parFigcapture = parCurTarget.parentElement;
   let parFigure = parFigcapture.parentElement;
   let curCardContainerLink = parFigure.querySelector('.cards__container-link');
   let dataSet = curCardContainerLink.dataset.eat;
   let eatWeight = curCardContainerLink.querySelector('.eat-weight');
   let cardsSvgTwo = curCardContainerLink.querySelector('.cards-svg__two');
   
   if (!eatWeight.classList.contains('eat-weight--selected') && !cardsSvgTwo.classList.contains('cards-svg__two--selected')) {

      eatWeight.classList.add('eat-weight--selected');
      cardsSvgTwo.classList.add('cards-svg__two--selected');

      function disableAuto() {
               setTimeout(() => {
                if (eatWeight.classList.contains('eat-weight--selected')) {
                  eatWeight.classList.add('eat-weight--disabled');
                  cardsSvgTwo.classList.add('cards-svg__two--disabled');
                  eatWeight.classList.remove('eat-weight--selected');
                  cardsSvgTwo.classList.remove('cards-svg__two--selected');
                  figCaptureSpan.innerText = newArray[dataSet].eat;
                  figCaptureSpan.style.color = '#FFFF66'
               }
                }, 1450);

      }

      disableAuto()
      
   }
  
   let figCaptureSpan = parCurTarget.querySelector('.figcapture-span');
   let link = parCurTarget.querySelector('.figcapture__link-two');
   if (link === null) {
      return;
      } else {
         link.remove();

         figCaptureSpan.innerText = array[dataSet].eat;
      }
  
}

   function selected(event) {
      let curTarget = event.currentTarget;
      let parCurTarget = curTarget.parentElement;
      let curCardContainer = parCurTarget.parentElement;
      let cardContainerLink = parCurTarget; 
      let dataSet = cardContainerLink.dataset.eat;
      let link = curCardContainer.querySelector('.figcapture__link-two');
      let figCaptureSpan = curCardContainer.querySelector('.figcapture-span');
      let eatWeight = parCurTarget.querySelector('.eat-weight');
      let cardsSvgTwo = parCurTarget.querySelector('.cards-svg__two');

      if (eatWeight.classList.contains('eat-weight--selected') && cardsSvgTwo.classList.contains('cards-svg__two--selected')) {
         eatWeight.classList.remove('eat-weight--selected');
         cardsSvgTwo.classList.remove('cards-svg__two--selected');

         let figcaptureContainer = curCardContainer.querySelector('.cards__container-figcapture');
         let elemA = document.createElement('a');
         elemA.classList.add('figcapture__link-two');
         elemA.setAttribute('href', '#');
         let elemText = document.createTextNode(' купи.');
         elemA.appendChild(elemText);
         figcaptureContainer.appendChild(elemA);
         figCaptureSpan.innerText = 'Чего сидишь? Порадуй котэ,';

         let figcaptureLinktwo = document.querySelectorAll('.figcapture__link-two');
         for(let item of figcaptureLinktwo) {
            item.addEventListener('click', selectedOnlink);
         }
      } 
        else if (eatWeight.classList.contains('eat-weight--disabled') && cardsSvgTwo.classList.contains('cards-svg__two--disabled')) {
            return;
         } else {
         eatWeight.classList.add('eat-weight--selected');
         cardsSvgTwo.classList.add('cards-svg__two--selected');
         link.remove();

         cardContainerLink.addEventListener('mouseout', disabledAdd);
         
         function disabledAdd(event) {
            let target = event.target;
            let parTarget = target.parentElement;
            
            if (!eatWeight.classList.contains('eat-weight--selected'))  {
               cardContainerLink.removeEventListener('mouseout', disabledAdd);
               
            } else if (target.closest('path') || target.classList.contains('cards-svg__two') || target.classList.contains('cards__container-link')) {
               setTimeout(() => {
                  let containTarget = parTarget.parentElement;
                  let eatWeight = containTarget.querySelector('.eat-weight');
                  let cardsSvgTwo = containTarget.querySelector('.cards-svg__two');
                  eatWeight.classList.add('eat-weight--disabled');
                  cardsSvgTwo.classList.add('cards-svg__two--disabled');
                  eatWeight.classList.remove('eat-weight--selected');
                  cardsSvgTwo.classList.remove('cards-svg__two--selected');
                  figCaptureSpan.innerText = newArray[dataSet].eat;
                  figCaptureSpan.style.color = '#FFFF66'
               }, 1450);

            }
            
          }

         figCaptureSpan.innerText = array[dataSet].eat;
      } 
    };
