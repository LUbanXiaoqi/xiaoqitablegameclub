$(function(){
    // 狼队阵营
    $("#normal_wolf").click(function(){
        $("#all>table img").attr("src","../image/id/wolf.jpg");
        $("#poor1").html("伪装成好人混淆视听，淘汰真正的好人，达成胜利条件");  
        $("#poor2").html("每天晚上和其他狼队进行讨论，并袭击一名玩家");
        $("#poor3").html("1、狼人白天讨论阶段可以进行自爆，你若这么做则跳过剩余的白天阶段<br>2、狼人可以自己袭击自己<br>3、胜利条件详见【版型说明】模块");
    });
    // 平民、待定、三方阵营
    $("#villager").click(function(){
        $("#all>table img").attr("src","../image/id/villager.jpg"); 
        $("#poor1").html("沉着冷静的发言并分析，谨慎投出每一票，淘汰所有狼人");  
        $("#poor2").html("无特殊技能");
        $("#poor3").html("双身份中，拿到两张村民的玩家叫做“金宝宝”，8人局可互认");
    });
    // 神职
    $("#seer").click(function () {
        $("#all>table img").attr("src", "../image/id/seer.jpg"); 
        $("#poor1").html("属于好人神职，胜利条件和平民相同");  
        $("#poor2").html("每天晚上查验一名玩家所属阵营");
        $("#poor3").html("1、预言家不能查验自己<br>2、不能查验已经翻牌的玩家和已经被查验的玩家<br>3、预言家可以空验，但不建议空验");
    });
    $("#witch").click(function () {
        $("#all>table img").attr("src", "../image/id/witch.jpg"); 
        $("#poor1").html("属于好人神职，胜利条件和平民相同");  
        $("#poor2").html("每天晚上查验一名玩家所属阵营");
        $("#poor3").html("1、每瓶药在一局游戏中只能使用一次<br>2、每晚只能使用一瓶药<br>3、女巫的解药一旦使用，女巫将失去查看今晚被袭击的玩家权利<br>4、女巫首夜是否能自救详见【版型说明】模块");
    });
    $("#hunter").click(function () {
        $("#all>table img").attr("src", "../image/id/hunter.jpg"); 
        $("#poor1").html("属于好人神职，胜利条件和平民相同");  
        $("#poor2").html("出局时可以开枪带走玩家，如果因为某些原因出局则不能带走玩家");
        $("#poor3").html("1、在只有猎人的局中，猎人发动技能时需要翻牌<br>2、技能描述中的“某些原因”详见【版型说明】模块");
    });
    $("#guard").click(function () {
        $("#all>table img").attr("src", "../image/id/guard.jpg"); 
        $("#poor1").html("属于好人神职，胜利条件和平民相同");  
        $("#poor2").html("每天晚上可以保护一名玩家");
        $("#poor3").html("1、可以保护自己<br>2、不能连续两晚保护同一名玩家<br>3、如果你保护的玩家被女巫解救，该玩家还是会死亡，女巫的解药也会视为使用");
    });
})
