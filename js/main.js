
$(document).ready(function () {
    // New Projects Stuff
    // portfolio
    //  $('.gallery ul li a').click(function() {
    //     var itemID = $(this).attr('href');
    //     $('.gallery ul').addClass('item_open');
    //     $(itemID).addClass('item_open');
    //     return false;
    // });

    // $('.close').click(function() {
    //     $('.port, .gallery ul').removeClass('item_open');
    //     return false;
    // });

    // $(".gallery ul li a").click(function() {
    //     $('html, body').animate({
    //         scrollTop: parseInt($("#top").offset().top)
    //     }, 400);
    // });

    // Adding a Pop-Up
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal 
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }



    let $btns = $('.project-area .button-group button');


    $btns.click(function (e) {

        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;
    })
});

// Sticky Navigation Menu
// let nav_offset_top = $('.header_area').height() + 50;

// function navbarFixed(){
//     if($('.header_area').length){
//         $(window).scroll(function(){
//             let scroll = $(window).scrollTop();
//             if (scroll >= nav_offset_top){
//                 $('.header_area .main-menu').addClass('navbar_fixed');
//             } else {
//                 $('.header_area .main-menu').removeClass('navbar_fixed');
//             }
//         })
//     }
// }

// navbarFixed();
