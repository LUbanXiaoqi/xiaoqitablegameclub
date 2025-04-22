$(()=>{
    $(".gonex").click(()=> { 
        $(".gonow").css("display","inline-block");
        $(".nex").css("display","table");
        $(".gonex").css("display","none");
        $(".now").css("display","none")
    });
    $(".gonow").click(()=> { 
        $(".gonex").css("display","inline-block");
        $(".now").css("display","table");
        $(".gonow").css("display","none");
        $(".nex").css("display","none")
    });
})