const cards = document.querySelectorAll(".examples-card");
cards.forEach((card) => {
  const button = card.querySelector(".examples-card__button");
  const reservedBlock = card.querySelector(".examples-card__reserved");
  const reservedBackground = card.querySelector(
    ".examples-card__reserved-background"
  );
  const contentSecond = card.querySelector(".examples-card__content-second");
  const guaranteeBlock = card.querySelector(".examples-card__guarantee");
  button.addEventListener("click", () => {
    card.dataset.reserved = "true";
  });
  card.addEventListener("mouseleave", () => {
    if (card.dataset.reserved === "true") {
      contentSecond.classList.add("hidden");
      if (contentSecond.classList.contains("hidden")) {
        guaranteeBlock.style.display = "none";
      }
      reservedBlock.style.display = "block";
      reservedBackground.style.display = "block";
    }

    reservedBackground.addEventListener("click", function () {
      if (card.dataset.reserved === "true") {
        contentSecond.classList.remove("hidden");
        if (
          !contentSecond.classList.contains("hidden") &&
          !guaranteeBlock.classList.contains("hidden")
        ) {
          guaranteeBlock.style.display = "flex";
        }
        reservedBlock.style.display = "none";
        reservedBackground.style.display = "none";
        card.dataset.reserved = "false";
      }
    });

    reservedBlock.addEventListener("click", function () {
      reservedBlock
        .querySelector(".examples-card__reserved-text-accent")
        .addEventListener("click", function (event) {
          event.stopPropagation();
        });
      if (card.dataset.reserved === "true") {
        contentSecond.classList.remove("hidden");
        if (
          !contentSecond.classList.contains("hidden") &&
          !guaranteeBlock.classList.contains("hidden")
        ) {
          guaranteeBlock.style.display = "flex";
        }
        reservedBlock.style.display = "none";
        reservedBackground.style.display = "none";
        card.dataset.reserved = "false";
      }
    });
  });
});
