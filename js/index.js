window.onload = function () {
    const keyboard = document.getElementById("keyboard");
    const tabs = document.getElementById("tabs");
    const pages = document.getElementById("pages");
    const voiceless = document.getElementById("voiceless");
    const voiced = document.getElementById("voiced");
    const textbox = document.getElementById("textbox");
    currentLine = document.getElementById("line");
    selectedGlyph = document.getElementById("pineapple");
    glyphTypes = {
        Voiceless: {
            Fu: {label: "Fu", id: "fu", image: "images/24) fu.png",},
            LongVowel: {label: "Long Vowel", id: "long vowel", image: "images/0c) Long Vowel, Horizontal.png",},
        },
        Voiced: {
            Vu: {label: "Vu", id: "vu", image: "images/29) vu.png",},
        },
    };

    for (let glyphType in glyphTypes.Voiceless) {
        makeNewKey(voiceless, glyphTypes.Voiceless[glyphType].label, makeNewGlyph, glyphTypes.Voiceless[glyphType])
    }

    for (let glyphType in glyphTypes.Voiced) {
        makeNewKey(voiced, glyphTypes.Voiced[glyphType].label, makeNewGlyph, glyphTypes.Voiced[glyphType])
    }
    
    makeNewKey(tabs, "Voiceless", switchPage, voiceless);
    makeNewKey(tabs, "Voiced", switchPage, voiced);
    makeNewKey(tabs, "New Line", makeNewLine);
    makeNewKey(tabs, "Delete", deleteSelectedGlyph);

    switchPage(voiceless)
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
