$(()=>{
    var now = 1
    $("button").click(()=>{
        if(now == 1){
            $(".now").css("display","none")
            $(".nex").css("display","block")
            now++
        }else{
            $(".now").css("display","block")
            $(".nex").css("display","none")
            now--
        }
    })
})