//Reference guide
//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
//https://www.w3schools.com/js/default.asp
//
//Author - Innocent Okeke - innowhat@gmail.com
//
//----------------------------------------------------------------------------//

// This is needed to address issue related to using async await
import "regenerator-runtime/runtime";
//----------------------------------------------------------------------------//
const categoryHeader = document.getElementById("category-header");
const categoryDescription = document.getElementById("category-description");
const mainView = document.getElementById("main-view");
const searchResultView = document.getElementById("search-result-view");
const search = document.getElementById("search");
let searchData = [];
//------------------------------------------------------------------------------//

// Fetch and load data state
const loadGames = async () => {
  try {
    const response = await fetch("/api/games/lists.json");
    let data = await response.json();
    displayGames(data);
    //Concat all categories to a single array
    let arr = [
      ...data.lists[0].items,
      ...data.lists[1].items,
      ...data.lists[2].items,
    ];
    //Remove duplicate
    searchData = [...new Map(arr.map((item) => [item.id, item])).values()];
  } catch (err) {
    console.error(err);
  }
};

// Search event handler
search.addEventListener("keyup", (e) => {
  const searchInput = e.target.value.toLowerCase();
  let filteredGames = searchData.filter((game) => {
    return (
      // Search game by Title or Provider
      game.title.toLowerCase().includes(searchInput) ||
      game.provider.toLowerCase().includes(searchInput)
    );
  });

  // Toggle view based on input event
  if (searchInput.length === 0) {
    filteredGames = [];
    searchResultView.innerHTML = "";
    mainView.style.display = "initial";
  } else {
    mainView.style.display = "none";
  }

  // Pass the state to search result handler
  displaySearchResult(filteredGames);
});

//Display  list based on default state
const displayGames = (games) => {
  //Header and description
  categoryHeader.innerHTML = games.title;
  categoryDescription.innerHTML = games.description;
  // Content
  mainView.innerHTML = games.lists
    .map(({ title, items }) => {
      return `
      <div>
            <h3>
            ${title}
            </h3>
            <ul class="cards">
            ${items
              .map((item) => {
                return `
                <li class="card">
                <a href="#">
                    <img src="${item.image}"></img>
                    </a>
                    <h4>${item.title}</h4>
                    <small>provider: ${item.provider}</small>
                </li>
                `;
              })
              .join("")}
            </ul>
    </div>
    `;
    })
    .join("");
};

//Display  list based on current search result
const displaySearchResult = (games) => {
  if (games.length > 0) {
    searchResultView.innerHTML = games
      .map((game) => {
        return `
                <li class="card">
                    <a href="#">
                    <img src="${game.image}"></img>
                    </a>
                    <h4>${game.title}</h4>
                    <small>Provider: ${game.provider}</small>
                </li>
            `;
      })
      .join("");
  }
};

// Initialize function
loadGames();
