const hamburger = document.querySelector("#hamburger")
const sidebar = document.querySelector("#sidebar")
const darkFg = document.querySelector("#darkFg")
const closeBtn = document.querySelector("#closeBtn")

hamburger?.addEventListener("click", () => {
  sidebar?.classList.add("open")
  darkFg?.classList.add("open")
})

closeBtn?.addEventListener("click", () => {
  sidebar?.classList.remove("open")
  darkFg?.classList.remove("open")
})
