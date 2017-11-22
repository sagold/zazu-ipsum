const ipsum = require("../lib/ipsum");
const templateWords = require("../lib/template").words;

module.exports = (pluginContext) => { // eslint-disable-line

    /**
     * @async
     * @param  {String} query   - min max combination of values and type of words
     * @return {Array} list of ipsum versions
     */
    return function (queryString, env = {}) {
        env = Object.assign({
            paragraphs: 4,
            sentenceMin: 8,
            sentenceMax: 12,
            wordsMin: 3,
            wordsMax: 8
        }, env);

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
                value: ipsum.words(query[0] || env.wordsMin, query[1] || env.wordsMax, pool)
            },
            {
                id: 1,
                title: "a sentence",
                value: ipsum.sentence(query[0] || 5, query[1] || 12, pool)
            },
            {
                id: 2,
                title: "a paragraph",
                value: ipsum.paragraph(query[0] || 8, query[1] || 12, query[2] || 3, query[3] || 8, pool)
            },
            {
                id: 3,
                title: `${query[0] || 4} paragraphs`,
                value: ipsum.paragraphs(query[0] || 4, query[1] || 8, query[2] || 12, query[3] || 3, query[4] || 8, pool)
            },
            {
                id: 4,
                title: `${query[0] || 4} html paragraphs`,
                value: ipsum.htmlParagraphs(query[0] || 4, query[1] || 8, query[2] || 12, query[3] || 3, query[4] || 8, pool)
            }
        ]);
    };
};
