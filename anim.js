$(window).on('load', function() {
    $(window).scroll(function() {
        const windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".fade").each(function() {
            const objectBottom = $(this).offset().top + $(this).outerHeight();

            if(objectBottom < windowBottom) {
                if($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
            } else {
                if($(this).css("opacity")==1) {$(this).fadeTo(500, 0);}
            }
        });
    }).scroll();
});

const logo = document.querySelector('#logo');
const headerBtn = document.querySelector('.BtnTry');
const heroLeft = document.querySelector('.hero-left');
const heroRight = document.querySelector('.hero-right');
const heroBtn = document.querySelector('.BtnFree')

const tl = new TimelineMax();

tl.fromTo(
    logo,
    2,
    { x: "-200%" },
    { x: "0%", ease: Power2.easeInOut }
)
    .fromTo(
        headerBtn,
        1,
        { x: "200%" },
        { x: "0%", ease: Power2.easeInOut }
    )

    .fromTo ( 
        heroLeft, 
        2, 
        { y: '200%' }, 
        { y: '0%', ease: Power2.easeInOut }, 
    )

    .fromTo( heroRight, 3, { x: '200%' }, { x: '0%', ease: Power2.easeInOut}, '-=2')
    .fromTo( heroBtn, 3, { x: '-200%' }, { x: '0%', ease: Power2.easeInOut}, '-=2')

