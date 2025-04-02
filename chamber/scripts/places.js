import {places} from '../data/places.mjs'

document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("discover-card");
    console.log(places);
    places.forEach((place, index) => {
        const card = document.createElement("div");
        card.classList.add("discover_card");
        let area_name = 'card' + toString(index + 1);
        card.style.gridArea = area_name;
        card.innerHTML = `
            <h2>${place.name}</h2>
            <figure>
                <img src="${place.photo_url}" alt="${place.name}" style="width:100%; border-radius:10px;">
            </figure>
            <address>${place.address}</address>
            <p>${place.description}</p>
            <button onclick="learnMore('${place.name}')">Learn More</button>
        `;

        container.appendChild(card);
    });
});

function learnMore(placeName) {
    alert(`You clicked Learn More for ${placeName}!`);
}