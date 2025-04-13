window.onload = function() {
    addCurrentDate();
    addCurrentYear();
  };

function addCurrentDate() {
    const currentDate = new Date();

    const formattedDate = currentDate.toLocaleString(); // This will give a formatted string like "MM/DD/YYYY, HH:MM:SS AM/PM"

    const lastModifiedElement = document.getElementById('lastModified');


    lastModifiedElement.textContent = `Last Modification: ${formattedDate}`;
}

function addCurrentYear() {

    const currentYear = new Date().getFullYear();

    const currentYearElement = document.getElementById('currentyear');

    currentYearElement.textContent = `© ${currentYear} ${currentYearElement.textContent}`;
}

