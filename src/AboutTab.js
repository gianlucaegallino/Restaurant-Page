
function createAbout() {

    //Hide Overflow
    const body = document.querySelector("body");
    body.classList.add("hideOverflow");
    window.scrollTo(0,0);

    //Wipe previous contents
    const contentSection = document.querySelector("#content")
    contentSection.innerHTML = ""

    //Create required elements

    const aboutContent = document.createElement("div")

    aboutContent.setAttribute("id", "aboutContent")

    // Sections

    const aboutUsSection = document.createElement("div")
    aboutUsSection.setAttribute("id", "aboutUsSection")

    const openingHoursSection = document.createElement("div")
    openingHoursSection.setAttribute("id", "openingHoursSection")

    const locationSection = document.createElement("div")
    locationSection.setAttribute("id", "locationSection")

    //Headings

    const aboutUsHeading = document.createElement("h1")

    aboutUsHeading.setAttribute("id", "aboutUsHeading")
    aboutUsHeading.setAttribute("class", "importantHeading")
    aboutUsHeading.textContent = "About Us"


    const openingHoursHeading = document.createElement("h2")

    openingHoursHeading.setAttribute("id", "openingHoursHeading")
    openingHoursHeading.setAttribute("class", "secondaryHeading")
    openingHoursHeading.textContent = "Opening Hours"

   
    const locationHeading = document.createElement("h2")

    locationHeading.setAttribute("id", "locationHeading")
    locationHeading.setAttribute("class", "secondaryHeading")
    locationHeading.textContent = "Location"

    //Texts

    const aboutText = document.createElement("p")
    const hourText1 = document.createElement("p")
    const hourText2 = document.createElement("p")
    const hourText3 = document.createElement("p")
    const locationText = document.createElement("p")

    aboutText.setAttribute("class", "aboutGeneralText")
    hourText1.setAttribute("class", "aboutSecondaryText")
    hourText2.setAttribute("class", "aboutSecondaryText")
    hourText3.setAttribute("class", "aboutSecondaryText")
    locationText.setAttribute("class", "aboutSecondaryText")

    aboutText.textContent = "Welcome to FreshEats, where every dish is crafted with love, local ingredients, and a dedication to flavor and health. Our restaurant began with a vision: to bring the freshest farm-to-table meals to the heart of the city. At FreshEats, we believe in the beauty of simplicity, using high-quality, seasonal ingredients to create wholesome meals that nourish the body and delight the senses. Whether you're joining us for a hearty breakfast, a vibrant lunch, or a cozy dinner, you’ll find dishes that cater to every taste and dietary preference. Our commitment to sustainability means that we source from nearby farms and producers, supporting local businesses and ensuring our customers enjoy the very best nature has to offer.";
    hourText1.textContent = "Monday - Friday: 7:00 AM - 9:00 PM";
    hourText2.textContent = "Saturday: 8:00 AM - 10:00 PM"
    hourText3.textContent = "Sunday: 9:00 AM - 8:00 PM"
    locationText.textContent = "Conveniently located in downtown L.A, FreshEats offers a warm and welcoming retreat from the bustling city streets. You'll find us nestled at 123 Harvest Avenue, just a short walk from the central train station and accessible by all major bus lines. With ample indoor seating, a charming patio, and a cozy ambiance, FreshEats is the perfect place for a casual meal with friends, family gatherings, or an inspiring workspace for those looking to fuel their day with fresh flavors."


    //append Children

    contentSection.appendChild(aboutContent);

    aboutContent.appendChild(aboutUsSection);
    aboutContent.appendChild(openingHoursSection);
    aboutContent.appendChild(locationSection);

    aboutUsSection.appendChild(aboutUsHeading);
    openingHoursSection.appendChild(openingHoursHeading);
    locationSection.appendChild(locationHeading);

    aboutUsSection.appendChild(aboutText);
    openingHoursSection.appendChild(hourText1);
    openingHoursSection.appendChild(hourText2);
    openingHoursSection.appendChild(hourText3);
    locationSection.appendChild(locationText);
}

export { createAbout as createAbout }