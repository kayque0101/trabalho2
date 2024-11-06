const planos = {
    plano_comum: [
        {
            nome: "Plano Diário",
            descricao: "Acesso ilimitado por um dia.",
            preco: "R$ 30,00",
            beneficios: [
                "Acesso completo ao conteúdo por 24 horas, ideal para quem precisa de acesso rápido e temporário.",
                "Acesso a conteúdos básicos e vídeos de treinamento."
            ]
        },
        {
            nome: "Plano Mensal",
            descricao: "Acesso ilimitado por 30 dias.",
            preco: "R$ 120,00",
            beneficios: [
                "Acesso completo ao conteúdo por um mês.",
                "Descontos em produtos e serviços parceiros.",
                "Acesso a conteúdos exclusivos, como webinars e workshops."
            ]
        },
        {
            nome: "Plano Anual",
            descricao: "Acesso ilimitado por 12 meses.",
            preco: "R$ 1.300,00",
            beneficios: [
                "Acesso por um ano inteiro.",
                "Descontos exclusivos em produtos e serviços.",
                "Conteúdos especiais ao longo do ano."
            ]
        }
    ],
    plano_familia: [
        {
            nome: "Plano Família Diário",
            descricao: "Acesso para até 4 pessoas por 1 dia.",
            preco: "R$ 70,00",
            beneficios: [
                "Acesso completo para toda a família por 24 horas.",
                "Conteúdo exclusivo para membros da família.",
                "Acesso simultâneo para até 4 pessoas."
            ]
        },
        {
            nome: "Plano Família Mensal",
            descricao: "Acesso para até 4 pessoas por 30 dias.",
            preco: "R$ 600,00",
            beneficios: [
                "Acesso para toda a família durante 30 dias.",
                "Conteúdo exclusivo.",
                "Suporte premium durante 30 dias.",
                "Descontos em produtos e serviços para membros da família."
            ]
        },
        {
            nome: "Plano Família Anual",
            descricao: "Acesso para até 4 pessoas por 12 meses.",
            preco: "R$ 2.000,00",
            beneficios: [
                "Acesso completo para toda a família durante o ano inteiro.",
                "Conteúdo exclusivo e especial para membros da família.",
                "Descontos em produtos e serviços ao longo do ano."
            ]
        }
    ],
    plano_vip: [
        {
            nome: "Plano VIP Diário",
            descricao: "Acesso VIP por um dia.",
            preco: "R$ 500,00",
            beneficios: [
                "Acesso exclusivo e suporte personalizado por 24 horas.",
                "Conteúdos premium e atendimento VIP.",
                "Acesso a eventos exclusivos online e físicos."
            ]
        },
        {
            nome: "Plano VIP Mensal",
            descricao: "Acesso VIP por 30 dias.",
            preco: "R$ 2.500,00",
            beneficios: [
                "Acesso VIP completo durante 30 dias.",
                "Descontos exclusivos em parceiros.",
                "Suporte 24/7 e atendimento personalizado.",
                "Acesso a conteúdos exclusivos e eventos VIP."
            ]
        },
        {
            nome: "Plano VIP Anual",
            descricao: "Acesso VIP por 12 meses.",
            preco: "R$ 10.000,00",
            beneficios: [
                "Acesso VIP durante o ano inteiro.",
                "Suporte personalizado 24/7.",
                "Conteúdos exclusivos e descontos em produtos e serviços parceiros.",
                "Acesso a eventos exclusivos e atendimento VIP."
            ]
        }
    ]
};

// Função para mostrar os planos de uma categoria
function mostrarPlanos(categoria) {
    const plansContainer = document.getElementById("plansContainer");
    plansContainer.innerHTML = ""; // Limpa o conteúdo anterior

    // Exibe os planos da categoria selecionada
    planos[categoria].forEach(plano => {
        const planoDiv = document.createElement("div");
        planoDiv.className = "plano"; // Adiciona uma classe para estilização
        planoDiv.innerHTML = `
            <h3>${plano.nome}</h3>
            <p>${plano.descricao}</p>
            <p><strong>Preço: ${plano.preco}</strong></p>
            <h4>Benefícios:</h4>
            <ul>
                ${plano.beneficios.map(beneficio => `<li>${beneficio}</li>`).join('')}
            </ul>
        `;

        // Adiciona evento de clique para mostrar os benefícios em formato de lista
        planoDiv.addEventListener("click", () => {
            mostrarBeneficios(plano.beneficios);
        });

        plansContainer.appendChild(planoDiv);
    });

    // Mostra o botão de minimizar e esconde o de mostrar
    document.getElementById("minimizePlansButton").style.display = "block";
    document.getElementById("showPlansButton").style.display = "none";
}

// Função para minimizar os planos
function minimizarPlanos() {
    const plansContainer = document.getElementById("plansContainer");
    plansContainer.innerHTML = ""; // Limpa os planos exibidos

    // Esconde o botão de minimizar e mostra o de mostrar
    document.getElementById("minimizePlansButton").style.display = "none";
    document.getElementById("showPlansButton").style.display = "block";
}

// Função para exibir os planos por categoria
function exibirCategorias() {
    const categoriesContainer = document.getElementById("categoriesContainer");
    categoriesContainer.innerHTML = ""; // Limpa o conteúdo anterior

    const categorias = ["plano_comum", "plano_familia", "plano_vip"];

    categorias.forEach(categoria => {
        const categoriaDiv = document.createElement("div");
        categoriaDiv.className = "categoria"; // Adiciona uma classe para estilização
        categoriaDiv.innerHTML = `
            <h3>${categoria.replace("plano_", "").replace("_", " ").toUpperCase()}</h3>
        `;
        
        // Adiciona evento de clique para mostrar os planos dessa categoria
        categoriaDiv.addEventListener("click", () => {
            mostrarPlanos(categoria);
        });

        categoriesContainer.appendChild(categoriaDiv);
    });
}

// Chama a função para exibir as categorias ao carregar a página
document.addEventListener("DOMContentLoaded", exibirCategorias);

// Adiciona eventos aos botões
document.getElementById("showPlansButton").addEventListener("click", mostrarPlanos);
document.getElementById("minimizePlansButton").addEventListener("click", minimizarPlanos);
