export let home = "Home";
import narutoImg from "./naruto.jpg";
import Ramen1 from "./RamenBowlImage.png";
import Ramen2 from "./SpicyRamen.png";
import Ramen3 from "./tokyou ramen.png";
import Ramen4 from "./spicy Ramen.png";
import Ichikaru from "./ichikaru.png";
import logo from "./logo_design_png.png";

const content = document.querySelector('#content');
const HomeBtn = document.querySelector('#Home-btn');

function HOMEDOM()
{
    content.innerHTML = "";
    const mainHeading = document.createElement("div");
    mainHeading.classList.add("mainHeading")
    mainHeading.innerHTML = `
    <div class="mainName">
                <img src="${logo}" alt="ichikaru logo" class="main-logo">
                <h1 class="mainNameHeading">Ichikaru</h1>
                <p class="mainHeadingPara">ラーメン Ramen</p>
            </div>
    <img src="${narutoImg}" class="narutoImage" alt="Naruto Image">`

    const rameninfo = document.createElement('div');
    rameninfo.classList.add("rameninfo");

    rameninfo.innerHTML = `
    <h1 class="ramen-head">ICHIKARU'S SIGNATURE RAMENS</h1>
            <div class="cards-section">
            <div class="RamenCard">
                <img src="${Ramen1}" class="ramenimage" alt="">
                <p class="ramen-name">Classic Konoha Ramen</p>
            </div>
            <div class="RamenCard">
                <img src="${Ramen2}" class="ramenimage" alt="">
                <p class="ramen-name">Deluxe Naruto Ramen</p>
            </div>
            <div class="RamenCard">
                <img src="${Ramen3}" class="ramenimage" alt="">
                <p class="ramen-name">Hidden Leaf Tonkotsu</p>
            </div>
            <div class="RamenCard">
                <img src="${Ramen4}" class="ramenimage" alt="">
                <p class="ramen-name">Fire Dragon Ramen</p>
            </div>
            </div><br>
            ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ `
        
    

    const head = document.createElement("h1");
    head.classList.add("chefHeading");
    head.textContent = "MEET TEUCHI – THE MASTER OF RAMEN :";

    const aboutSection = document.createElement("div");
    aboutSection.classList.add("aboutSection");
    aboutSection.innerHTML=`
    <img src="${Ichikaru}" alt="Ichikaru image" class="ichikaruImg">
            <p class="chefInfo"><span style="font-size: 24px; font-weight: 900;text-shadow: 2px 2px 8px rgba(0,0,0,0.2);">Founder of Ichiraku Ramen </span>
                <br>
                <b>Teuchi</b> is the heart and soul of Ichiraku Ramen. For over 30 years, 
                    he has dedicated his life to crafting comforting bowls of ramen using 
                    traditional techniques and his own secret broth.<br>
                    &#x25C9 Handmade noodles every morning<br>  
                    &#x25C9 Broth simmered for 12 hours<br>
                    &#x25C9 Loved by ninjas across the Hidden Leaf<br><br>
                    <i>“A bowl of ramen can heal even the hardest day.”</i><span style="margin-left: 1.5em;">-Teuchi</span>
        </p>`

    content.appendChild(mainHeading);
    content.appendChild(rameninfo);
    content.appendChild(head);
    content.appendChild(aboutSection);
}

export {HOMEDOM};