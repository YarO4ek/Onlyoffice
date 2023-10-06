const fs = require("fs");
const createTree = require('../tree');
describe("createTree", () => {
    it("should create a Christmas tree with the specified height", () => {
        const treeHeight = 7;
        const treeText = createTree(treeHeight);

        // Проверяем, что елка имеет правильное количество строк
        const treeLines = treeText.trim().split("\n");
        expect(treeLines.length).toBe(treeHeight + 2);


        // Проверяем, что последняя строка состоит из "TTTTT"
        const lastLine = treeLines[treeHeight];
        expect(lastLine.trim()).toBe("TTTTT");


    });

    it("should create and write the Christmas tree to a file", () => {
        const treeHeight = 7;
        const filePath = "tree.txt";
        createTree(treeHeight);

        // Проверяем, что файл был создан
        expect(fs.existsSync(filePath)).toBe(true);

        // Проверяем, что содержимое файла соответствует ожиданиям
        const fileContent = fs.readFileSync(filePath, "utf-8");
        expect(fileContent).toEqual(createTree(treeHeight));


    });
});
