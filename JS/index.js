$(function () {
    $("#banner>ol>li").mouseenter(function () {
        index = $(this).index();
        play();
    });

    var index = 0;
    var timer = setInterval(autoPlay, 5000);

    $("#banner").mouseenter(function () {
        clearInterval(timer);
    }).mouseleave(function () {
        timer = setInterval(autoPlay, 5000);
    })

    function autoPlay() {
        index++;
        if (index > $("#banner>ul>li").length - 1) {
            index = 0;
        };
        play();

    };
    function play() {
        $("#banner>ol>li").eq(index).addClass("current").siblings().removeClass("current");
        $("#banner>ul>li").eq(index).stop().fadeIn(500).siblings().stop().fadeOut(500);
    }
});
$(()=>{
    var pw = $(window).width();
    if(pw <= 1349){   
        window.open("phone/index.html")
    }
})