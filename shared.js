const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const selectPlanButtons = document.querySelectorAll(".button");
const modalActionNegativeButton = document.querySelector(
  ".modal__action--negative"
);

backdrop.addEventListener("click", () => {
  backdrop.style.display = "none";
  modal.style.display = "none";
});

modalActionNegativeButton.addEventListener("click", () => {
  backdrop.style.display = "none";
  modal.style.display = "none";
});

selectPlanButtons.forEach((selectPlanButton) => {
  selectPlanButton.addEventListener("click", (e) => {
    backdrop.style.display = "block";
    modal.style.display = "block";
  });
});
