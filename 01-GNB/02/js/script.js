$(function () {
    // 대상을 변수에 저장
    const $window = $(window);
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
    // 마우스 휠을 조작했을떄
    $window.on("wheel", function (e) {
        // console.log(e);
        // if (originalEvent.wheelDelta > 0) {
        //     // 휠을 올렸을떄
        //     $header.removeClass("hide");
        // } else {
        //     // 휠을 내렸을떄
        //     $header.addClass("hide");
        // }

        // 삼합조건연산자
        // 조건 ? 참일때 동작 : 거짓일떄 동작
        originalEvent.wheelDelta > 0 ? $header.removeClass("hide") : $header.addClass("hide");
    });
});
