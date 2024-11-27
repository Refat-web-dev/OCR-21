export function output(container, dataStore, resetCallback) {
    container.innerHTML = ""

    let output_title = document.createElement("h2")
    let wrap = document.createElement("div")
    let output_text = document.createElement("p")
    let row = document.createElement("div")
    let newPhoto = document.createElement("button")
    let copy = document.createElement("button")

    output_title.classList.add("output_title")
    wrap.classList.add("wrap")
    output_text.classList.add("output_text")
    row.classList.add("row")
    newPhoto.classList.add("newPhoto")
    copy.classList.add("copy")

    output_title.innerHTML = "Output"

    output_text.innerHTML = dataStore.text

    // for (let i = 0; i < 50; i++) {
    //     output_text.innerHTML += dataStore.text
    // }

    newPhoto.innerHTML = "Upload new Photo"
    copy.innerHTML = "Copy"

    newPhoto.addEventListener("click", resetCallback);

    copy.addEventListener("click", () => {
        navigator.clipboard.writeText(dataStore.text).then(() => {
            alert("Text copied to clipboard!");
        });
    });

    wrap.append(output_text)
    row.append(copy, newPhoto)
    container.append(output_title, wrap, row)
}