const navToggle = document.querySelector(".nav-toggle");

navToggle?.addEventListener("click", () => {
  const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", `${!isExpanded}`);
});
