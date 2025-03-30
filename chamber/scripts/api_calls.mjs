
const weather_api_token = "537a2e21a61e57501347ed3d5d23553d";
const weather_container = document.querySelector('#current-weather');
const forecast_container = document.querySelector("#forecast");
const business_container = document.querySelector("#rand-business");
get_current_weather();
get_random_members();
async function get_current_weather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=50.119373&lon=8.681128&exclude=minutely,hourly&units=metric&appid=${weather_api_token}`                
    const response = await fetch(url);
    if (!response.ok){
        throw new Error(`HTTP error! Status: ${response.status}`);
    } else {
        const data = await response.json();


        const image_URL = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        const temp = `Temp: ${Math.round(data.main.temp)} C`;
        const description = `Weather: ${data.weather[0].main}`;
        const high_temp = `High: ${data.main.temp_max} C`;
        const low_temp = `Low: ${data.main.temp_min} C`;
        const humidity = `Humidity: ${data.main.humidity} %`;
        const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
        const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });

        const new_div = document.createElement("div");
        const icon = document.createElement("img");
        const temp_p = document.createElement("p");
        const description_p = document.createElement("p");
        const high_temp_p = document.createElement("p");
        const low_temp_p = document.createElement("p");
        const humidity_p = document.createElement("p");
        const sunrise_p = document.createElement("p");
        const sunset_p = document.createElement("p");
        temp_p.textContent = temp;
        description_p.textContent = description;
        high_temp_p.textContent = high_temp;
        low_temp_p.textContent = low_temp;
        humidity_p.textContent = humidity;
        sunrise_p.textContent = `Sunrise: ${sunrise}`;
        sunset_p.textContent = `Sunset: ${sunset}`;


        icon.src = image_URL;
        icon.alt = description;

        
        new_div.appendChild(icon);
        weather_container.appendChild(new_div);
        other_new_div = document.createElement("div");

        other_new_div.appendChild(temp_p);
        other_new_div.appendChild(description_p);
        other_new_div.appendChild(high_temp_p);
        other_new_div.appendChild(low_temp_p);
        other_new_div.appendChild(humidity_p);
        other_new_div.appendChild(sunrise_p);
        other_new_div.appendChild(sunset_p);
        new_div.appendChild(other_new_div);
        get_forecast(temp);
    }
}

async function get_forecast(current_temp) {

    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=50.119373&lon=8.681128&units=metric&appid=${weather_api_token}`;
    const response = await fetch(url);
    if (!response.ok){
        throw new Error(`HTTP error! Status: ${response.status}`);  
    } else {
        const forecast = document.querySelector("#forecast");
        const data = await response.json(); 
        const today = new Date();
         // Find forecasts for 12:00 p.m. on the next two days
        const noon_forecasts = data.list.filter(item => item.dt_txt.includes("12:00:00"));
        console.log(noon_forecasts);
        const todays_temp = current_temp;
        const tomorrows_temp = noon_forecasts[1].main.temp;
        const uber_morgen_temp = noon_forecasts[2].main.temp;
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);

        const day_after_tomorrow = new Date(today);
        day_after_tomorrow.setDate(today.getDate() + 2);
            // Create <p> elements for each temperature
        const today_p = document.createElement("p");
        const tomorrow_p = document.createElement("p");
        const uber_morgen_p = document.createElement("p");
        const options = { weekday: 'long' };
        const tomorrow_name = new Intl.DateTimeFormat('en-US', options).format(tomorrow);
        const day_after_tomorrow_name = new Intl.DateTimeFormat('en-US', options).format(day_after_tomorrow);


            // Set text content
        today_p.textContent = `Today: ${todays_temp} `;
        tomorrow_p.textContent = `${tomorrow_name}: ${tomorrows_temp} C`;
        uber_morgen_p.textContent = `${day_after_tomorrow_name}: ${uber_morgen_temp} C`;

        // Get day names

        // Append all elements to the forecast container
        forecast_container.appendChild(today_p);
        forecast_container.appendChild(tomorrow_p);
        forecast_container.appendChild(uber_morgen_p);

    }

}
                
                     
      

async function get_random_members(number) {
    try{
        
        const response = await fetch("data/members.json");
        if (!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json()
        directory_data = data;
        const filteredBusinesses = data.filter(business => business.membership_level !== 1);
        const shuffled = [...filteredBusinesses].sort(() => 0.5 - Math.random()); // Shuffle the array
        const businesses = shuffled.slice(0, 3); // Get the first `count` items
        append_businesses(businesses);
        }  catch (error){
            
            console.error("Error fetching directory:", error);
            }
}

function append_businesses(businesses) {
    businesses.forEach(business => {
        const header_div = document.createElement("div");
        header_div.classList.add("business-card-header");
        const name = document.createElement("h2");
        name.textContent = business.name;
        const description = document.createElement("p");
        description.textContent = business.description;
        header_div.appendChild(name);
        header_div.appendChild(description);

        const body_div = document.createElement("div");
        body_div.classList.add("business-card-body");
        const image = document.createElement("img");
        image.src = business.image;
        image.alt = business.name;

        const info_div = document.createElement("div");
        info_div.classList.add("business-card-info");
        const email = document.createElement("p");
        email.textContent = `Email: ${business.email}`;
        const phone = document.createElement("p");
        phone.textContent = `Phone: ${business.phone}`;
        const b_url = document.createElement("p");
        b_url.textContent = `URL: ${business.url}`;

        info_div.appendChild(email);
        info_div.appendChild(phone);
        info_div.appendChild(b_url);
        body_div.appendChild(image);
        body_div.appendChild(info_div);


        const business_card = document.createElement("div");
        business_card.classList.add("business-card");
        business_card.appendChild(header_div);
        business_card.appendChild(body_div);
        business_container.appendChild(business_card);

    });
}

