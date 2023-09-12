const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const mealList = document.getElementById("mealList");
const modalContainer = document.querySelector(".modalContainer");
const mealDetailsContent = document.querySelector("meal-details-content");
const recipeCloseBtn = document.getElementById("recipeCloseBtn");

// Event Listeners
searchButton.addEventListener("click", async () => {
  const ingredient = searchInput.value.trim();
  if (ingredient) {
    const meals = await searchMealsByIngredient(ingredient);
    displayMeals(meals);
  }
});

mealList.addEventListener('click', async (e)=>{
    const card = e.target.closest('meal-item')
    if(card) {
        const mealId = card.dataset.id
        const meal = await getMealDetails(mealId)
        if(meal) {
            showMealDetailsPopup(meal)
        }
    }
})