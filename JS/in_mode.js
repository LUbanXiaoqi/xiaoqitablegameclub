$(function () {
    // 显示表格
    $(".block").click(()=>$("#hide").css("display","table"));
    // 关闭按钮
    $("#close").click(() => $("#hide").css("display", "none"));
    // 狼队阵营
    $("#wolf").click(() => {
        $("#hide>table #id").attr("src", "../../image/id/wolf.jpg");
        $("#poor1").html("伪装成好人混淆视听，淘汰真正的好人，达成胜利条件");
        $("#poor2").html("每天晚上和其他狼队进行讨论，并袭击一名玩家");
        $("#poor3").html("1、狼人白天讨论阶段可以进行自爆，你若这么做则跳过剩余的白天阶段<br>2、狼人可以自己袭击自己<br>3、胜利条件详见【版型说明】模块");
    });
    $("#robot").click(() => {
        $("#hide>table #id").attr("src", "../../image/id/robot.jpg");
        $("#poor1").html("属于狼人阵营，胜利条件和狼人相同");
        $("#poor2").html("第一天晚上学习一名玩家并获知学习的技能，从第二天开始使用学习到的技能，其他狼人阵营玩家出局时接刀");
        $("#poor3").html("1、如果学习到女巫，你将获得一瓶毒药<br>2、如果学习到守卫，你可以保护毒药<br>3、如果学习到狼人，你会在接刀当晚获得一次单独刀");
    });
    $("#timewolfking").click(() => {
        $("#hide>table #id").attr("src", "../../image/id/timewolfking.jpg");
        $("#poor1").html("属于狼人阵营，胜利条件和狼人相同");
        $("#poor2").html("晚上跟随其他狼队一起参与袭击讨论，当票型出来后，你可以发动【否决】技能，将今天的放逐投票转换为平安题");
        $("#poor3").html("1、发动技能无需翻牌<br>2、定序狼王可以发动自爆技能<br>3、否决最好用在狼人身上，为狼队争取轮次");
    });
    $("#hidewolf").click(() => {
        $("#hide>table #id").attr("src", "../../image/id/hide.jpg");
        $("#poor1").html("属于狼人阵营，胜利条件和狼人相同");
        $("#poor2").html("被查验显示为好人（单身份）<br>获知队友的位置，在其他狼队全部出局时接刀（强）<br>看不到队友的位置（弱）<br>即使放在下层，也能参与袭击（双身份）");
        $("#poor3").html("1、在双身份中，拿到此牌一般放在下层<br>2、若是弱隐狼，好人胜利不需要出局隐狼<br>3、隐狼强度详见【版型说明】模块;")
    });
    // 平民、待定、三方阵营
    $("#villager").click(() => {
        $("#hide>table #id").attr("src", "../../image/id/villager.jpg");
        $("#poor1").html("沉着冷静的发言并分析，谨慎投出每一票，淘汰所有狼人");
        $("#poor2").html("无特殊技能");
        $("#poor3").html("双身份中，拿到两张村民的玩家叫做“金宝宝”，8人局可互认");
    });
    $("#lonely").click(() => {
        $("#hide>table #id").attr("src", "../../image/id/lonely.jpg");
        $("#poor1").html("帮助自己的崇拜的人，获得最终胜利");
        $("#poor2").html("第一天晚上选择崇拜对象，然后你的胜利条件将跟随你的崇拜对象");
        $("#poor3").html("1、你崇拜的对象身份你是不知道的<br>2、你属于平民，你若崇拜了狼，狼队要屠民胜利需要你出局<br>3、你若崇拜了狼，好人阵营胜利无需出局你<br>4、无论你崇拜了谁，你被查验视为好人")
    });
    $("#curse").click(()=>{
        $("#hide>table #id").attr("src", "../../image/id/curse.jpg");
        $("#poor1").html("努力活到最后，取代获胜阵营");
        $("#poor2").html("晚上被狼人袭击时，不会因为狼队的袭击出局，即免疫狼刀");
        $("#poor3").html("1、如果被无法查验具体身份的玩家查验，则自己会因为查验出局<br>2、如果被无法查验具体身份的玩家查验，会获得你是好人的信息<br>3、你若被狼队袭击，女巫还是可以看到你中刀了，你依旧可以被奶穿")
    })
    // 神职
    $("#seer").click(() => {
        $("#hide>table #id").attr("src", "../../image/id/seer.jpg");
        $("#poor1").html("属于好人神职，胜利条件和平民相同");
        $("#poor2").html("每天晚上查验一名玩家所属阵营");
        $("#poor3").html("1、预言家不能查验自己<br>2、不能查验已经翻牌的玩家和已经被查验的玩家<br>3、预言家可以空验，但不建议空验");
    })
    $("#psychic").click(() => {
        $("#hide>table #id").attr("src", "../../image/id/psychic.jpg");
        $("#poor1").html("属于好人神职，胜利条件和平民相同");
        $("#poor2").html("每天晚上查验一名玩家具体身份");
        $("#poor3").html("1、通灵师和预言家一样不能查验自己，可以空验，不能查验已经翻牌的玩家和已经被查验的玩家<br>2、第一天查验机械狼会显示机械狼本体，从第二天开始，查验机械狼会显示机械狼学习的身份");
    })
    $("#witch").click(() => {
        $("#hide>table #id").attr("src", "../../image/id/witch.jpg");
        $("#poor1").html("属于好人神职，胜利条件和平民相同");
        $("#poor2").html("拥有一瓶解药和一瓶毒药：<br>解药可以救活当晚被袭击的玩家<br>毒药可以毒杀一名玩家");
        $("#poor3").html("1、每瓶药在一局游戏中只能使用一次<br>2、每晚只能使用一瓶药<br>3、女巫的解药一旦使用，女巫将失去查看今晚被袭击的玩家权利<br>4、女巫首夜是否能自救详见【版型说明】模块");
    })
    $("#hunter").click(() => {
        $("#hide>table #id").attr("src", "../../image/id/hunter.jpg");
        $("#poor1").html("属于好人神职，胜利条件和平民相同");
        $("#poor2").html("出局时可以开枪带走玩家，如果因为某些原因出局则不能带走玩家");
        $("#poor3").html("1、在只有猎人的局中，猎人发动技能时需要翻牌<br>2、技能描述中的“某些原因”详见【版型说明】模块");
    })
    $("#guard").click(() => {
        $("#hide>table #id").attr("src", "../../image/id/guard.jpg");
        $("#poor1").html("属于好人神职，胜利条件和平民相同");
        $("#poor2").html("每天晚上可以保护一名玩家");
        $("#poor3").html("1、可以保护自己<br>2、不能连续两晚保护同一名玩家<br>3、如果你保护的玩家被女巫解救，该玩家还是会死亡，女巫的解药也会视为使用");
    })
    $("#timewoman").click(() => {
        $("#hide>table #id").attr("src", "../../image/id/timewoman.jpg");
        $("#poor1").html("属于好人神职，胜利条件和平民相同");
        $("#poor2").html("每天晚上标记一名玩家，被标记的玩家若被使用技能，反弹技能");
        $("#poor3").html("1、可以标记自己<br>2、不能连续两晚标记同一名玩家<br>3、当该玩家反弹技能后，你将失去技能<br>4、技能最好用在今晚吃刀的玩家身上");
    })
    $("#awakeseer").click(() => {
        $("#hide>table #id").attr("src", "../../image/id/awakeseer.jpg");
        $("#poor1").html("属于好人神职，胜利条件和平民相同");
        $("#poor2").html("每天晚上查验两名玩家中是否有属于狼人阵营的玩家");
        $("#poor3").html("1、<br>2、可以空验，可以查验已经翻牌的玩家和已经被查验的玩家<br>3、若其中有狼，你会获得查杀的信息，但是不知道里面有几头狼<br>4、可以利用tips里的1，2条来进行单验");
    })
    $("#PW").click(() => {
        $("#hide>table #id").attr("src", "../../image/id/PW.jpg");
        $("#poor1").html("属于好人神职，胜利条件和平民相同");
        $("#poor2").html("每天晚上查验一名玩家具体身份，从第二晚开始，若查验结果是狼队玩家，该狼队玩家出局");
        $("#poor3").html("1、纯白之女和预言家一样不能查验自己，可以空验，不能查验已经翻牌的玩家和已经被查验的玩家<br>2、由于狼巫拥有和纯白之女相同的能力，所以在狼巫出局前，要隐藏自己的身份<br>3、和预言家不一样，纯白之女没有必要拿到警徽");
    })
    $("#keeper").click(() => {
        $("#hide>table #id").attr("src", "../../image/id/keeper.jpg");
        $("#poor1").html("属于好人神职，胜利条件和平民相同");
        $("#poor2").html("从第二晚开始，每天晚上查验白天被公投出局玩家的身份");
        $("#poor3").html("1、因为第一天之后才会有公决出局的人，所以第一晚不会获得任何信息<br>2、若白天为平安日，则晚上不会获得任何信息<br>3、守墓人出局后，你将不会再获得任何信息");
    })
})