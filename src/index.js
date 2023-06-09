import { createCarte } from "./menu";
import { createContact } from "./contact";

const createIndex = () => {
    const parent = document.getElementById("content");

    const header = document.createElement("header");
    const nav = document.createElement("nav");
    const logo = document.createElement("img");
    logo.id = "index";
    logo.classList.add("logo");
    logo.src = "img/logo.png";
    logo.alt = "logo";
    const buttonMenu = document.createElement("button");
    buttonMenu.id = "menu";
    const textMenu = document.createTextNode("Navigation");
    buttonMenu.appendChild(textMenu);
    const buttonCarte = document.createElement("button");
    buttonCarte.id = "carte";
    buttonCarte.classList.add("menu-deroulant");
    const textCarte = document.createTextNode("Menu");
    buttonCarte.appendChild(textCarte);
    const buttonContact = document.createElement("button");
    buttonContact.id = "contact";
    buttonContact.classList.add("menu-deroulant");
    const textContact = document.createTextNode("Contact");
    buttonContact.appendChild(textContact);

    nav.appendChild(logo);
    nav.appendChild(buttonMenu);
    nav.appendChild(buttonCarte);
    nav.appendChild(buttonContact);
    header.appendChild(nav);

    const buttonOrder = document.createElement("button");
    buttonOrder.classList.add("order");
    const iconOrder = document.createElement("img");
    iconOrder.src = "img/order.svg";
    iconOrder.classList.add("icon");
    iconOrder.alt = "order";
    const titleOrder = document.createElement("h3");
    const textOrder = document.createTextNode("ORDER");

    titleOrder.appendChild(textOrder);
    buttonOrder.appendChild(iconOrder);
    buttonOrder.appendChild(titleOrder);

    header.appendChild(buttonOrder);
    parent.appendChild(header);

    const divPub = document.createElement("div");
    divPub.classList.add("pub");
    const weight = document.createElement("b");
    const pAldini = document.createElement("p");
    pAldini.classList.add("text-huge");
    const pAldiniText = document.createTextNode("¡ Aldini's Pizza !");
    pAldini.appendChild(pAldiniText);
    weight.appendChild(pAldini);
    const pHeart = document.createElement("p");
    pHeart.classList.add("text-medium");
    const citeHeart = document.createElement("cite");
    citeHeart.classList.add("text-medium");
    const pHeartText = document.createTextNode("The heart of Italy");
    citeHeart.appendChild(pHeartText);
    const bobText = document.createTextNode(" - Bob's Pizza");
    pHeart.appendChild(citeHeart);
    pHeart.appendChild(bobText);
    const br = document.createElement("br");
    const pPromotionel = document.createElement("p");
    pPromotionel.classList.add("text-small");
    const pPromotionelText = document.createTextNode("The quality of our products is unmatched, and their integrity and seriousness make Aldini's Pizza the international benchmark for ringed dough.");
    pPromotionel.appendChild(pPromotionelText);

    divPub.appendChild(weight);
    divPub.appendChild(pHeart);
    divPub.appendChild(br);
    divPub.appendChild(pPromotionel);
    parent.appendChild(divPub);

    const divUpperPage = document.createElement("div");
    divUpperPage.classList.add("upper-page");

    const divPizza = document.createElement("div");
    divPizza.classList.add("pizza");

    const imgPizza = document.createElement("img");
    imgPizza.id = "pizza-index";
    imgPizza.src = "img/full-pizza.png";
    imgPizza.alt = "pizza";
    const imgPart = document.createElement("img");
    imgPart.id = "pizza-index-part";
    imgPart.classList.add("pizza-index-part")
    imgPart.src = "img/part-pizza.png";
    imgPart.alt = "pizza slice";

    divPizza.appendChild(imgPizza);
    divPizza.appendChild(imgPart);
    divUpperPage.appendChild(divPizza);
    parent.appendChild(divUpperPage);
    
    const divFondJaune = document.createElement("div");
    divFondJaune.classList.add("fond-jaune");

    const pJaune = document.createElement("p");
    pJaune.classList.add("text-medium");
    const pJauneText = document.createTextNode("A gondola ride through the lands of taste!");
    pJaune.appendChild(pJauneText);
    const divDescContainer = document.createElement("div");
    divDescContainer.classList.add("description-container");

    const divDescription = document.createElement("div");
    divDescription.classList.add("description");

    const imgSavoir = document.createElement("img");
    imgSavoir.classList.add("savoir-faire");
    imgSavoir.src = "img/savoir-faire.png";
    imgSavoir.alt = "expertise"
    const pTechnique = document.createElement("p");
    pTechnique.classList.add("text-small");
    const techniqueText = document.createTextNode("An irreproachable technique, a team gifted with outstanding skills");
    pTechnique.appendChild(techniqueText);
    divDescription.appendChild(imgSavoir);
    divDescription.appendChild(pTechnique);

    const divDescriptionSec = document.createElement("div");
    divDescriptionSec.classList.add("description");

    const imgbio = document.createElement("img");
    imgbio.classList.add("produits-bio");
    imgbio.src = "img/bio.png";
    imgbio.alt = "bio products"
    const pBio = document.createElement("p");
    pBio.classList.add("text-small");
    const bioText = document.createTextNode("Local products picked the same day with a negative carbon footprint");
    pBio.appendChild(bioText);
    divDescriptionSec.appendChild(imgbio);
    divDescriptionSec.appendChild(pBio);

    divDescContainer.appendChild(divDescription);
    divDescContainer.appendChild(divDescriptionSec);
    divFondJaune.appendChild(pJaune);
    divFondJaune.appendChild(divDescContainer);

    parent.appendChild(divFondJaune);

    const divFondRouge = document.createElement("div");
    divFondRouge.classList.add("fond-rouge");

    parent.appendChild(divFondRouge);
}



