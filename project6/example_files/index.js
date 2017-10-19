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
                width: "toggle"
            });
        });
    });

 $(function() {
    $('#slideLeft').animate(400, 'linear');
});


// var komm = komm || {};


// /* browser features */

// komm.features = {
//     touch: (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)),
//     local_storage: (function() {
//       try {
//         return 'localStorage' in window && window['localStorage'] !== null;
//       } catch (e) {
//         return false;
//       }
//     })()

// };

// /* form validation */
// komm.validation = {};

// komm.validation.text = {
//     'standard': 'Alla fält fylldes inte i korrekt. Prova igen.',
//     'firstname': 'Du måste ange ditt förnamn.',
//     'lastname': 'Du måste ange ditt efternamn.',
//     'company': 'Du måste fylla i byrånamnet där du arbetar.',
//     'email': 'Du måste ange en korrekt e-postadress.',
//     'organisation_number': 'Du måste ange byråns organisationsnummer.',
//     'telephone': 'Du måste ange ett telefonnummer.',
//     'website': 'Du måste ange en korrekt webbadress.',
//     'city': 'Du måste ange en ort för byrån.',
//     'log': 'Du måste ange din e-postadress',
//     'pwd': 'Du måste ange ditt lösenord.'
// };

// komm.validation.clear = function() {
//     $('form[data-validation="form"] input.error').removeClass('error');
//     $('div.error-message').remove();
// };

// komm.validation.validate  = function(event) {
    
//     var $this = $(this),
//         $fields = $this.find('input[data-validation], select[data-validation], textarea[data-validation]'),
//         validation = true,
//         errors_messages = [],
//         output = '';
//         validators = {
//             'email': function(value) {
//                   var email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
                    
//                   return email.test(value);
//             },
//             'text': function(value) {
//                 var value = (String.prototype.trim) ? value.trim() : value;
                    
//                 return (value != '');
//             },
//             'file': function(value) {
//                 var value = (String.prototype.trim) ? value.trim() : value;
                    
//                 return (value != '');
//             },
//             'checkbox': function() {
//                 return (this.checked);
//             }
//         };
            
//     komm.validation.clear();
    
//     $fields.each(function() {
//         var $this = $(this),
//             type = validators[$this.attr('data-validation')];
            
//         if(type && !type.call(this, $this.val())) {
//             validation = false;
//             $this.addClass('error');

            
//             if($this.attr('name')) {
//                 errors_messages.push(komm.validation.text[$this.attr('name')]);
//             }
            
//             if($this.parents('.field').length) {
//                 $this.parents('.field').addClass('error');
//             }
            
//             if($this.parents('.upload-area').length) {
//                 $this.parents('.upload-area').addClass('error');
//             }

//         }
//     });
    
//     if(!validation && errors_messages.length) {
//         var $output = $('<div />').addClass('error-message'),
//             $list = $('<ul />');
//             $output.append($('<p />').text(komm.validation.text.standard));
            
        
        
//         for (message in errors_messages) {
//             $list.append($('<li />').html(errors_messages[message]));
//         }
//         $output.append($list);
//         $this.prepend($output);
//     }
    
//     return validation;
// }


// var slideInterval = 5000;
// var slideshows = function() {
    
//     var updateSlides = function() {
        
//         $('.slider').each(function(){
            
//             if ( $(this).find('.slides .slide.active').next('.slide').length ) {
            
//                 $(this).find('.slides .slide.active').next('.slide').addClass('active').siblings('.slide').removeClass('active');
//                 $(this).find('.slide-indicator li.active').next('li').addClass('active').siblings('li').removeClass('active');
                
//             } else {
            
//                 $(this).find('.slides .slide:first').addClass('active').siblings('.slide').removeClass('active');
//                 $(this).find('.slide-indicator li:first').addClass('active').siblings('li').removeClass('active');
//             }
             
//         });
        
//     }
    
//     if ( $('.slider').length ) {
        
//         setInterval(updateSlides, slideInterval);
        
//     }
    
// }

// var checkGridColumnWidth = function() {
//     var articleWidth = Math.round($('.grid .align article:first-child').outerWidth(true));
//     return articleWidth;
// }

