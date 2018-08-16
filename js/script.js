$(document).ready(function () {

    (function () {
        $(".js-button").click(function () {

            var currentModal = $(this).attr("data-modal");
            var modal_1 = $("#modal_1");
            var modal_2 = $("#modal_2");
            var modal_3 = $("#modal_3");
            var modalClose = $(".b-modal__close");
            var overlay = $(".js-overlay");
            var modal = $(".b-modal");

            if (currentModal === "modal_1") {
                $(modal_1).fadeIn();
            }
            if (currentModal === "modal_2") {
                $(modal_2).fadeIn();
            }
            if (currentModal === "modal_3") {
                $(modal_3).fadeIn();
            }

            $(modalClose).click(function () {
                $(overlay).fadeOut();
            });

            $(document).mouseup(function (e) {
                if (!modal.is(e.target) && modal.has(e.target).length === 0) {
                    $(overlay).fadeOut();
                }
            });
        });
    })();

    (function () {
        $(".b-button").click(function () {

            var button = $(".b-button");
            var slide_1 = $("#slide_1");
            var slide_2 = $("#slide_2");
            var slide_3 = $("#slide_3");
            var currentSlide = $(this).attr("data-slide");
            var slideImg = $(".b-img");

            $(button).removeClass("active");
            $(this).addClass("active");

            if (currentSlide === "slide_1") {
                slideImg.fadeOut("slow");
                $(slide_1).fadeIn("slow");
            }
            if (currentSlide === "slide_2") {
                $(slide_2).addClass("b-img__disable");
                slideImg.fadeOut("slow");
                $(slide_2).fadeIn("slow");
            }
            if (currentSlide === "slide_3") {
                slideImg.fadeOut("slow");
                $(slide_3).fadeIn("slow");
            }
        });
    })();
});