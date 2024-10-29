$(() => {
    // 显示表格
    $(".block").click(() => $("#hide").css("display", "table"));
    // 关闭按钮
    $("#close").click(() => $("#hide").css("display", "none"));
    // 狼人阵营
    $("#wolf").click(() => {
        $("#hide>table #id").attr("src", "../../image/id/wolf.jpg");
        $("#poor1").html("合理安排上下层，最大化收益，淘汰所有“金宝宝”玩家");
        $("#poor2").html("如果是当前层，可以参与队友的袭击环节");
        $("#poor3").html("由于好人的目标是出局所有狼队阵营玩家，所以你的狼人牌不管对哪个阵营都是至关重要的，请保护好自己的身份");
    });
    $("#hidewolf").click(() => {
        $("#hide>table #id").attr("src", "../../image/id/hide.jpg");
        $("#poor1").html("利用此牌的特点，将此牌最大的收益最大化，淘汰所有“金宝宝”玩家");
        $("#poor2").html("可以无视层次限制，只要此牌存在就可以参与队友袭击环节");
        $("#poor3").html("1、此牌被称作“潜行狼”，也就是说当聊到“潜行狼”身份的时候就是在聊你的身份，需要注意一下<br>2、由于此技能的特殊性，一般获得摸到次身份都是放到下层");
    });
    // 好人阵营
    $("#seer").click(() => {
        $("#hide>table #id").attr("src", "../../image/id/seer.jpg");
        $("#poor1").html("合理安排上下层，善用自己的能力，淘汰所有狼队阵营身份卡");
        $("#poor2").html("每天晚上查验一名玩家当前层所属阵营");
        $("#poor3").html("1、预言家不能查验自己<br>2、不能查验已经翻牌身份牌和已经被查验的身份牌<br>3、预言家可以空验，但不建议空验<br>4、由于此版型的特殊性，查验规则会有所变化，详见【版型说明】<br>5、“预言家”身份牌不会和狼队阵营身份牌在一起");
    });
    $("#witch").click(() => {
        $("#hide>table #id").attr("src", "../../image/id/witch.jpg");
        $("#poor1").html("合理安排上下层，善用自己的能力，帮助自己的阵营获取胜利");
        $("#poor2").html("拥有一瓶解药和一瓶毒药：<br>解药可以救活当晚被袭击的玩家<br>毒药可以毒杀一名玩家");
        $("#poor3").html("1、每瓶药在一局游戏中只能使用一次<br>2、每晚只能使用一瓶药<br>3、女巫的解药一旦使用，女巫将失去查看今晚被袭击的玩家权利<br>4、女巫首夜是否能自救详见【版型说明】模块");
    });
    $("#villager").click(() => {
        $("#hide>table #id").attr("src", "../../image/id/villager.jpg");
        $("#poor1").html("合理安排上下层，沉着冷静的发言并分析，谨慎投出每一票，帮助自己的阵营获得胜利");
        $("#poor2").html("无特殊技能");
        $("#poor3").html("1、如果身份为两张“平民”则视为“金宝宝”，场上至少出现一个“金宝宝”，如果全部“金宝宝出局，好人阵营将落败<br>2、金宝宝是否见面详见【版型说明】");
    });
    $("#hunter").click(()=>{
        $("#hide>table #id").attr("src","../../image/id/hunter.jpg");
        $("#poor1").html("合理安排上下层，善用自己的能力，帮助自己的阵营获取胜利");
        $("#poor2").html("出局时可以带走玩家，出局时可以开枪带走玩家，如果因为某些原因出局则不能带走玩家");
        $("#poor3").html("1、在只有猎人的局中，猎人发动技能时需要翻牌<br>2、技能描述中的“某些原因”详见【版型说明】模块")
    });
    $("#guard").click(() => {
        $("#hide>table #id").attr("src", "../../image/id/guard.jpg");
        $("#poor1").html("合理安排上下层，善用自己的能力，帮助自己的阵营获取胜利");
        $("#poor2").html("每天晚上可以保护一名玩家");
        $("#poor3").html("1、可以保护自己<br>2、不能连续两晚保护同一名玩家<br>3、如果你保护的玩家被女巫解救，该玩家还是会死亡，女巫的解药也会视为使用<br>4、如果为狼队，你可以利用tips3来浪费女巫解药");
    });
    // 盗贼阵营
    $("#robber").click(() => {
        $("#hide>table #id").attr("src", "../../image/id/robber.jpg");
        $("#poor1").html("利用此牌的特点，善用自己的能力，帮助自己的阵营获取胜利");
        $("#poor2").html("复制你的上层身份");
        $("#poor3").html("1、此牌被称作“复制人”，也就是说当聊到“复制人”身份的时候就是在聊你的身份，需要注意一下<br>2、如果身份为“平民”+“盗贼”，也可以视为“金宝宝”<br>3、如果复制的是狼队阵营的牌，查验结果会则遵循预言查验规则<br>4、由于两张牌的技能相互独立的，所以对于连续发动技能的情况请详见【版型说明】");
    });
})