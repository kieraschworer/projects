"use strict";

/*Possible plan?
var audio = new Audio('audio_file.mp3');
audio.play();*/

/*Rollover Menu*/

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    var drinksimagehome = $("#drinksimagehome");
    var foodimagehome = $("#foodimagehome");

    // preload images
    var links = $("#image_list_home").querySelectorAll("a");

    for (let link of links) {
        const image = new Image();
        image.src = link.href;
    }

    // transparent pictures are shown when mouse is hovering over, normal pictures shown when mouse is not hovering over the pictures
    for ( let link of links) {
        drinksimagehome.addEventListener("mouseover", () => {
            drinksimagehome.src = "images/bluegreenmilktransparent.png";
        });
        drinksimagehome.addEventListener("mouseout", () => {
            drinksimagehome.src = "images/bluegreenmilk.jpg";
        });  
        foodimagehome.addEventListener ("mouseover", () => {
          foodimagehome.src = "images/roasted_porg_transparent.png";
        })  
        foodimagehome.addEventListener ("mouseout", () => {
          foodimagehome.src = "images/roasted_porg.png";
        })      
    }
});
/*End of Rollover Menu*/