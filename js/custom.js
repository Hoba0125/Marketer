


$(document).ready(function () {
  var timer = setInterval(() => {
    $('#exampleModal').modal('show');
    clearInterval(timer);
  }, 1000)
  $('#rigist').click(function(e) {
      $('#hide').hide()
      $('#show').show()
  });
});
$(document).ready(function () {
  $('#rigist1').click(function(e) {
      $('#show').hide()
      $('#hide1').show()
  });
});
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";

  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();



$('.slider').slick({
  lazyLoad: 'ondemand',
  slidesToShow: 3,
  slidesToScroll: 1,
  centerPadding: '40px',
  arrows:true,
  prevArrow: '<div class="prev1"> <span><</span> </div>',
  nextArrow: '<div  class="prev2"> <p> ></p> </div>'
});
$('.header__sider__container').slick({
  lazyLoad: 'ondemand',
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: '40px',
  arrows:false,
  vertical:true,
  dots:true,
  // prevArrow: '<div class="prev"><i class="fa-chevron-right"></i></div>',
  // nextArrow: '<div  class="prev"></div>'
});







function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
