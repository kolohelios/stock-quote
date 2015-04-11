'use strict';

$(document).ready(init);

function init(){
  $('#getRandom').click(getRandom);
}

function getRandom(){
  var number = $('#number').val();
  $.getJSON('https://qrng.anu.edu.au/API/jsonI.php?length=' + number + '&type=uint16', function(response){
    response.data.forEach(function(number) {
    });
    $('#sum').val(sum(response.data));
    $('#min').val(Math.min.apply(null, response.data));
    $('#max').val(Math.max.apply(null, response.data));
    displayRoots(response.data);
  });
}

function displayRoots(numbers){
  var roots = numbers.map(function(n){
    return Math.sqrt(n);
  });


  var divs = roots.map(function(r, i){
    var $div = $('<div>');
    $div.addClass('root');

    var $div1 = $('<div>');
    $div1.text(numbers[i]);
    if(numbers[i] % 2){
      $div1.addClass('oddNumber');
    }
    else{
      $div1.addClass('evenNumber');
    }
    var $div2 = $('<div>');
    var test = Math.round(r, 2);
    if(test % 2){
      $div2.addClass('oddNumber');
    }
    else{
      $div2.addClass('evenNumber');
    }
    $div2.text(r);

    $div.append($div1, $div2);

    return $div;
  });
  $('#roots').empty().append(divs);
}

function sum(numbers){
  var total = 0;
  numbers.forEach(function(number) {
    total += number;
  });
  return total;
}
