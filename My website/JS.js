$(document).ready(function(){
$("#more_btn").click(function(){
    var elem = $("#more_btn").text();
    if (elem == "Show More"){
        $("#more_btn").text("Show Less");
        //$("#more_offers").fadeIn(2000);
        $("#more_offers").slideDown();
    }else{
        $("#more_btn").text("Show More");
        //$("#more_offers").fadeOut(2000);
        $("#more_offers").slideUp();
    }
});
});


$(document).ready(function(id){
    $("#team").on("click",function(id) {
       var elementClick = $(this).attr("href");
 
       var destination = $(elementClick).offset().top ;
    
    $('html, body').animate({
       scrollTop: destination   
    }, 2000);  
         
     });
 
 });

$(document).on("mousemove", function(e){
    if(e.pageX <= 100)
    {
        $("#icon-bar").fadeIn(1000);
    }
    else
    {
        if(!$(e.target).is(".icon-bar"))
        {
            $("#icon-bar").fadeOut(1000);  
        }
    }
});

function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }
  
  function onUpdateReady() {
    if(window.applicationCache.status === window.applicationCache.UPDATEREADY) {
                    window.applicationCache.swapCache();
                    location.reload();
    
    }
    }
    window.applicationCache.addEventListener('updateready', onUpdateReady);