window.onload = function () {
    const keyboard = document.getElementById("keyboard");
    const textbox = document.getElementById("textbox");
    currentLine = document.getElementById("line");
    selectedGlyph = document.getElementById("pineapple");
    const glyphTypes = {
        Fu: {label: "Fu", id: "fu", image: "images/24) fu.png",},
        Vu: {label: "Vu", id: "vu", image: "images/29) vu.png",},
        LongVowel: {label: "Long Vowel", id: "long vowel", image: "images/0c) Long Vowel, Horizontal.png",},
    };

    for (let glyphType in glyphTypes) {
        console.log(glyphTypes[glyphType].label);
        makeNewKey(glyphTypes[glyphType].label, makeNewGlyph, glyphTypes[glyphType])
    }
    
    makeNewKey("Space", makeNewGlyph);
    makeNewKey("New Line", makeNewLine);
    makeNewKey("Delete", deleteSelectedGlyph);
    makeNewKey("Change", changeSelectedImage, glyphTypes.LongVowel);
}

function makeNewKey(keyLabel, func, glyphType) {
    const key = document.createElement("button");
    key.className = "key";
    key.onclick = function () {
        func(glyphType)
    };

    key.appendChild(document.createTextNode(keyLabel));
    keyboard.appendChild(key);
}

function select(glyph) {
    selectedGlyph.style.background = "white";
    selectedGlyph = glyph
    selectedGlyph.style.background = "lightblue";
}

function makeNewGlyph(glyphType) {
    const newGlyph = document.createElement("div");
    select(newGlyph)
    newGlyph.onclick = function () {
        select(newGlyph)
    };

    if (glyphType) {
        newGlyph.className = "glyph";
        const glyphImage = document.createElement("img");
        glyphImage.src = glyphType.image;
        newGlyph.appendChild(glyphImage);
    }
    else {
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

function changeSelectedImage(glyphType) {
    selectedGlyph.children[0].src = glyphType.image
}
