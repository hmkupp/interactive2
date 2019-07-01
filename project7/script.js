function myFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}


$('.box').on('click','.box__inner',function() {
  $(this).closest('.box').find('.box--active').removeClass('box--active');
  $(this).addClass('box--active');
}).on('click','.box--active',function() {
  $(this).removeClass('box--active');
});

var clicked=true;
$(".two").on('click', function(){
    if(clicked)
    {
        clicked=false;
        $(".purchasepage").css({"top": 0});
    }
    else
    {
        clicked=true;
        $(".purchasepage").css({"top": "-40px"});
    }
});

function toggleSlider() {
    if ($("#two").is(":visible")) {
        $("#purchasepage").fadeOut(600, function(){
            $("#two").slideUp();
        });
    }
    else {
        $("#two").slideDown(600, function(){
            $("#contentThatFades").fadeIn();
        });
    }   
}


// <--transition-->!
$(".two").on("click", function (event)(

  event.preventDefault()

  const href= $(this).attr("href")

  window.history.pushState(null, null, href)

 $(".two").removeClass("active")

 $.ajax((

  url:href,
  success: function (data)(
    $("wrapper").fadeOut(250, function ()(
      const newPage = $(data).filter("wrapper").html()

      $("wrapper").html(newPage)

      $("wrapper").fadeIn(250)
      ))
    )
  )) 


  ))
