    $(document).ready(function() {
        $("#tickets").hide();
        $("#partners").hide();
        $("#newsletter").hide();
        return true;
    });

    $("#aboutBtn").bind("click", function(event) {
        $("#about").show();
        $("#tickets").hide();
        $("#partners").hide();
        $("#newsletter").hide();
        return true;
    });

    $("#ticketsBtn").bind("click", function(event) {
        $("#tickets").show();
        $("#about").hide();
        $("#partners").hide();
        $("#newsletter").hide();
        return true;
    });

    $("#newsletterBtn").bind("click", function(event) {
        $("#newsletter").show();
        $("#about").hide();
        $("#tickets").hide();
        $("#partners").hide();
        return true;
    });

    $("#partnersBtn").bind("click", function(event) {
        $("#partners").show();
        $("#about").hide();
        $("#tickets").hide();
        $("#newsletter").hide();
        console.log(urlFav);
        return true;
    });
