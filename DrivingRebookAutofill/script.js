function Controller() {
    const header = document.querySelector('div[class="page-header"]').firstElementChild.innerText
    if (header == "Test date - Car test") {
        // Click show earliest available date
        setTimeout(function(){
            document.querySelector('input[id="test-choice-earliest"]').click()
        }, 1);

        // Click Continue
        setTimeout(function(){
            document.querySelector('input[id="driving-licence-submit"]').click()
        }, 100);
    }
}

Controller()