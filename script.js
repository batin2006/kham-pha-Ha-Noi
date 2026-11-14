
function update(PreviewPic) {

    console.log("Update event activated!");

    console.log("Alt:", PreviewPic.alt);
    console.log("Source:", PreviewPic.src);

    let image = document.getElementById("image");

    image.textContent = PreviewPic.alt;

    image.style.backgroundImage = "url('" + PreviewPic.src + "')";
}


function undo() {

    let image = document.getElementById("image");

    image.style.backgroundImage = 'url("")';

    image.textContent =
        "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";

    console.log("Undo event activated!");
}


// Hàm thêm tabindex cho tất cả hình ảnh
function addTabFocus() {

    console.log("Page loaded!");

    let images = document.querySelectorAll(".gallery img");

    for (let i = 0; i < images.length; i++) {

        images[i].setAttribute("tabindex", "0");

        console.log("Tabindex added to:", images[i].alt);
    }
}
