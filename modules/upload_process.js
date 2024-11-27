let options = ["Language", "Russian", "English", "Узбек тили"]

export function upload_process(container) {
    container.innerHTML = ""

    let right_main = document.createElement("div")
    let h2_upload_image = document.createElement("h2")
    let btns = document.createElement("div")
    let row = document.createElement("div")
    let custom_upload = document.createElement("label")
    let fileInput = document.createElement("input")
    let select = document.createElement("select")

    for (let opt of options) {
        let option = document.createElement("option")
        option.innerHTML = opt
        option.value = "uzn_Cyrl"
        if (opt === "Language") {
            option.disabled = true
            option.selected = true
        }
        select.append(option)
    }

    let process = document.createElement("button")
    let right_footer = document.createElement("div")
    let right_footer_logo = document.createElement("div")
    let links = document.createElement("div")
    let link1 = document.createElement("a")
    let separator = document.createElement("div")
    let link2 = document.createElement("a")

    right_main.classList.add('right_main')
    btns.classList.add('btns')
    row.classList.add('row')
    custom_upload.classList.add('custom-upload')
    process.classList.add('process')
    right_footer.classList.add('right_footer')
    right_footer_logo.classList.add('right_footer_logo')
    links.classList.add('links')
    separator.classList.add('separator')

    h2_upload_image.innerHTML = "Upload image"
    custom_upload.htmlFor = "fileInput"
    custom_upload.innerHTML = "Upload"
    fileInput.id = 'fileInput'
    fileInput.accept = '.heic, .png, .jpeg, .jpg, .pdf'
    fileInput.type = 'file'
    select.id = 'languages'
    select.name = 'languages'
    process.innerHTML = 'Process'
    right_footer_logo.innerHTML = 'Photo recognizer'
    link1.innerHTML = 'Terms of use'
    link1.href = '#'
    separator.innerHTML = '|'
    link2.innerHTML = 'Students about'
    link2.href = '#'

    right_main.append(h2_upload_image, btns)
    btns.append(row, process)
    row.append(custom_upload, fileInput, select)
    right_footer.append(right_footer_logo, links)
    links.append(link1, separator, link2)
    container.append(right_main, right_footer)
}