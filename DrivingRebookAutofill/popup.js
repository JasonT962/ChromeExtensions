var licencenumber = document.getElementById("licencenumber")
var referencenumber = document.getElementById("referencenumber")
var postcode = document.getElementById("postcode")

chrome.storage.local.get(['currentlicencenumber', 'currentreferencenumber', 'currentpostcode'], (data) => {
    licencenumber.value = data.currentlicencenumber,
    referencenumber.value = data.currentreferencenumber,
    postcode.value = data.currentpostcode
})

licencenumber.addEventListener('change', function() {
    chrome.storage.local.set({
        currentlicencenumber: licencenumber.value
    })
})

referencenumber.addEventListener('change', function() {
    chrome.storage.local.set({
        currentreferencenumber: referencenumber.value
    })
})

postcode.addEventListener('change', function() {
    chrome.storage.local.set({
        currentpostcode: postcode.value
    })
})

document.getElementById("save1").addEventListener('click', () => {
    chrome.storage.local.set({
        licencenumber1: licencenumber.value,
        referencenumber1: referencenumber.value,
        postcode1: postcode.value
    })
})

document.getElementById("save2").addEventListener('click', () => {
    chrome.storage.local.set({
        licencenumber2: licencenumber.value,
        referencenumber2: referencenumber.value,
        postcode2: postcode.value
    })
})

document.getElementById("save3").addEventListener('click', () => {
    chrome.storage.local.set({
        licencenumber3: licencenumber.value,
        referencenumber3: referencenumber.value,
        postcode3: postcode.value
    })
})

document.getElementById("load1").addEventListener('click', () => {
    chrome.storage.local.get(['licencenumber1', 'referencenumber1', 'postcode1'], (data) => {
        document.getElementById('licencenumber').value = data.licencenumber1;
        document.getElementById('referencenumber').value = data.referencenumber1;
        document.getElementById('postcode').value = data.postcode1;

        licencenumber.dispatchEvent(new Event("change"));
        referencenumber.dispatchEvent(new Event("change"));
        postcode.dispatchEvent(new Event("change"));
    })
})

document.getElementById("load2").addEventListener('click', () => {
    chrome.storage.local.get(['licencenumber2', 'referencenumber2', 'postcode2'], (data) => {
        document.getElementById('licencenumber').value = data.licencenumber2;
        document.getElementById('referencenumber').value = data.referencenumber2;
        document.getElementById('postcode').value = data.postcode2;

        licencenumber.dispatchEvent(new Event("change"));
        referencenumber.dispatchEvent(new Event("change"));
        postcode.dispatchEvent(new Event("change"));
    })
})

document.getElementById("load3").addEventListener('click', () => {
    chrome.storage.local.get(['licencenumber3', 'referencenumber3', 'postcode3'], (data) => {
        document.getElementById('licencenumber').value = data.licencenumber3;
        document.getElementById('referencenumber').value = data.referencenumber3;
        document.getElementById('postcode').value = data.postcode3;

        licencenumber.dispatchEvent(new Event("change"));
        referencenumber.dispatchEvent(new Event("change"));
        postcode.dispatchEvent(new Event("change"));
    })
})