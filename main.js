"use strict";

var toggleMenuBarIcon = document.querySelector("#toggle-menu-bar");
var sidebarCloseMark = document.querySelector("#close-mark");
var sideNavBar = document.querySelector(".nav-bar");

var howRadienContainer = document.querySelector(".user-choice");
console.log(howRadienContainer);

var quote = [{
        heading: "Campture User",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"
    },
    {
        heading: "Gather Information",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"
    },

    {
        heading: "Lead Converstion",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"
    }
];

var clientWidth = window.innerWidth;
console.log(clientWidth);

function showNavBar() {
    sideNavBar.classList.add("active");
}

function hideNavBar() {
    sideNavBar.classList.remove("active");
}

var i = 0;

function renderQuote() {
    if (window.innerWidth < 766) {
        howRadienContainer.innerHTML = "";

        var quoteDiv = document.createElement("div");

        var headingText = document.createElement("h1");
        headingText.textContent = quote[i].heading;

        var paraText = document.createElement("p");
        paraText.textContent = quote[i].text;

        quoteDiv.appendChild(headingText);
        quoteDiv.appendChild(paraText);

        howRadienContainer.appendChild(quoteDiv);
        i++;

        if (i == quote.length) {
            i = 0;
        }
    } else {
        return;
    }
}

setInterval(renderQuote, 5000);

toggleMenuBarIcon.addEventListener("click", showNavBar);
sidebarCloseMark.addEventListener("click", hideNavBar);