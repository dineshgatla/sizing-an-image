let imageElement = document.getElementById("image");
let imageWidthElement = document.getElementById("imageWidth");
let warningMessageElement = document.getElementById("warningMessage");
let maxImageWidth = 300;
let minImageWidth = 100;
let orginalImageWidth = 200;
let maxWidthWarningMessage = "Too big. Decrease the size of the Image.";
let minWidthWarningMessage = "Can't visible.Increase the size of the Image.";
imageElement.style.width = orginalImageWidth + "px";
imageWidthElement.textContent = orginalImageWidth + "px";

function onIncrement() {
    if (orginalImageWidth >= maxImageWidth) {
        warningMessageElement.textContent = maxWidthWarningMessage;
    } else {
        orginalImageWidth = orginalImageWidth + 5;
        let updatedImageWidth = orginalImageWidth + "px";
        warningMessageElement.textContent = "";
        imageElement.style.width = updatedImageWidth;
        imageWidthElement.textContent = updatedImageWidth;
    }
}

function onDecrement() {
    if (orginalImageWidth <= minImageWidth) {
        warningMessageElement.textContent = minWidthWarningMessage;
    } else {
        orginalImageWidth = orginalImageWidth - 5;
        let updatedImageWidth = orginalImageWidth + "px";

        warningMessageElement.textContent = "";
        imageElement.style.width = updatedImageWidth;
        imageWidthElement.textContent = updatedImageWidth;
    }
}