const imagens = [
    { src: 'assets/images/galera1.jpg', title: 'Imagem 1' },
    { src: 'assets/images/galera2.jpg', title: 'Imagem 2' },
    { src: 'assets/images/galera3.jpg', title: 'Imagem 3' },
    { src: 'assets/images/galera4.jpg', title: 'Imagem 4' },
    { src: 'assets/images/galera5.jpg', title: 'Imagem 5' },
    { src: 'assets/images/galera1.jpg', title: 'Imagem 6' },
    { src: 'assets/images/galera2.jpg', title: 'Imagem 7' },
    { src: 'assets/images/galera3.jpg', title: 'Imagem 8' },
    { src: 'assets/images/galera4.jpg', title: 'Imagem 9' },
    { src: 'assets/images/galera5.jpg', title: 'Imagem 10' },
];

const galeriaHTML = imagens.map(imagem => {
    return `
      <div class="grid-item">
        <img src="${imagem.src}" alt="${imagem.title}">
      </div>
    `;
}).join('');

document.querySelector('.grid-container').innerHTML = galeriaHTML;

