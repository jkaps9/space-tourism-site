const crewList = document.querySelector(".crew-members");
let currentIndex = crewList?.getAttribute('data-current-id');
const tabButtons = document.querySelectorAll("button.page");
    
if (currentIndex && tabButtons) {
    tabButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (currentIndex !== button.getAttribute('data-id')) {
                currentIndex = button.getAttribute('data-id');
                updateCrewPage();
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
    crewList.querySelectorAll(".crew-member")?.forEach((crewMember) => {
        if (crewMember.getAttribute('data-id') === currentIndex) {
            crewMember.classList.remove('hidden');
        } else {
            crewMember.classList.add('hidden');
        }
    })
}

function updateCrewPage() {
    loopButtons();
    loopList();
}
