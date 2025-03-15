
const grid_view = document.querySelector("#grid-view");
const line_view = document.querySelector("#line-view");
let directory_data = []

line_view.addEventListener("click", () => {
    if (grid_view.classList.contains("selected")) {
        grid_view.classList.toggle("selected")
    }
    
    if (!line_view.classList.contains("selected")){
        line_view.classList.toggle("selected")
    }
    
    load_line_directory(directory_data);
})

grid_view.addEventListener("click", () => {
    if (line_view.classList.contains("selected")) {
        line_view.classList.toggle("selected")
    }
    
    if (!grid_view.classList.contains("selected")){
        grid_view.classList.toggle("selected")
    }
    load_directory(directory_data);
})


async function get_directory() {
    try{
        
    const response = await fetch("data/members.json");
    if (!response.ok){
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json()
    directory_data = data;
    console.log(data);
    await load_directory(data);
    }  catch (error){
        
        console.error("Error fetching directory:", error);
        }
}

async function load_directory(members) {
    const container = document.querySelector('#card-container');
    if (container.classList.contains("line-view")){
        container.classList.remove("line-view");
    }
    container.innerHTML = ""
    members.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("directory-card");

        card.innerHTML = `
            <div class="directory-info">
                <img src="${member.image}" alt="${member.name}">
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
                <p class="membership">Membership Level: ${member.membership_level}</p>
            </div>
        `;

        container.appendChild(card);
    });


}
function load_line_directory(members) {
    const container = document.querySelector('#card-container');
    container.classList.add("line-view");
    container.innerHTML = ""
    members.forEach((member, index) => {
        const card = document.createElement("div");
        card.classList.add("directory-card");
        // Zebra line view layout with alternating classes
        if (index % 2 === 0) {
            card.classList.add('even-line');
        } else {
            card.classList.add('odd-line');
        }
        card.innerHTML = `
            
            <p>${member.name}</p>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">${member.website}</a>
        
        `;
        container.appendChild(card);
    });
    
}

get_directory();