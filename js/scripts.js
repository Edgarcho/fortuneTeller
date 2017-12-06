$(document).ready(function(){
  $("form#fortune_survey").submit(function(event){
    event.preventDefault();
    var unlucky = 0;
    var items = 0;
    var acting = 0;
    var lucky = 0;

    $("input:checkbox[name=unlucky-event]:checked").each(function(){
      unlucky += 1
    });
      $("input:checkbox[name=unlucky-item]:checked").each(function(){
      items += 1
    });
      $("input:checkbox[name=acting]:checked").each(function(){
      acting += 1
    });
      $("input:checkbox[name=lucky]:checked").each(function(){
      lucky += 1
    });
    $("#responses").show();

    if(unlucky >= 3 && items >= 2){
      $("#responses").html("<img src=img/cookie.jpg>");
    }
    else if (acting >= 2 && lucky >=1){
      $("#responses").html("<img src=img/cookie3.jpg>");
    } else {
      $("#responses").html("<img src=img/cookie2.jpg>").fadeOut(6000);

    }
  });
});
