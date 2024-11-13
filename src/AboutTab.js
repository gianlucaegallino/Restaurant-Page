
function createAbout() {

    //Hide Overflow
    const body = document.querySelector("#ody");
    body.classList.add("hideOverflow");
    window.scrollTo(0,0);

    //Wipe previous contents
    const contentSection = document.querySelector("#content")
    contentSection.innerHTML = ""

    //Create required elements


    //append Children

}

export { createAbout as createAbout }