// Removes the nsfw bundle including nsfw login pop ups
document.querySelector('shreddit-async-loader[bundlename=desktop_rpl_nsfw_blocking_modal]').remove()

// Removes the mature content and login pop up
setTimeout(function(){
    document.querySelector('xpromo-nsfw-blocking-container').shadowRoot.querySelector('div[class="prompt "]').remove()
});

// Presses the Show NSFW button
setTimeout(function(){
    document.querySelector('shreddit-blurred-container').shadowRoot.querySelector('button').click()
});

setTimeout(function(){
    // Removes the scroll lock
    document.querySelector('body').setAttribute("style", "--viewport-height:200px;")
},100);

setTimeout(function(){
    // Removes the blur if it hasn't already been removed
    document.querySelector('div[class*="sidebar-grid"]').removeAttribute("style")
},100);