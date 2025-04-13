const teamMembers = [
  {
    name: "Emily Reyes",
    role: "Creative Director",
    quote: "\"We want every player to feel uplifted and inspired.\"",
    image: "./images/camille-johnson.jpg"
  },
  {
    name: "Jonas Kim",
    role: "Lead Developer",
    quote: "\"Coding with a purpose brings the Spirit into our work.\"",
    image: "./images/joseph_fielding_smith_mormon_prophet.jpeg"
  },
  {
    name: "Ava Thompson",
    role: "Art Director",
    quote: "\"Every brush stroke reflects our values and love.\"",
    image: "./images/joseph_f_smith.jpeg"
  },
  {
    name: "Michael Brown",
    role: "Game Designer",
    quote: "\"We design with family and faith in mind.\"",
    image: "./images/president_thomas_s_monson_lds.jpeg"
  },
  {
    name: "Jose Martinez",
    role: "Marketing Manager",
    quote: "\"Sharing light in a world that needs it.\"",
    image: "./images/spencer_w_kimball.jpeg"
  },
  {
    name: "Caleb Anderson",
    role: "Community Manager",
    quote: "\"We love our players. They’re part of our mission too.\"",
    image: "./images/lorenzo_snow.jpeg"
  }
];

const teamContainer = document.querySelector('.team');

teamMembers.forEach(member => {
  const memberDiv = document.createElement('div');
  memberDiv.classList.add('member');

  const memberImage = document.createElement('img');
  memberImage.setAttribute('loading', 'lazy');
  memberImage.setAttribute('src', member.image);
  memberImage.setAttribute('alt', `Team Member: ${member.name}`);

  const memberName = document.createElement('h4');
  memberName.textContent = member.name;

  const memberRole = document.createElement('p');
  memberRole.textContent = member.role;

  const memberQuote = document.createElement('blockquote');
  memberQuote.textContent = member.quote;

  memberDiv.appendChild(memberImage);
  memberDiv.appendChild(memberName);
  memberDiv.appendChild(memberRole);
  memberDiv.appendChild(memberQuote);

  teamContainer.appendChild(memberDiv);
});
