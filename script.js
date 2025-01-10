$(document).ready(function () {
    $(".scrollBtn").click(function () {
        var targetId = $(this).data('target');  // Fetch the target ID
        $('html, body').animate({
            scrollTop: $("#" + targetId).offset().top
        }, 1000); // Smooth scroll to the section
    });
});
