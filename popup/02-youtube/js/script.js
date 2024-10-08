$(function () {
    // 대상을 변수에 저장
    const $dim = $(".dim");
    const $videowrap = $(".video-wrap");
    const $ifram = $videowrap.find(".video iframe");
    const $caption = $(".caption");
    const $btnclose = $(".btn-close");
    const videoitem = $(".video-list li");

    $videoitem.on("click", function () {
        // console.log(videoitem, $(this));
        $(this).attr("data-link");
        $video.attr("src", videolink);
        $dim.fadeIn();
        $videowrap.addClass("active");
        console.log(videolink);
    });
    $videolink = videolink + "?autoplay=1";
    $btnclose.on("click", function () {
        $dim.fadeOut();
        $videowrap.removeClass("active");
        console.log(videolink);

        const videoTitle = $(this).text();
        $caption.text(videoTitle);
    });

    // setTimeout(동작 시간)
    // setTimeout(function () {});
    // $dim.fadeIn();
    // $videowrap.addClass("active");
    // 3000;
});
