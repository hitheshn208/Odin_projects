const content = document.querySelector('#content');
import logo from "./logo_png.png";
import narutoGreet from "./Naruto-Uzumaki-PNG-Pic.png";

function CONTACTDOM()
{
    content.innerHTML = "";

    const contactUsHeading = document.createElement("div");
    contactUsHeading.classList.add("contactUsHeading");

    contactUsHeading.innerHTML = `<img src="${logo}" alt="ichikaru_logo" class="logo-image">
        <img src="${narutoGreet}" alt="" class="narutoEating" >`
    content.appendChild(contactUsHeading);

    const ContactSection = document.createElement("section");
    ContactSection.classList.add("contact-section");
    const ContactHeading = document.createElement("h1");
    ContactHeading.textContent = "CONTACT US ";
    ContactHeading.classList.add("contact-heading");

    const ContactSub = document.createElement("p");
    ContactSub.textContent = "We'd love to hear from you! 🍜";
    ContactSub.classList.add("contact-sub");

    ContactSection.appendChild(ContactHeading);
    ContactSection.appendChild(ContactSub);

    const ContactContainer = document.createElement("div")
    ContactContainer.classList.add("contact-container");

    const leftcol = document.createElement("div");
    leftcol.classList.add("contact-form");
    leftcol.innerHTML = ` <h2>Send us a Message</h2>

            <label>Your Name</label>
            <input type="text" placeholder="Enter your name">

            <label>Email</label>
            <input type="email" placeholder="Enter your email">

            <label>Message</label>
            <textarea rows="4" placeholder="Write your message..."></textarea>

            <button class="contact-btn hover-shake">Submit</button>`;

    const rightcol = document.createElement("div");
    rightcol.classList.add("contact-info");
    rightcol.innerHTML=`<h2>Contact Details</h2>

            <p>📍<strong>Hidden Leaf Village, Fire Country</strong></p>
            <p>📞 +91 98765 43210</p>
            <p>✉️ ichiraku@ramen.com</p>
            <p>🕒 Mon–Sun: 10:00 AM – 10:00 PM</p>

            <div class="divider"></div>

            <h3>Follow Us</h3>
            <div class="socials">
                <a href="#">Instagram</a>
                <a href="#">YouTube</a>
                <a href="#">Twitter</a>
            </div>

            <div class="divider"></div>

            <h3>Map Location</h3>
            <div class="map-box">
                <p>📍 Ichiraku Ramen – Hidden Leaf Village</p>
            </div>`

    ContactContainer.appendChild(leftcol);
    ContactContainer.appendChild(rightcol);
    ContactSection.appendChild(ContactContainer);    
    content.appendChild(ContactSection);
}

export{CONTACTDOM};
export let contact = "Contact Us";