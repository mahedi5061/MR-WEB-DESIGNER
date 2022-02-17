document.querySelector(".open-button").onclick = () => {
  document.querySelector(".cookies-box").classList.add("active");
};

document.querySelector(".close-btn").onclick = () => {
  document.querySelector(".cookies-box").classList.remove("active");
};
