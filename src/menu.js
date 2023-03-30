const createCarte = () => {
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

export { createCarte };