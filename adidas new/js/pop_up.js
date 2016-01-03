/**
 * Created by Nitin on 28/04/2015.
 */
$(document).ready(function() {
    $(".pop-up").hide();
    var idName;
    var pic ;
    var price;
//    $(".mask > a").each(function(){
//         idName=$(".mask > a").attr("id");
//        alert(idName);
//    })

    $(".mask").click(function (e) {
        e.preventDefault();
        var pId=$(this).data("product");
        $(".pop-up > .image-deco >img").attr("src","images/pic"+pId+".jpg");
        $(".pop-up").show().css("z-index","100");
        $(".wrapper").css("opacity",".2");
    });

    function close(){

        $(".pop-up").hide();
//        $(".pop-up-basket").hide();
        $(".wrapper").css("opacity","1");
    }
    $(".close").click(function (e) {
        e.preventDefault();
        close();
    });

    $("#addBag").click(function(e){
        e.preventDefault();
        console.log(this);
        var count=0;
        count=parseInt($(".basket-deco").text());
       pic= $(".pop-up > .image-deco >img").attr("src");
           console.log("pic"+pic);
         price = $(".pop-up > .price").text();
            console.log("price",price);
            if (typeof(Storage) !== "undefined") {
                localStorage.setItem("pic"+count, pic);
                localStorage.setItem("price"+count, price);
            } else {
                document.getElementById("pop-up-basket").innerHTML = "Sorry, your browser does not support Web Storage...";
            }
        count=count+1;
        $(".basket-deco").text(count);
        console.log(pic,price);
        close();
    });
})