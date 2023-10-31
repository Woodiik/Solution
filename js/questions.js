const questionContainers = document.querySelectorAll(".question-container");

questionContainers.forEach((container) => {
  container.addEventListener("click", () => {
    container.classList.toggle("active");

    const icons = container.querySelectorAll("svg");

    icons[0].style.display = container.classList.contains("active")
      ? "none"
      : "block";
    icons[1].style.display = container.classList.contains("active")
      ? "block"
      : "none";
  });
});
