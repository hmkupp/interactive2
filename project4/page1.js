

<!DOCTYPE html>
<html>
<head>
<script>

$(.blue-closed).click(function() {
    if ($(this).hasClass("clicked")) {
        $(this).removeClass("clicked");
    } else {
        $(this).addClass("clicked");
    }
});

</script>
</head>

<body>

</body>
</html>