$(document).ready(function () {
    $(".scrollBtn").click(function () {
        var targetId = $(this).data('target');
        $('html, body').animate({
            scrollTop: $("#" + targetId).offset().top - 250
        }, 1000);
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.scrollBtn');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
});


$(document).ready(function () {
    $('.light').hover(
        function () {

            $(this).css({
                'border': '2px dashed transparent',
                'box-shadow': '0 0 222px rgb(17, 0, 255), 0 0 100px rgb(0, 4, 255)',
                'transform': 'translateY(55px) rotate(1deg)',
                

            });
        },
        function () {
            $(this).css({
                'border': '0px solid #ddd',
                'box-shadow': '0 0 100px rgba(21, 0, 255, 0.59), 0 0 100px rgba(0, 4, 255, 0.54)',
                'transform': 'rotate(0deg)'
            });
        }
    );
 });

