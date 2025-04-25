// вып. меню
function Dropdown() {
    document.getElementById("dropdownMenu").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropdown_btn')) {
        const dropdowns = document.getElementsByClassName("content");
        for (let i = 0; i < dropdowns.length; i++) {
            const currentDropdown = dropdowns[i];
            if (currentDropdown.classList.contains('show')) {
                currentDropdown.classList.remove('show');
            }
        }
    }
}
// вып. меню

// аккордион
const questionItems = document.getElementsByClassName("question");

for (let i = 0; i < questionItems.length; i++) {
    questionItems[i].addEventListener("click", function () {
        this.classList.toggle("active");

        const answerPanel = this.nextElementSibling;
        answerPanel.style.display = answerPanel.style.display === "block" ? "none" : "block";
    });
}
// аккордион


// слайдер
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
// слайдер
   
   