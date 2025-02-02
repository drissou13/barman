const cocktails = [
    { name: "Mojito", ingredients: ["Rhum", "Menthe", "Sucre", "Citron Vert", "Eau gazeuse"] },
    { name: "Piña Colada", ingredients: ["Rhum", "Ananas", "Noix de Coco"] },
    { name: "Margarita", ingredients: ["Tequila", "Citron Vert", "Triple Sec"] }
];

let selectedIngredients = [];
let currentCocktail = cocktails[Math.floor(Math.random() * cocktails.length)];

document.getElementById("cocktail-name").textContent = `Trouvez la recette du ${currentCocktail.name}`;

const ingredientList = ["Rhum", "Menthe", "Sucre", "Citron Vert", "Eau gazeuse", "Ananas", "Noix de Coco", "Tequila", "Triple Sec", "Vodka"];

const container = document.getElementById("ingredient-list");
ingredientList.forEach(ingredient => {
    const btn = document.createElement("div");
    btn.classList.add("ingredient");
    btn.textContent = ingredient;
    btn.addEventListener("click", () => {
        if (selectedIngredients.includes(ingredient)) {
            selectedIngredients = selectedIngredients.filter(item => item !== ingredient);
            btn.classList.remove("selected");
        } else {
            selectedIngredients.push(ingredient);
            btn.classList.add("selected");
        }
        document.getElementById("selected-ingredients").textContent = selectedIngredients.join(", ");
    });
    container.appendChild(btn);
});

document.getElementById("validate-btn").addEventListener("click", () => {
    const isCorrect = JSON.stringify(selectedIngredients.sort()) === JSON.stringify(currentCocktail.ingredients.sort());
    document.getElementById("result").textContent = isCorrect ? "Bravo ! 🎉" : "Mauvaise combinaison ❌";
});