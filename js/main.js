import menu from "./database.js";

const menuContainer = document.querySelector("#menu-container");
// console.log(menuContainer);

const filterButton = document.querySelectorAll(".filter-button");
// console.log(filterButton);

document.addEventListener("DOMContentLoaded", () => {
  displayMenuFunc(menu);
});

function displayMenuFunc(menuItems) {
  let displayMenu = menuItems.map(
    (menuItem) =>
      `<div class="d-flex align-items-center gap-3 flex-column flex-md-row my-2" id="card">
    <img src=${menuItem.img} id="image" class="rounded" />
    <div class="cart-right">
      <div class="d-flex flex-col justify-content-between">
        <h5>${menuItem.title}</h5>
        <p class="fw-bold">${menuItem.price} $</p>
      </div>
      <p class="lead">${menuItem.desc}</p>
    </div>
  </div>`
  );

  displayMenu = displayMenu.join("");
  menuContainer.innerHTML = displayMenu;
}

filterButton.forEach((button) => {
  button.addEventListener("click", (event) => {
    const category = event.target.dataset.id;
    searchCategory(category);
  });
});

function searchCategory(categoryInfo) {
  const filteredMenu = menu.filter((menuItem) => {
    if (categoryInfo === menuItem.category) {
      return menuItem;
    }
  });

  if (categoryInfo === "all") {
    displayMenuFunc(menu);
  } else {
    displayMenuFunc(filteredMenu);
  }
}
