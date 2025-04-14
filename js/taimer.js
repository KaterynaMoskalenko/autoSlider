'use.strict';

const header = document.querySelector('.header');
const h1 = document.createElement('h1');
h1.textContent = 'countdown timer';
h1.classList.add('head');

header.appendChild(h1);

let beginTimer = 15;

function getTimer (beginTimer) {
 

         minits = Math.floor(beginTimer / 60);
        console.log(minits)
         sec = beginTimer % 60;
         console.log(sec)

        let getMin = minits < 10 ? `0${minits}` : minits;
        let getSec = sec < 10 ?  `0${sec}` : sec;
   
console.log(getMin)
console.log(getSec)
    return `${getMin}:${getSec}`;
}    


function showTimer(beginTimer) {
    const divTimer = document.createElement('div');
    divTimer.classList.add('timer')
    header.appendChild(divTimer)

    const timeStopInterval = setInterval(() => {
        divTimer.textContent = getTimer(beginTimer)

        if (beginTimer <=0 ) {
            clearInterval(timeStopInterval);
            divTimer.textContent = 'Time is up';            
        } else beginTimer--;
     }, 1000)
}
showTimer(beginTimer);