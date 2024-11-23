export function description(container) {
    container.innerHTML = ""
    
    let title = document.createElement("h2")
    let p = document.createElement("p")

    title.classList.add('title')

    title.innerHTML = "Upload an image"
    p.innerHTML = "and the system will help figure out what text is in the photo"

    container.append(title, p)
}