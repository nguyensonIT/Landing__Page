const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const btnNext = $$('.comment__btn__next')
const itemComment = $$('.comment__box__item')
const itemDot = $$('.comment__dot__span')
const boxComment = $('.comment__box')
const btnNavbar = $('.header__navbar__box')
const navBar = $('.header__navbar__list')

const widthScreen = window.innerWidth
const widthItem = itemComment[0].offsetWidth

let currentIndex = 0
if(widthScreen <= 739 || widthScreen >= 740 && widthScreen <= 1023 ){
    btnNext.forEach((btn,index) => {
        btn.onclick = ()=>{
            $('.comment__box__item.comment__box__item--active').classList.remove('comment__box__item--active')
            $('.comment__dot__span.comment__dot__span--active').classList.remove('comment__dot__span--active')
            if(index == 1){
                if(currentIndex == (itemComment.length-1)){
                    currentIndex = 0
                    boxComment.style.transform = `translateX(0px)`
                }else{
                    currentIndex++
                    boxComment.style.transform = `translateX(-${widthItem*currentIndex}px)`
                }
                itemComment[currentIndex].classList.add('comment__box__item--active')
                itemDot[currentIndex].classList.add('comment__dot__span--active')
                
    
            }else{
                if(currentIndex == 0){
                    currentIndex = itemComment.length-1
                    boxComment.style.transform = `translateX(-${widthItem*(itemComment.length-1)}px)`
                }else{
                    currentIndex--
                    boxComment.style.transform = `translateX(-${widthItem*currentIndex}px)`
                }
                itemComment[currentIndex].classList.add('comment__box__item--active')
                itemDot[currentIndex].classList.add('comment__dot__span--active')
            }
        }
    });
    btnNavbar.onclick = ()=>{
        navBar.classList.toggle('header__navbar__list--active')
        // if($('.header__navbar__list.header__navbar__list--active')){
        //     navBar.style.display = 'none'
        // }else{
        //     navBar.style.display = 'block'
        // }
    }
}

else if(widthScreen >= 1024){
    btnNext.forEach((btn,index) => {
        btn.onclick = ()=>{
            $('.comment__box__item.comment__box__item--active').classList.remove('comment__box__item--active')
            $('.comment__dot__span.comment__dot__span--active').classList.remove('comment__dot__span--active')
            if(index == 1){
                if(currentIndex == (itemComment.length-1)){
                    currentIndex = 0
                    boxComment.style.transform = `translateX(0px)`
                }else{
                    currentIndex++
                }
                if(currentIndex == 3){
                    boxComment.style.transform = `translateX(-${widthItem+60}px)`
                }
                itemComment[currentIndex].classList.add('comment__box__item--active')
                itemDot[currentIndex].classList.add('comment__dot__span--active')
    
            }else{
                if(currentIndex == 0){
                    currentIndex = 3
                    boxComment.style.transform = `translateX(-${widthItem+60}px)`
                }else{
                    currentIndex--
                }
                if(currentIndex == 1){
                    boxComment.style.transform = `translateX(0px)`
                }
                itemComment[currentIndex].classList.add('comment__box__item--active')
                itemDot[currentIndex].classList.add('comment__dot__span--active')
            }
        }
    });
}

