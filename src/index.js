import {home} from "./home";
import {menu} from "./menu";
import {contact} from "./contact";
import './style.css';

function header(){
    const body = document.querySelector('body');

    const header = document.createElement('header');

    const h1 = document.createElement('h1');
    h1.innerText = "h1 inside the header";

    const nav = document.createElement('nav');

    const homeBtn = document.createElement('button');
    homeBtn.innerText = "Home";
    homeBtn.addEventListener('click', home);

    const menuBtn = document.createElement('button');
    menuBtn.innerText = "Menu";
    menuBtn.addEventListener('click', menu);

    const contactBtn = document.createElement('button');
    contactBtn.innerText = "Contact";
    contactBtn.addEventListener('click', contact);

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    header.appendChild(h1);
    header.appendChild(nav);

    body.insertBefore(header, body.firstElementChild);
    home();
}
header();


