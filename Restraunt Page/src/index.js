import { contact, CONTACTDOM } from "./ContactUs";
import { home, HOMEDOM } from "./Home";
import { Menu, MAINDOM } from "./Menu";
import "./styles.css";
import "./menustyle.css";
import "./contactus.css";
const content = document.querySelector('#content');
const MenuBtn = document.querySelector('#Menu-btn');
const HomeBtn = document.querySelector('#Home-btn');
const ContactBtn = document.querySelector('#Contact-btn');
const nav = document.querySelector('nav');

console.log(contact);
console.log(home);
console.log(Menu);


window.addEventListener("load", ()=>{
    HOMEDOM();
    HomeBtn.style.cssText = "border-bottom : 2px white solid";
    MenuBtn.style.cssText = "border-bottom :none";
    ContactBtn.style.cssText = "border-bottom : none";
});

MenuBtn.addEventListener("click", ()=>{
    MAINDOM();
    HomeBtn.style.cssText = "border-bottom : none";
    MenuBtn.style.cssText = "border-bottom : 2px white solid";
    ContactBtn.style.cssText = "border-bottom : none";
});

HomeBtn.addEventListener("click", ()=>{
    HOMEDOM();
    HomeBtn.style.cssText = "border-bottom : 2px white solid";
    MenuBtn.style.cssText = "border-bottom :none";
    ContactBtn.style.cssText = "border-bottom : none";
});

ContactBtn.addEventListener("click", ()=>{
    CONTACTDOM();
    HomeBtn.style.cssText = "border-bottom : none";
    MenuBtn.style.cssText = "border-bottom : none";
    ContactBtn.style.cssText = "border-bottom : 2px white solid";
});

    let pre = window.scrollY;
  window.addEventListener("scroll", ()=>{
    let cur = window.scrollY;
    
    if(cur>pre)
    {
        nav.style.cssText="transform : translateY(-60px)";
        pre = window.scrollY;
    }
    else
    {
        nav.style.cssText="transform : translateY(0px)";
        pre = window.scrollY;
    }
});

console.log(contact);
console.log(home);
console.log(Menu);
