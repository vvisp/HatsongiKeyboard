window.onload = function () {
    const textbox = document.getElementById("textbox")
    var line = document.getElementById("line")

    const glyphButton = document.getElementById("glyphButton");
    glyphButton.onclick = function () {
        makeNewGlyph("")
    };
    
    const glyphButtonVu = document.getElementById("glyphButtonVu");
    glyphButtonVu.onclick = function () {
        makeNewGlyph("images/29) vu.png")
    };
    
    const glyphButtonLongVowelHorizontal = document.getElementById("glyphButtonLongVowelHorizontal");
    glyphButtonLongVowelHorizontal.onclick = function () {
        makeNewGlyph("images/0c) Long Vowel, Horizontal.png")
    };
    
    const lineButton = document.getElementById("lineButton");
    lineButton.onclick = function () {
        makeNewLine()
    };
}

function makeNewGlyph(imageQuestion) {
    const newGlyph = document.createElement("div");
    newGlyph.id = "glyph_id";
    newGlyph.className = "glyph";
    newGlyph.onclick = function () {
        newGlyph.remove()
    };

    if (imageQuestion) {
    const glyphImage = document.createElement("img");
    glyphImage.src = imageQuestion;
    newGlyph.appendChild(glyphImage);
    }

    line.appendChild(newGlyph);
}

function makeNewLine() {
    const newLine = document.createElement("div");
    newLine.id = "line";
    newLine.className = "line";
    line = newLine

    textbox.appendChild(newLine);
}