document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".category-item img");
  const modal = document.querySelector(".image-modal");
  const modalImg = document.querySelector(".modal-img");
  const modalTitle = document.querySelector(".modal-text h2");
  const modalDesc = document.querySelector(".modal-text p");
  const closeBtn = document.querySelector(".close");

  images.forEach((img) => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.src;
      modalTitle.textContent = img.dataset.title || "Category";
      modalDesc.textContent = img.dataset.description || "No description available.";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
