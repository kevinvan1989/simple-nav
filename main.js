//Add event on home button
$('.item--home').click(function(){
  //Slide out other menu items
  $('.item--hide').toggle('slide');
}
)

//Hide resources on load
$('.resource').hide();

$('.checkResources').click(function(){
  $('.resource').toggle();
})
