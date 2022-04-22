const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
let mealDbFoods = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = mealDbFoods.categories.filter((foods) => {
        return (
            foods.strCategory.toLowerCase().includes(searchString) ||
            foods.strCategory.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});

const loadCharacters = async () => {
    try {
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        mealDbFoods = await res.json();


        mealDbFoods.categories.length = 6;
        displayCharacters(mealDbFoods.categories);
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (foods) => {
    const htmlString = foods
        .map((food) => {
            return `
            <li class="character">
                <h2>${food.strCategory}</h2> <br/>
                <p>${food.strCategoryDescription.slice(0,150)}</p>
                <img src="${food.strCategoryThumb}"></img>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();

