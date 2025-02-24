document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('alertBtn').addEventListener('click', function () {
        alert('Hello from JavaScript!');
    });
    document.getElementById('secBtn').addEventListener('click', function () {
        alert('Hello from Second Button!');
    });
    document.getElementById('changeCar').addEventListener('click', function () {
        const img = document.getElementById('carImg');
        const browseImg = document.getElementById('browseImg')
        browseImg.href = img.src
        if (img.src.includes('caranddriver')) {
            img.src = 'https://www.caranddriver.com/blog/wp-content/uploads/2018/09/Tesla-Model-S-front-view-640x426.jpg';
            browseImg.href = img.src
        } else {
            img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY83t3YTEhZUvNlbFV8tv89iMYquZu93NuBQ&s';
            browseImg.href = img.src
        }
    });
});