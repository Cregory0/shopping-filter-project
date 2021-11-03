// object to store data that will be used in our 'item cards'

let itemObject = [
  {
    name: "Regular Fit Crew Neck T-Shirts 7 Pack",
    type: "T-Shirt",
    category: "Men",
    price: "£42.00",
    img: "./Images/Men/Men_T-Shirt_1.jpg",
    color: "N/A - MultiPack",
  },
  {
    name: "Crew Neck Regular Fit Stag T-Shirts 5 Pack",
    type: "T-Shirt",
    category: "Men",
    price: "£40.00",
    img: "./Images/Men/Men_T-Shirt_2.jpg",
    color: "N/A - MultiPack",
  },
  {
    name: "Dark Grey Skinny Fit Stretch Chinos",
    type: "Trousers",
    category: "Men",
    price: "£22.00",
    img: "./Images/Men/Men_Trousers_1.jpg",
    color: "Light Brown",
  },
  {
    name: "Navy Blue Skinny Fit Stretch Chinos",
    type: "Trousers",
    category: "Men",
    price: "£22.00",
    img: "./Images/Men/Men_Trousers_2.jpg",
    color: "Navy Blue",
  },
  {
    name: "Roman Red Floral Side Button Tea Dress",
    type: "Dress",
    category: "Woman",
    price: "£40.00",
    img: "./Images/Woman/Woman_Dress_1.jpg",
    color: "Red",
  },
  {
    name: "Sistaglam All Over Lace Bardot Maxi Dress",
    type: "Dress",
    category: "Woman",
    price: "£85.00",
    img: "./Images/Woman/Woman_Dress_2.jpg",
    color: "Dark Blue",
  },
  {
    name: "Dark Blue Jersey Denim Leggings",
    type: "Trousers",
    category: "Woman",
    price: "£22.00",
    img: "./Images/Woman/Woman_Trousers_1.jpg",
    color: "Denim",
  },
  {
    name: "Black Jersey Denim Leggings",
    type: "Trousers",
    category: "Woman",
    price: "£22.00",
    img: "./Images/Woman/Woman_Trousers_2.jpg",
    color: "Black",
  },
  {
    name: "Mineral 5 Pack Long Sleeve T-Shirts",
    type: "T-Shirt",
    category: "Boys",
    price: "£17.00",
    img: "./Images/Boys/Boys_T-Shirt_1.jpg",
    color: "N/A - MultiPack",
  },
  {
    name: "Multi 8 Pack T-Shirts",
    type: "T-Shirt",
    category: "Boys",
    price: "£22.00",
    img: "./Images/Boys/Boys_T-Shirt_2.jpg",
    color: "N/A - MultiPack",
  },
  {
    name: "Black Skinny Fit Five Pocket Jeans",
    type: "Trousers",
    category: "Boys",
    price: "£15.00",
    img: "./Images/Boys/Boys_Trousers_1.jpg",
    color: "Black",
  },
  {
    name: "Indigo Regular Fit Jersey Denim Pull-On Jeans",
    type: "Trousers",
    category: "Boys",
    price: "£14.00",
    img: "./Images/Boys/Boys_Trousers_2.jpg",
    color: "Denim",
  },
  {
    name: "Red Christmas Jersey Dress",
    type: "Dress",
    category: "Girls",
    price: "£9.00",
    img: "./Images/Girls/Girls_Dresses_1.jpg",
    color: "Red",
  },
  {
    name: "Black/Red Floral Occasion Dress",
    type: "Dress",
    category: "Girls",
    price: "£30.00",
    img: "./Images/Girls/Girls_Dresses_2.jpg",
    color: "Black",
  },
  {
    name: "Pink Cosmic Print 5 Pack Sleepsuits",
    type: "Sleepsuit",
    category: "Girls",
    price: "£25.00",
    img: "./Images/Girls/Girls_Sleepsuits_1.jpg",
    color: "N/A - MultiPack",
  },
  {
    name: "Halloween Glow in Dark Print 2 Pack",
    type: "Sleepsuit",
    category: "Girls",
    price: "£14.00",
    img: "./Images/Girls/Girls_Sleepsuits_2.jpg",
    color: "N/A - MultiPack",
  },
];

// Variable for the shop container and function to generate 'item cards' with the itemObject data shown on each card

let shopContainer = document.getElementById("shop-container");

const generateCard = (obj) => {
  obj.forEach((element, index) => {
    let div = document.createElement("div");
    div.classList.add("item-card");
    shopContainer.appendChild(div);
    let card = document.querySelectorAll(".item-card");
    div.dataset.category = obj[index].category;
    div.dataset.type = obj[index].type;
    div.dataset.color = obj[index].color;
    div.innerHTML = `
    <img class="card-img" src="${obj[index].img}">
          <div class="card-title">
              <h1>${obj[index].name}</h1>
            <p>${obj[index].price}</p>
    `;
  });
};

