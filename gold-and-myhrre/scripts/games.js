const games = [
    {
      "title": "Faith Quest",
      "description": "Embark on a journey through scripture stories and challenges that build testimony.",
      "price": "$14.99",
      "image": "images/pool_of_bethesda_carl_bloch.jpeg",
      "category": "Faith"
    },
    {
      "title": "Family Builder",
      "description": "A fun game that strengthens family bonds through cooperation and LDS trivia.",
      "price": "$9.99",
      "image": "images/go_ye_therefore_and_teach_all_nations.jpeg",
      "category": "Family"
    },
    {
      "title": "Covenant Conquerors",
      "description": "A strategy board game where you lead a righteous army and make eternal choices.",
      "price": "$19.99",
      "image": "images/christ_rich_young_ruler_hofmann.jpeg",
      "category": "Strategy"
    },
    {
      "title": "Temple Dash",
      "description": "Fast-paced and fun! Help characters get to the temple while overcoming real-life obstacles.",
      "price": "$12.99",
      "image": "images/christ_doctors_temple_art_lds.jpeg",
      "category": "Faith"
    },
    {
      "title": "Sabbath Snap",
      "description": "Memory game with Sabbath-appropriate actions and activities. Perfect for Sunday!",
      "price": "$7.99",
      "image": "images/calling_the_fishermen.jpeg",
      "category": "Family"
    }
  ]
  
  const container = document.getElementById("gamesContainer");
  const filterSelect = document.getElementById("categoryFilter");
  
  function displayGames(list) {
    container.innerHTML = '';
    list.forEach(game => {
      const card = document.createElement("div");
      card.className = "game-card";
      card.innerHTML = `
        <img src="${game.image}" alt="${game.title}">
        <div class="info">
          <h4>${game.title}</h4>
          <p>${game.description}</p>
          <p class="price">${game.price}</p>
        </div>
      `;
      container.appendChild(card);
    });
  }
  
  filterSelect.addEventListener("change", () => {
    const selected = filterSelect.value;
    if (selected === "All") {
      displayGames(games);
    } else {
      const filtered = games.filter(game => game.category === selected);
      displayGames(filtered);
    }
  });
  
  // Initial display
  displayGames(games);
  
