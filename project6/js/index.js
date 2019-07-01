// var granimInstance = new Granim({
//     element: '#canvas-image',
//     direction: 'top-bottom',
//     opacity: [1, .5, 0],
//     isPausedWhenNotInView: true,
//     states : {
//         "default-state": {
//             gradients: [
//                 ['#485563', '#29323c', '#29323c'],
//                 ['#00c6ff', '#0072ff', '#0072ff']
//             ],
//             transitionSpeed: 10000
//         }
//     }
// });


// var toggle = document.getElementById('toggle');
// var slider = document.querySelector('.slider');

// toggle.addEventListener('click', toggleSlider, false);

// function toggleSlider(){
//     if (slider.classList.contains('opened')) {
//         slider.classList.remove('opened');
//         slider.classList.add('closed');
//     } else {
//         slider.classList.remove('closed');
//         slider.classList.add('opened');
//     }
// }

// $(document).ready(function () {
//   $('div.top').click(function() {
//   $('html, body').animate({
//     scrollTop: $("div.middle").offset().top
//   }, 1000)
// }), 
//   $('div.middle').click(function (){
//     $('html, body').animate({
//       scrollTop: $("div.bottom").offset().top
//     }, 1000)
//   }),
//   $('div.bottom').click(function (){
//     $('html, body').animate({
//       scrollTop: $("div.top").offset().top
//     }, 1000)
//   })
// });

 $(document).ready(function(){
        $(".slide-toggle").click(function(){
            $("#slideLeft").animate({
                height: "toggle"
            });
        });
    });

//  $(function() {
//     $('#slideLeft').animate(400, 'linear', bottom: '500px');
// });



 $(function() {
    $('#slideLeft').animate({top:'100px'}, 400);
});


$(.slide-toggle).slideLeft(speed,callback);

$("#center").click(function(){
    $("#samples-menu-wrap").slideLeft();
});


