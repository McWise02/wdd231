import { workshops } from '../data/workshops.js';
  const container = document.getElementById("workshopContainer");
  const filter = document.getElementById("locationFilter");
  
  function daysUntil(date) {
    const now = new Date();
    const target = new Date(date);
    const diff = Math.ceil((target - now) / (1000 * 60 * 60 * 24));
    if (diff < 7) return `${diff} day(s)`;
    return `${Math.round(diff / 7)} week(s)`;
  }
  
  function renderWorkshops(filteredList) {
    container.innerHTML = "";
    filteredList.forEach(ws => {
      const card = document.createElement("div");
      card.className = "workshop-card";
      card.innerHTML = `
        <img src="${ws.image}" alt="${ws.name}">
        <div class="workshop-info">
          <h2>${ws.name}</h2>
          <p><span class="tag">Starts in:</span> ${daysUntil(ws.startDate)}</p>
          <p><span class="tag">Duration:</span> ${ws.durationDays} days</p>
          <p><span class="tag">Location:</span> ${ws.location}</p>
          <p><span class="tag">Price:</span> ${ws.price}</p>
        </div>
      `;
      card.addEventListener("click", () => showModal(ws));
      container.appendChild(card);

    });
  }
  
  filter.addEventListener("change", () => {
    const value = filter.value;
    if (value === "all") {
      renderWorkshops(workshops);
    } else {
      renderWorkshops(workshops.filter(w => w.location === value));
    }
  });
  
  renderWorkshops(workshops);
  
  function showModal(workshop) {
    document.getElementById("modalTitle").textContent = workshop.name;
    document.getElementById("modalDescription").textContent = workshop.description || "No description available.";
    
    const modal = document.getElementById("workshopModal");
    modal.style.display = "block";
  }

document.querySelector(".close").addEventListener("click", () => {
    const modal = document.getElementById("workshopModal");
    modal.style.display = "none";
  });
  
  window.addEventListener("click", (event) => {
    const modal = document.getElementById("workshopModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });