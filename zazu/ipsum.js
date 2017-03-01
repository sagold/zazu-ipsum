const ipsum = require("../lib/ipsum");
const templateWords = require("../lib/template").words;

module.exports = (pluginContext) => { // eslint-disable-line

    /**
     * @async
     * @param  {String} query   - min max combination of values and type of words
     * @return {Array} list of ipsum versions
     */
    return function (queryString) {
        let pool;
        const query = queryString.trim()
            .split(" ")
            .map((str) => {
                if (templateWords[str]) {
                    pool = templateWords[str];
                    return "";
                }
                const val = parseInt(str);
                if (isNaN(val)) {
                    return "";
                }
                return val;
            })
            .filter((str) => str !== "");
        pool = pool || templateWords.default;

        return Promise.resolve([
            {
                id: 0,
                title: "words",
                value: ipsum.words(query[0] || 5, query[1] || 12, pool)
            },
            {
                id: 1,
                title: "sentence",
                value: ipsum.sentence(query[0] || 5, query[1] || 12, pool)
            },
            {
                id: 2,
                title: "paragraph",
                value: ipsum.paragraph(query[0] || 8, query[1] || 12, query[2] || 3, query[3] || 8, pool)
            },
            {
                id: 3,
                title: "paragraphs",
                value: ipsum.paragraphs(query[0] || 4, query[1] || 8, query[2] || 12, query[3] || 3, query[4] || 8, pool)
            },
            {
                id: 4,
                title: "html paragraphs",
                value: ipsum.htmlParagraphs(query[0] || 4, query[1] || 8, query[2] || 12, query[3] || 3, query[4] || 8, pool)
            }
        ]);
    };
};
