var ratin = 0
$(document).ready(function(){
    
    $("#rate1").click(function(){
        $('#rate1, #rate2, #rate3, #rate4, #rate5').removeClass("rating-chosen");
        $("#rate1").addClass("rating-chosen");
        ratin = 1
        $('span').text(ratin);
    })
    $("#rate2").click(function(){
        $('#rate1, #rate2, #rate3, #rate4, #rate5').removeClass("rating-chosen");
        $('#rate1, #rate2').addClass("rating-chosen");
        ratin = 2
        $('span').text(ratin);
    })
    $("#rate3").click(function(){
        $('#rate1, #rate2, #rate3, #rate4, #rate5').removeClass("rating-chosen");
        $('#rate1, #rate2, #rate3').addClass("rating-chosen");
        ratin = 3;
        $('span').text(ratin);
    })
    $("#rate4").click(function(){
        $('#rate1, #rate2, #rate3, #rate4, #rate5').removeClass("rating-chosen");
        $('#rate1, #rate2, #rate3, #rate4').addClass("rating-chosen");
        ratin = 4;
        $('span').text(ratin);
    })
    $("#rate5").click(function(){
        $('#rate1, #rate2, #rate3, #rate4, #rate5').removeClass("rating-chosen");
        $('#rate1, #rate2, #rate3, #rate4, #rate5').addClass("rating-chosen");
        ratin = 5
        $('span').text(ratin);
    }) //On Click Funtion Ends Here
    
    
    $("#rate1").hover(function(){                       //On hover Funtion Starts Here
        $('#rate1, #rate2, #rate3, #rate4, #rate5').removeClass("rating-hover");
        $('#rate1').addClass("rating-hover");
       
    })
    $("#rate2").hover(function(){
        $('#rate1, #rate2, #rate3, #rate4, #rate5').removeClass("rating-hover");
        $('#rate1, #rate2').addClass("rating-hover");
    })
    $("#rate3").hover(function(){
        $('#rate1, #rate2, #rate3').addClass("rating-hover");
    })
    $("#rate4").hover(function(){
        $('#rate1, #rate2, #rate3, #rate4').addClass("rating-hover");
    })
    $("#rate5").hover(function(){
        $('#rate1, #rate2, #rate3, #rate4, #rate5').addClass("rating-hover"); // Mouse Hover Function Ends Here
    })
    $("#rate1, #rate2, #rate3, #rate4, #rate5").mouseenter(function(){       //Funtion to reset Values ON MouseEnter
        $('#rate1, #rate2, #rate3, #rate4, #rate5').removeClass("rating-chosen");
    })
    $("#rate1, #rate2, #rate3, #rate4, #rate5").mouseleave(function(){   //Funtion to reset Values ON MouseLeave
        $('#rate1, #rate2, #rate3, #rate4, #rate5').removeClass("rating-hover");
        if (ratin == 1){
            $("#rate1").addClass("rating-chosen");
        }
        else if (ratin == 2){
            $('#rate1, #rate2').addClass("rating-chosen");
        }
        else if (ratin == 3){
            $('#rate1, #rate2, #rate3').addClass("rating-chosen");
        }
        else if (ratin == 4){
            $('#rate1, #rate2, #rate3, #rate4').addClass("rating-chosen");
        }
        else if (ratin == 5){
            $('#rate1, #rate2, #rate3, #rate4, #rate5').addClass("rating-chosen");
        }
        else {}
    })
    
    
})