$(function(){
  $('.form').submit(function(event){
    var fly = $("select.fly").val();
    var force = $("select.force").val();
    var weapon = $("select.weapon").val();

    var points = null;

//Flying Millenium Falcon
    if (fly === 'maybe') {
      points += 6;
    }

    else if (fly === 'absolutely') {
      points += 4;
    }

    else {
      points += 2;
    }

//Force
    if (force === 'tele') {
      points += 6;
    }

    else if (force === 'choke') {
      points += 4;
    }

    else {
      points += 2;
    }

//Weapon
    if (weapon === 'lightsaber') {
      points += 6;
    }

    else if (weapon === 'blaster') {
      points += 4;
    }

    else {
      points += 2;
    }

//Total
    if (points >= 14) {
      $('.yoda').show();
      $('.chewie, .c3po').hide();
    }

    else if (points >= 11) {
      $('.chewie').show();
      $('.yoda, .c3po').hide();
    }

    else {
      $('.c3po').show();
      $('.yoda, .chewie').hide();
    }



  event.preventDefault();

  });

});
