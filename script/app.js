$(document).ready(function() {
  //hamburger button
  $('.main__box__nav__hamburger').click(function() {
    $('.main__box__nav__menu').toggleClass('active');
    $(this).toggleClass('close');
    $('.art').toggleClass('hide');
    $('.sec__projects').toggleClass('hide');
    $('.sec__contact').toggleClass('hide');
    $('.footer').toggleClass('hide');
  })

  //List elements on click
  var listItem = $('.main__box__nav__menu__list--item');
  var hasBeenClicked = false;

  listItem.click(function() {
    hasBeenClicked = true;
    if (hasBeenClicked === true) {
      $('.main__box__nav__menu').toggleClass('active');
      $('.main__box__nav__hamburger').toggleClass('close');
      $('.art').toggleClass('hide');
      $('.sec__projects').toggleClass('hide');
      $('.sec__contact').toggleClass('hide');
      $('.footer').toggleClass('hide');
    }
  })



//end of documentReady
})
