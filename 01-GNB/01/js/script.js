$(function () {
    // 대상을 변수에 저장
    const $menu = $(".gnb > li");
    const $submenu = $(".submenu");
    const diratopn = 300;

    //메뉴에 마우스가 들어왔을떄
    $menu.on("mouseenter", function () {
        $(this).find($submenu).stop().slideDown();
        $(this).addClass("on");
    });
    // 메뉴에 마우스 나왔을떄
    $menu.on("mouseleave", function () {
        $submenu.stop().slideUp();
        $menu.removeClass("on");
    });
});
