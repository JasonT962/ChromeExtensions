function Controller() {
    const header = document.querySelector('div[class="page-header"]').firstElementChild.innerText
    if (header == "Choose type of test") {
        TypeOfTest()
    }
    else if (header == "Licence details - Car test") {
        LicenceDetails()
    }
    else if (header == "Test date - Car test") {
        TestDate()
    }
    else if (header == "Test centre - Car test") {
        TestCentre()
    }
}
Controller()

function TypeOfTest() {
    setTimeout(function(){
        document.querySelector('input[id="test-type-car"]').click()
    },1);
}

function LicenceDetails() {
    // Driving licence number input
    setTimeout(function(){
        chrome.storage.local.get(['currentlicencenumber'], (data) => {
            document.querySelector('input[id="driving-licence"]').value = data.currentlicencenumber
        })
    }, 1);

    // Special requirements input (clicks No)
    setTimeout(function(){
        document.querySelector('input[id="special-needs-none"]').click()
    }, 1);

    setTimeout(function(){
        document.querySelector('input[id="driving-licence-submit"]').click()
    }, 100);
}

function getFormattedDate(date) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2);
    return `${day}/${month}/${year}`;
}

function TestDate() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const formattedDate = getFormattedDate(tomorrow);

    // Sets date to tomorrow
    setTimeout(function(){
        document.querySelector('input[id="test-choice-calendar"]').value = formattedDate
    }, 1);

    setTimeout(function(){
        document.querySelector('input[id="driving-licence-submit"]').click()
    }, 100);
}

function TestCentre() {
    // Postcode input
    setTimeout(function(){
        chrome.storage.local.get(['currentpostcode'], (data) => {
            document.querySelector('input[id="test-centres-input"]').value = data.currentpostcode
        })
    }, 1);

    // If there are no search results then click search (prevents infinite clicking search)
    setTimeout(function(){
        if (document.querySelector('section[id="search-results"]') == null) {
            document.querySelector('input[id="test-centres-submit"]').click()
        }
    }, 100);
}