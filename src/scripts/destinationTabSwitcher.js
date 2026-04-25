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
            button.classList = "active";
        } else {
            button.classList = "";
        }
    })
}

function loopImages() {
    images.forEach((button) => {
        if (button.getAttribute('data-id') === currentIndex) {
            button.classList = "destination__image";
        } else {
            button.classList = "destination__image hidden";
        }
    })
}

function loopDetails() {
    destinationDetails.forEach((button) => {
        if (button.getAttribute('data-id') === currentIndex) {
            button.classList = "destination__detail column";
        } else {
            button.classList = "destination__detail hidden";
        }
    })
}

function updateDetailsPage() {
    loopButtons();
    loopImages();
    loopDetails();
}
