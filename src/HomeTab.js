import heroImage from "./nadine-primeau--bLkT8wGV0I-unsplash.jpg"
function createHome() {

    //Hide Overflow
    const body = document.querySelector("body");
    body.classList.add("hideOverflow");
    window.scrollTo(0,0);

    //Wipe previous contents
    const contentSection = document.querySelector("#content")
    contentSection.innerHTML = ""

    //Create required elements
    const homeContent = document.createElement("div");
    homeContent.setAttribute("id", "homeContent")

    const heroImg = document.createElement("img");
    heroImg.src = heroImage;
    heroImg.setAttribute("class", "heroImg parallaxElement");
    heroImg.setAttribute("alt", "heroImg");

    const heroSection = document.createElement("div");
    heroSection.setAttribute("id", "heroSection");

    const heroText = document.createElement("h1");
    heroText.setAttribute("id", "heroText");
    heroText.textContent = "The healthiest food in the area, at the tip of your fingers.";

    const heroBtn = document.createElement("button");
    heroBtn.setAttribute("id", "heroBtn");
    heroBtn.textContent = "See our menu"

    //append Children

    contentSection.appendChild(homeContent);

    heroSection.appendChild(heroText);
    heroSection.appendChild(heroBtn);

    homeContent.appendChild(heroImg);
    homeContent.appendChild(heroSection);




}



export { createHome as createHome }