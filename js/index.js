window.onload = function () {
    const keyboard = document.getElementById("keyboard");
    const tabs = document.getElementById("tabs");
    const pages = document.getElementById("pages");
    const voiceless = document.getElementById("voiceless");
    const voiced = document.getElementById("voiced");
    const textbox = document.getElementById("textbox");
    currentLine = document.getElementById("line");
    selectedGlyph = document.getElementById("pineapple");
    glyphCategories = {
        voiceless: {
            page: voiceless,
            label: "Voiceless",
            glyphTypes: {
                fu: {label: "Fu", id: "fu", image: "images/24) fu.png",},
                longVowel: {label: "Long Vowel", id: "long vowel", image: "images/0c) Long Vowel, Horizontal.png",},
            },
        },
        voiced: {
            page: voiced,
            label: "Voiced",
            glyphTypes: {
                vu: {label: "Vu", id: "vu", image: "images/29) vu.png",},
            },
        },
    };

    for (let element in glyphCategories) {
        makeNewKey(tabs, glyphCategories[element].label, switchPage, glyphCategories[element].page)
    }
    
    makeNewKey(tabs, "New Line", makeNewLine);
    makeNewKey(tabs, "Delete", deleteSelectedGlyph);
    fillPage(glyphCategories.voiceless)
    fillPage(glyphCategories.voiced)

    switchPage(voiceless)
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
    const key = document.createElement("button");
    key.className = "key";
    key.onclick = function () {
        func(parameter)
    };

    key.appendChild(document.createTextNode(label));
    location.appendChild(key);
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
