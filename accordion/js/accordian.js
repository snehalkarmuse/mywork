/**
 * Created by Nitin on 01/06/2015.
 */
var action="click";
var speed=500;

$(document).ready(function(){

    //event handler
        $("li.q").on(action,function(){
    //take next of li and slide toggle and take sibling of another li if open then slide up
        $(this).next().slideToggle(speed).siblings("li.a").slideUp();
    //rotate the arrow down
        var img=$(this).children("img");
    //remove the rotate class for all images except active
        $("img").not(img).removeClass("rotate");
    // toggle class rotate to change image
        img.toggleClass("rotate");
    });
})

