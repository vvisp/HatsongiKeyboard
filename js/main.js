window.onload = function () {
    const keyboard = document.getElementById("keyboard");
    const tabs = document.getElementById("tabs");
    const pages = document.getElementById("pages");
    const textbox = document.getElementById("textbox");
    selectedCharacter = document.getElementById("pineapple");
    currentLine = document.getElementById("line");
    currentDirection = "horizontal";

    for (let element in glyphCategories) {
        makeNewPage(glyphCategories[element])
        fillPage(glyphCategories[element])
    }

    makeNewKey(tabs, "Enter", makeNewLine);
    makeNewKey(tabs, "Delete", deleteSelectedCharacter);
    makeNewKey(tabs, "Direct.", changeDirection);
    makeNewKey(tabs, "Base", changeToBase);
    makeNewKey(tabs, "Voice.", changeToVoiced);
    makeNewKey(tabs, "Palat.", changeToPalatal);
    makeNewKey(tabs, "V.P.", changeToVoicedPalatal);
}

function changeDirection() {
    let allCharacters = document.querySelectorAll(".character")

    if (currentDirection == "horizontal") {
        currentDirection = "vertical";
        style.textContent = ".textbox{flex-direction: row;} .line{flex-direction: column;}";

        for (let index = 0; index < allCharacters.length; index++) {
            const element = allCharacters[index];
            const image = element.children[0]
            if (element.hasAttribute("verticalForm")) {
                image.src = element.getAttribute("verticalForm")
            }
            image.className = "vertical"
        }
    }
    else if (currentDirection == "vertical") {
        currentDirection = "horizontal";
        style.textContent = ".textbox{flex-direction: column;} .line{flex-direction: row;}";

        for (let index = 0; index < allCharacters.length; index++) {
            const element = allCharacters[index];
            const image = element.children[0]
            if (element.hasAttribute("horizontalForm")) {
                image.src = element.getAttribute("horizontalForm")
            }
            image.className = "horizontal"
        }
    }
}

function makeNewPage(category) {
    const newPage = document.createElement("div");
    newPage.id = category.id;
    newPage.className = "page";
    pages.appendChild(newPage);
}

function fillPage(category) {
    for (let index = 0; index < category.glyphs.length; index++) {
        const glyph = category.glyphs[index];
        makeNewKey(
            document.getElementById(category.id),
            glyph.label,
            drawCharacter,
            {category: category, glyph: glyph,},
        )
    }
}

function makeNewKey(location, label, func, parameters) {
    const newKey = document.createElement("button");
    newKey.className = "key";
    newKey.onclick = function () {
        func(parameters)
        
        let array = Array.from(document.querySelectorAll(".open"))
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            element.classList.remove("open")
        }
        newKey.classList.add("open")
    };

    newKey.appendChild(document.createTextNode(label));
    location.appendChild(newKey);
}

function select(character) {
    selectedCharacter.style.background = "white";
    selectedCharacter = character
    selectedCharacter.style.background = "lightblue";

    currentLine = selectedCharacter.parentElement
}

function drawCharacter(parameters) {
    const newCharacter = document.createElement("div");
    newCharacter.setAttribute("glyphCategory", parameters.category.id);
    newCharacter.onclick = function () {
        select(newCharacter)
    };

    let startingImage = parameters.glyph.image

    if (parameters.glyph.vertical) {
        newCharacter.setAttribute("horizontalForm", parameters.glyph.image);
        newCharacter.setAttribute("verticalForm", parameters.glyph.vertical);

        if (currentDirection == "vertical") {
            startingImage = parameters.glyph.vertical
        }
    } else {
        newCharacter.setAttribute("baseForm", parameters.glyph.image);
    }

    if (parameters.glyph.voiced) {
        newCharacter.setAttribute("voicedForm", parameters.glyph.voiced);
    }

    if (parameters.glyph.palatal) {
        newCharacter.setAttribute("palatalForm", parameters.glyph.palatal);
    }

    if (parameters.glyph.voicedPalatal) {
        newCharacter.setAttribute("voicedPalatalForm", parameters.glyph.voicedPalatal);
    }

    if (parameters.glyph) {
        newCharacter.className = "character";
        const characterImage = document.createElement("img");
        if (currentDirection == "horizontal") {
            characterImage.className = "horizontal"
        } else if (currentDirection == "vertical") {
            characterImage.className = "vertical"
        }
        
        characterImage.src = startingImage;
        newCharacter.appendChild(characterImage);

        characterImage.onload = function () {
            characterImage.style.width = 0.5*characterImage.naturalWidth + "px"
            characterImage.style.height = 0.5*characterImage.naturalHeight + "px"
            newCharacter.style.padding = 0.5*10 + "px"
            newCharacter.style.display = "flex"
        };
    }
    
    currentLine.appendChild(newCharacter);
    select(newCharacter)
}

function changeToBase() {
    if (selectedCharacter.hasAttribute("baseForm")) {
        selectedCharacter.children[0].src = selectedCharacter.getAttribute("baseForm")
    }
}

function changeToVoiced() {
    if (selectedCharacter.hasAttribute("voicedForm")) {
        selectedCharacter.children[0].src = selectedCharacter.getAttribute("voicedForm")
    }
}

function changeToPalatal() {
    if (selectedCharacter.hasAttribute("palatalForm")) {
        selectedCharacter.children[0].src = selectedCharacter.getAttribute("palatalForm")
    }
}

function changeToVoicedPalatal() {
    if (selectedCharacter.hasAttribute("voicedPalatalForm")) {
        selectedCharacter.children[0].src = selectedCharacter.getAttribute("voicedPalatalForm")
    }
}

function makeNewLine() {
    const newLine = document.createElement("div");
    newLine.className = "line";

    textbox.appendChild(newLine);
    currentLine = newLine
}

function deleteSelectedCharacter() {
    let character = selectedCharacter

    let array = Array.from(document.querySelectorAll(".character"))
    let previousCharacter = array[array.indexOf(character) - 1]
    if (previousCharacter) {
        select(previousCharacter)
    }
    
    character.remove();
}