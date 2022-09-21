const main = document.querySelector('.main'),
    qrInput = main.querySelector('.form input'),
    generateBtn = main.querySelector('.form button'),
    qrImg = main.querySelector('.qr-code img');

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();
    if (!qrInput) return;
    generateBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    qrImg.addEventListener("load", () => {

        main.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
});

qrInput.addEventListener("keyup", () => {
    if (!qrInput.value) {
        main.classList.remove("active");
    }
});
