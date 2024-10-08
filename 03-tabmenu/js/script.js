$(function () {
    const $tabmenu = $(".tab-menu>li");
    const $an = $(".tab-con-item");
    const bgcolor = ("red", "green", "blue");
    $("body").css({
        backgroundColor: bgcolor(0),
        backgroundColor: bgcolor(1),
        backgroundColor: bgcolor(2),
        backgroundColor: bgcolor(3),
    });
    const duration = 300;
    $tabcon.hide();
    $tabcon.eq(0).show;
});
$tabmenu.on("click", function (e) {
    console.log(tabIdx);
    function tabAciton() {
        e.preventDefault();
        const tabIdx = $(this.index());
        console.log(tabIdx);
        $tabmenu.removeClass("on");
        $tabmenu.on(tabIdx).addClass("on");
        $tabcon.hide();
        $tabcon.eq(tabIdx).show();
    }
});
