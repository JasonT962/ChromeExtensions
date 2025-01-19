// FlyInc Auto Advance

// Check if the site has the FlyInc logo
function checkFlyIncLogo() {
    const img = document.querySelector('img[src="/safelink.png"]');
    return img;
}

// Finds and clicks button by text
function clickButtonByText(buttonText) {
    const buttons = document.querySelectorAll('button');
  
    for (const button of buttons) {
        if (button.textContent.trim() === buttonText) {
            button.click();
            return;
        }
    }
}

if (checkFlyIncLogo()) {
    setTimeout(function(){
        clickButtonByText("Step 0/2");
        clickButtonByText("Step 1/2");
        clickButtonByText("Step 2/2");
    },15000);
}