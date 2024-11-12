import brooklynBurger from "./brooklynBurger.jpg"
import tokyoStirfry from "./tokyoStirfry.jpg"
import MunichCakes from "./MunichCakes.jpg"
import monzaTiramisu from "./monzaTiramisu.jpg"
import buenosairesBlossom from "./buenosairesBlossom.jpg"
import madridSangria from "./madridSangria.jpg"



function createMenu() {

    //Wipe previous contents
    const contentSection = document.querySelector("#content")
    contentSection.innerHTML = ""

    //Create required elements

    const menuContent = document.createElement("div");
    menuContent.setAttribute("id", "menuContent");

    contentSection.appendChild(menuContent);

    const menuArea = document.createElement("div");
    menuArea.setAttribute("id", "menuArea");

    menuContent.appendChild(menuArea);
    
    const menuHeaderTitle = document.createElement("h1");
    menuHeaderTitle.setAttribute("id","menuHeaderTitle");
    menuHeaderTitle.textContent = "Our Menu"

    menuArea.appendChild(menuHeaderTitle);

    const menuSection1 = document.createElement("div");
    menuSection1.setAttribute("class","menuSection");

    const menuSection2 = document.createElement("div");
    menuSection2.setAttribute("class","menuSection");

    const menuSection3 = document.createElement("div");
    menuSection3.setAttribute("class","menuSection");

    menuArea.appendChild(menuSection1);
    menuArea.appendChild(menuSection2);
    menuArea.appendChild(menuSection3);

    const menuSectionTitle1 = document.createElement("h2");
    menuSectionTitle1.setAttribute("class","menuSectionTitle");
    menuSectionTitle1.textContent = "Main Dishes"

    const menuSectionTitle2 = document.createElement("h2");
    menuSectionTitle2.setAttribute("class","menuSectionTitle");
    menuSectionTitle2.textContent = "Desserts"
     

    const menuSectionTitle3= document.createElement("h2");
    menuSectionTitle3.setAttribute("class","menuSectionTitle");
    menuSectionTitle3.textContent = "Drinks"
    
    menuSection1.appendChild(menuSectionTitle1);
    menuSection2.appendChild(menuSectionTitle2);
    menuSection3.appendChild(menuSectionTitle3);

    const menuItems1 = document.createElement("div"); 
    menuItems1.setAttribute("class","menuItems");

    const menuItems2 = document.createElement("div"); 
    menuItems2.setAttribute("class","menuItems");

    const menuItems3 = document.createElement("div"); 
    menuItems3.setAttribute("class","menuItems");

    menuSection1.appendChild(menuItems1);
    menuSection2.appendChild(menuItems2);
    menuSection3.appendChild(menuItems3);

    const menuItem1 = document.createElement("div");
    const menuItem2 = document.createElement("div"); 
    const menuItem3 = document.createElement("div");  
    const menuItem4 = document.createElement("div"); 
    const menuItem5 = document.createElement("div"); 
    const menuItem6 = document.createElement("div"); 

    menuItem1.setAttribute("class","menuItem");
    menuItem2.setAttribute("class","menuItem");
    menuItem3.setAttribute("class","menuItem");
    menuItem4.setAttribute("class","menuItem");
    menuItem5.setAttribute("class","menuItem");
    menuItem6.setAttribute("class","menuItem");

    menuItems1.appendChild(menuItem1);
    menuItems1.appendChild(menuItem2);
    menuItems2.appendChild(menuItem3);
    menuItems2.appendChild(menuItem4);
    menuItems3.appendChild(menuItem5);
    menuItems3.appendChild(menuItem6);

    const menuItemImg1= document.createElement("img"); 
    const menuItemImg2= document.createElement("img"); 
    const menuItemImg3= document.createElement("img"); 
    const menuItemImg4= document.createElement("img"); 
    const menuItemImg5= document.createElement("img"); 
    const menuItemImg6= document.createElement("img"); 

    menuItemImg1.setAttribute("class", "menuItemImg");
    menuItemImg2.setAttribute("class", "menuItemImg");
    menuItemImg3.setAttribute("class", "menuItemImg");
    menuItemImg4.setAttribute("class", "menuItemImg");
    menuItemImg5.setAttribute("class", "menuItemImg");
    menuItemImg6.setAttribute("class", "menuItemImg");

    menuItemImg1.setAttribute("src", brooklynBurger);
    menuItemImg1.setAttribute("alt", "brooklyn burger");

    menuItemImg2.setAttribute("src", tokyoStirfry);
    menuItemImg2.setAttribute("alt", "tokyo stirfry");

    menuItemImg3.setAttribute("src", MunichCakes);
    menuItemImg3.setAttribute("alt", "munich cakes");

    menuItemImg4.setAttribute("src", monzaTiramisu);
    menuItemImg4.setAttribute("alt", "monza tiramisu");

    menuItemImg5.setAttribute("src", buenosairesBlossom);
    menuItemImg5.setAttribute("alt", "buenos aires blossom");
    
    menuItemImg6.setAttribute("src", madridSangria);
    menuItemImg6.setAttribute("alt", "madrid Sangria");


    menuItem1.appendChild(menuItemImg1);
    menuItem2.appendChild(menuItemImg2);
    menuItem3.appendChild(menuItemImg3);
    menuItem4.appendChild(menuItemImg4);
    menuItem5.appendChild(menuItemImg5);
    menuItem6.appendChild(menuItemImg6);


    
        
    const menuItemName1= document.createElement("h3");
    const menuItemName2= document.createElement("h3"); 
    const menuItemName3= document.createElement("h3"); 
    const menuItemName4= document.createElement("h3"); 
    const menuItemName5= document.createElement("h3"); 
    const menuItemName6= document.createElement("h3"); 
            
    menuItemName1.setAttribute("class", "menuItemName");
    menuItemName2.setAttribute("class", "menuItemName");
    menuItemName3.setAttribute("class", "menuItemName");
    menuItemName4.setAttribute("class", "menuItemName");
    menuItemName5.setAttribute("class", "menuItemName");
    menuItemName6.setAttribute("class", "menuItemName");

    menuItemName1.textContent = "Brooklyn Burger";
    menuItemName2.textContent = "Tokyo Stirfry";
    menuItemName3.textContent = "Munich cakes";
    menuItemName4.textContent = "Monza Tiramisu";
    menuItemName5.textContent = "Buenos Aires Blossom";
    menuItemName6.textContent = "Madrid Sangria";

    menuItem1.appendChild(menuItemName1);
    menuItem2.appendChild(menuItemName2);
    menuItem3.appendChild(menuItemName3);
    menuItem4.appendChild(menuItemName4);
    menuItem5.appendChild(menuItemName5);
    menuItem6.appendChild(menuItemName6);


    const menuItemDescription1= document.createElement("p");
    const menuItemDescription2= document.createElement("p"); 
    const menuItemDescription3= document.createElement("p"); 
    const menuItemDescription4= document.createElement("p"); 
    const menuItemDescription5= document.createElement("p"); 
    const menuItemDescription6= document.createElement("p"); 
            
    menuItemDescription1.setAttribute("class", "menuItemDescription");
    menuItemDescription2.setAttribute("class", "menuItemDescription");
    menuItemDescription3.setAttribute("class", "menuItemDescription");
    menuItemDescription4.setAttribute("class", "menuItemDescription");
    menuItemDescription5.setAttribute("class", "menuItemDescription");
    menuItemDescription6.setAttribute("class", "menuItemDescription");

    menuItemDescription1.textContent = "Beef patty served between white buns, with bacon, cheese and lettuce.";
    menuItemDescription2.textContent = "Pasta, tomato, beef, and shrimp stirfry, topped with fresh spring onion.";
    menuItemDescription3.textContent = "Soft cake discs with vanilla filling topped with chocolate and cherries.";
    menuItemDescription4.textContent = "Italian tiramisu pudding, imbued with coffee and chocolate, with a light cocoa powdering on top.";
    menuItemDescription5.textContent = "Gin and tonic with lemon and apple cider, topped with flowers.";
    menuItemDescription6.textContent = "Red wine with soda, orange, sugar and watermelon.";

    menuItem1.appendChild(menuItemDescription1);
    menuItem2.appendChild(menuItemDescription2);
    menuItem3.appendChild(menuItemDescription3);
    menuItem4.appendChild(menuItemDescription4);
    menuItem5.appendChild(menuItemDescription5);
    menuItem6.appendChild(menuItemDescription6);


    //append Children

}

export { createMenu as createMenu }