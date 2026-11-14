function update(PreviewPic) {

    // Bước 1: Kiểm tra sự kiện
    console.log("Sự kiện update đã được kích hoạt!");

    // Bước 2: Kiểm tra alt và source của hình ảnh
    console.log("Alt:", PreviewPic.alt);
    console.log("Source:", PreviewPic.src);

    // Bước 3: Lấy phần tử có id="image"
    let image = document.getElementById("image");

    // Bước 4: Thay đổi nội dung văn bản
    image.textContent = PreviewPic.alt;

    // Bước 5: Thay đổi hình nền
    image.style.backgroundImage = "url('" + PreviewPic.src + "')";
}


// Hàm hoàn tác
function undo() {

    // Lấy phần tử có id="image"
    let image = document.getElementById("image");

    // Khôi phục hình nền ban đầu
    image.style.backgroundImage = 'url("")';

    // Khôi phục nội dung ban đầu
    image.textContent = "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";
}
