
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

    // Adding a Pop-Up (Project 1) Porsche Car Connect
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





    // Adding a Pop-Up (Project 2) Privaseeable
    // Get the modal
    var modal2 = document.getElementById("myModal2");
    // Get the button that opens the modal
    var btn2 = document.getElementById("myBtn2");
    // Get the <span> element that closes the modal
    var span2 = document.getElementsByClassName("close2")[0];

    // When the user clicks on the button, open the modal 
    btn2.onclick = function () {
        modal2.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span2.onclick = function () {
        modal2.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal2) {
            modal2.style.display = "none";
        }
    }

    // Adding a Pop-Up (Project 3) Mood Playlist
    // Get the modal
    var modal3 = document.getElementById("myModal3");
    // Get the button that opens the modal
    var btn3 = document.getElementById("myBtn3");
    // Get the <span> element that closes the modal
    var span3 = document.getElementsByClassName("close3")[0];

    // When the user clicks on the button, open the modal 
    btn3.onclick = function () {
        modal3.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span3.onclick = function () {
        modal3.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal3) {
            modal3.style.display = "none";
        }
    }


    // Adding a Pop-Up (Project 4) Personal Portfolio
    // Get the modal
    var modal4 = document.getElementById("myModal4");
    // Get the button that opens the modal
    var btn4 = document.getElementById("myBtn4");
    // Get the <span> element that closes the modal
    var span4 = document.getElementsByClassName("close4")[0];

    // When the user clicks on the button, open the modal 
    btn4.onclick = function () {
        modal4.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span4.onclick = function () {
        modal4.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal4) {
            modal4.style.display = "none";
        }
    }


    // Adding a Pop-Up (Project 5) Math It
    // Get the modal
    var modal5 = document.getElementById("myModal5");
    // Get the button that opens the modal
    var btn5 = document.getElementById("myBtn5");
    // Get the <span> element that closes the modal
    var span5 = document.getElementsByClassName("close5")[0];

    // When the user clicks on the button, open the modal 
    btn5.onclick = function () {
        modal5.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span5.onclick = function () {
        modal5.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal5) {
            modal5.style.display = "none";
        }
    }

    // Adding a Pop-Up (Project 6) ML Model Training
    // Get the modal
    var modal6 = document.getElementById("myModal6");
    // Get the button that opens the modal
    var btn6 = document.getElementById("myBtn6");
    // Get the <span> element that closes the modal
    var span6 = document.getElementsByClassName("close6")[0];

    // When the user clicks on the button, open the modal 
    btn6.onclick = function () {
        modal6.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span6.onclick = function () {
        modal6.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal6) {
            modal6.style.display = "none";
        }
    }



    // DESIGN PROJECTS //
    // Adding a Pop-Up (Project 1) Dream Big Piece
    // Get the modal
    var modald1 = document.getElementById("myModald1");
    // Get the button that opens the modal
    var btnd1 = document.getElementById("myBtnd1");
    // Get the <span> element that closes the modal
    var spand1 = document.getElementsByClassName("closed1")[0];

    // When the user clicks on the button, open the modal 
    btnd1.onclick = function () {
        modald1.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    spand1.onclick = function () {
        modald1.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modald1) {
            modald1.style.display = "none";
        }
    }


    // Adding a Pop-Up (Project 2) Dior X Kaws Piece
    // Get the modal
    var modald2 = document.getElementById("myModald2");
    // Get the button that opens the modal
    var btnd2 = document.getElementById("myBtnd2");
    // Get the <span> element that closes the modal
    var spand2 = document.getElementsByClassName("closed2")[0];

    // When the user clicks on the button, open the modal 
    btnd2.onclick = function () {
        modald2.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    spand2.onclick = function () {
        modald2.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modald2) {
            modald2.style.display = "none";
        }
    }


    // Adding a Pop-Up (Project 3) Gucci Piece
    // Get the modal
    var modald3 = document.getElementById("myModald3");
    // Get the button that opens the modal
    var btnd3 = document.getElementById("myBtnd3");
    // Get the <span> element that closes the modal
    var spand3 = document.getElementsByClassName("closed3")[0];

    // When the user clicks on the button, open the modal 
    btnd3.onclick = function () {
        modald3.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    spand3.onclick = function () {
        modald3.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modald3) {
            modald3.style.display = "none";
        }
    }


    // Adding a Pop-Up (Project 3) Avu Clothing
    // Get the modal
    var modald4 = document.getElementById("myModald4");
    // Get the button that opens the modal
    var btnd4 = document.getElementById("myBtnd4");
    // Get the <span> element that closes the modal
    var spand4 = document.getElementsByClassName("closed4")[0];

    // When the user clicks on the button, open the modal 
    btnd4.onclick = function () {
        modald4.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    spand4.onclick = function () {
        modald4.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modald4) {
            modald4.style.display = "none";
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
