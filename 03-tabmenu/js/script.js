$(function () {
    const $tabmenu = $(".tab-menu>li");
    const $an = $(".tab-con-item");
    const duration = 300;
    $tabcon.hide();
    $tabcon.eq(0).show;
});
$tabmenu.on("click", function (e) {
    e.preventDefault();
    const tabIdx = $(this.index());
    console.log(tabIdx);
    $tabmenu.removeClass("on");
    $tabmenu.on(tabIdx).addClass("on");
    $tabcon.hide();
    $tabcon.eq(tabIdx).show();
});
