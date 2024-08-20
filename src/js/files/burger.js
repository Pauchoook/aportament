export default function burger() {
  const burgerBtn = document.querySelector("#btn-burger");
  const burger = document.querySelector("#burger");

  burgerBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    if (burger.classList.contains("open")) {
      handleClose();

    } else {
      burger.classList.add("open");
      burgerBtn.classList.add("active");
    }

    document.body.classList.add("body-hidden");

    burger.addEventListener("click", (e) => e.stopPropagation());

    document.body.addEventListener("click", handleClose);
  });

  function handleClose() {
    burger.classList.remove("open");
    document.body.classList.remove("body-hidden");
    burgerBtn.classList.remove("active");

    document.body.removeEventListener("click", handleClose);
  }
}