$(() => {
    var hide = 0;
    $("#menu").click(() => {
        if (hide == 0) {
            hide = 1
            $(".hide").removeClass("hide").addClass("nothide")
        } else {
            hide = 0
            $(".nothide").removeClass("nothide").addClass("hide")
        }
    })
})