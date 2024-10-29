const recipes = [
  { name: "Chocolate Mousse", link: "https://kitchencents.com/easy-3-ingredient-chocolate-mousse/" },
  { name: "Tiramisu", link: "https://tastesbetterfromscratch.com/easy-tiramisu/" },
  { name: "Cheesecake", link: "https://www.simplyrecipes.com/recipes/perfect_cheesecake/" },
  { name: "Vanilla Ice Cream", link: "https://www.biggerbolderbaking.com/homemade-ice-cream/" },
  { name: "Banana Bread", link: "https://thesaltymarshmallow.com/best-banana-bread-recipe/" },
  { name: "Strawberry Filled Cake", link: "https://www.thecookierookie.com/white-layer-cake-with-strawberry-filling/" },
  { name: "Snickerdoodles", link: "https://www.modernhoney.com/the-best-snickerdoodle-cookie-recipe/" },
  { name: "Cinnamon Rolls", link: "https://www.ambitiouskitchen.com/best-cinnamon-rolls/" },
  { name: "Carrot Cake Cupcakes", link: "https://www.inspiredtaste.net/46269/carrot-cake-cupcakes/" },
  { name: "Brownies", link: "https://mommyshomecooking.com/ultimate-fudgy-brownies-without-eggs/#recipe" }
];

const dessertImages = {
  "Chocolate Mousse": "../images/mousse.jpg",
  "Tiramisu": "../images/tiramisu.png",
  "Cheesecake": "../images/cheesecake.png",
  "Vanilla Ice Cream": "../images/icecream.jpg",
  "Banana Bread": "../images/bread.jpg",
  "Strawberry Filled Cake": "../images/cake.jpg",
  "Snickerdoodles": "../images/snickerdoodle.jpg",
  "Cinnamon Rolls": "../images/roll.png",
  "Carrot Cake Cupcakes": "../images/cupcakes.png",
  "Brownies": "../images/brownies.jpg"
};

const pastelColors = [
  "#FFB3BA",
  "#FFDFBA",
  "#FFFFBA",
  "#BAFFC9",
  "#BAE1FF",
  "#FFB3E6",
  "#FFD1BA",
  "#C2C2F0",
  "#FFC3A0",
  "#FF677D"
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(recipes);

function renderCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";

  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];

    const card = document.createElement('div');
    card.classList.add('card');

    const front = document.createElement('div');
    front.classList.add('card-face', 'card-front');
    front.textContent = "Click to reveal dessert!";

    const randomColor = pastelColors[Math.floor(Math.random() * pastelColors.length)];
    front.style.backgroundColor = randomColor;

    const back = document.createElement('div');
    back.classList.add('card-face', 'card-back');
    back.style.backgroundImage = `url(${dessertImages[recipe.name]})`;
    back.style.backgroundSize = 'cover';
    back.style.backgroundPosition = 'center';
    back.innerHTML = `<a href="${recipe.link}" target="_blank">${recipe.name}</a>`;

    card.appendChild(front);
    card.appendChild(back);

    front.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });

    cardContainer.appendChild(card);
  }
}

renderCards();
