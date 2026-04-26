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
            button.classList = "page textpreset4 active";
        } else {
            button.classList = "page textpreset4";
        }
    })
}

function loopList() {
    technologyList.querySelectorAll(".technology__content")?.forEach((technologyMember) => {
        if (technologyMember.getAttribute('data-id') === currentIndex) {
            technologyMember.classList = "technology__content";
        } else {
            technologyMember.classList = "technology__content hidden";
        }
    })
}


function loopImages() {
    images.forEach((button) => {
        if (button.getAttribute('data-id') === currentIndex) {
            button.classList = "technology__image";
        } else {
            button.classList = "technology__image hidden";
        }
    })
}

function updateTechnologyPage() {
    loopButtons();
    loopList();
    loopImages();
}
