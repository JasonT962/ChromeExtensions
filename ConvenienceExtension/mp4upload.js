// Skips payment options and goes to free download
setTimeout(function() {
    document.querySelector('input[id="method_free"]').click()
}, 1)

// Removes / hides the countdown
setTimeout(function() {
    document.querySelector('div[id="countdown"]').setAttribute("style","display: none;")
}, 1)

// Shows the download button
setTimeout(function() {
    document.querySelector('div[class*="download-btn mb-4"]').removeAttribute("style")
}, 1)

// Enables the download button
setTimeout(function() {
    document.querySelector('button[id="downloadbtn"]').removeAttribute("disabled")
}, 500)