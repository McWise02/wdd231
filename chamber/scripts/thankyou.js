function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    const data = {};
    params.forEach((value, key) => {
        data[key] = value.trim(); 
    });
    return data;
}

function displayThankYouMessage() {
    const formData = getQueryParams();
    const thankYouMessageElement = document.getElementById("thank-you-message");

    const firstName = formData["first-name"] || "Guest";
    const level = formData["membership-level"] || "No membership level selected";
    const submissionTime = formData["submission-time"] ? new Date(formData["submission-time"]).toLocaleString() : "Time not recorded";

    let message = `<strong>Thank you, ${firstName}, for choosing the ${level} Membership level.</strong><br><br>`;
    message += "<strong>Here is the data you entered:</strong><br>";

    let hasData = false;

    for (const [key, value] of Object.entries(formData)) {
        if (value && key !== "submission-time") { // Exclude submission-time from loop to format it separately
            message += `<strong>${key.replace(/-/g, " ")}:</strong> ${value} <br>`;
            hasData = true;
        }
    }

    // Add the formatted submission time separately
    message += `<strong>Submission Time:</strong> ${submissionTime} <br>`;

    if (!hasData) {
        message += "No additional information was provided.";
    }

    thankYouMessageElement.innerHTML = message;
}


displayThankYouMessage();
