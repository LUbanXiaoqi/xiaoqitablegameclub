$(() => {
    // 狼队阵营
    $("#normal_wolf").click(() => {
        $("#all>table img").attr("src", "../image/id/wolf.jpg");
        $("#poor1").html("伪装成好人混淆视听，淘汰真正的好人，达成胜利条件");
        $("#poor2").html("每天晚上和其他狼队进行讨论，并袭击一名玩家");
        $("#poor3").html("1、狼人白天讨论阶段可以进行自爆，你若这么做则跳过剩余的白天阶段<br>2、狼人可以自己袭击自己<br>3、胜利条件详见【版型说明】模块");
    });
    $("#robot").click(() => {
        $("#all>table img").attr("src", "../image/id/robot.jpg");
        $("#poor1").html("属于狼人阵营，胜利条件和狼人相同");
        $("#poor2").html("第一天晚上学习一名玩家并获知学习的技能，从第二天开始使用学习到的技能，其他狼人阵营玩家出局时接刀");
        $("#poor3").html("1、如果学习到女巫，你将获得一瓶毒药<br>2、如果学习到守卫，你可以保护毒药<br>3、如果学习到狼人，你会在接刀当晚获得一次单独刀");
    });
    $("#beauty").click(() => {
        $("#all>table img").attr("src", "../image/id/beauty.jpg");
        $("#poor1").html("属于狼人阵营，胜利条件和狼人相同");
        $("#poor2").html("晚上跟随其他狼队一起参与袭击讨论，然后你单独睁眼魅惑一名玩家，被魅惑的玩家会在你出局时殉情");
        $("#poor3").html("1、狼美人无法自刀自爆<br>2、如果在夜晚死亡，则魅惑的玩家不会宣布殉情<br>3、不能魅惑可以看到的狼人<br>4、不能连续两晚魅惑同一名玩家");
    });
    $("#hide").click(() => {
        $("#all>table img").attr("src", "../image/id/hide.jpg");
        $("#poor1").html("属于狼人阵营，胜利条件和狼人相同");
        $("#poor2").html("被查验显示为好人（单身份）<br>获知队友的位置，在其他狼队全部出局时接刀（强）<br>看不到队友的位置（弱）<br>即使放在下层，也能参与袭击（双身份）");
        $("#poor3").html("1、在双身份中，拿到此牌一般放在下层<br>2、若是弱隐狼，好人胜利不需要出局隐狼<br>3、隐狼强度详见【版型说明】模块")
    });
    $("#wolfking").click(() => {
        $("#all>table img").attr("src", "../image/id/wolfking.jpg");
        $("#poor1").html("属于狼人阵营，胜利条件和狼人相同");
        $("#poor2").html("晚上跟随其他狼队一起参与袭击讨论，出局时可以带走玩家，如果因为某些原因出局则不能带走玩家");
        $("#poor3").html("1、在只有狼王的局中，狼王发动技能时需要翻牌<br>2、技能描述中的“某些原因”详见【版型说明】模块")
    });
    $("#whitewolf").click(() => {
        $("#all>table img").attr("src", "../image/id/whitewolf.jpg");
        $("#poor1").html("属于狼人阵营，胜利条件和狼人相同");
        $("#poor2").html("晚上跟随其他狼队一起参与袭击讨论，白天自爆时可以带走一名玩家");
        $("#poor3").html("1、因为其他方式死亡，都不发动技能<br>2、白狼王自爆发动技能后，需要翻牌;")
    });
    $("#infectwolf").click(() => {
        $("#all>table img").attr("src", "../image/id/infectwolf.jpg");
        $("#poor1").html("属于狼人阵营，胜利条件和狼人相同");
        $("#poor2").html("晚上跟随其他狼队一起参与袭击讨论，然后感染你们袭击的玩家");
        $("#poor3").html("1、如果是强种狼，被感染的玩家立刻知道自己被感染且加入狼队<br>2、如果是弱种狼，被感染的玩家次夜知道自己被感染且加入狼队，在这之前一直属于好人阵营<br>3、种狼感染之后，女巫将不会获得有人被袭击，该玩家加入狼队后，被查验视为狼人<br>4、种狼强度详见【版型说明】模块")
    });
    $("#timewolfking").click(() => {
        $("#all>table img").attr("src", "../image/id/timewolfking.jpg");
        $("#poor1").html("属于狼人阵营，胜利条件和狼人相同");
        $("#poor2").html("晚上跟随其他狼队一起参与袭击讨论，当票型出来后，你可以发动【否决】技能，将今天的放逐投票转换为平安夜");
        $("#poor3").html("1、发动技能无需翻牌<br>2、定序狼王可以发动自爆技能<br>3、否决最好用在狼人身上，为狼队争取轮次")
    });
    $("#nightmare").click(() => {
        $("#all>table img").attr("src", "../image/id/nightmare.jpg");
        $("#poor1").html("属于狼人阵营，胜利条件和狼人相同");
        $("#poor2").html("每天晚上恐惧玩家，被恐惧的玩家无法发动技能，然后加入狼队和狼队一起袭击玩家");
        $("#poor3").html("1、若恐惧带刀狼队玩家，则狼队全体无法袭击玩家，若该狼队玩家拥有其他特殊技能，也无法发动<br>2、噩梦之影在加入狼队之前无法看到队友，若噩梦之影不想第一天恐惧到队友导致狼队全员无刀，可以选择第一天不恐惧");
    });
    $("#lilith").click(()=>{
        $("#all>table img").attr("src","../image/id/lilith.jpg");
        $("#poor1").html("属于狼人阵营，胜利条件和狼人相同");
        $("#poor2").html("和狼队友见面，每晚行凶之前禁锢一名玩家，该玩家直到下个白天结束前：无法使用狼刀之外的主动技能，不会因致命技能倒牌，不能被放逐出局。禁锢信息在天亮时公开。");
        $("#poor3").html("1、无法连续禁锢同一名玩家。<br>2、可以禁锢自己，如果禁锢自己的下一晚开始失去禁锢技能。"); 
    });
    $("#maid").click(() => {
        $("#all>table img").attr("src", "../image/id/maid.jpg");
        $("#poor1").html("属于狼人阵营，胜利条件和狼人相同");
        $("#poor2").html("从第二晚开始，选择一名非狼人阵营的玩家进行吞噬，获得该玩家的技能，继承该技能的状态，并可在当晚使用，其他狼人阵营玩家出局时接刀");
        $("#poor3").html("1、蚀日侍女知道其他狼人身份，但是其他狼人不知晓蚀日侍女的身份。<br>2、蚀日侍女夜间无法参与狼人讨论。无法参与袭击，不能自爆<br>3、被吞噬的玩家当晚失去技能，直到天亮。<br>4、当蚀日侍女吞噬了流光伯爵或被流光伯爵庇护的玩家后，蚀日侍女会遭遇流光反噬，在第二天白天出局");
    });
    $("#claw").click(() => {
        $("#all>table img").attr("src", "../image/id/claw.jpg");
        $("#poor1").html("属于狼人阵营，胜利条件和狼人相同");
        $("#poor2").html("开局没有狼人视野，当狼人存活数＜3的时候觉醒，获得狼刀，然后加入狼队");
        $("#poor3").html("1、其他狼人可以看到狼鸦之爪<br>2、狼鸦之爪觉醒后，获得一次性觉醒刀<br>3、单独觉醒刀无法被防御，若不使用则保留觉醒刀<br>4、狼鸦之爪无法自爆");
    });
    $("#nighteacher").click(() => {
        $("#all>table img").attr("src", "../image/id/nighteacher.jpg");
        $("#poor1").html("属于狼人阵营，胜利条件和狼人相同");
        $("#poor2").html("从第二晚开始，对一名玩家进行增幅或削弱，其他狼人阵营玩家出局时接刀");
        $("#poor3").html("1、所有狼人能看到寂夜导师，但是寂夜导师看不到其他狼队<br>2、增幅和削弱后会获得什么效果详见【版型说明】<br>3、因增幅获得的技能可以不使用，但不保留<br>4、如果使用的技能的目标是好人且和白昼学者重复时，技能失效且该好人出局<br>5、如果使用的技能的目标是狼队且白昼学者的目标是除寂夜导师之外的狼队时，技能失效且寂夜导师出局<br>6、每晚只能使用一个技能，且每个技能只能使用一次");
    });
    $("#wolfwitch").click(()=>{
        $("#all>table img").attr("src", "../image/id/wolfwitch.jpg");
        $("#poor1").html("属于狼人阵营，胜利条件和狼人相同");
        $("#poor2").html("和狼队友见面，每天晚上查验一名玩家具体身份，从第二晚开始，若查验结果是纯白之女，纯白之女出局");
        $("#poor3").html("1、狼巫可以自爆<br>2、无论是否验死纯白之女，都要跟队友交流");
    });
    $("#timewolfwoman").click(()=>{
        $("#all>table img").attr("src", "../image/id/timewolfwoman.jpg");
        $("#poor1").html("属于狼人阵营，胜利条件和狼人相同");
        $("#poor2").html("和狼队友见面，每天晚上标记一名玩家，被标记的玩家若被使用技能，反弹技能");
        $("#poor3").html("1、可以标记自己<br>2、不能连续两晚标记同一名玩家<br>3、当该玩家反弹技能后，你将失去技能<br>4、你可以自刀自爆<br>5、无法反弹狼刀，技能最好用在今晚被毒杀的队友身上");
    });
    // 平民、待定、三方阵营
    $("#villager").click(() => {
        $("#all>table img").attr("src", "../image/id/villager.jpg");
        $("#poor1").html("沉着冷静的发言并分析，谨慎投出每一票，淘汰所有狼人");
        $("#poor2").html("无特殊技能");
        $("#poor3").html("双身份中，拿到两张村民的玩家叫做“金宝宝”，8人局可互认");
    });
    $("#good").click(() => {
        $("#all>table img").attr("src", "../image/id/good.jpg");
        $("#poor1").html("属于好人平民，胜利条件和平民相同");
        $("#poor2").html("白天可以自爆，自爆后翻开身份牌");
        $("#poor3").html("暂无");
    });
    $("#lonely").click(() => {
        $("#all>table img").attr("src", "../image/id/lonely.jpg");
        $("#poor1").html("帮助自己的崇拜的人，获得最终胜利");
        $("#poor2").html("第一天晚上选择崇拜对象，然后你的胜利条件将跟随你的崇拜对象");
        $("#poor3").html("1、你崇拜的对象身份你是不知道的<br>2、你属于平民，你若崇拜了狼，狼队要屠民胜利需要你出局<br>3、你若崇拜了狼，好人阵营胜利无需出局你<br>4、无论你崇拜了谁，你被查验视为好人")
    });
    $("#curse").click(() => {
        $("#all>table img").attr("src", "../image/id/curse.jpg");
        $("#poor1").html("努力活到最后，取代获胜阵营");
        $("#poor2").html("晚上被狼人袭击时，不会因为狼队的袭击出局，即免疫狼刀");
        $("#poor3").html("1、如果被无法查验具体身份的玩家查验，则自己会因为查验出局<br>2、如果被无法查验具体身份的玩家查验，会获得你是好人的信息<br>3、你若被狼队袭击，女巫还是可以看到你中刀了，你依旧可以被奶穿")
    });
    $("#sun").click(() => {
        $("#all>table img").attr("src", "../image/id/sun.jpg");
        $("#poor1").html("属于好人平民，胜利条件和平民相同");
        $("#poor2").html("出局时翻牌，然后追加一个白天");
        $("#poor3").html("如果自己作为最后的平民出局，则无法发动技能");
    });
    $("#moon").click(() => {
        $("#all>table img").attr("src", "../image/id/moon.jpg");
        $("#poor1").html("属于好人平民，胜利条件和平民相同");
        $("#poor2").html("出局时翻牌，然后追加一个夜晚");
        $("#poor3").html("如果自己作为最后的平民出局，则无法发动技能");
    });
    // 神职
    $("#seer").click(() => {
        $("#all>table img").attr("src", "../image/id/seer.jpg");
        $("#poor1").html("属于好人神职，胜利条件和平民相同");
        $("#poor2").html("每天晚上查验一名玩家所属阵营");
        $("#poor3").html("1、预言家不能查验自己<br>2、不能查验已经翻牌的玩家和已经被查验的玩家<br>3、预言家可以空验，但不建议空验");
    });
    $("#sbseer").click(() => {
        $("#all>table img").attr("src", "../image/id/sbseer.jpg");
        $("#poor1").html("属于好人神职，胜利条件和平民相同");
        $("#poor2").html("每天晚上查验一名玩家所属阵营，白天可以自爆，自爆后翻开身份牌");
        $("#poor3").html("1、愚言家不能查验自己<br>2、不能查验已经翻牌的玩家和已经被查验的玩家<br>3、愚言家可以空验，但不建议空验");
    });
    $("#witch").click(() => {
        $("#all>table img").attr("src", "../image/id/witch.jpg");
        $("#poor1").html("属于好人神职，胜利条件和平民相同");
        $("#poor2").html("每天晚上查验一名玩家所属阵营");
        $("#poor3").html("1、每瓶药在一局游戏中只能使用一次<br>2、每晚只能使用一瓶药<br>3、女巫的解药一旦使用，女巫将失去查看今晚被袭击的玩家权利<br>4、女巫首夜是否能自救详见【版型说明】模块");
    });
    $("#hunter").click(() => {
        $("#all>table img").attr("src", "../image/id/hunter.jpg");
        $("#poor1").html("属于好人神职，胜利条件和平民相同");
        $("#poor2").html("出局时可以开枪带走玩家，如果因为某些原因出局则不能带走玩家");
        $("#poor3").html("1、在只有猎人的局中，猎人发动技能时需要翻牌<br>2、技能描述中的“某些原因”详见【版型说明】模块");
    });
    $("#guard").click(() => {
        $("#all>table img").attr("src", "../image/id/guard.jpg");
        $("#poor1").html("属于好人神职，胜利条件和平民相同");
        $("#poor2").html("每天晚上可以保护一名玩家");
        $("#poor3").html("1、可以保护自己<br>2、不能连续两晚保护同一名玩家<br>3、如果你保护的玩家被女巫解救，该玩家还是会死亡，女巫的解药也会视为使用");
    });
    $("#sb").click(() => {
        $("#all>table img").attr("src", "../image/id/sb.jpg");
        $("#poor1").html("属于好人神职，胜利条件和平民相同");
        $("#poor2").html("被公投出局时，翻牌并免疫出局，但失去之后的投票权");
        $("#poor3").html("1、该技能效果为被动效果，不能不触发<br>2、在单身份中，翻牌后无法被票走<br>3、如果你保护的玩家被女巫解救，该玩家还是会死亡，女巫的解药也会视为使用");
    });
    $("#psychic").click(() => {
        $("#all>table img").attr("src", "../image/id/psychic.jpg");
        $("#poor1").html("属于好人神职，胜利条件和平民相同");
        $("#poor2").html("每天晚上查验一名玩家具体身份");
        $("#poor3").html("1、通灵师和预言家一样不能查验自己，可以空验，不能查验已经翻牌的玩家和已经被查验的玩家<br>2、第一天查验机械狼会显示机械狼本体，从第二天开始，查验机械狼会显示机械狼学习的身份");
    });
    $("#PW").click(() => {
        $("#all>table img").attr("src", "../image/id/PW.jpg");
        $("#poor1").html("属于好人神职，胜利条件和平民相同");
        $("#poor2").html("每天晚上查验一名玩家具体身份，从第二晚开始，若查验结果是狼队玩家，该狼队玩家出局");
        $("#poor3").html("1、纯白之女和预言家一样不能查验自己，可以空验，不能查验已经翻牌的玩家和已经被查验的玩家<br>2、由于狼巫拥有和纯白之女相同的能力，所以在狼巫出局前，要隐藏自己的身份<br>3、和预言家不一样，纯白之女没有必要拿到警徽");
    })
    $("#awakeseer").click(() => {
        $("#all>table img").attr("src", "../image/id/awakeseer.jpg");
        $("#poor1").html("属于好人神职，胜利条件和平民相同");
        $("#poor2").html("每天晚上查验两名玩家中是否有属于狼人阵营的玩家");
        $("#poor3").html("1、觉醒预言家可以查验自己<br>2、可以空验，可以查验已经翻牌的玩家和已经被查验的玩家<br>3、若其中有狼，你会获得查杀的信息，但是不知道里面有几头狼<br>4、可以利用tips里的1，2条来进行单验");
    });
    $("#keeper").click(() => {
        $("#all>table img").attr("src", "../image/id/keeper.jpg");
        $("#poor1").html("属于好人神职，胜利条件和平民相同");
        $("#poor2").html("从第二晚开始，每天晚上查验白天被公投出局玩家的身份");
        $("#poor3").html("1、因为第一天之后才会有公决出局的人，所以第一晚不会获得任何信息<br>2、若白天为平安日，则晚上不会获得任何信息<br>3、守墓人出局后，你将不会再获得任何信息");
    });
    $("#cold").click(() => {
        $("#all>table img").attr("src", "../image/id/cold.jpg");
        $("#poor1").html("属于好人神职，胜利条件和平民相同");
        $("#poor2").html("每天晚上冻结一名玩家，被冻结的玩家无法发动技能");
        $("#poor3").html("1、如果冻结到狼队，狼队全队无法发动技能<br>2、你不能冻结自己（话说自己冻结自己那么自己怎么发动的冻结）<br>3、冻结师最好找狼队阵营的玩家去冻结");
    });
    $("#star").click(() => {
        $("#all>table img").attr("src", "../image/id/star.jpg");
        $("#poor1").html("属于好人神职，胜利条件和平民相同");
        $("#poor2").html("每天晚上宠幸一名玩家，该玩家不会被狼队杀死");
        $("#poor3").html("1、名媛不能宠幸自己<br>2、如果名媛死亡，被名媛宠幸的玩家一起死亡<br>3、名媛宠幸的玩家可以死于毒药");
    });
    $("#bear").click(() => {
        $("#all>table img").attr("src", "../image/id/bear.jpg");
        $("#poor1").html("属于好人神职，胜利条件和平民相同");
        $("#poor2").html("白天公布出局玩家后开始检查该玩家身份是否有狼，若有狼，法官宣布熊少年咆哮了，若没有狼，法官宣布熊少年没有咆哮");
        $("#poor3").html("1、检测时会跳过死亡玩家进行检测<br>2、熊少年出局后，法官将宣布熊少年没有咆哮<br>3、熊少年被感染，熊少年会一直咆哮");
    });
    $("#knight").click(() => {
        $("#all>table img").attr("src", "../image/id/knight.jpg");
        $("#poor1").html("属于好人神职，胜利条件和平民相同");
        $("#poor2").html("白天发言阶段选择一名玩家进行审判，若是好人，骑士出局，若是狼队，狼队出局");
        $("#poor3").html("1、骑士发动技能后需要翻牌<br>2、骑士发动审判后如果是好人，继续中断的发言阶段<br>3、骑士发动审判后如果是狼人，立刻进入黑夜");
    });
    $("#timewoman").click(() => {
        $("#all>table img").attr("src", "../image/id/timewoman.jpg");
        $("#poor1").html("属于好人神职，胜利条件和平民相同");
        $("#poor2").html("每天晚上标记一名玩家，被标记的玩家若被使用技能，反弹技能");
        $("#poor3").html("1、可以标记自己<br>2、不能连续两晚标记同一名玩家<br>3、当该玩家反弹技能后，你将失去技能<br>4、技能最好用在今晚吃刀的玩家身上");
    });
    $("#milktea").click(() => {
        $("#all>table img").attr("src", "../image/id/milktea.jpg");
        $("#poor1").html("属于好人神职，胜利条件和平民相同");
        $("#poor2").html("每天晚上查验一名玩家所属阵营，被查验的玩家被保护");
        $("#poor3").html("1、若你查验的玩家被狼人袭击，女巫会获得狼人空刀的信息<br>2、可以查验自己，只不过这样只能起到保护效果<br>3、可以空验，可以查验已经翻牌的玩家和已经被查验的玩家，只不过这样只能起到保护效果<br>4、不能连续两晚查验并保护同一名玩家");
    });
    $("#burglar").click(() => {
        $("#all>table img").attr("src", "../image/id/burglar.jpg");
        $("#poor1").html("属于狼人阵营，胜利条件和狼人相同");
        $("#poor2").html("每天晚上偷窃一名玩家，被偷窃的玩家被奶茶少年查验显示为好人且奶茶少年的保护无效，在其他狼队全部出局时接刀，接刀后，你将无法偷窃玩家，且无视奶茶少年的保护");
        $("#poor3").html("1、偷窃只能影响奶茶少年的效果，其他查验效果不会被影响<br>2、因为盗窃有两个效果，你需要判断今晚应该触发什么效果<br>3、被盗窃的玩家如果被袭击，女巫照样可以看到刀口");
    });
    $("#hypnotist").click(() => {
        $("#all>table img").attr("src", "../image/id/hypnotist.jpg");
        $("#poor1").html("属于好人神职，胜利条件和平民相同");
        $("#poor2").html("每天选择两名玩家你选择的第一名玩家的技能（若有）只能对你选择的第二名玩家发动技能");
        $("#poor3").html("1、你选择的第一个玩家若是女巫，你选择的第二名玩家如果被狼人袭击且女巫解药还未使用时，女巫将使用解药，其他情况使用毒药<br>2、你选择的第一个选择玩家若是狼人阵营，那么狼人阵营只能袭击你选择的第二名玩家<br>3、你选择的第一个选择玩家若无法发动技能或者是平民，则无事发生");
    });
    $("#demon").click(() => {
        $("#all>table img").attr("src", "../image/id/demon.jpg");
        $("#poor1").html("属于好人神职，胜利条件和平民相同");
        $("#poor2").html("从第二晚开始，每晚都可以选择一名玩家进行狩猎。如果对方是狼人，则次日对方出局；如果对方是好人，则次日猎魔人出局。");
        $("#poor3").html("1、女巫的毒药对猎魔人无效果<br>2、猎魔人可以放弃发动技能。<br>3、其他情况详见【版型说明】");
    });
    $("#count").click(() => {
        $("#all>table img").attr("src", "../image/id/count.jpg");
        $("#poor1").html("属于好人神职，胜利条件和平民相同");
        $("#poor2").html("从第二晚开始，每晚可以选择一名其他玩家使用流光庇护，被流光庇护的玩家可以免疫夜间伤害，且蚀日侍女吞噬到被流光庇护的玩家将会受到流光反噬");
        $("#poor3").html("1、流光伯爵不能连续两晚庇护同一名玩家<br>2、流光伯爵不能连续庇护自己。<br>3、蚀日侍女吞噬到流光伯爵或流光庇护的玩家而出局，这种情况即为流光反噬<br>4、其他情况详见【版型说明】");
    });
    $("#dream").click(() => {
        $("#all>table img").attr("src", "../image/id/dream.jpg");
        $("#poor1").html("属于好人神职，胜利条件和平民相同");
        $("#poor2").html("每天晚上摄梦一名玩家，被摄梦的玩家今晚不会因为任何致命技能出局");
        $("#poor3").html("1、摄梦人不能摄梦自己<br>2、如果摄梦人当晚出局，则被摄梦的玩家一起出局<br>3、摄梦人可以进行连续摄梦，被摄梦人连续摄梦两晚的玩家出局<br>4、如果要使用摄梦人的死亡机制，建议最好用在狼人身上");
    });
})
