let screenshots = document.querySelectorAll(".project-screenshot")

screenshots.forEach(screenshot => {
    screenshot.addEventListener("mouseover", () => {
        screenshot.classList.add("highlight-screenshot")
    })
})

screenshots.forEach(screenshot => {
    screenshot.addEventListener("mouseout", () => {
        screenshot.classList.remove("highlight-screenshot")
    })
})


