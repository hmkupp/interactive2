

<!DOCTYPE html>
<html>
<head>
<script>

function changeImage() {
    var image = document.getElementById('gift');
    if (image.src.match("box")) {
        image.src = "blue-open.gif";
    } else {
        image.src = "gift-blue.png";
    }
}

</script>
</head>

<body>

</body>
</html>