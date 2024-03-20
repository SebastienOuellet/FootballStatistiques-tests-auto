"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveFile = void 0;
const fs_1 = require("fs");
async function saveFile(filename, content) {
    return new Promise(resolve => {
        (0, fs_1.writeFile)(filename, content, err => {
            if (err) {
                console.error(err);
                throw new Error('Impossible de créer le fichier');
            }
            // fichier écrit avec succès
            resolve({ success: true });
        });
    });
}
exports.saveFile = saveFile;
