window.onload = function () {
    const textbox = document.getElementById("textbox")
    var line = document.getElementById("line")

    const glyphButton = document.getElementById("glyphButton");
    glyphButton.onclick = function () {
        makeNewGlyph()
    };
    
    const lineButton = document.getElementById("lineButton");
    lineButton.onclick = function () {
        makeNewLine()
    };
}

function makeNewGlyph() {
    const newGlyph = document.createElement("div");
    newGlyph.id = "glyph_id";
    newGlyph.className = "glyph";
    newGlyph.onclick = function () {
        newGlyph.remove()
    };
    
    const glyphImage = document.createElement("img");
    glyphImage.src = "images/29) vu.png";
    newGlyph.appendChild(glyphImage);

    line.appendChild(newGlyph);
}

function makeNewLine() {
    const newLine = document.createElement("div");
    newLine.id = "line";
    newLine.className = "line";
    line = newLine

    textbox.appendChild(newLine);
}