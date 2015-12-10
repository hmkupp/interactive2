

<!DOCTYPE html>
<html>
<head>
<script>

function changeImage() {
    var image = document.getElementById('gift');
    if (image.src.match("box")) {
        image.src = "git-blue.png";
    } else {
        image.src = "blue-open.gif";
    }
}

</script>
</head>

<body>

</body>
</html>