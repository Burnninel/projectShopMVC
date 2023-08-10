const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

$('#signIn').click(function() {

    window.location.href = "../pages/signIn.html";

});

$('#signUp').click(function() {

    window.location.href = "../pages/signUp.html";

});

$(document).ready(function() {
    $('.cardItemImgProminence').mouseenter(function() {
        $(this).find('.btnCardImgProminence').addClass('btnCardImgProminenceHover').removeClass('btnCardImgProminence');
    }).mouseleave(function() {
        $(this).find('.btnCardImgProminenceHover').addClass('btnCardImgProminence').removeClass('btnCardImgProminenceHover');
    });
});