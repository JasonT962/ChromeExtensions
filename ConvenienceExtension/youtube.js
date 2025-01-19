// Change seekbar back to red
const colorHex = "#f03";

function setSeekBarColor() {
    const seekBarElements = document.getElementsByClassName("ytp-play-progress ytp-swatch-background-color");
    const thumbnailElements = document.getElementsByClassName("style-scope ytd-thumbnail-overlay-resume-playback-renderer");
    const scrubberButtonElements = document.getElementsByClassName("ytp-scrubber-button ytp-swatch-background-color");
 
    for (let i = 0; i < seekBarElements.length; i++) {
        seekBarElements[i].style.background = colorHex;
    }
 
    for (let i = 0; i < thumbnailElements.length; i++) {
        thumbnailElements[i].style.background = colorHex;
    }
 
    for (let i = 0; i < scrubberButtonElements.length; i++) {
        scrubberButtonElements[i].style.background = colorHex;
    }
}

setSeekBarColor()