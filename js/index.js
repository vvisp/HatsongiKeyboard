window.onload = function () {
    const keyboard = document.getElementById("keyboard");
    const tabs = document.getElementById("tabs");
    const pages = document.getElementById("pages");
    const textbox = document.getElementById("textbox");
    const mango = document.getElementById("mango");
    const style = document.getElementById("style");
    selectedGlyph = document.getElementById("pineapple");
    currentLine = document.getElementById("line");
    currentDirection = "horizontal";

    glyphCategories = {
        voiceless: {
            label: "Voiceless",
            id: "voiceless",
            page: mango,
            glyphTypes: {
                fu: {label: "Fu", id: "fu", image: "images/24) fu.png",},
                ke: {label: "Ke", id: "ke", image: "images/42) ke.png",},
            },
        },
        voiced: {
            label: "Voiced",
            id: "voiced",
            page: mango,
            glyphTypes: {
                vu: {label: "Vu", id: "vu", image: "images/29) vu.png",},
                ge: {label: "Ge", id: "ge", image: "images/47) ge.png",},
            },
        },
        symbols: {
            label: "Symbols",
            id: "symbols",
            page: mango,
            glyphTypes: {
                longVowelH: {label: "Long Vowel H", id: "long vowel h", image: "images/0c) Long Vowel, Horizontal.png",},
                longVowelV: {label: "Long Vowel V", id: "long vowel v", image: "images/0d) Long Vowel, Vertical.png",},
            },
        },
    };
    
    for (let element in glyphCategories) {
        makeNewPage(glyphCategories[element])
        makeNewKey(tabs, glyphCategories[element].label, switchPage, glyphCategories[element].page)
        fillPage(glyphCategories[element])
    }

    makeNewKey(tabs, "New Line", makeNewLine);
    makeNewKey(tabs, "Delete", deleteSelectedGlyph);
    makeNewKey(tabs, "Direction", changeDirection);

    switchPage(voiceless)
}

function changeDirection() {
    if (currentDirection == "horizontal") {
        style.textContent += ".textbox{flex-direction: row;}";
        style.textContent += ".line{flex-direction: column;}";
        currentDirection = "vertical";
    } else if (currentDirection == "vertical") {
        style.textContent += ".textbox{flex-direction: column;}";
        style.textContent += ".line{flex-direction: row;}";
        currentDirection = "horizontal";
    }
}

function makeNewPage(category) {
    const newPage = document.createElement("div");
    newPage.id = category.id;
    newPage.className = "page";
    pages.appendChild(newPage);
    category.page = newPage;
}

function fillPage(category) {
    for (let element in category.glyphTypes) {
        makeNewKey(
            category.page,
            category.glyphTypes[element].label,
            makeNewGlyph,
            category.glyphTypes[element]
        )
    }
}

function switchPage(page) {
    var children = pages.children;
    for (var i = 0; i < children.length; i++) {
        var child = children[i];
        child.style.display = "none"
    };
    page.style.display = "block";
}

function makeNewKey(location, label, func, parameter) {
    const newKey = document.createElement("button");
    newKey.className = "key";
    newKey.onclick = function () {
        func(parameter)
    };

    newKey.appendChild(document.createTextNode(label));
    location.appendChild(newKey);
}

function select(glyph) {
    selectedGlyph.style.background = "white";
    selectedGlyph = glyph
    selectedGlyph.style.background = "lightblue";
}

function makeNewGlyph(glyphType) {
    const newGlyph = document.createElement("div");
    newGlyph.id = glyphType.id
    select(newGlyph)
    newGlyph.onclick = function () {
        select(newGlyph)
    };

    if (glyphType) {
        newGlyph.className = "glyph";
        const glyphImage = document.createElement("img");
        glyphImage.src = glyphType.image;
        newGlyph.appendChild(glyphImage);
    } else {
        newGlyph.className = "space";
    }
    
    currentLine.appendChild(newGlyph);
}

function makeNewLine(string) {
    const newLine = document.createElement("div");
    newLine.className = "line";
    currentLine = newLine
    
    textbox.appendChild(newLine);
}

function deleteSelectedGlyph() {
    selectedGlyph.remove();
}
