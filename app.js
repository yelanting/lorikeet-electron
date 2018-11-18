"use strict";
const fileSystem = require("./fileSystem");
const userInterface = require("./userInterface.js");

function main(){
    userInterface.bindDocument(window);
    let folderPath = fileSystem.getUsersHomeFolder();
    userInterface.loadDirectory(folderPath)(window);
}

window.onload = main;