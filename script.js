$(document).ready(function () {
    
    $(".button-container button").click(function () {
        $(this).css({
            "background-color": "#ff0000",
            color: "#fff",
            transform: "scale(1.2)",
        });

        $(".button-container button").not(this).css({
            "background-color": "black",
            color: "#fff",
            transform: "scale(1)",
        });
        const sectionId = $(this).attr("data-target");

        
        if (sectionId) {
            $("html, body").animate(
                {
                    scrollTop: $(sectionId).offset().top - 100, 
                },
                800
            );
        }
    });
    $(window).on("scroll", function () {
        $("section").each(function () {
            if ($(window).scrollTop() >= $(this).offset().top - 150) {
                $(this).css({
                    opacity: 1,
                    transform: "translateY(0)",
                    transition: "all 0.5s ease-in-out",
                });
            }
        });
    });
});
$(document).ready(function () {
    $('.card').hover(
        function () {
            $(this).css('transform', 'scale(1.05)');
            $(this).css('box-shadow', '0 4px 12px rgba(0, 0, 0, 0.3)');
        },
        function () {
            $(this).css('transform', 'scale(1)');
            $(this).css('box-shadow', '0 2px 6px rgba(0, 0, 0, 0.1)');
        }
    );
});
$(document).ready(function () {
    // Ajouter des images pour les placeholders
    $('#task-manager-image').css('background-image', 'url("task-manager.jpg")');
    $('#api-task-manager-image').css('background-image', 'url("api-task-manager.jpg")');
    $('#stock-system-image').css('background-image', 'url("stock-system.jpg")');

    // Ajouter des effets interactifs
    $('.card').hover(
        function () {
            $(this).css('transform', 'scale(1.05)');
            $(this).css('box-shadow', '0 6px 16px rgba(0, 0, 0, 0.3)');
        },
        function () {
            $(this).css('transform', 'scale(1)');
            $(this).css('box-shadow', '0 2px 6px rgba(0, 0, 0, 0.1)');
        }
    );
});
