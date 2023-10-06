const fs = require("fs");

function createTree(treeHeight) {
    let tree = "";

    for (let i = 0; i < treeHeight; i++) {
        const spaces = " ".repeat(treeHeight - i);
        let stars = "";

        if (i === 0) {
            const centerSpaces = " ".repeat(treeHeight);
            tree += `${centerSpaces}W\n`;
        } else if (i === 1) {
            const centerSpaces = " ".repeat(treeHeight);
            stars = "*";
            tree += `${centerSpaces}${stars}\n`;
        } else {
            if (i % 2 === 0) {
                stars = `* `.repeat(i) + "@";
            } else {
                stars = `@${' *'.repeat(i - 1)}`;
            }
            tree += `${spaces}${stars}\n`;
        }
    }


    const lastRowLength = treeHeight * 2 - 1;
    const centerSpaces = " ".repeat((lastRowLength - 5) / 2);

    tree += `${centerSpaces}TTTTT\n`;
    tree += `${centerSpaces}TTTTT\n`;

    return tree;
}

const treeHeight = 6;
const treeText = createTree(treeHeight);
console.log(treeText);

const filePath = "tree.txt";
fs.writeFileSync(filePath, treeText, "utf-8");
console.log(`Елка создана и записана в файл ${filePath}`);

module.exports = createTree;