generateCard(itemObject);

// card variable for each 'item-card' and then a function for each filter group (Category & Type) to filter and only show specific cards
// I use a foreach loop for each card and if the elements dataset matches it will either set display as 'flex' or 'none

let card = document.querySelectorAll(".item-card");

const filterByCategory = (category) => {
  card.forEach((element) => {
    if (element.dataset.category === category) {
      element.style.display = "flex";
    } else {
      element.style.display = "none";
    }
  });
};

const filterByType = (type) => {
  card.forEach((element) => {
    if (element.dataset.type === type) {
      element.style.display = "flex";
    } else {
      element.style.display = "none";
    }
  });
};

// reset function so all cards are set to display 'flex'

const reset = () => {
  card.forEach((element) => {
    element.style.display = "flex";
  });
};

// Variables for filter options

// Category

let woman = document.getElementById("woman");
let men = document.getElementById("men");
let boys = document.getElementById("boys");
let girls = document.getElementById("girls");

// Type

let tShirt = document.getElementById("t-shirt");
let trousers = document.getElementById("trousers");
let dress = document.getElementById("dress");
let sleepsuit = document.getElementById("sleepsuit");

// filter by Category checkbox click events

woman.addEventListener("click", function () {
  if (this.checked) {
    filterByCategory("Woman");
  } else {
    reset();
  }
});

men.addEventListener("click", function () {
  if (this.checked) {
    filterByCategory("Men");
  } else {
    reset();
  }
});

boys.addEventListener("click", function () {
  if (this.checked) {
    filterByCategory("Boys");
  } else {
    reset();
  }
});

girls.addEventListener("click", function () {
  if (this.checked) {
    filterByCategory("Girls");
  } else {
    reset();
  }
});

// filter by type checkbox click events

tShirt.addEventListener("click", function () {
  if (this.checked) {
    filterByType("T-Shirt");
  } else {
    reset();
  }
});

trousers.addEventListener("click", function () {
  if (this.checked) {
    filterByType("Trousers");
  } else {
    reset();
  }
});

dress.addEventListener("click", function () {
  if (this.checked) {
    filterByType("Dress");
  } else {
    reset();
  }
});

sleepsuit.addEventListener("click", function () {
  if (this.checked) {
    filterByType("Sleepsuit");
  } else {
    reset();
  }
});

// color filter variable

let color = document.querySelectorAll(".color");

// foreach loop to add a click event to each color filter, if the dataset color matches then it will display the item-cards with that color
// if it doesn't matches then it sets the display to 'none'

color.forEach((element) => {
  element.addEventListener("click", function () {
    if (element.dataset.color == "red") {
      card.forEach((element) => {
        if (element.dataset.color == "Red") {
          element.style.display = "flex";
        } else {
          element.style.display = "none";
        }
      });
    } else if (element.dataset.color == "denim") {
      card.forEach((element) => {
        if (element.dataset.color == "Denim") {
          element.style.display = "flex";
        } else {
          element.style.display = "none";
        }
      });
    } else if (element.dataset.color == "light-brown") {
      card.forEach((element) => {
        if (element.dataset.color == "Light Brown") {
          element.style.display = "flex";
        } else {
          element.style.display = "none";
        }
      });
    } else if (element.dataset.color == "dark-blue") {
      card.forEach((element) => {
        if (element.dataset.color == "Dark Blue") {
          element.style.display = "flex";
        } else {
          element.style.display = "none";
        }
      });
    } else if (element.dataset.color == "black") {
      card.forEach((element) => {
        if (element.dataset.color == "Black") {
          element.style.display = "flex";
        } else {
          element.style.display = "none";
        }
      });
    } else if (element.dataset.color == "navy-blue") {
      card.forEach((element) => {
        if (element.dataset.color == "Navy Blue") {
          element.style.display = "flex";
        } else {
          element.style.display = "none";
        }
      });
    }
  });
});

// Filter by the nav links

// Variables for each nav element

const womanNav = document.getElementById("woman-nav");

const menNav = document.getElementById("men-nav");

const boysNav = document.getElementById("boys-nav");

const girlsNav = document.getElementById("girls-nav");

// Click events for each nav element to then run the filterByCategory function

womanNav.addEventListener("click", function () {
  filterByCategory("Woman");
});

menNav.addEventListener("click", function () {
  filterByCategory("Men");
});

boysNav.addEventListener("click", function () {
  filterByCategory("Boys");
});

girlsNav.addEventListener("click", function () {
  filterByCategory("Girls");
});
