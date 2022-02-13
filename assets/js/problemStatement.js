$statements = $('.statement');
$statements.on("click", function (event) {
    $index = $(this).attr('id');
    $('.showContainer').css("display", "none");
    console.log($index);
    $(`.${$index}`).css("display", "block");
    $statements.css("background", "transparent");
    $(this).css("background", "#cd8983");
})