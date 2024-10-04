$(function () {
    // 대상을 변수에 저장
    const $header = $("header");
    const $menu = $(".gnb > li");
    const $submenu = $(".submenu");
    const diratopn = 300;

    //메뉴에 마우스가 들어왔을떄
    $menu.on("mouseenter", function () {
        $(this).addClass("on");
        $header.addClass("active");
        $(this).find($submenu).stop().slideDown();
    });
    // 메뉴에 마우스 나왔을떄
    $menu.on("mouseleave", function () {
        $header.removeClass("active");
        $submenu.stop().slideUp();
        $(this).removeClass("on");
    });
});
