const ipsum = require("../lib/ipsum");
const template = require("../lib/template");

console.log("1. word (1)");
console.log(ipsum.words(1, 1));

console.log("2. words (4 - 12)");
console.log(ipsum.words(4, 12));

console.log("3. sentence (4 - 12)");
console.log(ipsum.sentence(4, 12));

console.log("4. paragraph (10 - 20)");
console.log(ipsum.paragraph(10, 20));

console.log("5. paragraph beef");
console.log(ipsum.paragraph(6, 12, 3, 6, template.words.beef));

console.log("6. paragraph veggie");
console.log(ipsum.paragraph(6, 12, 3, 6, template.words.veggie));

console.log("7. paragraph primus");
console.log(ipsum.paragraph(6, 12, 3, 6, template.words.primus));

console.log("");
console.log("8. 3 paragraphs");
console.log(ipsum.paragraphs(3));

console.log("");
console.log("8. 3 html paragraphs");
console.log(ipsum.htmlParagraphs(3));

