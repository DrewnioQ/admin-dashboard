const hamburger: HTMLDivElement | null = document.querySelector("#hamburger")
const sidebar: HTMLDivElement | null = document.querySelector("#sidebar")
const darkFg: HTMLDivElement | null = document.querySelector("#darkFg")
const closeBtn: HTMLDivElement | null = document.querySelector("#closeBtn")

if (hamburger && sidebar && darkFg && closeBtn) {
  hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("open")
    darkFg.classList.toggle("open")
  })

  closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open")
    darkFg.classList.toggle("open")
  })
}
