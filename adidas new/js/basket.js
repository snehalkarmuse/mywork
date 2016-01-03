/**
 * Created by Nitin on 05/05/2015.
 */
$(document).ready(function()
{
    $(".pop-up-basket").hide();

    function closeBasket(){

        $(".pop-up-basket").hide();
//        $(".pop-up-basket").hide();
        $(".wrapper").css("opacity","1");
    }
    $(".close").click(function (e) {
        e.preventDefault();
        closeBasket();
    });


//    $("#basket").click(function (e) {
//
//        e.preventDefault();
//        $(".pop-up-basket").show();
//        $(".wrapper").css("opacity", "0.2");
//        var count=parseInt($(".basket-deco").text());
//        for (var i=0;i<count;i++)
//        {
//            $(".display-basket").append("<li>"+"<img src="+localStorage.getItem("pic"+i)+">"+"<h3>"
//                +localStorage.getItem("price"+i)+"</h3>"+"</li>");
//               // console.log(localStorage.getItem("pic"+i) + localStorage.getItem("price"+i));
//        }
//    });

})