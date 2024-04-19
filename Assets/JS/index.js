
// Change SVG filter when "mouseover" is detected

const headerSVG = document.querySelectorAll(".header-svg");
const searchSVG = document.getElementById("search");
const notificationSVG = document.getElementById("notifications");

headerSVG.forEach((svg) => {
    svg.addEventListener('mouseover', () => {
        svg.style.filter = "invert(64%) sepia(100%) saturate(595%) hue-rotate(145deg) brightness(97%) contrast(91%)";
    });
    svg.addEventListener('mouseleave', () => {
        svg.style.filter = "invert(100%) sepia(100%) saturate(1%) hue-rotate(221deg) brightness(107%) contrast(101%)";
    });
});

const sidebarListItems = document.querySelectorAll(".selections");
const homeSVG = document.querySelector(".house");
const profileSVG= document.querySelector(".avatar");
const messagesSVG= document.querySelector(".mail");
const historySVG= document.querySelector(".clock");
const tasksSVG= document.querySelector(".checkmark");
const communitiesSVG= document.querySelector(".group");
const settingsSVG= document.querySelector(".gear");
const supportSVG= document.querySelector(".question");
const privacySVG= document.querySelector(".shield");

sidebarListItems.forEach((item) => {
    item.addEventListener('mouseover', () => {
        if (item.id === "home") {
            homeSVG.style.filter = "invert(64%) sepia(100%) saturate(595%) hue-rotate(145deg) brightness(97%) contrast(91%)";
        } else if (item.id === "profile") {
            profileSVG.style.filter = "invert(64%) sepia(100%) saturate(595%) hue-rotate(145deg) brightness(97%) contrast(91%)";
        } else if (item.id === "messages") {
            messagesSVG.style.filter = "invert(64%) sepia(100%) saturate(595%) hue-rotate(145deg) brightness(97%) contrast(91%)";
        } else if (item.id === "history") {
            historySVG.style.filter = "invert(64%) sepia(100%) saturate(595%) hue-rotate(145deg) brightness(97%) contrast(91%)";
        } else if (item.id === "tasks") {
            tasksSVG.style.filter = "invert(64%) sepia(100%) saturate(595%) hue-rotate(145deg) brightness(97%) contrast(91%)";
        } else if (item.id === "communities") {
            communitiesSVG.style.filter = "invert(64%) sepia(100%) saturate(595%) hue-rotate(145deg) brightness(97%) contrast(91%)";
        }else if (item.id === "settings") {
            settingsSVG.style.filter = "invert(64%) sepia(100%) saturate(595%) hue-rotate(145deg) brightness(97%) contrast(91%)";
        } else if (item.id === "support") {
            supportSVG.style.filter = "invert(64%) sepia(100%) saturate(595%) hue-rotate(145deg) brightness(97%) contrast(91%)";
        } else {
            privacySVG.style.filter = "invert(64%) sepia(100%) saturate(595%) hue-rotate(145deg) brightness(97%) contrast(91%)";
        }
    });

    item.addEventListener('mouseleave', () => {
        if (item.id === "home") {
            homeSVG.style.filter = "invert(100%) sepia(100%) saturate(1%) hue-rotate(221deg) brightness(107%) contrast(101%)";
        } else if (item.id === "profile") {
            profileSVG.style.filter = "invert(100%) sepia(100%) saturate(1%) hue-rotate(221deg) brightness(107%) contrast(101%)";
        } else if (item.id === "messages") {
            messagesSVG.style.filter = "invert(100%) sepia(100%) saturate(1%) hue-rotate(221deg) brightness(107%) contrast(101%)";
        } else if (item.id === "history") {
            historySVG.style.filter = "invert(100%) sepia(100%) saturate(1%) hue-rotate(221deg) brightness(107%) contrast(101%)";
        } else if (item.id === "tasks") {
            tasksSVG.style.filter = "invert(100%) sepia(100%) saturate(1%) hue-rotate(221deg) brightness(107%) contrast(101%)";
        } else if (item.id === "communities") {
            communitiesSVG.style.filter = "invert(100%) sepia(100%) saturate(1%) hue-rotate(221deg) brightness(107%) contrast(101%)";
        }else if (item.id === "settings") {
            settingsSVG.style.filter = "invert(100%) sepia(100%) saturate(1%) hue-rotate(221deg) brightness(107%) contrast(101%)";
        } else if (item.id === "support") {
            supportSVG.style.filter = "invert(100%) sepia(100%) saturate(1%) hue-rotate(221deg) brightness(107%) contrast(101%)";
        } else {
            privacySVG.style.filter = "invert(100%) sepia(100%) saturate(1%) hue-rotate(221deg) brightness(107%) contrast(101%)";
        }
    });
});

const allDarkSVG = document.querySelectorAll(".dark-icons");

allDarkSVG.forEach((svg) => {
    svg.addEventListener("mouseover", () => {
        if (svg.classList.contains('star')) {
            svg.style.filter = "invert(72%) sepia(82%) saturate(746%) hue-rotate(340deg) brightness(107%) contrast(97%)";
        } else if (svg.classList.contains('eye')) {
            svg.style.filter = "invert(100%) sepia(62%) saturate(2436%) hue-rotate(23deg) brightness(98%) contrast(84%)";
        } else if (svg.classList.contains('share'))  {
            svg.style.filter = "invert(19%) sepia(68%) saturate(4283%) hue-rotate(336deg) brightness(91%) contrast(94%)";
        } else {
            console.log("What went wrong?");
        }
    });

    svg.addEventListener("mouseleave", () => {
        svg.style.filter = "invert(49%) sepia(96%) saturate(521%) hue-rotate(156deg) brightness(92%) contrast(99%)";
    })
});