// $(document).ready(function() {
    
//     $('#samples-menu button').on('click',function(){
//         $('#-menu').toggleClass('open'); 
//     });
    
//     $('.slide-indicator').on('click','li',function(){
        
//         var slider = $(this).parents('.slider');
//         var index = $(this).index();
        
//         slider.find('.slides .slide:eq('+index+')').addClass('active').siblings('.slide').removeClass('active');
//         $(this).addClass('active').siblings('li').removeClass('active');
                 
//     });
    
//     $('.grid:not(.tight)').masonry({
//         itemSelector: '.visible'
//     });
    
//     $('.to-the-top').on('click',function(){
//         $("html, body").animate({ scrollTop: 0 }, 600);
//         return false;
//     });
    
//     $('.filtering h3').on('click',function(){
        
//         if ( $(this).attr('class') ) {
            
//             if ( $(this).attr('class') == 'toggle' ) {                
//                 if ( $('.grid').hasClass('tight') ) {
//                     $('.grid').removeClass('tight');
//                     $('.filtering .toggle').text('Visa som lista');
//                 } else {
//                     $('.grid').addClass('tight');
//                     $('.grid.tight').removeAttr('style');
//                     $('.grid .item').removeAttr('style');
//                     $('.filtering .toggle').text('Visa översikt');
//                 }
//             } else if ( !$(this).hasClass('active') ) {
//                 var id = $(this).attr('class');
//                 $(this).addClass('active').siblings().removeClass('active');
//                 $(this).siblings('#'+id).addClass('active');
//             } else {
//                 $(this).removeClass('active').siblings().removeClass('active');
//             }
        
//         }
        
//     });
    
//     $('.filters li').on('click',function(){
        
//         $(this).toggleClass('active');
//         if ( $(this).parents('.filters').is('#locations') ) {
//             $(this).siblings().removeClass('active');
//         }
        
//         $('.members .item').each(function(){
//             $(this).addClass('visible');
//             $(this).show();
//         });
        
//         var activeFilters = Array();
//         $('.filters li.active').each(function(){
//             var filter = $(this).attr('data-filter');
//             activeFilters.push(filter);
//             activeFilters.sort();
//         });
        
//         if ( activeFilters.length ) {
                    
//             var filteredItems = $('.members .item').filter(function(){
//                 var filters = $(this).attr('data-filters');
//                 var filtersArray = filters.split(',');
    
//                 return !activeFilters.reduce(function (result, filter) {
//                     return result || filtersArray.indexOf(filter) > -1;
//                 }, false);
//             });
            
//             filteredItems.each(function(){
//                 $(this).removeClass('visible');
//                 $(this).hide();
//             });
//         }
            
//         if ( $('.grid:not(.tight)').length ) {
//             $('.grid:not(.tight)').masonry();
//         }
    
//     });
    
//     /* validate forms */
        
//     $('form[data-validation]').on('submit', function(event) {
//         return komm.validation.validate.call(this);
//     });

//     if ( $('#visual-calendar').length ) {
        
//         var events = [];
        
//         $('.calendar-list-event').each(function(){
//             var date = $(this).attr('data-date');
//             var title = $(this).text();
//             var href = $(this).attr('href');
//             var obj = {
//                 date: date,
//                 title: title,
//                 href: href
//             }
//             events.push(obj);
//         });
        
//         if ( events.length > 2 ) {
            
//             $('#visual-calendar').clndr({
//                 template : $('#visual-calendar-template').html(),
//                 weekOffset: 1,
//                 daysOfTheWeek: ['Söndag','Måndag','Tisdag','Onsdag','Torsdag','Fredag','Lördag'],
//                 startWithMonth: $('#visual-calendar').attr('data-attr-year')+'-'+$('#visual-calendar').attr('data-attr-month')+'-01',
//                 events: events
//             });
        
//         } else {
            
//             $('#visual-calendar').hide();
//             $('.calendar-list').show();
               
//         }
        
//     }
    
// });

// $(window).load(function(){
    
//     slideshows();
    
// });



