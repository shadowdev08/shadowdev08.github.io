import { rewards1, rewards2 } from "./reward.js"

// reward.html


rewards1.forEach(reward1 => {

    let card_container1 = document.createElement("div")
    card_container1.setAttribute("class", "card-container")

    let reward_img = document.createElement("img")
    reward_img.src = reward1.img;
    reward_img.setAttribute("class", "reward_img")

    let reward_detail = document.createElement("div")
    reward_detail.setAttribute("class", "reward_detail")

    let rewardp = document.createElement("p")
    let rewardb = document.createElement("b")
    rewardb.innerHTML = reward1.reward;

    rewardp.appendChild(rewardb);

    let rewardtitle = document.createElement("p")
    rewardtitle.innerHTML = "รายการ : " + reward1.title

    let ul_get = document.createElement("ul")
    ul_get.setAttribute("style", "margin-left: 30px;")

    reward1.get.forEach(get_detail => {
        let li_get = document.createElement("li")
        li_get.innerHTML = get_detail;
        ul_get.appendChild(li_get)
    });

    reward_detail.appendChild(rewardp)
    reward_detail.appendChild(rewardtitle)
    reward_detail.appendChild(ul_get)

    card_container1.appendChild(reward_img)
    card_container1.appendChild(reward_detail)
    console.log(reward_container1)

    var reward_container1 = document.getElementById("reward1");

    reward_container1.appendChild(card_container1)
});

const reward_container2 = document.getElementById("reward2");
rewards2.forEach(reward1 => {

    let card_container2 = document.createElement("div")
    card_container2.setAttribute("class", "card-container")

    let reward_img = document.createElement("img")
    reward_img.src = reward1.img;
    reward_img.setAttribute("class", "reward_img")

    let reward_detail = document.createElement("div")
    reward_detail.setAttribute("class", "reward_detail")

    let rewardp = document.createElement("p")
    let rewardb = document.createElement("b")
    rewardb.innerHTML = reward1.reward;

    rewardp.appendChild(rewardb);

    let rewardtitle = document.createElement("p")
    rewardtitle.innerHTML = "รายการ : " + reward1.title

    let ul_get = document.createElement("ul")
    ul_get.setAttribute("style", "margin-left: 30px;")

    reward1.get.forEach(get_detail => {
        let li_get = document.createElement("li")
        li_get.innerHTML = get_detail;
        ul_get.appendChild(li_get)
    });

    reward_detail.appendChild(rewardp)
    reward_detail.appendChild(rewardtitle)
    reward_detail.appendChild(ul_get)

    card_container2.appendChild(reward_img)
    card_container2.appendChild(reward_detail)

    reward_container2.appendChild(card_container2)
});

const title = document.getElementById("page_title");
title.addEventListener("click", function () {
    if (title.style.color == "") {
        title.style.color = "rgb(195, 0, 0)"
    } else {
        title.style.color = ""
    }
})