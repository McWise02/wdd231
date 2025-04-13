import { workshops } from '../data/workshops.js';

const workshopTrack = document.getElementById("workshopTrack")
let workshopAnimate = false;

const body = document.querySelector("main");
function scrollWorkshop(direction) {
    if (body.offsetWidth > 769) {
        if (workshopAnimate) return; // prevent multiple clicks mid-animation
        workshopAnimate = true;

        const itemWidth = workshopTrack.children[0].offsetWidth + 40; // includes margin
        const moveAmount = direction * itemWidth;

        workshopTrack.style.transition = "transform 0.4s ease";
        workshopTrack.style.transform = `translateX(${-moveAmount}px)`;

        setTimeout(() => {
            workshopTrack.style.transition = "none";
            workshopTrack.style.transform = "translateX(0)";

            if (direction === -1) {
                const last = workshopTrack.lastElementChild;
                workshopTrack.insertBefore(last, workshopTrack.firstElementChild);
            } else {
                const first = workshopTrack.firstElementChild;
                workshopTrack.appendChild(first);
            }

            workshopAnimate = false;
        }, 400);
    } else{
        if (workshopAnimate) return; // prevent multiple clicks mid-animation
        workshopAnimate = true;

        const itemHeight = workshopTrack.children[0].offsetHeight + 40; // includes margin
        const moveAmount = direction * itemHeight;

        workshopTrack.style.transition = "transform 0.4s ease";
        workshopTrack.style.transform = `translateY(${-moveAmount}px)`;

        setTimeout(() => {
            workshopTrack.style.transition = "none";
            workshopTrack.style.transform = "translateY(0)";

            if (direction === -1) {
                const last = workshopTrack.lastElementChild;
                workshopTrack.insertBefore(last, workshopTrack.firstElementChild);
            } else {
                const first = workshopTrack.firstElementChild;
                workshopTrack.appendChild(first);
            }
            

            workshopAnimate = false;
        }, 400);
    }
}

window.scrollWorkshop = scrollWorkshop;

workshops.forEach(workshop => {
    const workshopDiv = document.createElement("div");
    workshopDiv.className = "workshop-div";
  
    const workshopItem = document.createElement("div");
    workshopItem.className = "workshop-item";
    workshopItem.style.backgroundImage = `url('${workshop.image}')`;
    workshopItem.style.backgroundSize = "cover";
  
    const infoDiv = document.createElement("div");
    infoDiv.style.background = "RGB(212, 175, 55)";
    infoDiv.style.padding = "10px";
    infoDiv.style.borderRadius = "8px";
    infoDiv.innerHTML = `<p>${workshop.location} – ${workshop.durationDays} days</p>`;
  
    workshopItem.appendChild(infoDiv);
  
    const title = document.createElement("h3");
    title.textContent = workshop.name;
  
    workshopDiv.appendChild(title);
    workshopDiv.appendChild(workshopItem);
    workshopTrack.appendChild(workshopDiv);
  });