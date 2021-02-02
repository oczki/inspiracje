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

function applyCss(rules) {
    let styleElem = document.createElement("style");
    styleElem.type = "text/css";
    if (styleElem.styleSheet)
        styleElem.styleSheet.cssText = rules;
    else
        styleElem.innerHTML = rules;
    document.head.appendChild(styleElem);
}

function generateOutlineColorCss(id, color) {
    return `body.show-outline button#${id}:focus {
    outline-color: ${color};
}
`;
}

function generatePulseColorCss(id, color) {
    return `@keyframes pulse-${id} {
    0% { box-shadow: 0 0 0 0em ${color}77, var(--button-shadow) }
    100% { box-shadow: 0 0 0 1.5em ${color}00, var(--button-shadow) }
}
`;
}

function initOutline() {
    window.addEventListener("keydown", handleKeyboardInput);

    let css = "";
    for (let c of containers) {
        css += generateOutlineColorCss(prevButtonId(c.type), c.color);
        css += generatePulseColorCss(nextButtonId(c.type), c.color)
    }
    applyCss(css);
}

if (document.readyState != "loading")
    initOutline();
else if (document.addEventListener)
    document.addEventListener("DOMContentLoaded", initOutline);
else
    document.attachEvent("onreadystatechange", function() {
        if (document.readyState == "complete")
            initOutline();
    });