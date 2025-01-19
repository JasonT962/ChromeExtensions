function Controller() {
    // Driving licence number input
    setTimeout(function(){
        chrome.storage.local.get(['currentlicencenumber'], (data) => {
            document.querySelector('input[id="driving-licence-number"]').value = data.currentlicencenumber
        })
    }, 1);

    // Driving test reference number
    setTimeout(function(){
        chrome.storage.local.get(['currentreferencenumber'], (data) => {
            document.querySelector('input[id="application-reference-number"]').value = data.currentreferencenumber
        })
    }, 1);

    // Click continue button
    setTimeout(function(){
        document.querySelector('input[id="booking-login"]').click()
    }, 100);
}

Controller()