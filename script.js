const cocktails = [
    { name: "Mojito", ingredients: ["Rhum", "Menthe", "Sucre", "Citron Vert", "Eau gazeuse"] },
    { name: "Piña Colada", ingredients: ["Rhum", "Ananas", "Noix de Coco"] },
    { name: "Margarita", ingredients: ["Tequila", "Citron Vert", "Triple Sec"] },
    { name: "Caipirinha", ingredients: ["Cachaça", "Citron Vert", "Sucre"] },
    { name: "Daiquiri", ingredients: ["Rhum", "Citron Vert", "Sucre"] },
    { name: "Ti' Punch", ingredients: ["Rhum", "Citron Vert", "Sucre"] },
    { name: "Blue Lagoon simplifiée", ingredients: ["Tequila", "Citron Vert", "Triple Sec"] },
    { name: "Batida", ingredients: ["Cachaça", "Noix de Coco", "Sucre"] },
    { name: "Caipirissima", ingredients: ["Rhum", "Citron Vert", "Sucre"] },
    { name: "Cubanito", ingredients: ["Rhum", "Citron Vert", "Eau gazeuse"] },
    { name: "Planteur", ingredients: ["Rhum", "Ananas", "Citron Vert", "Sucre"] },
    { name: "Mai Tai", ingredients: ["Rhum", "Triple Sec", "Citron Vert", "Sucre"] },
    { name: "Zombie", ingredients: ["Rhum", "Ananas", "Citron Vert", "Sucre"] },
    { name: "Cuba Libre", ingredients: ["Rhum", "Citron Vert", "Eau gazeuse"] },
    { name: "Tequila Sunrise", ingredients: ["Tequila", "Citron Vert", "Sucre"] },
    { name: "Punch Coco", ingredients: ["Rhum", "Noix de Coco", "Sucre"] },
    { name: "Tropical Fizz", ingredients: ["Rhum", "Ananas", "Eau gazeuse"] },
    { name: "Exotic Caïpirinha", ingredients: ["Cachaça", "Ananas", "Sucre"] },
    { name: "Caribbean Delight", ingredients: ["Rhum", "Noix de Coco", "Ananas", "Citron Vert"] }
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
