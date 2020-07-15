$(document).ready(function(){
    $("#first").addClass("ativo").show();
 
     
setInterval(slide,5000);

});



function slide(){
    if($(".ativo").next().size()){
        $(".ativo").fadeOut().removeClass("ativo").next().fadeIn().addClass("ativo");
}else {
    $(".ativo").fadeOut().removeClass("ativo");
    $("#slide #first").fadeIn().addClass("ativo");
}
}