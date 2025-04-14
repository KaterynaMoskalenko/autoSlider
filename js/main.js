'use.strict';



 const pics = document.querySelectorAll('.slider-pic');
// console.dir(pics);

let currentIndexSlide = 0;


function showPic(i) {

    pics.forEach((pic, index) => {

        pic.classList.toggle("active", currentIndexSlide === index);       
        
    })
}
//////
let arrowLeft = document.querySelector('.arrow-left');
let arrowRight = document.querySelector('.arrow-right');



function getPreviouslyPic() {
    currentIndexSlide = (currentIndexSlide - 1 + pics.length ) % pics.length;

    if (currentIndexSlide === 0) {
        arrowLeft.classList.add('none');
    }

      showPic(currentIndexSlide);
}


function getNextPic() {
    currentIndexSlide = (currentIndexSlide + 1) % pics.length;
    showPic(currentIndexSlide)
    console.log(currentIndexSlide)
    if ( arrowLeft.classList.contains('none') )
        arrowLeft.classList.remove('none');
}

function beginAutomaticSlider() {

    showPic(currentIndexSlide);

    currentIndexSlide = (currentIndexSlide + 1) % pics.length;

    // 3 % 3 give rest  0 (cycle give back to first pic) so make sure of slider loop

    setTimeout(beginAutomaticSlider, 3000);
    console.log(currentIndexSlide)
    if ( arrowLeft.classList.contains('none') )
        arrowLeft.classList.remove('none');
}

arrowLeft.addEventListener('click', getPreviouslyPic);
arrowRight.addEventListener('click', getNextPic);

beginAutomaticSlider()