function scrollListener(){
    let scrollpos = window.scrollY;
    const pizza = document.getElementById("pizza-index");
    const part = document.getElementById("pizza-index-part");
    
    const Media = () => {
        if (window.innerWidth >= 1920) return 756;
        if (window.innerWidth >= 1680) return 617;
        if (window.innerWidth >= 1440) return 700;
        if (window.innerWidth >= 1024) return 612;
        if (window.innerWidth <= 375) return 950;
    }
    
    const pizzaCoupee = () => {
        pizza.src = "img/pizza-coupee.png"
        part.classList.add("pizza-part-fixed");
        part.classList.remove("pizza-part");
    
    }
    const pizzaFull = () => {
        pizza.src = "img/full-pizza.png";
        part.classList.remove("pizza-part-fixed");
        part.classList.add("pizza-part");
    }
    
    window.addEventListener('scroll', function() { 
      scrollpos = window.scrollY;
    
      if (scrollpos >= Media()) { pizzaCoupee(); console.log(window.innerWidth); }
      else { pizzaFull() }
    });
    
}



function menuListener(){
    const openMenu = document.getElementById("menu");
    const menuDeroulant = document.getElementsByClassName("menu-deroulant");
    const logo = document.getElementById("index");
    const carte = document.getElementById("carte");
    const contact = document.getElementById("contact");

    openMenu.addEventListener("click", () => {
        let array = [...menuDeroulant];
        if (openMenu.classList.contains("open")){
            array.forEach(element => {
                element.style.visibility = "hidden";
            });
            openMenu.classList.remove("open");
        }
        else{
            array.forEach(element => {
                element.style.visibility = "visible";
            });
            openMenu.classList.add("open");
        }
    })

    logo.addEventListener("click", () => {
        const parent = document.getElementById("content");
        parent.innerHTML = '';
        createIndex();
        menuListener()
        scrollListener();
    });

    carte.addEventListener("click", () => {
        const parent = document.getElementById("content");
        parent.innerHTML = '';
        createCarte();
        menuListener();
    });

    contact.addEventListener("click", () => {
        const parent = document.getElementById("content");
        parent.innerHTML = '';
        createContact();
        menuListener();
    });
}
createIndex();
menuListener()
scrollListener();

export { createIndex };