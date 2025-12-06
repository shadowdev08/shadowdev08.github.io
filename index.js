// index.html

const title = document.getElementById("page_title");
title.addEventListener("click", function () {
    if (title.style.color == "") {
        title.style.color = "rgb(195, 0, 0)"
    } else {
        title.style.color = ""
    }
})


let isFirstImage = true;
const profile_image = document.getElementById("profile_image");
profile_image.addEventListener("click", changeImage)

function changeImage() {
    console.log(isFirstImage)
    if (isFirstImage === true) {
        profile_image.setAttribute("src", "source/my_profile2.jpg")
    } else {
        profile_image.setAttribute("src", "source/my_profile.jpg")
    }
    isFirstImage = !isFirstImage;
}