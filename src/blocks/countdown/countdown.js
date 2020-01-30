$( document ).ready(function() {
  var finalDate = '03/01/2020 23:59:59';
  $( '.countdown' ).downCount({
    date: finalDate, //формат m:d:Y
    offset: +2 // зимнее время +2, летнее +3
  }, function () {
    //alert('Время истекло!');
  });

});
