const fs = require("fs");
const string = "bacon ipsum dolor amet ribeye shankle beef chuck doner frankfurter swine salami porchetta t-bone sausage capicola ham shoulder corned picanha shank jowl strip steak hamburger leberkas turducken spare ribs kielbasa jerky chicken pancetta hock pig pork filet mignon ball tip meatloaf tongue brisket turkey biltong flank fatback loin prosciutto boudin meatball cupim jowl kevin short rump belly ground round tri-tip bresaola tail burgdoggen andouille chop alcatra cow tongue venison sirloin drumstick tenderloin shoulder pastrami pancetta landjaeger";

const wordmap = {};
string
    .replace(/\n/g, "")
    .split(/[,. ]/)
    .filter((str) => str !== "")
    .map((str) => str.trim().toLowerCase())
    .sort()
    .forEach((str) => (wordmap[str] = true));

fs.writeFileSync("words.json", JSON.stringify(Object.keys(wordmap).join(" ")));
