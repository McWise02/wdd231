document.addEventListener("DOMContentLoaded", function () {
    let welcomeMessage = document.getElementById("welcome");
    let lastVisit = localStorage.getItem("lastVisit");

    let now = new Date();
    localStorage.setItem("lastVisit", now.toISOString());

    if (!lastVisit) {
        welcomeMessage.innerText = "Welcome! Let us know if you have any questions.";
        return;
    }

    let lastVisitDate = new Date(lastVisit);
    let timeDifference = now - lastVisitDate;
    let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (daysDifference < 1) {
        welcomeMessage.innerText = "Back so soon! Awesome!";
    } else {
        let dayText = daysDifference === 1 ? "day" : "days";
        welcomeMessage.innerText = `You last visited ${daysDifference} ${dayText} ago.`;
    }
});
