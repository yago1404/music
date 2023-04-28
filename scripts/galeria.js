const galleryItems = [
    { src: 'assets/images/galera1.jpg', title: 'Imagem 1' },
    { src: 'assets/images/galera2.jpg', title: 'Imagem 2' },
    { src: 'assets/images/galera3.jpg', title: 'Imagem 3' },
    { src: 'assets/images/galera4.jpg', title: 'Imagem 4' },
    { src: 'assets/images/galera5.jpg', title: 'Imagem 5' },
    { src: 'assets/images/galera1.jpg', title: 'Imagem 6' },
    { src: 'assets/images/galera2.jpg', title: 'Imagem 7' },
    { src: 'assets/images/galera3.jpg', title: 'Imagem 8' },
    { src: 'assets/images/galera4.jpg', title: 'Imagem 9' },
    { src: 'assets/images/galera5.jpg', title: 'Imagem 10' }
];

const itemsPerPage = 4;
const pageCount = Math.ceil(galleryItems.length / itemsPerPage);
let currentPage = 1;

const renderGalleryItems = () => {
  const galleryItemsElement = document.querySelector(".gallery-items");
  galleryItemsElement.innerHTML = "";

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const itemsToShow = galleryItems.slice(startIndex, endIndex);

  for (let i = 0; i < itemsToShow.length; i++) {
    const galleryItemElement = document.createElement("div");
    galleryItemElement.classList.add("gallery-item");

    const imageElement = document.createElement("img");
    imageElement.src = itemsToShow[i].src;
    galleryItemElement.appendChild(imageElement);

    galleryItemsElement.appendChild(galleryItemElement);
  }
};

const renderPagination = () => {
  const paginationElement = document.querySelector(".pagination");
  paginationElement.innerHTML = "";

  for (let i = 1; i <= pageCount; i++) {
    const pageLinkElement = document.createElement("a");
    pageLinkElement.classList.add("page-link");
    pageLinkElement.textContent = i;

    if (i === currentPage) {
      pageLinkElement.classList.add("active");
    }

    pageLinkElement.addEventListener("click", () => {
      currentPage = i;
      renderGalleryItems();
      renderPagination();
    });

    paginationElement.appendChild(pageLinkElement);
  }
};

renderGalleryItems();
renderPagination();
