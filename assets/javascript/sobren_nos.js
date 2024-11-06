// Array de imagens de academias
const imagens = [
    "assets/imagens/th (2).jpg",
    "assets/imagens/th (3).jpg",
    "assets/imagens/th (4).jpg",
    "assets/imagens/th.jpg"
];

// Função para mostrar as imagens na galeria
function exibirImagens() {
    const gallery = document.getElementById("image-gallery");
    
    // Limpa o conteúdo da galeria antes de adicionar as novas imagens
    gallery.innerHTML = "";

    // Adiciona as imagens à galeria
    imagens.forEach(imagem => {
        const imgElement = document.createElement("img");
        imgElement.src = imagem;
        imgElement.alt = "Imagem de academia"; // Texto alternativo
        gallery.appendChild(imgElement);
    });

    // Torna a galeria visível e aumenta as imagens
    gallery.classList.add("image-gallery-visible");

    // Mostra o botão de minimizar e esconde o de mostrar
    document.getElementById("minimizeImagesButton").style.display = "block";
    document.getElementById("showImagesButton").style.display = "none";
}

// Função para ocultar as imagens novamente
function minimizarImagens() {
    const gallery = document.getElementById("image-gallery");

    // Remove todas as imagens da galeria
    gallery.innerHTML = "";

    // Esconde a galeria
    gallery.classList.remove("image-gallery-visible");

    // Mostra o botão de mostrar novamente
    document.getElementById("minimizeImagesButton").style.display = "none";
    document.getElementById("showImagesButton").style.display = "block";
}

// Chama a função ao carregar a página
window.onload = () => {
    // Inicialmente, a galeria está oculta
    document.getElementById("image-gallery").classList.remove("image-gallery-visible");
};
