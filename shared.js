const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const selectPlanButtons = document.querySelectorAll(".button");
const modalActionNegativeButton = document.querySelector(
  ".modal__action--negative"
);
const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");

function closeModal() {
  // backdrop.style.display = "none";
  // modal.style.display = "none";
  if (modal) modal.classList.remove("open");
  backdrop.classList.remove("open");
}

backdrop.addEventListener("click", function () {
  // mobileNav.style.display = "none";
  mobileNav.classList.remove("open");
  closeModal();
});

if (modalActionNegativeButton)
  modalActionNegativeButton.addEventListener("click", closeModal);

selectPlanButtons.forEach((selectPlanButton) => {
  selectPlanButton.addEventListener("click", (e) => {
    // backdrop.style.display = "block";
    // modal.style.display = "block";

    modal.classList.add("open");
    backdrop.classList.add("open");
  });
});

toggleButton.addEventListener("click", function () {
  // mobileNav.style.display = "block";
  // backdrop.style.display = "block";
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
});
