const membershipLevels = {
    "non-profit": {
        title: "Non-Profit Membership",
        price: "$100/year",
        benefits: ["Access to resources", "Networking events", "Discounted services"]
    },
    "bronze": {
        title: "Bronze Membership",
        price: "$250/year",
        benefits: ["All Non-Profit benefits", "Priority support", "Exclusive workshops"]
    },
    "silver": {
        title: "Silver Membership",
        price: "$500/year",
        benefits: ["All Bronze benefits", "Premium networking", "1-on-1 mentorship"]
    },
    "gold": {
        title: "Gold Membership",
        price: "$1000/year",
        benefits: ["All Silver benefits", "VIP event access", "Business promotion"]
    }
};


document.getElementById("member-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const dateTimeInput = document.getElementById("submission-time");
    const now = new Date();

    // Format to YYYY-MM-DDTHH:MM (for datetime-local)
    const formattedDateTime = now.toISOString().slice(0, 16);

    dateTimeInput.value = formattedDateTime;
    let isValid = true;

    const fields = document.querySelectorAll("#member-form input[type='text'], #member-form input[type='email']");

    fields.forEach(function(field) {
        if (field.value.trim() === "" && (field.name != 'title' && field.name != 'description')) {
            field.classList.add("not-filled");
            isValid = false;
        } else {
            field.classList.remove("not-filled");
        }
    });
    

    if (isValid) {
        this.submit();
    } else {
        alert("Please fill in all the fields.");
    }
});




document.querySelectorAll(".membership-level").forEach((level) => {
    level.addEventListener("click", () => {
        // Remove 'active' class from all membership levels
        document.querySelectorAll(".membership-level").forEach(el => el.classList.remove("active"));

        // Add 'active' class to clicked one
        level.classList.add("active");

        // Uncheck all radio buttons
        document.querySelectorAll("input[type='radio']").forEach((radio) => {
            radio.checked = false;
        });

        // Find the radio button within the clicked level and check it
        const radioButton = level.querySelector("input[type='radio']");
        if (radioButton) {
            radioButton.checked = true;
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        // Get all elements with the 'animate' class
        const elementsToAnimate = document.querySelectorAll('.animate');
        
        // Remove 'animate' class from all of them
        elementsToAnimate.forEach(function(element) {
            element.classList.remove('animate');
        });
    }, 1500); // 1000 ms = 1 second
});

function openModal(level) {
    const modal = document.getElementById("info-modal");
    document.getElementById("modal-tital").textContent = membershipLevels[level].title;
    document.getElementById("price").textContent = membershipLevels[level].price;
    
    const benefitsList = document.getElementById("benefits");
    benefitsList.innerHTML = "";
    membershipLevels[level].benefits.forEach(benefit => {
        const li = document.createElement("li");
        li.textContent = benefit;
        benefitsList.appendChild(li);
    });

    // Add a close button
    let closeButton = document.getElementById("close-modal");
    if (!closeButton) {
        closeButton = document.createElement("button");
        closeButton.id = "close-modal";
        closeButton.textContent = "Close";
        closeButton.type = "button";
        closeButton.addEventListener("click", () => modal.close());
        modal.appendChild(closeButton);
    }

    modal.showModal();
}
