$(document).ready(function(){
    let slider = $('.slider')
    if (!slider.length) return
    slider.slick({
        arrows:true,
        dots:true,
        adaptiveHeight:true,
        speed: 800,
        autoplay:true,
        autoplaySpeed: 3000,
        waitForAnimate:false
    });
});

$(document).ready(function(){
    let slider = $('.slider_products')
    if (!slider.length) return
    slider.slick({
        arrows:true,
        dots:false,
        slidesToShow: 3,
        speed: 1000,
        autoplay:true,
        autoplaySpeed: 3000,
        waitForAnimate:false,
            responsive: [
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1152,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 830,
                    settings: {
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 425,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
          });

    });

window.onscroll = function showHeader() {
    let header = document.querySelector('.header');
    if (!header) return
    if(window.pageYOffset > 300){
        header.classList.add('header_fixed');
    } else {
        header.classList.remove('header_fixed');
    }
};

// Бургер меню
$(function () {
    $('.menu-burger').click(function () {
        $('.menu_list').toggleClass('show-menu')
    })
});
// Бургер меню

// Поиск 
// function search () {
//     let searchInput = document.querySelector('#search');
//     if (!searchInput) return
//     searchInput.oninput = function() {
//         let val = this.value.trim();
//         let productsItems = document.querySelectorAll('.products-grid li');
        
//         if (val != ''){
//             productsItems.forEach(function(elem){
//                 if (elem.innerText.search(val) == -1) {
//                     elem.classList.add('turn-off');
//                     elem.innerHTML = elem.innerText;
//                 }
//                 else {
//                     elem.classList.remove('turn-off');
//                     let line = elem.innerText;
//                     elem.innerHTML = insertMark(line, elem.innerText.search(val), val.length);
//                 }
//             });
//         }
//         else {
//             productsItems.forEach(function(elem){
//                 elem.classList.remove('turn-off');
//                 elem.innerHTML = elem.innerText;
//                 });
//         }
//     }
    
//     function insertMark(str,pos,len) {
//         return str.slice(0, pos) + '<mark>' + str.slice(pos, pos+len) + '</mark>' + str.slice(pos+len);
//     }
// }

// $(document).ready(function(){
//     search()
// })
// // Поиск 


