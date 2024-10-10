//Import .css
import "./normalize.css"
import "./styles.css";

// import modules
import { parallax } from "./parallaxFunction";
import { createHome } from "./HomeTab";
import { createMenu } from "./MenuTab";
import { createAbout } from "./AboutTab";

//Initial Home Creation
createHome();
document.addEventListener("mousemove", parallax);

//Logo listener, same as home button
document.querySelector(".mainLogo").addEventListener("click", function () {
    createHome();
    document.addEventListener("mousemove", parallax);
})

//Home Button listener
document.querySelector(".homeBtn").addEventListener("click", function () {
    createHome();
    document.addEventListener("mousemove", parallax);
})

//Menu Button listener
document.querySelector(".menuBtn").addEventListener("click", function () {
    createMenu();
    document.removeEventListener("mousemove", parallax);
})

//About Button listener
document.querySelector(".aboutBtn").addEventListener("click", function () {
    createAbout();
    document.removeEventListener("mousemove", parallax);
})