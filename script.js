const cocktails = [
    { name: "Mojito", ingredients: ["Rhum", "Menthe", "Sucre", "Citron Vert", "Eau gazeuse"] },
    { name: "Piña Colada", ingredients: ["Rhum", "Ananas", "Noix de Coco"] },
    { name: "Margarita", ingredients: ["Tequila", "Citron Vert", "Triple Sec"] },
    { name: "Caipirinha", ingredients: ["Cachaça", "Citron Vert", "Sucre"] }
];

const ingredientList = ["Rhum", "Menthe", "Sucre", "Citron Vert", "Eau gazeuse", "Ananas", "Noix de Coco", "Tequila", "Triple Sec", "Cachaça"];

let selectedIngredients = [];
let cocktailIndex = 0;

function loadCocktail() {
    if (cocktailIndex >= cocktails.length) {
        document.getElementById("cocktail-name").textContent = "🎉 Félicitations ! Vous avez réussi tous les cocktails !";
        document.getElementById("ingredient-list").innerHTML = "";
        document.getElementById("selected-ingredients").innerHTML = "";
        document.getElementById("validate-btn").style.display = "none";
        return;
    }

    let currentCocktail = cocktails[cocktailIndex];
    document.getElementById("cocktail-name").textContent = `Trouvez la recette du ${currentCocktail.name}`;
    document.getElementById("selected-ingredients").textContent = "";
    document.getElementById("result").textContent = "";
    selectedIngredients = [];

    const container = document.getElementById("ingredient-list");
    container.innerHTML = "";
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
}

document.getElementById("validate-btn").addEventListener("click", () => {
    let currentCocktail = cocktails[cocktailIndex];
    const isCorrect = JSON.stringify(selectedIngredients.sort()) === JSON.stringify(currentCocktail.ingredients.sort());

    if (isCorrect) {
        document.getElementById("result").textContent = "Bravo ! 🎉 Cocktail réussi !";
        cocktailIndex++;
        setTimeout(loadCocktail, 2000);
    } else {
        document.getElementById("result").textContent = "Mauvaise combinaison ❌ Réessayez !";
    }
});

loadCocktail();
