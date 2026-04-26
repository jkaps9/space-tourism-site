const destinationList = document.querySelector(".destinations");
let currentIndex = destinationList?.getAttribute('data-current-id');
const tabButtons = document.querySelectorAll(".destination__tab button");
const images = document.querySelectorAll(".destination__image");
const destinationDetails = document.querySelectorAll(".destination__detail");
    
if (currentIndex) {
    tabButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (currentIndex !== button.getAttribute('data-id')) {
                currentIndex = button.getAttribute('data-id');
                updateDetailsPage();
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

function loopImages() {
    images.forEach((button) => {
        if (button.getAttribute('data-id') === currentIndex) {
            button.classList.remove('hidden');
        } else {
            button.classList.add('hidden');
        }
    })
}

function loopDetails() {
    destinationDetails.forEach((button) => {
        if (button.getAttribute('data-id') === currentIndex) {
            button.classList.remove('hidden');;
        } else {
            button.classList.add('hidden');
        }
    })
}

function updateDetailsPage() {
    loopButtons();
    loopImages();
    loopDetails();
}
