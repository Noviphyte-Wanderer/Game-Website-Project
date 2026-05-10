const latestGamesSection = document.getElementById("latest-games");
const featuredGamesSection = document.getElementById("featured-games");
const gameCardModal = document.getElementById("game-card-modal");
const modalBackdrop = document.querySelector(".modal-backdrop");

const leftSliders = [...document.getElementsByClassName("left-slider")];
const rightSliders = [...document.getElementsByClassName("right-slider")];
const sliderMoveRate = 180;

leftSliders.forEach((lSlider) => {
  lSlider.addEventListener("click", (e) => {
    const parentContainer = e.target.parentNode;
    const desiredSection = parentContainer.querySelector(".games-catalog");
    let rightPosition = parseFloat(
      window.getComputedStyle(desiredSection).right,
    );
    const leftBound = desiredSection.scrollWidth - desiredSection.offsetWidth;

    if (rightPosition > 0) {
      if (rightPosition - sliderMoveRate <= 0) {
        rightPosition = 0;
        desiredSection.style.right = `${0}px`;
      } else {
        rightPosition -= sliderMoveRate;
        desiredSection.style.right = `${rightPosition}px`;
      }
    }
    console.log(window.getComputedStyle(desiredSection).right);
  });
});

rightSliders.forEach((rSlider) => {
  rSlider.addEventListener("click", (e) => {
    const parentContainer = e.target.parentNode;
    const desiredSection = parentContainer.querySelector(".games-catalog");
    let rightPosition = parseFloat(
      window.getComputedStyle(desiredSection).right,
    );

    const leftBound = desiredSection.scrollWidth - desiredSection.offsetWidth;
    if (leftBound > 0) {
      if (rightPosition + sliderMoveRate > leftBound) {
        rightPosition = leftBound;
        desiredSection.style.right = `${rightPosition}px`;
      } else {
        rightPosition += sliderMoveRate;
        desiredSection.style.right = `${rightPosition}px`;
      }
    }
    console.log("P-right:", window.getComputedStyle(desiredSection).right);
  });
});

