
const track = document.getElementById("carouselTrack");
let isAnimating = false;


const body = document.querySelector("main");

function scrollCarousel(direction) {
    if (body.offsetWidth > 769) {
        if (isAnimating) return; // prevent multiple clicks mid-animation
        isAnimating = true;

        const itemWidth = track.children[0].offsetWidth + 20; // includes margin
        const moveAmount = direction * itemWidth;

        track.style.transition = "transform 0.4s ease";
        track.style.transform = `translateX(${-moveAmount}px)`;

        setTimeout(() => {
            track.style.transition = "none";
            track.style.transform = "translateX(0)";

            if (direction === -1) {
                const last = track.lastElementChild;
                track.insertBefore(last, track.firstElementChild);
            } else {
                const first = track.firstElementChild;
                track.appendChild(first);
            }

            isAnimating = false;
        }, 400);
    } else{
        if (isAnimating) return; // prevent multiple clicks mid-animation
        isAnimating = true;

        const itemHeight = track.children[0].offsetHeight + 20; // includes margin
        const moveAmount = direction * itemHeight;

        track.style.transition = "transform 0.4s ease";
        track.style.transform = `translateY(${-moveAmount}px)`;

        setTimeout(() => {
            track.style.transition = "none";
            track.style.transform = "translateY(0)";

            if (direction === -1) {
                const last = track.lastElementChild;
                track.insertBefore(last, track.firstElementChild);
            } else {
                const first = track.firstElementChild;
                track.appendChild(first);
            }
            

            isAnimating = false;
        }, 400);
    }
}


window.scrollCarousel = scrollCarousel;


const carouselTrack = document.getElementById("carouselTrack");

async function loadGames() {
    try {
      const response = await fetch('./data/games.json');
      const games = await response.json(); // parse the JSON response
      const carouselTrack = document.getElementById("carouselTrack");
  
      games.forEach(game => {
        const item = document.createElement("div");
        item.classList.add("carousel-item");
        item.innerHTML = `
          <img src="${game.image}" alt="${game.title}" class="carousel-image" loading="lazy" />
          <h3>${game.title}</h3>
        `;
        carouselTrack.appendChild(item);
      });
    } catch (error) {
      console.error('Error loading the game data:', error);
    }
  }
  
loadGames();  // Call the function to load games on page load


