export function preview(container, img) {
    container.innerHTML = ""

    let preview = document.createElement("div")
    let uploaded_image = document.createElement("img")

    preview.id = "preview"
    uploaded_image.src = img
    uploaded_image.alt = "Preview"
    uploaded_image.style.width = "100%"

    preview.append(uploaded_image)
    container.append(preview)
}