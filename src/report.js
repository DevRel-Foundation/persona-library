const fs = require('fs');
const path = require('path');
const args = require('yargs')
    .option('reference', {type: 'array', desc: 'data files to convert'})
    .option('personas', {type: 'array', desc: 'data files to convert'})
    .option('verbose', {type: 'boolean'})
    .argv;

function count_personas() {
    // TODO
    console.log(`There are x total personas.`);
}

function count_reference() {
    // TODO
    console.log(`There are x type resources.`);
}

function main() {
    if (args.personas) {
        count_personas();
    }

    if (args.reference) {
        count_reference();
    }
}

main();