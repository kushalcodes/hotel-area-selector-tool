$(document).ready(function() {
    $("#image").click(function(e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 0);

        var offset = $(this).offset();
        var x = e.clientX - offset.left;
        var y = e.clientY - offset.top;

        // $("#info").html("<br> X:" + x + "<br><br> Y:" + y);
        $("#point").css({ left: `${x}px`, top: `${y}px` });
        $("#pointLeft").val(x);
        $("#pointTop").val(y);
    });

    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    });
});

$("#pointLeft").on("change", function(e) {
    const left = $(this).val();
    $("#point").css({ left: `${left}px` });
})

$("#pointTop").on("change", function(e) {
    const top = $(this).val();
    $("#point").css({ top: `${top}px` });
})

$("#pointWidth").on("change", function(e) {
    const width = $(this).val();
    $("#point").css({ width: width });
})

$("#pointHeight").on("change", function(e) {
    const height = $(this).val();
    $("#point").css({ height: height });
})

$("#pointRotate").on("change", function(e) {
    const rotateVal = $(this).val();
    $("#point").css({ transform: `rotate(${rotateVal}deg)` });
})