const MAX_CARDS = 4;
const MAX_CARDS_MED = 3;
let maxCards = MAX_CARDS;
const gamesCatalogue = [
  {
    name: "TEARDOWN",
    year: 2021,
    price: 12.99,
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqkjEp0Fgpx4iyQ2ZTWwOmLfcn3lDRq2HiXw&s",
    alt: "Crane machine tearing down an expensive building. Teardown cover art.",
    description:
      "You are a jobber whose goal is to complete various tasks from employers to gain some dough. Use the environment to your advantage. Drive a car through a building, breach your way through the area, smash some boxes. You can do a lot of things with this game.",
    retailDate: "Mar 30, 2026",
    featured: true,
  },
  {
    name: "Just Shapes and Beats",
    year: 2018,
    price: 7.99,
    cover:
      "https://howlongtobeat.com/games/57138_Just_Shapes_&_Beats.jpg?width=760",
    alt: "Four shapes -- a square, a triangle, a circle, and a pentagon -- band together to defeat the big boss. Just Shapes and Beats cover art.",
    description:
      "Maneuver your way through levels and boss fights where you dodge attacks and dash your way through the field. This world of shapes and beats will get your body rockin with its music.",
    retailDate: "Mar 30, 2026",
    featured: true,
  },
  {
    name: "Lethal Company",
    year: 2023,
    price: 8.99,
    cover: "https://e.snmc.io/lk/f/x/a8dae5b773170c7163c176101754903e/11488225",
    alt: "Two spacemen on screen over a red background (minus the title). One is holding a flashlight over what is assumed to be a dark place.",
    description:
      "You and your friends are tasked with gathering the remains of objects across different planets in order to keep up with the salvage deadlines. Can you venture through the unknown alive? This is a really fun and chaotic game to play.",
    retailDate: "Mar 31, 2026",
  },
  {
    name: "No Man's Sky",
    year: 2016,
    price: 29.99,
    cover:
      "https://cdn.mobygames.com/covers/3556083-no-mans-sky-xbox-one-front-cover.jpg",
    alt: "An astronaut gazing at a distant alien planet from an equally alien place.",
    description:
      "In this procedurally generated game, you are an astronaut that can traverse through a whole of universe of planets, and you've got a lot of roads you can take. Explore new worlds, build your bases, trade items, find the origins of the universe, engage in space combat, etc. The game is so engaging, you would not want to let go of the controller.",
    retailDate: "Mar 29, 2026",
    featured: true,
  },
  {
    name: "CODENAMES",
    year: 2022,
    price: 7.99,
    cover:
      "https://theguardtower.com/cdn/shop/products/codenames_32ffbb56-f1d2-4208-b350-c890785266f6_grande.jpg?v=1607698638",
    alt: "Two spies. One says 'Top Secret'. The other says 'Word Game'",
    description:
      "There are two teams and a board with cards with words on each one. Each card either belongs to one of the two teams, is a blank or a bomb card, but no one except the leaders know. You are tasked with guessing the words your team has before the other team does. It's a fun game for friends to play.",
    retailDate: "Mar 21, 2026",
    featured: true,
  },
  {
    name: "Deltarune",
    year: 2018,
    price: 29.99,
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST_4pULKXo_o_MpkBFjeWz-LzY-ygevhZ6Vw&s",
    alt: "Three warriors gaze upon a pillar of dark light bursting forth from the ground. An experience beyond your imagination.",
    description:
      "An adventure beyond the realm of light as our three main characters journey through the dark world and work to hange the prophecy of destruction that awaits them. Can the Roaring be stopped?",
    retailDate: "Mar 13, 2026",
    featured: true,
  },
  {
    name: "Elden Ring",
    year: 2018,
    price: 59.99,
    cover:
      "https://m.media-amazon.com/images/I/6110RSDn3PL._AC_UF350,350_QL80_.jpg",
    alt: "A knight kneels before a sword wedged in the ground. In the background is a vast gothic and dark world beyond, and in the sky is an ephereal symbol symbolizing the game theme.",
    description:
      "Returning to the fantasy world of the Souls series created by FromSoftware, this newest installment is the latest of a difficult journey of very hard bosses. If you are new to games, this game may not be for you.",
    retailDate: "Mar 27, 2026",
    featured: false,
  },
];
window.addEventListener("resize", (e) => {
  if (window.innerWidth <= 960) {
    maxCards = MAX_CARDS_MED;
  } else {
    maxCards = MAX_CARDS;
  }
});
const latestGames = gamesCatalogue.filter((game) => {
  const nowDate = new Date();
  const retailDate = new Date(game.retailDate);

  const diffTime = nowDate.getTime() - retailDate.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 3600 * 24));
  return diffDays <= 30;
});

const featuredGames = gamesCatalogue.filter((game) => game.featured);

const renderGameCards = (selector, games) => {
  const gameCards = games.map(
    (card) => `
  <div tabindex="0" class="games-card">
    <img class="card-image" src="${card.cover}" alt="${card.alt}. Click to learn more.">
  </div>
`,
  );
  selector.innerHTML += gameCards.join("");
};

const renderModal = (gamesArr) => {
  const gameCards = [...document.querySelectorAll(".games-card")];

  gameCards.forEach((card) => {
    const gameInfo = gamesArr.find(
      (game) => game.cover === card.querySelector(".card-image").src,
    );

    card.addEventListener("click", () => {
      gameCardModal.innerHTML += `
        <button class="cancel-modal" onclick="closeModal();">X</button>
        <div class="game-card">
          <img src="${card.querySelector(".card-image").getAttribute("src")}" alt="">
          <div class="game-info">
            <p class="game-title text-center">${gameInfo.name}</p>
            <p class="game-description">${gameInfo.description}</p>
            <p class="game-price text-center">Price: $${gameInfo.price}</p>
          </div>
          <button type="button" class="add-to-cart-btn">ADD TO CART</button>
        </div>
      `;
      modalBackdrop.style.display = "block";
      modalBackdrop.style.background = "rgba(0,0,0,0.4)";
      gameCardModal.showModal();
      gameCardModal.style.opacity = "1";
    });
  });
};

function closeModal() {
  modalBackdrop.style.display = "none";
  modalBackdrop.style.background = "none";
  gameCardModal.style.opacity = "0";
  setTimeout(() => {
    gameCardModal.innerHTML = "";

    gameCardModal.close();
  }, 50);
}

document.addEventListener("click", (e) => {
  if (gameCardModal.style.display === "block" && e.target !== gameCardModal) {
    console.log("YEP");
  }
});
renderGameCards(latestGamesSection, latestGames);
renderGameCards(featuredGamesSection, featuredGames);

renderModal(gamesCatalogue);
