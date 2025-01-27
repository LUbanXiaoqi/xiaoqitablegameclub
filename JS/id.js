$(() => {
    // 回到顶部
    $(".block").click(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    });
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
        $("#poor2").html("晚上学习一名玩家并获知学习的技能，从学习的次日夜晚开始使用学习到的技能，其他狼人阵营玩家出局时接刀");
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
        $("#poor2").html("被查验显示为好人<br>获知队友的位置，在其他狼队全部出局时接刀（强）<br>看不到队友的位置（弱）");
        $("#poor3").html("1、若是弱隐狼，好人胜利不需要出局隐狼<br>2、隐狼强度详见【版型说明】模块")
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
    $("#lilith").click(() => {
        $("#all>table img").attr("src", "../image/id/lilith.jpg");
        $("#poor1").html("属于狼人阵营，胜利条件和狼人相同");
        $("#poor2").html("和狼队友见面，每晚行凶之前禁锢一名玩家，该玩家直到下个白天结束前：无法使用狼刀之外的主动技能，不会因致命技能倒牌，不能被放逐出局。禁锢信息在天亮时公开。");
        $("#poor3").html("1、无法连续禁锢同一名玩家。<br>2、可以禁锢自己，如果禁锢自己的下一晚开始失去禁锢技能。");
    });
    $("#maid").click(() => {
        $("#all>table img").attr("src", "../image/id/maid.jpg");
        $("#poor1").html("属于狼人阵营，胜利条件和狼人相同");
        $("#poor2").html("从第二晚开始，选择一名非狼人阵营的玩家进行吞噬，获得该玩家的技能，继承该技能的状态，并可在当晚使用，其他狼人阵营玩家出局时接刀");
        $("#poor3").html("1、蚀日侍女知道其他狼人身份，但是其他狼人不知晓蚀日侍女的身份。<br>2、蚀日侍女夜间无法参与狼人讨论。无法参与袭击，不能自爆<br>3、被吞噬的玩家当晚失去技能，直到天亮。<br>4、当蚀日侍女吞噬了流光伯爵或被流光伯爵庇护的玩家后，蚀日侍女会遭遇流光反噬，在次日白天出局");
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
    $("#wolfwitch").click(() => {
        $("#all>table img").attr("src", "../image/id/wolfwitch.jpg");
        $("#poor1").html("属于狼人阵营，胜利条件和狼人相同");
        $("#poor2").html("和狼队友见面，每天晚上查验一名玩家具体身份，从第二晚开始，若查验结果是纯白之女，纯白之女出局");
        $("#poor3").html("1、狼巫可以自爆<br>2、无论是否验死纯白之女，都要跟队友交流");
    });
    $("#timewolfwoman").click(() => {
        $("#all>table img").attr("src", "../image/id/timewolfwoman.jpg");
        $("#poor1").html("属于狼人阵营，胜利条件和狼人相同");
        $("#poor2").html("和狼队友见面，每天晚上标记一名玩家，被标记的玩家若被使用技能，反弹技能");
        $("#poor3").html("1、可以标记自己<br>2、不能连续两晚标记同一名玩家<br>3、当该玩家反弹技能后，你将失去技能<br>4、你可以自刀自爆<br>5、无法反弹狼刀，技能最好用在今晚被毒杀的队友身上");
    });
    $("#fristlove").click(() => {
        $("#all>table img").attr("src", "../image/id/FL.jpg");
        $("#poor1").html("属于狼人阵营，胜利条件和狼人相同");
        $("#poor2").html("狼人阵营，被查验显示为好人，不和狼队友见面，在狼队袭击结束后，选择一名玩家成为自己的初恋，当自己出局时，初恋先替你出局");
        $("#poor3").html("1、如果你选择的初恋为混血少年，则技能失效，没有人替你出局<br>2、技能只能发动一次，当你的初恋出局后无法再次选择初恋<br>3、如果你的初恋先于你出局，那么在你出局时没有玩家替你出局");
    });
    $("#brother_wolf").click(() => {
        $("#all>table img").attr("src", "../image/id/brother_wolf.jpg");
        $("#poor1").html("属于狼人阵营，胜利条件和狼人相同");
        $("#poor2").html("狼人阵营，先和狼弟见面，然后和其他狼人见面，并袭击玩家，无法自刀自爆");
        $("#poor3").html("1、你是全场唯一一个最先知道狼弟的玩家，和其他狼人见面讨论时一定要告诉其他狼队此信息<br>2、由于狼弟会在你出局后带有狂暴刀请务必保证你出局在狼弟之前");
    });
    $("#wolf_brother").click(() => {
        $("#all>table img").attr("src", "../image/id/wolf_brother.jpg");
        $("#poor1").html("属于狼人阵营，胜利条件和狼人相同");
        $("#poor2").html("狼人阵营，先和兄见面，然后不加入狼队，狼兄出局后会在次日夜晚获得狂暴刀，在使用狂暴刀的次日夜晚和其他队友见面");
        $("#poor3").html("1、在狼兄出局之前，你被预言家查验会显示为【好人】<br>2、在狼兄出局之前，你被预言家查验会显示为【狼人】<br>3、由于你会在狼兄出局后带有狂暴刀请务必保证狼兄出局在你之前<br>4、你的狂暴刀不会被女巫解救，但会被守卫保护<br>5、你的狂暴刀不会保留至下一夜晚");
    });
    $("#PM").click(()=>{
        $("#all>table img").attr("src", "../image/id/PM.jpg");
        $("#poor1").html("属于狼人阵营，胜利条件和狼人相同");
        $("#poor2").html("知道狼队全体成员的位置，最后一狼可以接刀，每晚可以另一名玩家的查验结果相反");
        $("#poor3").html("1、不能连续选择同一名玩家<br>2、技能生效后，你将失去此技能<br>3、不能自爆");
    });
    $("#mirrorwlof").click(()=>{
        $("#all>table img").attr("src", "../image/id/mirrorwolf.jpg");
        $("#poor1").html("属于狼人阵营，胜利条件和狼人相同");
        $("#poor2").html("可以看到队友，拥有一次“伤害反射”的技能，你可以讲此技能给予给其他狼人，可以选择不给予");
        $("#poor3").html("1、你选择给予后，若该狼人被毒杀或者被狩猎，则技能触发，反弹技能<br>2、若选择不给予，你被毒杀或者被狩猎时触发技能<br>3、如果技能未触发，你可以收回此技能<br>4、全局只能触发1次");
    });
    $("#RW").click(() => {
        $("#all>table img").attr("src", "../image/id/RW.jpg");
        $("#poor1").html("属于狼人阵营，胜利条件和狼人相同");
        $("#poor2").html("不和其他狼人见面，最后一狼接刀，从第二晚开始，你可以发动仅有一次的【轮回】技能");
        $("#poor3").html("1、被轮回的玩家的技能可以保留<br>2、轮回的效果详见【版型说明】<br>3、你不会被传授狼王爪")
    });
    // 平民、待定、三方阵营
    $("#villager").click(() => {
        $("#all>table img").attr("src", "../image/id/villager.jpg");
        $("#poor1").html("沉着冷静的发言并分析，谨慎投出每一票，淘汰所有狼人");
        $("#poor2").html("无特殊技能");
        $("#poor3").html("暂无");
    });
    $("#good").click(() => {
        $("#all>table img").attr("src", "../image/id/good.jpg");
        $("#poor1").html("属于好人平民，胜利条件和平民相同");
        $("#poor2").html("白天可以自爆，自爆后翻开身份牌");
        $("#poor3").html("暂无");
    });
    $("#senior").click(() => {
        $("#all>table img").attr("src", "../image/id/senior.jpg");
        $("#poor1").html("属于好人平民，胜利条件和平民相同");
        $("#poor2").html("天亮后翻开自己的身份牌");
        $("#poor3").html("1、你的翻牌技能是强制性的，不能不翻<br>2、翻牌时间为警长竞选之后");
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
        $("#poor2").html("出局时翻牌，然后跳过一个夜晚");
        $("#poor3").html("如果自己作为最后的平民出局，则无法发动技能");
    });
    $("#moon").click(() => {
        $("#all>table img").attr("src", "../image/id/moon.jpg");
        $("#poor1").html("属于好人平民，胜利条件和平民相同");
        $("#poor2").html("出局时翻牌，然后跳过一个白天");
        $("#poor3").html("如果自己作为最后的平民出局，则无法发动技能");
    });
    $("#love").click(() => {
        $("#all>table img").attr("src", "../image/id/love.jpg");
        $("#poor1").html("判断自己所属阵营，帮助情侣获胜");
        $("#poor2").html("第一天晚上选择两名玩家，两名玩家成为情侣，情侣之一出局，另一名玩家殉情出局");
        $("#poor3").html("1、如果情侣均属于好人阵营，爱神胜利条件与好人阵营相同<br>2、如果情侣均属于狼人阵营，爱神胜利条件与狼人阵营相同<br>3、如果情侣双方阵营不同，则爱神和情侣成为第三方阵营，胜利条件变为除掉其他阵营的玩家<br>4、爱神可以选择自己，结算时自己视为好人<br>5、情侣无论属于什么阵营，爱神被查验永远显示【好人】<br>6、如果情侣均为好人阵营爱神不属于民也不属于神，狼人屠民屠神无需爱神出局，如果情侣均为狼人阵营同理");
    });
    $("#mixedblood").click(() => {
        $("#all>table img").attr("src", "../image/id/MB.jpg");
        $("#poor1").html("属于好人平民，胜利条件和平民相同");
        $("#poor2").html("被查验显示为狼人，每天晚上指认一名玩家");
        $("#poor3").html("1、如果被指认的玩家为好人，则无事发生，混血少年可继续指认<br>2、如果被指认的玩家为狼队，则混血少年和被指认的玩家在公布死讯后同时翻牌，混血少年将终止指认<br>3、由于你是一张假查杀，所以在你接到真预言家查杀时，需要证明你是混血少年");
    });
    $("#VKG").click(() => {
        $("#all>table img").attr("src", "../image/id/VKG.jpg");
        $("#poor1").html("和新生儿合作，吸食场上全部存活玩家");
        $("#poor2").html("首夜选择一名玩家先成为【新生儿】，然后吸食一名玩家，从第二晚开始，每晚可吸食一名玩家");
        $("#poor3").html("1、新生儿知道自己成为新生儿<br>2、成为新生儿的玩家保留原有技能，但是成为吸血鬼阵营<br>3、如果【吸血鬼骑士少女】出局，新生儿一并出局，反之不用<br>4、若被【预言家】查验，会显示你是好人身份");
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
        $("#poor3").html("1、通灵师和预言家一样不能查验自己，可以空验，不能查验已经翻牌的玩家和已经被查验的玩家<br>2、若机械狼没有学习技能，查验机械狼会显示机械狼本体，如果机械狼学习技能后，查验机械狼会显示机械狼学习的身份");
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
    $("#crow").click(() => {
        $("#all>table img").attr("src", "../image/id/crow.jpg");
        $("#poor1").html("属于好人神职，胜利条件和平民相同");
        $("#poor2").html("每天晚上诅咒一名玩家<br>被诅咒的玩家身上自动多一票（强）<br>被诅咒的玩家会播报，如果该玩家身上有票，则自动多一票（弱）");
        $("#poor3").html("1、乌鸦使者可以诅咒自己<br>2、乌鸦使者的诅咒最好对狼人使用<br>3、乌鸦使者的强度详见版型说明");
    });
    $("#pab").click(() => {
        $("#all>table img").attr("src", "../image/id/PAB.jpg");
        $("#poor1").html("属于好人神职，胜利条件和平民相同");
        $("#poor2").html("每天晚上蛊惑一名玩家，在你夜晚出局时被蛊惑的玩家替你出局");
        $("#poor3").html("1、蛊惑师只能防止夜晚出局，白天被票，或者被枪，还是会直接出局<br>2、技能并非一次性，可重复使用<br>3、蛊惑师可以进行连续蛊惑，被蛊惑师连续蛊惑两晚的玩家出局");
    });
    $("#BC").click(() => {
        $("#all>table img").attr("src", "../image/id/BC.jpg");
        $("#poor1").html("属于好人神职，胜利条件和平民相同");
        $("#poor2").html("晚上选择一名玩家成为幸运儿，并从【查验】、【毒药】和【护盾】中选择一个技能给予幸运儿");
        $("#poor3").html("1、不能选择自己为幸运儿<br>2、选择幸运儿后，无论幸运儿是否存活，不能选择新的幸运儿<br>3、幸运儿如果为好人，则幸运儿获得该技能<br>4、幸运儿如果为狼队，则幸运儿不会获得该技能且奇迹商人出局<br>5、奇迹商人可以空过，将技能保留到下一晚再使用<br>6、获得商品的幸运儿可以空过，将获得的商品保留到下一晚再使用<br>7、游戏有单独的幸运儿发动技能的环节");
    });
    $("#dancer").click(() => {
        $("#all>table img").attr("src", "../image/id/dancer.jpg");
        $("#poor1").html("属于好人神职，胜利条件和平民相同");
        $("#poor2").html("免疫女巫的毒药，从第二晚开始，每晚必须选择三名没有以此法选择过的玩家。");
        $("#poor3").html("1、三名玩家之中其中如果有一名玩家和其他两名玩家阵营不同，则该玩家出局。<br>2、如果这三名玩家包含了舞者自身，则三名玩家视作被守卫守护<br>3、若没有足够多的合法目标，该技能不发动。");
    });
    $("#BM").click(() => {
        $("#all>table img").attr("src", "../image/id/BM.jpg");
        $("#poor1").html("属于好人神职，胜利条件和平民相同");
        $("#poor2").html("晚上选择一名玩家成为幸运儿，并从【查验】、【毒药】和【猎枪】中选择一个技能给予幸运儿");
        $("#poor3").html("1、不能选择自己为幸运儿<br>2、选择幸运儿后，无论幸运儿是否存活，不能选择新的幸运儿<br>3、幸运儿如果为好人，则幸运儿获得该技能<br>4、幸运儿如果为狼队，则幸运儿不会获得该技能且奇迹商人出局（包括狼兄未出局时的狼弟）<br>5、奇迹商人可以空过，将技能保留到下一晚再使用<br>6、获得商品的幸运儿可以空过，将获得的商品保留到下一晚再使用<br>7、游戏有单独的幸运儿发动技能的环节<br>8、幸运儿获得技能当晚只能获得幸运儿信息，次日夜晚才能发动技能（猎枪除外）");
    });
    $("#spy").click(()=>{
        $("#all>table img").attr("src", "../image/id/spy.jpg");
        $("#poor1").html("属于好人神职，胜利条件和平民相同");
        $("#poor2").html("白天可以在放逐发言阶段随时翻牌，并获得警徽，然后当天投票放逐阶段变为侦探处决阶段");
        $("#poor3").html("1、无论侦探是否获得警徽，侦探永远可以翻牌<br>2、无论警徽是否流失，侦探一旦翻牌，侦探立刻获得警徽<br>3、侦探翻牌后，其他玩家的主动翻牌技能无法使用（被动翻牌仍生效<<br>4、被侦探处决的玩家将翻开身份牌");
    });
    $("#SWAT").click(()=>{
        $("#all>table img").attr("src", "../image/id/SWAT.jpg");
        $("#poor1").html("属于好人神职，胜利条件和平民相同");
        $("#poor2").html("在侦探处决阶段结束后激活，如果侦探处决的是狼人，你会获得【搜查行动】的技能，如果侦探处决的是好人，你会获得【暗杀行动】的技能");
        $("#poor3").html("1、搜查行动：你可以查验玩家的身份为好人还是狼队，查验规则和【预言家】相同，仅限一次<br>2、暗杀行动：你可以晚上随机杀死一名玩家，仅限一次<br>3、在侦探处决阶段结束之前你不会被激活，在侦探处决阶段结束之前死亡，你永远不会被激活<br>4、被激活后获得的技能不会保留");
    });
    $("#mathematician").click(()=>{
        $("#all>table img").attr("src", "../image/id/mathematician.jpg");
        $("#poor1").html("属于好人神职，胜利条件和平民相同");
        $("#poor2").html("从第二晚开始，每晚可以查验两名玩家是否为同一阵营");
        $("#poor3").html("1、若查验结果为不同阵营，则数学家在下一晚视作被守卫守护<br>2、被守卫守护的被动是一次性的<br>3、数学家和预言家一样不能查验自己，可以空验，不能查验已经翻牌的玩家和已经被查验的玩家");
    });
    $("#mirror").click(()=>{
        $("#all>table img").attr("src", "../image/id/mirror.jpg");
        $("#poor1").html("属于好人神职，胜利条件和平民相同");
        $("#poor2").html("拥有一次“狼刀反射”的技能");
        $("#poor3").html("1、当狼人袭击你时，若镜面狼存在，则反射到镜面狼身上，否则，反射到从你的下置位数起最近的狼人身上<br>2、全局只能触发1次<br>3、你只能反射狼刀，毒药无法反射");
    });
    $("#reincarnator").click(() => {
        $("#all>table img").attr("src", "../image/id/reincarnator.jpg");
        $("#poor1").html("属于好人神职，胜利条件和平民相同");
        $("#poor2").html("从第二晚开始，你可以发动仅有一次的【轮回】技能");
        $("#poor3").html("1、被轮回的玩家的技能可以保留<br>2、轮回的效果详见【版型说明】")
    });
})
