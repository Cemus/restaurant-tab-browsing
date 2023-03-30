function createIndex(){
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

function createCarte(){
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

    const divContainer = document.createElement("div");
    divContainer.classList.add("container");

    const titlePage = document.createElement("h1");
    titlePage.classList.add("text-huge");
    titlePage.classList.add("title-page");
    const titlePageText = document.createTextNode("On the menu:");
    titlePage.appendChild(titlePageText);
    divContainer.appendChild(titlePage);

    const divMenu1 = document.createElement("div");
    divMenu1.classList.add("menu");

    const imgPizza1 = document.createElement("img");
    imgPizza1.classList.add("pizza-menu");
    imgPizza1.src = "img/pizza-index.png";
    imgPizza1.alt = "pizza";

    divMenu1.appendChild(imgPizza1);

    const divInformations1 = document.createElement("div");
    divInformations1.classList.add("informations");

    const margherita = document.createElement("h3");
    margherita.classList.add("text-medium");
    margherita.classList.add("nom");
    const margheritaText = document.createTextNode("Margherita");
    margherita.appendChild(margheritaText);
    const ingredientMar = document.createElement("p");
    ingredientMar.classList.add("text-small");
    const ingredientMarText = document.createTextNode("Mozzarella, olives");
    ingredientMar.appendChild(ingredientMarText);
    const prixMar = document.createElement("p");
    prixMar.classList.add("text-medium");
    prixMar.classList.add("price");
    const prixMarText = document.createTextNode("$ 10.49");
    prixMar.appendChild(prixMarText);
    divInformations1.appendChild(margherita);
    divInformations1.appendChild(ingredientMar);
    divInformations1.appendChild(prixMar);
    divMenu1.appendChild(divInformations1);
    divContainer.appendChild(divMenu1);

    const divMenu2 = document.createElement("div");
    divMenu2.classList.add("menu");

    const imgPizza2 = document.createElement("img");
    imgPizza2.classList.add("pizza-menu");
    imgPizza2.src = "img/pizza-index.png";
    imgPizza2.alt = "pizza";

    divMenu2.appendChild(imgPizza2);

    const divInformations2 = document.createElement("div");
    divInformations2.classList.add("informations");

    const quattro = document.createElement("h3");
    quattro.classList.add("text-medium");
    quattro.classList.add("nom");
    const quattroText = document.createTextNode("Quattro formaggi");
    quattro.appendChild(quattroText);
    const ingredientQuattro = document.createElement("p");
    ingredientQuattro.classList.add("text-small");
    const ingredientQuattroText = document.createTextNode("Mozzarella, goat cheese, Roquefort, raclette");
    ingredientQuattro.appendChild(ingredientQuattroText);
    const prixQuattro = document.createElement("p");
    prixQuattro.classList.add("text-medium");
    prixQuattro.classList.add("price");
    const prixQuattroText = document.createTextNode("$ 10.49");
    prixQuattro.appendChild(prixQuattroText);
    divInformations2.appendChild(quattro);
    divInformations2.appendChild(ingredientQuattro);
    divInformations2.appendChild(prixQuattro);
    divMenu2.appendChild(divInformations2);
    divContainer.appendChild(divMenu2);

    const divMenu3 = document.createElement("div");
    divMenu3.classList.add("menu");

    const imgPizza3 = document.createElement("img");
    imgPizza3.classList.add("pizza-menu");
    imgPizza3.src = "img/pizza-index.png";
    imgPizza3.alt = "pizza";

    divMenu3.appendChild(imgPizza3);

    const divInformations3 = document.createElement("div");
    divInformations3.classList.add("informations");

    const veggie = document.createElement("h3");
    veggie.classList.add("text-medium");
    veggie.classList.add("nom");
    const veggieText = document.createTextNode("Veggie");
    veggie.appendChild(veggieText);
    const ingredientVeggie = document.createElement("p");
    ingredientVeggie.classList.add("text-small");
    const ingredientVeggieText = document.createTextNode("Mozzarella, mushroom, onions, 3 peppers, olives");
    ingredientVeggie.appendChild(ingredientVeggieText);
    const prixVeggie = document.createElement("p");
    prixVeggie.classList.add("text-medium");
    prixVeggie.classList.add("price");
    const prixVeggieText = document.createTextNode("$ 10.49");
    prixVeggie.appendChild(prixVeggieText);
    divInformations3.appendChild(veggie);
    divInformations3.appendChild(ingredientVeggie);
    divInformations3.appendChild(prixVeggie);
    divMenu3.appendChild(divInformations3);
    divContainer.appendChild(divMenu3);

    const fondRouge = document.createElement("div");
    fondRouge.classList.add("fond-rouge");
    divContainer.appendChild(fondRouge);
    parent.appendChild(divContainer);

}

function createContact(){
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

    const divContainer = document.createElement("div");
    divContainer.classList.add("container");



    const titleContact = document.createElement("h1");
    titleContact.classList.add("text-huge");
    titleContact.classList.add("title-page");
    const titleContactText = document.createTextNode("Contact us !");
    titleContact.appendChild(titleContactText);

    divContainer.appendChild(titleContact);

    const divContactContainer = document.createElement("div");
    divContactContainer.classList.add("contact-container");

    const contact = document.createElement("div");
    contact.classList.add("contact");

    const location = document.createElement("h3");
    location.classList.add("text-medium");
    const locationText = document.createTextNode("Location :");
    const address = document.createElement("p");
    address.classList.add("text-small");
    const addressText = document.createTextNode("221B Baker Street");
    const london = document.createElement("p");
    london.classList.add("text-small");
    const londonText = document.createTextNode("London");

    location.appendChild(locationText);
    contact.appendChild(location);
    address.appendChild(addressText);
    contact.appendChild(address);
    london.appendChild(londonText);
    contact.appendChild(london);

    divContactContainer.appendChild(contact);

    const contact2 = document.createElement("div");
    contact2.classList.add("contact");

    const hours = document.createElement("h3");
    hours.classList.add("text-medium");
    const hoursText = document.createTextNode("Hours");
    const days = document.createElement("p");
    days.classList.add("text-small");
    const daysText = document.createTextNode("Monday - Saturday");
    const theHours = document.createElement("p");
    theHours.classList.add("text-small");
    const theHoursText = document.createTextNode("11 am - 11 pm");

    hours.appendChild(hoursText);
    contact2.appendChild(hours);
    days.appendChild(daysText);
    contact2.appendChild(days);
    theHours.appendChild(theHoursText);
    contact2.appendChild(theHours);

    divContactContainer.appendChild(contact2);

    const contact3 = document.createElement("div");
    contact3.classList.add("contact");

    const informations = document.createElement("h3");
    informations.classList.add("text-medium");
    const informationsText = document.createTextNode("Contact");
    const phone = document.createElement("p");
    phone.classList.add("text-small");
    const phoneText = document.createTextNode("000 - 000 - 000");
    const mail = document.createElement("p");
    mail.classList.add("text-small");
    const mailText = document.createTextNode("4LD1N1P1ZZ4@something.com");

    informations.appendChild(informationsText);
    contact3.appendChild(informations);
    phone.appendChild(phoneText);
    contact3.appendChild(phone);
    mail.appendChild(mailText);
    contact3.appendChild(mail);

    divContactContainer.appendChild(contact3);

    const fondRouge = document.createElement("div");
    fondRouge.classList.add("fond-rouge");
    divContainer.appendChild(divContactContainer);
    divContainer.appendChild(fondRouge);
    parent.appendChild(divContainer);
}


function scrollListener(){
    let scrollpos = window.scrollY;
    console.log(scrollpos);
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
    
      console.log(scrollpos)
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