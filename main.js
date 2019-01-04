//scroll to about me 
$(document).on("click", "#learnBtn", function (e) {
    e.preventDefault();
    $.scrollTo('#aboutCont', 2000);
});

//scroll to work I've done
$(document).on("click", "#workBtn", function (e) {
    e.preventDefault()
    $.scrollTo('#projCont', 2000);
})

//scroll to work I've done
$(document).on("click", "#contBtn", function (e) {
    e.preventDefault()
    $.scrollTo('.contactCont', 2000);
})

//when doc loads, size project cards to appropriate grid size
$(document).ready(function () {

    function isOverflown(element) {
        return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
    }

    $(".card").each(function () {
        var span = 0
        while (isOverflown(document.getElementById(this.id))) {
            span++
            $(this).css("grid-row-end", " span " + span)
        }
    });

    //fade in titles and buttons
    $(".title").fadeIn(2000)
    $("#btnCont").fadeIn(4000)
});

