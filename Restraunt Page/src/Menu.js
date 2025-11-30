const content = document.querySelector('#content');
const MenuBtn = document.querySelector('#Menu-btn');
import narutoEating from "./naruto_and_jiraiya_eating_ramen_at_ichiraku_by_theheroofkonoha_d5pcl1u.png"
import logo from "./logo_png.png";
import menu_bowl from "./menu_bowl.png";

function MAINDOM()
{
    content.innerHTML = "";

    const menuMainHeading = document.createElement("div");
    menuMainHeading.classList.add("menuMainHeading");

    const narutoImage = document.createElement("img");
    narutoImage.src = narutoEating;
    narutoImage.classList.add("narutoEating");
    const logoImg = document.createElement("img");
    logoImg.src= logo;
    logoImg.classList.add("logo-image");
    
    menuMainHeading.appendChild(logoImg);
    menuMainHeading.appendChild(narutoImage);
   

    content.appendChild(menuMainHeading);

    const menuSection = document.createElement("section");
    menuSection.classList.add("menu-section");

    const heading1 = document.createElement("h1");
    heading1.innerHTML =` <h1 class="menu-main-heading">MENU <img src="${menu_bowl}" alt="" class="menu_bowl"></h1>`

    const menuColumns = document.createElement("div");
    menuColumns.classList.add("menu-columns");

    const leftCol = document.createElement("div");
    leftCol.classList.add("menu-col");
    leftCol.innerHTML = `
            <h2 class="menu-category">Ramen<br>ラーメン</h2>
            <p class="menu-sub">Ichiraku's Signature Bowls</p>
            <div class="menu-line"></div>

            <div class="menu-item">
                <div class="menu-item-name">Classic Konoha Ramen</div>
                <div class="menu-item-desc">light soy broth, narutomaki, green onions, egg</div>
                <div class="menu-price">₹280</div>
                ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
            </div>
            

            <div class="menu-item">
                <div class="menu-item-name">Deluxe Naruto Ramen</div>
                <div class="menu-item-desc">extra chashu, bamboo shoots, egg, rich broth</div>
                <div class="menu-price">₹350</div>
                ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

            </div>

            <div class="menu-item">
                <div class="menu-item-name">Hidden Leaf Tonkotsu</div>
                <div class="menu-item-desc">pork broth, naruto swirl, soft-boiled egg</div>
                <div class="menu-price">₹330</div>
                ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

            </div>

            <div class="menu-item">
                <div class="menu-item-name">Fire Dragon Ramen</div>
                <div class="menu-item-desc">spicy miso broth, chili oil, chashu, red pepper</div>
                <div class="menu-price">₹360</div>
                ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
            </div>

            <div class="menu-item">
    <div class="menu-item-name">Shoyu Ninja Ramen</div>
    <div class="menu-item-desc">soy broth, bamboo shoots, menma, chashu pork</div>
    <div class="menu-price">₹260</div>
    ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
</div>

<div class="menu-item">
    <div class="menu-item-name">Black Garlic Tonkotsu</div>
    <div class="menu-item-desc">creamy pork broth, black garlic oil, chashu, spring onion</div>
    <div class="menu-price">₹380</div>
    ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
</div>

<div class="menu-item">
    <div class="menu-item-name">Miso Warrior Ramen</div>
    <div class="menu-item-desc">miso broth, corn, butter, bean sprouts, narutomaki</div>
    <div class="menu-price">₹300</div>
    ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
</div>

<div class="menu-item">
    <div class="menu-item-name">Seafood Tempest Ramen</div>
    <div class="menu-item-desc">shrimp, squid, fish cake, soy broth, wakame</div>
    <div class="menu-price">₹420</div>
    ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
</div>

<div class="menu-item">
    <div class="menu-item-name">Curry Katsu Ramen</div>
    <div class="menu-item-desc">fried chicken katsu, curry broth, scallions</div>
    <div class="menu-price">₹350</div>
    ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
</div>

<div class="menu-item">
    <div class="menu-item-name">Spicy Volcano Ramen</div>
    <div class="menu-item-desc">chili paste, garlic, miso broth, chashu, hot oil</div>
    <div class="menu-price">₹360</div>
    ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
</div>

<div class="menu-item">
    <div class="menu-item-name">Veggie Garden Ramen</div>
    <div class="menu-item-desc">vegetable broth, tofu, mushrooms, cabbage, corn</div>
    <div class="menu-price">₹250</div>
    ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
</div>

<div class="menu-item">
    <div class="menu-item-name">Samurai Butter Corn Ramen</div>
    <div class="menu-item-desc">miso broth, sweet corn, butter, pork slices</div>
    <div class="menu-price">₹310</div>
</div>` ;
    
    const rightCol = document.createElement("div");
    rightCol.classList.add("menu-col");
    rightCol.innerHTML=`<h2 class="menu-category">Sides <br> サイドメニュー</h2>
            <p class="menu-sub">Perfect With Your Ramen</p>
            <div class="menu-line"></div>

            <div class="menu-item">
                <div class="menu-item-name">Gyoza</div>
                <div class="menu-item-desc">pan-fried dumplings filled with pork & cabbage</div>
                <div class="menu-price">₹180</div>
                ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
            </div>

            <div class="menu-item">
                <div class="menu-item-name">Takoyaki</div>
                <div class="menu-item-desc">crispy octopus balls topped with mayo & bonito</div>
                <div class="menu-price">₹150</div>
                ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
            </div>

            <div class="menu-item">
                <div class="menu-item-name">Onigiri</div>
                <div class="menu-item-desc">rice ball with tuna mayo filling</div>
                <div class="menu-price">₹120</div>
                ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
            </div>

            <div class="menu-item">
                <div class="menu-item-name">Miso Soup</div>
                <div class="menu-item-desc">classic broth with tofu, seaweed, green onion</div>
                <div class="menu-price">₹90</div>
                ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
            </div>
            <div class="menu-item">
    <div class="menu-item-name">Chicken Karaage</div>
    <div class="menu-item-desc">crispy fried chicken bites with lemon</div>
    <div class="menu-price">₹180</div>
                ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

</div>

<div class="menu-item">
    <div class="menu-item-name">Agedashi Tofu</div>
    <div class="menu-item-desc">deep-fried tofu in warm soy-dashi broth</div>
    <div class="menu-price">₹160</div>
                ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

</div>

<div class="menu-item">
    <div class="menu-item-name">Ebi Tempura</div>
    <div class="menu-item-desc">crispy shrimp tempura</div>
    <div class="menu-price">₹220</div>
                ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

</div>

<div class="menu-item">
    <div class="menu-item-name">Edamame</div>
    <div class="menu-item-desc">steamed soybeans with sea salt</div>
    <div class="menu-price">₹120</div>
                ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

</div>

<div class="menu-item">
    <div class="menu-item-name">Chicken Yakitori</div>
    <div class="menu-item-desc">grilled chicken skewers with tare glaze</div>
    <div class="menu-price">₹150</div>
                ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

</div>

<div class="menu-item">
    <div class="menu-item-name">Nori Fries</div>
    <div class="menu-item-desc">fries tossed with seaweed seasoning</div>
    <div class="menu-price">₹140</div>
                ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

</div>

<div class="menu-item">
    <div class="menu-item-name">Kimchi Bowl</div>
    <div class="menu-item-desc">spicy Korean fermented cabbage</div>
    <div class="menu-price">₹100</div>
                ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

</div>

<div class="menu-item">
    <div class="menu-item-name">Shrimp Gyoza</div>
    <div class="menu-item-desc">pan-fried dumplings filled with shrimp & veggies</div>
    <div class="menu-price">₹200</div>
</div>`;
        
    menuColumns.appendChild(leftCol);
    menuColumns.appendChild(rightCol);
    menuSection.appendChild(heading1);
    menuSection.appendChild(menuColumns);

    content.appendChild(menuSection);
}

export {MAINDOM};
export let Menu = "Menu";
