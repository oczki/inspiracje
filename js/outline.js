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

function initOutline() {
    window.addEventListener("keydown", handleKeyboardInput);

    let outlineCss = "";
    for (let c of containers) {
        let buttonId = prevButtonId(c.type);
        outlineCss += `body.show-outline button#${buttonId}:focus { outline-color: ${c.color}; } `;
    }
    applyCss(outlineCss);
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