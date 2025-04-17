/* при нажатии на кнопку, переключение мжд скрытием и отображением раскр. содержимого */
function myFunction() {
    document.getElementById("dropdownn").classList.toggle("show")
}

/* закрыть вып.меню, если щелкает за пределами */
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown_content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


var acc = document.getElementsByClassName("question");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");


        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

// slider
const slides = document.querySelectorAll('.slide')
let currentIndex = 0;

slides[currentIndex].classList.add('active')

document.getElementById('next').addEventListener('click', () => {
    slides[currentIndex].classList.remove('active')

    if (currentIndex === slides.length - 1) {
        currentIndex = 0
    } else {
        currentIndex++
    }
    slides[currentIndex].classList.add('active')

})

document.getElementById('prev').addEventListener('click', () => {
    slides[currentIndex].classList.remove('active')

    if (currentIndex === 0) {
        currentIndex = slides.length - 1
    } else {
        currentIndex--
    }
    slides[currentIndex].classList.add('active')
})

// slider