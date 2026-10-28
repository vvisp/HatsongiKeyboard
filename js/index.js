window.onload = function () {
    const keyboard = document.getElementById("keyboard");
    const tabs = document.getElementById("tabs");
    const pages = document.getElementById("pages");
    const textbox = document.getElementById("textbox");
    currentLine = document.getElementById("line");
    selectedGlyph = document.getElementById("pineapple");
    const mango = document.getElementById("mango");

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
                longVowel: {label: "Long Vowel", id: "long vowel", image: "images/0c) Long Vowel, Horizontal.png",},
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

    switchPage(voiceless)
}

function makeNewPage(param) {
    const newPage = document.createElement("div");
    newPage.id = param.id;
    newPage.className = "page";
    pages.appendChild(newPage);
    param.page = newPage;
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
