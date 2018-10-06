function handleKeyboardInput(e) {
    if (e.keyCode === 9) {
        document.body.classList.add("show-outline");
        window.removeEventListener("keydown", handleKeyboardInput);
        window.addEventListener("mousedown", handleMouseInput);
    }
}

function handleMouseInput() {
    document.body.classList.remove("show-outline");
    window.addEventListener("keydown", handleKeyboardInput);
    window.removeEventListener("mousedown", handleMouseInput);
}

window.addEventListener("keydown", handleKeyboardInput);