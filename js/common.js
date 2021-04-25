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



$('.accordeon .acc-head').on('click', f_acc);

function f_acc() {
    $('.accordeon .acc-body').not($(this).next()).slideUp(200).siblings(".acc-head").removeClass("acc_box_active");
    $(this).toggleClass("acc_box_active");
    $(this).next().slideToggle(200);
}

$(".call_filter").on("click", function() {
    $(".catalog_panel_wrap").slideToggle(200);
});

$(".call_filter").on("click", function() {
    $(".close_catalog").slideUp(200);
});

$(".open_drop").on("click", function() {
    $(this).siblings(".sub-menu").slideToggle(200);
});