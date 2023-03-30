const createContact = () => {
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
    const locationText = document.createTextNode("Location");
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

export { createContact };