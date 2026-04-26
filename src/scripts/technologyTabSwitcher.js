const technologyList = document.querySelector(".technologies");
let currentIndex = technologyList?.getAttribute('data-current-id');
const tabButtons = document.querySelectorAll("button.page");

const images = document.querySelectorAll(".technology__image");
const technologyContent = document.querySelectorAll(".technology__content");
    
if (currentIndex && tabButtons) {
    tabButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (currentIndex !== button.getAttribute('data-id')) {
                currentIndex = button.getAttribute('data-id');
                updateTechnologyPage();
            }
        })
    })
}

    

function loopButtons() {
    tabButtons.forEach((button) => {
        if (button.getAttribute('data-id') === currentIndex) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    })
}

function loopList() {
    technologyList.querySelectorAll(".technology__content")?.forEach((technologyMember) => {
        if (technologyMember.getAttribute('data-id') === currentIndex) {
            technologyMember.classList.remove('hidden');
        } else {
            technologyMember.classList.add('hidden');
        }
    })
}


function loopImages() {
    images.forEach((button) => {
        if (button.getAttribute('data-id') === currentIndex) {
            button.classList.remove('hidden');
        } else {
            button.classList.add('hidden');
        }
    })
}

function updateTechnologyPage() {
    loopButtons();
    loopList();
    loopImages();
}
