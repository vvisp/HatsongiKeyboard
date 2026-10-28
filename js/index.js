window.onload = function () {
    const textbox = document.getElementById("textbox")
    var line = document.getElementById("line")

    const keyBlank = document.getElementById("keyBlank");
    keyBlank.onclick = function () {
        makeNewGlyph()
    };
    
    const keyVu = document.getElementById("keyVu");
    keyVu.onclick = function () {
        makeNewGlyph("images/29) vu.png")
    };
    
    const keyLongVowel = document.getElementById("keyLongVowel");
    keyLongVowel.onclick = function () {
        makeNewGlyph("images/0c) Long Vowel, Horizontal.png")
    };
    
    const keyNewLine = document.getElementById("keyNewLine");
    keyNewLine.onclick = function () {
        makeNewLine()
    };
}

function makeNewGlyph(imageQuestion) {
    const newGlyph = document.createElement("div");
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
    newLine.className = "line";
    line = newLine

    textbox.appendChild(newLine);
}