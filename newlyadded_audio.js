function playSound(elementId) {
    document.getElementById(elementId).play();
    document.getElementById(elementId).volume = 0.5;
}

function stopSound(elementId) {
    document.getElementById(elementId).pause();
}