$(".unch").on("click", "a", function(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top - 80;
    $('body,html').animate({ scrollTop: top }, 1500);
});

$(".call_menu").on("click", function() {
    $("nav").addClass("nav_active");
    $("body, html").addClass("over");
});

$(".close_menu").on("click", function() {
    $("nav").removeClass("nav_active");
    $("body, html").removeClass("over");
});

$(".footer_nav_title").on("click", function() {
    $(this).next("ul").slideToggle(200);
});

$(".credit_item_box_wrap .call_details").on("click", function() {
    $(".credit_item_box_wrap .call_details").not(this).parent().siblings(".hide_details").slideUp(200);
    $(this).parent().siblings(".hide_details").slideToggle(200);
});