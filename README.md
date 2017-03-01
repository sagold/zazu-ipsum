# Simple zazu lorem ipsum plugin

Generates different versions of _lorem ipsum_ texts. 

## Usage

Type `li` to show a list lorem ipsum texts:

1. words
2. sentence
3. paragraph
4. paragraphs
5. html paragraphs

You can also add a name for the type of li texts `li default`. Options are `default`, `primus`, `beef`, `veggie`.

To modify min max values add min, max values accordingly. i.e. `li beef 3 5`. `li 3 5 beef` should also work, but the
order of numbers is important. @see [./zazu/ipsum.js](./zazu/ipsum.js) for all options. e.g. paragraphs takes most
configuration values: `li 4 12 19 3 4 veggie`.

