function openTab(tabName) {
  const tabContents = document.getElementsByClassName("tabcontent");
  for (const tabContent of tabContents) {
    tabContent.style.display = "none";
  }

  document.getElementById(tabName).style.display = "block";
}

// By default, show the first tab
document.getElementById("batsman").style.display = "block";
// ... Existing code ...

// Sample data for batsman section (replace this with your data)
const batsmanData = [
  {
    name: "Virat Kohli",
    avatar: "path\to\virat_kohli.jpg",
    runs: 11235,
    average: 59.79,
    strikeRate: 93.39,
    matches: 250,
    fifties: 61,
    hundreds: 43,
  },
  // Add more player data as needed
];

function showBatsmanData() {
  const batsmanSection = document.getElementById("batsman");

  // Clear previous content
  batsmanSection.innerHTML = "";

  // Render batsman cards
  batsmanData.forEach((player) => {
    const card = document.createElement("div");
    card.classList.add("player-card");

    const avatar = document.createElement("img");
    avatar.src = player.avatar;
    avatar.alt = player.name;
    avatar.classList.add("player-avatar");
    card.appendChild(avatar);

    const playerInfo = document.createElement("div");
    playerInfo.classList.add("player-info");

    const playerName = document.createElement("div");
    playerName.classList.add("player-name");
    playerName.textContent = player.name;
    playerInfo.appendChild(playerName);

    const playerStats = document.createElement("div");
    playerStats.classList.add("player-stats");
    playerStats.innerHTML = `
      <div class="player-stat">Runs: ${player.runs}</div>
      <div class="player-stat">Average: ${player.average}</div>
      <div class="player-stat">Strike Rate: ${player.strikeRate}</div>
    `;
    playerInfo.appendChild(playerStats);

    const moreInfoLink = document.createElement("div");
    moreInfoLink.classList.add("player-more-info");
    moreInfoLink.textContent = "More Info";
    // Add an event listener to handle clicks on the "More Info" link
    moreInfoLink.addEventListener("click", () => showPlayerDetails(player));
    playerInfo.appendChild(moreInfoLink);

    card.appendChild(playerInfo);

    batsmanSection.appendChild(card);
  });
}

// ... Existing code ...

function showPlayerDetails(player) {
  // Create a modal to display player details
  const modal = document.createElement("div");
  modal.classList.add("modal");

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  const closeBtn = document.createElement("span");
  closeBtn.classList.add("close");
  closeBtn.innerHTML = "&times;";
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  const playerDetails = document.createElement("div");
  playerDetails.classList.add("player-details");

  // Check if the player belongs to the batsman section
  if (batsmanData.some((batsman) => batsman.name === player.name)) {
    // Fill the batsman details in the modal
    playerDetails.innerHTML = `
      <h2>${player.name}</h2>
      <div class="player-stat">Runs: ${player.runs}</div>
      <div class="player-stat">Average: ${player.average}</div>
      <div class="player-stat">Strike Rate: ${player.strikeRate}</div>
      <div class="player-stat">Matches: ${player.matches}</div>
      <div class="player-stat">Fifties: ${player.fifties}</div>
      <div class="player-stat">Hundreds: ${player.hundreds}</div>
      <!-- Add more batsman stats as needed -->
    `;
  } else if (bowlerData.some((bowler) => bowler.name === player.name)) {
    // Fill the bowler details in the modal
    playerDetails.innerHTML = `
      <h2>${player.name}</h2>
      <div class="player-stat">Wickets: ${player.wickets}</div>
      <div class="player-stat">Average: ${player.average}</div>
      <div class="player-stat">Economy: ${player.economy}</div>
      <!-- Add more bowler stats as needed -->
    `;
  }

  // Append player details and close button to the modal content
  modalContent.appendChild(closeBtn);
  modalContent.appendChild(playerDetails);

  // Append modal content to the modal
  modal.appendChild(modalContent);

  // Append the modal to the body
  document.body.appendChild(modal);

  // Display the modal
  modal.style.display = "block";
}

// ... Existing code ...


// By default, show the first tab
document.getElementById("batsman").style.display = "block";

// Show batsman data when the Batsman tab is clicked
document.querySelector(".tablink:nth-child(1)").addEventListener("click", showBatsmanData);
// ... Existing code ...

// Sample data for bowler section (replace this with your data)
const bowlerData = [
  {
    name: "Jasprit Bumrah",
    avatar: "path/to/jasprit_bumrah.jpg",
    wickets: 205,
    average: 22.10,
    economy: 4.50,
  },
  // Add more player data as needed
];

function showBowlerData() {
  const bowlerSection = document.getElementById("bowler");

  // Clear previous content
  bowlerSection.innerHTML = "";

  // Render bowler cards
  bowlerData.forEach((player) => {
    const card = document.createElement("div");
    card.classList.add("player-card");

    const avatar = document.createElement("img");
    avatar.src = player.avatar;
    avatar.alt = player.name;
    avatar.classList.add("player-avatar");
    card.appendChild(avatar);

    const playerInfo = document.createElement("div");
    playerInfo.classList.add("player-info");

    const playerName = document.createElement("div");
    playerName.classList.add("player-name");
    playerName.textContent = player.name;
    playerInfo.appendChild(playerName);

    const playerStats = document.createElement("div");
    playerStats.classList.add("player-stats");
    playerStats.innerHTML = `
      <div class="player-stat">Wickets: ${player.wickets}</div>
      <div class="player-stat">Average: ${player.average}</div>
      <div class="player-stat">Economy: ${player.economy}</div>
    `;
    playerInfo.appendChild(playerStats);

    const moreInfoLink = document.createElement("div");
    moreInfoLink.classList.add("player-more-info");
    moreInfoLink.textContent = "More Info";
    // Add an event listener to handle clicks on the "More Info" link
    moreInfoLink.addEventListener("click", () => showPlayerDetails(player));
    playerInfo.appendChild(moreInfoLink);

    card.appendChild(playerInfo);

    bowlerSection.appendChild(card);
  });
}

// By default, show the first tab
document.getElementById("batsman").style.display = "block";

// Show batsman data when the Batsman tab is clicked
document.querySelector(".tablink:nth-child(1)").addEventListener("click", showBatsmanData);

// Show bowler data when the Bowler tab is clicked
document.querySelector(".tablink:nth-child(2)").addEventListener("click", showBowlerData);

