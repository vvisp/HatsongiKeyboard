window.onload = function () {
    const keyboard = document.getElementById("keyboard");
    const textbox = document.getElementById("textbox");
    line = document.getElementById("line");
    selectedGlyph = document.getElementById("pineapple");

    makeNewKey("Vu", "images/29) vu.png");
    makeNewKey("Long Vowel", "images/0c) Long Vowel, Horizontal.png");
    makeNewKey("Space", "");
    
    const keyDelete = document.getElementById("keyDelete");
    keyDelete.onclick = function () {
        selectedGlyph.remove();
    };
    
    const keyNewLine = document.getElementById("keyNewLine");
    keyNewLine.onclick = function () {
        makeNewLine()
    };
}

function makeNewKey(keyLabel, imagePath) {
    const key = document.createElement("button");
    key.className = "key";
    key.onclick = function () {
        makeNewGlyph(imagePath)
    };

    key.appendChild(document.createTextNode(keyLabel));
    keyboard.appendChild(key);
}

function select(glyph) {
    selectedGlyph.style.background = "white";
    selectedGlyph = glyph
    selectedGlyph.style.background = "lightblue";
}

function makeNewGlyph(image) {
    const newGlyph = document.createElement("div");
    select(newGlyph)
    newGlyph.onclick = function () {
        select(newGlyph)
    };

    if (image) {
        newGlyph.className = "glyph";
        const glyphImage = document.createElement("img");
        glyphImage.src = image;
        newGlyph.appendChild(glyphImage);
    }
    else {
        newGlyph.className = "space";
    }
    
    line.appendChild(newGlyph);
}

function makeNewLine() {
    const newLine = document.createElement("div");
    newLine.className = "line";
    line = newLine
    
    textbox.appendChild(newLine);
}