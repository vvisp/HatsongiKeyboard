window.onload = function () {
    const keyboard = document.getElementById("keyboard");
    const textbox = document.getElementById("textbox");
    currentLine = document.getElementById("line");
    selectedGlyph = document.getElementById("pineapple");

    makeNewKey("Vu", makeNewGlyph, "images/29) vu.png");
    makeNewKey("Long Vowel", makeNewGlyph, "images/0c) Long Vowel, Horizontal.png");
    makeNewKey("Space", makeNewGlyph);
    makeNewKey("New Line", makeNewLine);
    makeNewKey("Delete", deleteSelectedGlyph);
}

function makeNewKey(keyLabel, func, imagePath) {
    const key = document.createElement("button");
    key.className = "key";
    key.onclick = function () {
        func(imagePath)
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
