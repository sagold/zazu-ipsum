const defaultWords = require("./template").words.default;


function capitaliseFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function randomIndex(max) {
    return Math.round(Math.random() * (max - 1));
}

function randomCount(min, max) {
    return Math.round(max - Math.random() * (max - min));
}


function getWords(min = 5, max = 12, pool = defaultWords) {
    max = Math.max(min, max);
    // console.log(`${min} - ${max}`);
    let count = randomCount(min, max);
    let words = "";
    while (count > 0) {
        words += `${pool[randomIndex(pool.length)]} `;
        count--;
    }
    return words.trim();
}

function getSentence(min = 5, max = 12, pool = defaultWords) {
    return `${capitaliseFirstLetter(getWords(min, max, pool))}.`;
}

function getParagraph(min = 8, max = 12, wordsMin = 3, wordsMax = 8, pool = defaultWords) {
    max = Math.max(min, max);
    let count = randomCount(min, max);
    let sentenceClosed = false;
    const paragraph = [capitaliseFirstLetter(getWords(wordsMin, wordsMax, pool))];

    while (count > 0) {
        const next = getWords(wordsMin, wordsMax, pool);
        if (sentenceClosed && Math.random() > 0.3) {
            paragraph[paragraph.length - 1] += `, ${next}`;
            sentenceClosed = false;

        } else {
            paragraph.push(capitaliseFirstLetter(next));
            sentenceClosed = true;
        }

        count--;
    }

    return `${paragraph.join(". ").trim()}.`;
}

// eslint-disable-next-line max-params
function getParagraphs(paragraphs = 4, minPhrase = 8, maxPhrase = 12, wordsMin = 3, wordsMax = 8, pool = defaultWords) {
    let result = "";
    for (let i = 0; i < paragraphs; i += 1) {
        result += `${getParagraph(minPhrase, maxPhrase, wordsMin, wordsMax, pool)}\n\n`;
    }
    return result.substr(0, result.length - 2);
}

// eslint-disable-next-line max-params, max-len
function getHTMLParagraphs(paragraphs = 4, minPhrase = 8, maxPhrase = 12, wordsMin = 3, wordsMax = 8, pool = defaultWords) {
    let result = "";
    for (let i = 0; i < paragraphs; i += 1) {
        result += `<p>\n${getParagraph(minPhrase, maxPhrase, wordsMin, wordsMax, pool)}\n</p>\n`;
    }
    return result.substr(0, result.length - 1);
}

module.exports = {
    words: getWords,
    sentence: getSentence,
    paragraph: getParagraph,
    paragraphs: getParagraphs,
    htmlParagraphs: getHTMLParagraphs
};
