import { description } from "./modules/description.js"
import { output } from "./modules/output.js"
import { preview } from "./modules/preview.js"
import { upload_process } from "./modules/upload_process.js"

function handleProcess() {
    const fileInput = document.getElementById("fileInput");
    const languageSelect = document.getElementById("languages");

    if (!fileInput.files[0]) {
        alert("Please upload an image.");
        return;
    }

    if (!languageSelect.value || languageSelect.value === "language") {
        alert("Please select a language.");
        return;
    }


    left.classList.add("processed_width")
    right.classList.add("processed_width")

    const selectedLanguage = languageSelect.value;
    const selectedFile = URL.createObjectURL(fileInput.files[0]);

    dataStore.img = selectedFile;
    dataStore.language = selectedLanguage;

    preview(left_container, dataStore.img);
    output(right, dataStore, uploadNewPhoto);
}

function uploadNewPhoto() {
    left.classList.remove("processed_width")
    right.classList.remove("processed_width")
    description(left_container)
    upload_process(right)

    document.querySelector(".process").addEventListener("click", handleProcess);
}

let dataStore = {
    img: null,
    language: null,
    text: "Konspekt (lot. Conspectus — taqriz) — biror narsa mazmunining qisqacha yozma xulosasi boʻlib, faktik materiallar bilan toʻldirilgan reja va tezislardan iborat boʻlib, ular birgalikda kitob, maqola mazmunining qisqacha yozma xulosasi, ma'ruza va boshqalar. ", // Шаблонный текст
};

let left = document.querySelector(".left")

let left_container = document.querySelector(".description")
description(left_container)

let right = document.querySelector(".right")
upload_process(right)

document.querySelector(".process").addEventListener("click", handleProcess);
