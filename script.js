let count = 0;
document.getElementById("btn").addEventListener("click", () => {
  count = add(count, 1);
  document.getElementById("count").textContent = count;
});