// Sugestões de exercícios baseadas em objetivos
const exerciseData = {
    perda_peso: [
        "Caminhada rápida (30 min)",
        "Treino HIIT (20 min)",
        "Aula de spinning (45 min)",
        "Circuito de força (30 min)"
    ],
    ganho_massa: [
        "Levantamento de peso (3 séries de 8-10 repetições)",
        "Supino reto (3 séries de 8-10 repetições)",
        "Agachamento com barra (3 séries de 8-10 repetições)",
        "Treino de resistência com elástico"
    ],
    resistencia: [
        "Corrida (30-60 min)",
        "Ciclismo (45 min)",
        
    ]
};

// Função para obter sugestões de exercícios
function obterSugestoes() {
    const goal = document.getElementById("goalSelect").value;
    const suggestionsDiv = document.getElementById("exerciseSuggestions");
    suggestionsDiv.innerHTML = ""; // Limpa o conteúdo anterior

    if (goal && exerciseData[goal]) {
        exerciseData[goal].forEach(exercicio => {
            const p = document.createElement("p");
            p.textContent = exercicio; // Adiciona a sugestão
            suggestionsDiv.appendChild(p);
        });
        suggestionsDiv.style.display = "block"; // Exibe as sugestões
    } else {
        suggestionsDiv.style.display = "none"; // Esconde se não houver objetivo selecionado
    }
}

// Adiciona evento ao botão
document.getElementById("getSuggestionsButton").addEventListener("click", obterSugestoes);