$(function () {
    const $qu = $(".faq-wrap");
    const $an = $(".answer-wrap");
    const duration = 300;
    $qu.on("click", function () {
        // $(this) 구현
        $(this).siblings.removeClass("on");
        $(this).toggleClas("on");
        $(this).siblings().find($answer).siblings(duration);
        $(this).find($answer).stop().siblings(duration);
    });
});
