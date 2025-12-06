const title = document.getElementById("page_title");
title.addEventListener("click", function () {
    if (title.style.color == "") {
        title.style.color = "rgb(195, 0, 0)"
    } else {
        title.style.color = ""
    }
})